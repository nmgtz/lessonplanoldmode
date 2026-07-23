var lessonplanSubmit1 = document.getElementById("submit-lesson-plan");

class LessonPlanForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.form = document.getElementById('lessonPlanForm');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.submitBtn = document.getElementById('submit-lesson-plan');
        this.progressFill = document.getElementById('progressFill');
        this.storageKey = 'lessonPlanFormData';
        
        this.initEventListeners();
        this.loadSavedData();
        this.updateProgress();
    }

   initEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextStep());
        this.prevBtn.addEventListener('click', () => this.prevStep());
        // form 'submit' listener removed — #submit-lesson-plan is type="button" now,
        // and the lessonplanSubmit1 click listener at the bottom of this file owns
        // the entire success flow. Do not re-add a submit handler here.
        
        const dateOption = document.getElementById('dateOption');
        const dateInputGroup = document.getElementById('dateInputGroup');
        const dateInput = document.getElementById('date');

        if (dateOption) {
            dateOption.addEventListener('change', function() {
                if (this.value === 'set') {
                    dateInputGroup.style.display = 'block';
                    dateInput.required = true;
                    dateInput.value = new Date().toISOString().split('T')[0];
                } else if (this.value === 'blank') {
                    dateInputGroup.style.display = 'none';
                    dateInput.required = false;
                    dateInput.value = '';
                } else {
                    dateInputGroup.style.display = 'none';
                    dateInput.required = false;
                }
            });
        }
        
        this.form.addEventListener('input', (e) => {
            this.clearError(e.target);
            this.saveFormData();
        });
        this.form.addEventListener('change', (e) => {
            this.clearError(e.target);
            this.saveFormData();
        });

        window.addEventListener('beforeunload', () => {
            this.saveFormData();
        });
    }

    validateStep(step) {
        const currentStepElement = document.querySelector(`.step[data-step="${step}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showError(field, `This field is required`);
                isValid = false;
            } else {
                this.clearError(field);
            }
        });

        if (step === 2) {
            const streamsSelect = document.getElementById('streams');
            const customStreamInput = document.getElementById('customStream');
            
            if (streamsSelect.value === 'custom') {
                if (!customStreamInput.value.trim()) {
                    this.showError(customStreamInput, 'Please enter custom stream name');
                    isValid = false;
                } else if (customStreamInput.value.trim().length > 50) {
                    this.showError(customStreamInput, 'Stream name is too long (max 50 characters)');
                    isValid = false;
                }
            }
            
            const periodTypeSelect = document.getElementById('periodType');
            const periodSelect = document.getElementById('period');
            
            if (periodTypeSelect.value) {
                if (!periodSelect.value) {
                    this.showError(periodSelect, 'Please select a period');
                    isValid = false;
                }
            }
        }

        if (step === 4) {
            const femaleReg = parseInt(document.getElementById('femaleReg').value) || 0;
            const maleReg = parseInt(document.getElementById('maleReg').value) || 0;
            const femalePres = parseInt(document.getElementById('femalePres').value) || 0;
            const malePres = parseInt(document.getElementById('malePres').value) || 0;

            if (femalePres > femaleReg) {
                this.showError(document.getElementById('femalePres'), 'Present girls cannot exceed registered girls');
                isValid = false;
            }

            if (malePres > maleReg) {
                this.showError(document.getElementById('malePres'), 'Present boys cannot exceed registered boys');
                isValid = false;
            }
        }

        return isValid;
    }

   

    showError(field, message) {
        field.classList.add('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    nextStep() {
        if (this.validateStep(this.currentStep)) {
            this.saveFormData();
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.updateStep();
                this.saveCurrentStep();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.saveFormData();
            this.currentStep--;
            this.updateStep();
            this.saveCurrentStep();
        }
    }

    updateStep() {
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });

        document.querySelector(`.step[data-step="${this.currentStep}"]`).classList.add('active');

        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                indicator.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                indicator.classList.add('active');
            }
        });

        document.querySelectorAll('.step-label').forEach((label, index) => {
            label.classList.remove('active');
            if (index + 1 === this.currentStep) {
                label.classList.add('active');
            }
        });

        this.prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
        this.nextBtn.style.display = this.currentStep < this.totalSteps ? 'block' : 'none';
        this.submitBtn.style.display = this.currentStep === this.totalSteps ? 'block' : 'none';

        this.updateProgress();
    }

    updateProgress() {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

  
    getFormData() {
        const formData = {};
        const formElements = this.form.querySelectorAll('input, select');
        
        formElements.forEach(element => {
            if (element.name || element.id) {
                const key = element.name || element.id;
                formData[key] = element.value;
            }
        });
        
        return formData;
    }

    getFieldLabel(fieldName) {
        const labelMap = {
            'yearOfStd': 'Year of Study',
            'school': 'School',
            'teacherName': 'Teacher Name',
            'date': 'Date',
            'subject': 'Subject',
            'classes': 'Class',
            'streams': 'Stream',
            'period': 'Period',
            'compLesson': 'Competence',
            'mainlesson': 'Main Lesson',
            'topicLesson': 'Topic',
            'subTopiclesson': 'Sub Topic',
            'specificLesson': 'Specific Objective',
            'aidsLesson': 'Teaching & Learning Aids',
            'tlmaterials': 'Teaching & Learning Materials',
            'refLesson': 'Reference',
            'femaleReg': 'Female Registered',
            'maleReg': 'Male Registered',
            'femalePres': 'Female Present',
            'malePres': 'Male Present',
            'stdUnderstood': 'Students Understood',
            'wrdImp1': 'Word for Introduction',
            'wrdImp2': 'Word to Use'
        };
        
        return labelMap[fieldName] || fieldName;
    }

    saveFormData() {
        try {
            const formData = {};
            const formElements = this.form.querySelectorAll('input, select');
            
            formElements.forEach(element => {
                if (element.name || element.id) {
                    const key = element.name || element.id;
                    formData[key] = element.value;
                }
            });
            
            const textareas = this.form.querySelectorAll('textarea');
            textareas.forEach(element => {
                if (element.name || element.id) {
                    const key = element.name || element.id;
                    formData[key] = element.value;
                }
            });
            
            const editableRefEl = document.getElementById("editableRef");
            const editableRefGroup = document.getElementById("editableRefGroup");
            
            if (editableRefGroup && editableRefGroup.style.display !== 'none' && editableRefEl && editableRefEl.value.trim()) {
                formData.editableRef = editableRefEl.value.trim();
            }
            
            const dataToSave = {
                formData: formData,
                currentStep: this.currentStep,
                timestamp: new Date().toISOString()
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
            console.log('Form data saved to localStorage');
        } catch (error) {
            console.error('Error saving form data:', error);
        }
    }

    loadSavedData() {
        try {
            const savedData = localStorage.getItem(this.storageKey);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const { formData, currentStep, timestamp } = parsedData;
                
                const savedDate = new Date(timestamp);
                const now = new Date();
                const daysDifference = (now - savedDate) / (1000 * 60 * 60 * 24);
                
                if (daysDifference > 7) {
                    console.log('Saved data is too old, clearing it');
                    this.clearSavedData();
                    return;
                }
                
                Object.keys(formData).forEach(key => {
                    const element = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
                    if (element && formData[key]) {
                        element.value = formData[key];
                        element.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
                
                const editableRefGroup = document.getElementById('editableRefGroup');
                const editableRefEl = document.getElementById('editableRef');
                const refSelect = document.getElementById('refLesson');
                
                if (formData.editableRef && formData.editableRef.trim()) {
                    if (editableRefGroup) {
                        editableRefGroup.style.display = 'block';
                    }
                    if (editableRefEl) {
                        editableRefEl.value = formData.editableRef;
                    }
                    
                    if (refSelect && formData.refLesson) {
                        refSelect.value = formData.refLesson;
                    }
                }
                
                this.currentStep = 1;
                this.updateStep();
                
                this.showDataLoadedNotification();
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            this.clearSavedData();
        }
    }

    saveCurrentStep() {
        try {
            const existingData = localStorage.getItem(this.storageKey);
            if (existingData) {
                const parsedData = JSON.parse(existingData);
                parsedData.currentStep = this.currentStep;
                parsedData.timestamp = new Date().toISOString();
                localStorage.setItem(this.storageKey, JSON.stringify(parsedData));
            }
        } catch (error) {
            console.error('Error saving current step:', error);
        }
    }

    clearSavedData() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('Saved data cleared from localStorage');
        } catch (error) {
            console.error('Error clearing saved data:', error);
        }
    }

    showDataLoadedNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #42b72a;
            color: white;
            padding: 15px 20px;
            z-index: 1000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span><i class="bi bi-check-circle-fill"></i></span>
                <span>Previous data restored successfully!</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    forceSave() {
        this.saveFormData();
    }

    getSavedDataStatus() {
        try {
            const savedData = localStorage.getItem(this.storageKey);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                return {
                    exists: true,
                    timestamp: parsedData.timestamp,
                    currentStep: parsedData.currentStep
                };
            }
            return { exists: false };
        } catch (error) {
            console.error('Error checking saved data status:', error);
            return { exists: false };
        }
    }
}

// Auto-focus functionality
function setupAutoFocusNext() {
    const formElements = document.querySelectorAll('#lessonPlanForm input, #lessonPlanForm select');
    
    formElements.forEach((element, index) => {
        let typingTimer;
        let isUserTyping = false;
        
        if (element.type === 'text' || element.type === 'number' || element.type === 'date') {
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    clearTimeout(typingTimer);
                    isUserTyping = false;
                    moveToNextField(element, formElements, index);
                    return;
                }
                
                const navigationKeys = ['Tab', 'Shift', 'Ctrl', 'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                if (!navigationKeys.includes(e.key)) {
                    isUserTyping = true;
                }
            });
            
            element.addEventListener('input', function() {
                const currentValue = element.value.trim();
                clearTimeout(typingTimer);
                
                if (currentValue.length === 0) {
                    isUserTyping = false;
                    return;
                }
                
                const isLikelyComplete = checkIfEntryComplete(element, currentValue);
                
                if (isLikelyComplete) {
                    typingTimer = setTimeout(() => {
                        if (element.value.trim() === currentValue && !isUserTyping) {
                            moveToNextField(element, formElements, index);
                        }
                        isUserTyping = false;
                    }, 1500);
                } else {
                    typingTimer = setTimeout(() => {
                        isUserTyping = false;
                    }, 2000);
                }
            });
            
            element.addEventListener('blur', function() {
                clearTimeout(typingTimer);
                isUserTyping = false;
            });
        }
        
        if (element.tagName === 'SELECT') {
            element.addEventListener('change', function() {
                moveToNextField(element, formElements, index);
            });
        }
    });
}

function checkIfEntryComplete(element, value) {
    const fieldType = element.type;
    const fieldName = element.name || element.id;
    
    if (fieldType === 'date') {
        return value.length >= 10;
    }
    
    if (fieldType === 'number') {
        const num = parseInt(value);
        return !isNaN(num) && num >= 0;
    }
    
    if (fieldType === 'text') {
        if (fieldName.includes('Name') || fieldName.includes('name')) {
            return value.length >= 2 && /[a-zA-Z]/.test(value);
        }
        
        if (fieldName.includes('school')) {
            return value.length >= 3 && /[a-zA-Z]/.test(value);
        }
        
        if (fieldName.includes('material') || fieldName.includes('activity') || fieldName.includes('specific')) {
            return value.length >= 5 && /[a-zA-Z]/.test(value);
        }
        
        return value.length >= 2;
    }
    
    return false;
}

function moveToNextField(currentElement, allElements, currentIndex) {
    if (currentElement.value.trim() !== '') {
        for (let i = currentIndex + 1; i < allElements.length; i++) {
            const nextElement = allElements[i];
            const currentStep = document.querySelector('.step.active');
            
            if (currentStep && currentStep.contains(nextElement)) {
                nextElement.focus();
                break;
            }
        }
    }
}

// Utility functions
function toggleInstructions(instructionId) {
    const element = document.getElementById(instructionId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

function openSyllabusPopup() {
    alert('Syllabus popup functionality would be implemented here');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.lessonPlanFormInstance = new LessonPlanForm();
    
    const today = new Date().toISOString().split('T')[0];
    const dateField = document.getElementById('date');
    if (dateField) {
        dateField.value = today;
    }
    
    setupAutoFocusNext();
    
    setInterval(() => {
        if (window.lessonPlanFormInstance) {
            window.lessonPlanFormInstance.forceSave();
        }
    }, 30000);
});

// Additional utility functions for localStorage management
function clearAllSavedData() {
    if (window.lessonPlanFormInstance) {
        window.lessonPlanFormInstance.clearSavedData();
        alert('All saved data has been cleared!');
    }
}

function getSavedDataInfo() {
    if (window.lessonPlanFormInstance) {
        const status = window.lessonPlanFormInstance.getSavedDataStatus();
        if (status.exists) {
            console.log('Saved data found:', status);
            return status;
        } else {
            console.log('No saved data found');
            return null;
        }
    }
}

function forceSaveCurrentData() {
    if (window.lessonPlanFormInstance) {
        window.lessonPlanFormInstance.forceSave();
        console.log('Data saved manually');
    }
}

function injectSuccessPanel(){
  if (document.getElementById('panel-success')) return;
  var panel = document.createElement('div');
  panel.className = 'main-panel';
  panel.id = 'panel-success';
  var contentInner = document.querySelector('.content-inner');
  if (contentInner) contentInner.appendChild(panel);
}

function injectSuccessPanelStyles(){
  if (document.getElementById('successPanelStyles')) return;
  var s = document.createElement('style');
  s.id = 'successPanelStyles';
  s.textContent = `
    .success-btn-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;}
    .success-btn-row .sow-tool-btn{flex:1 1 calc(50% - 8px);justify-content:center;min-width:160px;}
    @media (max-width:768px){
      .success-btn-row{flex-direction:column;gap:8px;}
      .success-btn-row .sow-tool-btn{flex:1 1 auto;width:100%;}
    }

    .sow-tool-btn{
      display:flex;align-items:center;justify-content:center;gap:8px;
      padding:11px 16px;border:none;cursor:pointer;
      font-family:var(--font);font-size:.82rem;font-weight:700;
      letter-spacing:.4px;text-transform:uppercase;
    }
    .sow-tool-btn i{font-size:1rem;line-height:1;}

    .sow-tool-btn.primary{background:var(--navy);color:#fff;}
    .sow-tool-btn.accent{background:var(--accent);color:#fff;}
    .sow-tool-btn.success{background:var(--green);color:#fff;}
    .sow-tool-btn.neutral{background:var(--surface3);color:var(--text2);border:1px solid var(--border2);}
  `;
  document.head.appendChild(s);
}
lessonplanSubmit1.addEventListener('click', function (mySb) {
    mySb.preventDefault();

    updateContent();
    injectSuccessPanel();
    injectSuccessPanelStyles();
    var panel = document.getElementById('panel-success');

    panel.innerHTML = `
      <div class="panel-header">
        <h2><i class="bi bi-check-circle-fill" style="color:var(--green);"></i> Lesson Plan Created</h2>
        <p>Your lesson plan is ready. Download it, view a summary, or start a new one.</p>
      </div>
      <div class="panel-body">
        <div class="success-btn-row">
          <button id="downloadPdfBtn" class="sow-tool-btn primary">
            <i class="bi bi-download"></i> Download PDF
          </button>
          <button id="backBtn" class="sow-tool-btn neutral">
            <i class="bi bi-arrow-left-circle"></i> Back to Saved Data
          </button>
          <button id="newLessonBtn" class="sow-tool-btn accent">
            <i class="bi bi-plus-circle"></i> New Lesson Plan
          </button>
          <button id="summaryBtn" class="sow-tool-btn success">
            <i class="bi bi-journal-check"></i> Summary
          </button>
        </div>
      </div>
    `;

    showPanel('success');

    var downloadBtn = document.getElementById('downloadPdfBtn');
    var backBtn      = document.getElementById('backBtn');
    var newLessonBtn = document.getElementById('newLessonBtn');
    var summaryBtn   = document.getElementById('summaryBtn');

    downloadBtn.addEventListener('click', function() {
        const lessonContent = document.querySelector('#lessonTemp, .lesson-content, .lesson-template');
        if (lessonContent) {
            lessonContent.style.display = 'block';
            lessonContent.style.visibility = 'visible';
        }
        downloadDocument();
    });

    backBtn.addEventListener('click', function() {
        if (typeof resetLessonPlanForm === 'function') {
            resetLessonPlanForm();
        } else {
            location.reload();
        }
        showModernAlert("Returned to saved data view", "info");
    });

    newLessonBtn.addEventListener('click', function() {
        if (typeof createNewLessonPlan === 'function') {
            createNewLessonPlan();
        } else {
            location.reload();
        }
        showModernAlert("Starting new lesson plan creation", "success");
    });

    summaryBtn.addEventListener('click', function() {
        if (typeof showTrackerModal === 'function') showTrackerModal();
    });

    if (typeof recordLessonPlanToTracker === 'function') recordLessonPlanToTracker();
    showModernAlert("Lesson plan generated successfully!", "success");
});

function showModernAlert(message, type = "info") {
    const existingAlert = document.querySelector('.modern-alert');
    if (existingAlert) existingAlert.remove();
    
    const alert = document.createElement('div');
    alert.className = `modern-alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${getAlertIcon(type)}</span>
            <span class="alert-message">${message}</span>
        </div>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 3000);
}

function getAlertIcon(type) {
    const icons = {
        success: '<i class="bi bi-check-circle-fill"></i>',
        warning: '<i class="bi bi-exclamation-triangle-fill"></i>',
        error: '<i class="bi bi-x-circle-fill"></i>',
        info: '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[type] || icons.info;
}



function validateFields() {
    const school = document.getElementById("school").value;
    const teacherName = document.getElementById("teacherName").value;
    const subject = document.getElementById("subject").value;
    const classes = document.getElementById("classes").value;
    const streams = document.getElementById("streams").value;
    const period = document.getElementById("period").value;
    const femaleReg = document.getElementById("femaleReg").value;
    const maleReg = document.getElementById("maleReg").value;
    const femalePres = document.getElementById("femalePres").value;
    const malePres = document.getElementById("malePres").value;
    const specificLesson = document.getElementById("specificLesson").value;
    const tlmaterials = document.getElementById("tlmaterials").value;
    const wrdImp1 = document.getElementById("wrdImp1").value;
    const wrdImp2 = document.getElementById("wrdImp2").value;
    const dateOption = document.getElementById("dateOption").value;
    const date = document.getElementById("date").value;

    if (dateOption === 'set' && !date) {
        return false;
    }

    if (
        !school || !teacherName || !subject || !classes || 
        !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
        !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2 || !dateOption
    ) {
        return false; 
    }
    return true; 
}

function userLoadd() {
    document.getElementById("wordToshow").innerText="Thanks!  Your lesson plan will download shortly, please be patient";
    document.getElementById("videoDiv").style.display="block";
    document.getElementById("adDiv").style.display="none";
    document.getElementById("refreshBtn").style.display="block";
    document.getElementById('downloadPdfBtn').style.display="block";
    document.getElementById('downloadPdfBtn').innerText="download lesson plan again";
    document.getElementById("gotoEdit").style.display="none";
}

function downloadDocument() {
    let subjectLook  = document.getElementById('subject')?.value        || "Downloaded";
    let activityLook = document.getElementById('specificLesson')?.value || "Lesson Plan";
    let defaultName1 = `${subjectLook} ${activityLook}`;
    let defaultName  = defaultName1.trim().replace(/\s+/g, "_");

    showDocumentNameModal(defaultName1, (documentName) => {
        const finalName = documentName.trim() === "" ? defaultName : documentName.trim().replace(/\s+/g, "_");
        showPdfLoader();
        setTimeout(() => {
            try {
                buildAndDownloadPdf(finalName);
            } catch (e) {
                hidePdfLoader();
                showLessonNotification("Failed to generate PDF. Please try again.", "error");
            }
        }, 100);
    });

    document.getElementById('downloadPdfBtn').style.display = "none";
    userLoadd();
}
function buildAndDownloadPdf(filename, onSuccess) {
    function t(id) {
        const el = document.getElementById(id);
        return el ? (el.innerText || el.textContent || '').trim() : '';
    }
    function h(id) {
        const el = document.getElementById(id);
        if (!el) return '';
        return el.innerHTML
            .replace(/<i\b[^>]*>/gi,'').replace(/<\/i>/gi,'')
            .replace(/<b\b[^>]*>/gi,'').replace(/<\/b>/gi,'')
            .replace(/<strong\b[^>]*>/gi,'').replace(/<\/strong>/gi,'')
            .replace(/<br\s*\/?>/gi,' ')
            .replace(/<[^>]+>/g,'').trim();
    }
    function formatDate(raw) {
        if (!raw) return '';
        const s = raw.trim();
        const iso = s.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/);
        if (iso) return `${iso[3].padStart(2,'0')}.${iso[2].padStart(2,'0')}.${iso[1]}`;
        const dmy = s.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})$/);
        if (dmy) {
            const yy = dmy[3].length === 2 ? '20' + dmy[3] : dmy[3];
            return `${dmy[1].padStart(2,'0')}.${dmy[2].padStart(2,'0')}.${yy}`;
        }
        return s;
    }
    function lbl(raw) { return raw.replace(/:+\s*$/, '').toUpperCase() + ' :'; }
    function formatListBreaks(text) {
        if (!text) return text;
        return text.replace(/\s*\(([a-z])\)\s*/g, (m, letter, offset) =>
            (offset === 0 ? '' : '\n') + `(${letter}) `).trim();
    }

    // ── map every value straight from File 2's #lessonTemp IDs ──
    const d = {
        title: t('andalio') || 'LESSON PLAN',

        lShule: t('shule') || 'SCHOOL',            school:  t('schoolNm'),
        lSomo:  t('somo')  || 'SUBJECT',            subject: t('teacherInfo'), // NB: subject value sits in #teacherInfo per File 2 markup
        lDarasa:t('darasa')|| 'CLASS',              classVal:t('lessonClss'),
        lMkondo:t('mkondo')|| 'STREAM',             stream:  t('lessonStrm'),
        lTarehe:t('tarehe')|| 'DATE',               date:    formatDate(t('lessonDt')),
        lJina:  t('jinaMwalimu') || "TEACHER'S NAME", teacher: t('lessonTch'),
        lMuda:  t('muda')  || 'TIME',               time:    t('lessonTm'),
        lKipindi:t('kipindi') || 'PERIOD',          period:  t('lessonPrd'),

        lIdadi: t('idadi') || 'NUMBER OF STUDENTS',
        lSajiliwa: t('sajiliwa') || 'REGISTERED',
        lFika:     t('fika')     || 'PRESENT',
        lHawapo:   t('hawapo')   || 'ABSENT',
        lGirls: t('wasichana') || 'GIRLS', lBoys: t('wavulana') || 'BOYS', lTotal: t('jumla') || 'TOTAL',
        flReg:t('flReg'), mlReg:t('mlReg'), stRegt:t('stRegt'),
        flPr: t('flPr'),  mlPr: t('mlPr'),  stPrt: t('stPrt'),
        flAb: t('flAb'),  mlAb: t('mlAb'),  stAbt: t('stAbt'),

        lUjuzi:     t('ujuzi')          || 'COMPETENCE',        sylbsCmp:  t('sylbsCmp'),
        lLengoKuu:  t('lengoKuu')       || 'MAIN OBJECTIVE',    sylbsMnObj:t('sylbsMnObj'),
        lMadaKuu:   t('madaKuu')        || 'MAIN TOPIC',        sylbsMntp: t('sylbsMntp'),
        lMadaNdogo: t('madaNdogo')      || 'SUB-TOPIC',         sylbsSbtp: t('sylbsSbtp'),
        lMahususi:  t('lengoMahususi')  || 'SPECIFIC OBJECTIVE',sylbsSpobj:t('sylbsSpobj'),
        lVifaa:     t('vifaa')          || 'T & L AIDS',        sylbstlads:t('sylbstlads'),
        lNukuu:     t('nukuu')          || 'T & L MATERIALS',   sylbsMts:  t('sylbsMts'),
        lRejea:     t('rejea')          || 'REFERENCES',        sylbsRfrs: h('sylbsRfrs'),

        lKichwa: t('kichwa-habari') || 'TEACHING AND LEARNING PROCESS',
        lHatua: t('hatua') || 'STAGES', lMudaSomo: t('muda-somo1') || 'TIME (MIN)',
        lMwalimu: t('mwalimu') || 'TEACHING ACTIVITIES',
        lMwanafunzi: t('mwanafunzi') || 'LEARNING ACTIVITIES',
        lAngalia: t('angalia') || 'ASSESSMENT',

        lMwanzo: t('mwanzo') || 'INTRODUCTION', introCont: t('introCont'),
        intro1: formatListBreaks(t('intro1')), intro2: formatListBreaks(t('intro2')), intro3: formatListBreaks(t('intro3')),

        lMpya: t('mpya') || 'NEW KNOWLEDGE', newKnow: t('newKnow'),
        new1: formatListBreaks(t('new1')), new2: formatListBreaks(t('new2')), new3: formatListBreaks(t('new3')),

        lKuimarisha: t('kuimarisha') || 'REINFORCEMENT', reinCont: t('reinCont'),
        rein1: formatListBreaks(t('rein1')), rein2: formatListBreaks(t('rein2')), rein3: formatListBreaks(t('rein3')),

        lTafakari: t('tafakari') || 'REFLECTION', refleCont: t('refleCont'),
        reflect1: formatListBreaks(t('reflect1')), reflect2: formatListBreaks(t('reflect2')), reflect3: formatListBreaks(t('reflect3')),

        lHitimisho: t('hitimisho') || 'CONSOLIDATION', consoCont: t('consoCont'),
        conso1: formatListBreaks(t('conso1')), conso2: formatListBreaks(t('conso2')), conso3: formatListBreaks(t('conso3')),

        lTathMwanafunzi: t('tathMwanafunzi') || "STUDENT'S EVALUATION", studentComm: t('studentComm'),
        lTathMwalimu:    t('tathMwalimu')    || "TEACHER'S EVALUATION", lessonComment: t('lessonComment'),
        lMaoni:          t('maoni')          || 'REMARKS',             remarkComm: t('remarkComm'),
    };

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const PW = 210, PH = 297, ML = 8, MR = 8, MT = 4, MB = 8;
    const CW = PW - ML - MR;
    const BLACK = [0,0,0], WHITE = [255,255,255];
    let y = MT;

    const base = { fontSize: 8, font: 'helvetica', textColor: BLACK, fillColor: WHITE, lineColor: BLACK, lineWidth: 0.5 };

    // Title
    doc.setFont('helvetica','bold'); doc.setFontSize(11.5); doc.setTextColor(...BLACK);
    doc.text(d.title.toUpperCase(), PW/2, y+5, { align:'center' });
    y += 11;

    
