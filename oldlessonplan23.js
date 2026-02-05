const verbConjugations = {
    english: {
        // Base form -> different forms
        "discuss": { gerund: "discussing", past: "discussed", noun: "discussion" },
        "explain": { gerund: "explaining", past: "explained", noun: "explanation" },
        "describe": { gerund: "describing", past: "described", noun: "description" },
        "demonstrate": { gerund: "demonstrating", past: "demonstrated", noun: "demonstration" },
        "analyse": { gerund: "analysing", past: "analysed", noun: "analysis" },
        "analyze": { gerund: "analyzing", past: "analyzed", noun: "analysis" },
        "calculate": { gerund: "calculating", past: "calculated", noun: "calculation" },
        "compute": { gerund: "computing", past: "computed", noun: "computation" },
        "find": { gerund: "finding", past: "found", noun: "finding" },
        "solve": { gerund: "solving", past: "solved", noun: "solution" },
        "evaluate": { gerund: "evaluating", past: "evaluated", noun: "evaluation" },
        "state": { gerund: "stating", past: "stated", noun: "statement" },
        "give": { gerund: "giving", past: "gave", noun: "giving" },
        "practice": { gerund: "practicing", past: "practiced", noun: "practice" },
        "organise": { gerund: "organising", past: "organised", noun: "organisation" },
        "organize": { gerund: "organizing", past: "organized", noun: "organization" },
        "apply": { gerund: "applying", past: "applied", noun: "application" },
        "identify": { gerund: "identifying", past: "identified", noun: "identification" },
        "illustrate": { gerund: "illustrating", past: "illustrated", noun: "illustration" },
        "compare": { gerund: "comparing", past: "compared", noun: "comparison" },
        "contrast": { gerund: "contrasting", past: "contrasted", noun: "contrast" },
        "examine": { gerund: "examining", past: "examined", noun: "examination" },
        "investigate": { gerund: "investigating", past: "investigated", noun: "investigation" },
        "explore": { gerund: "exploring", past: "explored", noun: "exploration" },
        "interpret": { gerund: "interpreting", past: "interpreted", noun: "interpretation" },
        "justify": { gerund: "justifying", past: "justified", noun: "justification" },
        "prove": { gerund: "proving", past: "proved", noun: "proof" },
        "verify": { gerund: "verifying", past: "verified", noun: "verification" },
        "construct": { gerund: "constructing", past: "constructed", noun: "construction" },
        "create": { gerund: "creating", past: "created", noun: "creation" },
        "design": { gerund: "designing", past: "designed", noun: "design" },
        "develop": { gerund: "developing", past: "developed", noun: "development" },
        "formulate": { gerund: "formulating", past: "formulated", noun: "formulation" },
        "synthesize": { gerund: "synthesizing", past: "synthesized", noun: "synthesis" },
        "plan": { gerund: "planning", past: "planned", noun: "plan" },
        "propose": { gerund: "proposing", past: "proposed", noun: "proposal" },
        "summarize": { gerund: "summarizing", past: "summarized", noun: "summary" },
        "outline": { gerund: "outlining", past: "outlined", noun: "outline" },
        "review": { gerund: "reviewing", past: "reviewed", noun: "review" },
        "classify": { gerund: "classifying", past: "classified", noun: "classification" },
        "categorize": { gerund: "categorizing", past: "categorized", noun: "categorization" },
        "distinguish": { gerund: "distinguishing", past: "distinguished", noun: "distinction" },
        "measure": { gerund: "measuring", past: "measured", noun: "measurement" },
        "estimate": { gerund: "estimating", past: "estimated", noun: "estimation" },
        "predict": { gerund: "predicting", past: "predicted", noun: "prediction" },
        "infer": { gerund: "inferring", past: "inferred", noun: "inference" },
        "deduce": { gerund: "deducing", past: "deduced", noun: "deduction" },
        "conclude": { gerund: "concluding", past: "concluded", noun: "conclusion" },
        "relate": { gerund: "relating", past: "related", noun: "relation" },
        "connect": { gerund: "connecting", past: "connected", noun: "connection" },
        "associate": { gerund: "associating", past: "associated", noun: "association" },
        "perform": { gerund: "performing", past: "performed", noun: "performance" },
        "execute": { gerund: "executing", past: "executed", noun: "execution" },
        "implement": { gerund: "implementing", past: "implemented", noun: "implementation" },
        "conduct": { gerund: "conducting", past: "conducted", noun: "conduct" },
        "carry out": { gerund: "carrying out", past: "carried out", noun: "carrying out" },
        "determine": { gerund: "determining", past: "determined", noun: "determination" },
        "establish": { gerund: "establishing", past: "established", noun: "establishment" },
        "recognize": { gerund: "recognizing", past: "recognized", noun: "recognition" },
        "recall": { gerund: "recalling", past: "recalled", noun: "recall" },
        "list": { gerund: "listing", past: "listed", noun: "list" },
        "name": { gerund: "naming", past: "named", noun: "naming" },
        "label": { gerund: "labeling", past: "labeled", noun: "label" },
        "match": { gerund: "matching", past: "matched", noun: "match" },
        "select": { gerund: "selecting", past: "selected", noun: "selection" },
        "choose": { gerund: "choosing", past: "chose", noun: "choice" },
        "differentiate": { gerund: "differentiating", past: "differentiated", noun: "differentiation" },
        "modify": { gerund: "modifying", past: "modified", noun: "modification" },
        "adapt": { gerund: "adapting", past: "adapted", noun: "adaptation" },
        "simplify": { gerund: "simplifying", past: "simplified", noun: "simplification" },
        "convert": { gerund: "converting", past: "converted", noun: "conversion" },
        "transform": { gerund: "transforming", past: "transformed", noun: "transformation" },
        "translate": { gerund: "translating", past: "translated", noun: "translation" },
        "express": { gerund: "expressing", past: "expressed", noun: "expression" },
        "articulate": { gerund: "articulating", past: "articulated", noun: "articulation" },
        "present": { gerund: "presenting", past: "presented", noun: "presentation" },
        "report": { gerund: "reporting", past: "reported", noun: "report" },
        "argue": { gerund: "arguing", past: "argued", noun: "argument" },
        "defend": { gerund: "defending", past: "defended", noun: "defense" },
        "critique": { gerund: "critiquing", past: "critiqued", noun: "critique" },
        "assess": { gerund: "assessing", past: "assessed", noun: "assessment" },
        "judge": { gerund: "judging", past: "judged", noun: "judgment" },
        "rate": { gerund: "rating", past: "rated", noun: "rating" },
        "rank": { gerund: "ranking", past: "ranked", noun: "ranking" },
        "prioritize": { gerund: "prioritizing", past: "prioritized", noun: "prioritization" },
        "sequence": { gerund: "sequencing", past: "sequenced", noun: "sequence" },
        "arrange": { gerund: "arranging", past: "arranged", noun: "arrangement" },
        "order": { gerund: "ordering", past: "ordered", noun: "order" },
        "sort": { gerund: "sorting", past: "sorted", noun: "sorting" },
        "read": { gerund: "reading", past: "read", noun: "reading" },
        "write": { gerund: "writing", past: "wrote", noun: "writing" },
        "draw": { gerund: "drawing", past: "drew", noun: "drawing" },
        "sketch": { gerund: "sketching", past: "sketched", noun: "sketch" },
        "paint": { gerund: "painting", past: "painted", noun: "painting" },
        "sing": { gerund: "singing", past: "sang", noun: "singing" },
        "play": { gerund: "playing", past: "played", noun: "play" }
    },
    swahili: {
        // For Swahili, store variations needed
        "kuandika": { present: "kuandika", continuous: "anaandika", past: "aliandika", noun: "uandishi" },
        "kueleza": { present: "kueleza", continuous: "anaeleza", past: "alieleza", noun: "uelezaji" },
        "kujibu": { present: "kujibu", continuous: "anajibu", past: "alijibu", noun: "majibu" },
        "kufupisha": { present: "kufupisha", continuous: "anafupisha", past: "alifupisha", noun: "ufupisho" },
        "kubaini": { present: "kubaini", continuous: "anabaini", past: "alibaini", noun: "ubainisho" },
        "kuhakiki": { present: "kuhakiki", continuous: "anahakiki", past: "alihakiki", noun: "uhakiki" },
        "kuunda": { present: "kuunda", continuous: "anaunda", past: "aliunda", noun: "uundaji" },
        "kutunga": { present: "kutunga", continuous: "anatunga", past: "alitunga", noun: "utungaji" },
        "kupambanua": { present: "kupambanua", continuous: "anapambanua", past: "alipambanua", noun: "upambanuo" },
        "kufafanua": { present: "kufafanua", continuous: "anafafanua", past: "alifafanua", noun: "ufafanuzi" },
        "kuonesha": { present: "kuonesha", continuous: "anaonesha", past: "alionesha", noun: "uonyesho" },
        "kuainisha": { present: "kuainisha", continuous: "anaainisha", past: "aliainisha", noun: "uainisho" },
        "kusoma": { present: "kusoma", continuous: "anasoma", past: "alisoma", noun: "usomaji" },
        "kusimulia": { present: "kusimulia", continuous: "anasimulia", past: "alisimulia", noun: "usimuliaji" },
        "kujadili": { present: "kujadili", continuous: "anajadili", past: "alijadili", noun: "majadiliano" },
        "kuhesabu": { present: "kuhesabu", continuous: "anahesabu", past: "alihesabu", noun: "mahesabu" },
        "kutatua": { present: "kutatua", continuous: "anatatua", past: "alitatua", noun: "utatuzi" },
        "kutafuta": { present: "kutafuta", continuous: "anatafuta", past: "alitafuta", noun: "utafutaji" },
        "kupata": { present: "kupata", continuous: "anapata", past: "alipata", noun: "upatikanaji" },
        "kutathmini": { present: "kutathmini", continuous: "anatathmini", past: "alitathmini", noun: "tathmini" },
        "kutaja": { present: "kutaja", continuous: "anataja", past: "alitaja", noun: "utajaji" },
        "kutoa": { present: "kutoa", continuous: "anatoa", past: "alitoa", noun: "utoaji" },
        "kufanya mazoezi": { present: "kufanya mazoezi", continuous: "anafanya mazoezi", past: "alifanya mazoezi", noun: "mazoezi" },
        "kuandaa": { present: "kuandaa", continuous: "anaandaa", past: "aliandaa", noun: "uandaaji" },
        "kutumia": { present: "kutumia", continuous: "anatumia", past: "alitumia", noun: "matumizi" },
        "kutambua": { present: "kutambua", continuous: "anatambua", past: "alitambua", noun: "utambuzi" },
        "kulinganisha": { present: "kulinganisha", continuous: "analinganisha", past: "alilinganisha", noun: "ulinganisho" },
        "kutofautisha": { present: "kutofautisha", continuous: "anatofautisha", past: "alitofautisha", noun: "utofauti" },
        "kuchunguza": { present: "kuchunguza", continuous: "anachunguza", past: "alichunguza", noun: "uchunguzi" },
        "kuchambua": { present: "kuchambua", continuous: "anachambua", past: "alichambua", noun: "uchambuzi" },
        "kugundua": { present: "kugundua", continuous: "anagundua", past: "aligundua", noun: "ugunduzi" },
        "kutafsiri": { present: "kutafsiri", continuous: "anatafsiri", past: "alitafsiri", noun: "tafsiri" },
        "kuhalalisha": { present: "kuhalalisha", continuous: "anahalalisha", past: "alihalalisha", noun: "uhalalishaji" },
        "kuthibitisha": { present: "kuthibitisha", continuous: "anathibitisha", past: "alithibitisha", noun: "uthibitisho" },
        "kujenga": { present: "kujenga", continuous: "anajenga", past: "alijenga", noun: "ujenzi" },
        "kubuni": { present: "kubuni", continuous: "anabuni", past: "alibuni", noun: "ubuni" },
        "kutengeneza": { present: "kutengeneza", continuous: "anatengeneza", past: "alitengeneza", noun: "utengenezaji" },
        "kupanga": { present: "kupanga", continuous: "anapanga", past: "alipanga", noun: "upangaji" },
        "kupendekeza": { present: "kupendekeza", continuous: "anapendekeza", past: "alipendekeza", noun: "mapendekezo" },
        "kumuhtasari": { present: "kumuhtasari", continuous: "anamuhtasari", past: "alimuhtasari", noun: "muhtasari" },
        "kukagua": { present: "kukagua", continuous: "anakagua", past: "alikagua", noun: "ukaguzi" },
        "kuweka": { present: "kuweka", continuous: "anaweka", past: "aliweka", noun: "uwekaji" },
        "kupima": { present: "kupima", continuous: "anapima", past: "alipima", noun: "upimaji" },
        "kukadiria": { present: "kukadiria", continuous: "anakadiria", past: "alikadiria", noun: "ukadirio" },
        "kutabiri": { present: "kutabiri", continuous: "anatabiri", past: "alitabiri", noun: "utabiri" },
        "kuhitimisha": { present: "kuhitimisha", continuous: "anahitimisha", past: "alihitimisha", noun: "uhitimisho" },
        "kuhusianisha": { present: "kuhusianisha", continuous: "anahusianisha", past: "alihusianisha", noun: "uhusiano" },
        "kuunganisha": { present: "kuunganisha", continuous: "anaunganisha", past: "aliunganisha", noun: "muunganisho" },
        "kutekeleza": { present: "kutekeleza", continuous: "anatekeleza", past: "alitekeleza", noun: "utekelezaji" },
        "kufanya": { present: "kufanya", continuous: "anafanya", past: "alifanya", noun: "ufanyaji" },
        "kuamua": { present: "kuamua", continuous: "anaamua", past: "aliamua", noun: "uamuzi" },
        "kukumbuka": { present: "kukumbuka", continuous: "anakumbuka", past: "alikumbuka", noun: "ukumbusho" },
        "kuorodhesha": { present: "kuorodhesha", continuous: "anaorodhesha", past: "aliorodhesha", noun: "orodha" },
        "kuita majina": { present: "kuita majina", continuous: "anaita majina", past: "aliita majina", noun: "majina" },
        "kuweka alama": { present: "kuweka alama", continuous: "anaweka alama", past: "aliweka alama", noun: "alama" },
        "kuoanisha": { present: "kuoanisha", continuous: "anaoanisha", past: "alioanisha", noun: "uoanishaji" },
        "kuchagua": { present: "kuchagua", continuous: "anachagua", past: "alichagua", noun: "uchaguzi" },
        "kurekebisha": { present: "kurekebisha", continuous: "anarekebisha", past: "alirekebisha", noun: "marekebisho" },
        "kubadilisha": { present: "kubadilisha", continuous: "anabadilisha", past: "alibadilisha", noun: "mabadiliko" },
        "kurahisisha": { present: "kurahisisha", continuous: "anarahisisha", past: "alirahisisha", noun: "urahisishaji" },
        "kugeuza": { present: "kugeuza", continuous: "anageuza", past: "aligeuza", noun: "mageuko" },
        "kuelezea": { present: "kuelezea", continuous: "anaelezea", past: "alielezea", noun: "maelezo" },
        "kuwasilisha": { present: "kuwasilisha", continuous: "anawasilisha", past: "aliwasilisha", noun: "uwasilishaji" },
        "kuripoti": { present: "kuripoti", continuous: "anaripoti", past: "aliripoti", noun: "ripoti" },
        "kubishana": { present: "kubishana", continuous: "anabishana", past: "alibishana", noun: "mabishano" },
        "kutetea": { present: "kutetea", continuous: "anatetea", past: "alitetea", noun: "utetezi" },
        "kukosoa": { present: "kukosoa", continuous: "anakosoa", past: "alikosoa", noun: "ukosefu" },
        "kuhukumu": { present: "kuhukumu", continuous: "anahukumu", past: "alihukumu", noun: "hukumu" },
        "kupanga kwa utaratibu": { present: "kupanga kwa utaratibu", continuous: "anapanga kwa utaratibu", past: "alipanga kwa utaratibu", noun: "utaratibu" },
        "kusafisha": { present: "kusafisha", continuous: "anasafisha", past: "alisafisha", noun: "usafi" },
        "kuchora": { present: "kuchora", continuous: "anachora", past: "alichora", noun: "mchoro" },
        "kupaka": { present: "kupaka", continuous: "anapaka", past: "alipaka", noun: "upakaji" },
        "kuimba": { present: "kuimba", continuous: "anaimba", past: "aliimba", noun: "wimbo" },
        "kucheza": { present: "kucheza", continuous: "anacheza", past: "alicheza", noun: "mchezo" }
    }
};

