var userLoad = document.getElementById("userLoad");
    var lessonplanSubmit1 =document.getElementById("submit-lesson-plan");
    function updateContent() {
        var period = document.getElementById("period").value;
        var subject =document.getElementById("subject").value;
       var school =document.getElementById("school").value;
       var name = document.getElementById("teacherName").value;
       var subClasses = document.getElementById("classes").value;
       var subStreams = document.getElementById("streams").value;
       var subDate = document.getElementById("date").value;
       var compLesson = document.getElementById("compLesson").value;
       var mainlesson = document.getElementById("mainlesson").value;
       var topicLesson = document.getElementById("topicLesson").value;
       var subTopiclesson = document.getElementById("subTopiclesson").value;
       var specificLesson = document.getElementById("specificLesson").value;
       var aidsLesson = document.getElementById("aidsLesson").value;
       var tlmaterials =document.getElementById("tlmaterials").value;
       var refLesson = document.getElementById("refLesson").value;
       var femaleReg = document.getElementById("femaleReg").value;
       var maleReg = document.getElementById("maleReg").value;
       var femalePres = document.getElementById("femalePres").value;
       var malePres = document.getElementById("malePres").value;
       var wrdImp1 = document.getElementById("wrdImp1").value;
       var wrdImp2 = document.getElementById("wrdImp2").value;
       var stdUnderstood = document.getElementById("stdUnderstood").value;
       var yearOfStd = document.getElementById("yearOfStd").value;

       var schoolNm = document.getElementById("schoolNm");
       var schoolNmc = school +" secondary school";
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
        var rein2 = document.getElementById("rein1");
        var rein2 = document.getElementById("rein2");
        var rein3 = document.getElementById("rein3");
        var reflect1 = document.getElementById("reflect1");
        var reflect2 = document.getElementById("reflect2");
        var reflect3 = document.getElementById("reflect3");
        var conso1 = document.getElementById("conso1");
        var conso2 = document.getElementById("conso2");
        var conso3 = document.getElementById("conso3");
        var lessonComment = document.getElementById("lessonComment");
        var cYear = document.getElementById("cYear");
        studentComm = document.getElementById("studentComm");
        remarkComm = document.getElementById("remarkComm");


       
       schoolNm.innerText = schoolNmc;
       teacherName.innerText = name;
       //lessonSubject.innerText = subject;
       teacherInfo.innerText = `${subject}`;
       lessonPeriod.innerText = period;
       studentClass.innerText = subClasses;
       streams.innerText = subStreams;
       lessonDate.innerText = subDate;
       sylbsMntp.innerText = topicLesson; 
       sylbsSbtp.innerText = subTopiclesson; 
       cYear.innerText = yearOfStd;
       sylbstlads.innerText = aidsLesson; 
       sylbsMts.innerText = tlmaterials; 
       sylbsRfrs.innerText = refLesson; 
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

     if (subject === "Kiswahili" || subject === "Elimu Ya Dini Ya Kiislam") {
         var schoolNm = document.getElementById("schoolNm");
         var muda = document.getElementById("muda");
         var andalio = document.getElementById("andalio");
         //var somo =document.getElementById("somo");
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
         var schoolNm = document.getElementById("schoolNm");
         var schoolNmc ="shule ya sekondari " + school;
         var school =document.getElementById("school").value;


         schoolNm.innerText = schoolNmc;
         andalio.innerText = "andalio la somo";
         //somo.innerText = "somo";
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

        sylbsSpobj.innerText = "mwishoni mwa kipindi kila mwanafunzi aweze " + wrdImp2 +" " + specificLesson; 
       sylbsCmp.innerText = "somo la kiswahili "+ subNewClass +",linatazamiwa kumpatia mwanafunzi ujuzi wa " + compLesson; 
       sylbsMnObj.innerText = "inatazamiwa kuwa mwanafunzi amalizapo "+ subNewClass + ",ataweza " + mainlesson; 
       studentComm.innerText ="Somo limeeleweka vizuri na mwanafunzi,kwa kuwa ameshiriki vizuri " + wrdImp2 +" "+ specificLesson;
       remarkComm.innerText ="Somo limeeleweka vizuri hivyo nitaendelea na sehemu inayofuata kipindi kijacho";
       if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "somo limeelewekana wanafunzi "+ underStd +" (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na mwanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") amepatiwa zoezi kwa ujifunzanzi wa ziada";
       } else { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na wanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") wamepatiwa zaezi kwa ujifunzaji wa ziada";
       }
       if(wrdImp1 === "kuuliza maswali") {
        intro1.innerText = "kuuliza maswali juu ya somo lililopita";
        intro2.innerText = "mwanafunzi kutoa majibu ya maswali ya yanayoulizwa kwa mdomo ";
        intro3.innerText = "kuangalia kama mwanafunzi anaweza kutoa majibu kwa usahihi";

       }else {
        intro1.innerText = "Mwalimu kutambulisha somo jipya kwa kuuliza mwaswali kuhusu " + specificLesson;
        intro2.innerText = "mwanafunzi kkujibu maswali yanayoulizwa kuhusu " + specificLesson ;
        intro3.innerText = "kuangaliakama mwanafunzia anaweza kutoa majibu kwa usahihi";
       }

       new1.innerText = "mwalimu kumuelekeza mwanafunzi " + wrdImp2 +" "+ specificLesson;
       new2.innerText = "mwanfunzi " + wrdImp2 +" " + specificLesson;
       new3.innerText = "kuangalia  kama mwanafunzi anaweza "+ wrdImp2 +" "+ specificLesson;

       rein1.innerText = "mwalimu kuwaelekeza wanafunzi kwenye kundi kujadili jinsi ya " + wrdImp2 +" "+ specificLesson;
       rein2.innerText = "wanafunzi kwenye makundi kujadili jinsi ya " + wrdImp2 +" "+ specificLesson;
       rein3.innerText = "kuangalia kama mwanafunzi anaweza kwenye kundi anaweza kujadili jinsi ya "+ wrdImp2 +" "+ specificLesson;

       reflect1.innerText = "Mwalimu kumpa nafasi kila mwanafunzi kuhusianisha alichojifunza kuhusu "+ wrdImp2 +" "+ specificLesson+" na mazingira halisia";
       reflect2.innerText = "mwanafunzi kuhusianisha alichojifunza kuhusu "+ wrdImp2 +" "+ specificLesson + " na mazingira halisia";
       reflect3.innerText = "kuangalia majibu yake";

       conso1.innerText = "mwalimu kuuliza maswali machache na kufanya marejeo ya somo kwa uchache kuhusu " + specificLesson;
       conso2.innerText = "mwanafunzi kujibu maswali machache yalioulizwa na kuandika nukuu chache za marejeo  ya somo kuhusu " + specificLesson;
       conso3.innerText = "kuangalia kama anaweza kujibu maswali kwa usahihi na kuchukua nukuu chache za marejeo ya somo";

       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "8 & 9" ) {

         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText = "10";
         consoCont.innerText ="5";
         lessonTime.innerText = "Dakika 80";
         

       } else if(period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {
            
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
       sylbsSpobj.innerText = "The student should be able to " + wrdImp2 +" " + specificLesson; 
       sylbsCmp.innerText = "By the end of "+ subClasses +" course,Student should have developed competence on " + compLesson; 
       sylbsMnObj.innerText = "By the end of  "+ subClasses + " course,Student should be able to " + mainlesson; 
       studentComm.innerText =" Lesson understood well by the student,because student enjoyed the lesson and participated fully to " + wrdImp2 +" "+ specificLesson;
       remarkComm.innerText ="Lesson understood well and I will continue to the next part";
       if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "Lesson understood well by "+ underStd +" students  (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " student (" + notUnderstdprs + ") was given an exercise for more practice";
       } else { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " students (" + notUnderstdprs + ") were given an exercise for more practice";
       }
       if(wrdImp1 === "ask question") {
        intro1.innerText = "Asking questions about previous lesson";
        intro2.innerText = "Student to respond by giving oral answers ";
        intro3.innerText = "To check if student can respond correctly";

       }else {
        intro1.innerText = "Teacher  brainstorming students about " + specificLesson;
        intro2.innerText = "Student to respond by giving oral answers about " + specificLesson + " questions asked";
        intro3.innerText = "To check if student can respond correctly";
       }

       new1.innerText = "teacher to guide students to " + wrdImp2 +" "+ specificLesson;
       new2.innerText = "students to " + wrdImp2 +" " + specificLesson;
       new3.innerText = "To Check If Student Can "+ wrdImp2 +" "+ specificLesson;

       rein1.innerText = "Teacher To Guide Students In Groups To " + wrdImp2 +" "+ specificLesson;
       rein2.innerText = "Students In Groups To " + wrdImp2 +" "+ specificLesson;
       rein3.innerText = "To Check If Student Can "+ wrdImp2 +" "+ specificLesson;

       reflect1.innerText = "Teacher to ask students about difficulties faced when he/she wanted to "+ wrdImp2 +" "+ specificLesson;
       reflect2.innerText = "Student To Respond By Mentioning  Difficulties faced when he/she wanted to "+ wrdImp2 +" "+ specificLesson;
       reflect3.innerText = "To Check Their Response";

       conso1.innerText = "Teacher To Ask Students Some Question And Making The Summary Of The Lesson about " + specificLesson;
       conso2.innerText = "Student Respond To The Question And Listening The Summary Of The Lesson about " + specificLesson;
       conso3.innerText = " To Check If The Student Can Respond The Question Correctly";
       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "8 & 9" ) {

         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText = "10";
         consoCont.innerText ="5";
         lessonTime.innerText = "80 Minutes";
         

       } else if(period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {
            
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
