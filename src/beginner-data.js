// Original curriculum authored for Darija Path. Native-speaker review is deferred.
export const units = [
  {
    "id": "b1",
    "title": "First conversations",
    "goal": "Greet someone, make a polite request, and keep going when you do not understand."
  },
  {
    "id": "b2",
    "title": "You, me & where we are from",
    "goal": "Introduce yourself, talk about other people, and ask simple questions."
  },
  {
    "id": "b3",
    "title": "People & home",
    "goal": "Introduce people, describe things, and explain who they belong to."
  },
  {
    "id": "b4",
    "title": "Numbers, time & money",
    "goal": "Count, agree on a day and time, and understand a simple price."
  },
  {
    "id": "b5",
    "title": "Food & everyday orders",
    "goal": "Order food, express a preference, and ask for a change politely."
  },
  {
    "id": "b6",
    "title": "Find your way",
    "goal": "Ask for a destination, understand directions, and choose transport."
  },
  {
    "id": "b7",
    "title": "Your everyday life",
    "goal": "Describe habits, connect a daily schedule, and say what you do not do."
  },
  {
    "id": "b8",
    "title": "Handle a whole conversation",
    "goal": "Express needs, describe yesterday, make a plan, and bring your beginner skills together."
  }
];
export const beginnerData = [
  {
    "id": "lesson-1",
    "unitId": "b1",
    "title": "First hellos",
    "words": "sbah lkhir|صباح الخير|good morning;msa lkhir|مسا الخير|good evening;mar7ba|مرحبا|welcome;ntuma|نتوما|you (plural)",
    "grammar": "Learn a greeting together with its reply. Salam works in many casual encounters. Labas? asks whether someone is well; labas can also answer that question. Add w nta? when speaking to a man, w nti? to a woman, or w ntuma? to a group. There is no need to translate every English word literally. A short exchange usually includes a greeting, a wellbeing question, and a response before the practical request.",
    "examples": [
      {
        "latin": "Salam, labas?",
        "arabic": "سلام، لاباس؟",
        "english": "Hello, how are you?"
      },
      {
        "latin": "Labas, shukran.",
        "arabic": "لاباس، شكرا.",
        "english": "Fine, thank you."
      },
      {
        "latin": "W nti?",
        "arabic": "و نتي؟",
        "english": "And you? (to a woman)"
      }
    ],
    "mistake": "Choose nta or nti for the person you are addressing, not for your own gender.",
    "reading": [
      {
        "latin": "Sbah lkhir!",
        "arabic": "صباح الخير!",
        "english": "Good morning!"
      },
      {
        "latin": "Sbah lkhir! Labas?",
        "arabic": "صباح الخير! لاباس؟",
        "english": "Good morning! How are you?"
      },
      {
        "latin": "Labas, shukran. W nti?",
        "arabic": "لاباس، شكرا. و نتي؟",
        "english": "Fine, thank you. And you?"
      },
      {
        "latin": "Bikhir. Mar7ba!",
        "arabic": "بخير. مرحبا!",
        "english": "Well. Welcome!"
      }
    ],
    "questions": [
      {
        "prompt": "How is the second speaker?",
        "options": [
          "Well",
          "Lost",
          "Hungry"
        ],
        "answer": 0,
        "explanation": "Bikhir means well."
      },
      {
        "prompt": "Who does nti address?",
        "options": [
          "A woman",
          "A man",
          "A group"
        ],
        "answer": 0,
        "explanation": "Nti addresses one woman; it does not describe the speaker."
      }
    ],
    "build": {
      "english": "Fine, thank you.",
      "latin": "Labas, shukran.",
      "arabic": "لاباس، شكرا."
    },
    "task": "Write two greeting exchanges: one with a man and one with a woman. Say each exchange aloud, swapping roles."
  },
  {
    "id": "b1-sounds",
    "unitId": "b1",
    "title": "Reading Arabizi",
    "words": "3in|عين|eye;7ut|حوت|fish;khobz|خبز|bread;ghali|غالي|expensive;qalam|قلم|pen;shms|شمس|sun;ktab|كتاب|book;bab|باب|door;smiyya|سمية|name;klma|كلمة|word",
    "grammar": "Arabizi uses Latin letters and sometimes numbers for Arabic sounds. In our course, 3 represents ع and 7 represents ح. We write kh, gh, q, and sh; online you may also meet 5, 8, 9, and ch. Numbers inside a word usually represent consonants rather than quantities. Vowels and spacing vary between writers, so treat a spelling as a clue to a spoken word. Read consonant clusters slowly instead of inserting a full English vowel after every letter.",
    "examples": [
      {
        "latin": "3afak",
        "arabic": "عافاك",
        "english": "please"
      },
      {
        "latin": "7ut",
        "arabic": "حوت",
        "english": "fish"
      },
      {
        "latin": "khobz",
        "arabic": "خبز",
        "english": "bread"
      }
    ],
    "mistake": "3 is not an English e, and 7 is not an ordinary h. Written descriptions are only an introduction to the sounds.",
    "reading": [
      {
        "latin": "Salam! Shnu smitk?",
        "arabic": "سلام! شنو سميتك؟",
        "english": "Hello! What is your name?"
      },
      {
        "latin": "Smiti Sara.",
        "arabic": "سميتي سارة.",
        "english": "My name is Sara."
      },
      {
        "latin": "Sara? Wakha. Shukran.",
        "arabic": "سارة؟ واخا. شكرا.",
        "english": "Sara? Okay. Thank you."
      },
      {
        "latin": "Mar7ba.",
        "arabic": "مرحبا.",
        "english": "You are welcome."
      }
    ],
    "questions": [
      {
        "prompt": "What is the name in the exchange?",
        "options": [
          "Sara",
          "Salam",
          "Wakha"
        ],
        "answer": 0,
        "explanation": "Smiti introduces the speaker’s name."
      },
      {
        "prompt": "Which spelling contains the sound ح?",
        "options": [
          "7ut",
          "3in",
          "bab"
        ],
        "answer": 0,
        "explanation": "7 represents ح; 3 represents ع."
      }
    ],
    "build": {
      "english": "My name is Sara.",
      "latin": "Smiti Sara.",
      "arabic": "سميتي سارة."
    },
    "task": "Sort ten course words by the sounds 3, 7, kh, gh, q, and sh. Copy them, then read them aloud. Keep the numbers inside the words."
  },
  {
    "id": "b1-polite",
    "unitId": "b1",
    "title": "Polite little phrases",
    "words": "sme7 liya|سمح ليا|excuse me / sorry;wakha|واخا|okay;bla mziya|بلا مزية|you are welcome;safi|صافي|enough / all done;tfddel|تفضل|please go ahead (to a man);tfddli|تفضلي|please go ahead (to a woman);shwiya|شوية|a little;bzzaf|بزاف|a lot;3awd|عاود|repeat (to a man);tsenna|تسنى|wait (to a man)",
    "grammar": "Politeness often comes from the whole exchange rather than a single word. Put 3afak after a request, use sme7 liya to get attention or apologize, and acknowledge help with shukran. Some short requests change with the addressee: tfddel addresses a man, tfddli a woman. These are useful fixed phrases at this stage; you will meet command patterns later. Safi can mean enough, done, or okay depending on context and tone.",
    "examples": [
      {
        "latin": "Sme7 liya, 3afak.",
        "arabic": "سمح ليا، عافاك.",
        "english": "Excuse me, please."
      },
      {
        "latin": "Tsenna shwiya, 3afak.",
        "arabic": "تسنى شوية، عافاك.",
        "english": "Wait a little, please. (to a man)"
      },
      {
        "latin": "Shukran bzzaf.",
        "arabic": "شكرا بزاف.",
        "english": "Thank you very much."
      }
    ],
    "mistake": "Do not use safi as a universal translation of thank you. It can signal that something is finished or sufficient.",
    "reading": [
      {
        "latin": "Sme7 liya!",
        "arabic": "سمح ليا!",
        "english": "Excuse me!"
      },
      {
        "latin": "Ah, tfddli.",
        "arabic": "آه، تفضلي.",
        "english": "Yes, go ahead. (to a woman)"
      },
      {
        "latin": "Tsenna shwiya, 3afak.",
        "arabic": "تسنى شوية، عافاك.",
        "english": "Wait a little, please. (to a man)"
      },
      {
        "latin": "Wakha.",
        "arabic": "واخا.",
        "english": "Okay."
      }
    ],
    "questions": [
      {
        "prompt": "What does the woman ask the man to do?",
        "options": [
          "Wait a little",
          "Leave now",
          "Buy bread"
        ],
        "answer": 0,
        "explanation": "Tsenna shwiya is a request to wait a little."
      },
      {
        "prompt": "Which word makes the request more polite?",
        "options": [
          "3afak",
          "ah",
          "shwiya"
        ],
        "answer": 0,
        "explanation": "3afak means please."
      }
    ],
    "build": {
      "english": "Thank you very much.",
      "latin": "Shukran bzzaf.",
      "arabic": "شكرا بزاف."
    },
    "task": "Write a polite request to wait, a thank-you, and a response to thanks. Practice changing tfddel to tfddli."
  },
  {
    "id": "b1-repair",
    "unitId": "b1",
    "title": "When you need a second try",
    "words": "mafhemtsh|مافهمتش|I did not understand;fhemt|فهمت|I understood;bshwiya|بشوية|slowly;3awdi|عاودي|repeat (to a woman);shnu|شنو|what;kifash|كيفاش|how;ma3reftsh|ماعرفتش|I did not know;kteb|كتب|write (to a man);ktebi|كتبي|write (to a woman);hder|هضر|speak (to a man)",
    "grammar": "Keep a few repair phrases ready before trying a longer conversation. Mafhemtsh means I did not understand; its negative frame is ma-…-sh around fhemt. You do not need to master the whole tense system to use this expression. Add bshwiya to ask for slower speech, or ask someone to write a word. Commands such as 3awd and kteb add -i when addressing one woman: 3awdi, ktebi.",
    "examples": [
      {
        "latin": "3awd bshwiya, 3afak.",
        "arabic": "عاود بشوية، عافاك.",
        "english": "Repeat slowly, please. (to a man)"
      },
      {
        "latin": "Ktebi had l-klma, 3afak.",
        "arabic": "كتبي هاد الكلمة، عافاك.",
        "english": "Write this word, please. (to a woman)"
      },
      {
        "latin": "Mafhemtsh.",
        "arabic": "مافهمتش.",
        "english": "I did not understand."
      }
    ],
    "mistake": "Bshwiya means slowly here; shwiya means a little. The b changes how the phrase is used.",
    "reading": [
      {
        "latin": "Sme7 liya, mafhemtsh.",
        "arabic": "سمح ليا، مافهمتش.",
        "english": "Sorry, I did not understand."
      },
      {
        "latin": "Wakha.",
        "arabic": "واخا.",
        "english": "Okay."
      },
      {
        "latin": "3awdi bshwiya, 3afak.",
        "arabic": "عاودي بشوية، عافاك.",
        "english": "Repeat slowly, please. (to a woman)"
      },
      {
        "latin": "Salam. Labas?",
        "arabic": "سلام. لاباس؟",
        "english": "Hello. How are you?"
      }
    ],
    "questions": [
      {
        "prompt": "Why does the learner interrupt?",
        "options": [
          "They did not understand",
          "They want a price",
          "They are leaving"
        ],
        "answer": 0,
        "explanation": "Mafhemtsh explains the difficulty."
      },
      {
        "prompt": "Who is being asked to repeat?",
        "options": [
          "A woman",
          "A group",
          "A man"
        ],
        "answer": 0,
        "explanation": "3awdi has the feminine addressee ending -i."
      }
    ],
    "build": {
      "english": "Repeat slowly, please. (to a woman)",
      "latin": "3awdi bshwiya, 3afak.",
      "arabic": "عاودي بشوية، عافاك."
    },
    "task": "Write a three-line exchange where you miss a word, ask for repetition, and thank the speaker. Include the correct form for your addressee."
  },
  {
    "id": "lesson-2",
    "unitId": "b2",
    "title": "Nice to meet you",
    "words": "huwa|هو|he;hiya|هي|she;7na|حنا|we;huma|هما|they",
    "grammar": "Present-tense introductions often put the subject directly beside the information: ana Sara, I am Sara. English needs am, is, or are in these sentences; Darija usually does not. Smiti literally identifies my name and is a useful introduction on its own. To ask a name, learn shnu smitk? as a complete question. Use mn before a place to say where someone is from. Keep your introduction short before adding extra details.",
    "examples": [
      {
        "latin": "Ana Sara.",
        "arabic": "أنا سارة.",
        "english": "I am Sara."
      },
      {
        "latin": "Hiya mn Rabat.",
        "arabic": "هي من الرباط.",
        "english": "She is from Rabat."
      },
      {
        "latin": "Shnu smitk?",
        "arabic": "شنو سميتك؟",
        "english": "What is your name?"
      }
    ],
    "mistake": "Do not add an English am or an unnecessary verb between ana and your name.",
    "reading": [
      {
        "latin": "Salam! Shnu smitk?",
        "arabic": "سلام! شنو سميتك؟",
        "english": "Hello! What is your name?"
      },
      {
        "latin": "Smiti Adam. W nti?",
        "arabic": "سميتي آدم. و نتي؟",
        "english": "My name is Adam. And you?"
      },
      {
        "latin": "Smiti Lina. Ana mn Rabat.",
        "arabic": "سميتي لينا. أنا من الرباط.",
        "english": "My name is Lina. I am from Rabat."
      },
      {
        "latin": "Mtsherrfin, Lina.",
        "arabic": "متشرفين، لينا.",
        "english": "Pleased to meet you, Lina."
      }
    ],
    "questions": [
      {
        "prompt": "Where is Lina from?",
        "options": [
          "Rabat",
          "London",
          "Fes"
        ],
        "answer": 0,
        "explanation": "Lina says ana mn Rabat."
      },
      {
        "prompt": "Which question asks a name?",
        "options": [
          "Shnu smitk?",
          "Labas?",
          "Bsh7al?"
        ],
        "answer": 0,
        "explanation": "Shnu smitk? means what is your name."
      }
    ],
    "build": {
      "english": "I am from Rabat.",
      "latin": "Ana mn Rabat.",
      "arabic": "أنا من الرباط."
    },
    "task": "Introduce yourself in three sentences. Ask a partner’s name and introduce that person with huwa or hiya."
  },
  {
    "id": "b2-people",
    "unitId": "b2",
    "title": "Who are we talking about?",
    "words": "mghribi|مغربي|Moroccan (male);mghribiya|مغربية|Moroccan (female);mrikani|مريكاني|American (male);mrikaniya|مريكانية|American (female);talib|طالب|student (male);taliba|طالبة|student (female);ustad|أستاذ|teacher (male);ustada|أستاذة|teacher (female);sadiq|صديق|friend (male);sadiqa|صديقة|friend (female)",
    "grammar": "Use ana, nta, nti, huwa, hiya, 7na, ntuma, and huma to keep track of the people in a sentence. Many identity words have masculine and feminine forms. Here mghribi becomes mghribiya, while talib becomes taliba. Learn each pair rather than assuming every word changes in exactly the same way. The pronoun and description must refer to the same person. A woman can say ana taliba; a man can say ana talib.",
    "examples": [
      {
        "latin": "Ana taliba.",
        "arabic": "أنا طالبة.",
        "english": "I am a student. (female)"
      },
      {
        "latin": "Huwa mghribi.",
        "arabic": "هو مغربي.",
        "english": "He is Moroccan."
      },
      {
        "latin": "Hiya ustada.",
        "arabic": "هي أستاذة.",
        "english": "She is a teacher."
      }
    ],
    "mistake": "Nti means you when addressing a woman. Hiya means she when talking about a woman.",
    "reading": [
      {
        "latin": "Ana Lina. Ana taliba.",
        "arabic": "أنا لينا. أنا طالبة.",
        "english": "I am Lina. I am a student."
      },
      {
        "latin": "Huwa Adam. Huwa talib.",
        "arabic": "هو آدم. هو طالب.",
        "english": "He is Adam. He is a student."
      },
      {
        "latin": "Hiya Samira. Hiya ustada.",
        "arabic": "هي سميرة. هي أستاذة.",
        "english": "She is Samira. She is a teacher."
      },
      {
        "latin": "Samira mghribiya.",
        "arabic": "سميرة مغربية.",
        "english": "Samira is Moroccan."
      }
    ],
    "questions": [
      {
        "prompt": "Who is the teacher?",
        "options": [
          "Samira",
          "Adam",
          "Lina"
        ],
        "answer": 0,
        "explanation": "Hiya ustada refers to Samira."
      },
      {
        "prompt": "Choose the matching pair.",
        "options": [
          "Hiya taliba.",
          "Hiya talib.",
          "Huwa taliba."
        ],
        "answer": 0,
        "explanation": "In these examples taliba describes a woman."
      }
    ],
    "build": {
      "english": "She is a teacher.",
      "latin": "Hiya ustada.",
      "arabic": "هي أستاذة."
    },
    "task": "Create three fictional people. Give each a name, a pronoun, and a matching occupation or nationality."
  },
  {
    "id": "b2-places",
    "unitId": "b2",
    "title": "Where are you from?",
    "words": "l-mghrib|المغرب|Morocco;mirikan|ميريكان|the United States;fransa|فرنسا|France;sbanya|سبانيا|Spain;mdina|مدينة|city;blad|بلاد|country / homeland;Rabat|الرباط|Rabat;Fes|فاس|Fes;Tanja|طنجة|Tangier;daba|دابا|now",
    "grammar": "Mnin asks about origin, while fin asks about location. Answer mnin with mn plus a place: ana mn Fes. Answer a location question with f plus a place: ana f Rabat. Being from a city does not mean that you are there now. In ordinary writing f may attach to the next word, and city names often have several Latin spellings. Learn the difference in meaning before worrying about every spacing convention.",
    "examples": [
      {
        "latin": "Mnin nta?",
        "arabic": "منين نتا؟",
        "english": "Where are you from? (to a man)"
      },
      {
        "latin": "Ana mn Fes.",
        "arabic": "أنا من فاس.",
        "english": "I am from Fes."
      },
      {
        "latin": "Daba ana f Rabat.",
        "arabic": "دابا أنا فالرباط.",
        "english": "Now I am in Rabat."
      }
    ],
    "mistake": "Mn means from; f means in/at. Swapping them changes the information you give.",
    "reading": [
      {
        "latin": "Mnin nti?",
        "arabic": "منين نتي؟",
        "english": "Where are you from? (to a woman)"
      },
      {
        "latin": "Ana mn Tanja.",
        "arabic": "أنا من طنجة.",
        "english": "I am from Tangier."
      },
      {
        "latin": "Wash nti f Tanja daba?",
        "arabic": "واش نتي فطنجة دابا؟",
        "english": "Are you in Tangier now?"
      },
      {
        "latin": "La, daba ana f Rabat.",
        "arabic": "لا، دابا أنا فالرباط.",
        "english": "No, now I am in Rabat."
      }
    ],
    "questions": [
      {
        "prompt": "Where is the woman from?",
        "options": [
          "Tangier",
          "Rabat",
          "Fes"
        ],
        "answer": 0,
        "explanation": "Mn Tanja gives her origin."
      },
      {
        "prompt": "Where is she now?",
        "options": [
          "Rabat",
          "Tangier",
          "France"
        ],
        "answer": 0,
        "explanation": "F Rabat gives her current location."
      }
    ],
    "build": {
      "english": "Now I am in Rabat.",
      "latin": "Daba ana f Rabat.",
      "arabic": "دابا أنا فالرباط."
    },
    "task": "Write where you are from and where you are now. Ask two questions that distinguish origin from current location."
  },
  {
    "id": "b2-questions",
    "unitId": "b2",
    "title": "Ask about language",
    "words": "darija|دارجة|Moroccan Arabic;l-ingliziya|الإنجليزية|English;l-fransawiya|الفرنساوية|French;l-3arbiya|العربية|Arabic;kanhder|كنهضر|I speak;kat-hder|كتهضر|you speak (male);kat-hedri|كتهضري|you speak (female);wash|واش|yes/no question marker;kanfhem|كنفهم|I understand;kanta3llem|كنتعلم|I am learning",
    "grammar": "Wash can turn a statement into a yes/no question. Start with wash, keep the main sentence, and use questioning intonation. Learn kanhder b… as I speak… and kanta3llem… as I am learning…. The language comes after b with hder: kanhder b d-darija. These useful verb chunks prepare you for the present-tense patterns in unit 7. Use shwiya to describe limited ability without claiming complete fluency.",
    "examples": [
      {
        "latin": "Wash kat-hder b d-darija?",
        "arabic": "واش كتهضر بالدارجة؟",
        "english": "Do you speak Darija? (to a man)"
      },
      {
        "latin": "Kanhder b l-ingliziya.",
        "arabic": "كنهضر بالإنجليزية.",
        "english": "I speak English."
      },
      {
        "latin": "Kanta3llem d-darija.",
        "arabic": "كنتعلم الدارجة.",
        "english": "I am learning Darija."
      }
    ],
    "mistake": "Wash asks a yes/no question. Use shnu for what, mnin for from where, and fin for where.",
    "reading": [
      {
        "latin": "Wash kat-hedri b d-darija?",
        "arabic": "واش كتهضري بالدارجة؟",
        "english": "Do you speak Darija? (to a woman)"
      },
      {
        "latin": "Shwiya. Kanta3llem d-darija.",
        "arabic": "شوية. كنتعلم الدارجة.",
        "english": "A little. I am learning Darija."
      },
      {
        "latin": "Wash kat-hedri b l-ingliziya?",
        "arabic": "واش كتهضري بالإنجليزية؟",
        "english": "Do you speak English?"
      },
      {
        "latin": "Ah, kanhder b l-ingliziya.",
        "arabic": "آه، كنهضر بالإنجليزية.",
        "english": "Yes, I speak English."
      }
    ],
    "questions": [
      {
        "prompt": "Which language is the learner studying?",
        "options": [
          "Darija",
          "English",
          "Spanish"
        ],
        "answer": 0,
        "explanation": "Kanta3llem d-darija means I am learning Darija."
      },
      {
        "prompt": "What does shwiya describe here?",
        "options": [
          "Limited Darija ability",
          "A price",
          "A city"
        ],
        "answer": 0,
        "explanation": "It qualifies how much Darija the learner speaks."
      }
    ],
    "build": {
      "english": "I am learning Darija.",
      "latin": "Kanta3llem d-darija.",
      "arabic": "كنتعلم الدارجة."
    },
    "task": "Write a short introduction including your name, origin, and languages. Ask a partner one wash question and one information question."
  },
  {
    "id": "lesson-3",
    "unitId": "b3",
    "title": "People around you",
    "words": "hada|هادا|this (masculine);hadi|هادي|this (feminine);sa7bti|صاحبتي|my friend (female);wld|ولد|boy / son",
    "grammar": "Hada and hadi point to someone or something nearby. Use hada with a masculine noun and hadi with a feminine noun: hada khoya, hadi khti. A feminine noun does not have to describe a woman: dar, house, is grammatically feminine, so say hadi dar. Family words often include a possessive ending in their everyday form. Learn khoya and khti as my brother and my sister, not as the bare words brother and sister.",
    "examples": [
      {
        "latin": "Hada khoya.",
        "arabic": "هادا خويا.",
        "english": "This is my brother."
      },
      {
        "latin": "Hadi sa7bti.",
        "arabic": "هادي صاحبتي.",
        "english": "This is my female friend."
      },
      {
        "latin": "Hadi dar dyali.",
        "arabic": "هادي دار ديالي.",
        "english": "This is my house."
      }
    ],
    "mistake": "Hada and hadi depend on the noun being identified. Dar is feminine even though a house is not a person.",
    "reading": [
      {
        "latin": "Hadi 3a2ila dyali.",
        "arabic": "هادي عائلة ديالي.",
        "english": "This is my family."
      },
      {
        "latin": "Hada khoya. Smitu Adam.",
        "arabic": "هادا خويا. سميتو آدم.",
        "english": "This is my brother. His name is Adam."
      },
      {
        "latin": "Hadi khti. Smitha Lina.",
        "arabic": "هادي ختي. سميتها لينا.",
        "english": "This is my sister. Her name is Lina."
      },
      {
        "latin": "Hadi dar dyali.",
        "arabic": "هادي دار ديالي.",
        "english": "This is my house."
      }
    ],
    "questions": [
      {
        "prompt": "Who is Adam?",
        "options": [
          "The speaker’s brother",
          "The speaker’s father",
          "A teacher"
        ],
        "answer": 0,
        "explanation": "Khoya means my brother."
      },
      {
        "prompt": "Which demonstrative goes with dar?",
        "options": [
          "Hadi",
          "Hada",
          "Huwa"
        ],
        "answer": 0,
        "explanation": "Dar is grammatically feminine."
      }
    ],
    "build": {
      "english": "This is my sister.",
      "latin": "Hadi khti.",
      "arabic": "هادي ختي."
    },
    "task": "Draw or imagine a family photo. Write four introductions using hada and hadi, and explain the family relationship."
  },
  {
    "id": "b3-describe",
    "unitId": "b3",
    "title": "Big, small & beautiful",
    "words": "kbir|كبير|big (masculine);kbira|كبيرة|big (feminine);sghir|صغير|small (masculine);sghira|صغيرة|small (feminine);zwin|زوين|beautiful / nice (masculine);zwina|زوينة|beautiful / nice (feminine);jdid|جديد|new (masculine);jdida|جديدة|new (feminine);qdim|قديم|old (masculine);qdima|قديمة|old (feminine)",
    "grammar": "Describing words usually follow the noun: dar kbira, a big house. Many adjectives add -a with feminine nouns: kbir/kbira, zwin/zwina. Learn the noun’s gender together with its description. A short sentence can also put a definite noun before an adjective: d-dar kbira, the house is big. This does not need an English-style is. When an adjective belongs inside a definite noun phrase, both noun and adjective take the definite article; practice that distinction gradually.",
    "examples": [
      {
        "latin": "Hada ktab jdid.",
        "arabic": "هادا كتاب جديد.",
        "english": "This is a new book."
      },
      {
        "latin": "Hadi dar kbira.",
        "arabic": "هادي دار كبيرة.",
        "english": "This is a big house."
      },
      {
        "latin": "D-dar zwina.",
        "arabic": "الدار زوينة.",
        "english": "The house is beautiful."
      }
    ],
    "mistake": "Use dar kbira, not dar kbir. Keep the adjective after the noun in these examples.",
    "reading": [
      {
        "latin": "Hadi dar jdida.",
        "arabic": "هادي دار جديدة.",
        "english": "This is a new house."
      },
      {
        "latin": "D-dar kbira u zwina.",
        "arabic": "الدار كبيرة و زوينة.",
        "english": "The house is big and beautiful."
      },
      {
        "latin": "Hada ktab qdim.",
        "arabic": "هادا كتاب قديم.",
        "english": "This is an old book."
      },
      {
        "latin": "L-ktab sghir.",
        "arabic": "الكتاب صغير.",
        "english": "The book is small."
      }
    ],
    "questions": [
      {
        "prompt": "What is new?",
        "options": [
          "The house",
          "The book",
          "The city"
        ],
        "answer": 0,
        "explanation": "Dar jdida identifies a new house."
      },
      {
        "prompt": "Choose the matching description.",
        "options": [
          "Ktab sghir",
          "Ktab sghira",
          "Dar sghir"
        ],
        "answer": 0,
        "explanation": "Ktab is masculine, so use sghir."
      }
    ],
    "build": {
      "english": "This is a big house.",
      "latin": "Hadi dar kbira.",
      "arabic": "هادي دار كبيرة."
    },
    "task": "Describe a house and a book with two adjectives each. Check adjective placement and agreement."
  },
  {
    "id": "b3-belong",
    "unitId": "b3",
    "title": "Mine, yours & theirs",
    "words": "dyalk|ديالك|yours;dyalu|ديالو|his;dyalha|ديالها|hers;dyalna|ديالنا|ours;dyalkum|ديالكم|yours (plural);dyalhum|ديالهم|theirs;shkun|شكون|who;tilifun|تليفون|telephone;sak|ساك|bag;mefta7|مفتاح|key",
    "grammar": "Dyal connects an object with its owner: l-ktab dyal Lina, Lina’s book. With a pronoun it becomes dyali, dyalk, dyalu, dyalha, dyalna, dyalkum, or dyalhum. The ending identifies the owner; it does not agree with the object. A woman’s book is l-ktab dyalha even though ktab is masculine. Use dyal shkun? to ask whose something is. Keep the same object and change only the owner when practicing.",
    "examples": [
      {
        "latin": "Hada l-ktab dyali.",
        "arabic": "هادا الكتاب ديالي.",
        "english": "This book is mine."
      },
      {
        "latin": "Hadi d-dar dyalu.",
        "arabic": "هادي الدار ديالو.",
        "english": "This house is his."
      },
      {
        "latin": "Had t-tilifun dyal shkun?",
        "arabic": "هاد التليفون ديال شكون؟",
        "english": "Whose phone is this?"
      }
    ],
    "mistake": "Dyalha means belonging to her, not belonging to a feminine object.",
    "reading": [
      {
        "latin": "Had s-sak dyal shkun?",
        "arabic": "هاد الصاك ديال شكون؟",
        "english": "Whose bag is this?"
      },
      {
        "latin": "Dyal Lina.",
        "arabic": "ديال لينا.",
        "english": "It is Lina’s."
      },
      {
        "latin": "W had t-tilifun?",
        "arabic": "و هاد التليفون؟",
        "english": "And this phone?"
      },
      {
        "latin": "Hada dyali.",
        "arabic": "هادا ديالي.",
        "english": "This one is mine."
      }
    ],
    "questions": [
      {
        "prompt": "Who owns the bag?",
        "options": [
          "Lina",
          "The questioner",
          "An unnamed group"
        ],
        "answer": 0,
        "explanation": "Dyal Lina names the owner."
      },
      {
        "prompt": "How do you say ours?",
        "options": [
          "Dyalna",
          "Dyalha",
          "Dyalu"
        ],
        "answer": 0,
        "explanation": "-na marks us in this possessive form."
      }
    ],
    "build": {
      "english": "This book is mine.",
      "latin": "Hada l-ktab dyali.",
      "arabic": "هادا الكتاب ديالي."
    },
    "task": "Label five objects with different owners. Ask whose two of them are, then answer using a possessive form."
  },
  {
    "id": "b3-home",
    "unitId": "b3",
    "title": "A look around the house",
    "words": "bit|بيت|room;kuzina|كوزينة|kitchen;7mmam|حمام|bathroom / bath;salon|صالون|living room;shrjem|شرجم|window;tbla|طبلة|table;kursi|كرسي|chair;namusiya|ناموسية|bed;kayn|كاين|there is (masculine);kayna|كاينة|there is (feminine)",
    "grammar": "Kayn and kayna introduce something that exists or is available. Match them to the noun: kayn kursi, there is a chair; kayna tbla, there is a table. A location can follow with f: kayn kursi f l-bit. This differs from identifying a known object with hada or hadi. Start with one object at a time. You will meet plural kaynin and fuller location phrases later in the course.",
    "examples": [
      {
        "latin": "Kayn kursi f l-bit.",
        "arabic": "كاين كرسي فالبيت.",
        "english": "There is a chair in the room."
      },
      {
        "latin": "Kayna tbla f l-kuzina.",
        "arabic": "كاينة طبلة فالكوزينة.",
        "english": "There is a table in the kitchen."
      },
      {
        "latin": "Hada salon.",
        "arabic": "هادا صالون.",
        "english": "This is a living room."
      }
    ],
    "mistake": "Use kayna with tbla. Do not choose the form based on the gender of the speaker.",
    "reading": [
      {
        "latin": "Hadi dar dyalna.",
        "arabic": "هادي دار ديالنا.",
        "english": "This is our house."
      },
      {
        "latin": "Kayn salon kbir.",
        "arabic": "كاين صالون كبير.",
        "english": "There is a big living room."
      },
      {
        "latin": "Kayna tbla f l-kuzina.",
        "arabic": "كاينة طبلة فالكوزينة.",
        "english": "There is a table in the kitchen."
      },
      {
        "latin": "Kayn kursi f l-bit.",
        "arabic": "كاين كرسي فالبيت.",
        "english": "There is a chair in the room."
      }
    ],
    "questions": [
      {
        "prompt": "Where is the table?",
        "options": [
          "In the kitchen",
          "In the bathroom",
          "Outside"
        ],
        "answer": 0,
        "explanation": "F l-kuzina means in the kitchen."
      },
      {
        "prompt": "Which form fits tbla?",
        "options": [
          "Kayna",
          "Kayn",
          "Ana"
        ],
        "answer": 0,
        "explanation": "Tbla is feminine."
      }
    ],
    "build": {
      "english": "There is a chair in the room.",
      "latin": "Kayn kursi f l-bit.",
      "arabic": "كاين كرسي فالبيت."
    },
    "task": "Describe an imaginary home in five sentences. Include two rooms, two objects, and one ownership phrase."
  },
  {
    "id": "lesson-4",
    "unitId": "b4",
    "title": "Numbers & prices",
    "words": "stta|ستة|six;sb3a|سبعة|seven;tmnya|تمنية|eight;ts3ud|تسعود|nine",
    "grammar": "Learn standalone numbers first, then practice them in prices. Bsh7al? asks how much. A price reply can begin with b: b 3shra drahem, for ten dirhams. Number forms may change before a counted noun, so avoid assuming that every standalone number combines identically with every noun. Here we practice recognition, basic counting, and a few useful price chunks. Listen for the full price and confirm it before agreeing.",
    "examples": [
      {
        "latin": "Wa7d, juj, tlata.",
        "arabic": "واحد، جوج، ثلاثة.",
        "english": "One, two, three."
      },
      {
        "latin": "Bsh7al hada?",
        "arabic": "بشحال هادا؟",
        "english": "How much is this?"
      },
      {
        "latin": "B 3shra drahem.",
        "arabic": "بعشرة دراهم.",
        "english": "For ten dirhams."
      }
    ],
    "mistake": "3 inside 3shra or rb3a represents a sound. It is not an extra digit in the number.",
    "reading": [
      {
        "latin": "Bsh7al had l-qalam?",
        "arabic": "بشحال هاد القلم؟",
        "english": "How much is this pen?"
      },
      {
        "latin": "B khmsa drahem.",
        "arabic": "بخمسة دراهم.",
        "english": "Five dirhams."
      },
      {
        "latin": "W had l-ktab?",
        "arabic": "و هاد الكتاب؟",
        "english": "And this book?"
      },
      {
        "latin": "B 3shrin derhem.",
        "arabic": "بعشرين درهم.",
        "english": "Twenty dirhams."
      }
    ],
    "questions": [
      {
        "prompt": "How much is the pen?",
        "options": [
          "Five dirhams",
          "Twenty dirhams",
          "Ten dirhams"
        ],
        "answer": 0,
        "explanation": "Khmsa is five."
      },
      {
        "prompt": "How much is the book?",
        "options": [
          "Twenty dirhams",
          "Two dirhams",
          "Four dirhams"
        ],
        "answer": 0,
        "explanation": "3shrin is twenty."
      }
    ],
    "build": {
      "english": "How much is this?",
      "latin": "Bsh7al hada?",
      "arabic": "بشحال هادا؟"
    },
    "task": "Write the numbers one through ten without looking. Then write two buyer–seller exchanges with different prices."
  },
  {
    "id": "b4-larger",
    "unitId": "b4",
    "title": "Larger numbers & amounts",
    "words": "7dash|حداش|eleven;tnash|طناش|twelve;tlttash|تلتاش|thirteen;rb3tash|ربعتاش|fourteen;khmstash|خمسطاش|fifteen;tlatin|ثلاثين|thirty;rb3in|ربعين|forty;khmsin|خمسين|fifty;miyya|مية|one hundred;derhem|درهم|dirham",
    "grammar": "After twenty, many compound numbers put the unit before the tens: wa7d u 3shrin, twenty-one; khmsa u tlatin, thirty-five. The u means and. Practice hearing the two parts as one amount. Prices in everyday life may also be quoted in local counting conventions, so a beginner should confirm that the amount is in dirhams. Here all prices explicitly use dirhams. Teen-number spellings vary; use these as a consistent reading guide.",
    "examples": [
      {
        "latin": "Wa7d u 3shrin.",
        "arabic": "واحد و عشرين.",
        "english": "Twenty-one."
      },
      {
        "latin": "Khmsa u tlatin.",
        "arabic": "خمسة و ثلاثين.",
        "english": "Thirty-five."
      },
      {
        "latin": "Miyya derhem.",
        "arabic": "مية درهم.",
        "english": "One hundred dirhams."
      }
    ],
    "mistake": "Darija compound numbers put the units before the tens in these examples: five and thirty, not thirty and five.",
    "reading": [
      {
        "latin": "Bsh7al had s-sak?",
        "arabic": "بشحال هاد الصاك؟",
        "english": "How much is this bag?"
      },
      {
        "latin": "B khmsa u tlatin derhem.",
        "arabic": "بخمسة و ثلاثين درهم.",
        "english": "Thirty-five dirhams."
      },
      {
        "latin": "Khmsa u tlatin?",
        "arabic": "خمسة و ثلاثين؟",
        "english": "Thirty-five?"
      },
      {
        "latin": "Ah, khmsa u tlatin derhem.",
        "arabic": "آه، خمسة و ثلاثين درهم.",
        "english": "Yes, thirty-five dirhams."
      }
    ],
    "questions": [
      {
        "prompt": "What is the price?",
        "options": [
          "35 dirhams",
          "53 dirhams",
          "15 dirhams"
        ],
        "answer": 0,
        "explanation": "Khmsa u tlatin is five and thirty: 35."
      },
      {
        "prompt": "Why does the buyer repeat the number?",
        "options": [
          "To confirm it",
          "To say goodbye",
          "To ask a name"
        ],
        "answer": 0,
        "explanation": "Repeating a price is a useful understanding check."
      }
    ],
    "build": {
      "english": "Thirty-five dirhams.",
      "latin": "Khmsa u tlatin derhem.",
      "arabic": "خمسة و ثلاثين درهم."
    },
    "task": "Write 21, 25, 31, and 35 in words. Create a price exchange and repeat the amount to confirm it."
  },
  {
    "id": "b4-days",
    "unitId": "b4",
    "title": "Days & dates for plans",
    "words": "lyum|اليوم|today;ghdda|غدا|tomorrow;lbar7|البارح|yesterday;t-tnin|التنين|Monday;t-tlat|التلات|Tuesday;l-arb3|الأربع|Wednesday;l-khmis|الخميس|Thursday;l-jem3a|الجمعة|Friday;s-sebt|السبت|Saturday;l-7edd|الحد|Sunday",
    "grammar": "Time words help your listener place an event. Lyum is today, ghdda tomorrow, and lbar7 yesterday. Day names often appear with nhar, day: nhar l-jem3a, on Friday. Learn days as fixed expressions rather than translating English on literally. To ask when, use foqash? At this stage you can answer with just a day phrase. Future and past verb forms come later; do not attach ka- to a verb merely because a day word appears.",
    "examples": [
      {
        "latin": "Nhar l-jem3a.",
        "arabic": "نهار الجمعة.",
        "english": "On Friday."
      },
      {
        "latin": "Ghdda nhar s-sebt.",
        "arabic": "غدا نهار السبت.",
        "english": "Tomorrow is Saturday."
      },
      {
        "latin": "Foqash?",
        "arabic": "فوقاش؟",
        "english": "When?"
      }
    ],
    "mistake": "Ghdda means tomorrow, not later today. Use lyum if you mean today.",
    "reading": [
      {
        "latin": "Lyum nhar l-jem3a.",
        "arabic": "اليوم نهار الجمعة.",
        "english": "Today is Friday."
      },
      {
        "latin": "Ghdda nhar s-sebt.",
        "arabic": "غدا نهار السبت.",
        "english": "Tomorrow is Saturday."
      },
      {
        "latin": "Foqash? Nhar s-sebt?",
        "arabic": "فوقاش؟ نهار السبت؟",
        "english": "When? On Saturday?"
      },
      {
        "latin": "La, nhar l-7edd.",
        "arabic": "لا، نهار الحد.",
        "english": "No, on Sunday."
      }
    ],
    "questions": [
      {
        "prompt": "What day is today in this exchange?",
        "options": [
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "answer": 0,
        "explanation": "The opening sentence says lyum nhar l-jem3a."
      },
      {
        "prompt": "Which day is agreed at the end?",
        "options": [
          "Sunday",
          "Saturday",
          "Monday"
        ],
        "answer": 0,
        "explanation": "The final speaker corrects Saturday to Sunday."
      }
    ],
    "build": {
      "english": "Tomorrow is Saturday.",
      "latin": "Ghdda nhar s-sebt.",
      "arabic": "غدا نهار السبت."
    },
    "task": "Write today, tomorrow, and yesterday with the correct day names for an imaginary Friday. Suggest a day and politely correct it."
  },
  {
    "id": "b4-clock",
    "unitId": "b4",
    "title": "What time works?",
    "words": "sa3a|ساعة|hour / clock;sh7al|شحال|how much / how many;dqiqa|دقيقة|minute;nss|نص|half;rb3|ربع|quarter;sbah|صباح|morning;l-3shiya|العشية|late afternoon / evening;l-lil|الليل|night;bekri|بكري|early;m3ttel|معطل|late",
    "grammar": "For the clock, learn sh7al f s-sa3a? as what time is it? A short reply can give the hour: l-wa7da, one o’clock; juj, two; tlata, three. U nss adds half past, while u rb3 adds a quarter past. In a plan, f juj means at two. Add a part of the day when needed because a bare number may be ambiguous. Everyday time expressions differ regionally; these are useful common patterns.",
    "examples": [
      {
        "latin": "Sh7al f s-sa3a?",
        "arabic": "شحال فالساعة؟",
        "english": "What time is it?"
      },
      {
        "latin": "Juj u nss.",
        "arabic": "جوج و نص.",
        "english": "Half past two."
      },
      {
        "latin": "F tlata d l-3shiya.",
        "arabic": "فالثلاثة دالعشية.",
        "english": "At three in the afternoon."
      }
    ],
    "mistake": "Nss is half; rb3 is a quarter. Do not confuse rb3 with rb3a, the standalone number four.",
    "reading": [
      {
        "latin": "Sh7al f s-sa3a?",
        "arabic": "شحال فالساعة؟",
        "english": "What time is it?"
      },
      {
        "latin": "Juj u nss.",
        "arabic": "جوج و نص.",
        "english": "Half past two."
      },
      {
        "latin": "Foqash? F tlata?",
        "arabic": "فوقاش؟ فالثلاثة؟",
        "english": "When? At three?"
      },
      {
        "latin": "Ah, f tlata d l-3shiya.",
        "arabic": "آه، فالثلاثة دالعشية.",
        "english": "Yes, at three in the afternoon."
      }
    ],
    "questions": [
      {
        "prompt": "What time is it now?",
        "options": [
          "2:30",
          "3:00",
          "2:15"
        ],
        "answer": 0,
        "explanation": "Juj u nss is two and a half: 2:30."
      },
      {
        "prompt": "What time do they choose?",
        "options": [
          "3 in the afternoon",
          "2 in the morning",
          "Half past three"
        ],
        "answer": 0,
        "explanation": "F tlata d l-3shiya specifies three in the afternoon."
      }
    ],
    "build": {
      "english": "Half past two.",
      "latin": "Juj u nss.",
      "arabic": "جوج و نص."
    },
    "task": "Write three clock times and a proposed meeting time. Include a day and a part of the day so the plan is clear."
  },
  {
    "id": "lesson-5",
    "unitId": "b5",
    "title": "At the café",
    "words": "na3na3|نعناع|mint;3asir|عصير|juice;limun|ليمون|orange / citrus (regional usage varies);qar3a|قرعة|bottle",
    "grammar": "Bghit is a convenient request form meaning I would like. Follow it with the item, then add 3afak. B means with and bla means without: qhwa b l-7lib, coffee with milk; atay bla skkar, tea without sugar. Keep modifiers close to the item they describe, especially when ordering several drinks. Although bghit has a past-tense form, it is commonly used for a present request. Learn the complete request pattern before analyzing its tense.",
    "examples": [
      {
        "latin": "Bghit atay, 3afak.",
        "arabic": "بغيت أتاي، عافاك.",
        "english": "I would like tea, please."
      },
      {
        "latin": "Qhwa b l-7lib.",
        "arabic": "قهوة بالحليب.",
        "english": "Coffee with milk."
      },
      {
        "latin": "Atay bla skkar.",
        "arabic": "أتاي بلا سكر.",
        "english": "Tea without sugar."
      }
    ],
    "mistake": "B l-7lib means with milk; bla 7lib means without milk. The small difference changes the order.",
    "reading": [
      {
        "latin": "Salam. Bghit qhwa, 3afak.",
        "arabic": "سلام. بغيت قهوة، عافاك.",
        "english": "Hello. I would like coffee, please."
      },
      {
        "latin": "B l-7lib?",
        "arabic": "بالحليب؟",
        "english": "With milk?"
      },
      {
        "latin": "Ah, b l-7lib, walakin bla skkar.",
        "arabic": "آه، بالحليب، ولكن بلا سكر.",
        "english": "Yes, with milk, but without sugar."
      },
      {
        "latin": "Wakha.",
        "arabic": "واخا.",
        "english": "Okay."
      }
    ],
    "questions": [
      {
        "prompt": "What does the customer order?",
        "options": [
          "Coffee",
          "Tea",
          "Juice"
        ],
        "answer": 0,
        "explanation": "Bghit qhwa names the drink."
      },
      {
        "prompt": "How do they want it?",
        "options": [
          "With milk, without sugar",
          "Without milk, with sugar",
          "Without either"
        ],
        "answer": 0,
        "explanation": "B l-7lib adds milk; bla skkar removes sugar."
      }
    ],
    "build": {
      "english": "I would like tea, please.",
      "latin": "Bghit atay, 3afak.",
      "arabic": "بغيت أتاي، عافاك."
    },
    "task": "Write orders for two people. Give each a different drink and one change, then read the order aloud."
  },
  {
    "id": "b5-food",
    "unitId": "b5",
    "title": "What is on the table?",
    "words": "makla|ماكلة|food;djaj|دجاج|chicken;l7em|لحم|meat;bid|بيض|eggs;ross|روز|rice;khodra|خضرة|vegetables;matisha|مطيشة|tomato;btata|بطاطا|potato;zit|زيت|oil;ml7a|ملحة|salt",
    "grammar": "Use u to join two foods: djaj u khodra. Use wlla to offer a choice: djaj wlla l7em? The difference matters because and asks for both while or offers alternatives. In orders, a food word can often be used without translating an English a or some. Learn dishes and their ingredients as chunks. When an ingredient matters, ask a clear question rather than assuming a familiar dish always has the same recipe.",
    "examples": [
      {
        "latin": "Bghit djaj u khodra.",
        "arabic": "بغيت دجاج و خضرة.",
        "english": "I would like chicken and vegetables."
      },
      {
        "latin": "Djaj wlla l7em?",
        "arabic": "دجاج ولا لحم؟",
        "english": "Chicken or meat?"
      },
      {
        "latin": "Wash kayn ross?",
        "arabic": "واش كاين الروز؟",
        "english": "Is there rice?"
      }
    ],
    "mistake": "U joins items; wlla offers alternatives. They are not interchangeable.",
    "reading": [
      {
        "latin": "Shnu bghiti? Djaj wlla l7em?",
        "arabic": "شنو بغيتي؟ دجاج ولا لحم؟",
        "english": "What would you like? Chicken or meat?"
      },
      {
        "latin": "Bghit djaj u khodra.",
        "arabic": "بغيت دجاج و خضرة.",
        "english": "I would like chicken and vegetables."
      },
      {
        "latin": "Wash bghiti khobz?",
        "arabic": "واش بغيتي خبز؟",
        "english": "Would you like bread?"
      },
      {
        "latin": "Ah, shwiya, 3afak.",
        "arabic": "آه، شوية، عافاك.",
        "english": "Yes, a little, please."
      }
    ],
    "questions": [
      {
        "prompt": "Which main food is chosen?",
        "options": [
          "Chicken",
          "Meat",
          "Eggs"
        ],
        "answer": 0,
        "explanation": "The reply selects djaj."
      },
      {
        "prompt": "Does the customer want bread?",
        "options": [
          "Yes, a little",
          "No",
          "Only bread"
        ],
        "answer": 0,
        "explanation": "Ah, shwiya confirms a small amount."
      }
    ],
    "build": {
      "english": "I would like chicken and vegetables.",
      "latin": "Bghit djaj u khodra.",
      "arabic": "بغيت دجاج و خضرة."
    },
    "task": "Create a lunch order with two foods. Offer your partner a choice using wlla, then answer with one choice."
  },
  {
    "id": "b5-taste",
    "unitId": "b5",
    "title": "Likes, tastes & preferences",
    "words": "bnin|بنين|delicious (masculine);bnina|بنينة|delicious (feminine);skhun|سخون|hot (masculine);skhuna|سخونة|hot (feminine);bard|بارد|cold (masculine);barda|باردة|cold (feminine);7lu|حلو|sweet (masculine);7lwa|حلوة|sweet (feminine);kanbghi|كنبغي|I like / love / want;kanfddel|كنفضل|I prefer",
    "grammar": "Kanbghi can express liking, love, or wanting depending on the context; kanfddel makes a preference explicit. Add a reason with 7it, because. Food adjectives follow the same agreement patterns as descriptions of houses or objects: atay bnin, tea is delicious; qhwa skhuna, coffee is hot. Focus on a short preference and one reason. Do not try to translate every English way of expressing taste with the same Darija verb.",
    "examples": [
      {
        "latin": "Kanfddel atay.",
        "arabic": "كنفضل أتاي.",
        "english": "I prefer tea."
      },
      {
        "latin": "L-qhwa skhuna.",
        "arabic": "القهوة سخونة.",
        "english": "The coffee is hot."
      },
      {
        "latin": "Had l-khobz bnin.",
        "arabic": "هاد الخبز بنين.",
        "english": "This bread is delicious."
      }
    ],
    "mistake": "Skhun and skhuna follow the noun’s gender, not the drinker’s gender.",
    "reading": [
      {
        "latin": "Wash katbghi atay?",
        "arabic": "واش كتبغي أتاي؟",
        "english": "Do you like tea? (to a man)"
      },
      {
        "latin": "Ah, kanbghi atay.",
        "arabic": "آه، كنبغي أتاي.",
        "english": "Yes, I like tea."
      },
      {
        "latin": "W l-qhwa?",
        "arabic": "و القهوة؟",
        "english": "And coffee?"
      },
      {
        "latin": "Kanfddel atay bla skkar.",
        "arabic": "كنفضل أتاي بلا سكر.",
        "english": "I prefer tea without sugar."
      }
    ],
    "questions": [
      {
        "prompt": "Which drink does the speaker prefer?",
        "options": [
          "Tea",
          "Coffee",
          "Milk"
        ],
        "answer": 0,
        "explanation": "Kanfddel atay states the preference."
      },
      {
        "prompt": "How is the preferred tea prepared?",
        "options": [
          "Without sugar",
          "With milk",
          "Cold"
        ],
        "answer": 0,
        "explanation": "Bla skkar means without sugar; temperature is not specified."
      }
    ],
    "build": {
      "english": "I prefer tea without sugar.",
      "latin": "Kanfddel atay bla skkar.",
      "arabic": "كنفضل أتاي بلا سكر."
    },
    "task": "Describe two foods or drinks. State a preference and add a reason using 7it. Check the adjective ending."
  },
  {
    "id": "b5-restaurant",
    "unitId": "b5",
    "title": "At a small restaurant",
    "words": "restora|ريسطورا|restaurant;menu|مينو|menu;7sab|حساب|bill;ma3lqa|معلقة|spoon;furshita|فورشيطة|fork;mus|موس|knife;tbsil|طبسيل|plate;mandil|منديل|napkin;wlla|ولا|or;zid|زيد|add more (to a man)",
    "grammar": "A restaurant exchange has a predictable sequence: get attention, ask what is available, order, and request the bill. You can reuse bghit for an item and 3afak for politeness. L-7sab, 3afak is a short conventional request for the bill. If you need more of something, zid shwiya… is a useful command to a man; zidi addresses a woman. Pointing and a clear noun can be more effective than attempting a long sentence you have not learned.",
    "examples": [
      {
        "latin": "L-7sab, 3afak.",
        "arabic": "الحساب، عافاك.",
        "english": "The bill, please."
      },
      {
        "latin": "Bghit ma3lqa, 3afak.",
        "arabic": "بغيت معلقة، عافاك.",
        "english": "I would like a spoon, please."
      },
      {
        "latin": "Zid shwiya d l-ma, 3afak.",
        "arabic": "زيد شوية دالما، عافاك.",
        "english": "Add a little water, please. (to a man)"
      }
    ],
    "mistake": "3afak adds politeness, but it does not change the command’s masculine or feminine form.",
    "reading": [
      {
        "latin": "Sme7 liya. Bghit ma3lqa, 3afak.",
        "arabic": "سمح ليا. بغيت معلقة، عافاك.",
        "english": "Excuse me. I would like a spoon, please."
      },
      {
        "latin": "Wakha. Tfddel.",
        "arabic": "واخا. تفضل.",
        "english": "Okay. Here you are. (to a man)"
      },
      {
        "latin": "Shukran. L-7sab, 3afak.",
        "arabic": "شكرا. الحساب، عافاك.",
        "english": "Thank you. The bill, please."
      },
      {
        "latin": "Khmsin derhem.",
        "arabic": "خمسين درهم.",
        "english": "Fifty dirhams."
      }
    ],
    "questions": [
      {
        "prompt": "What utensil does the customer request?",
        "options": [
          "A spoon",
          "A fork",
          "A knife"
        ],
        "answer": 0,
        "explanation": "Ma3lqa means spoon."
      },
      {
        "prompt": "What is the total?",
        "options": [
          "50 dirhams",
          "15 dirhams",
          "5 dirhams"
        ],
        "answer": 0,
        "explanation": "Khmsin is fifty."
      }
    ],
    "build": {
      "english": "The bill, please.",
      "latin": "L-7sab, 3afak.",
      "arabic": "الحساب، عافاك."
    },
    "task": "Write a six-line restaurant exchange. Include an order, a missing utensil, a thank-you, and the bill."
  },
  {
    "id": "lesson-6",
    "unitId": "b6",
    "title": "Getting around",
    "words": "sir|سير|go (to a man);siri|سيري|go (to a woman);dur|دور|turn (to a man);duri|دوري|turn (to a woman)",
    "grammar": "Fin asks where a place is. A direction often combines a command and a direction word: sir nishan, go straight; dur l-limn, turn right. Add -i to these commands when addressing a woman: siri, duri. Mn b3d means afterwards and connects the steps. Learn directions as short sequences and repeat the important part to check understanding. The l before a direction is part of the useful phrase meaning toward/to.",
    "examples": [
      {
        "latin": "Sir nishan.",
        "arabic": "سير نيشان.",
        "english": "Go straight. (to a man)"
      },
      {
        "latin": "Duri l-lisr.",
        "arabic": "دوري لليسر.",
        "english": "Turn left. (to a woman)"
      },
      {
        "latin": "Wash qrib?",
        "arabic": "واش قريب؟",
        "english": "Is it near? (masculine referent)"
      }
    ],
    "mistake": "Limn is right and lisr is left. A single changed sound can send you the wrong way.",
    "reading": [
      {
        "latin": "Fin l-ma7atta?",
        "arabic": "فين المحطة؟",
        "english": "Where is the station?"
      },
      {
        "latin": "Sir nishan.",
        "arabic": "سير نيشان.",
        "english": "Go straight. (to a man)"
      },
      {
        "latin": "Mn b3d dur l-limn.",
        "arabic": "من بعد دور لليمن.",
        "english": "Then turn right."
      },
      {
        "latin": "Nishan, mn b3d l-limn. Shukran.",
        "arabic": "نيشان، من بعد ليمن. شكرا.",
        "english": "Straight, then right. Thank you."
      }
    ],
    "questions": [
      {
        "prompt": "Which turn is needed?",
        "options": [
          "Right",
          "Left",
          "No turn"
        ],
        "answer": 0,
        "explanation": "L-limn means to the right."
      },
      {
        "prompt": "Who is addressed with sir?",
        "options": [
          "A man",
          "A woman",
          "A group"
        ],
        "answer": 0,
        "explanation": "Siri would address a woman."
      }
    ],
    "build": {
      "english": "Go straight. (to a woman)",
      "latin": "Siri nishan.",
      "arabic": "سيري نيشان."
    },
    "task": "Give a two-step route to a man, then rewrite it for a woman. Repeat the route back as the listener."
  },
  {
    "id": "b6-town",
    "unitId": "b6",
    "title": "Places in town",
    "words": "ma7atta|محطة|station;suq|سوق|market;7anut|حانوت|small shop;farmasya|فارماسيا|pharmacy;sbitar|سبيطار|hospital;bank|بنك|bank;posta|بوسطة|post office;mdrasa|مدرسة|school;zenqa|زنقة|street;jnan|جنان|garden",
    "grammar": "Combine familiar question words with place names: fin l-bank? and fin l-farmasya? Use kayn or kayna when asking whether a place exists nearby. The article l- marks a specific or familiar place. In speech it may blend with the next consonant; our examples sometimes show that sound with doubled letters. You do not need to memorize every assimilation rule to ask a clear question. Recognize the place name and the location information first.",
    "examples": [
      {
        "latin": "Fin l-bank?",
        "arabic": "فين البنك؟",
        "english": "Where is the bank?"
      },
      {
        "latin": "Wash kayna farmasya hna?",
        "arabic": "واش كاينة فارماسيا هنا؟",
        "english": "Is there a pharmacy here?"
      },
      {
        "latin": "L-7anut qrib.",
        "arabic": "الحانوت قريب.",
        "english": "The shop is nearby."
      }
    ],
    "mistake": "Fin asks location; wash asks whether something is true. Fin l-bank? is not a yes/no question.",
    "reading": [
      {
        "latin": "Wash kayna farmasya hna?",
        "arabic": "واش كاينة فارماسيا هنا؟",
        "english": "Is there a pharmacy here?"
      },
      {
        "latin": "Ah, kayna.",
        "arabic": "آه، كاينة.",
        "english": "Yes, there is."
      },
      {
        "latin": "Fin?",
        "arabic": "فين؟",
        "english": "Where?"
      },
      {
        "latin": "7da l-bank.",
        "arabic": "حدا البنك.",
        "english": "Next to the bank."
      }
    ],
    "questions": [
      {
        "prompt": "Which place is the visitor looking for?",
        "options": [
          "Pharmacy",
          "Post office",
          "School"
        ],
        "answer": 0,
        "explanation": "Farmasya is the destination."
      },
      {
        "prompt": "What is it next to?",
        "options": [
          "The bank",
          "The school",
          "The station"
        ],
        "answer": 0,
        "explanation": "7da l-bank gives the landmark."
      }
    ],
    "build": {
      "english": "Where is the bank?",
      "latin": "Fin l-bank?",
      "arabic": "فين البنك؟"
    },
    "task": "Draw a street with four places. Ask where two of them are and answer using a nearby landmark."
  },
  {
    "id": "b6-location",
    "unitId": "b6",
    "title": "Here, there & next to",
    "words": "foq|فوق|above / on;t7t|تحت|under;7da|حدا|next to;qddam|قدام|in front of;mor|مور|behind;bin|بين|between;dakhl|داخل|inside;barra|برا|outside;temma|تما|there;blasa|بلاصة|place / seat",
    "grammar": "Location words relate one thing to another: l-ktab foq t-tbla, the book is on the table. Use 7da for next to, qddam for in front of, and mor for behind. Bin introduces two reference points joined by u: bin l-bank u l-posta. A statement about a known object does not need a present-tense is. Keep the object and reference point in the right order; reversing them changes the scene.",
    "examples": [
      {
        "latin": "L-ktab foq t-tbla.",
        "arabic": "الكتاب فوق الطبلة.",
        "english": "The book is on the table."
      },
      {
        "latin": "L-7anut 7da l-bank.",
        "arabic": "الحانوت حدا البنك.",
        "english": "The shop is next to the bank."
      },
      {
        "latin": "L-qhwa bin l-bank u l-posta.",
        "arabic": "القهوة بين البنك و البوسطة.",
        "english": "The café is between the bank and the post office."
      }
    ],
    "mistake": "The first noun is what you locate. L-ktab t7t t-tbla puts the book under the table, not the table under the book.",
    "reading": [
      {
        "latin": "Fin l-mefta7?",
        "arabic": "فين المفتاح؟",
        "english": "Where is the key?"
      },
      {
        "latin": "Foq t-tbla.",
        "arabic": "فوق الطبلة.",
        "english": "On the table."
      },
      {
        "latin": "W s-sak?",
        "arabic": "و الصاك؟",
        "english": "And the bag?"
      },
      {
        "latin": "T7t l-kursi.",
        "arabic": "تحت الكرسي.",
        "english": "Under the chair."
      }
    ],
    "questions": [
      {
        "prompt": "Where is the key?",
        "options": [
          "On the table",
          "Under the chair",
          "Outside"
        ],
        "answer": 0,
        "explanation": "Foq t-tbla answers the key question."
      },
      {
        "prompt": "Where is the bag?",
        "options": [
          "Under the chair",
          "On the table",
          "Behind the door"
        ],
        "answer": 0,
        "explanation": "T7t l-kursi means under the chair."
      }
    ],
    "build": {
      "english": "The book is on the table.",
      "latin": "L-ktab foq t-tbla.",
      "arabic": "الكتاب فوق الطبلة."
    },
    "task": "Describe three objects in a room, then describe a café between two landmarks. Check which object each sentence locates."
  },
  {
    "id": "b6-transport",
    "unitId": "b6",
    "title": "Getting there",
    "words": "taxi|طاكسي|taxi;tobis|طوبيس|bus;tran|طران|train;tomobil|طوموبيل|car;triq|طريق|road;billet|بيي|ticket;sayq|سايق|driver;nmshi|نمشي|I go (bare form);l|ل|to / for;mn b3d|من بعد|afterwards",
    "grammar": "Bghit nmshi l… means I want to go to…. The second verb is a bare form, without the habitual ka- prefix. The l marks the destination; b can mark transport: b t-tran, by train. Keep origin, destination, and transport separate: mn Fes l Rabat b t-tran. These prepositions are short, often attach in writing, and carry important meaning. Confirm your destination before discussing a fare or buying a ticket.",
    "examples": [
      {
        "latin": "Bghit nmshi l-ma7atta.",
        "arabic": "بغيت نمشي للمحطة.",
        "english": "I want to go to the station."
      },
      {
        "latin": "Mn Fes l Rabat.",
        "arabic": "من فاس للرباط.",
        "english": "From Fes to Rabat."
      },
      {
        "latin": "B t-tran.",
        "arabic": "بالطران.",
        "english": "By train."
      }
    ],
    "mistake": "After bghit, use nmshi here, not kanmshi. The first verb already sets up the request.",
    "reading": [
      {
        "latin": "Bghit nmshi l-ma7atta, 3afak.",
        "arabic": "بغيت نمشي للمحطة، عافاك.",
        "english": "I want to go to the station, please."
      },
      {
        "latin": "Wakha.",
        "arabic": "واخا.",
        "english": "Okay."
      },
      {
        "latin": "Bsh7al?",
        "arabic": "بشحال؟",
        "english": "How much?"
      },
      {
        "latin": "B 3shrin derhem.",
        "arabic": "بعشرين درهم.",
        "english": "Twenty dirhams."
      }
    ],
    "questions": [
      {
        "prompt": "Where does the passenger want to go?",
        "options": [
          "The station",
          "The market",
          "The hospital"
        ],
        "answer": 0,
        "explanation": "L-ma7atta names the destination."
      },
      {
        "prompt": "Which form follows bghit in this request?",
        "options": [
          "Nmshi",
          "Kanmshi",
          "Mshit"
        ],
        "answer": 0,
        "explanation": "Use the bare verb form nmshi after bghit."
      }
    ],
    "build": {
      "english": "I want to go to the station.",
      "latin": "Bghit nmshi l-ma7atta.",
      "arabic": "بغيت نمشي للمحطة."
    },
    "task": "Plan a short trip. State the starting point, destination, and transport, then write a taxi request and confirm a fare."
  },
  {
    "id": "lesson-7",
    "unitId": "b7",
    "title": "Your everyday routine",
    "words": "kanmshi|كنمشي|I go;kanji|كنجي|I come;kanrje3|كنرجع|I return;kanfter|كنفطر|I have breakfast",
    "grammar": "Many habitual present forms start with ka- plus a person marker. For I, n is part of the verb prefix: ka-n-qra becomes kanqra. You may hear different regional present markers; this course uses ka- consistently. Learn a few complete I forms before changing the subject. A time phrase tells when the habit happens: kanfiq f s-sbah. Use u to join actions, but keep each verb form complete.",
    "examples": [
      {
        "latin": "Kanfiq bekri.",
        "arabic": "كنفيق بكري.",
        "english": "I wake up early."
      },
      {
        "latin": "Kanshrb atay.",
        "arabic": "كنشرب أتاي.",
        "english": "I drink tea."
      },
      {
        "latin": "Kankhdem f s-sbah.",
        "arabic": "كنخدم فالصباح.",
        "english": "I work in the morning."
      }
    ],
    "mistake": "Kan- is not a separate English-style am. It is part of these present-tense verb forms.",
    "reading": [
      {
        "latin": "Kanfiq bekri.",
        "arabic": "كنفيق بكري.",
        "english": "I wake up early."
      },
      {
        "latin": "Kanfter u kanshrb atay.",
        "arabic": "كنفطر و كنشرب أتاي.",
        "english": "I have breakfast and drink tea."
      },
      {
        "latin": "Mn b3d kankhdem.",
        "arabic": "من بعد كنخدم.",
        "english": "Afterwards I work."
      },
      {
        "latin": "F l-lil kanqra.",
        "arabic": "فالليل كنقرا.",
        "english": "At night I read."
      }
    ],
    "questions": [
      {
        "prompt": "What does the speaker drink?",
        "options": [
          "Tea",
          "Coffee",
          "Juice"
        ],
        "answer": 0,
        "explanation": "Kanshrb atay names tea."
      },
      {
        "prompt": "When does the speaker read?",
        "options": [
          "At night",
          "Before breakfast",
          "At noon"
        ],
        "answer": 0,
        "explanation": "F l-lil specifies night."
      }
    ],
    "build": {
      "english": "I drink tea.",
      "latin": "Kanshrb atay.",
      "arabic": "كنشرب أتاي."
    },
    "task": "Write a four-sentence daily routine using I forms. Include two time phrases and mn b3d."
  },
  {
    "id": "b7-verb-people",
    "unitId": "b7",
    "title": "Change the person",
    "words": "katqra|كتقرا|you study (male) / she studies;katqray|كتقراي|you study (female);kayqra|كيقرا|he studies;kanqraw|كنقراو|we study;katqraw|كتقراو|you study (plural);kayqraw|كيقراو|they study;katkhdem|كتخدم|you work (male) / she works;kaykhdem|كيخدم|he works;katshrb|كتشرب|you drink (male) / she drinks;kayshrb|كيشرب|he drinks",
    "grammar": "The subject changes the present-tense verb. With qra: ana kanqra, nta katqra, nti katqray, huwa kayqra, hiya katqra, 7na kanqraw, ntuma katqraw, huma kayqraw. Notice that nta and hiya share katqra; the pronoun or context disambiguates them. Plural forms end in -w here. Practice one verb across people before moving to another, because other verbs may change their stem or endings differently.",
    "examples": [
      {
        "latin": "Hiya katqra.",
        "arabic": "هي كتقرا.",
        "english": "She studies."
      },
      {
        "latin": "Huwa kayqra.",
        "arabic": "هو كيقرا.",
        "english": "He studies."
      },
      {
        "latin": "7na kanqraw.",
        "arabic": "حنا كنقراو.",
        "english": "We study."
      }
    ],
    "mistake": "7na needs kanqraw, not kanqra. The final -w distinguishes we from I for this verb.",
    "reading": [
      {
        "latin": "Ana kanqra f d-dar.",
        "arabic": "أنا كنقرا فالدار.",
        "english": "I study at home."
      },
      {
        "latin": "Hiya katqra f l-mdrasa.",
        "arabic": "هي كتقرا فالمدرسة.",
        "english": "She studies at school."
      },
      {
        "latin": "Huwa kaykhdem f Rabat.",
        "arabic": "هو كيخدم فالرباط.",
        "english": "He works in Rabat."
      },
      {
        "latin": "7na kanqraw d-darija.",
        "arabic": "حنا كنقراو الدارجة.",
        "english": "We study Darija."
      }
    ],
    "questions": [
      {
        "prompt": "Where does she study?",
        "options": [
          "At school",
          "In Rabat",
          "At the café"
        ],
        "answer": 0,
        "explanation": "Hiya katqra f l-mdrasa gives her location."
      },
      {
        "prompt": "Which form matches 7na?",
        "options": [
          "Kanqraw",
          "Kayqra",
          "Katqray"
        ],
        "answer": 0,
        "explanation": "7na is we; kanqraw is we study."
      }
    ],
    "build": {
      "english": "We study Darija.",
      "latin": "7na kanqraw d-darija.",
      "arabic": "حنا كنقراو الدارجة."
    },
    "task": "Write four sentences about the same activity with I, she, he, and we. Underline the part of each verb that changes."
  },
  {
    "id": "b7-schedule",
    "unitId": "b7",
    "title": "Connect your day",
    "words": "qbel|قبل|before;mlli|ملي|when;dima|ديما|always;merra merra|مرة مرة|sometimes;kol nhar|كل نهار|every day;nhar|نهار|day;simana|سيمانة|week;3otla|عطلة|holiday / time off;khedma|خدمة|work;weqt|وقت|time",
    "grammar": "Connect a routine with time expressions instead of listing unrelated verbs. Qbel means before, mn b3d means afterwards, and mlli introduces when. Frequency phrases such as kol nhar or merra merra tell how often. Place them where the timing is clear: merra merra kanmshi l-suq. When two clauses have different subjects, include the pronoun if the verb alone could be ambiguous. Begin with short sentences and combine only when the relationship is clear.",
    "examples": [
      {
        "latin": "Kol nhar kanqra.",
        "arabic": "كل نهار كنقرا.",
        "english": "I study every day."
      },
      {
        "latin": "Merra merra kanmshi l-suq.",
        "arabic": "مرة مرة كنمشي للسوق.",
        "english": "Sometimes I go to the market."
      },
      {
        "latin": "Qbel l-khedma kanshrb atay.",
        "arabic": "قبل الخدمة كنشرب أتاي.",
        "english": "Before work I drink tea."
      }
    ],
    "mistake": "Kol nhar means every day. It does not mean all day; avoid using it for duration.",
    "reading": [
      {
        "latin": "Kol nhar kanfiq bekri.",
        "arabic": "كل نهار كنفيق بكري.",
        "english": "Every day I wake up early."
      },
      {
        "latin": "Qbel l-khedma kanfter.",
        "arabic": "قبل الخدمة كنفطر.",
        "english": "Before work I have breakfast."
      },
      {
        "latin": "Mn b3d kanmshi l-khedma.",
        "arabic": "من بعد كنمشي للخدمة.",
        "english": "Afterwards I go to work."
      },
      {
        "latin": "Merra merra kanqra f l-qhwa.",
        "arabic": "مرة مرة كنقرا فالقهوة.",
        "english": "Sometimes I read at the café."
      }
    ],
    "questions": [
      {
        "prompt": "What happens before work?",
        "options": [
          "Breakfast",
          "Reading at the café every day",
          "Going to the market"
        ],
        "answer": 0,
        "explanation": "Qbel l-khedma kanfter gives the sequence."
      },
      {
        "prompt": "How often does the speaker read at the café?",
        "options": [
          "Sometimes",
          "Always",
          "Never"
        ],
        "answer": 0,
        "explanation": "Merra merra means sometimes."
      }
    ],
    "build": {
      "english": "I study every day.",
      "latin": "Kol nhar kanqra.",
      "arabic": "كل نهار كنقرا."
    },
    "task": "Write a weekday routine and a day-off routine. Use before, afterwards, every day, and sometimes at least once."
  },
  {
    "id": "b7-negative",
    "unitId": "b7",
    "title": "What you do not do",
    "words": "ma…sh|ما…ش|verbal negative frame;makanshrbsh|ماكنشربش|I do not drink;makankhdemsh|ماكنخدمش|I do not work;makanqrash|ماكنقراش|I do not study / read;makanmshish|ماكنمشيش|I do not go;walakin|ولكن|but;7it|حيت|because;mashi|ماشي|not (nonverbal);3yyan|عيان|tired / unwell (male);3yyana|عيانة|tired / unwell (female)",
    "grammar": "A common negative wraps a verb with ma- and -sh: kanshrb becomes ma-kanshrb-sh. We usually join the pieces in our house spelling, but separated writing is also common. The habitual ka- remains inside this present-tense negative. Mashi is useful with many nonverbal descriptions: ana mashi 3yyan. Do not replace every negative with mashi. Learn the difference between denying an action and denying a description.",
    "examples": [
      {
        "latin": "Makanshrbsh qhwa.",
        "arabic": "ماكنشربش قهوة.",
        "english": "I do not drink coffee."
      },
      {
        "latin": "Makankhdemsh nhar l-7edd.",
        "arabic": "ماكنخدمش نهار الحد.",
        "english": "I do not work on Sunday."
      },
      {
        "latin": "Ana mashi 3yyan.",
        "arabic": "أنا ماشي عيان.",
        "english": "I am not tired. (male)"
      }
    ],
    "mistake": "Keep both parts of the frame: ma-kanshrb-sh. Using only ma is not the pattern taught here.",
    "reading": [
      {
        "latin": "Wash katshrb qhwa?",
        "arabic": "واش كتشرب قهوة؟",
        "english": "Do you drink coffee? (to a man)"
      },
      {
        "latin": "La, makanshrbsh qhwa.",
        "arabic": "لا، ماكنشربش قهوة.",
        "english": "No, I do not drink coffee."
      },
      {
        "latin": "Walakin kanshrb atay.",
        "arabic": "ولكن كنشرب أتاي.",
        "english": "But I drink tea."
      },
      {
        "latin": "Wakha, atay bla skkar.",
        "arabic": "واخا، أتاي بلا سكر.",
        "english": "Okay, tea without sugar."
      }
    ],
    "questions": [
      {
        "prompt": "What does the speaker not drink?",
        "options": [
          "Coffee",
          "Tea",
          "Water"
        ],
        "answer": 0,
        "explanation": "Makanshrbsh qhwa denies drinking coffee."
      },
      {
        "prompt": "What connects the contrasting statements?",
        "options": [
          "Walakin",
          "Qbel",
          "Fin"
        ],
        "answer": 0,
        "explanation": "Walakin means but."
      }
    ],
    "build": {
      "english": "I do not drink coffee.",
      "latin": "Makanshrbsh qhwa.",
      "arabic": "ماكنشربش قهوة."
    },
    "task": "Write three true habits and their negative counterparts. Add one contrasting pair joined with walakin."
  },
  {
    "id": "lesson-8",
    "unitId": "b8",
    "title": "Needs & simple negatives",
    "words": "3ndk|عندك|you have;3ndu|عندو|he has;3ndha|عندها|she has;khasni|خاصني|I need",
    "grammar": "3ndi expresses possession: I have. The ending changes with the possessor: 3ndk, you have; 3ndu, he has; 3ndha, she has. The negative ma3ndish means I do not have. It surrounds 3ndi with the familiar ma-…-sh frame. Khasni means I need and helps you explain what is missing. Keep needs, wants, and possession distinct: 3ndi describes what you have, bghit what you want, and khasni what you need.",
    "examples": [
      {
        "latin": "3ndi l-weqt.",
        "arabic": "عندي الوقت.",
        "english": "I have time."
      },
      {
        "latin": "Ma3ndish l-mefta7.",
        "arabic": "ماعنديش المفتاح.",
        "english": "I do not have the key."
      },
      {
        "latin": "Khasni l-ma.",
        "arabic": "خاصني الما.",
        "english": "I need water."
      }
    ],
    "mistake": "3ndi is possession, not identity. Say ana talib for I am a student, not 3ndi talib.",
    "reading": [
      {
        "latin": "Wash 3ndk l-mefta7?",
        "arabic": "واش عندك المفتاح؟",
        "english": "Do you have the key?"
      },
      {
        "latin": "La, ma3ndish l-mefta7.",
        "arabic": "لا، ماعنديش المفتاح.",
        "english": "No, I do not have the key."
      },
      {
        "latin": "Lina 3ndha l-mefta7.",
        "arabic": "لينا عندها المفتاح.",
        "english": "Lina has the key."
      },
      {
        "latin": "Wakha, shukran.",
        "arabic": "واخا، شكرا.",
        "english": "Okay, thank you."
      }
    ],
    "questions": [
      {
        "prompt": "Who has the key?",
        "options": [
          "Lina",
          "The second speaker",
          "Nobody"
        ],
        "answer": 0,
        "explanation": "Lina 3ndha l-mefta7 identifies the owner."
      },
      {
        "prompt": "Which phrase expresses a need?",
        "options": [
          "Khasni",
          "3ndi",
          "Ana"
        ],
        "answer": 0,
        "explanation": "Khasni means I need."
      }
    ],
    "build": {
      "english": "I do not have the key.",
      "latin": "Ma3ndish l-mefta7.",
      "arabic": "ماعنديش المفتاح."
    },
    "task": "Describe two things you have, one thing you do not have, and one thing you need. Use a repair phrase if your partner does not understand."
  },
  {
    "id": "b8-yesterday",
    "unitId": "b8",
    "title": "A small story about yesterday",
    "words": "mshit|مشيت|I went;rj3t|رجعت|I returned;shrit|شريت|I bought;shft|شفت|I saw;klit|كليت|I ate;shrbt|شربت|I drank;qrit|قريت|I read / studied;khdemt|خدمت|I worked;fhemt|فهمت|I understood;drt|درت|I did / made",
    "grammar": "For a first past-tense story, learn common I forms as whole words. Mshit is I went; shrit is I bought; klit is I ate. Many I past forms end in -t, but their stems differ, so do not create them by simply removing ka- from the present form. Set the time with lbar7, then connect events with u or mn b3d. Later you will study how past forms change for other people. Here the goal is a clear short first-person account.",
    "examples": [
      {
        "latin": "Lbar7 mshit l-suq.",
        "arabic": "البارح مشيت للسوق.",
        "english": "Yesterday I went to the market."
      },
      {
        "latin": "Shrit khobz.",
        "arabic": "شريت خبز.",
        "english": "I bought bread."
      },
      {
        "latin": "Mn b3d rj3t l-dar.",
        "arabic": "من بعد رجعت للدار.",
        "english": "Afterwards I returned home."
      }
    ],
    "mistake": "Present kanmshi and past mshit are different forms. A word like lbar7 does not by itself turn a present form into the past.",
    "reading": [
      {
        "latin": "Lbar7 mshit l-suq.",
        "arabic": "البارح مشيت للسوق.",
        "english": "Yesterday I went to the market."
      },
      {
        "latin": "Shrit khobz u khodra.",
        "arabic": "شريت خبز و خضرة.",
        "english": "I bought bread and vegetables."
      },
      {
        "latin": "Mn b3d rj3t l-dar.",
        "arabic": "من بعد رجعت للدار.",
        "english": "Afterwards I returned home."
      },
      {
        "latin": "Klit u qrit shwiya.",
        "arabic": "كليت و قريت شوية.",
        "english": "I ate and read a little."
      }
    ],
    "questions": [
      {
        "prompt": "Where did the speaker go?",
        "options": [
          "The market",
          "The station",
          "The school"
        ],
        "answer": 0,
        "explanation": "Mshit l-suq gives the destination."
      },
      {
        "prompt": "What happened after shopping?",
        "options": [
          "Returning home",
          "Going to work",
          "Taking a train"
        ],
        "answer": 0,
        "explanation": "Mn b3d rj3t l-dar marks the next event."
      }
    ],
    "build": {
      "english": "Yesterday I went to the market.",
      "latin": "Lbar7 mshit l-suq.",
      "arabic": "البارح مشيت للسوق."
    },
    "task": "Write four events from an imaginary yesterday. Use at least three different past forms and one sequence marker."
  },
  {
    "id": "b8-tomorrow",
    "unitId": "b8",
    "title": "A plan for tomorrow",
    "words": "ghadi|غادي|going to (future marker);nji|نجي|I come (bare form);nqra|نقرا|I study (bare form);nkhdem|نخدم|I work (bare form);nshri|نشري|I buy (bare form);nakul|ناكل|I eat (bare form);nshrb|نشرب|I drink (bare form);ntlaqaw|نتلاقاو|we meet (bare form);foqash|فوقاش|when;m3a|مع|with",
    "grammar": "Ghadi plus a bare verb gives a useful future pattern: ghadi nmshi, I am going to go. Leave out habitual ka- after ghadi: ghadi nqra, not ghadi kanqra. The bare form still identifies the person. Ghadi ntlaqaw means we will meet, not I will meet. To make a useful plan, combine the action with a day, time, and place. Keep each detail explicit and repeat the plan back to confirm it.",
    "examples": [
      {
        "latin": "Ghdda ghadi nqra.",
        "arabic": "غدا غادي نقرا.",
        "english": "Tomorrow I will study."
      },
      {
        "latin": "Ghadi nmshi m3a Lina.",
        "arabic": "غادي نمشي مع لينا.",
        "english": "I will go with Lina."
      },
      {
        "latin": "Foqash ghadi ntlaqaw?",
        "arabic": "فوقاش غادي نتلاقاو؟",
        "english": "When will we meet?"
      }
    ],
    "mistake": "Do not keep ka- after ghadi in this pattern. Use ghadi nkhdem, not ghadi kankhdem.",
    "reading": [
      {
        "latin": "Foqash ghadi ntlaqaw?",
        "arabic": "فوقاش غادي نتلاقاو؟",
        "english": "When will we meet?"
      },
      {
        "latin": "Ghdda f tlata.",
        "arabic": "غدا فالثلاثة.",
        "english": "Tomorrow at three."
      },
      {
        "latin": "Fin?",
        "arabic": "فين؟",
        "english": "Where?"
      },
      {
        "latin": "F l-qhwa, 7da l-bank.",
        "arabic": "فالقهوة، حدا البنك.",
        "english": "At the café, next to the bank."
      }
    ],
    "questions": [
      {
        "prompt": "When is the meeting?",
        "options": [
          "Tomorrow at three",
          "Today at three",
          "Tomorrow at two"
        ],
        "answer": 0,
        "explanation": "Ghdda f tlata supplies day and time."
      },
      {
        "prompt": "Where is the café?",
        "options": [
          "Next to the bank",
          "Inside the station",
          "Behind the school"
        ],
        "answer": 0,
        "explanation": "7da l-bank gives the landmark."
      }
    ],
    "build": {
      "english": "Tomorrow I will study.",
      "latin": "Ghdda ghadi nqra.",
      "arabic": "غدا غادي نقرا."
    },
    "task": "Arrange a meeting with a day, time, and place. Then write one different personal plan using ghadi plus a bare verb."
  },
  {
    "id": "b8-connected",
    "unitId": "b8",
    "title": "Your first connected conversation",
    "words": "iwa|إيوا|well / so;men b3d|من بعد|afterwards;7tta|حتى|also / even;kolshi|كلشي|everything;shi 7aja|شي حاجة|something;wa7d shwiya|واحد شوية|a little while;3lash|علاش|why;7it|حيت|because;mazal|مازال|still;inshallah|إن شاء الله|God willing",
    "grammar": "A connected conversation moves between familiar functions: greeting, introducing, asking, explaining, and arranging. Use 7it to give a reason and walakin to contrast ideas. 3lash asks why. Iwa can help move a conversation along, but is not needed at the start of every sentence. Inshallah is a common social expression; it does not always guarantee a firm commitment. For a concrete plan, confirm day, time, and place instead of relying on one expression alone.",
    "examples": [
      {
        "latin": "Kanta3llem 7it kanbghi d-darija.",
        "arabic": "كنتعلم حيت كنبغي الدارجة.",
        "english": "I am learning because I like Darija."
      },
      {
        "latin": "Bghit nmshi, walakin ma3ndish l-weqt.",
        "arabic": "بغيت نمشي، ولكن ماعنديش الوقت.",
        "english": "I want to go, but I do not have time."
      },
      {
        "latin": "Mazal kanqra.",
        "arabic": "مازال كنقرا.",
        "english": "I am still studying."
      }
    ],
    "mistake": "7it answers why; walakin introduces contrast. Choose the connector that matches the relationship between your ideas.",
    "reading": [
      {
        "latin": "Salam! Labas?",
        "arabic": "سلام! لاباس؟",
        "english": "Hello! How are you?"
      },
      {
        "latin": "Labas. Lbar7 mshit l-suq.",
        "arabic": "لاباس. البارح مشيت للسوق.",
        "english": "Fine. Yesterday I went to the market."
      },
      {
        "latin": "Ghdda ghadi nqra d-darija.",
        "arabic": "غدا غادي نقرا الدارجة.",
        "english": "Tomorrow I will study Darija."
      },
      {
        "latin": "Mzyan! Ana 7tta ana kanta3llem.",
        "arabic": "مزيان! أنا حتى أنا كنتعلم.",
        "english": "Good! I am learning too."
      }
    ],
    "questions": [
      {
        "prompt": "What happened yesterday?",
        "options": [
          "A trip to the market",
          "Studying tomorrow",
          "Buying a ticket"
        ],
        "answer": 0,
        "explanation": "Lbar7 mshit l-suq is the past event."
      },
      {
        "prompt": "What does the last speaker share?",
        "options": [
          "They are learning too",
          "They have stopped learning",
          "They are from Fes"
        ],
        "answer": 0,
        "explanation": "7tta ana means me too in this context."
      }
    ],
    "build": {
      "english": "I am still studying.",
      "latin": "Mazal kanqra.",
      "arabic": "مازال كنقرا."
    },
    "task": "Write 60–80 words introducing yourself, describing one daily habit, telling one past event, and making a future plan. Speak for one minute using notes, then self-check tense, connectors, and clarity."
  }
];
