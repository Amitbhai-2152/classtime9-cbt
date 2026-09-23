// TEST 02 — ClassTime 9 | BSEB Class 9 Practice CBT
// Coverage rule: maximum 3 MCQs per listed syllabus topic component.
// 22 syllabus components × 3 = 66 questions, plus 15 Alphabet Series questions = 81.
const QUESTIONS = [
  {
    "id": 1,
    "subject": "गणित",
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "बिंदु A(−3, 4) किस चतुर्थांश में स्थित है?",
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
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "बिंदु P(5, −7) की x-अक्ष से दूरी कितनी है?",
    "options": [
      "5 इकाई",
      "7 इकाई",
      "−7 इकाई",
      "12 इकाई"
    ],
    "correct": 1
  },
  {
    "id": 3,
    "subject": "गणित",
    "topic": "निर्देशांक ज्यामिति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "एक बिंदु प्रथम चतुर्थांश में है, जिसकी y-अक्ष से दूरी 3 इकाई और x-अक्ष से दूरी 4 इकाई है। उसके निर्देशांक होंगे—",
    "options": [
      "(4, 3)",
      "(3, 4)",
      "(−3, 4)",
      "(4, −3)"
    ],
    "correct": 1
  },
  {
    "id": 4,
    "subject": "गणित",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "समीकरण 2x + y = 7 में x = 2 होने पर y का मान क्या होगा?",
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
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "इनमें से कौन-सा बिंदु 3x + 2y = 12 का एक हल है?",
    "options": [
      "(2, 3)",
      "(4, 1)",
      "(2, 2)",
      "(3, 1)"
    ],
    "correct": 2
  },
  {
    "id": 6,
    "subject": "गणित",
    "topic": "दो चरों वाले रैखिक समीकरण",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "समीकरण x + y = 6 के आलेख पर कौन-सा बिंदु नहीं होगा?",
    "options": [
      "(1, 5)",
      "(2, 4)",
      "(3, 3)",
      "(4, 3)"
    ],
    "correct": 3
  },
  {
    "id": 7,
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "द्रव्यमान संरक्षण के नियम के अनुसार रासायनिक अभिक्रिया में—",
    "options": [
      "कुल द्रव्यमान नष्ट हो जाता है",
      "कुल द्रव्यमान बढ़ जाता है",
      "अभिकारकों और उत्पादों का कुल द्रव्यमान समान रहता है",
      "केवल गैसों का द्रव्यमान समान रहता है"
    ],
    "correct": 2
  },
  {
    "id": 8,
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "पानी (H₂O) में हाइड्रोजन और ऑक्सीजन का द्रव्यमान अनुपात क्या है?",
    "options": [
      "1 : 8",
      "1 : 4",
      "2 : 1",
      "8 : 1"
    ],
    "correct": 0
  },
  {
    "id": 9,
    "subject": "विज्ञान",
    "topic": "परमाणु एवं अणु",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "यदि किसी यौगिक में तत्व X की संयोजकता 2 और तत्व Y की संयोजकता 3 है, तो उसका न्यूनतम सूत्र होगा—",
    "options": [
      "XY",
      "X₂Y₃",
      "X₃Y₂",
      "X₂Y"
    ],
    "correct": 2
  },
  {
    "id": 10,
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "इलेक्ट्रॉन पर किस प्रकार का आवेश होता है?",
    "options": [
      "धनात्मक",
      "ऋणात्मक",
      "उदासीन",
      "द्विध्रुवीय"
    ],
    "correct": 1
  },
  {
    "id": 11,
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "रदरफोर्ड के प्रयोग से मुख्यतः यह निष्कर्ष निकला कि परमाणु का अधिकांश भाग—",
    "options": [
      "ठोस और भरा हुआ है",
      "ऋणावेशित है",
      "खाली स्थान है",
      "केवल न्यूट्रॉन से बना है"
    ],
    "correct": 2
  },
  {
    "id": 12,
    "subject": "विज्ञान",
    "topic": "परमाणु की संरचना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "किसी परमाणु की परमाणु संख्या 17 और द्रव्यमान संख्या 35 है। उसके न्यूट्रॉनों की संख्या कितनी होगी?",
    "options": [
      "17",
      "18",
      "35",
      "52"
    ],
    "correct": 1
  },
  {
    "id": 13,
    "subject": "हिन्दी",
    "topic": "ग्राम-गीत का मर्म",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘ग्राम-गीत का मर्म’ निबंध के लेखक कौन हैं?",
    "options": [
      "फणीश्वरनाथ रेणु",
      "लक्ष्मीनारायण सुधांशु",
      "रामधारी सिंह दिनकर",
      "प्रेमचंद"
    ],
    "correct": 1
  },
  {
    "id": 14,
    "subject": "हिन्दी",
    "topic": "ग्राम-गीत का मर्म",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "लेखक के अनुसार ग्राम-गीतों की प्रमुख विशेषता क्या है?",
    "options": [
      "बनावटी भाषा",
      "भावों की सहज अभिव्यक्ति",
      "केवल धार्मिक विषय",
      "केवल मनोरंजन"
    ],
    "correct": 1
  },
  {
    "id": 15,
    "subject": "हिन्दी",
    "topic": "ग्राम-गीत का मर्म",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "‘ग्राम-गीत’ को ‘कला-गीत’ के संदर्भ में समझने का सबसे उपयुक्त आशय क्या है?",
    "options": [
      "यह कला से असंबंधित लोक-रचना है",
      "यह लोक-जीवन के सहज अनुभवों से विकसित काव्यात्मक अभिव्यक्ति है",
      "यह केवल शिक्षाप्रद सरकारी गीत है",
      "यह केवल शहरी जीवन का वर्णन है"
    ],
    "correct": 1
  },
  {
    "id": 16,
    "subject": "हिन्दी",
    "topic": "लाल पान की बेगम",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘लाल पान की बेगम’ के लेखक कौन हैं?",
    "options": [
      "फणीश्वरनाथ रेणु",
      "लक्ष्मीनारायण सुधांशु",
      "जयशंकर प्रसाद",
      "हरिवंशराय बच्चन"
    ],
    "correct": 0
  },
  {
    "id": 17,
    "subject": "हिन्दी",
    "topic": "लाल पान की बेगम",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "कहानी के ग्रामीण परिवेश को जीवंत बनाने में किस तत्व की विशेष भूमिका है?",
    "options": [
      "केवल राजमहल का वर्णन",
      "लोक-संस्कृति और ग्रामीण जीवन की गतिविधियाँ",
      "वैज्ञानिक प्रयोग",
      "समुद्री यात्रा"
    ],
    "correct": 1
  },
  {
    "id": 18,
    "subject": "हिन्दी",
    "topic": "लाल पान की बेगम",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "‘लाल पान की बेगम’ कहानी में ग्रामीण समाज के किस पक्ष का बहुआयामी चित्रण मिलता है?",
    "options": [
      "केवल आर्थिक समृद्धि",
      "ईर्ष्या-द्वेष, आशा-निराशा और लोक-संस्कृति जैसे विविध भाव",
      "केवल युद्ध-नीति",
      "केवल शहरी जीवन"
    ],
    "correct": 1
  },
  {
    "id": 19,
    "subject": "हिन्दी",
    "topic": "मंझन के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘मंझन के पद’ के कवि मंझन किस काव्य-परंपरा से जुड़े माने जाते हैं?",
    "options": [
      "सूफी काव्य-परंपरा",
      "वीरगाथा परंपरा",
      "रीतिकालीन दरबारी परंपरा",
      "आधुनिक छायावाद"
    ],
    "correct": 0
  },
  {
    "id": 20,
    "subject": "हिन्दी",
    "topic": "मंझन के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "मंझन के पदों में प्रेम का कौन-सा रूप प्रमुख रूप से उभरता है?",
    "options": [
      "केवल हास्य",
      "आध्यात्मिक और मानवीय प्रेम",
      "केवल राजनीतिक प्रेम",
      "केवल प्रकृति-वर्णन"
    ],
    "correct": 1
  },
  {
    "id": 21,
    "subject": "हिन्दी",
    "topic": "मंझन के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "मंझन के काव्य में प्रेम को व्यापक बनाने वाली दृष्टि क्या है?",
    "options": [
      "प्रेम को केवल निजी लाभ से जोड़ना",
      "प्रेम को मानवीय और आध्यात्मिक अनुभव के रूप में देखना",
      "प्रेम को युद्ध का पर्याय मानना",
      "प्रेम को केवल धन प्राप्ति का साधन मानना"
    ],
    "correct": 1
  },
  {
    "id": 22,
    "subject": "हिन्दी",
    "topic": "गुरु गोविंद सिंह के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "गुरु गोविंद सिंह किस रूप में प्रसिद्ध हैं?",
    "options": [
      "सिखों के दसवें गुरु",
      "मुगल सम्राट",
      "सूफी संत",
      "केवल दरबारी कवि"
    ],
    "correct": 0
  },
  {
    "id": 23,
    "subject": "हिन्दी",
    "topic": "गुरु गोविंद सिंह के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "गुरु गोविंद सिंह के पदों में कौन-सा भाव प्रमुख रूप से दिखाई देता है?",
    "options": [
      "वीरता और उत्साह",
      "केवल हास्य",
      "केवल विरह",
      "केवल प्रकृति-चित्रण"
    ],
    "correct": 0
  },
  {
    "id": 24,
    "subject": "हिन्दी",
    "topic": "गुरु गोविंद सिंह के पद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "इन पदों की काव्य-भाषा का प्रभाव किस कारण अधिक प्रखर बनता है?",
    "options": [
      "उत्साह, ओज और वीर भाव की अभिव्यक्ति",
      "अत्यधिक वैज्ञानिक शब्दावली",
      "केवल शांत भाव",
      "केवल हास्य-व्यंग्य"
    ],
    "correct": 0
  },
  {
    "id": 25,
    "subject": "हिन्दी",
    "topic": "बिहार की संगीत साधना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘बिहार की संगीत साधना’ किस पुस्तक का पाठ है?",
    "options": [
      "गोधूली भाग 1",
      "वर्णिका भाग 1",
      "पीयूषम् भाग 1",
      "पैनोरमा"
    ],
    "correct": 1
  },
  {
    "id": 26,
    "subject": "हिन्दी",
    "topic": "बिहार की संगीत साधना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "पाठ ‘बिहार की संगीत साधना’ का केंद्रीय विषय क्या है?",
    "options": [
      "बिहार की संगीत परंपरा और साधकों का योगदान",
      "केवल आधुनिक फिल्म संगीत",
      "केवल वाद्य खरीदना",
      "केवल नृत्य प्रतियोगिता"
    ],
    "correct": 0
  },
  {
    "id": 27,
    "subject": "हिन्दी",
    "topic": "बिहार की संगीत साधना",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "इस पाठ से कौन-सा निष्कर्ष सबसे उपयुक्त है?",
    "options": [
      "संगीत-साधना केवल शहरों तक सीमित है",
      "लोक और शास्त्रीय परंपराएँ साधना, परिश्रम और सांस्कृतिक विरासत से जुड़ी हैं",
      "संगीत का संबंध मेहनत से नहीं है",
      "केवल विदेशी संगीत महत्वपूर्ण है"
    ],
    "correct": 1
  },
  {
    "id": 28,
    "subject": "हिन्दी",
    "topic": "अपठित गद्यांश",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "गद्यांश के अनुसार जल संरक्षण का एक उपाय कौन-सा है?",
    "options": [
      "पानी को बहने देना",
      "रिसाव रोकना",
      "अधिक सिंचाई करना",
      "केवल बोतलबंद पानी खरीदना"
    ],
    "correct": 1,
    "passage": "जल संरक्षण केवल वर्षा जल को जमा करने तक सीमित नहीं है। घर, विद्यालय और खेतों में पानी के समझदारीपूर्ण उपयोग से भी बड़ी मात्रा में जल बचाया जा सकता है। वर्षा जल संचयन, रिसाव रोकना और आवश्यकता के अनुसार सिंचाई करना जल-संकट को कम करने के व्यावहारिक उपाय हैं।"
  },
  {
    "id": 29,
    "subject": "हिन्दी",
    "topic": "अपठित गद्यांश",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "गद्यांश का मुख्य संदेश क्या है?",
    "options": [
      "जल संरक्षण केवल सरकार की जिम्मेदारी है",
      "समझदारीपूर्ण उपयोग और संचयन से जल बचाया जा सकता है",
      "केवल किसान जल बचा सकते हैं",
      "वर्षा जल का कोई उपयोग नहीं है"
    ],
    "correct": 1,
    "passage": "जल संरक्षण केवल वर्षा जल को जमा करने तक सीमित नहीं है। घर, विद्यालय और खेतों में पानी के समझदारीपूर्ण उपयोग से भी बड़ी मात्रा में जल बचाया जा सकता है। वर्षा जल संचयन, रिसाव रोकना और आवश्यकता के अनुसार सिंचाई करना जल-संकट को कम करने के व्यावहारिक उपाय हैं।"
  },
  {
    "id": 30,
    "subject": "हिन्दी",
    "topic": "अपठित गद्यांश",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "गद्यांश में ‘व्यावहारिक उपाय’ से क्या आशय है?",
    "options": [
      "ऐसे उपाय जिन्हें वास्तविक जीवन में अपनाया जा सके",
      "केवल किताबों में पढ़े जाने वाले विचार",
      "बहुत महँगे उपकरण",
      "केवल वैज्ञानिक प्रयोगशाला के कार्य"
    ],
    "correct": 0,
    "passage": "जल संरक्षण केवल वर्षा जल को जमा करने तक सीमित नहीं है। घर, विद्यालय और खेतों में पानी के समझदारीपूर्ण उपयोग से भी बड़ी मात्रा में जल बचाया जा सकता है। वर्षा जल संचयन, रिसाव रोकना और आवश्यकता के अनुसार सिंचाई करना जल-संकट को कम करने के व्यावहारिक उपाय हैं।"
  },
  {
    "id": 31,
    "subject": "संस्कृत",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘यक्ष-युधिष्ठिर संवाद’ में प्रश्नों का उत्तर कौन देता है?",
    "options": [
      "भीम",
      "अर्जुन",
      "युधिष्ठिर",
      "नकुल"
    ],
    "correct": 2
  },
  {
    "id": 32,
    "subject": "संस्कृत",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "यक्ष-युधिष्ठिर संवाद की प्रमुख विशेषता क्या है?",
    "options": [
      "नीति और जीवन-मूल्यों पर आधारित प्रश्नोत्तर",
      "केवल युद्ध का वर्णन",
      "केवल प्रकृति-वर्णन",
      "केवल हास्य"
    ],
    "correct": 0
  },
  {
    "id": 33,
    "subject": "संस्कृत",
    "topic": "यक्ष-युधिष्ठिर संवाद",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "युधिष्ठिर के उत्तरों से कौन-सा गुण सबसे स्पष्ट होता है?",
    "options": [
      "अविवेक",
      "धैर्य और नीतिपरक बुद्धि",
      "अहंकार",
      "आलस्य"
    ],
    "correct": 1
  },
  {
    "id": 34,
    "subject": "संस्कृत",
    "topic": "चत्वारो वेदाः",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "‘चत्वारो वेदाः’ में कितने वेदों का उल्लेख है?",
    "options": [
      "दो",
      "तीन",
      "चार",
      "पाँच"
    ],
    "correct": 2
  },
  {
    "id": 35,
    "subject": "संस्कृत",
    "topic": "चत्वारो वेदाः",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "निम्नलिखित में से कौन-सा वेदों में शामिल है?",
    "options": [
      "ऋग्वेद",
      "पुराणवेद",
      "इतिहासवेद",
      "नाट्यवेद"
    ],
    "correct": 0
  },
  {
    "id": 36,
    "subject": "संस्कृत",
    "topic": "चत्वारो वेदाः",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "चार वेदों का सही क्रम कौन-सा है?",
    "options": [
      "ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद",
      "ऋग्वेद, सामवेद, पुराणवेद, अथर्ववेद",
      "यजुर्वेद, नाट्यवेद, सामवेद, अथर्ववेद",
      "अथर्ववेद, ऋग्वेद, पुराणवेद, सामवेद"
    ],
    "correct": 0
  },
  {
    "id": 37,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
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
    "id": 38,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "बास्तील के किले का पतन किस तारीख से जुड़ा है?",
    "options": [
      "4 जुलाई 1776",
      "14 जुलाई 1789",
      "26 अगस्त 1789",
      "21 जनवरी 1793"
    ],
    "correct": 1
  },
  {
    "id": 39,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — फ्रांस की क्रांति",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "‘मानव और नागरिक अधिकारों की घोषणा’ का मूल उद्देश्य क्या था?",
    "options": [
      "राजा की निरंकुश सत्ता बढ़ाना",
      "स्वतंत्रता और समानता जैसे अधिकारों को मान्यता देना",
      "सामंती विशेषाधिकार सुरक्षित करना",
      "करों को केवल किसानों पर लगाना"
    ],
    "correct": 1
  },
  {
    "id": 40,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "प्रथम विश्व युद्ध कब शुरू हुआ?",
    "options": [
      "1914",
      "1918",
      "1939",
      "1945"
    ],
    "correct": 0
  },
  {
    "id": 41,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "द्वितीय विश्व युद्ध के तात्कालिक आरंभ से कौन-सी घटना जुड़ी है?",
    "options": [
      "जर्मनी द्वारा पोलैंड पर आक्रमण",
      "भारत की स्वतंत्रता",
      "औद्योगिक क्रांति",
      "फ्रांस की क्रांति"
    ],
    "correct": 0
  },
  {
    "id": 42,
    "subject": "सामाजिक विज्ञान",
    "topic": "इतिहास — विश्व युद्धों का इतिहास",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "विश्व युद्धों के बाद अंतरराष्ट्रीय स्तर पर शांति के प्रयासों की आवश्यकता क्यों बढ़ी?",
    "options": [
      "युद्धों से मानव और आर्थिक क्षति बहुत बढ़ गई थी",
      "युद्धों से कोई क्षति नहीं हुई थी",
      "देशों को व्यापार बंद करना था",
      "केवल सीमाएँ बदलना उद्देश्य था"
    ],
    "correct": 0
  },
  {
    "id": 43,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "भारत के उत्तरी भाग में कौन-सी प्रमुख पर्वत श्रेणी है?",
    "options": [
      "अरावली",
      "हिमालय",
      "सतपुड़ा",
      "नीलगिरि"
    ],
    "correct": 1
  },
  {
    "id": 44,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "भारत के उत्तरी मैदान मुख्यतः किससे निर्मित हैं?",
    "options": [
      "लावा",
      "जलोढ़ निक्षेप",
      "केवल चूना-पत्थर",
      "ग्रेनाइट"
    ],
    "correct": 1
  },
  {
    "id": 45,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — भौतिक स्वरूप : संरचना एवं उच्चावच",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "प्रायद्वीपीय पठार की एक प्रमुख विशेषता क्या है?",
    "options": [
      "यह अपेक्षाकृत प्राचीन कठोर चट्टानों से बना है",
      "यह पूरी तरह नवीन जलोढ़ मैदान है",
      "यह केवल हिम से बना है",
      "यह केवल तटीय रेत से बना है"
    ],
    "correct": 0
  },
  {
    "id": 46,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — अपवाह स्वरूप",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "भारत की एक प्रमुख बारहमासी नदी कौन-सी है?",
    "options": [
      "गोदावरी",
      "गंगा",
      "लूनी",
      "चंबल"
    ],
    "correct": 1
  },
  {
    "id": 47,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — अपवाह स्वरूप",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "‘अपवाह तंत्र’ से क्या तात्पर्य है?",
    "options": [
      "सड़कों का जाल",
      "नदियों और उनकी सहायक नदियों का जाल",
      "केवल नहरों का समूह",
      "केवल वर्षा की मात्रा"
    ],
    "correct": 1
  },
  {
    "id": 48,
    "subject": "सामाजिक विज्ञान",
    "topic": "भूगोल — अपवाह स्वरूप",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "हिमालयी नदियों को प्रायः बारहमासी क्यों कहा जाता है?",
    "options": [
      "उन्हें केवल समुद्री जल मिलता है",
      "उन्हें वर्षा के साथ हिमनदों और बर्फ पिघलने से भी जल मिलता है",
      "उनमें कभी बाढ़ नहीं आती",
      "वे केवल मानसून में बहती हैं"
    ],
    "correct": 1
  },
  {
    "id": 49,
    "subject": "English",
    "topic": "Reader — Saint Kabir",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Saint Kabir’s teachings mainly emphasise—",
    "options": [
      "outer show only",
      "inner truth and devotion",
      "warfare",
      "wealth"
    ],
    "correct": 1
  },
  {
    "id": 50,
    "subject": "English",
    "topic": "Reader — Saint Kabir",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Kabir criticised religious practices when they became—",
    "options": [
      "simple and sincere",
      "empty rituals without inner understanding",
      "based on kindness",
      "connected with self-discipline"
    ],
    "correct": 1
  },
  {
    "id": 51,
    "subject": "English",
    "topic": "Reader — Saint Kabir",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "The central spirit of Kabir’s teaching can best be described as—",
    "options": [
      "division between communities",
      "unity and inner realization beyond superficial divisions",
      "pursuit of luxury",
      "rejection of all moral values"
    ],
    "correct": 1
  },
  {
    "id": 52,
    "subject": "English",
    "topic": "Reader — The eyes are not here",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Where does the narrator meet the girl in the story?",
    "options": [
      "On a train",
      "At a school",
      "In a market",
      "At a theatre"
    ],
    "correct": 0
  },
  {
    "id": 53,
    "subject": "English",
    "topic": "Reader — The eyes are not here",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "The narrator initially assumes that the girl can—",
    "options": [
      "see clearly",
      "sing beautifully",
      "drive the train",
      "read a newspaper"
    ],
    "correct": 0
  },
  {
    "id": 54,
    "subject": "English",
    "topic": "Reader — The eyes are not here",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "The ending creates irony mainly because—",
    "options": [
      "both passengers openly know everything about each other",
      "the narrator and the girl make assumptions about each other’s eyesight",
      "the train never moves",
      "the narrator has known the girl for years"
    ],
    "correct": 1
  },
  {
    "id": 55,
    "subject": "English",
    "topic": "Panorama — Prose — Yayati",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
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
    "id": 56,
    "subject": "English",
    "topic": "Panorama — Prose — Yayati",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "The story of Yayati raises an important question about—",
    "options": [
      "the value of endless youth and desire",
      "how to build a ship",
      "the discovery of electricity",
      "the making of paper"
    ],
    "correct": 0
  },
  {
    "id": 57,
    "subject": "English",
    "topic": "Panorama — Prose — Yayati",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "The story of Yayati most strongly suggests that unlimited satisfaction of desire—",
    "options": [
      "always brings lasting peace",
      "may deepen dissatisfaction rather than remove it",
      "makes duty unnecessary",
      "guarantees wisdom"
    ],
    "correct": 1
  },
  {
    "id": 58,
    "subject": "English",
    "topic": "Panorama — Poetry — On His Blindness",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Who wrote “On His Blindness”?",
    "options": [
      "John Milton",
      "William Wordsworth",
      "Robert Frost",
      "John Keats"
    ],
    "correct": 0
  },
  {
    "id": 59,
    "subject": "English",
    "topic": "Panorama — Poetry — On His Blindness",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "In the poem, Milton reflects on his sense of—",
    "options": [
      "having a talent he can no longer use as before",
      "owning a large estate",
      "winning a battle",
      "travelling abroad"
    ],
    "correct": 0
  },
  {
    "id": 60,
    "subject": "English",
    "topic": "Panorama — Poetry — On His Blindness",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "The poem finally emphasises that God values—",
    "options": [
      "only physical strength",
      "patient faith and sincere service",
      "only wealth",
      "only public fame"
    ],
    "correct": 1
  },
  {
    "id": 61,
    "subject": "English",
    "topic": "Language & Skills — Tenses",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Choose the correct form: She ___ to school every day.",
    "options": [
      "go",
      "goes",
      "went",
      "going"
    ],
    "correct": 1
  },
  {
    "id": 62,
    "subject": "English",
    "topic": "Language & Skills — Tenses",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Choose the correct form: When I reached the station, the train ___.",
    "options": [
      "leaves",
      "has left",
      "had left",
      "will leave"
    ],
    "correct": 2
  },
  {
    "id": 63,
    "subject": "English",
    "topic": "Language & Skills — Tenses",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "Choose the correct sentence.",
    "options": [
      "I am living here since 2020.",
      "I have been living here since 2020.",
      "I was living here since 2020.",
      "I live here since 2020."
    ],
    "correct": 1
  },
  {
    "id": 64,
    "subject": "English",
    "topic": "Language & Skills — Modals",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
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
    "id": 65,
    "subject": "English",
    "topic": "Language & Skills — Modals",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
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
    "id": 66,
    "subject": "English",
    "topic": "Language & Skills — Modals",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
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
    "id": 67,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Complete the series: A, C, E, G, __",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "correct": 1
  },
  {
    "id": 68,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Complete the series: Z, X, V, T, __",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "correct": 0
  },
  {
    "id": 69,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Complete the series: B, E, H, K, __",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "correct": 1
  },
  {
    "id": 70,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Complete the series: D, H, L, P, __",
    "options": [
      "T",
      "U",
      "V",
      "S"
    ],
    "correct": 0
  },
  {
    "id": 71,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
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
    "id": 72,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Complete the series: A, D, H, M, __",
    "options": [
      "Q",
      "R",
      "S",
      "T"
    ],
    "correct": 1
  },
  {
    "id": 73,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "Complete the series: C, F, J, O, __",
    "options": [
      "T",
      "U",
      "V",
      "W"
    ],
    "correct": 1
  },
  {
    "id": 74,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "Complete the series: B, G, M, T, __",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2
  },
  {
    "id": 75,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "If A=1, B=2, …, then the value of C + F is—",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correct": 1
  },
  {
    "id": 76,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Which letter is 5 places after H in the English alphabet?",
    "options": [
      "L",
      "M",
      "N",
      "O"
    ],
    "correct": 1
  },
  {
    "id": 77,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
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
    "id": 78,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
    "question": "In the series B, D, G, K, P, __, each term moves forward by increasing steps. What comes next?",
    "options": [
      "V",
      "W",
      "X",
      "Y"
    ],
    "correct": 0
  },
  {
    "id": 79,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "challenging",
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
    "id": 80,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "easy",
    "question": "Complete the series: M, O, Q, S, __",
    "options": [
      "T",
      "U",
      "V",
      "W"
    ],
    "correct": 1
  },
  {
    "id": 81,
    "subject": "तर्कशक्ति",
    "topic": "तर्कशक्ति — Alphabet Series",
    "type": "mcq",
    "marks": 1,
    "difficulty": "moderate",
    "question": "Complete the series: AB, DE, GH, JK, __",
    "options": [
      "LM",
      "MN",
      "NO",
      "OP"
    ],
    "correct": 1
  }
];