const dCW = [26, 69, 26, CW-26-69-26];
doc.autoTable({
    startY: y, margin:{left:ML,right:MR}, tableWidth:CW, theme:'plain',
    pageBreak:'avoid', rowPageBreak:'avoid',
    styles:{...base, cellPadding:{top:0.9,bottom:0.9,left:1,right:1}, lineWidth:0, overflow:'linebreak'},
    columnStyles:{
        0:{fontStyle:'bold',cellWidth:dCW[0],valign:'top'},
        1:{cellWidth:dCW[1],valign:'top'},
        2:{fontStyle:'bold',cellWidth:dCW[2],valign:'top'},
        3:{cellWidth:dCW[3],valign:'top'}
    },
    body:[
        [lbl(d.lShule), (d.school||'').toUpperCase(), lbl(d.lSomo), (d.subject||'').toUpperCase()],
        [lbl(d.lDarasa), ((d.classVal+' '+d.stream).trim()).toUpperCase(), lbl(d.lTarehe), (d.date||'').toUpperCase()],
        [lbl(d.lJina), (d.teacher||'').toUpperCase(), lbl(d.lMuda), (d.time||'').toUpperCase()],
        [lbl(d.lKipindi), (d.period||'').toUpperCase(), '', ''],
    ],
    didDrawCell(data){
        if (data.section==='body' && (data.column.index===1||data.column.index===3)) {
            var cellText = (data.cell.raw || '').toString().trim();
            if (!cellText) return;
            doc.setDrawColor(...BLACK); doc.setLineWidth(0.5); doc.setLineDashPattern([],0);
            doc.line(data.cell.x, data.cell.y+data.cell.height-0.4, data.cell.x+data.cell.width, data.cell.y+data.cell.height-0.4);
        }
    },
});
y = doc.lastAutoTable.finalY + 2.5;

    // ── Table 2: Registered / Present / Absent (9 columns) ──
    doc.autoTable({
        startY:y, margin:{left:ML,right:MR}, tableWidth:CW, theme:'grid',
        pageBreak:'avoid', rowPageBreak:'avoid',
        styles:{...base, fontSize:7.2, cellPadding:{top:0.8,bottom:0.8,left:0.5,right:0.5}, halign:'center', valign:'middle', fontStyle:'bold'},
        head:[
            [{content:d.lIdadi.toUpperCase(), colSpan:9, styles:{...base,fontStyle:'bold',fillColor:WHITE}}],
            [{content:d.lSajiliwa.toUpperCase(),colSpan:3,styles:{...base,fontStyle:'bold',fillColor:WHITE}},
             {content:d.lFika.toUpperCase(),colSpan:3,styles:{...base,fontStyle:'bold',fillColor:WHITE}},
             {content:d.lHawapo.toUpperCase(),colSpan:3,styles:{...base,fontStyle:'bold',fillColor:WHITE}}],
            [d.lGirls,d.lBoys,d.lTotal,d.lGirls,d.lBoys,d.lTotal,d.lGirls,d.lBoys,d.lTotal].map(x=>({content:x.toUpperCase(),styles:{...base,fillColor:WHITE}})),
        ],
        body:[[d.flReg,d.mlReg,d.stRegt,d.flPr,d.mlPr,d.stPrt,d.flAb,d.mlAb,d.stAbt].map(v=>({content:v||'',styles:{...base,fontStyle:'normal'}}))],
    });
    y = doc.lastAutoTable.finalY + 2.5;

   // ── Table 3: Syllabus (8 rows) ──