// Helper function to get verb form
function getVerbForm(verb, form, language) {
    if (!verb) return verb;
    
    const conjugations = verbConjugations[language];
    if (conjugations && conjugations[verb] && conjugations[verb][form]) {
        return conjugations[verb][form];
    }
    return verb; // Return original if no conjugation found
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Patterns for student comments with proper verb forms
const studentCommentPatterns = {
    english: [
        (action, topic) => `The lesson was well understood by students as they actively participated in ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
        (action, topic) => `Students grasped the concept well and showed enthusiasm while ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
        (action, topic) => `The student engaged effectively throughout the session to ${action} ${topic}`,
        (action, topic) => `Understanding was demonstrated through active ${getVerbForm(action, 'noun', 'english')} of ${topic}`,
        (action, topic) => `Students showed good comprehension and were able to ${action} ${topic} successfully`,
        (action, topic) => `The class responded well to the lesson, particularly when ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
        (action, topic) => `Students displayed clear understanding as they worked to ${action} ${topic}`,
        (action, topic) => `Active student involvement during the ${getVerbForm(action, 'noun', 'english')} of ${topic} indicated strong comprehension`
    ],
    swahili: [
        (action, topic) => `Somo limeeleweka vizuri na wanafunzi, kwa sababu wameshiriki kikamilifu ${action} ${topic}`,
        (action, topic) => `Wanafunzi wameonyesha uelewa mzuri wakati wa ${action} ${topic}`,
        (action, topic) => `Mwanafunzi ameelewa vizuri somo na ameshiriki kwa bidii ${action} ${topic}`,
        (action, topic) => `Uelewa umedhihirika kupitia ushiriki mkubwa wa ${action} ${topic}`,
        (action, topic) => `Wanafunzi wamefanikiwa ${action} ${topic} kwa ufanisi`,
        (action, topic) => `Darasa limejibu vizuri somo, hasa wakati wa ${action} ${topic}`,
        (action, topic) => `Wajifunzi wameonyesha uelewa wa kina walipokuwa ${action} ${topic}`,
        (action, topic) => `Ushiriki hai wa wanafunzi wakati wa ${getVerbForm(action, 'noun', 'swahili')} wa ${topic} umeonyesha uelewa bora`
    ]
};

// Patterns for teacher remarks
const remarkPatterns = {
    english: [
        () => `The lesson objectives were achieved and I will proceed to the next section in the following period`,
        () => `Students demonstrated understanding, hence I will continue with the subsequent topic`,
        () => `Lesson goals were met successfully, allowing progression to the next part`,
        () => `Good progress was made and the next lesson will build upon this foundation`,
        () => `Understanding was evident, therefore I will advance to the following section`,
        () => `The class is ready to move forward, I will continue with the next segment`,
        () => `Objectives accomplished, next period will cover the subsequent content`
    ],
    swahili: [
        () => `Malengo ya somo yamefikiwa na nitaendelea na sehemu inayofuata kipindi kijacho`,
        () => `Wanafunzi wameonyesha uelewa, hivyo nitaendelea na mada inayofuata`,
        () => `Somo limekamilika vizuri, nitaendelea na sehemu ijayo`,
        () => `Maendeleo mazuri yamefikiwa na somo lijalo litajengwa juu ya msingi huu`,
        () => `Uelewa umedhihirika, kwa hiyo nitasogea mbele na sehemu inayofuata`,
        () => `Darasa liko tayari kusonga mbele, nitaendelea na kipengele kijacho`,
        () => `Madhumuni yamekamilika, kipindi kijacho kitashughulikia maudhui yanayofuata`
    ]
};

const introPatterns = {
    english: {
        
        askQuestion: [
            () => `Asking questions to review the previous lesson content`,
            () => `Posing questions about topics covered in the last session`,
            () => `Questioning students on what was learned previously`,
            () => `Reviewing prior knowledge through targeted questions`
        ],
        studentResponseReview: [
            () => `Students responding to review questions orally`,
            () => `Students providing oral answers about previous content`,
            () => `Students sharing what they remember from the last lesson`,
            () => `Class members answering questions about prior learning`
        ],
        
       
        brainstorm: [
            (topic) => `Teacher introducing the lesson by asking questions about ${topic}`,
            (topic) => `Guiding students to think about ${topic} through discussion`,
            (topic) => `Brainstorming with students regarding ${topic}`,
            (topic) => `Engaging students in preliminary discussion about ${topic}`
        ],
        studentResponseBrainstorm: [
            (topic) => `Students responding to questions about ${topic} orally`,
            (topic) => `Students providing oral answers regarding ${topic}`,
            (topic) => `Students sharing their thoughts on ${topic}`,
            (topic) => `Class members answering questions related to ${topic}`
        ],
        
        
        checking: [
            () => `Checking whether students can respond accurately`,
            () => `Verifying the correctness of student responses`,
            () => `Assessing if learners can answer correctly`,
            () => `Evaluating the accuracy of student answers`
        ]
    },
    swahili: {
        
        askQuestion: [
            () => `Kuuliza maswali kukagua maudhui ya somo lililopita`,
            () => `Kuwauliza wanafunzi maswali kuhusu somo la awali`,
            () => `Kufanya maswali juu ya yale waliyojifunza hapo awali`,
            () => `Kukagua maarifa ya awali kupitia maswali maalum`
        ],
        studentResponseReview: [
            () => `Wanafunzi kujibu maswali ya ukaguzi kwa mdomo`,
            () => `Wajifunzi kutoa majibu ya mdomo kuhusu maudhui ya awali`,
            () => `Wanafunzi kushiriki wanachokumbuka kutoka somo lililopita`,
            () => `Wanachuo kujibu maswali kuhusu kile walichojifunza hapo awali`
        ],
        
        
        brainstorm: [
            (topic) => `Mwalimu kutambulisha somo kwa kuuliza maswali kuhusu ${topic}`,
            (topic) => `Kuwaongoza wanafunzi kufikiria kuhusu ${topic} kupitia majadiliano`,
            (topic) => `Kuchanganua mawazo na wanafunzi kuhusu ${topic}`,
            (topic) => `Kuwashirikisha wanafunzi katika majadiliano ya awali kuhusu ${topic}`
        ],
        studentResponseBrainstorm: [
            (topic) => `Wanafunzi kujibu maswali yanayohusu ${topic} kwa mdomo`,
            (topic) => `Wajifunzi kutoa majibu ya mdomo kuhusu ${topic}`,
            (topic) => `Wanafunzi kushiriki maoni yao kuhusu ${topic}`,
            (topic) => `Wanachuo kujibu maswali yanayohusiana na ${topic}`
        ],
        
        
        checking: [
            () => `Kuangalia kama wanafunzi wanaweza kujibu kwa usahihi`,
            () => `Kuthibitisha usahihi wa majibu ya wanafunzi`,
            () => `Kutathmini ikiwa wajifunzi wanaweza kujibu vizuri`,
            () => `Kuhakiki usahihi wa majibu ya wanafunzi`
        ]
    }
};

const specificObjectivePatterns = {
    swahili: [
        (action, topic, time) => `Mwishoni mwa kipindi cha ${time}, kila mwanafunzi aweze ${action} ${topic}`,
        (action, topic, time) => `Ndani ya kipindi cha ${time}, mwanafunzi aweze ${action} ${topic}`,
        (action, topic, time) => `Baada ya kipindi cha ${time}, mwanafunzi aweze ${action} ${topic} kwa ufanisi`,
        (action, topic, time) => `Kipindi cha ${time} kitawezesha kila mwanafunzi ${action} ${topic}`,
    ],
    english: [
        (action, topic, time) => `By the end of ${time}, each student should be able to ${action} ${topic}`,
        (action, topic, time) => `Within ${time}, student should be able to ${action} ${topic}`,
        (action, topic, time) => `After ${time}, the student should be able to ${action} ${topic}`,
        (action, topic, time) => `The ${time} period will enable each student to ${action} ${topic}`,
    ]
};
const newKnowledgePatterns = {
    english: {
        teacher: [
            (action, topic) => `guiding students to ${action} ${topic}`,
            (action, topic) => `demonstrating how to ${action} ${topic}`,
            (action, topic) => `facilitating students' ability to ${action} ${topic}`,
            (action, topic) => `leading the class in ${getVerbForm(action, 'gerund', 'english')} ${topic}`
        ],
        student: [
            (action, topic) => `working to ${action} ${topic}`,
            (action, topic) => `practicing ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `actively ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `Class members engaged in ${getVerbForm(action, 'gerund', 'english')} ${topic}`
        ],
        assessment: [
            (action, topic) => `Checking if students can ${action} ${topic}`,
            (action, topic) => `Verifying whether learners are able to ${action} ${topic}`,
            (action, topic) => `Assessing students' ${getVerbForm(action, 'noun', 'english')} of ${topic}`,
            (action, topic) => `Evaluating if student can successfully ${action} ${topic}`
        ]
    },
    swahili: {
        teacher: [
            (action, topic) => `Mwalimu kuwaongoza wanafunzi ${action} ${topic}`,
            (action, topic) => `Mwalimu kuonyesha jinsi ya ${action} ${topic}`,
            (action, topic) => `Mwalimu kuwezesha wanafunzi ${action} ${topic}`,
            (action, topic) => `Mwalimu kuwaelekeza wanafunzi katika ${getVerbForm(action, 'noun', 'swahili')} wa ${topic}`
        ],
        student: [
            (action, topic) => `Wanafunzi kufanya kazi ya ${action} ${topic}`,
            (action, topic) => `Wajifunzi kujifunza jinsi ya ${action} ${topic}`,
            (action, topic) => `Wanafunzi kwa bidii ${action} ${topic}`,
            (action, topic) => `Wanachuo kushiriki katika ${getVerbForm(action, 'noun', 'swahili')} wa ${topic}`
        ],
        assessment: [
            (action, topic) => `Kuangalia kama wanafunzi wanaweza ${action} ${topic}`,
            (action, topic) => `Kuthibitisha ikiwa wajifunzi wanaweza ${action} ${topic}`,
            (action, topic) => `Kutathmini uwezo wa wanafunzi wa ${action} ${topic}`,
            (action, topic) => `Kuhakiki ${getVerbForm(action, 'noun', 'swahili')} wa wanafunzi wa ${topic}`
        ]
    }
};

