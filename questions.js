// TEST 02 — ClassTime 9 | BSEB Class 9 Practice CBT
// 100-question final bank.
// MCQ option order is randomized; correct-answer positions are balanced and anti-pattern constrained
// so students cannot exploit A-A, B-B, A-B-C-D, repeating-pair, or cyclic-position patterns.
// Maths/Science retain expanded coverage; Sanskrit remains unchanged.
// Hindi and English retain passage-based comprehension.
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
      "प्रथम",
      "तृतीय",
      "चतुर्थ",
      "द्वितीय"
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
    "question": "बिंदु A(3, −5) की x-अक्ष से दूरी और y-अक्ष से दूरी क्रमशः कितनी हैं?",
    "options": [
      "3 और 5",
      "−5 और 3",
      "5 और −3",
      "5 और 3"
    ],
    "correct": 3
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
      "(−2, 6)",
      "(6, −2)",
      "(−6, 2)",
      "(2, 6)"
    ],
    "correct": 0
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
      "4",
      "3",
      "5"
    ],
    "correct": 2
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
      "4",
      "2",
      "3"
    ],
    "correct": 3
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
      "x + 5y = 5",
      "5x + y = 5"
    ],
    "correct": 1
  },
  {
    "subject": "गणित",
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "बिंदु (0, −5) किस अक्ष पर स्थित है?",
    "options": [
      "y-अक्ष",
      "x-अक्ष",
      "प्रथम चतुर्थांश",
      "मूलबिंदु"
    ],
    "correct": 0,
    "id": 7
  },
  {
    "subject": "गणित",
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "बिंदु A(−3, 4) को x-अक्ष के सापेक्ष परावर्तित करने पर नए निर्देशांक क्या होंगे?",
    "options": [
      "(−4, 3)",
      "(3, −4)",
      "(−3, −4)",
      "(3, 4)"
    ],
    "correct": 2,
    "id": 8
  },
  {
    "subject": "गणित",
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "बिंदु P के निर्देशांक (a, −5) हैं और P तृतीय चतुर्थांश में है। a के लिए कौन-सी शर्त सही है?",
    "options": [
      "a = 5",
      "a < 0",
      "a > 0",
      "a = 0"
    ],
    "correct": 1,
    "id": 9
  },
  {
    "subject": "गणित",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "समीकरण x + 2y = 10 में x = 0 रखने पर y का मान क्या होगा?",
    "options": [
      "5",
      "2",
      "8",
      "10"
    ],
    "correct": 0,
    "id": 10
  },
  {
    "subject": "गणित",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "यदि (2, k), 4x + y = 10 का हल है, तो k का मान क्या है?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "id": 11
  },
  {
    "subject": "गणित",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "रेखा 2x + 3y = 12 पर x = 0 और y = 0 के संगत बिंदु क्रमशः कौन-से हैं?",
    "options": [
      "(4, 0) और (0, 6)",
      "(6, 0) और (0, 4)",
      "(0, 3) और (4, 0)",
      "(0, 4) और (6, 0)"
    ],
    "correct": 3,
    "id": 12
  },
  {
    "id": 13,
    "subject": "गणित",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "निर्देशांक ज्यामिति",
    "question": "निर्देशांक ज्यामिति: कार्तीय तल पर A(3, 2) और B(−2, −3) अंकित कीजिए और दोनों के चतुर्थांश लिखिए।"
  },
  {
    "id": 14,
    "subject": "गणित",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "question": "दो चरों वाले रैखिक समीकरण: 2x + y = 6 के कोई तीन अलग-अलग हल लिखिए और किसी एक हल का सत्यापन कीजिए।"
  },
  {
    "id": 15,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "परमाणु एवं अणु",
    "question": "किस नियम के अनुसार किसी शुद्ध यौगिक में उसके अवयवी तत्व सदैव निश्चित द्रव्यमान अनुपात में पाए जाते हैं?",
    "options": [
      "ऊर्जा संरक्षण का नियम",
      "निश्चित अनुपात का नियम",
      "गुणकों का नियम",
      "द्रव्यमान संरक्षण का नियम"
    ],
    "correct": 1
  },
  {
    "id": 16,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "परमाणु एवं अणु",
    "question": "H₂SO₄ का आणविक द्रव्यमान कितना है? (H = 1, S = 32, O = 16)",
    "options": [
      "102 u",
      "100 u",
      "96 u",
      "98 u"
    ],
    "correct": 3
  },
  {
    "id": 17,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "परमाणु एवं अणु",
    "question": "एक यौगिक में Ca, C और O का द्रव्यमान प्रतिशत क्रमशः 40%, 12% और 48% है। इसका सरलतम सूत्र कौन-सा होगा? (Ca = 40, C = 12, O = 16)",
    "options": [
      "CaCO₃",
      "Ca₂CO₃",
      "CaCO",
      "CaCO₂"
    ],
    "correct": 0
  },
  {
    "id": 18,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "परमाणु की संरचना",
    "question": "इलेक्ट्रॉन पर किस प्रकार का आवेश होता है?",
    "options": [
      "परिवर्ती",
      "धनात्मक",
      "ऋणात्मक",
      "उदासीन"
    ],
    "correct": 2
  },
  {
    "id": 19,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "परमाणु की संरचना",
    "question": "किसी उदासीन परमाणु की परमाणु संख्या 8 है। उसके नाभिक के बाहर इलेक्ट्रॉनों की संख्या कितनी होगी?",
    "options": [
      "10",
      "8",
      "6",
      "16"
    ],
    "correct": 1
  },
  {
    "id": 20,
    "subject": "विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "परमाणु की संरचना",
    "question": "किसी उदासीन परमाणु में 17 प्रोटॉन और 18 न्यूट्रॉन हैं। यदि वह एक इलेक्ट्रॉन ग्रहण कर ऋणायन बनाता है, तो बने आयन में इलेक्ट्रॉनों की संख्या और उसकी द्रव्यमान संख्या क्रमशः क्या होंगी?",
    "options": [
      "18 और 34",
      "17 और 35",
      "17 और 18",
      "18 और 35"
    ],
    "correct": 3
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "किसी तत्व के एक परमाणु की द्रव्यमान संख्या किससे प्राप्त होती है?",
    "options": [
      "प्रोटॉन + न्यूट्रॉन",
      "केवल प्रोटॉन",
      "न्यूट्रॉन + इलेक्ट्रॉन",
      "प्रोटॉन + इलेक्ट्रॉन"
    ],
    "correct": 0,
    "id": 21
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "CO₂ के एक अणु में कुल कितने परमाणु होते हैं?",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correct": 2,
    "id": 22
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "यदि 12 g कार्बन और 32 g ऑक्सीजन पूरी तरह अभिक्रिया करें, तो बनने वाले CO₂ का द्रव्यमान कितना होगा?",
    "options": [
      "20 g",
      "44 g",
      "32 g",
      "40 g"
    ],
    "correct": 1,
    "id": 23
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "परमाणु के केंद्र में स्थित भाग को क्या कहते हैं?",
    "options": [
      "संयोजकता",
      "कक्षा",
      "इलेक्ट्रॉन बादल",
      "नाभिक"
    ],
    "correct": 3,
    "id": 24
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "यदि किसी उदासीन परमाणु में 12 प्रोटॉन हैं, तो उसके इलेक्ट्रॉनों की संख्या कितनी होगी?",
    "options": [
      "11",
      "10",
      "12",
      "24"
    ],
    "correct": 2,
    "id": 25
  },
  {
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "किसी परमाणु में 20 प्रोटॉन और 20 न्यूट्रॉन हैं। यदि वह 2 इलेक्ट्रॉन खो देता है, तो बने आयन का आवेश और द्रव्यमान संख्या क्रमशः क्या होगी?",
    "options": [
      "2+ और 40",
      "2+ और 20",
      "2− और 20",
      "2− और 40"
    ],
    "correct": 0,
    "id": 26
  },
  {
    "id": 27,
    "subject": "विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "परमाणु एवं अणु",
    "question": "परमाणु एवं अणु: परमाणु और अणु में कोई दो अंतर लिखिए तथा एक-एक उदाहरण दीजिए।"
  },
  {
    "id": 28,
    "subject": "विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "परमाणु की संरचना",
    "question": "परमाणु की संरचना: परमाणु संख्या 11 और द्रव्यमान संख्या 23 वाले उदासीन परमाणु में प्रोटॉन, इलेक्ट्रॉन और न्यूट्रॉन की संख्या लिखिए।"
  },
  {
    "id": 29,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "ग्राम-गीत का मर्म",
    "question": "पाठ के विचारों के अनुसार ग्राम-गीतों का सबसे महत्वपूर्ण साहित्यिक आधार क्या है?",
    "options": [
      "कृत्रिम अलंकार",
      "केवल राजदरबार",
      "जनजीवन के सहज अनुभव और भाव",
      "केवल धार्मिक अनुष्ठान"
    ],
    "correct": 2
  },
  {
    "id": 30,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "ग्राम-गीत का मर्म",
    "question": "यदि किसी लोकगीत में प्रेम, संघर्ष, उत्सव और दुख जैसे अनेक मानवीय भाव स्वाभाविक रूप से व्यक्त हों, तो पाठ के आधार पर उसका सबसे उचित मूल्यांकन क्या होगा?",
    "options": [
      "वह ग्राम-गीत की व्यापक जीवन-संबद्धता को दर्शाता है",
      "वह ग्राम-गीत नहीं हो सकता क्योंकि उसमें कई भाव हैं",
      "ऐसे गीत साहित्यिक दृष्टि से निरर्थक होते हैं",
      "लोकगीत में केवल मनोरंजन होना चाहिए"
    ],
    "correct": 0
  },
  {
    "id": 31,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "लाल पान की बेगम",
    "question": "‘लाल पान की बेगम’ कहानी के लेखक कौन हैं?",
    "options": [
      "लक्ष्मीनारायण सुधांशु",
      "फणीश्वरनाथ रेणु",
      "अमृतलाल नागर",
      "प्रेमचंद"
    ],
    "correct": 1
  },
  {
    "id": 32,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "लाल पान की बेगम",
    "question": "कहानी में बिरजू की माँ के मन की बेचैनी का तत्काल कारण क्या था?",
    "options": [
      "फसल खराब होना",
      "गाँव छोड़ने की तैयारी",
      "बच्चों का विद्यालय न जाना",
      "बैलगाड़ी के देर से आने की चिंता"
    ],
    "correct": 3
  },
  {
    "id": 33,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "मंझन के पद",
    "question": "मंझन किस काव्य-परंपरा से जुड़े कवि हैं?",
    "options": [
      "छायावाद",
      "रीतिकालीन दरबारी काव्य",
      "सूफी काव्य-परंपरा",
      "प्रगतिवाद"
    ],
    "correct": 2
  },
  {
    "id": 34,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "मंझन के पद",
    "question": "मंझन के पदों में प्रेम की अभिव्यक्ति को सबसे उपयुक्त रूप में कैसे समझा जा सकता है?",
    "options": [
      "केवल प्रकृति-वर्णन के रूप में",
      "मानवीय प्रेम और आध्यात्मिक अनुभूति के मेल के रूप में",
      "केवल राजनीतिक भावना के रूप में",
      "केवल हास्य के रूप में"
    ],
    "correct": 1
  },
  {
    "id": 35,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "मंझन के पद",
    "question": "मंझन की प्रेम-दृष्टि को ‘मानवीय से आध्यात्मिक’ बनाने वाला तत्व कौन-सा है?",
    "options": [
      "प्रेम को धन प्राप्ति का साधन बनाना",
      "प्रेम को केवल सामाजिक प्रतिष्ठा से जोड़ना",
      "प्रेम को केवल युद्ध से जोड़ना",
      "प्रेम को आत्मिक मिलन और व्यापक अनुभूति से जोड़ना"
    ],
    "correct": 3
  },
  {
    "id": 36,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "गुरु गोविंद सिंह सिख परंपरा के कौन-से गुरु थे?",
    "options": [
      "दसवें",
      "आठवें",
      "ग्यारहवें",
      "नवें"
    ],
    "correct": 0
  },
  {
    "id": 37,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "इन पदों की प्रमुख भाव-धारा कौन-सी है?",
    "options": [
      "केवल करुणा",
      "वीरता, आत्मबल और उत्साह",
      "केवल हास्य",
      "केवल प्रकृति-सौंदर्य"
    ],
    "correct": 1
  },
  {
    "id": 38,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "गुरु गोविंद सिंह के पद",
    "question": "किसी कविता में कठिन परिस्थितियों के सामने निर्भय रहने, संघर्ष करने और उच्च आदर्श के लिए समर्पित होने की प्रेरणा हो, तो वह पाठ के किस केंद्रीय भाव से सबसे अधिक मेल खाती है?",
    "options": [
      "भोग-विलास",
      "निष्क्रियता",
      "निराशा",
      "वीर और ओजपूर्ण जीवन-दृष्टि"
    ],
    "correct": 3
  },
  {
    "id": 39,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "बिहार की संगीत साधना",
    "question": "‘बिहार की संगीत साधना’ किस पुस्तक से संबंधित पाठ है?",
    "options": [
      "Panorama",
      "पीयूषम्",
      "वर्णिका",
      "गोधूली"
    ],
    "correct": 2
  },
  {
    "id": 40,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "बिहार की संगीत साधना",
    "question": "समुद्रगुप्त किस वाद्य को बजाने में निपुण माने गए हैं?",
    "options": [
      "वीणा",
      "तबला",
      "शहनाई",
      "बाँसुरी"
    ],
    "correct": 0
  },
  {
    "id": 41,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "बिहार की संगीत साधना",
    "question": "पाठ में अलग-अलग कालों के संगीत-साधकों का उल्लेख किस व्यापक तथ्य को रेखांकित करता है?",
    "options": [
      "संगीत केवल आधुनिक काल में विकसित हुआ",
      "बिहार में वाद्य-संगीत का कोई इतिहास नहीं है",
      "संगीत का संबंध केवल राजाओं से था",
      "बिहार की संगीत परंपरा में ऐतिहासिक निरंतरता और विविधता"
    ],
    "correct": 3
  },
  {
    "id": 42,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "अपठित गद्यांश",
    "question": "गद्यांश के अनुसार तालाब की स्थिति खराब होने का एक प्रमुख कारण क्या था?",
    "options": [
      "अधिक वर्षा होना",
      "किनारे कचरा डालना",
      "खेतों में कम काम होना",
      "विद्यार्थियों का अभियान"
    ],
    "correct": 1,
    "passage": "हमारे गाँव के पास एक छोटा-सा तालाब था। बरसात के दिनों में वह पानी से भर जाता, और आसपास के खेतों के लिए उपयोगी बन जाता। कुछ वर्षों बाद लोगों ने तालाब के किनारे कचरा डालना शुरू कर दिया। धीरे-धीरे पानी कम साफ रहने लगा और गर्मियों में तालाब जल्दी सूखने लगा। तब गाँव के विद्यार्थियों ने सफाई अभियान चलाया, कचरा डालने पर रोक लगाने की अपील की और वर्षा जल को तालाब तक पहुँचाने के लिए छोटी नालियों की सफाई की। अगले वर्ष तालाब में पहले से अधिक पानी जमा हुआ।"
  },
  {
    "id": 43,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "अपठित गद्यांश",
    "question": "विद्यार्थियों ने तालाब की स्थिति सुधारने के लिए कौन-सा कदम नहीं उठाया?",
    "options": [
      "तालाब को पूरी तरह पाट दिया",
      "वर्षा जल की नालियों की सफाई की",
      "कचरा डालने पर रोक की अपील की",
      "सफाई अभियान चलाया"
    ],
    "correct": 0,
    "passage": "हमारे गाँव के पास एक छोटा-सा तालाब था। बरसात के दिनों में वह पानी से भर जाता, और आसपास के खेतों के लिए उपयोगी बन जाता। कुछ वर्षों बाद लोगों ने तालाब के किनारे कचरा डालना शुरू कर दिया। धीरे-धीरे पानी कम साफ रहने लगा और गर्मियों में तालाब जल्दी सूखने लगा। तब गाँव के विद्यार्थियों ने सफाई अभियान चलाया, कचरा डालने पर रोक लगाने की अपील की और वर्षा जल को तालाब तक पहुँचाने के लिए छोटी नालियों की सफाई की। अगले वर्ष तालाब में पहले से अधिक पानी जमा हुआ।"
  },
  {
    "id": 44,
    "subject": "हिन्दी",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "अपठित गद्यांश",
    "question": "अगले वर्ष तालाब में अधिक पानी जमा होने से कौन-सा निष्कर्ष सबसे उचित है?",
    "options": [
      "तालाब का पानी अपने-आप शुद्ध हो गया",
      "केवल गर्मी कम होने से तालाब सुधरा",
      "सामूहिक प्रयास और जल-प्रबंधन से स्थानीय जल-स्रोत सुधर सकते हैं",
      "कचरा डालने से जल-संग्रह बढ़ता है"
    ],
    "correct": 2,
    "passage": "हमारे गाँव के पास एक छोटा-सा तालाब था। बरसात के दिनों में वह पानी से भर जाता, और आसपास के खेतों के लिए उपयोगी बन जाता। कुछ वर्षों बाद लोगों ने तालाब के किनारे कचरा डालना शुरू कर दिया। धीरे-धीरे पानी कम साफ रहने लगा और गर्मियों में तालाब जल्दी सूखने लगा। तब गाँव के विद्यार्थियों ने सफाई अभियान चलाया, कचरा डालने पर रोक लगाने की अपील की और वर्षा जल को तालाब तक पहुँचाने के लिए छोटी नालियों की सफाई की। अगले वर्ष तालाब में पहले से अधिक पानी जमा हुआ।"
  },
  {
    "id": 45,
    "subject": "हिन्दी",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "गद्य-साहित्य",
    "question": "‘लाल पान की बेगम’ कहानी के ग्रामीण परिवेश की कोई दो विशेषताएँ 3–4 वाक्यों में लिखिए।"
  },
  {
    "id": 46,
    "subject": "हिन्दी",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "काव्य-साहित्य",
    "question": "‘गुरु गोविंद सिंह के पद’ में व्यक्त वीरता के भाव को 3–4 वाक्यों में स्पष्ट कीजिए।"
  },
  {
    "id": 47,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "यक्ष के प्रश्नों का उत्तर कौन देता है?",
    "options": [
      "नकुल",
      "अर्जुन",
      "भीम",
      "युधिष्ठिर"
    ],
    "correct": 3
  },
  {
    "id": 48,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "‘यक्ष-युधिष्ठिर संवाद’ की प्रश्नोत्तर शैली का मुख्य उद्देश्य किसे परखना है?",
    "options": [
      "उनकी युद्ध-कौशल",
      "युधिष्ठिर की धन-संपत्ति",
      "युधिष्ठिर की नीति-बुद्धि और जीवन-दृष्टि",
      "उनकी संगीत-प्रतिभा"
    ],
    "correct": 2
  },
  {
    "id": 49,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "यदि किसी उत्तर में तात्कालिक लाभ के बजाय धर्म, संयम और विवेक को प्राथमिकता दी गई हो, तो वह युधिष्ठिर के किस गुण को सबसे अधिक दर्शाएगा?",
    "options": [
      "नीतिपरक विवेक",
      "अहंकार",
      "उतावली",
      "आलस्य"
    ],
    "correct": 0
  },
  {
    "id": 50,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "चत्वारो वेदाः",
    "question": "‘चत्वारो वेदाः’ का शाब्दिक आशय क्या है?",
    "options": [
      "पाँच वेद",
      "दो वेद",
      "तीन वेद",
      "चार वेद"
    ],
    "correct": 3
  },
  {
    "id": 51,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "चत्वारो वेदाः",
    "question": "निम्न में से कौन-सा चार वेदों में सम्मिलित है?",
    "options": [
      "इतिहासवेद",
      "ऋग्वेद",
      "पुराणवेद",
      "नाट्यवेद"
    ],
    "correct": 1
  },
  {
    "id": 52,
    "subject": "संस्कृत",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "चत्वारो वेदाः",
    "question": "निम्न में से कौन-सा विकल्प चार वेदों के नामों का सही समूह देता है?",
    "options": [
      "अथर्ववेद, नाट्यवेद, ऋग्वेद, इतिहासवेद",
      "ऋग्वेद, पुराणवेद, सामवेद, नाट्यवेद",
      "ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद",
      "यजुर्वेद, इतिहासवेद, सामवेद, पुराणवेद"
    ],
    "correct": 2
  },
  {
    "id": 53,
    "subject": "संस्कृत",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "question": "‘यक्ष-युधिष्ठिर संवाद’ से मिलने वाली कोई एक नीति-शिक्षा 2–3 वाक्यों में लिखिए।"
  },
  {
    "id": 54,
    "subject": "संस्कृत",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "चत्वारो वेदाः",
    "question": "चारों वेदों के नाम लिखिए और किसी एक वेद के बारे में एक तथ्य लिखिए।"
  },
  {
    "id": 55,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "फ्रांस की क्रांति का आरंभ किस वर्ष हुआ?",
    "options": [
      "1776",
      "1815",
      "1789",
      "1848"
    ],
    "correct": 2
  },
  {
    "id": 56,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "1789 में बास्तील के पतन का महत्व मुख्यतः किससे जुड़ा था?",
    "options": [
      "निरंकुश राजसत्ता के विरुद्ध जनविद्रोह का प्रतीक बनना",
      "फ्रांस के औद्योगीकरण का आरंभ",
      "प्रथम विश्व युद्ध का आरंभ",
      "नेपोलियन का राज्याभिषेक"
    ],
    "correct": 0
  },
  {
    "id": 57,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "question": "यदि किसी समाज में एक वर्ग करों का अधिकांश भार उठाए, जबकि विशेषाधिकार प्राप्त वर्ग करों से अपेक्षाकृत मुक्त रहे, तो फ्रांस की क्रांति के संदर्भ में यह स्थिति किस समस्या को दर्शाती है?",
    "options": [
      "औद्योगिक शांति",
      "सामाजिक और आर्थिक असमानता",
      "वैज्ञानिक प्रगति",
      "धार्मिक एकता"
    ],
    "correct": 1
  },
  {
    "id": 58,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "question": "प्रथम विश्व युद्ध किस वर्ष शुरू हुआ?",
    "options": [
      "1939",
      "1918",
      "1945",
      "1914"
    ],
    "correct": 3
  },
  {
    "id": 59,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "question": "द्वितीय विश्व युद्ध के यूरोपीय मोर्चे पर आरंभ से कौन-सी घटना जुड़ी है?",
    "options": [
      "भारत का गणतंत्र बनना",
      "औद्योगिक क्रांति",
      "जर्मनी का पोलैंड पर आक्रमण",
      "फ्रांस की क्रांति"
    ],
    "correct": 2
  },
  {
    "id": 60,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "question": "दोनों विश्व युद्धों के अनुभव से अंतरराष्ट्रीय सहयोग की आवश्यकता क्यों अधिक स्पष्ट हुई?",
    "options": [
      "युद्धों ने सभी देशों को आर्थिक रूप से समृद्ध कर दिया",
      "विनाश, मानवीय क्षति और आर्थिक संकट ने सामूहिक शांति-व्यवस्था की आवश्यकता बढ़ाई",
      "युद्धों ने राष्ट्रों के बीच सभी विवाद समाप्त कर दिए",
      "युद्धों से सीमाओं पर कोई प्रभाव नहीं पड़ा"
    ],
    "correct": 1
  },
  {
    "id": 61,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "भारत के उत्तरी सीमा क्षेत्र में कौन-सी प्रमुख पर्वत प्रणाली है?",
    "options": [
      "सतपुड़ा",
      "नीलगिरि",
      "अरावली",
      "हिमालय"
    ],
    "correct": 3
  },
  {
    "id": 62,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "उत्तरी मैदान मुख्यतः किस प्रकार के निक्षेपों से निर्मित हैं?",
    "options": [
      "जलोढ़",
      "ग्रेनाइट",
      "लावा",
      "बलुआ पत्थर"
    ],
    "correct": 0
  },
  {
    "id": 63,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "question": "किस संयोजन में भारत की तीन प्रमुख भौतिक इकाइयों का सही संबंध दिया गया है?",
    "options": [
      "हिमालय—जलोढ़ मैदान; उत्तरी मैदान—प्राचीन पठार; प्रायद्वीपीय पठार—नवीन वलित पर्वत",
      "हिमालय—नवीन वलित पर्वत; उत्तरी मैदान—जलोढ़ निक्षेप; प्रायद्वीपीय पठार—प्राचीन कठोर चट्टानें",
      "हिमालय—रेगिस्तान; उत्तरी मैदान—लावा; पठार—समुद्री द्वीप",
      "तीनों इकाइयाँ समान प्रकार की चट्टानों से बनी हैं"
    ],
    "correct": 1
  },
  {
    "id": 64,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "‘अपवाह तंत्र’ से क्या तात्पर्य है?",
    "options": [
      "नहरों के समूह से",
      "सड़कों के जाल से",
      "केवल वर्षा की मात्रा से",
      "नदियों और उनकी सहायक नदियों के जाल से"
    ],
    "correct": 3
  },
  {
    "id": 65,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "हिमालयी नदियाँ सामान्यतः बारहमासी क्यों होती हैं?",
    "options": [
      "उन्हें वर्षा के साथ हिमनदों और बर्फ पिघलने से भी जल मिलता है",
      "उनमें वर्षा कभी नहीं होती",
      "वे केवल समुद्री जल से बनती हैं",
      "वे केवल भूमिगत जल पर निर्भर हैं"
    ],
    "correct": 0
  },
  {
    "id": 66,
    "subject": "सामाजिक विज्ञान",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "भूगोल — अपवाह स्वरूप",
    "question": "यदि कोई नदी वर्ष भर बहती रहे और उसके प्रवाह को मानसूनी वर्षा के साथ हिम-पिघलाव से भी जल मिलता रहे, तो वह किस प्रकार की नदी के अधिक निकट होगी?",
    "options": [
      "केवल मौसमी नदी",
      "केवल मरुस्थलीय नदी",
      "हिमालयी नदी",
      "केवल तटीय धारा"
    ],
    "correct": 2
  },
  {
    "id": 67,
    "subject": "सामाजिक विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "इतिहास",
    "question": "फ्रांस की क्रांति के कोई दो कारण लिखिए।"
  },
  {
    "id": 68,
    "subject": "सामाजिक विज्ञान",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "भूगोल",
    "question": "हिमालयी और प्रायद्वीपीय नदियों में कोई दो अंतर लिखिए।"
  },
  {
    "id": 69,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Reader — Saint Kabir",
    "question": "Kabir’s criticism of ritualism suggests that he valued—",
    "options": [
      "material success",
      "mechanical custom over understanding",
      "social status",
      "sincere inner realisation"
    ],
    "correct": 3
  },
  {
    "id": 70,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Reader — The eyes are not here",
    "question": "Where does the young traveller sit at the beginning of the passage?",
    "options": [
      "In the dining car",
      "Near the window",
      "Near the door",
      "On the platform"
    ],
    "correct": 1,
    "passage": "The young traveller entered the train compartment and found a quiet seat near the window. He began a conversation with another passenger and relied on small clues rather than asking direct questions. Each person formed a picture of the other from voice, movement and carefully chosen words. Because neither wanted to reveal too much, several ordinary details were misunderstood. The conversation remained polite, but the final discovery made the earlier assumptions seem amusing and unexpected."
  },
  {
    "id": 71,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Reader — The eyes are not here",
    "question": "Why do the two passengers form mistaken impressions of each other?",
    "options": [
      "The train stops unexpectedly",
      "They are reading different books",
      "They depend on limited clues instead of directly asking everything",
      "They have never spoken to each other"
    ],
    "correct": 2,
    "passage": "The young traveller entered the train compartment and found a quiet seat near the window. He began a conversation with another passenger and relied on small clues rather than asking direct questions. Each person formed a picture of the other from voice, movement and carefully chosen words. Because neither wanted to reveal too much, several ordinary details were misunderstood. The conversation remained polite, but the final discovery made the earlier assumptions seem amusing and unexpected."
  },
  {
    "id": 72,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Reader — The eyes are not here",
    "question": "What makes the ending effective according to the passage?",
    "options": [
      "The final discovery exposes how unreliable their earlier assumptions were",
      "A timetable changes suddenly",
      "The conversation becomes an argument",
      "The passengers leave before speaking"
    ],
    "correct": 0,
    "passage": "The young traveller entered the train compartment and found a quiet seat near the window. He began a conversation with another passenger and relied on small clues rather than asking direct questions. Each person formed a picture of the other from voice, movement and carefully chosen words. Because neither wanted to reveal too much, several ordinary details were misunderstood. The conversation remained polite, but the final discovery made the earlier assumptions seem amusing and unexpected."
  },
  {
    "id": 73,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Panorama — Prose — Yayati",
    "question": "Who is Yayati in the lesson?",
    "options": [
      "A farmer",
      "A king",
      "A soldier",
      "A merchant"
    ],
    "correct": 1
  },
  {
    "id": 74,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Panorama — Prose — Yayati",
    "question": "Why does Yayati seek another person’s youth?",
    "options": [
      "He wants to leave his kingdom immediately",
      "He wants to become a soldier",
      "He wants to escape old age and continue satisfying his desires",
      "He wants to become a scholar"
    ],
    "correct": 2
  },
  {
    "id": 75,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Panorama — Prose — Yayati",
    "question": "Yayati’s later realisation that desire cannot be satisfied simply by feeding it supports which interpretation?",
    "options": [
      "Uncontrolled desire can keep generating further desire",
      "Duty has no value",
      "More possessions necessarily remove desire",
      "Old age is only a physical problem"
    ],
    "correct": 0
  },
  {
    "id": 76,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "Who wrote ‘On His Blindness’?",
    "options": [
      "William Wordsworth",
      "John Keats",
      "Robert Frost",
      "John Milton"
    ],
    "correct": 3
  },
  {
    "id": 77,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "What does Milton’s loss of eyesight make him question?",
    "options": [
      "Whether he should become a king",
      "Whether he can still serve God through his abilities",
      "Whether travel is possible",
      "Whether poetry is enjoyable"
    ],
    "correct": 1
  },
  {
    "id": 78,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Panorama — Poetry — On His Blindness",
    "question": "The poem moves from anxiety about usefulness toward acceptance. What idea best explains this change?",
    "options": [
      "Worth is measured only by physical ability",
      "Only public recognition matters",
      "Patient service and faith can have value even without visible activity",
      "A person must avoid all work"
    ],
    "correct": 2
  },
  {
    "id": 79,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the correct form: Riya ___ her homework every evening.",
    "options": [
      "does",
      "doing",
      "did",
      "do"
    ],
    "correct": 0
  },
  {
    "id": 80,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the correct form: By the time we reached the cinema, the film ___.",
    "options": [
      "will start",
      "had started",
      "has started",
      "starts"
    ],
    "correct": 1
  },
  {
    "id": 81,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Language & Skills — Tenses",
    "question": "Choose the sentence that correctly shows an action continuing from the past up to the present.",
    "options": [
      "I lived here since 2020.",
      "I am living here since 2020.",
      "I live here since 2020.",
      "I have been living here since 2020."
    ],
    "correct": 3
  },
  {
    "id": 82,
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
    "id": 83,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Language & Skills — Modals",
    "question": "___ I use your dictionary for a few minutes?",
    "options": [
      "Need",
      "Must",
      "May",
      "Ought"
    ],
    "correct": 2
  },
  {
    "id": 84,
    "subject": "English",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Language & Skills — Modals",
    "question": "The sentence ‘You ___ have informed me earlier’ expresses—",
    "options": [
      "present ability",
      "permission",
      "future possibility only",
      "past obligation or criticism"
    ],
    "correct": 3
  },
  {
    "id": 85,
    "subject": "English",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "Reader / Panorama",
    "question": "Write the central idea of either ‘Saint Kabir’ or ‘Yayati’ in about 40–50 words."
  },
  {
    "id": 86,
    "subject": "English",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "Language & Skills",
    "question": "Write four sentences using four different tenses. Underline the verb in each sentence."
  },
  {
    "id": 87,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series: B, D, F, H, __",
    "options": [
      "I",
      "L",
      "J",
      "K"
    ],
    "correct": 2
  },
  {
    "id": 88,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Complete the series: Z, W, T, Q, __",
    "options": [
      "P",
      "O",
      "M",
      "N"
    ],
    "correct": 3
  },
  {
    "id": 89,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "If A=1, B=2, …, what is the value of G − C?",
    "options": [
      "3",
      "4",
      "5",
      "2"
    ],
    "correct": 1
  },
  {
    "id": 90,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Which letter is 6 places after F?",
    "options": [
      "M",
      "N",
      "L",
      "K"
    ],
    "correct": 2
  },
  {
    "id": 91,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "topic": "Alphabet Series",
    "question": "Which letter is 5 places before R?",
    "options": [
      "N",
      "L",
      "O",
      "M"
    ],
    "correct": 0
  },
  {
    "id": 92,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: C, G, K, O, __",
    "options": [
      "U",
      "S",
      "R",
      "T"
    ],
    "correct": 3
  },
  {
    "id": 93,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Complete the series: B, E, I, N, __",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 1
  },
  {
    "id": 94,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "If the first letter moves 2 places forward, the next 3 places, the next 4 places and so on, then A, C, F, J, __ gives—",
    "options": [
      "O",
      "M",
      "P",
      "N"
    ],
    "correct": 0
  },
  {
    "id": 95,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series: Y, V, R, M, __",
    "options": [
      "J",
      "I",
      "K",
      "H"
    ],
    "correct": 3
  },
  {
    "id": 96,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Complete the series: B, G, M, T, __ (continue cyclically after Z)",
    "options": [
      "D",
      "C",
      "A",
      "B"
    ],
    "correct": 1
  },
  {
    "id": 97,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "Find the missing pair: AB, DE, HI, MN, __",
    "options": [
      "TU",
      "UV",
      "ST",
      "RS"
    ],
    "correct": 2
  },
  {
    "id": 98,
    "subject": "तर्कशक्ति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "In the series C, F, J, O, __, each step increases by one letter more than the previous step. What is the next letter?",
    "options": [
      "U",
      "T",
      "V",
      "W"
    ],
    "correct": 0
  },
  {
    "id": 99,
    "subject": "तर्कशक्ति",
    "type": "subjective",
    "marks": 0,
    "difficulty": "moderate",
    "topic": "Alphabet Series",
    "question": "Alphabet Series: एक alphabet series बनाइए जिसमें हर अगला अक्षर 2 स्थान आगे बढ़े और पाँच पद लिखिए।"
  },
  {
    "id": 100,
    "subject": "तर्कशक्ति",
    "type": "subjective",
    "marks": 0,
    "difficulty": "challenging",
    "topic": "Alphabet Series",
    "question": "एक alphabet series बनाइए जिसमें बढ़ने वाले steps क्रमशः 1, 2, 3, 4 हों। कम-से-कम पाँच पद लिखिए।"
  }
];