const compLblW = 46;
doc.autoTable({
    startY:y, margin:{left:ML,right:MR}, tableWidth:CW, theme:'plain',
    pageBreak:'avoid', rowPageBreak:'avoid',
    styles:{...base, fontSize:7.6, cellPadding:{top:0.9,bottom:0.6,left:1,right:1}, lineWidth:0, overflow:'linebreak'},
    columnStyles:{
        0:{fontStyle:'bold',cellWidth:compLblW,valign:'top'},
        1:{cellWidth:CW-compLblW,valign:'top', fontSize:7.0}
    },
    body:[
        [lbl(d.lUjuzi), d.sylbsCmp], [lbl(d.lLengoKuu), d.sylbsMnObj], [lbl(d.lMadaKuu), d.sylbsMntp],
        [lbl(d.lMadaNdogo), d.sylbsSbtp], [lbl(d.lMahususi), d.sylbsSpobj], [lbl(d.lVifaa), d.sylbstlads],
        [lbl(d.lNukuu), d.sylbsMts], [lbl(d.lRejea), d.sylbsRfrs],
    ],
    didDrawCell(data){
        if (data.section==='body' && data.column.index===1) {
            var cellText = (data.cell.raw || '').toString().trim();
            if (!cellText) return;
            doc.setDrawColor(...BLACK); doc.setLineWidth(0.4); doc.setLineDashPattern([],0);
            doc.line(data.cell.x, data.cell.y+data.cell.height-0.3, data.cell.x+data.cell.width, data.cell.y+data.cell.height-0.3);
        }
    },
});
y = doc.lastAutoTable.finalY + 2.5;

    doc.setFont('helvetica','bold'); doc.setFontSize(8.5); doc.setTextColor(...BLACK);
    doc.text(d.lKichwa.toUpperCase(), PW/2, y+4, { align:'center' });
    y += 6;

    // ── Reserve space for 3 evaluation/remark lines at the bottom ──
    const EV_FS = 7.6, EV_LINE_H = 3.8, EV_VPAD = 1, EV_LABEL_W = 40;
    const evTextW = CW - EV_LABEL_W - 3;
    doc.setFontSize(EV_FS);
    const evRows = [
        { label: d.lTathMwanafunzi, text: d.studentComm },
        { label: d.lTathMwalimu,    text: d.lessonComment },
        { label: d.lMaoni,          text: d.remarkComm },
    ].map(r => {
        const lines = doc.splitTextToSize(r.text || '', evTextW);
        return { ...r, lines, h: Math.max(5, EV_VPAD*2 + lines.length*EV_LINE_H) };
    });
    const EV_RESERVE = evRows.reduce((s,r)=>s+r.h,0) + 2;

    const availH = (PH - MB - EV_RESERVE) - y;

    // ── Table 4: 5-stage teaching process, auto-shrink to fit availH ──
    const HDR_ROW_H = 7, ptPerMm = 2.835, vPadFixed = 1.1, hPadFixed = 1.1;
    const pCW = [24, 12, 55, 55, CW-24-12-55-55];

    const stageRows = [
        [(d.lMwanzo||'').toUpperCase(), d.introCont, d.intro1, d.intro2, d.intro3],
        [(d.lMpya||'').toUpperCase(), d.newKnow, d.new1, d.new2, d.new3],
        [(d.lKuimarisha||'').toUpperCase(), d.reinCont, d.rein1, d.rein2, d.rein3],
        [(d.lTafakari||'').toUpperCase(), d.refleCont, d.reflect1, d.reflect2, d.reflect3],
        [(d.lHitimisho||'').toUpperCase(), d.consoCont, d.conso1, d.conso2, d.conso3],
    ];

    const fontScale = [8.0, 7.5, 7.0, 6.5, 6.0, 5.5];
    function measureRowHeights(fs) {
        doc.setFontSize(fs);
        const lineH = (fs/ptPerMm)*1.12 + 0.4;
        return stageRows.map(row => {
            let maxLines = 1;
            row.forEach((cell,ci) => {
                const w = pCW[ci]-hPadFixed*2;
                const lines = doc.splitTextToSize(cell||'', w).length;
                if (lines>maxLines) maxLines=lines;
            });
            return Math.max(5, maxLines*lineH + vPadFixed*2);
        });
    }
    let chosenFont = fontScale[fontScale.length-1], rowHeights;
    for (const fs of fontScale) {
        const measured = measureRowHeights(fs);
        const total = HDR_ROW_H + measured.reduce((a,b)=>a+b,0);
        if (total <= availH) {
            chosenFont = fs;
            const bonus = (availH-total) > 0 ? (availH-total)/measured.length : 0;
            rowHeights = measured.map(h=>h+bonus);
            break;
        }
        rowHeights = measured;
    }

    doc.autoTable({
        startY:y, margin:{left:ML,right:MR}, tableWidth:CW, theme:'grid',
        pageBreak:'avoid', rowPageBreak:'avoid',
        styles:{...base, fontSize:chosenFont, cellPadding:{top:vPadFixed,bottom:vPadFixed,left:hPadFixed,right:hPadFixed}, valign:'middle', overflow:'linebreak', lineWidth:0.4},
        headStyles:{...base, fontSize:7.5, fontStyle:'bold', halign:'center', valign:'middle', fillColor:WHITE, lineWidth:0.4},
        columnStyles:{0:{cellWidth:pCW[0],fontStyle:'bold',halign:'left'},1:{cellWidth:pCW[1],halign:'center'},2:{cellWidth:pCW[2]},3:{cellWidth:pCW[3]},4:{cellWidth:pCW[4]}},
        head:[[d.lHatua.toUpperCase(), d.lMudaSomo.toUpperCase(), d.lMwalimu.toUpperCase(), d.lMwanafunzi.toUpperCase(), d.lAngalia.toUpperCase()]],
        body: stageRows,
        didParseCell(data){ if (data.section==='body') data.cell.styles.minCellHeight = rowHeights[data.row.index]; },
    });

    // ── Evaluation / remarks block ──
    let evY = doc.lastAutoTable.finalY + 1;
    doc.setFont('helvetica','normal'); doc.setFontSize(EV_FS); doc.setTextColor(...BLACK);
    evRows.forEach(r => {
        doc.setFont('helvetica','bold');
        doc.text(lbl(r.label), ML+1, evY+EV_VPAD+EV_LINE_H-0.8);
        doc.setFont('helvetica','normal');
        r.lines.forEach((line,i)=> doc.text(line, ML+EV_LABEL_W, evY+EV_VPAD+EV_LINE_H-0.8+(i*EV_LINE_H)));
        evY += r.h;
    });

    doc.save(`${filename}.pdf`);
    hidePdfLoader();
    showLessonNotification("PDF downloaded successfully!", "success");
    if (typeof onSuccess === 'function') onSuccess();
}