// Patterns for reinforcement with verb forms
const reinforcementPatterns = {
    english: {
        teacher: [
            (action, topic) => `guiding students in groups to discuss how to ${action} ${topic}`,
            (action, topic) => `organizing group activities for ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `facilitating collaborative work to ${action} ${topic}`,
            (action, topic) => `coordinating group discussions on ${getVerbForm(action, 'gerund', 'english')} ${topic}`
        ],
        student: [
            (action, topic) => `Students in groups discussing ways to ${action} ${topic}`,
            (action, topic) => `Students collaborating in teams while ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `Students working together to ${action} ${topic}`,
            (action, topic) => `Groups of students practicing ${getVerbForm(action, 'gerund', 'english')} ${topic}`
        ],
        assessment: [
            (action, topic) => `Checking whether students in groups can discuss ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `Assessing group ability to ${action} ${topic}`,
            (action, topic) => `Verifying collaborative ${getVerbForm(action, 'noun', 'english')} of ${topic}`,
            (action, topic) => `Evaluating team discussions about ${getVerbForm(action, 'gerund', 'english')} ${topic}`
        ]
    },
    swahili: {
        teacher: [
            (action, topic) => `Mwalimu kuwaelekeza wanafunzi kwenye vikundi kujadili jinsi ya ${action} ${topic}`,
            (action, topic) => `Mwalimu kuandaa shughuli za kikundi za ${action} ${topic}`,
            (action, topic) => `Mwalimu kuwezesha kazi ya pamoja ya ${action} ${topic}`,
            (action, topic) => `Mwalimu kuratibu majadiliano ya vikundi kuhusu ${getVerbForm(action, 'noun', 'swahili')} wa ${topic}`
        ],
        student: [
            (action, topic) => `Wanafunzi kwenye vikundi kujadili njia za ${action} ${topic}`,
            (action, topic) => `Wajifunzi kushirikiana katika timu wakiwa ${action} ${topic}`,
            (action, topic) => `Wanafunzi kufanya kazi pamoja ${action} ${topic}`,
            (action, topic) => `Vikundi vya wanafunzi kufanya mazoezi ya ${getVerbForm(action, 'noun', 'swahili')} wa ${topic}`
        ],
        assessment: [
            (action, topic) => `Kuangalia kama wanafunzi kwenye vikundi wanaweza kujadili ${action} ${topic}`,
            (action, topic) => `Kutathmini uwezo wa kikundi wa ${action} ${topic}`,
            (action, topic) => `Kuthibitisha ${getVerbForm(action, 'noun', 'swahili')} wa pamoja wa ${topic}`,
            (action, topic) => `Kuhakiki majadiliano ya timu kuhusu ${getVerbForm(action, 'noun', 'swahili')} wa ${topic}`
        ]
    }
};

// Patterns for reflection with verb forms
const reflectionPatterns = {
    english: {
        teacher: [
            (action, topic) => `asking students about challenges faced when trying to ${action} ${topic}`,
            (action, topic) => `encouraging students to reflect on ${getVerbForm(action, 'gerund', 'english')} ${topic} in real-life contexts`,
            (action, topic) => `helping students connect ${getVerbForm(action, 'gerund', 'english')} ${topic} to practical situations`,
            (action, topic) => `prompting students to relate their ${getVerbForm(action, 'noun', 'english')} of ${topic} to their experiences`
        ],
        student: [
            (action, topic) => `Students mentioning difficulties encountered while ${getVerbForm(action, 'gerund', 'english')} ${topic}`,
            (action, topic) => `students sharing how they can apply ${getVerbForm(action, 'gerund', 'english')} ${topic} in real situations`,
            (action, topic) => `Students relating what they learned about ${getVerbForm(action, 'gerund', 'english')} ${topic} to everyday life`,
            (action, topic) => `Class members connecting their ${getVerbForm(action, 'noun', 'english')} of ${topic} to practical scenarios`
        ],
        assessment: [
            () => `Checking their responses and understanding`,
            () => `Assessing the quality of student reflections`,
            () => `Evaluating their ability to make connections`,
            () => `Verifying the depth of student insights`
        ]
    },
    swahili: {
        teacher: [
            (action, topic) => `Mwalimu kuwauliza wanafunzi kuhusu changamoto waliozikumbana wakati wa ${action} ${topic}`,
            (action, topic) => `Mwalimu kuwahimiza wanafunzi kutafakari kuhusu ${getVerbForm(action, 'noun', 'swahili')} wa ${topic} katika mazingira halisi`,
            (action, topic) => `Mwalimu kuwasaidia wanafunzi kuunganisha ${action} ${topic} na hali za vitendo`,
            (action, topic) => `Mwalimu kuwahamasisha wanafunzi kuhusianisha ${getVerbForm(action, 'noun', 'swahili')} wao wa ${topic} na uzoefu wao`
        ],
        student: [
            (action, topic) => `Wanafunzi kutaja ugumu waliokutana nao wakati wa ${action} ${topic}`,
            (action, topic) => `Wajifunzi kushiriki jinsi wanavyoweza kutumia ${action} ${topic} katika hali halisi`,
            (action, topic) => `Wanafunzi kuhusianisha walichojifunza kuhusu ${action} ${topic} na maisha ya kila siku`,
            (action, topic) => `Wanachuo kuunganisha ${getVerbForm(action, 'noun', 'swahili')} wao wa ${topic} na mazingira ya vitendo`
        ],
        assessment: [
            () => `Kuangalia majibu yao na uelewa wao`,
            () => `Kutathmini ubora wa tafakari za wanafunzi`,
            () => `Kuhakiki uwezo wao wa kufanya miunganisho`,
            () => `Kuthibitisha kina cha maarifa ya wanafunzi`
        ]
    }
};

// Patterns for consolidation with verb forms
const consolidationPatterns = {
    english: {
        teacher: [
            (topic) => `asking a few questions and summarizing the lesson on ${topic}`,
            (topic) => `reviewing key points and concluding the lesson about ${topic}`,
            (topic) => `wrapping up with questions and summary of ${topic}`,
            (topic) => `recapping the main concepts of ${topic} through questions`
        ],
        student: [
            (topic) => `Students answering questions and taking brief notes on ${topic}`,
            (topic) => `Students responding to questions and writing key points about ${topic}`,
            (topic) => `Students participating in review and noting main ideas on ${topic}`,
            (topic) => `Class members answering questions and recording summary notes about ${topic}`
        ],
        assessment: [
            () => `Checking if student can answer questions correctly and take notes`,
            () => `Verifying students' ability to respond accurately and capture key points`,
            () => `Assessing whether student can answer properly and document main ideas`,
            () => `Evaluating students' responses and note-taking accuracy`
        ]
    },
    swahili: {
        teacher: [
            (topic) => `Mwalimu kuuliza maswali machache na kufanya muhtasari wa somo kuhusu ${topic}`,
            (topic) => `Mwalimu kukagua vipengele muhimu na kuhitimisha somo kuhusu ${topic}`,
            (topic) => `Mwalimu kumalizia kwa maswali na muhtasari wa ${topic}`,
            (topic) => `Mwalimu kurudia dhana kuu za ${topic} kupitia maswali`
        ],
        student: [
            (topic) => `Wanafunzi kujibu maswali na kuandika nukuu fupi kuhusu ${topic}`,
            (topic) => `Wajifunzi kujibu maswali na kuandika vipengele muhimu kuhusu ${topic}`,
            (topic) => `Wanafunzi kushiriki katika ukaguzi na kuandika mawazo makuu kuhusu ${topic}`,
            (topic) => `Wanachuo kujibu maswali na kurekodi nukuu za muhtasari kuhusu ${topic}`
        ],
        assessment: [
            () => `Kuangalia kama wanafunzi wanaweza kujibu maswali kwa usahihi na kuandika nukuu`,
            () => `Kuthibitisha uwezo wa wanafunzi wa kujibu vizuri na kupata vipengele muhimu`,
            () => `Kutathmini ikiwa wajifunzi wanaweza kujibu vizuri na kuandika mawazo makuu`,
            () => `Kuhakiki majibu ya wanafunzi na usahihi wa kuandika nukuu`
        ]
    }
};

