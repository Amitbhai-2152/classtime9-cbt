// TEST 02 — ClassTime 9 | BSEB Class 9 Practice CBT
// Superior question design: every syllabus component has 1 easy, 1 medium, and 1 hard MCQ.
// Hard questions emphasize application, elimination, inference, calculation, or multi-step reasoning.
// Exactly 2 written-copy subjective questions remain per subject; no typed answer field is used.
const QUESTIONS = [
  {
    "id": 1,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "निर्देशांक ज्यामिति",
    "question": "बिंदु P(−4, −3) किस चतुर्थांश में स्थित है?",
    "options": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "correct": 2
  },
  {
    "id": 2,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "निर्देशांक ज्यामिति",
    "question": "बिंदु A(3, −5) की x-अक्ष से दूरी और y-अक्ष से दूरी क्रमशः कितनी हैं?",
    "options": [
      "3 और 5",
      "5 और 3",
      "3 और −5",
      "−5 और 3"
    ],
    "correct": 1
  },
  {
    "id": 3,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "निर्देशांक ज्यामिति",
    "question": "किस बिंदु के लिए x-अक्ष से दूरी 6 इकाई, y-अक्ष से दूरी 2 इकाई और वह द्वितीय चतुर्थांश में स्थित हो?",
    "options": [
      "(6, 2)",
      "(−6, 2)",
      "(−2, 6)",
      "(2, −6)"
    ],
    "correct": 2
  },
  {
    "id": 4,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "2x + y = 9 में x = 3 होने पर y का मान क्या होगा?",
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
    "question": "3x − 2y = 6 में x = 4 होने पर y का मान है—",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2
  },
  {
    "id": 6,
    "subject": "गणित",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "एक रेखा x-अक्ष को (5, 0) और y-अक्ष को (0, 5) पर काटती है। उस रेखा का समीकरण कौन-सा है?",
    "options": [
      "x − y = 5",
      "x + y = 5",
      "5x + y = 5",
      "x + 5y = 5"
    ],
    "correct": 1
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
    "question": "किस नियम के अनुसार किसी शुद्ध यौगिक में उसके अवयवी तत्व सदैव निश्चित द्रव्यमान अनुपात में पाए जाते हैं?",
    "options": [
      "द्रव्यमान संरक्षण का नियम",
      "निश्चित अनुपात का नियम",
      "गुरुत्वाकर्षण का नियम",
      "ऊर्जा संरक्षण का नियम"
    ],
    "correct": 1
  },
  {
    "id": 10,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "परमाणु एवं अणु",
    "question": "H₂SO₄ का आणविक द्रव्यमान कितना है? (H=1, S=32, O=16)",
    "options": [
      "96 u",
      "98 u",
      "100 u",
      "102 u"
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
    "question": "एक यौगिक में Ca, C और O का द्रव्यमान प्रतिशत क्रमशः 40%, 12% और 48% है। इसका सरलतम सूत्र कौन-सा होगा? (Ca=40, C=12, O=16)",
    "options": [
      "CaCO",
      "CaCO₂",
      "CaCO₃",
      "Ca₂CO₃"
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
    "question": "इलेक्ट्रॉन पर किस प्रकार का आवेश होता है?",
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
    "question": "किसी उदासीन परमाणु की परमाणु संख्या 8 है। उसके नाभिक के बाहर इलेक्ट्रॉनों की संख्या कितनी होगी?",
    "options": [
      "6",
      "8",
      "10",
      "16"
    ],
    "correct": 1
  },
  {
    "id": 14,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "परमाणु की संरचना",
    "question": "किसी उदासीन परमाणु में 17 प्रोटॉन और 18 न्यूट्रॉन हैं। उसके परमाणु संख्या और द्रव्यमान संख्या क्रमशः क्या होंगी?",
    "options": [
      "17 और 35",
      "18 और 35",
      "17 और 18",
      "35 और 17"
    ],
    "correct": 0
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
    "question": "‘ग्राम-गीत का मर्म’ के लेखक कौन हैं?",
    "options": [
      "फणीश्वरनाथ रेणु",
      "लक्ष्मीनारायण सुधांशु",
      "प्रेमचंद",
      "रामधारी सिंह दिनकर"
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
    "question": "पाठ के विचारों के अनुसार ग्राम-गीतों का सबसे महत्वपूर्ण साहित्यिक आधार क्या है?",
    "options": [
      "कृत्रिम अलंकार",
      "जनजीवन के सहज अनुभव और भाव",
      "केवल राजदरबार",
      "केवल धार्मिक अनुष्ठान"
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
    "question": "यदि किसी लोकगीत में प्रेम, संघर्ष, उत्सव और दुख जैसे अनेक मानवीय भाव स्वाभाविक रूप से व्यक्त हों, तो पाठ के आधार पर उसका सबसे उचित मूल्यांकन क्या होगा?",
    "options": [
      "वह ग्राम-गीत की व्यापक जीवन-संबद्धता को दर्शाता है",
      "वह ग्राम-गीत नहीं हो सकता क्योंकि उसमें कई भाव हैं",
      "लोकगीत में केवल मनोरंजन होना चाहिए",
      "ऐसे गीत साहित्यिक दृष्टि से निरर्थक होते हैं"
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
    "question": "‘लाल पान की बेगम’ कहानी के लेखक कौन हैं?",
    "options": [
      "फणीश्वरनाथ रेणु",
      "लक्ष्मीनारायण सुधांशु",
      "प्रेमचंद",
      "अमृतलाल नागर"
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
    "question": "कहानी में बिरजू की माँ के मन की बेचैनी का तत्काल कारण क्या था?",
    "options": [
      "बैलगाड़ी के देर से आने की चिंता",
      "फसल खराब होना",
      "बच्चों का विद्यालय न जाना",
      "गाँव छोड़ने की तैयारी"
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
    "question": "‘लाल पान की बेगम’ शीर्षक की सार्थकता मुख्यतः किस कारण दिखाई देती है?",
    "options": [
      "यह ग्रामीण जीवन, व्यक्तित्व और सामाजिक भावनाओं को एक प्रतीकात्मक नाम में बाँधता है",
      "यह कहानी के स्थान का वास्तविक सरकारी नाम है",
      "यह केवल पान की दुकान का वर्णन है",
      "यह कहानी के लेखक का उपनाम है"
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
    "question": "मंझन किस काव्य-परंपरा से जुड़े कवि हैं?",
    "options": [
      "सूफी काव्य-परंपरा",
      "छायावाद",
      "रीतिकालीन दरबारी काव्य",
      "प्रगतिवाद"
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
    "question": "मंझन के पदों में प्रेम की अभिव्यक्ति को सबसे उपयुक्त रूप में कैसे समझा जा सकता है?",
    "options": [
      "केवल हास्य के रूप में",
      "मानवीय प्रेम और आध्यात्मिक अनुभूति के मेल के रूप में",
      "केवल राजनीतिक भावना के रूप में",
      "केवल प्रकृति-वर्णन के रूप में"
    ],
    "correct": 1
  },
  {
    "id": 25,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "मंझन के पद",
    "question": "मंझन की प्रेम-दृष्टि को ‘मानवीय से आध्यात्मिक’ बनाने वाला तत्व कौन-सा है?",
    "options": [
      "प्रेम को आत्मिक मिलन और व्यापक अनुभूति से जोड़ना",
      "प्रेम को केवल सामाजिक प्रतिष्ठा से जोड़ना",
      "प्रेम को धन प्राप्ति का साधन बनाना",
      "प्रेम को केवल युद्ध से जोड़ना"
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
    "question": "गुरु गोविंद सिंह सिख परंपरा के कौन-से गुरु थे?",
    "options": [
      "आठवें",
      "नवें",
      "दसवें",
      "ग्यारहवें"
    ],
    "correct": 2
  },
  {
    "id": 27,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "इन पदों की प्रमुख भाव-धारा कौन-सी है?",
    "options": [
      "वीरता, आत्मबल और उत्साह",
      "केवल हास्य",
      "केवल करुणा",
      "केवल प्रकृति-सौंदर्य"
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
    "question": "किसी कविता में कठिन परिस्थितियों के सामने निर्भय रहने, संघर्ष करने और उच्च आदर्श के लिए समर्पित होने की प्रेरणा हो, तो वह पाठ के किस केंद्रीय भाव से सबसे अधिक मेल खाती है?",
    "options": [
      "वीर और ओजपूर्ण जीवन-दृष्टि",
      "भोग-विलास",
      "निराशा",
      "निष्क्रियता"
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
    "question": "‘बिहार की संगीत साधना’ किस पुस्तक से संबंधित पाठ है?",
    "options": [
      "गोधूली",
      "वर्णिका",
      "पीयूषम्",
      "Panorama"
    ],
    "correct": 1
  },
  {
    "id": 30,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "बिहार की संगीत साधना",
    "question": "समुद्रगुप्त किस वाद्य को बजाने में निपुण माने गए हैं?",
    "options": [
      "वीणा",
      "शहनाई",
      "तबला",
      "बाँसुरी"
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
    "question": "पाठ में अलग-अलग कालों के संगीत-साधकों का उल्लेख किस व्यापक तथ्य को रेखांकित करता है?",
    "options": [
      "बिहार की संगीत परंपरा में ऐतिहासिक निरंतरता और विविधता",
      "संगीत केवल आधुनिक काल में विकसित हुआ",
      "संगीत का संबंध केवल राजाओं से था",
      "बिहार में वाद्य-संगीत का कोई इतिहास नहीं है"
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
    "question": "‘जल-प्रबंधन’ गद्यांश में दिए गए उपायों में से कौन-सा घर और विद्यालय दोनों में सीधे अपनाया जा सकता है?",
    "options": [
      "रिसाव रोकना और पानी का विवेकपूर्ण उपयोग",
      "केवल बड़ी सिंचाई परियोजना बनाना",
      "केवल बाँध बनाना",
      "केवल नदी की दिशा बदलना"
    ],
    "correct": 0
  },
  {
    "id": 33,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "अपठित गद्यांश",
    "question": "निम्न में से कौन-सा निष्कर्ष किसी ऐसे गद्यांश से निकाला जा सकता है जिसमें वर्षा जल-संचयन, रिसाव रोकने और जरूरत के अनुसार उपयोग पर बल दिया गया हो?",
    "options": [
      "छोटे-छोटे संरक्षण उपाय भी सामूहिक रूप से महत्वपूर्ण हो सकते हैं",
      "जल-संकट का समाधान केवल उद्योग कर सकते हैं",
      "जल बचाने के लिए पानी का उपयोग बंद करना चाहिए",
      "वर्षा जल का कोई उपयोग नहीं है"
    ],
    "correct": 0
  },
  {
    "id": 34,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "अपठित गद्यांश",
    "question": "पढ़ते समय किसी कथन के लिए पाठ में प्रत्यक्ष प्रमाण न मिले, लेकिन वह कथन संभावित लगे। परीक्षा में सबसे उचित तरीका क्या होगा?",
    "options": [
      "उसे सत्य मान लेना",
      "पाठ से मिलने वाले प्रमाण के आधार पर ही निष्कर्ष चुनना",
      "सबसे लंबा विकल्प चुनना",
      "अपनी निजी राय को सही मान लेना"
    ],
    "correct": 1
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
    "question": "‘यक्ष-युधिष्ठिर संवाद’ की प्रश्नोत्तर शैली का मुख्य उद्देश्य किसे परखना है?",
    "options": [
      "युधिष्ठिर की नीति-बुद्धि और जीवन-दृष्टि",
      "युधिष्ठिर की धन-संपत्ति",
      "उनकी युद्ध-कौशल",
      "उनकी संगीत-प्रतिभा"
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
    "question": "यदि किसी उत्तर में तात्कालिक लाभ के बजाय धर्म, संयम और विवेक को प्राथमिकता दी गई हो, तो वह युधिष्ठिर के किस गुण को सबसे अधिक दर्शाएगा?",
    "options": [
      "नीतिपरक विवेक",
      "अहंकार",
      "आलस्य",
      "उतावली"
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
    "question": "‘चत्वारो वेदाः’ का शाब्दिक आशय क्या है?",
    "options": [
      "दो वेद",
      "तीन वेद",
      "चार वेद",
      "पाँच वेद"
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
    "question": "निम्न में से कौन-सा चार वेदों में सम्मिलित है?",
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
    "question": "निम्न में से कौन-सा विकल्प चार वेदों के नामों का सही समूह देता है?",
    "options": [
      "ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद",
      "ऋग्वेद, पुराणवेद, सामवेद, नाट्यवेद",
      "यजुर्वेद, इतिहासवेद, सामवेद, पुराणवेद",
      "अथर्ववेद, नाट्यवेद, ऋग्वेद, इतिहासवेद"
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
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "फ्रांस की क्रांति का आरंभ किस वर्ष हुआ?",
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
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "1789 में बास्तील के पतन का महत्व मुख्यतः किससे जुड़ा था?",
    "options": [
      "निरंकुश राजसत्ता के विरुद्ध जनविद्रोह का प्रतीक बनना",
      "फ्रांस के औद्योगीकरण का आरंभ",
      "नेपोलियन का राज्याभिषेक",
      "प्रथम विश्व युद्ध का आरंभ"
    ],
    "correct": 0
  },
  {
    "id": 47,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "यदि किसी समाज में एक वर्ग करों का अधिकांश भार उठाए, जबकि विशेषाधिकार प्राप्त वर्ग करों से अपेक्षाकृत मुक्त रहे, तो फ्रांस की क्रांति के संदर्भ में यह स्थिति किस समस्या को दर्शाती है?",
    "options": [
      "सामाजिक और आर्थिक असमानता",
      "धार्मिक एकता",
      "वैज्ञानिक प्रगति",
      "औद्योगिक शांति"
    ],
    "correct": 0
  },
  {
    "id": 48,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
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
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "question": "द्वितीय विश्व युद्ध के यूरोपीय मोर्चे पर आरंभ से कौन-सी घटना जुड़ी है?",
    "options": [
      "जर्मनी का पोलैंड पर आक्रमण",
      "भारत का गणतंत्र बनना",
      "फ्रांस की क्रांति",
      "औद्योगिक क्रांति"
    ],
    "correct": 0
  },
  {
    "id": 50,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "question": "दोनों विश्व युद्धों के अनुभव से अंतरराष्ट्रीय सहयोग की आवश्यकता क्यों अधिक स्पष्ट हुई?",
    "options": [
      "विनाश, मानवीय क्षति और आर्थिक संकट ने सामूहिक शांति-व्यवस्था की आवश्यकता बढ़ाई",
      "युद्धों ने सभी देशों को आर्थिक रूप से समृद्ध कर दिया",
      "युद्धों से सीमाओं पर कोई प्रभाव नहीं पड़ा",
      "युद्धों ने राष्ट्रों के बीच सभी विवाद समाप्त कर दिए"
    ],
    "correct": 0
  },
  {
    "id": 51,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "भारत के उत्तरी सीमा क्षेत्र में कौन-सी प्रमुख पर्वत प्रणाली है?",
    "options": [
      "अरावली",
      "हिमालय",
      "सतपुड़ा",
      "नीलगिरि"
    ],
    "correct": 1
  },
  {
    "id": 52,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "उत्तरी मैदान मुख्यतः किस प्रकार के निक्षेपों से निर्मित हैं?",
    "options": [
      "जलोढ़",
      "लावा",
      "ग्रेनाइट",
      "बलुआ पत्थर"
    ],
    "correct": 0
  },
  {
    "id": 53,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "किस संयोजन में भारत की तीन प्रमुख भौतिक इकाइयों का सही संबंध दिया गया है?",
    "options": [
      "हिमालय—नवीन वलित पर्वत; उत्तरी मैदान—जलोढ़ निक्षेप; प्रायद्वीपीय पठार—प्राचीन कठोर चट्टानें",
      "हिमालय—जलोढ़ मैदान; उत्तरी मैदान—प्राचीन पठार; प्रायद्वीपीय पठार—नवीन वलित पर्वत",
      "हिमालय—रेगिस्तान; उत्तरी मैदान—लावा; पठार—समुद्री द्वीप",
      "तीनों इकाइयाँ समान प्रकार की चट्टानों से बनी हैं"
    ],
    "correct": 0
  },
  {
    "id": 54,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "‘अपवाह तंत्र’ से क्या तात्पर्य है?",
    "options": [
      "नदियों और उनकी सहायक नदियों के जाल से",
      "सड़कों के जाल से",
      "नहरों के समूह से",
      "केवल वर्षा की मात्रा से"
    ],
    "correct": 0
  },
  {
    "id": 55,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "हिमालयी नदियाँ सामान्यतः बारहमासी क्यों होती हैं?",
    "options": [
      "उन्हें वर्षा के साथ हिमनदों और बर्फ पिघलने से भी जल मिलता है",
      "वे केवल भूमिगत जल पर निर्भर हैं",
      "उनमें वर्षा कभी नहीं होती",
      "वे केवल समुद्री जल से बनती हैं"
    ],
    "correct": 0
  },
  {
    "id": 56,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "यदि कोई नदी वर्ष भर बहती रहे और उसके प्रवाह को मानसूनी वर्षा के साथ हिम-पिघलाव से भी जल मिलता रहे, तो वह किस प्रकार की नदी के अधिक निकट होगी?",
    "options": [
      "हिमालयी नदी",
      "केवल मौसमी नदी",
      "केवल मरुस्थलीय नदी",
      "केवल तटीय धारा"
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
    "topic": "Reader — Saint Kabir",
    "question": "Kabir’s teachings most strongly emphasise—",
    "options": [
      "outer show",
      "inner truth and devotion",
      "wealth",
      "political power"
    ],
    "correct": 1
  },
  {
    "id": 60,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Reader — Saint Kabir",
    "question": "Kabir’s criticism of ritualism suggests that he valued—",
    "options": [
      "mechanical custom over understanding",
      "sincere inner realisation",
      "social status",
      "material success"
    ],
    "correct": 1
  },
  {
    "id": 61,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Reader — Saint Kabir",
    "question": "If two people follow different outward traditions but share compassion, humility and devotion, Kabir’s teaching would most likely view them as—",
    "options": [
      "fundamentally divided by ritual",
      "sharing a deeper spiritual common ground",
      "unrelated to spiritual life",
      "competing for social status"
    ],
    "correct": 1
  },
  {
    "id": 62,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Reader — The eyes are not here",
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
    "topic": "Reader — The eyes are not here",
    "question": "At the beginning of the story, what does the narrator assume about the girl?",
    "options": [
      "That she can see normally",
      "That she is a teacher",
      "That she is the train guard",
      "That she is a musician"
    ],
    "correct": 0
  },
  {
    "id": 64,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Reader — The eyes are not here",
    "question": "The ending is effective mainly because the conversation makes each person form an incorrect conclusion about—",
    "options": [
      "the train journey",
      "the other person’s eyesight",
      "the weather",
      "the railway timetable"
    ],
    "correct": 1
  },
  {
    "id": 65,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Panorama — Prose — Yayati",
    "question": "Who is Yayati in the lesson?",
    "options": [
      "A king",
      "A merchant",
      "A farmer",
      "A soldier"
    ],
    "correct": 0
  },
  {
    "id": 66,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Panorama — Prose — Yayati",
    "question": "Why does Yayati seek another person’s youth?",
    "options": [
      "He wants to escape old age and continue satisfying his desires",
      "He wants to become a soldier",
      "He wants to leave his kingdom immediately",
      "He wants to become a scholar"
    ],
    "correct": 0
  },
  {
    "id": 67,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Panorama — Prose — Yayati",
    "question": "Yayati’s later realisation that desire cannot be satisfied simply by feeding it supports which interpretation?",
    "options": [
      "More possessions necessarily remove desire",
      "Uncontrolled desire can keep generating further desire",
      "Old age is only a physical problem",
      "Duty has no value"
    ],
    "correct": 1
  },
  {
    "id": 68,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "Who wrote ‘On His Blindness’?",
    "options": [
      "John Milton",
      "John Keats",
      "William Wordsworth",
      "Robert Frost"
    ],
    "correct": 0
  },
  {
    "id": 69,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "What does Milton’s loss of eyesight make him question?",
    "options": [
      "Whether he can still serve God through his abilities",
      "Whether he should become a king",
      "Whether poetry is enjoyable",
      "Whether travel is possible"
    ],
    "correct": 0
  },
  {
    "id": 70,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "The poem moves from anxiety about usefulness toward acceptance. What idea best explains this change?",
    "options": [
      "Worth is measured only by physical ability",
      "Patient service and faith can have value even without visible activity",
      "A person must avoid all work",
      "Only public recognition matters"
    ],
    "correct": 1
  },
  {
    "id": 71,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the correct form: Riya ___ her homework every evening.",
    "options": [
      "do",
      "does",
      "did",
      "doing"
    ],
    "correct": 1
  },
  {
    "id": 72,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the correct form: By the time we reached the cinema, the film ___.",
    "options": [
      "starts",
      "has started",
      "had started",
      "will start"
    ],
    "correct": 2
  },
  {
    "id": 73,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the sentence that correctly shows an action continuing from the past up to the present.",
    "options": [
      "I live here since 2020.",
      "I am living here since 2020.",
      "I have been living here since 2020.",
      "I lived here since 2020."
    ],
    "correct": 2
  },
  {
    "id": 74,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Language & Skills — Modals",
    "question": "You ___ obey the safety rules in the laboratory.",
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
    "topic": "Language & Skills — Modals",
    "question": "___ I use your dictionary for a few minutes?",
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
    "topic": "Language & Skills — Modals",
    "question": "The sentence ‘You ___ have informed me earlier’ expresses—",
    "options": [
      "past obligation or criticism",
      "future possibility only",
      "present ability",
      "permission"
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
    "question": "Complete the series: B, D, F, H, __",
    "options": [
      "I",
      "J",
      "K",
      "L"
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
    "question": "Complete the series: Z, W, T, Q, __",
    "options": [
      "O",
      "N",
      "P",
      "M"
    ],
    "correct": 1
  },
  {
    "id": 81,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "If A=1, B=2, …, what is the value of G − C?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2
  },
  {
    "id": 82,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Which letter is 6 places after F?",
    "options": [
      "K",
      "L",
      "M",
      "N"
    ],
    "correct": 1
  },
  {
    "id": 83,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Which letter is 5 places before R?",
    "options": [
      "L",
      "M",
      "N",
      "O"
    ],
    "correct": 2
  },
  {
    "id": 84,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: A, C, F, J, O, __",
    "options": [
      "T",
      "U",
      "V",
      "W"
    ],
    "correct": 1
  },
  {
    "id": 85,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: AZ, BY, CX, DW, __",
    "options": [
      "EV",
      "FU",
      "EW",
      "FV"
    ],
    "correct": 0
  },
  {
    "id": 86,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: C, G, K, O, __",
    "options": [
      "R",
      "S",
      "T",
      "U"
    ],
    "correct": 2
  },
  {
    "id": 87,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: B, E, I, N, __",
    "options": [
      "S",
      "T",
      "U",
      "V"
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
    "question": "If the first letter moves 2 places forward, the next 3 places, the next 4 places and so on, then A, C, F, J, __ gives—",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "correct": 2
  },
  {
    "id": 89,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series: D, H, M, S, __",
    "options": [
      "X",
      "Y",
      "Z",
      "W"
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
    "question": "Complete the series: Y, V, R, M, __",
    "options": [
      "H",
      "I",
      "J",
      "K"
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
    "question": "Complete the series: B, G, M, T, __ (continue cyclically after Z)",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2
  },
  {
    "id": 92,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Find the missing pair: AB, DE, HI, MN, __",
    "options": [
      "RS",
      "ST",
      "TU",
      "UV"
    ],
    "correct": 1
  },
  {
    "id": 93,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "In the series C, F, J, O, __, each step increases by one letter more than the previous step. What is the next letter?",
    "options": [
      "T",
      "U",
      "V",
      "W"
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