function showDocumentNameModal(defaultName, callback) {
    const existingModal = document.querySelector('.document-name-modal');
    if (existingModal) existingModal.remove();
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'document-name-modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'document-name-modal';
    modal.innerHTML = `
        <div class="modal-header">
            <h3><i class="bi bi-file-earmark-text"></i> Save Lesson Plan</h3>
        </div>
        <div class="modal-body">
            <label for="documentNameInput">WEKA JINA LA LESSON PLAN (Mfano: Mr. Academix subject topic 1)</label>
            <input type="text" id="documentNameInput" class="document-name-input" value="${defaultName}" placeholder="Enter document name...">
            <div class="input-hint">Jina litabadilishwa kuwa format ya faili (spaces → underscores)</div>
        </div>
        <div class="modal-footer">
            <button class="modal-btn cancel-btn" onclick="closeDocumentNameModal()">Cancel</button>
            <button class="modal-btn confirm-btn" onclick="confirmDocumentName()">OK - ENDELEA</button>
        </div>
    `;
    
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    setTimeout(() => {
        const input = document.getElementById('documentNameInput');
        input.focus();
        input.select();
    }, 100);
    
    window.documentNameCallback = callback;
    
    document.getElementById('documentNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            confirmDocumentName();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDocumentNameModal();
        }
    });
    
    addDocumentNameModalStyles();
}