var userLoad = document.getElementById("userLoad");
    var lessonplanSubmit1 =document.getElementById("submit-lesson-plan");
    function updateContent() {
        var period = document.getElementById("period").value;
        var subject =document.getElementById("subject").value;
       var school =document.getElementById("school").value;
       var name = document.getElementById("teacherName").value;
       var subClasses = document.getElementById("classes").value;
       var subStreams = getStreamValue();
       var dateOption = document.getElementById("dateOption").value;
       var subDate = document.getElementById("date").value;
       var compLesson = document.getElementById("compLesson").value;
       var mainlesson = document.getElementById("mainlesson").value;
       var topicLesson = document.getElementById("topicLesson").value;
       var subTopiclesson = document.getElementById("subTopiclesson").value;
       var specificLesson = document.getElementById("specificLesson").value;
       var aidsLesson = document.getElementById("aidsLesson").value;
       var tlmaterials =document.getElementById("tlmaterials").value;
       var femaleReg = document.getElementById("femaleReg").value;
       var maleReg = document.getElementById("maleReg").value;
       var femalePres = document.getElementById("femalePres").value;
       var malePres = document.getElementById("malePres").value;
       var wrdImp1 = document.getElementById("wrdImp1").value;
       var wrdImp2 = document.getElementById("wrdImp2").value;
       var stdUnderstood = document.getElementById("stdUnderstood").value;
       var yearOfStd = document.getElementById("yearOfStd").value;
       
      var editableRefEl = document.getElementById("editableRef");
var editableRefGroup = document.getElementById("editableRefGroup");
var refLesson;

if (editableRefGroup && editableRefGroup.style.display !== 'none' && editableRefEl && editableRefEl.value.trim()) {
    
    refLesson = editableRefEl.value.trim();
} else {
    
    var refSelect = document.getElementById("refLesson");
    refLesson = refSelect ? refSelect.value : "";
}
       var schoolNm = document.getElementById("schoolNm");
       var schoolNmc = school;
       var teacherName = document.getElementById("lessonTch");
        var lessonSubject = document.getElementById("lessonSbjt");
        var teacherInfo = document.getElementById("teacherInfo");
        var lessonPeriod = document.getElementById("lessonPrd");
        var lessonTime = document.getElementById("lessonTm");
        var studentClass =document.getElementById("lessonClss");
        var streams =document.getElementById("lessonStrm");
        var lessonDate = document.getElementById("lessonDt");
        var sylbsCmp = document.getElementById("sylbsCmp");
        var sylbsMnObj = document.getElementById("sylbsMnObj");
        var sylbsMntp = document.getElementById("sylbsMntp");
        var sylbsSbtp = document.getElementById("sylbsSbtp");
        var sylbsSpobj = document.getElementById("sylbsSpobj");
        var sylbstlads = document.getElementById("sylbstlads");
        var sylbsMts = document.getElementById("sylbsMts");
        var sylbsRfrs = document.getElementById("sylbsRfrs");
        var flReg = document.getElementById("flReg");
        var mlReg = document.getElementById("mlReg");
        var flPr = document.getElementById("flPr");
        var mlPr = document.getElementById("mlPr");
        var flAb = document.getElementById("flAb");
        var mlAb = document.getElementById("mlAb");
        var stRegt = document.getElementById("stRegt");
        var stPrt = document.getElementById("stPrt");
        var stAbt = document.getElementById("stAbt");
        var introCont = document.getElementById("introCont");
        var newKnow = document.getElementById("newKnow");
        var reinCont = document.getElementById("reinCont");
        var refleCont = document.getElementById("refleCont");
        var consoCont = document.getElementById("consoCont");
        var intro1 = document.getElementById("intro1");
        var intro2 = document.getElementById("intro2");
        var intro3 = document.getElementById("intro3");
        var new1 = document.getElementById("new1");
        var new2 = document.getElementById("new2");
        var new3 = document.getElementById("new3");
        var rein1 = document.getElementById("rein1");
        var rein2 = document.getElementById("rein2");
        var rein3 = document.getElementById("rein3");
        var reflect1 = document.getElementById("reflect1");
        var reflect2 = document.getElementById("reflect2");
        var reflect3 = document.getElementById("reflect3");
        var conso1 = document.getElementById("conso1");
        var conso2 = document.getElementById("conso2");
        var conso3 = document.getElementById("conso3");
        var lessonComment = document.getElementById("lessonComment");
        //var cYear = document.getElementById("cYear");
        studentComm = document.getElementById("studentComm");
        remarkComm = document.getElementById("remarkComm");


       
       schoolNm.innerText = schoolNmc;
       teacherName.innerText = name;
       //lessonSubject.innerText = subject;
       teacherInfo.innerText = `${subject}`;
       lessonPeriod.innerText = period;
       studentClass.innerText = subClasses;
       streams.innerText = subStreams;
       sylbsMntp.innerText = topicLesson; 
       sylbsSbtp.innerText = subTopiclesson; 
       //cYear.innerText = yearOfStd;
       sylbstlads.innerText = aidsLesson; 
       sylbsMts.innerText = tlmaterials; 
       sylbsRfrs.innerHTML = formatReference(refLesson);
       flReg.innerText = femaleReg; 
       mlReg.innerText = maleReg; 
       flPr.innerText = femalePres; 
       mlPr.innerText = malePres; 
       flAb.innerText = femaleReg - femalePres;
       mlAb.innerText = maleReg - malePres;
       stRegt.innerText = parseInt(femaleReg) + parseInt(maleReg);
       stPrt.innerText = parseInt(femalePres) + parseInt(malePres);
       stAbt.innerText = (femaleReg - femalePres )+ (maleReg - malePres );
       var underStd = parseInt(stdUnderstood);
       var underStdPrc = ((parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres)))*100).toFixed(1)+"%";
       var notUnderstd = (parseInt(femalePres) + parseInt(malePres))-parseInt(stdUnderstood);
       var notUnderstdprs = ((1 - (parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres))))*100).toFixed(1) +"%";
       if (dateOption === 'set' && subDate) {
    lessonDate.innerText = subDate;
} else if (dateOption === 'blank') {
    lessonDate.innerText = ""; 
}
     if (subject === "Kiswahili" || subject === "Elimu Ya Dini Ya Kiislam") {
         var schoolNm = document.getElementById("schoolNm");
         var muda = document.getElementById("muda");
         var mudaSomo1 = document.getElementById("muda-somo1");
         var andalio = document.getElementById("andalio");
         var somo =document.getElementById("somo");
         var darasa = document.getElementById("darasa");
         var mkondo = document.getElementById("mkondo");
         var kipindi = document.getElementById("kipindi");
         var ujuzi = document.getElementById("ujuzi");
         var lengoKuu = document.getElementById("lengoKuu");
         var madaKuu = document.getElementById("madaKuu");
         var madaNdogo = document.getElementById("madaNdogo");
         var jinaMwalimu = document.getElementById("jinaMwalimu");
         var lengoMahususi = document.getElementById("lengoMahususi");
         var tarehe = document.getElementById("tarehe");
         var shule = document.getElementById("shule");
         var vifaa = document.getElementById("vifaa");
         var nukuu = document.getElementById("nukuu");
         var rejea = document.getElementById("rejea");
         var idadi = document.getElementById("idadi");
        // var jinsia = document.getElementById("jinsia");
         var hawapo = document.getElementById("hawapo");
         var sajiliwa = document.getElementById("sajiliwa");
         var fika = document.getElementById("fika");
         var wasichana = document.getElementById("wasichana");
         var wavulana = document.getElementById("wavulana");
         var jumla = document.getElementById("jumla");
         var wasichana1 = document.getElementById("wasichana1");
         var wavulana1 = document.getElementById("wavulana1");
         var jumla1 = document.getElementById("jumla1");
         var wasichana2 = document.getElementById("wasichana2");
         var wavulana2 = document.getElementById("wavulana2");
         var jumla2 = document.getElementById("jumla2");
         var hatua = document.getElementById("hatua");
         var mwalimu = document.getElementById("mwalimu");
         var mwanafunzi = document.getElementById("mwanafunzi");
         var angalia = document.getElementById("angalia");
         var mwanzo = document.getElementById("mwanzo");
         var mpya = document.getElementById("mpya");
         var kuimarisha = document.getElementById("kuimarisha");
         var tafakari = document.getElementById("tafakari");
         var hitimisho = document.getElementById("hitimisho");
         var tathMwanafunzi = document.getElementById("tathMwanafunzi");
         var tahMwalimu = document.getElementById("tathMwalimu");
         var maoni = document.getElementById("maoni");
         var kichwaChaHabari = document.getElementById("kichwa-habari")
         var schoolNm = document.getElementById("schoolNm");
         var schoolNmc = school;
         var school =document.getElementById("school").value;
         


         schoolNm.innerText = schoolNmc;
         andalio.innerText = "andalio la somo";
         kichwaChaHabari.innerText = "Hatua za Ufundishaji na Ujifunzaji";
         somo.innerText = "somo";
         shule.innerText = "shule";
         darasa.innerText = "darasa";
         mkondo.innerText = "mkondo";
         kipindi.innerText = "kipindi";
         ujuzi.innerText = "umahiri";
         lengoKuu.innerText = "lengo kuu";
         madaKuu.innerText = "mada kuu";
         madaNdogo.innerText = "mada Ndogo";
         jinaMwalimu.innerText = "jina La Mwalimu";
         lengoMahususi.innerText = "Lengo Mahususi";
         tarehe.innerText = "tarehe";
         vifaa.innerText ="zana za kujifunzia";
         nukuu.innerText = "zana za kufundishia";
         rejea.innerText = "rejea";
         idadi.innerText ="idadi";
        // jinsia.innerText ="jinsia";
         fika.innerText = "walio hudhuria";
         hawapo.innerText = "wasio hudhuria";
         sajiliwa.innerText ="Walio andikishwa";
         wasichana.innerText = "wasichana";
         wavulana.innerText = "wavulana";
         jumla.innerText = "jumla";
         wasichana1.innerText = "wasichana";
         wavulana1.innerText = "wavulana";
         jumla1.innerText = "jumla";
         wasichana2.innerText = "wasichana";
         wavulana2.innerText = "wavulana";
         jumla2.innerText = "jumla";
         hatua.innerText = "hatua";
         mwalimu.innerText = "vitendo vya ufundishaji";
         mwanafunzi.innerText = "vitendo vya ujifunzaji";
         angalia.innerText = "vitendo vya upimaji";
         mwanzo.innerText = "utangulizi";
         mpya.innerText ="ujuzi mpya";
         kuimarisha.innerText = "kuimarisha maarifa";
         tafakari.innerText = "tafakari";
         hitimisho.innerText = "hitimisho";
         tathMwanafunzi.innerText = "tahmini ya Mwanafunzi :";
         tathMwalimu.innerText = "tathmini ya mwalimu :";
         maoni.innerText = "maoni :";
         muda.innerText = "muda";
         mudaSomo1.innerText = `Muda (Dak)`;

         if (subClasses === "Form One"){
            subNewClass = "kidato cha Kwanza";
         } else if (subClasses === "Form Two") {
            subNewClass = "kidato cha pili";
         } else if (subClasses === "Form Three") {
            subNewClass = "kidato cha tatu";
         } else {
            subNewClass = "kidato cha nne";
         }
         studentClass.innerText = subNewClass;

    const timePeriod = getTimePeriod(period, 'swahili');
sylbsSpobj.innerText = sentenceCase(
    getRandomElement(specificObjectivePatterns.swahili)(wrdImp2, specificLesson, timePeriod)
);    
sylbsCmp.innerText = sentenceCase("somo la kiswahili " + subNewClass + ",linatazamiwa kumpatia mwanafunzi ujuzi wa " + compLesson);
sylbsMnObj.innerText = sentenceCase("inatazamiwa kuwa mwanafunzi amalizapo " + subNewClass + ",ataweza " + mainlesson);

// Dynamic student comment in Kiswahili
studentComm.innerText = sentenceCase(getRandomElement(studentCommentPatterns.swahili)(wrdImp2, specificLesson));

// Dynamic remark in Kiswahili
remarkComm.innerText = sentenceCase(getRandomElement(remarkPatterns.swahili)());

// For lesson comment in Kiswahili:
if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
    lessonComment.innerText = sentenceCase("somo limeelewekana wanafunzi " + underStd + " (" + underStdPrc + ")");
} else if(notUnderstd === 1) {
    lessonComment.innerText = sentenceCase("somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na mwanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") amepatiwa zoezi kwa ujifunzanzi wa ziada");
} else {
    lessonComment.innerText = sentenceCase("somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na wanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") wamepatiwa zaezi kwa ujifunzaji wa ziada");
}

