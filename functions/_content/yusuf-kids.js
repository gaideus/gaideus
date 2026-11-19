// Surah Yusuf, for learners aged 15 and under: 15 chapters.
// Based on "Lessons from Surah Yusuf" by Dr Yasir Qadhi (Kube Publishing), retold in our own words.
// Compiled from the earlier 34 short lessons; "remap" carries old progress over to the new chapters.
// Lives under functions/ so it is never served as a static file: only /api/content hands it out.

import { ayat, SOURCE } from "./yusuf-verses.js";

const LESSONS = [
 {
  "id": 1,
  "verses": [
   1,
   6
  ],
  "title": "The Best of Stories",
  "short": "A clear Book, and Yusuf’s special dream",
  "big": "Allah calls the story of Yusuf “the best of stories”. It begins when young Yusuf, about seven years old, dreams that eleven stars, the sun and the moon bow down to him. His father Ya‘qub knows it is a special dream, and tells him to keep it secret from his brothers.",
  "remember": [
   "The surah starts with three letters: Alif, Lam, Ra. Only Allah knows their full meaning.",
   "The Qur’an is a clear Book, sent down in Arabic so that we may understand.",
   "The word for story, qissah, means following footprints in the sand.",
   "Yusuf was the son of Ya‘qub, son of Ishaq, son of Ibrahim: four prophets in one family.",
   "The dream: eleven stars, the sun and the moon bowing down to Yusuf.",
   "Ya‘qub said: do not tell your brothers, or they may plot against you."
  ],
  "more": [
   {
    "t": "Letters and a clear Book",
    "p": "Some surahs start with letters that do not make a word, like Alif, Lam, Ra. Straight after them, Allah usually praises the Qur’an. The Qur’an is made of the same letters the Arabs used every day, yet nobody could ever make anything like it."
   },
   {
    "t": "Walking in their footsteps",
    "p": "Long ago, desert trackers followed footprints in the sand. The word qissah, story, comes from that. When we listen to the story of Yusuf, it is as if we walk in his footsteps and learn from every step. Its big lesson: evil never wins in the end."
   },
   {
    "t": "How did the Prophet ﷺ know?",
    "p": "Allah says the Prophet ﷺ did not know this story before. He lived in Makkah and had no books about it. Only Allah could have told him: that is one of the signs that he was a true prophet."
   },
   {
    "t": "Three kinds of dreams",
    "l": [
     "True dreams that come from Allah. A prophet’s dream is a message from Allah.",
     "Bad dreams that come from Shaytan.",
     "Dreams that come from our own thoughts."
    ]
   },
   {
    "t": "Keep it safe",
    "p": "The Prophet ﷺ said a dream is like a bird flying, so we should only tell it to someone who cares about us. Ya‘qub knew the brothers might become jealous. He did not call his sons bad. He said Shaytan is the enemy. And he did not feel jealous himself, even though the dream meant Yusuf would become greater than him."
   },
   {
    "t": "Jealousy is like fire",
    "p": "The Prophet ﷺ said jealousy eats up good deeds the way fire eats wood. So we should not show off what we have, and when someone else has a blessing, we can say “ma sha’ Allah” and be happy for them."
   }
  ],
  "home": "Tell someone at home: “Allah calls the story of Yusuf the best of stories.” Then, the next time a friend gets something nice, say “ma sha’ Allah” and be happy for them.",
  "game": {
   "type": "match",
   "title": "Who or what is it?",
   "help": "Tap a word on the left, then what it means on the right.",
   "pairs": [
    [
     "Alif, Lam, Ra",
     "Letters only Allah fully understands"
    ],
    [
     "Qissah",
     "A story, like following footprints"
    ],
    [
     "Ya‘qub",
     "Yusuf’s father, a prophet"
    ],
    [
     "The eleven stars",
     "Yusuf’s brothers"
    ],
    [
     "The sun and the moon",
     "Yusuf’s parents"
    ],
    [
     "Shaytan",
     "A clear enemy to people"
    ]
   ]
  },
  "quiz": [
   {
    "q": "What does Allah call the story of Yusuf?",
    "o": [
     "A short story",
     "The best of stories",
     "An old legend"
    ],
    "a": 1,
    "w": "Allah calls it the best of stories."
   },
   {
    "q": "What does the word qissah (story) come from?",
    "o": [
     "Following footprints in the sand",
     "Writing on paper",
     "Singing a song"
    ],
    "a": 0,
    "w": "Listening to a story is like walking in someone’s footsteps."
   },
   {
    "q": "In what language did Allah send down the Qur’an?",
    "o": [
     "Greek",
     "Persian",
     "Arabic"
    ],
    "a": 2,
    "w": "An Arabic Qur’an, so that we may understand."
   },
   {
    "q": "In the dream, who were the eleven stars?",
    "o": [
     "Yusuf’s brothers",
     "Kings of Egypt",
     "Angels"
    ],
    "a": 0,
    "w": "The stars were his brothers; the sun and moon were his parents."
   },
   {
    "q": "Why did Ya‘qub tell Yusuf to keep the dream secret?",
    "o": [
     "It was a bad dream",
     "The brothers might become jealous and plot",
     "Dreams are always silly"
    ],
    "a": 1,
    "w": "He wanted to protect Yusuf and keep the family at peace."
   },
   {
    "q": "What does jealousy do to good deeds?",
    "o": [
     "Makes them bigger",
     "Eats them up, like fire eats wood",
     "Nothing at all"
    ],
    "a": 1,
    "w": "So we say “ma sha’ Allah” instead."
   }
  ]
 },
 {
  "id": 2,
  "verses": [
   7,
   14
  ],
  "title": "The Brothers’ Plan",
  "short": "Jealousy leads to a terrible idea",
  "big": "Allah says this story has lessons for anyone who asks. Yusuf’s ten older brothers became jealous: they thought their father loved Yusuf and little Binyamin more than them. Jealousy stopped them thinking clearly, and they made a terrible plan to get rid of Yusuf.",
  "remember": [
   "The story has lessons for everyone who asks about it.",
   "The brothers said: our father loves Yusuf and his brother more, even though we are a big group.",
   "Parents must be fair with gifts, but nobody can control how much love is in the heart.",
   "They said: “We will be good people afterwards.” This is a trick of Shaytan.",
   "One brother said: do not kill him; put him at the bottom of a well.",
   "Ya‘qub said: I fear a wolf may eat him."
  ],
  "more": [
   {
    "t": "Fair with gifts",
    "p": "A man once wanted the Prophet ﷺ to be a witness to a gift he gave one of his sons. The Prophet ﷺ asked: “Have you given all your children the same?” Parents must be fair with what they give. The brothers could only say their father loved Yusuf more, not that he gave him more."
   },
   {
    "t": "Shaytan’s trick",
    "p": "Shaytan says: “Do the wrong thing now, and be good later.” But one wrong leads to another. After hurting Yusuf, the brothers had to lie, and then swear that the lie was true."
   },
   {
    "t": "A good wish, a wrong way",
    "p": "The brothers wanted their father’s love. That is a good thing to want! But they chose a haram way to get it, and it went wrong. Their father’s heart broke, and he missed Yusuf even more. Doing wrong never brings what we really want."
   },
   {
    "t": "Playing is good",
    "p": "The brothers asked: “Send Yusuf with us tomorrow to have fun and play.” Playing is allowed in Islam. The Prophet ﷺ raced his wife ‘A’ishah and played with his grandsons al-Hasan and al-Husayn. But wasting all our time is not good."
   },
   {
    "t": "A father’s heart",
    "p": "The brothers tried hard to persuade Ya‘qub: “Why don’t you trust us? We will look after him!” But Ya‘qub’s heart told him something was wrong. He said it would make him sad, and that he feared a wolf. In the end, he let Yusuf go."
   }
  ],
  "home": "The next time you feel jealous of a brother, sister or friend, make a du‘a for them and give them salam. The Prophet ﷺ taught us that spreading salam makes love grow.",
  "game": {
   "type": "sort",
   "title": "Ya‘qub’s way or the brothers’ way?",
   "help": "Who did each thing: Ya‘qub, or the jealous brothers?",
   "buckets": [
    "Ya‘qub’s way",
    "The brothers’ way"
   ],
   "items": [
    [
     "Keeping peace in the family",
     0
    ],
    [
     "Feeling jealous of Yusuf",
     1
    ],
    [
     "Blaming Shaytan, not his sons",
     0
    ],
    [
     "“Do wrong now, be good later”",
     1
    ],
    [
     "Listening to what his heart felt",
     0
    ],
    [
     "Making a plan to hurt Yusuf",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why were the brothers jealous?",
    "o": [
     "Yusuf had more money",
     "They thought their father loved Yusuf and Binyamin more",
     "Yusuf was taller than them"
    ],
    "a": 1,
    "w": "They thought their father loved Yusuf and his brother more."
   },
   {
    "q": "What must parents be fair with?",
    "o": [
     "The gifts they give",
     "How tall their children are",
     "Their children’s names"
    ],
    "a": 0,
    "w": "Gifts must be fair; love is in the heart."
   },
   {
    "q": "What is Shaytan’s trick in this story?",
    "o": [
     "“Do wrong now, be good later”",
     "“Always tell the truth”",
     "“Pray on time”"
    ],
    "a": 0,
    "w": "One wrong leads to another."
   },
   {
    "q": "What did one brother suggest instead of killing Yusuf?",
    "o": [
     "Sending him to school",
     "Putting him in a well",
     "Selling his toys"
    ],
    "a": 1,
    "w": "He said: put him at the bottom of a well."
   },
   {
    "q": "Is playing allowed in Islam?",
    "o": [
     "No, never",
     "Yes, the Prophet ﷺ raced and played too",
     "Only on Fridays"
    ],
    "a": 1,
    "w": "Play is fine, but not wasting all our time."
   },
   {
    "q": "What did Ya‘qub say he was afraid of?",
    "o": [
     "A lion",
     "A storm",
     "A wolf"
    ],
    "a": 2,
    "w": "He feared a wolf might eat Yusuf."
   }
  ]
 },
 {
  "id": 3,
  "verses": [
   15,
   22
  ],
  "title": "Into the Well, Sold in Egypt",
  "short": "Beautiful patience and Allah’s plan",
  "big": "The brothers threw Yusuf into a dark well, but Allah filled his heart with calm. They came home at night with fake tears and a shirt with false blood, and Ya‘qub answered with beautiful patience. Travellers found Yusuf and sold him in Egypt, where an important man took him into his home: all part of Allah’s plan.",
  "remember": [
   "In the well, Allah told Yusuf: one day you will remind them of what they did.",
   "The brothers came home in the evening, crying fake tears.",
   "Ya‘qub said: “Beautiful patience. Allah is the One whose help I seek.”",
   "A caravan stopped at the well, and the water-drawer found Yusuf in his bucket.",
   "They sold him for a few silver coins.",
   "When Yusuf grew up, Allah gave him wisdom and knowledge: Allah rewards those who do good."
  ],
  "more": [
   {
    "t": "Not alone in the dark",
    "p": "Allah put calm into Yusuf’s scared heart. His message promised three things: Yusuf would not die in the well, he would see his family again, and one day he would be the stronger one. Knowing a happy ending is coming makes hard times easier. Our happy ending is Jannah."
   },
   {
    "t": "Forgive and don’t remind",
    "p": "Allah never calls the brothers bad names in the surah. They said sorry later, and Allah forgave them. When we forgive someone, we should not keep reminding them of their mistake, or tell everyone about it."
   },
   {
    "t": "Tears do not prove the truth",
    "p": "A famous judge called Shurayh once stayed calm while a woman cried loudly in front of him. His students were surprised. He said: the brothers of Yusuf cried too, and they were the ones who had done wrong. We judge by facts, not by tears."
   },
   {
    "t": "Beautiful patience",
    "p": "The blood on Yusuf’s shirt was fake, and Ya‘qub knew it. He did not shout. He said he would have beautiful patience: not complaining to people, and taking his sadness to Allah. Then he said “wa-llahu al-musta‘an”: Allah is the One whose help I seek."
   },
   {
    "t": "From a well to a great house",
    "p": "The travellers sold Yusuf cheaply because he had cost them nothing. People often do not value what they get for free. But Allah had a plan: instead of a cruel master, Yusuf went to the home of al-‘Aziz, an important minister, who told his wife: take good care of him."
   }
  ],
  "home": "Learn the words Ya‘qub said: “wa-llahu al-musta‘an”, which means Allah is the One whose help I seek. Say them the next time something feels too hard.",
  "game": {
   "type": "order",
   "title": "Yusuf’s journey",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The brothers put Yusuf in the well",
    "Allah fills Yusuf’s heart with calm",
    "The brothers come home crying fake tears",
    "Ya‘qub says: beautiful patience",
    "A caravan stops for water",
    "Yusuf is sold for a few silver coins",
    "Al-‘Aziz takes him into his home"
   ]
  },
  "quiz": [
   {
    "q": "What did Allah put in Yusuf’s heart in the well?",
    "o": [
     "Anger",
     "Calm",
     "Fear"
    ],
    "a": 1,
    "w": "Allah gave him calm and a promise."
   },
   {
    "q": "When did the brothers come home to their father?",
    "o": [
     "In the evening",
     "At breakfast",
     "The next week"
    ],
    "a": 0,
    "w": "They came at night, crying fake tears."
   },
   {
    "q": "What did the judge Shurayh learn from this story?",
    "o": [
     "Crying always means you are telling the truth",
     "Judge by facts, not by tears",
     "Never listen to anyone"
    ],
    "a": 1,
    "w": "The brothers cried too, and they had done wrong."
   },
   {
    "q": "What is “beautiful patience”?",
    "o": [
     "Never feeling sad",
     "Not complaining to people, and taking your sadness to Allah",
     "Shouting until you feel better"
    ],
    "a": 1,
    "w": "That is what Ya‘qub did."
   },
   {
    "q": "How did the water-drawer find Yusuf?",
    "o": [
     "In his bucket",
     "Behind a tree",
     "In a tent"
    ],
    "a": 0,
    "w": "He let down his bucket and found a boy!"
   },
   {
    "q": "What did Allah give Yusuf when he grew up?",
    "o": [
     "Gold and silver",
     "Wisdom and knowledge",
     "A big army"
    ],
    "a": 1,
    "w": "Allah rewards those who do good."
   }
  ]
 },
 {
  "id": 4,
  "verses": [
   23,
   29
  ],
  "title": "Allah Is My Refuge",
  "short": "Yusuf says no to wrong, and the torn shirt",
  "big": "Yusuf grew up in the house of al-‘Aziz. One day the lady of the house locked the doors and asked him to do something very wrong. Yusuf said at once: “Allah is my refuge!” He ran to the door, she tore his shirt from behind, and the torn shirt showed that Yusuf was telling the truth.",
  "remember": [
   "Allah gave Yusuf half of all beauty.",
   "When the lady asked him to do wrong, he said: “Allah is my refuge!”",
   "Yusuf remembered that Allah was watching him, and that kept him safe.",
   "She tore his shirt from the back as he ran to the door.",
   "She blamed Yusuf, but a man from her own family said: look at the shirt.",
   "The shirt was torn from the back, so Yusuf was telling the truth."
  ],
  "more": [
   {
    "t": "A very hard test",
    "p": "Yusuf was a young man living as a servant in the lady’s house. She was rich and powerful, and she kept asking him to do something Allah does not allow. One day she locked all the doors. It was a very hard test."
   },
   {
    "t": "Run to Allah",
    "p": "Yusuf did not try to be strong on his own. Straight away he said: “Ma‘adha-llah”, Allah is my refuge. When Shaytan whispers to us to do wrong, we should do the same: turn to Allah at once."
   },
   {
    "t": "Allah is watching",
    "p": "Allah showed Yusuf a sign. Many scholars say it was his strong feeling that Allah was watching him. When we remember that Allah sees us, it is much easier to stay away from wrong. Allah calls Yusuf one of His sincere, chosen servants."
   },
   {
    "t": "Don’t blame others",
    "p": "When her husband appeared, the lady quickly blamed Yusuf. Blaming someone else for your own mistake is a very bad thing. It is what Iblis did when he said it was Allah’s fault that he went wrong. When we make a mistake, we should own it and say sorry."
   },
   {
    "t": "Look at the clues",
    "p": "A man from the lady’s family gave a clever test. If the shirt was torn at the front, she was telling the truth. If it was torn at the back, Yusuf was running away and she was pulling him. It was torn at the back! We should look at the facts before deciding who is right."
   }
  ],
  "home": "Learn to say “Ma‘adha-llah” (Allah is my refuge). The next time you want to do something you know is wrong, say it and remember that Allah is watching.",
  "game": {
   "type": "order",
   "title": "What happened in the house?",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The lady locks the doors",
    "Yusuf says: “Allah is my refuge!”",
    "They both run to the door",
    "She tears his shirt from the back",
    "Her husband is at the door",
    "She blames Yusuf",
    "A man from her family looks at the shirt"
   ]
  },
  "quiz": [
   {
    "q": "What did Yusuf say when the lady asked him to do wrong?",
    "o": [
     "“Maybe later”",
     "“Allah is my refuge!”",
     "“Nobody will know”"
    ],
    "a": 1,
    "w": "He turned to Allah straight away."
   },
   {
    "q": "What kept Yusuf safe from doing wrong?",
    "o": [
     "Remembering that Allah was watching",
     "A locked door",
     "His brothers"
    ],
    "a": 0,
    "w": "Many scholars say that was the sign he saw."
   },
   {
    "q": "Where was Yusuf’s shirt torn?",
    "o": [
     "At the front",
     "On the sleeve",
     "At the back"
    ],
    "a": 2,
    "w": "Because he was running away."
   },
   {
    "q": "What did the lady do when her husband appeared?",
    "o": [
     "Said sorry",
     "Blamed Yusuf",
     "Ran away"
    ],
    "a": 1,
    "w": "Blaming others for our mistakes is what Iblis did."
   },
   {
    "q": "Who gave the test about the shirt?",
    "o": [
     "A man from the lady’s own family",
     "Yusuf’s father",
     "The king"
    ],
    "a": 0,
    "w": "So nobody could say he was against her."
   },
   {
    "q": "What should we do before deciding who is right?",
    "o": [
     "Pick the richest person",
     "Look at the facts",
     "Pick the one who shouts loudest"
    ],
    "a": 1,
    "w": "The clue of the shirt showed the truth."
   }
  ]
 },
 {
  "id": 5,
  "verses": [
   30,
   35
  ],
  "title": "Prison Is Dearer to Me",
  "short": "Gossip, a banquet, and Yusuf’s du‘a",
  "big": "Soon the women of the city were gossiping about the lady. She invited them to a feast, and when they saw Yusuf they were so amazed they cut their hands. The lady threatened Yusuf with prison. Yusuf made du‘a: he would rather be in prison than disobey Allah. Allah answered him, and Yusuf was sent to prison even though he was innocent.",
  "remember": [
   "Gossip spreads fast, and it grows as it goes.",
   "Backbiting means saying things about someone behind their back that they would not like.",
   "At the feast, the women cut their hands when they saw Yusuf.",
   "Yusuf’s good heart was even more beautiful than his face.",
   "Yusuf’s du‘a: “My Lord, prison is dearer to me than what they invite me to.”",
   "Allah answered his du‘a: du‘a is the believer’s weapon."
  ],
  "more": [
   {
    "t": "Three kinds of bad talk",
    "l": [
     "Backbiting (ghibah): saying something about someone that they would not like, even if it is true.",
     "Slander (buhtan): telling a lie about someone. That is even worse.",
     "Tale-carrying (namimah): passing gossip on to make trouble. The Prophet ﷺ said a tale-carrier will not enter Paradise."
    ]
   },
   {
    "t": "What to do when people gossip",
    "p": "If your friends start talking badly about someone who is not there, stand up for that person, or at least stay quiet and change the subject. Covering people’s mistakes is better than spreading them."
   },
   {
    "t": "The feast",
    "p": "The lady gave each woman a knife to cut fruit, then called Yusuf in. When they saw him, they were so amazed that they cut their hands and did not even feel it. They said: “This is not a human being, this is a noble angel!”"
   },
   {
    "t": "Prison or doing wrong?",
    "p": "The lady said: do what I say, or go to prison. Yusuf chose prison, because doing wrong would lead to something much worse in the Hereafter. He also said: I cannot stay strong unless You help me, O Allah. He knew he needed Allah’s help."
   },
   {
    "t": "Up and down, then Jannah",
    "p": "Yusuf’s life went from a dark well, to a rich house, to prison. Life is full of tests, and after each test Allah brings ease. For those who stay patient and good, the very last ease is Jannah."
   }
  ],
  "home": "Make your own du‘a today, asking Allah to help you stay away from something you find hard to resist. Then try a gossip-free week: only say good things about people who are not there.",
  "game": {
   "type": "sort",
   "title": "Good words or bad words?",
   "help": "Is each one good to do, or not OK?",
   "buckets": [
    "Good to do",
    "Not OK"
   ],
   "items": [
    [
     "Sticking up for a friend who isn’t there",
     0
    ],
    [
     "Saying something kind about someone",
     0
    ],
    [
     "Changing the subject when others gossip",
     0
    ],
    [
     "Backbiting",
     1
    ],
    [
     "Telling a lie about someone",
     1
    ],
    [
     "Passing gossip on to make trouble",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "What is backbiting?",
    "o": [
     "Saying kind things",
     "Saying things behind someone’s back that they would not like",
     "Biting your own back"
    ],
    "a": 1,
    "w": "Even if it is true, it is backbiting."
   },
   {
    "q": "What happened when the women saw Yusuf at the feast?",
    "o": [
     "They laughed",
     "They cut their hands",
     "They went home"
    ],
    "a": 1,
    "w": "They were so amazed they did not feel it."
   },
   {
    "q": "What did Yusuf say in his du‘a?",
    "o": [
     "“Prison is dearer to me than what they invite me to”",
     "“Please make me rich”",
     "“Make them forget me”"
    ],
    "a": 0,
    "w": "He chose prison over disobeying Allah."
   },
   {
    "q": "What is even more beautiful than a handsome face?",
    "o": [
     "Fancy clothes",
     "A good heart and good manners",
     "A big house"
    ],
    "a": 1,
    "w": "Yusuf had both kinds of beauty."
   },
   {
    "q": "Did Allah answer Yusuf’s du‘a?",
    "o": [
     "No",
     "Yes, He turned their plotting away from him",
     "Only after many years"
    ],
    "a": 1,
    "w": "Du‘a is the believer’s weapon."
   },
   {
    "q": "Was Yusuf guilty when he went to prison?",
    "o": [
     "Yes",
     "No, he was innocent",
     "Nobody knows"
    ],
    "a": 1,
    "w": "They knew he was innocent, but sent him to prison anyway."
   }
  ]
 },
 {
  "id": 6,
  "verses": [
   36,
   42
  ],
  "title": "Yusuf in Prison",
  "short": "Calling to Allah, and two dreams come true",
  "big": "In prison, two young men who served the king asked Yusuf about their dreams. Before explaining them, Yusuf kindly told them about Allah, the One. Then he explained their dreams, and asked the man who would be freed to mention him to the King. But Shaytan made the man forget, and Yusuf stayed in prison for several more years.",
  "remember": [
   "The two young men were the king’s drink-server and the king’s baker.",
   "They trusted Yusuf because of his good character.",
   "Yusuf said his knowledge came from Allah, not from himself.",
   "He started by telling them about Allah, the One.",
   "He said: “Mention me to your master”: asking people for help is allowed.",
   "Shaytan made the man forget, and Yusuf stayed in prison for several years."
  ],
  "more": [
   {
    "t": "Good manners first",
    "p": "Even in prison, Yusuf was kind, honest and helpful, so the other prisoners trusted him. They said: “We see that you are one of the good-doers.” When people see our good manners, they want to listen to us."
   },
   {
    "t": "Allah first",
    "p": "Before explaining the dreams, Yusuf told them the most important thing: there is only one God, Allah. The Prophet ﷺ taught the same thing: when you teach someone about Islam, start with Allah."
   },
   {
    "t": "Thankful, even in prison",
    "p": "Yusuf had been thrown into a well, sold, blamed for something he did not do and put in prison. Still, he did not complain. He said: “This is Allah’s kindness to us.” He thought about his blessings, not his problems."
   },
   {
    "t": "“O my two prison friends”",
    "p": "Yusuf spoke to them kindly, like friends. He asked them: “Are many different gods better, or Allah, the One, the Supreme?” Al-Wahid means the One, and al-Qahhar means the Supreme, stronger than any king."
   },
   {
    "t": "Du‘a and doing your part",
    "p": "Yusuf made du‘a, and he also asked the man to mention him to the king. Trusting Allah means doing both. The man forgot, and Yusuf stayed in prison for several more years. But Allah had a plan: after hardship comes ease."
   }
  ],
  "home": "Next time you are stuck with a problem, do both things Yusuf did: make du‘a to Allah, and ask someone who can help.",
  "game": {
   "type": "match",
   "title": "Dreams and lessons",
   "help": "Tap a thing on the left, then what it means on the right.",
   "pairs": [
    [
     "Pressing grapes for drink",
     "He will serve the king again"
    ],
    [
     "Birds eating bread on his head",
     "He will not survive"
    ],
    [
     "“Mention me to your master”",
     "Asking for help is allowed"
    ],
    [
     "Al-Wahid",
     "The One"
    ],
    [
     "Al-Qahhar",
     "The Supreme, stronger than any king"
    ],
    [
     "Several years",
     "Most say seven more years"
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why did the two young men trust Yusuf?",
    "o": [
     "He was the strongest",
     "Because of his good character",
     "He gave them food"
    ],
    "a": 1,
    "w": "“We see you are one of the good-doers.”"
   },
   {
    "q": "Where did Yusuf say his knowledge came from?",
    "o": [
     "From books",
     "From his own cleverness",
     "From Allah"
    ],
    "a": 2,
    "w": "He said: this is from what my Lord taught me."
   },
   {
    "q": "What did Yusuf talk about first?",
    "o": [
     "Allah, the One",
     "The prison food",
     "His brothers"
    ],
    "a": 0,
    "w": "Always start with Allah."
   },
   {
    "q": "Did Yusuf complain about his hard life?",
    "o": [
     "Yes, all the time",
     "No, he was thankful for Allah’s kindness",
     "Only to the guards"
    ],
    "a": 1,
    "w": "He thought about his blessings."
   },
   {
    "q": "What did Yusuf ask the man who was set free?",
    "o": [
     "To bring him food",
     "To mention him to the king",
     "To find his father"
    ],
    "a": 1,
    "w": "Asking for help is allowed."
   },
   {
    "q": "Why did Yusuf stay in prison longer?",
    "o": [
     "Shaytan made the man forget",
     "Yusuf wanted to stay",
     "The king said no"
    ],
    "a": 0,
    "w": "But Allah had a plan for him."
   }
  ]
 },
 {
  "id": 7,
  "verses": [
   43,
   49
  ],
  "title": "The King’s Dream",
  "short": "Seven fat cows, and a plan to save Egypt",
  "big": "The King of Egypt dreamt of seven fat cows eaten by seven thin ones. His advisers said it was just a muddled dream. Then the man who had been in prison remembered Yusuf. Yusuf explained the dream and gave a plan to save Egypt from hunger, without even asking to be let out first.",
  "remember": [
   "The King dreamt of seven fat cows eaten by seven thin cows, and seven green and seven dry ears of grain.",
   "His advisers did not know the meaning, but would not say “I don’t know”.",
   "The man from prison finally remembered Yusuf, after many years.",
   "Yusuf did not get angry with him for forgetting.",
   "Seven good years, then seven hard years, then a year of lots of rain.",
   "Yusuf helped everyone, even the people who had been unfair to him."
  ],
  "more": [
   {
    "t": "A king, not a Pharaoh",
    "p": "In the story of Musa, the ruler of Egypt is called Fir‘awn (Pharaoh). In the story of Yusuf, he is called al-Malik, the King. Historians found out that in Yusuf’s time, Egypt’s rulers did not call themselves Pharaoh. The Prophet ﷺ could not have known this, but Allah did!"
   },
   {
    "t": "It’s OK to say “I don’t know”",
    "p": "The King’s advisers did not know what the dream meant. Instead of saying “we don’t know”, they said it was just a muddled dream. It is always better to be honest and say “I don’t know” or “Allah knows best”."
   },
   {
    "t": "No grudges",
    "p": "The man who forgot Yusuf for seven years did not even say sorry. But Yusuf did not tell him off. He helped him straight away. The Prophet ﷺ was amazed at Yusuf’s patience: he did not even say “let me out first”."
   },
   {
    "t": "Yusuf’s plan",
    "l": [
     "Seven good years: grow lots of grain, eat only a little, and keep the rest in its ears so it lasts.",
     "Seven hard years: eat from the store, and keep some seeds to plant later.",
     "Then a year of lots of rain. That year was not in the dream: Yusuf worked it out himself!"
    ]
   },
   {
    "t": "Kind to everyone",
    "p": "The people of Egypt worshipped idols, and some had treated Yusuf unfairly. Still, he gave them a plan that saved their lives. When we show mercy to others, Allah shows mercy to us."
   }
  ],
  "home": "Is there someone who forgot about you or let you down? Do something kind for them this week, just like Yusuf did.",
  "game": {
   "type": "match",
   "title": "What does the dream mean?",
   "help": "Tap a part of the dream on the left, then its meaning on the right.",
   "pairs": [
    [
     "Seven fat cows",
     "Seven good years"
    ],
    [
     "Seven thin cows",
     "Seven hard years"
    ],
    [
     "Green ears of grain",
     "Plenty of food to grow"
    ],
    [
     "Dry ears of grain",
     "Crops that fail"
    ],
    [
     "Grain kept in its ears",
     "It lasts much longer"
    ],
    [
     "The year of rain",
     "Yusuf worked it out himself"
    ]
   ]
  },
  "quiz": [
   {
    "q": "What did the King see in his dream?",
    "o": [
     "Seven fat cows eaten by seven thin cows",
     "Eleven stars",
     "A big ship"
    ],
    "a": 0,
    "w": "And seven green and seven dry ears of grain."
   },
   {
    "q": "What did the King’s advisers say?",
    "o": [
     "“It is a muddled dream”",
     "“Ask Yusuf”",
     "“It means good news”"
    ],
    "a": 0,
    "w": "They would not admit they did not know."
   },
   {
    "q": "What did Yusuf do when the man who forgot him came?",
    "o": [
     "Told him off",
     "Helped him straight away",
     "Ignored him"
    ],
    "a": 1,
    "w": "He held no grudge."
   },
   {
    "q": "What did the seven thin cows mean?",
    "o": [
     "Seven hard years",
     "Seven kings",
     "Seven rivers"
    ],
    "a": 0,
    "w": "Years of drought."
   },
   {
    "q": "Why keep the grain in its ears?",
    "o": [
     "So it lasts longer",
     "So it tastes sweet",
     "So birds can eat it"
    ],
    "a": 0,
    "w": "Part of Yusuf’s plan."
   },
   {
    "q": "Who did Yusuf’s plan help?",
    "o": [
     "Only his friends",
     "Everyone in Egypt, even those unfair to him",
     "Only the King"
    ],
    "a": 1,
    "w": "Mercy brings Allah’s mercy."
   }
  ]
 },
 {
  "id": 8,
  "verses": [
   50,
   57
  ],
  "title": "From Prisoner to Minister",
  "short": "The truth comes out, and Yusuf is honoured",
  "big": "The King wanted to meet Yusuf, but Yusuf would not leave prison until his name was cleared. The women said Yusuf had done nothing wrong, and the lady admitted it was her fault. The King made Yusuf a trusted minister, and Yusuf took charge of Egypt’s food stores. Allah raised him from prison to the palace.",
  "remember": [
   "Yusuf would not leave prison until everyone knew he was innocent.",
   "The women said: “We know nothing bad about him.”",
   "The lady said: “Now the truth has come out. It was my fault.”",
   "The King said Yusuf was honoured and trusted.",
   "Yusuf said: “Put me in charge of the stores. I am a trustworthy guardian and I know the work.”",
   "Allah never wastes the reward of people who do good."
  ],
  "more": [
   {
    "t": "A good name matters",
    "p": "After years in prison, most people would run out as fast as they could. But Yusuf wanted everyone to know he had done nothing wrong first. He did not even name the lady. He just said: ask about the women who cut their hands. That made the King find the truth himself."
   },
   {
    "t": "The truth comes out",
    "p": "The King asked the women, and they all said Yusuf was good. Then the lady said: “Now the truth is clear. It was I who did wrong, and he is telling the truth.” The truth always comes out in the end."
   },
   {
    "t": "Born good",
    "p": "The Prophet ﷺ said every child is born on the fitrah: a pure, good nature. Nobody is born bad. When we have iman, our heart leans to good. When we do wrong, a good heart feels sorry and turns back to Allah."
   },
   {
    "t": "Trustworthy and skilled",
    "p": "Yusuf said he was hafiz, someone who looks after things safely, and ‘alim, someone who knows the work well. To do any job well, you need both: good character and good skills."
   },
   {
    "t": "The best reward",
    "p": "Yusuf went from a well, to prison, to the palace. Allah never wastes the good that people do. But Allah says the reward of the Hereafter is even better for those who believe and are careful to obey Him."
   }
  ],
  "home": "Choose one job at home, like tidying your room or helping with dinner. Do it honestly (hafiz) and do it well (‘alim), just like Yusuf.",
  "game": {
   "type": "sort",
   "title": "Good character or good skills?",
   "help": "Is each one about good character, or about good skills?",
   "buckets": [
    "Good character (hafiz)",
    "Good skills (‘alim)"
   ],
   "items": [
    [
     "Being honest",
     0
    ],
    [
     "Keeping things safe",
     0
    ],
    [
     "Being fair to everyone",
     0
    ],
    [
     "Planning ahead",
     1
    ],
    [
     "Being good at your job",
     1
    ],
    [
     "Learning and studying hard",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why didn’t Yusuf leave prison straight away?",
    "o": [
     "He wanted his name cleared first",
     "He was asleep",
     "The door was locked"
    ],
    "a": 0,
    "w": "A good name mattered to him."
   },
   {
    "q": "What did the women say about Yusuf?",
    "o": [
     "“He is a thief”",
     "“We know nothing bad about him”",
     "“We never met him”"
    ],
    "a": 1,
    "w": "They said he was innocent."
   },
   {
    "q": "What did the lady finally admit?",
    "o": [
     "That it was her fault",
     "That she was the King",
     "Nothing"
    ],
    "a": 0,
    "w": "“Now the truth has come out.”"
   },
   {
    "q": "What is the fitrah?",
    "o": [
     "A kind of food",
     "The pure, good nature every child is born with",
     "A city in Egypt"
    ],
    "a": 1,
    "w": "Nobody is born bad."
   },
   {
    "q": "What job did Yusuf ask for?",
    "o": [
     "Head of the army",
     "Looking after Egypt’s food stores",
     "The King’s cook"
    ],
    "a": 1,
    "w": "He knew the hard years were coming."
   },
   {
    "q": "What is even better than a reward in this world?",
    "o": [
     "A bigger palace",
     "The reward of the Hereafter",
     "More gold"
    ],
    "a": 1,
    "w": "For those who believe and obey Allah."
   }
  ]
 },
 {
  "id": 9,
  "verses": [
   58,
   68
  ],
  "title": "The Brothers Come to Egypt",
  "short": "A promise, and different gates",
  "big": "The famine reached Yusuf’s family, and his brothers came to Egypt to buy food. Yusuf knew them straight away, but they did not know him. He was kind and generous, and asked them to bring their youngest brother next time. Ya‘qub let Binyamin go only after a promise by Allah, and told his sons to enter the city through different gates.",
  "remember": [
   "Thanks to Yusuf’s plan, Egypt had enough food even in the hard years.",
   "Yusuf knew his brothers, but they did not recognise him.",
   "He gave them food, looked after them, and secretly put their goods back in their bags.",
   "He said: next time, bring your youngest brother.",
   "Ya‘qub said: Allah is the best Protector.",
   "He told them to enter by different gates, and to trust Allah."
  ],
  "more": [
   {
    "t": "Why didn’t they know him?",
    "p": "The brothers last saw Yusuf when he was a little boy, about seven years old. Now he was a grown man and an important minister of Egypt. They never imagined their little brother could be alive, let alone in charge of all of Egypt’s food!"
   },
   {
    "t": "Kind first",
    "p": "Yusuf gave his brothers lots of food and looked after them like guests. He also secretly put back the things they had brought to pay with, because he knew the family was poor. He wanted them to come back with Binyamin."
   },
   {
    "t": "Can I trust you?",
    "p": "The brothers said: “We will look after Binyamin!” That was exactly what they had said about Yusuf long ago. Ya‘qub said: “Should I trust you, like I trusted you with his brother?” Then he said: Allah is the best Protector. He made them promise by Allah to bring Binyamin back."
   },
   {
    "t": "The evil eye is real",
    "p": "Ya‘qub told his eleven sons to use different gates. One reason was so they would not stand out as strangers. Another was the evil eye, which comes from jealousy. When we see something nice that someone has, we say “ma sha’ Allah” and ask Allah to bless it. Reading Surah al-Falaq protects us too."
   },
   {
    "t": "Trusting Allah",
    "p": "Ya‘qub did his best to protect his sons, and then said: “In Allah I put my trust.” That is tawakkul: plan well, do your best, and leave the rest to Allah."
   }
  ],
  "home": "Learn Surah al-Falaq if you don’t know it yet, and say “ma sha’ Allah” the next time you see something nice that someone else has.",
  "game": {
   "type": "match",
   "title": "What does it mean?",
   "help": "Tap a word on the left, then what it means on the right.",
   "pairs": [
    [
     "Different gates",
     "So they would not stand out, and to protect from the evil eye"
    ],
    [
     "Their goods in the bags",
     "Yusuf’s secret gift"
    ],
    [
     "“Ma sha’ Allah”",
     "What we say when something impresses us"
    ],
    [
     "Al-Hafiz",
     "Allah, the best Protector"
    ],
    [
     "A promise by Allah",
     "What Ya‘qub made his sons give"
    ],
    [
     "Tawakkul",
     "Doing your best, then trusting Allah"
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why did the brothers come to Egypt?",
    "o": [
     "To find Yusuf",
     "To buy food in the famine",
     "To visit the King"
    ],
    "a": 1,
    "w": "Egypt had food thanks to Yusuf’s plan."
   },
   {
    "q": "Did the brothers recognise Yusuf?",
    "o": [
     "Yes, straight away",
     "No, they had last seen him as a little boy",
     "Only Binyamin did"
    ],
    "a": 1,
    "w": "But Yusuf knew them."
   },
   {
    "q": "What did Yusuf secretly put back in their bags?",
    "o": [
     "Stones",
     "The goods they brought to pay with",
     "Letters"
    ],
    "a": 1,
    "w": "He knew the family was poor."
   },
   {
    "q": "Who did Yusuf ask them to bring next time?",
    "o": [
     "Their father",
     "Their youngest brother, Binyamin",
     "Their mother"
    ],
    "a": 1,
    "w": "He wanted to see his brother."
   },
   {
    "q": "What should we say when we see something nice someone has?",
    "o": [
     "“I want that”",
     "“Ma sha’ Allah”",
     "Nothing"
    ],
    "a": 1,
    "w": "It protects from the evil eye."
   },
   {
    "q": "What is tawakkul?",
    "o": [
     "Doing nothing",
     "Doing your best, then trusting Allah",
     "Worrying a lot"
    ],
    "a": 1,
    "w": "Ya‘qub planned, then trusted Allah."
   }
  ]
 },
 {
  "id": 10,
  "verses": [
   69,
   79
  ],
  "title": "Binyamin and the Cup",
  "short": "“I am your brother”, and the missing cup",
  "big": "Yusuf secretly told Binyamin: “I am your brother! Don’t be sad.” Then, as part of Allah’s plan, the King’s cup was found in Binyamin’s bag, so he could stay in Egypt with Yusuf. The brothers asked Yusuf to take one of them instead, but Yusuf stayed calm and fair, and never told a lie.",
  "remember": [
   "Yusuf told Binyamin: “I am your brother, so don’t be sad.”",
   "Yusuf put the King’s measuring cup in Binyamin’s bag himself.",
   "The brothers said they were not thieves, and they were telling the truth.",
   "They said the one whose bag had the cup should stay: that was the law of their father Ya‘qub.",
   "When the brothers said something unfair about Yusuf, he stayed calm and quiet.",
   "Yusuf said: we will only keep the one with whom we found our things, not someone else."
  ],
  "more": [
   {
    "t": "A secret hug",
    "p": "Yusuf had not seen his little brother Binyamin for many years. He took him aside and said: “I really am your brother! Don’t be sad about what the others used to do.” Binyamin was too young to remember Yusuf’s face, but he knew the whole story from their father."
   },
   {
    "t": "Allah’s plan",
    "p": "Egypt did not let strangers stay forever, so Yusuf needed a way to keep Binyamin. Allah gave him a plan: the King’s cup in Binyamin’s bag. Then the brothers themselves said the rule: whoever has it in his bag stays. Allah says: “This is how We planned for Yusuf.”"
   },
   {
    "t": "Stealing is very serious",
    "p": "The brothers were upset when someone called them thieves, because stealing is a big sin. The Prophet ﷺ warned us strongly about it. We should never take what is not ours."
   },
   {
    "t": "Staying calm",
    "p": "The brothers said something unfair: “If he stole, his brother stole before.” They were talking about Yusuf, right in front of him! Yusuf did not get angry or shout. He kept it inside. Sometimes staying quiet is the wisest thing to do."
   },
   {
    "t": "Always tell the truth",
    "p": "Yusuf never said Binyamin stole, because he hadn’t. He said: “We will only keep the one with whom we found our things.” Every word was true. A Muslim never lies, even when things are hard."
   }
  ],
  "home": "Today, try to make every single thing you say completely true, even small things. At the end of the day, check how you did.",
  "game": {
   "type": "sort",
   "title": "Who said it?",
   "help": "Did Yusuf say it, or the brothers?",
   "buckets": [
    "Yusuf",
    "The brothers"
   ],
   "items": [
    [
     "“I am your brother, don’t be sad”",
     0
    ],
    [
     "“We will only keep the one with whom we found our things”",
     0
    ],
    [
     "“Allah forbid!”",
     0
    ],
    [
     "“We are not thieves!”",
     1
    ],
    [
     "“If he stole, a brother of his stole before”",
     1
    ],
    [
     "“Take one of us instead”",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "What did Yusuf tell Binyamin in secret?",
    "o": [
     "“I am your brother”",
     "“You are in trouble”",
     "“Go home”"
    ],
    "a": 0,
    "w": "He told him not to be sad."
   },
   {
    "q": "Where was the King’s cup found?",
    "o": [
     "In Yusuf’s room",
     "In Binyamin’s bag",
     "In the river"
    ],
    "a": 1,
    "w": "Part of Allah’s plan."
   },
   {
    "q": "Who said the rule that the one with the cup should stay?",
    "o": [
     "The King",
     "The brothers themselves",
     "Binyamin"
    ],
    "a": 1,
    "w": "It was the law of Ya‘qub."
   },
   {
    "q": "How did Yusuf react when the brothers said something unfair about him?",
    "o": [
     "He shouted",
     "He stayed calm and kept it inside",
     "He cried"
    ],
    "a": 1,
    "w": "Sometimes quiet is wisest."
   },
   {
    "q": "Did Yusuf ever say Binyamin stole?",
    "o": [
     "Yes",
     "No, he only said where the cup was found",
     "He said everyone stole"
    ],
    "a": 1,
    "w": "Yusuf never lied."
   },
   {
    "q": "Why wouldn’t Yusuf take another brother instead?",
    "o": [
     "He did not like them",
     "Punishing someone else would be unfair",
     "The King said no"
    ],
    "a": 1,
    "w": "That would be unjust."
   }
  ]
 },
 {
  "id": 11,
  "verses": [
   80,
   87
  ],
  "title": "Never Lose Hope",
  "short": "Beautiful patience, and complaining only to Allah",
  "big": "The brothers went home without Binyamin, and the eldest brother was so sorry that he stayed behind in Egypt. Now Ya‘qub had lost three sons. His eyes turned white from crying for Yusuf, but he still said: beautiful patience, and perhaps Allah will bring them all back. He told his sons: go and search, and never lose hope in Allah’s mercy.",
  "remember": [
   "The eldest brother was sorry, and stayed in Egypt rather than break his promise.",
   "Ya‘qub did not believe the brothers this time, because they had lied before.",
   "He said again: beautiful patience. Perhaps Allah will bring them all back.",
   "Ya‘qub cried so much for Yusuf that his eyes turned white.",
   "He said: “I complain only to Allah.”",
   "Never lose hope in Allah’s mercy!"
  ],
  "more": [
   {
    "t": "A sorry brother",
    "p": "The eldest brother remembered the promise they made to their father, and how they had let Yusuf down before. He felt so sorry that he said: I will not go home until my father lets me, or Allah decides for me. Feeling truly sorry is the first step to changing."
   },
   {
    "t": "The boy who cried wolf",
    "p": "Long ago, the brothers lied: “A wolf ate Yusuf!” Now they were telling the truth about Binyamin, but their father could not believe them. When we tell lies, people stop believing us even when we tell the truth."
   },
   {
    "t": "It’s OK to cry",
    "p": "Ya‘qub cried for Yusuf for many years. Crying does not mean you are not patient. The Prophet ﷺ also cried when his little son Ibrahim died. He said: the eyes cry and the heart is sad, but we only say what pleases Allah."
   },
   {
    "t": "Tell Allah",
    "p": "Ya‘qub said: “I complain only to Allah.” We can always tell Allah when we are sad and ask Him for help. But we never say: “Allah, why are You being unfair to me?”"
   },
   {
    "t": "Never give up",
    "p": "Ya‘qub knew Yusuf’s dream had not come true yet, so Yusuf must be alive! He told his sons: go and search with all your senses, and never lose hope in Allah’s mercy. Only people without faith give up on Allah."
   }
  ],
  "home": "Is there something you have been hoping for a long time? Make du‘a for it again today, and do not give up.",
  "game": {
   "type": "sort",
   "title": "Hope or giving up?",
   "help": "Is each one keeping hope, or giving up?",
   "buckets": [
    "Keeping hope",
    "Giving up"
   ],
   "items": [
    [
     "Making du‘a again and again",
     0
    ],
    [
     "Saying: maybe Allah will make it better",
     0
    ],
    [
     "Trying again and searching",
     0
    ],
    [
     "Saying: it will never get better",
     1
    ],
    [
     "Stopping trying",
     1
    ],
    [
     "Saying: Allah, it’s not fair!",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why did the eldest brother stay in Egypt?",
    "o": [
     "He liked it there",
     "He felt sorry and would not break his promise",
     "The King asked him to"
    ],
    "a": 1,
    "w": "Feeling sorry is the first step to changing."
   },
   {
    "q": "Why didn’t Ya‘qub believe his sons this time?",
    "o": [
     "They had lied to him before",
     "They spoke too quietly",
     "He was asleep"
    ],
    "a": 0,
    "w": "Lies make people stop believing us."
   },
   {
    "q": "How many sons had Ya‘qub lost now?",
    "o": [
     "One",
     "Two",
     "Three"
    ],
    "a": 2,
    "w": "Yusuf, Binyamin and the eldest."
   },
   {
    "q": "Is it OK to cry when we are sad?",
    "o": [
     "No, never",
     "Yes, the Prophet ﷺ cried too",
     "Only babies cry"
    ],
    "a": 1,
    "w": "Crying is not being impatient."
   },
   {
    "q": "Who did Ya‘qub complain to?",
    "o": [
     "His neighbours",
     "Only Allah",
     "The King"
    ],
    "a": 1,
    "w": "“I complain only to Allah.”"
   },
   {
    "q": "What did Ya‘qub tell his sons?",
    "o": [
     "Stay at home",
     "Go and search, and never lose hope in Allah’s mercy",
     "Forget about Yusuf"
    ],
    "a": 1,
    "w": "Never give up on Allah."
   }
  ]
 },
 {
  "id": 12,
  "verses": [
   88,
   93
  ],
  "title": "“I Am Yusuf!”",
  "short": "The big surprise, and no blame today",
  "big": "On their third trip, the brothers came to Egypt poor and hungry. Yusuf asked them: “Do you know what you did to Yusuf and his brother?” They gasped: “Are you really Yusuf?” He said: “I am Yusuf, and this is my brother. Allah has been kind to us.” They said sorry, and he forgave them straight away: “No blame on you today.” Then he sent his shirt home to bring back his father’s sight.",
  "remember": [
   "The brothers came a third time, poor and hungry, and asked for charity.",
   "Yusuf asked kindly: “Do you know what you did to Yusuf?”",
   "He said: “I am Yusuf, and this is my brother. Allah has been kind to us.”",
   "Whoever is patient and obeys Allah, Allah never wastes their reward.",
   "Yusuf forgave them: “No blame on you today.”",
   "He sent his shirt to make his father see again."
  ],
  "more": [
   {
    "t": "The big surprise",
    "p": "The brothers could not believe it. The great minister of Egypt was their little brother Yusuf, the one they had thrown into the well! They asked: “Are you really, really Yusuf?”"
   },
   {
    "t": "Kind, even now",
    "p": "Yusuf was now powerful and could have punished them. Instead he asked his question gently, and said they did it “when you did not know better”, to make it easier for them. He did not tell them off."
   },
   {
    "t": "All from Allah",
    "p": "Yusuf did not say: “Look how great I am!” He said: “Allah has been kind to us.” Then he taught them: whoever is patient and careful to obey Allah, Allah never wastes their reward. That is the big lesson of the whole surah."
   },
   {
    "t": "No blame today",
    "p": "The brothers said: “We did wrong.” Yusuf said: “No blame on you today. Allah will forgive you.” Many years later, when the Prophet ﷺ returned to Makkah in victory, he said the very same words to the people who had hurt him: “No blame on you today. Go, you are free.”"
   },
   {
    "t": "Three special shirts",
    "l": [
     "The shirt with fake blood, when the brothers lied.",
     "The shirt torn from the back, which showed Yusuf was telling the truth.",
     "The shirt Yusuf sent home, which made his father see again."
    ]
   }
  ],
  "home": "Is there someone who said sorry to you? Forgive them, and don’t remind them of what they did. Say: “No blame on you today.”",
  "game": {
   "type": "order",
   "title": "The big day",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The brothers come a third time, poor and hungry",
    "They ask Yusuf for charity",
    "Yusuf asks: do you know what you did to Yusuf?",
    "They ask: are you really Yusuf?",
    "“I am Yusuf, and this is my brother”",
    "The brothers say: we did wrong",
    "Yusuf: “No blame on you today”",
    "Yusuf sends his shirt home"
   ]
  },
  "quiz": [
   {
    "q": "Why did the brothers come to Egypt the third time?",
    "o": [
     "For a holiday",
     "They were poor and hungry",
     "To find Yusuf"
    ],
    "a": 1,
    "w": "The famine had made them poor."
   },
   {
    "q": "What did the brothers ask when they understood?",
    "o": [
     "“Where is the King?”",
     "“Are you really Yusuf?”",
     "“Can we go home?”"
    ],
    "a": 1,
    "w": "They could hardly believe it."
   },
   {
    "q": "Who did Yusuf say his success came from?",
    "o": [
     "Himself",
     "Allah",
     "The King"
    ],
    "a": 1,
    "w": "“Allah has been kind to us.”"
   },
   {
    "q": "What did Yusuf say when the brothers said sorry?",
    "o": [
     "“Go away!”",
     "“No blame on you today”",
     "“I will punish you”"
    ],
    "a": 1,
    "w": "He forgave them straight away."
   },
   {
    "q": "Who said the same words years later?",
    "o": [
     "The Prophet ﷺ, to the people of Makkah",
     "The King of Egypt",
     "Ya‘qub"
    ],
    "a": 0,
    "w": "“No blame on you today. Go, you are free.”"
   },
   {
    "q": "What did Yusuf’s shirt do for his father?",
    "o": [
     "Kept him warm",
     "Made him see again",
     "Nothing"
    ],
    "a": 1,
    "w": "The third special shirt."
   }
  ]
 },
 {
  "id": 13,
  "verses": [
   94,
   101
  ],
  "title": "The Dream Comes True",
  "short": "The family together again, and Yusuf’s du‘a",
  "big": "Ya‘qub smelled Yusuf’s scent from far away, and when the shirt touched his face he could see again. The whole family came to Egypt, and they all bowed to Yusuf, just like the eleven stars, the sun and the moon in his dream. Yusuf thanked Allah, and made a beautiful du‘a: let me die as a Muslim.",
  "remember": [
   "Ya‘qub smelled Yusuf’s scent while the caravan was still far away.",
   "The shirt touched his face, and he could see again!",
   "The brothers asked their father to pray for Allah to forgive them.",
   "The family bowed to Yusuf: the dream from long ago came true.",
   "Yusuf did not mention the well, so his brothers would not feel bad.",
   "Yusuf’s du‘a: “Let me die as a Muslim, and join me with the good people.”"
  ],
  "more": [
   {
    "t": "A scent from far away",
    "p": "When the caravan left Egypt with Yusuf’s shirt, Ya‘qub said: “I can smell Yusuf!” People said he was just imagining it. But he was right! Then the shirt touched his face and he could see again. He said: “Didn’t I tell you? I know things from Allah that you don’t.” He never gave up hope."
   },
   {
    "t": "Saying sorry",
    "p": "The brothers said to their father: “Please ask Allah to forgive us. We did wrong.” Ya‘qub said he would. Many scholars say he waited for the last part of the night, the best time to make du‘a. Allah forgave the brothers, and they became good people."
   },
   {
    "t": "The dream comes true",
    "p": "The whole family came to live in Egypt. Yusuf raised his parents up high, and they all bowed to him, just like the stars, the sun and the moon in his dream! Back then, bowing to show respect was allowed. In our religion today, we bow only to Allah."
   },
   {
    "t": "Kind words",
    "p": "Yusuf thanked Allah for bringing him out of prison. He did not say “out of the well”, because he did not want his brothers to feel bad. He said Shaytan had made trouble between them. He chose kind words."
   },
   {
    "t": "Yusuf’s du‘a",
    "p": "Yusuf had power, a palace and his family back. But in his du‘a he first thanked Allah, then asked for the most important thing: “Let me die as a Muslim, and put me with the good people.” We can make the same du‘a."
   }
  ],
  "home": "Learn Yusuf’s du‘a: “Tawaffani musliman wa alhiqni bi-s-salihin” (let me die as a Muslim, and join me with the good people). Say it after your prayers, after first thanking Allah.",
  "game": {
   "type": "order",
   "title": "The happy ending",
   "help": "Tap the events in the order they happened.",
   "items": [
    "Ya‘qub smells Yusuf’s scent",
    "The shirt touches his face",
    "He can see again!",
    "The brothers ask him to pray for forgiveness",
    "The family travels to Egypt",
    "They bow to Yusuf, like the stars, sun and moon",
    "Yusuf makes his du‘a"
   ]
  },
  "quiz": [
   {
    "q": "What did Ya‘qub smell from far away?",
    "o": [
     "Bread",
     "Yusuf’s scent",
     "Flowers"
    ],
    "a": 1,
    "w": "He never gave up hope."
   },
   {
    "q": "What happened when the shirt touched Ya‘qub’s face?",
    "o": [
     "He fell asleep",
     "He could see again",
     "Nothing"
    ],
    "a": 1,
    "w": "Just as Yusuf said."
   },
   {
    "q": "What did the brothers ask their father?",
    "o": [
     "For money",
     "To ask Allah to forgive them",
     "To go back home"
    ],
    "a": 1,
    "w": "Saying sorry is the first step."
   },
   {
    "q": "Which dream came true when the family bowed to Yusuf?",
    "o": [
     "The King’s dream",
     "Yusuf’s dream of the stars, sun and moon",
     "The baker’s dream"
    ],
    "a": 1,
    "w": "The dream from when he was a boy."
   },
   {
    "q": "Why didn’t Yusuf mention the well?",
    "o": [
     "He forgot",
     "So his brothers would not feel bad",
     "It was not important"
    ],
    "a": 1,
    "w": "He chose kind words."
   },
   {
    "q": "What did Yusuf ask for in his du‘a?",
    "o": [
     "A bigger palace",
     "To die as a Muslim and be with the good people",
     "More gold"
    ],
    "a": 1,
    "w": "The most important thing."
   }
  ]
 },
 {
  "id": 14,
  "verses": [
   102,
   111
  ],
  "title": "A Lesson for People Who Think",
  "short": "The end of the surah",
  "big": "Allah tells the Prophet ﷺ: this story is news only Allah knew. Most people will not believe, but you ask them for nothing; it is a reminder for everyone. He tells him to say: this is my way, I call to Allah. The surah ends: in their stories is a lesson for people who think.",
  "remember": [
   "Only Allah knew this story: the Prophet ﷺ could not have learned it anywhere else.",
   "Most people will not believe, even when we try our best.",
   "The Prophet ﷺ never asked for any reward.",
   "Allah’s signs are all around us: we should stop and think about them.",
   "There is one straight path to Allah.",
   "In their stories is a lesson for people who think."
  ],
  "more": [
   {
    "t": "Only Allah knew",
    "p": "In Makkah there were no books about Yusuf, and almost nobody could read. So how did the Prophet ﷺ know all these details, even what the brothers said in secret? Allah told him. That is one sign that the Qur’an is from Allah."
   },
   {
    "t": "Do your best",
    "p": "The Prophet ﷺ wanted everyone to believe, but most people did not. Allah told him: your job is to do your best; the results are up to Allah. When we invite people to good, we do our best and leave the rest to Allah."
   },
   {
    "t": "Nothing in return",
    "p": "The Prophet ﷺ never asked for money or rewards. Once ‘Umar saw him sleeping on a rough mat that left marks on his side, and cried. The Prophet ﷺ said: kings have this world, and we have the Hereafter."
   },
   {
    "t": "Look around",
    "p": "The sun, the moon, the stars, the oceans, the mountains, and even you yourself: these are all signs of Allah. Many people walk right past them without thinking. Let’s stop and think!"
   },
   {
    "t": "One straight path",
    "p": "The Prophet ﷺ once drew one straight line in the sand and said: this is Allah’s path. Then he drew lots of lines to the sides: these are other paths, with Shaytan calling on each one. We stay on the one straight path. The best way to invite others to it is with good manners, just like Yusuf."
   }
  ],
  "home": "Go outside with a grown-up and find five signs of Allah: the sky, a tree, a bird, the clouds, and you! Say “SubhanAllah” for each one.",
  "game": {
   "type": "match",
   "title": "Lessons at the end",
   "help": "Tap a word on the left, then what it means on the right.",
   "pairs": [
    [
     "News of the unseen",
     "Things only Allah knew"
    ],
    [
     "No reward",
     "The Prophet ﷺ asked for nothing"
    ],
    [
     "Signs of Allah",
     "The sun, the moon, the stars, and us"
    ],
    [
     "The straight path",
     "The one way to Allah"
    ],
    [
     "Good manners",
     "The best way to invite people to Allah"
    ],
    [
     "‘Ibrah",
     "A lesson for people who think"
    ]
   ]
  },
  "quiz": [
   {
    "q": "How did the Prophet ﷺ know the story of Yusuf?",
    "o": [
     "From a book in Makkah",
     "Allah told him",
     "A traveller told him"
    ],
    "a": 1,
    "w": "Only Allah knew."
   },
   {
    "q": "What should we do if people don’t listen when we invite them to good?",
    "o": [
     "Give up",
     "Do our best and leave the results to Allah",
     "Get angry"
    ],
    "a": 1,
    "w": "Just like the Prophet ﷺ."
   },
   {
    "q": "What reward did the Prophet ﷺ ask for?",
    "o": [
     "Gold",
     "Nothing at all",
     "A palace"
    ],
    "a": 1,
    "w": "He slept on a simple mat."
   },
   {
    "q": "Which of these is a sign of Allah?",
    "o": [
     "The sun and the moon",
     "A video game",
     "A toy"
    ],
    "a": 0,
    "w": "Signs are all around us."
   },
   {
    "q": "How many straight paths to Allah are there?",
    "o": [
     "One",
     "Two",
     "Lots"
    ],
    "a": 0,
    "w": "The Prophet ﷺ drew one straight line."
   },
   {
    "q": "Who is the lesson of these stories for?",
    "o": [
     "People who think",
     "Only kings",
     "Nobody"
    ],
    "a": 0,
    "w": "Let’s be people who think!"
   }
  ]
 },
 {
  "id": 15,
  "verses": [
   [
    3,
    3
   ],
   [
    18,
    18
   ],
   [
    86,
    86
   ],
   [
    92,
    92
   ],
   [
    101,
    101
   ]
  ],
  "title": "Lessons from Surah Yusuf",
  "short": "Lessons for our homes, our hearts and our ending",
  "big": "Allah says there are lessons in this story for people who think. Surah Yusuf teaches us to be patient, to tell Allah our worries, to forgive, to honour our parents, to stay away from jealousy, and never to give up. And the whole surah is built like a mirror around the King’s dream: another sign that it is from Allah.",
  "remember": [
   "Read the story again and again: every time you will find new lessons.",
   "Beautiful patience means telling our worries to Allah.",
   "Jealousy is like fire: it eats up good deeds.",
   "Forgive people who say sorry, and don’t remind them of their mistakes.",
   "Honour your parents, like Yusuf did.",
   "What matters most is how we end: Yusuf asked Allah to let him die as a Muslim."
  ],
  "more": [
   {
    "t": "Lessons for our homes",
    "l": [
     "Honour your parents: Yusuf went out to meet them and sat them up high.",
     "Good homes help children grow up good: Allah looks after the children of good people.",
     "Shaytan tries to make families fight. When we argue, we stop, say “a‘udhu billah”, and make up."
    ]
   },
   {
    "t": "Lessons for our hearts",
    "l": [
     "Inner beauty, being kind and good, is better than a pretty face.",
     "Don’t show off, and say “ma sha’ Allah” when others have something nice.",
     "Gossip and jealousy hurt our hearts. Keep away from them.",
     "Don’t rush: Yusuf took his time before leaving prison, and it worked out best."
    ]
   },
   {
    "t": "Lessons for hard times",
    "l": [
     "Tell Allah your worries: du‘a is the best medicine.",
     "Do your best, then trust Allah.",
     "After every hard time, Allah brings ease. Yusuf went from a well, to prison, to the palace!"
    ]
   },
   {
    "t": "Lessons about sorry",
    "l": [
     "If you hurt someone, say sorry to them, and ask Allah to forgive you.",
     "Forgive others, like Yusuf did: “No blame on you today.”",
     "Never give up on anyone: the brothers did something terrible, but they changed and became good."
    ]
   },
   {
    "t": "A mirror story",
    "p": "Scholars noticed that Surah Yusuf is built like a mirror! The King’s dream is in the middle. Before it, Yusuf goes into prison; after it, he comes out. Before it, he is a servant; after it, he is in charge of Egypt’s food. Before it, he is taken from his father; after it, they are together again. Only Allah could make a story so perfect."
   }
  ],
  "home": "Choose your favourite lesson from Surah Yusuf. Draw a picture of it, and tell your family why you chose it.",
  "game": {
   "type": "sort",
   "title": "Yusuf’s way",
   "help": "Is each one something to do, or something to avoid?",
   "buckets": [
    "Do it",
    "Avoid it"
   ],
   "items": [
    [
     "Be patient and tell Allah your worries",
     0
    ],
    [
     "Forgive someone who says sorry",
     0
    ],
    [
     "Honour your parents",
     0
    ],
    [
     "Say “ma sha’ Allah”",
     0
    ],
    [
     "Be jealous",
     1
    ],
    [
     "Gossip about people",
     1
    ],
    [
     "Show off",
     1
    ],
    [
     "Rush into things",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "How many times should we read the story of Yusuf?",
    "o": [
     "Just once",
     "Again and again: there are always new lessons",
     "Never"
    ],
    "a": 1,
    "w": "Lessons for people who think."
   },
   {
    "q": "What is jealousy like?",
    "o": [
     "Water",
     "A fire that eats up good deeds",
     "A flower"
    ],
    "a": 1,
    "w": "So we say “ma sha’ Allah” instead."
   },
   {
    "q": "What did Yusuf say when he forgave his brothers?",
    "o": [
     "“Never come back”",
     "“No blame on you today”",
     "“You owe me”"
    ],
    "a": 1,
    "w": "And he didn’t remind them."
   },
   {
    "q": "What is the best medicine when we feel sad or worried?",
    "o": [
     "Du‘a to Allah",
     "Shouting",
     "Giving up"
    ],
    "a": 0,
    "w": "Tell Allah your worries."
   },
   {
    "q": "What is in the middle of Surah Yusuf’s mirror?",
    "o": [
     "The well",
     "The King’s dream",
     "The banquet"
    ],
    "a": 1,
    "w": "Everything mirrors around it."
   },
   {
    "q": "What did Yusuf ask for at the end of his life?",
    "o": [
     "A bigger palace",
     "To die as a Muslim and be with the good people",
     "More gold"
    ],
    "a": 1,
    "w": "How we end matters most."
   }
  ]
 }
];

// Old lesson id -> new chapter id (version 2 of this course).
const REMAP = {"1":1,"2":1,"3":2,"4":3,"5":3,"6":4,"7":4,"8":5,"9":6,"10":6,"11":7,"12":7,"13":8,"14":8,"15":9,"16":9,"17":9,"18":10,"19":10,"20":10,"21":11,"22":11,"23":12,"24":12,"25":13,"26":13,"27":13,"28":14,"29":14,"30":14,"31":15,"32":15,"33":15,"34":15};

// 20 mixed questions: [question, options, index of the right answer]
const FINAL = [
 ["What does Allah call the story of Yusuf?", ["The best of stories", "A short story", "A sad story"], 0],
 ["How many stars did Yusuf see in his dream?", ["Eleven", "Seven", "Twelve"], 0],
 ["Where did the brothers put Yusuf?", ["In a well", "In a cave", "On a ship"], 0],
 ["What kind of patience did Ya‘qub have?", ["Beautiful patience", "No patience", "Angry patience"], 0],
 ["In which land was Yusuf sold?", ["Egypt", "Yemen", "Makkah"], 0],
 ["What did Yusuf say when he was called to do wrong?", ["Allah is my refuge", "Maybe later", "Ask me tomorrow"], 0],
 ["Where was Yusuf’s shirt torn?", ["From the back", "From the front", "On the sleeve"], 0],
 ["What did Yusuf say was dearer to him than sin?", ["Prison", "Gold", "A palace"], 0],
 ["What did Yusuf teach the prisoners first?", ["Allah is One", "How to escape", "How to cook"], 0],
 ["What did the seven fat cows stand for?", ["Seven years of good harvests", "Seven kings", "Seven rivers"], 0],
 ["What job did Yusuf ask for?", ["In charge of the storehouses", "Captain of the army", "Chief gardener"], 0],
 ["Which brother did Yusuf ask them to bring?", ["Binyamin", "The eldest", "None"], 0],
 ["What did Ya‘qub tell his sons to use when entering the city?", ["Different gates", "One gate", "No gate"], 0],
 ["What was found in Binyamin’s bag?", ["The King’s measuring cup", "A letter", "A ring"], 0],
 ["To whom did Ya‘qub complain about his sadness?", ["Only to Allah", "To the King", "To his neighbours"], 0],
 ["What did Yusuf say to his brothers when they said sorry?", ["No blame on you today", "Go away", "Pay me back"], 0],
 ["What brought back Ya‘qub’s sight?", ["Yusuf’s shirt", "Medicine", "Rain"], 0],
 ["What did Yusuf ask Allah for at the end?", ["To die as a Muslim and be with the righteous", "More gold", "A bigger palace"], 0],
 ["How did the Prophet ﷺ know the story?", ["Allah revealed it to him", "He read it in a book", "His friends told him"], 0],
 ["What is in the middle of the ring of the surah?", ["The King’s dream", "The well", "The banquet"], 0]
].map(([q,o,a]) => ({q, o, a, w:"The answer is: "+o[a]+"."}));

export default {
  version: 2,
  remap: REMAP,
  name: "Surah Yusuf",
  lines: ["Allah calls this the best of stories.","Patience is beautiful. Keep going!","Allah is the best of planners.","A little every day, like drops filling a well.","Evil never wins in the end."],
  versesSource: SOURCE,
  // verses is [from, to], or a list of ranges such as [[3,3],[18,18]] for lessons that draw on several places.
  lessons: LESSONS.map((l) => ({ ...l, ayat: (Array.isArray(l.verses[0]) ? l.verses : [l.verses]).flatMap(([a, b]) => ayat(a, b)) })),
  final: FINAL,
};