function confirmDocumentName() {
    const input = document.getElementById('documentNameInput');
    const documentName = input.value || input.placeholder;
    
    if (window.documentNameCallback) {
        window.documentNameCallback(documentName);
        window.documentNameCallback = null;
    }
    
    closeDocumentNameModal();
}

function closeDocumentNameModal() {
    const modal = document.querySelector('.document-name-modal-overlay');
    if (modal) {
        modal.remove();
    }
    window.documentNameCallback = null;
}

function addDocumentNameModalStyles() {
    if (document.querySelector('#documentNameModalStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'documentNameModalStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        
        .document-name-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .document-name-modal {
            background: white;
            width: 90%;
            max-width: 480px;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            padding: 16px 20px 14px;
            border-bottom: 1px solid #e4e6eb;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #050505;
            font-size: 1.125rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .modal-body label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #1c1e21;
            font-size: 0.9375rem;
        }
        
        .document-name-input {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #ccd0d5;
            font-size: 0.9375rem;
            transition: border-color 0.2s ease;
            box-sizing: border-box;
        }
        
        .document-name-input:focus {
            outline: none;
            border-color: #1877f2;
        }
        
        .input-hint {
            margin-top: 8px;
            font-size: 0.8125rem;
            color: #65676b;
            font-style: italic;
        }
        
        .modal-footer {
            padding: 14px 20px 18px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 9px 18px;
            border: none;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s ease;
            min-width: 75px;
        }
        
        .cancel-btn {
            background-color: #e4e6eb;
            color: #050505;
        }
        
        .cancel-btn:hover {
            background-color: #d8dadf;
        }
        
        .confirm-btn {
            background-color: #1877f2;
            color: white;
        }
        
        .confirm-btn:hover {
            background-color: #166fe5;
        }
        
        @media (max-width: 640px) {
            .document-name-modal {
                width: 95%;
                margin: 20px;
            }
            
            .modal-header, .modal-body, .modal-footer {
                padding-left: 16px;
                padding-right: 16px;
            }
            
            .modal-footer {
                flex-direction: column;
            }
            
            .modal-btn {
                width: 100%;
            }
        }
    `;
    
    document.head.appendChild(style);
}

function showLessonNotification(message, type = "info", duration = 4000) {
    try {
        document.querySelectorAll('.lesson-notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `lesson-notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
    } catch (error) {
        console.error('Error showing notification:', error);
    }
}

function getNotificationIcon(type) {
    const icons = {
        success: '<i class="bi bi-check-circle-fill"></i>',
        error: '<i class="bi bi-x-circle-fill"></i>', 
        warning: '<i class="bi bi-exclamation-triangle-fill"></i>',
        info: '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[type] || icons.info;
}

// PDF Loader Functions
function addPdfLoaderStyles() {
    if (document.querySelector('#pdfLoaderStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'pdfLoaderStyles';
    style.textContent = `
        .pdf-loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            animation: fadeIn 0.2s ease;
        }
        
        .pdf-loader-content {
            background: white;
            padding: 40px;
            text-align: center;
            max-width: 400px;
            width: 90%;
        }
        
        .pdf-loader-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid #e4e6eb;
            border-top: 4px solid #1877f2;
            margin: 0 auto 24px;
            animation: spin 0.8s linear infinite;
        }
        
        .pdf-loader-content h3 {
            margin: 0 0 12px 0;
            color: #050505;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .pdf-loader-content p {
            margin: 0;
            color: #65676b;
            font-size: 0.9375rem;
            line-height: 1.5;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
}

function showPdfLoader() {
    addPdfLoaderStyles();
    
    const loaderHTML = `
        <div id="pdfLoader" class="pdf-loader-overlay">
            <div class="pdf-loader-content">
                <div class="pdf-loader-spinner"></div>
                <h3><i class="bi bi-file-earmark-pdf"></i> Generating PDF</h3>
                <p>Please wait while we prepare your lesson plan for download...</p>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', loaderHTML);
    document.body.style.overflow = 'hidden';
}

function hidePdfLoader() {
    const loader = document.getElementById('pdfLoader');
    if (loader) {
        loader.remove();
    }
    document.body.style.overflow = 'auto';
}
