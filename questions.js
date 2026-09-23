// TEST 02 — ClassTime 9 | BSEB Class 9 Practice CBT
// Balanced coverage: one easy + one moderate + one challenging MCQ per syllabus topic.
// Plus exactly 2 checkbox-only written-copy subjective questions per subject.
// 81 MCQs + 14 subjective = 95 total questions.
const QUESTIONS = [
  {
    "id": 1,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "निर्देशांक ज्यामिति",
    "question": "कार्तीय तल में बिंदुओं की स्थिति समझाते हुए, बिंदु (−4, −2) किस चतुर्थांश में स्थित है?",
    "options": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "correct": 1
  },
  {
    "id": 2,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "निर्देशांक ज्यामिति",
    "question": "बिंदु A(3, −5) की x-अक्ष से दूरी कितनी है?",
    "options": [
      "5 इकाई",
      "−5 इकाई",
      "3 इकाई",
      "8 इकाई"
    ],
    "correct": 0
  },
  {
    "id": 3,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "निर्देशांक ज्यामिति",
    "question": "प्रथम चतुर्थांश में स्थित ऐसे बिंदु के निर्देशांक चुनिए जिसकी y-अक्ष से दूरी 6 इकाई और x-अक्ष से दूरी 2 इकाई है।",
    "options": [
      "(6,2)",
      "(2,6)",
      "(−2,6)",
      "(6,−2)"
    ],
    "correct": 1
  },
  {
    "id": 4,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "2x + y = 9 में x = 3 होने पर y क्या होगा?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1
  },
  {
    "id": 5,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "निम्न में से कौन-सा बिंदु 2x + 3y = 12 का हल है?",
    "options": [
      "(3,2)",
      "(2,3)",
      "(0,4)",
      "(4,0)"
    ],
    "correct": 0
  },
  {
    "id": 6,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "x + y = 8 के आलेख पर इनमें से कौन-सा बिंदु स्थित नहीं है?",
    "options": [
      "(1,7)",
      "(2,6)",
      "(4,4)",
      "(5,3)"
    ],
    "correct": 3
  },
  {
    "id": 7,
    "subject": "गणित",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "निर्देशांक ज्यामिति",
    "question": "कार्तीय तल बनाकर मूलबिंदु, x-अक्ष और y-अक्ष को अंकित कीजिए तथा किसी भी दो चतुर्थांशों के उदाहरण बिंदु लिखिए।"
  },
  {
    "id": 8,
    "subject": "गणित",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "दो चरों वाले किसी एक रैखिक समीकरण के कम-से-कम चार क्रमित युग्म लिखकर दिखाइए कि वे समीकरण को संतुष्ट करते हैं।"
  },
  {
    "id": 9,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "परमाणु एवं अणु",
    "question": "द्रव्यमान संरक्षण के नियम के अनुसार रासायनिक अभिक्रिया में क्या संरक्षित रहता है?",
    "options": [
      "द्रव्यमान",
      "केवल आयतन",
      "केवल तापमान",
      "केवल रंग"
    ],
    "correct": 0
  },
  {
    "id": 10,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "परमाणु एवं अणु",
    "question": "जल (H₂O) में हाइड्रोजन और ऑक्सीजन का द्रव्यमान अनुपात कितना होता है?",
    "options": [
      "1:8",
      "8:1",
      "2:1",
      "1:2"
    ],
    "correct": 1
  },
  {
    "id": 11,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "परमाणु एवं अणु",
    "question": "यदि X की संयोजकता 2 और Y की संयोजकता 3 है, तो बनने वाले यौगिक का न्यूनतम सूत्र क्या होगा?",
    "options": [
      "XY",
      "X₂Y₃",
      "X₃Y₂",
      "X₂Y"
    ],
    "correct": 2
  },
  {
    "id": 12,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "परमाणु की संरचना",
    "question": "इलेक्ट्रॉन का आवेश कैसा होता है?",
    "options": [
      "धनात्मक",
      "ऋणात्मक",
      "उदासीन",
      "परिवर्ती"
    ],
    "correct": 1
  },
  {
    "id": 13,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "परमाणु की संरचना",
    "question": "रदरफोर्ड के प्रयोग से परमाणु की संरचना के बारे में क्या निष्कर्ष निकला?",
    "options": [
      "परमाणु का अधिकांश भाग खाली है",
      "परमाणु केवल ठोस पिंड है",
      "इलेक्ट्रॉन नाभिक में हैं",
      "नाभिक का कोई आवेश नहीं है"
    ],
    "correct": 0
  },
  {
    "id": 14,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "परमाणु की संरचना",
    "question": "परमाणु संख्या 19 और द्रव्यमान संख्या 39 वाले परमाणु में न्यूट्रॉनों की संख्या कितनी होगी?",
    "options": [
      "19",
      "20",
      "39",
      "58"
    ],
    "correct": 1
  },
  {
    "id": 15,
    "subject": "विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "परमाणु एवं अणु",
    "question": "परमाणु, अणु और आयन में अंतर उदाहरण सहित समझाइए।"
  },
  {
    "id": 16,
    "subject": "विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "परमाणु की संरचना",
    "question": "रदरफोर्ड के परमाणु मॉडल के मुख्य निष्कर्ष और उसकी एक सीमा अपने शब्दों में लिखिए।"
  },
  {
    "id": 17,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "ग्राम-गीत का मर्म",
    "question": "ग्राम-गीतों की सबसे प्रमुख विशेषता क्या मानी गई है?",
    "options": [
      "बनावटी भाषा",
      "सहज लोक-अभिव्यक्ति",
      "केवल हास्य",
      "केवल शहरी जीवन"
    ],
    "correct": 1
  },
  {
    "id": 18,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "ग्राम-गीत का मर्म",
    "question": "लेखक के अनुसार ग्राम-गीत लोक-जीवन से किस प्रकार जुड़े हैं?",
    "options": [
      "सिर्फ त्योहारों तक",
      "लोक-जीवन और सामूहिक अनुभवों से",
      "केवल विद्यालयी शिक्षा से",
      "केवल राजनीति से"
    ],
    "correct": 1
  },
  {
    "id": 19,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "ग्राम-गीत का मर्म",
    "question": "ग्राम-गीतों की सहजता और लोक-संवेदना उनके साहित्यिक महत्व को कैसे बढ़ाती है?",
    "options": [
      "यह लोक-संवेदना और अनुभवों को सहज रूप में अभिव्यक्त करते हैं",
      "वे केवल मनोरंजन हैं",
      "वे केवल शास्त्रीय ग्रंथ हैं",
      "वे केवल दरबारी गीत हैं"
    ],
    "correct": 0
  },
  {
    "id": 20,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "लाल पान की बेगम",
    "question": "‘लाल पान की बेगम’ के लेखक कौन हैं?",
    "options": [
      "फणीश्वरनाथ रेणु",
      "प्रेमचंद",
      "दिनकर",
      "जयशंकर प्रसाद"
    ],
    "correct": 0
  },
  {
    "id": 21,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "लाल पान की बेगम",
    "question": "कहानी में ग्रामीण जीवन को जीवंत बनाने वाला प्रमुख तत्व क्या है?",
    "options": [
      "लोक-संस्कृति और ग्रामीण गतिविधियाँ",
      "वैज्ञानिक प्रयोग",
      "राजकीय युद्ध",
      "समुद्री व्यापार"
    ],
    "correct": 0
  },
  {
    "id": 22,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "लाल पान की बेगम",
    "question": "कहानी में ग्रामीण समाज के कौन-कौन से मानवीय पक्ष उभरते हैं?",
    "options": [
      "आशा-निराशा, संबंध और सामाजिक भावनाएँ",
      "केवल युद्ध",
      "केवल विज्ञान",
      "केवल राजदरबार"
    ],
    "correct": 0
  },
  {
    "id": 23,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "मंझन के पद",
    "question": "मंझन किस काव्य-परंपरा से जुड़े कवि माने जाते हैं?",
    "options": [
      "सूफी काव्य-परंपरा",
      "छायावाद",
      "रीतिकालीन दरबार",
      "वीरगाथा"
    ],
    "correct": 0
  },
  {
    "id": 24,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "मंझन के पद",
    "question": "पदों में प्रेम का कौन-सा रूप प्रमुख है?",
    "options": [
      "आध्यात्मिक और मानवीय प्रेम",
      "केवल हास्य",
      "केवल राजनीतिक प्रेम",
      "केवल धन"
    ],
    "correct": 0
  },
  {
    "id": 25,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "मंझन के पद",
    "question": "मंझन के काव्य में प्रेम को केवल व्यक्तिगत भावना से आगे कैसे देखा गया है?",
    "options": [
      "प्रेम को मानवीय और आध्यात्मिक अनुभव बनाना",
      "प्रेम को केवल लाभ मानना",
      "प्रेम को युद्ध मानना",
      "प्रेम को केवल प्रतियोगिता मानना"
    ],
    "correct": 0
  },
  {
    "id": 26,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "गुरु गोविंद सिंह सिख परंपरा में किस स्थान पर हैं?",
    "options": [
      "दसवें गुरु",
      "पहले गुरु",
      "मुगल सम्राट",
      "केवल दरबारी कवि"
    ],
    "correct": 0
  },
  {
    "id": 27,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "पदों में कौन-सा भाव विशेष रूप से प्रबल है?",
    "options": [
      "वीरता और उत्साह",
      "केवल हास्य",
      "केवल विरह",
      "केवल प्रकृति"
    ],
    "correct": 0
  },
  {
    "id": 28,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "ओज और वीर भाव उनकी कविता के प्रभाव को कैसे बढ़ाते हैं?",
    "options": [
      "ओज और वीर भाव",
      "केवल कठिन शब्द",
      "केवल शांत भाव",
      "केवल हास्य"
    ],
    "correct": 0
  },
  {
    "id": 29,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "बिहार की संगीत साधना",
    "question": "यह पाठ किस पुस्तक का भाग है?",
    "options": [
      "वर्णिका भाग 1",
      "गोधूली भाग 1",
      "पीयूषम् भाग 1",
      "Panorama"
    ],
    "correct": 0
  },
  {
    "id": 30,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "बिहार की संगीत साधना",
    "question": "पाठ का केंद्रीय विषय क्या है?",
    "options": [
      "बिहार की संगीत परंपरा और साधकों का योगदान",
      "केवल फिल्म संगीत",
      "केवल नृत्य",
      "केवल विदेशी संगीत"
    ],
    "correct": 0
  },
  {
    "id": 31,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "बिहार की संगीत साधना",
    "question": "संगीत-साधना और सांस्कृतिक विरासत के बीच क्या संबंध दिखाई देता है?",
    "options": [
      "साधना, परिश्रम और सांस्कृतिक विरासत का संबंध",
      "संगीत का मेहनत से संबंध नहीं",
      "केवल आधुनिक संगीत महत्वपूर्ण है",
      "परंपरा का कोई महत्व नहीं"
    ],
    "correct": 0
  },
  {
    "id": 32,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "अपठित गद्यांश",
    "question": "गद्यांश के अनुसार जल संरक्षण का एक व्यावहारिक उपाय क्या है?",
    "options": [
      "वर्षा जल संचयन",
      "रिसाव रोकना",
      "पानी बहने देना",
      "अनावश्यक सिंचाई"
    ],
    "correct": 1
  },
  {
    "id": 33,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "अपठित गद्यांश",
    "question": "दिए गए गद्यांश का मुख्य संदेश क्या है?",
    "options": [
      "जल का समझदारीपूर्ण उपयोग और संचयन आवश्यक है",
      "जल संरक्षण असंभव है",
      "केवल सरकार जिम्मेदार है",
      "केवल किसान जिम्मेदार हैं"
    ],
    "correct": 1
  },
  {
    "id": 34,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "अपठित गद्यांश",
    "question": "‘व्यावहारिक उपाय’ से किस प्रकार के उपायों का संकेत मिलता है?",
    "options": [
      "ऐसे उपाय जिन्हें वास्तविक जीवन में अपनाया जा सके",
      "केवल किताबों के विचार",
      "केवल महँगे उपकरण",
      "केवल प्रयोगशाला कार्य"
    ],
    "correct": 0
  },
  {
    "id": 35,
    "subject": "हिन्दी",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "गद्य-साहित्य",
    "question": "‘लाल पान की बेगम’ कहानी में ग्रामीण परिवेश की दो विशेषताएँ अपने शब्दों में लिखिए।"
  },
  {
    "id": 36,
    "subject": "हिन्दी",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "काव्य-साहित्य",
    "question": "‘मंझन के पद’ या ‘गुरु गोविंद सिंह के पद’ में से किसी एक के केंद्रीय भाव को उदाहरण सहित स्पष्ट कीजिए।"
  },
  {
    "id": 37,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "यक्ष के प्रश्नों का उत्तर कौन देता है?",
    "options": [
      "भीम",
      "अर्जुन",
      "युधिष्ठिर",
      "नकुल"
    ],
    "correct": 2
  },
  {
    "id": 38,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "इस संवाद में मुख्यतः किस प्रकार के प्रश्न पूछे गए हैं?",
    "options": [
      "नीति और जीवन-मूल्य",
      "केवल युद्ध",
      "केवल प्रकृति-वर्णन",
      "केवल हास्य"
    ],
    "correct": 0
  },
  {
    "id": 39,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "युधिष्ठिर के उत्तर उनके किस नैतिक गुण को सबसे अधिक प्रकट करते हैं?",
    "options": [
      "धैर्य और नीतिपरक बुद्धि",
      "अहंकार",
      "आलस्य",
      "अविवेक"
    ],
    "correct": 0
  },
  {
    "id": 40,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "चत्वारो वेदाः",
    "question": "वेदों की संख्या कितनी है?",
    "options": [
      "दो",
      "तीन",
      "चार",
      "पाँच"
    ],
    "correct": 2
  },
  {
    "id": 41,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "चत्वारो वेदाः",
    "question": "निम्न में से कौन-सा चार वेदों में शामिल है?",
    "options": [
      "ऋग्वेद",
      "पुराणवेद",
      "इतिहासवेद",
      "नाट्यवेद"
    ],
    "correct": 0
  },
  {
    "id": 42,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "चत्वारो वेदाः",
    "question": "चारों वेदों के नाम सही क्रम में लिखने वाला विकल्प कौन-सा है?",
    "options": [
      "ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद",
      "ऋग्वेद, सामवेद, नाट्यवेद, पुराणवेद",
      "यजुर्वेद, पुराणवेद, सामवेद, अथर्ववेद",
      "अथर्ववेद, इतिहासवेद, ऋग्वेद, सामवेद"
    ],
    "correct": 0
  },
  {
    "id": 43,
    "subject": "संस्कृत",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "संवाद में युधिष्ठिर के किसी एक उत्तर से मिलने वाली नीति-शिक्षा संस्कृत में या सरल हिन्दी में लिखिए।"
  },
  {
    "id": 44,
    "subject": "संस्कृत",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "चत्वारो वेदाः",
    "question": "चत्वारो वेदाः पाठ के आधार पर चार वेदों के नाम और उनमें से किसी एक की विशेषता लिखिए।"
  },
  {
    "id": 45,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "फ्रांस की क्रांति",
    "question": "फ्रांस की क्रांति किस वर्ष आरंभ हुई?",
    "options": [
      "1776",
      "1789",
      "1815",
      "1848"
    ],
    "correct": 1
  },
  {
    "id": 46,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "फ्रांस की क्रांति",
    "question": "बास्तील के पतन की तिथि किस घटना से जुड़ी है?",
    "options": [
      "4 जुलाई 1776",
      "14 जुलाई 1789",
      "26 अगस्त 1789",
      "21 जनवरी 1793"
    ],
    "correct": 1
  },
  {
    "id": 47,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "फ्रांस की क्रांति",
    "question": "मानव और नागरिक अधिकारों की घोषणा का मुख्य उद्देश्य क्या था?",
    "options": [
      "स्वतंत्रता और समानता के अधिकारों को मान्यता देना",
      "राजा की शक्ति बढ़ाना",
      "सामंती विशेषाधिकार सुरक्षित करना",
      "कर केवल किसानों पर लगाना"
    ],
    "correct": 0
  },
  {
    "id": 48,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "विश्व युद्धों का इतिहास",
    "question": "प्रथम विश्व युद्ध किस वर्ष शुरू हुआ?",
    "options": [
      "1914",
      "1918",
      "1939",
      "1945"
    ],
    "correct": 0
  },
  {
    "id": 49,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "विश्व युद्धों का इतिहास",
    "question": "द्वितीय विश्व युद्ध के यूरोप में आरंभ से कौन-सी घटना जुड़ी है?",
    "options": [
      "जर्मनी का पोलैंड पर आक्रमण",
      "भारत की स्वतंत्रता",
      "औद्योगिक क्रांति",
      "फ्रांस की क्रांति"
    ],
    "correct": 0
  },
  {
    "id": 50,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "विश्व युद्धों का इतिहास",
    "question": "दोनों विश्व युद्धों के बाद अंतरराष्ट्रीय शांति की आवश्यकता क्यों अधिक महसूस हुई?",
    "options": [
      "युद्धों से भारी मानव और आर्थिक क्षति हुई थी",
      "युद्धों से कोई नुकसान नहीं हुआ",
      "केवल व्यापार बंद करना था",
      "केवल सीमाएँ बदलना लक्ष्य था"
    ],
    "correct": 0
  },
  {
    "id": 51,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "भौतिक स्वरूप",
    "question": "संरचना एवं उच्चावच: भारत के उत्तर में कौन-सी प्रमुख पर्वत श्रेणी स्थित है?",
    "options": [
      "हिमालय",
      "अरावली",
      "सतपुड़ा",
      "नीलगिरि"
    ],
    "correct": 0
  },
  {
    "id": 52,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "भौतिक स्वरूप",
    "question": "संरचना एवं उच्चावच: उत्तरी मैदान मुख्यतः किस प्रकार के निक्षेपों से बने हैं?",
    "options": [
      "जलोढ़ निक्षेप",
      "लावा",
      "ग्रेनाइट",
      "केवल बालू"
    ],
    "correct": 0
  },
  {
    "id": 53,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "भौतिक स्वरूप",
    "question": "संरचना एवं उच्चावच: प्रायद्वीपीय पठार की प्रमुख भौगोलिक विशेषता क्या है?",
    "options": [
      "प्राचीन कठोर चट्टानों का पठारी भाग",
      "नवीन जलोढ़ मैदान",
      "हिम से बना क्षेत्र",
      "केवल तटीय रेत"
    ],
    "correct": 0
  },
  {
    "id": 54,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "अपवाह स्वरूप",
    "question": "भारत की एक प्रमुख बारहमासी नदी कौन-सी है?",
    "options": [
      "गंगा",
      "गोदावरी",
      "लूनी",
      "चंबल"
    ],
    "correct": 0
  },
  {
    "id": 55,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "अपवाह स्वरूप",
    "question": "अपवाह तंत्र किसे कहा जाता है?",
    "options": [
      "नदियों और उनकी सहायक नदियों का जाल",
      "सड़कों का जाल",
      "केवल नहरों का समूह",
      "केवल वर्षा की मात्रा"
    ],
    "correct": 0
  },
  {
    "id": 56,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "अपवाह स्वरूप",
    "question": "हिमालयी नदियों को बारहमासी कहे जाने का मुख्य कारण क्या है?",
    "options": [
      "वर्षा के साथ हिमनदों और बर्फ पिघलने से भी जल मिलता है",
      "केवल समुद्री जल मिलता है",
      "वे कभी नहीं सूखतीं क्योंकि उनमें समुद्र का जल होता है",
      "वे केवल मानसून में बहती हैं"
    ],
    "correct": 0
  },
  {
    "id": 57,
    "subject": "सामाजिक विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "इतिहास",
    "question": "फ्रांस की क्रांति के किसी दो प्रमुख कारणों को संक्षेप में लिखिए।"
  },
  {
    "id": 58,
    "subject": "सामाजिक विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "भूगोल",
    "question": "हिमालयी और प्रायद्वीपीय अपवाह तंत्र में दो प्रमुख अंतर लिखिए।"
  },
  {
    "id": 59,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Saint Kabir",
    "question": "Kabir’s teachings mainly emphasise what?",
    "options": [
      "outer show only",
      "inner truth and devotion",
      "warfare",
      "wealth"
    ],
    "correct": 1
  },
  {
    "id": 60,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Saint Kabir",
    "question": "What did Kabir criticise when religious practices became empty rituals?",
    "options": [
      "simple and sincere",
      "empty rituals without inner understanding",
      "based on kindness",
      "connected with self-discipline"
    ],
    "correct": 1
  },
  {
    "id": 61,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Saint Kabir",
    "question": "What central idea about human unity is conveyed through Kabir’s teachings?",
    "options": [
      "division between communities",
      "unity and inner realisation beyond superficial divisions",
      "pursuit of luxury",
      "rejection of moral values"
    ],
    "correct": 1
  },
  {
    "id": 62,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "The eyes are not here",
    "question": "Where does the narrator meet the girl?",
    "options": [
      "On a train",
      "At a school",
      "In a market",
      "At a theatre"
    ],
    "correct": 0
  },
  {
    "id": 63,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "The eyes are not here",
    "question": "What does the narrator initially assume about the girl’s ability to see?",
    "options": [
      "see clearly",
      "sing beautifully",
      "drive the train",
      "read a newspaper"
    ],
    "correct": 0
  },
  {
    "id": 64,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "The eyes are not here",
    "question": "What creates the irony at the end of the story?",
    "options": [
      "both passengers know each other completely",
      "the narrator and girl make assumptions about eyesight",
      "the train never moves",
      "the narrator knows the girl for years"
    ],
    "correct": 1
  },
  {
    "id": 65,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Yayati",
    "question": "Who is Yayati in the story?",
    "options": [
      "A king",
      "A merchant",
      "A scientist",
      "A farmer"
    ],
    "correct": 0
  },
  {
    "id": 66,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Yayati",
    "question": "What major human desire is explored through Yayati’s experience?",
    "options": [
      "the value of endless youth and desire",
      "how to build a ship",
      "the discovery of electricity",
      "the making of paper"
    ],
    "correct": 0
  },
  {
    "id": 67,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Yayati",
    "question": "What does the story suggest about unlimited satisfaction of desire?",
    "options": [
      "always brings peace",
      "may deepen dissatisfaction rather than remove it",
      "makes duty unnecessary",
      "guarantees wisdom"
    ],
    "correct": 1
  },
  {
    "id": 68,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "On His Blindness",
    "question": "Who wrote the poem?",
    "options": [
      "John Milton",
      "William Wordsworth",
      "Robert Frost",
      "John Keats"
    ],
    "correct": 0
  },
  {
    "id": 69,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "On His Blindness",
    "question": "What personal difficulty does Milton reflect upon?",
    "options": [
      "having a physical limitation that affects his work",
      "owning a large estate",
      "winning a battle",
      "travelling abroad"
    ],
    "correct": 0
  },
  {
    "id": 70,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "On His Blindness",
    "question": "What does the poem finally suggest about serving God?",
    "options": [
      "only physical strength",
      "patient faith and sincere service",
      "only wealth",
      "only public fame"
    ],
    "correct": 1
  },
  {
    "id": 71,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Tenses",
    "question": "She ___ to school every day.",
    "options": [
      "goes",
      "go",
      "went",
      "going"
    ],
    "correct": 0
  },
  {
    "id": 72,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Tenses",
    "question": "When I reached the station, the train ___.",
    "options": [
      "had left",
      "leaves",
      "has left",
      "will leave"
    ],
    "correct": 0
  },
  {
    "id": 73,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Tenses",
    "question": "Choose the grammatically correct sentence using the present perfect continuous tense.",
    "options": [
      "I am living here since 2020.",
      "I have been living here since 2020.",
      "I was living here since 2020.",
      "I live here since 2020."
    ],
    "correct": 1
  },
  {
    "id": 74,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Modals",
    "question": "You ___ obey the traffic rules.",
    "options": [
      "must",
      "might",
      "would",
      "could"
    ],
    "correct": 0
  },
  {
    "id": 75,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Modals",
    "question": "___ I borrow your pen for a minute?",
    "options": [
      "Must",
      "May",
      "Need",
      "Ought"
    ],
    "correct": 1
  },
  {
    "id": 76,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Modals",
    "question": "You ___ have informed me earlier; the meeting is already over.",
    "options": [
      "should",
      "can",
      "may",
      "will"
    ],
    "correct": 0
  },
  {
    "id": 77,
    "subject": "English",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "Reader / Panorama",
    "question": "Write the central message of either ‘Saint Kabir’ or ‘Yayati’ in about 60–80 words."
  },
  {
    "id": 78,
    "subject": "English",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "Language & Skills",
    "question": "Write six sentences using different tenses, and underline the finite verb in each sentence."
  },
  {
    "id": 79,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series A, C, E, G, __",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "correct": 1
  },
  {
    "id": 80,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series Z, X, V, T, __",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "correct": 0
  },
  {
    "id": 81,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series B, E, H, K, __",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "correct": 1
  },
  {
    "id": 82,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series D, H, L, P, __",
    "options": [
      "T",
      "U",
      "V",
      "S"
    ],
    "correct": 0
  },
  {
    "id": 83,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series AZ, BY, CX, DW, __",
    "options": [
      "EV",
      "FU",
      "EW",
      "FV"
    ],
    "correct": 0
  },
  {
    "id": 84,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series A, D, H, M, __",
    "options": [
      "Q",
      "R",
      "S",
      "T"
    ],
    "correct": 1
  },
  {
    "id": 85,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series C, F, J, O, __",
    "options": [
      "T",
      "U",
      "V",
      "W"
    ],
    "correct": 1
  },
  {
    "id": 86,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series B, G, M, T, __",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2
  },
  {
    "id": 87,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "If A=1, B=2, …, what is C + F?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correct": 1
  },
  {
    "id": 88,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Which letter is 5 places after H?",
    "options": [
      "L",
      "M",
      "N",
      "O"
    ],
    "correct": 1
  },
  {
    "id": 89,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Which letter is 4 places before P?",
    "options": [
      "K",
      "L",
      "M",
      "N"
    ],
    "correct": 1
  },
  {
    "id": 90,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "B, D, G, K, P, __ follows increasing steps. What comes next?",
    "options": [
      "V",
      "W",
      "X",
      "Y"
    ],
    "correct": 0
  },
  {
    "id": 91,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series Y, V, R, M, __",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "correct": 0
  },
  {
    "id": 92,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series M, O, Q, S, __",
    "options": [
      "T",
      "U",
      "V",
      "W"
    ],
    "correct": 1
  },
  {
    "id": 93,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series AB, DE, GH, JK, __",
    "options": [
      "LM",
      "MN",
      "NO",
      "OP"
    ],
    "correct": 1
  },
  {
    "id": 94,
    "subject": "तर्कशक्ति",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "बिना अक्षरों को लिखे केवल वर्णक्रम की स्थिति के आधार पर A, E, J, O, U की स्थिति-संख्या तुलना कीजिए और सबसे छोटे तथा सबसे बड़े मान का कारण लिखिए।"
  },
  {
    "id": 95,
    "subject": "तर्कशक्ति",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "दो अलग-अलग alphabet-series बनाइए: एक में क्रमिक अंतर बढ़ता जाए और दूसरी में घटता जाए। प्रत्येक में कम-से-कम पाँच पद लिखिए।"
  }
];