// Dynamic introduction steps in Kiswahili:
if(wrdImp1 === "Endelea") {
    intro1.innerText = sentenceCase(getRandomElement(introPatterns.swahili.askQuestion)());
    intro2.innerText = sentenceCase(getRandomElement(introPatterns.swahili.studentResponseReview)());
    intro3.innerText = sentenceCase(getRandomElement(introPatterns.swahili.checking)());
} else {
    intro1.innerText = sentenceCase(getRandomElement(introPatterns.swahili.brainstorm)(specificLesson));
    intro2.innerText = sentenceCase(getRandomElement(introPatterns.swahili.studentResponseBrainstorm)(specificLesson));
    intro3.innerText = sentenceCase(getRandomElement(introPatterns.swahili.checking)());
}

// Dynamic teaching steps in Kiswahili:
new1.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.swahili.teacher)(wrdImp2, specificLesson));
new2.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.swahili.student)(wrdImp2, specificLesson));
new3.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.swahili.assessment)(wrdImp2, specificLesson));

rein1.innerText = sentenceCase(getRandomElement(reinforcementPatterns.swahili.teacher)(wrdImp2, specificLesson));
rein2.innerText = sentenceCase(getRandomElement(reinforcementPatterns.swahili.student)(wrdImp2, specificLesson));
rein3.innerText = sentenceCase(getRandomElement(reinforcementPatterns.swahili.assessment)(wrdImp2, specificLesson));

reflect1.innerText = sentenceCase(getRandomElement(reflectionPatterns.swahili.teacher)(wrdImp2, specificLesson));
reflect2.innerText = sentenceCase(getRandomElement(reflectionPatterns.swahili.student)(wrdImp2, specificLesson));
reflect3.innerText = sentenceCase(getRandomElement(reflectionPatterns.swahili.assessment)());

conso1.innerText = sentenceCase(getRandomElement(consolidationPatterns.swahili.teacher)(specificLesson));
conso2.innerText = sentenceCase(getRandomElement(consolidationPatterns.swahili.student)(specificLesson));
conso3.innerText = sentenceCase(getRandomElement(consolidationPatterns.swahili.assessment)());

       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "7 & 8" ||period === "8 & 9" ) {

         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText = "10";
         consoCont.innerText ="5";
         lessonTime.innerText = "Dakika 80";

       } else if(period === "1" || period === "2" || period === "3" ||period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {
            
        introCont.innerText ="5";
        newKnow.innerText ="15";
        reinCont.innerText ="10";
        refleCont.innerText ="5";
        consoCont.innerText ="5";
        lessonTime.innerText = "Dakika 40";
        

       } else {
         lessonTime.innerText = " ";
       }

     } else { 
       const timePeriod = getTimePeriod(period, 'english');
sylbsSpobj.innerText = sentenceCase(
    getRandomElement(specificObjectivePatterns.english)(wrdImp2, specificLesson, timePeriod)
);
sylbsCmp.innerText = sentenceCase("By the end of " + subClasses + " course,Student should have developed competence on " + compLesson);
sylbsMnObj.innerText = sentenceCase("By the end of  " + subClasses + " course,Student should be able to " + mainlesson);

// Dynamic student comment in English
studentComm.innerText = sentenceCase(getRandomElement(studentCommentPatterns.english)(wrdImp2, specificLesson));

// Dynamic remark in English
remarkComm.innerText = sentenceCase(getRandomElement(remarkPatterns.english)());

// For lesson comment in English:
if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
    lessonComment.innerText = sentenceCase("Lesson understood well by " + underStd + " students  (" + underStdPrc + ")");
} else if(notUnderstd === 1) {
    lessonComment.innerText = sentenceCase("Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " student (" + notUnderstdprs + ") was given an exercise for more practice");
} else {
    lessonComment.innerText = sentenceCase("Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " students (" + notUnderstdprs + ") were given an exercise for more practice");
}

// Dynamic introduction steps in English:
if(wrdImp1 === "continue") {
    intro1.innerText = sentenceCase(getRandomElement(introPatterns.english.askQuestion)());
    intro2.innerText = sentenceCase(getRandomElement(introPatterns.english.studentResponseReview)());
    intro3.innerText = sentenceCase(getRandomElement(introPatterns.english.checking)());
} else {
    intro1.innerText = sentenceCase(getRandomElement(introPatterns.english.brainstorm)(specificLesson));
    intro2.innerText = sentenceCase(getRandomElement(introPatterns.english.studentResponseBrainstorm)(specificLesson));
    intro3.innerText = sentenceCase(getRandomElement(introPatterns.english.checking)());
}

// Dynamic teaching steps in English:
new1.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.english.teacher)(wrdImp2, specificLesson));
new2.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.english.student)(wrdImp2, specificLesson));
new3.innerText = sentenceCase(getRandomElement(newKnowledgePatterns.english.assessment)(wrdImp2, specificLesson));

rein1.innerText = sentenceCase(getRandomElement(reinforcementPatterns.english.teacher)(wrdImp2, specificLesson));
rein2.innerText = sentenceCase(getRandomElement(reinforcementPatterns.english.student)(wrdImp2, specificLesson));
rein3.innerText = sentenceCase(getRandomElement(reinforcementPatterns.english.assessment)(wrdImp2, specificLesson));

reflect1.innerText = sentenceCase(getRandomElement(reflectionPatterns.english.teacher)(wrdImp2, specificLesson));
reflect2.innerText = sentenceCase(getRandomElement(reflectionPatterns.english.student)(wrdImp2, specificLesson));
reflect3.innerText = sentenceCase(getRandomElement(reflectionPatterns.english.assessment)());

conso1.innerText = sentenceCase(getRandomElement(consolidationPatterns.english.teacher)(specificLesson));
conso2.innerText = sentenceCase(getRandomElement(consolidationPatterns.english.student)(specificLesson));
conso3.innerText = sentenceCase(getRandomElement(consolidationPatterns.english.assessment)());

       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "7 & 8" ||period === "8 & 9" ) {

         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText = "10";
         consoCont.innerText ="5";
         lessonTime.innerText = "80 Minutes";
         

       } else if(period === "1" || period === "2" || period === "3" ||period === "4" || period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {
            
        introCont.innerText ="5";
        newKnow.innerText ="15";
        reinCont.innerText ="10";
        refleCont.innerText ="5";
        consoCont.innerText ="5";
        lessonTime.innerText = "40 Minutes";
        

       } else {
         lessonTime.innerText = " ";
       }
    }
    }

function capitalizeFirst(str) {
    if (!str) return str;
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Helper function for sentence case (capitalize after periods)
function sentenceCase(str) {
    if (!str) return str;
    
    // First, make everything lowercase
    str = str.toLowerCase();
    
    // Capitalize the very first character
    str = str.charAt(0).toUpperCase() + str.slice(1);
    
    // Capitalize after sentence-ending punctuation (. ! ?)
    str = str.replace(/([.!?]\s+)([a-z])/g, function(match, punct, letter) {
        return punct + letter.toUpperCase();
    });
    
    return str;
}

function formatReference(ref) {
    if (!ref || ref.trim() === '') return '';
    ref = ref.trim();
    var commaIndex = ref.indexOf(',');
    if (commaIndex !== -1) {
        var authorPart = ref.substring(0, commaIndex).trim().toUpperCase();
        var titlePart = ref.substring(commaIndex + 1).trim();
        titlePart = titlePart.charAt(0).toUpperCase() + titlePart.slice(1);
        return '<strong>' + authorPart + '</strong>, <em>' + titlePart + '</em>';
    } else {
        return '<strong>' + ref.trim().toUpperCase() + '</strong>';
    }
}

function getTimePeriod(period, language) {
    const isDouble = ["1 & 2", "3 & 4", "5 & 6", "6 & 7", "7 & 8", "8 & 9"].includes(period);
    
    if (language === 'swahili') {
        return isDouble ? "dakika 80" : "dakika 40";
    } else {
        return isDouble ? "80 minutes" : "40 minutes";
    }
}
