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
  "big": "The King dreamt of seven fat cows eaten by seven thin ones. Nobody could explain it until the wine-maker remembered Yusuf. Yusuf explained the dream and gave a plan: store food in the seven good years for the seven hard years to come.",
  "remember": [
   "The King dreamt of seven fat cows eaten by seven thin ones.",
   "The wine-maker called Yusuf “O man of truth”.",
   "He also saw seven green ears of corn and seven dry ones.",
   "Seven good years: plant, and leave the grain in its ears, except a little to eat.",
   "His chiefs said: these are mixed-up dreams, and we do not know their meaning.",
   "Then seven hard years would eat up what was stored."
  ],
  "more": [
   {
    "t": "“The King”, not “Pharaoh”",
    "p": "In Yusuf’s story the Qur’an calls the ruler “the King”. In Musa’s story it says “Pharaoh”. Historians say the rulers in Yusuf’s time did not use the title Pharaoh. The Prophet ﷺ could not have known this himself: it shows the Qur’an is from Allah."
   },
   {
    "t": "No grudge",
    "p": "The wine-maker had forgotten Yusuf for years and did not even say sorry. Yusuf did not scold him. He simply helped."
   },
   {
    "t": "Saying “I don’t know”",
    "p": "The advisers did not want to admit they did not know. So they said the dream was just a jumble. It is better to say honestly: I don’t know."
   },
   {
    "t": "More than an answer",
    "p": "Yusuf was only asked for the meaning, but he also gave a plan to store food. He wanted to help everyone in Egypt, even people who had treated him badly."
   },
   {
    "t": "Remembering at last",
    "p": "The wine-maker had forgotten Yusuf for years. When he saw that nobody could explain the dream, he finally remembered his old friend in prison."
   }
  ],
  "home": "Practise saying “I don’t know, but I will find out” when you are not sure of an answer.",
  "game": {
   "type": "order",
   "title": "Yusuf’s plan, in order",
   "help": "Tap the steps in the right order.",
   "items": [
    "Seven years of good harvests",
    "Store the grain in its ears",
    "Eat only a little",
    "Seven hard years of drought",
    "Use what was stored",
    "A year of rain and plenty"
   ]
  },
  "quiz": [
   {
    "q": "What did the King see in his dream?",
    "o": [
     "Seven fat cows eaten by seven thin cows",
     "A giant bird",
     "A burning city"
    ],
    "a": 0,
    "w": "Seven fat cows eaten by seven thin ones, and green and dry ears of corn."
   },
   {
    "q": "What did the seven fat cows stand for?",
    "o": [
     "Seven years of good harvests",
     "Seven kings",
     "Seven rivers"
    ],
    "a": 0,
    "w": "Seven years of plenty."
   },
   {
    "q": "What did the King’s chiefs say?",
    "o": [
     "These are mixed-up dreams",
     "It means good news",
     "Ask the children"
    ],
    "a": 0,
    "w": "They said it was a jumble and they did not know its meaning."
   },
   {
    "q": "What did Yusuf tell them to do with the grain?",
    "o": [
     "Leave it in its ears and store it",
     "Sell it all",
     "Throw it in the river"
    ],
    "a": 0,
    "w": "Store it in its ears and eat only a little."
   },
   {
    "q": "Who remembered Yusuf?",
    "o": [
     "The wine-maker",
     "The King’s wife",
     "A guard"
    ],
    "a": 0,
    "w": "The freed wine-maker remembered him after a long time."
   },
   {
    "q": "What did the wine-maker call Yusuf?",
    "o": [
     "O man of truth",
     "O prisoner",
     "O stranger"
    ],
    "a": 0,
    "w": "He called him siddiq, a man of truth."
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
  "big": "Yusuf would not leave prison until his name was cleared. The lady admitted it was her fault. The King honoured Yusuf, and Yusuf asked to be put in charge of Egypt’s food stores. Allah raised him from prison to the palace.",
  "remember": [
   "Yusuf told the messenger: go back and ask the King about the women who cut their hands.",
   "The King said: today you are honoured and trusted with us.",
   "He cared about his good name more than leaving prison.",
   "Yusuf said: put me in charge of the storehouses, for I am a knowing guardian.",
   "The women said: Allah forbid! We know nothing bad about him.",
   "Two qualities: knowing what to do, and keeping things safe."
  ],
  "more": [
   {
    "t": "Your good name matters",
    "p": "Yusuf could have walked out of prison at once. But he wanted everyone to know he was innocent. A good name and honesty are precious."
   },
   {
    "t": "Asking for a job to help people",
    "p": "Yusuf asked for the job because he knew he could do it well and help everyone get through the hard years. Using our skills to help others is a good thing."
   },
   {
    "t": "Polite even now",
    "p": "Yusuf did not say “ask about that lady who lied”. He asked about “the women who cut their hands”. He was careful not to name or shame her."
   },
   {
    "t": "From the well to the palace",
    "p": "Well, slavery, prison, and now the palace. Each test was bigger than the last, and each reward was sweeter. That is the story of Yusuf’s life."
   },
   {
    "t": "Three kinds of soul",
    "l": [
     "The soul that pushes us to do wrong.",
     "The soul that blames itself after doing wrong, and wants to do better.",
     "The soul at peace, close to Allah."
    ]
   }
  ],
  "home": "If you ever do something wrong, be brave like the lady was at the end: tell the truth and say sorry.",
  "game": {
   "type": "order",
   "title": "Clearing Yusuf’s name",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The King says: bring him to me",
    "Yusuf says: first ask about the women",
    "The King asks the women",
    "The women say: we know nothing bad about him",
    "The lady admits it was her fault",
    "Yusuf is shown to be innocent"
   ]
  },
  "quiz": [
   {
    "q": "Why didn’t Yusuf leave prison straight away?",
    "o": [
     "He wanted his name cleared first",
     "He liked prison",
     "He was asleep"
    ],
    "a": 0,
    "w": "He wanted everyone to know he was innocent."
   },
   {
    "q": "What job did Yusuf ask for?",
    "o": [
     "In charge of the storehouses",
     "Captain of the army",
     "Chief gardener"
    ],
    "a": 0,
    "w": "He asked to look after Egypt’s food stores."
   },
   {
    "q": "What did the women say about Yusuf?",
    "o": [
     "We know nothing bad about him",
     "He is a liar",
     "We never met him"
    ],
    "a": 0,
    "w": "They said: Allah forbid, we know nothing bad about him."
   },
   {
    "q": "How did Yusuf describe himself?",
    "o": [
     "A knowing guardian",
     "The strongest man",
     "The King’s son"
    ],
    "a": 0,
    "w": "He said: I am a knowing guardian."
   },
   {
    "q": "What did the wife of al-‘Aziz admit?",
    "o": [
     "It was her fault, and Yusuf is truthful",
     "Yusuf was to blame",
     "She had forgotten"
    ],
    "a": 0,
    "w": "She said: it was I who tried, and he is truthful."
   },
   {
    "q": "What did the King say to Yusuf?",
    "o": [
     "Today you are honoured and trusted",
     "Go back to prison",
     "Leave Egypt"
    ],
    "a": 0,
    "w": "Today you are highly esteemed and trusted by us."
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
  "big": "The famine brought Yusuf’s brothers to Egypt for food. Yusuf knew them, but they did not know him. He asked them to bring their youngest brother next time. Ya‘qub let Binyamin go only after a promise by Allah, and told his sons to enter the city through different gates.",
  "remember": [
   "The brothers came to Egypt to buy grain during the famine.",
   "The brothers said: send our brother with us, and we will look after him.",
   "Enter through different gates, not all through one.",
   "Yusuf recognised them, but they did not recognise him.",
   "Those were the same words they had said about Yusuf long ago.",
   "It would help them avoid attention and the evil eye."
  ],
  "more": [
   {
    "t": "Why didn’t they know him?",
    "p": "The last time they saw Yusuf he was a little boy. Now he was a grown man and a great minister of Egypt. They could never have imagined that their little brother was alive, let alone in charge of Egypt’s food."
   },
   {
    "t": "Not stung twice",
    "p": "The Prophet ﷺ said a believer is not stung twice from the same hole. Ya‘qub had been hurt once by trusting his sons, so he was careful the second time."
   },
   {
    "t": "The evil eye is real",
    "p": "The Prophet ﷺ said: the evil eye is real. It comes from jealousy. In Surah al-Falaq we ask Allah to protect us from the envier when he envies."
   },
   {
    "t": "Kindness, not revenge",
    "p": "Yusuf had the power to punish them. Instead he gave them full measure, extra food for the journey, and good hospitality."
   },
   {
    "t": "Al-Hafiz, the Guardian",
    "p": "Ya‘qub did not put his trust in his sons. He put it in Allah, the best Guardian. We can call on Allah by this name when we worry about people we love."
   },
   {
    "t": "Say “ma sha’ Allah”",
    "p": "When we see something nice that someone else has, we should say “ma sha’ Allah” or “tabarak Allah” and ask Allah to bless them. We should never wish that they lose it."
   }
  ],
  "home": "Is there someone you could be kind to even though they were unkind to you once? Try it this week.",
  "game": {
   "type": "order",
   "title": "The first visit",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The famine reaches Palestine",
    "The brothers travel to Egypt",
    "Yusuf recognises them",
    "He gives them grain and hospitality",
    "He asks them to bring their youngest brother",
    "He hides their goods in their bags"
   ]
  },
  "quiz": [
   {
    "q": "Why did the brothers go to Egypt?",
    "o": [
     "To buy grain during the famine",
     "To find Yusuf",
     "To see the King"
    ],
    "a": 0,
    "w": "There was a famine, and Egypt had stored food."
   },
   {
    "q": "Why did the brothers want Binyamin to come?",
    "o": [
     "To get more grain from Egypt",
     "To play in the desert",
     "To visit the King"
    ],
    "a": 0,
    "w": "They could only get more grain if he came."
   },
   {
    "q": "How did Ya‘qub tell his sons to enter the city?",
    "o": [
     "Through different gates",
     "All through one gate",
     "At night"
    ],
    "a": 0,
    "w": "Through separate gates."
   },
   {
    "q": "Did the brothers recognise Yusuf?",
    "o": [
     "No, but he recognised them",
     "Yes, straight away",
     "Only Binyamin did"
    ],
    "a": 0,
    "w": "He knew them, but they did not know him."
   },
   {
    "q": "Why was Ya‘qub worried?",
    "o": [
     "They had promised to look after Yusuf before",
     "Binyamin was ill",
     "The road was flooded"
    ],
    "a": 0,
    "w": "They said the same words about Yusuf long ago."
   },
   {
    "q": "What did the Prophet ﷺ say about the evil eye?",
    "o": [
     "It is real",
     "It is a made-up story",
     "It only harms animals"
    ],
    "a": 0,
    "w": "The evil eye is real."
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
  "big": "Yusuf secretly told Binyamin: “I am your brother!” Then the King’s cup was found in Binyamin’s bag, so he had to stay in Egypt. The brothers begged Yusuf to take one of them instead, but Yusuf stayed calm and fair.",
  "remember": [
   "Yusuf told Binyamin: I am your brother, so don’t be sad about what they did.",
   "The brothers swore: we did not come to cause trouble, and we are not thieves.",
   "They said: if he stole, so did a brother of his before.",
   "Yusuf secretly put the King’s measuring cup in Binyamin’s bag.",
   "They were asked: what is the punishment if you are lying?",
   "Yusuf held back his anger and said nothing about who he was."
  ],
  "more": [
   {
    "t": "A happy secret",
    "p": "Binyamin was very young when Yusuf disappeared. Imagine his joy at meeting his brother again after so many years! Yusuf told him not to be sad about how the other brothers had treated him."
   },
   {
    "t": "Stealing is a big sin",
    "p": "The Prophet ﷺ said Allah curses the thief. Taking what belongs to others is a serious wrong. The brothers were right: this time they had not stolen anything."
   },
   {
    "t": "Staying calm",
    "p": "The brothers told a lie about Yusuf himself, right in front of him. Yusuf could have shouted, but he stayed calm and kept his plan. Sometimes being quiet is the wiser choice."
   },
   {
    "t": "Part of Allah’s plan",
    "p": "Yusuf planned a way to keep Binyamin with him in Egypt. Allah says later: this is how We planned for Yusuf."
   },
   {
    "t": "Allah’s clever plan",
    "p": "Under Egypt’s law, Yusuf could not have kept Binyamin. But the brothers chose their own family rule, and that let Binyamin stay. Allah says: this is how We planned for Yusuf."
   },
   {
    "t": "Careful words",
    "p": "Yusuf did not say “the one who stole”, because Binyamin had not stolen. He said “the one with whom we found our property”. A prophet never lies."
   }
  ],
  "home": "Is there someone in your family you haven’t spoken to for a while? Call them or send them a kind message.",
  "game": {
   "type": "order",
   "title": "At the caravan",
   "help": "Tap the events in the order they happened.",
   "items": [
    "Yusuf takes Binyamin aside",
    "He says: I am your brother",
    "The cup is placed in Binyamin’s bag",
    "A caller shouts: you are thieves!",
    "The brothers ask: what have you lost?",
    "A camel-load of grain is offered as a reward"
   ]
  },
  "quiz": [
   {
    "q": "What did Yusuf tell Binyamin?",
    "o": [
     "I am your brother",
     "You must leave Egypt",
     "I am the King"
    ],
    "a": 0,
    "w": "He told him: I am your brother."
   },
   {
    "q": "What rule did the brothers give for a thief?",
    "o": [
     "He stays as a servant",
     "He pays one coin",
     "He is let go"
    ],
    "a": 0,
    "w": "In their land, the thief became a servant of the one he stole from."
   },
   {
    "q": "What did the brothers say about Binyamin’s brother?",
    "o": [
     "That he had stolen before",
     "That he was a king",
     "That he was lost"
    ],
    "a": 0,
    "w": "They falsely said he had stolen before."
   },
   {
    "q": "What went missing?",
    "o": [
     "The King’s measuring cup",
     "A camel",
     "A ring"
    ],
    "a": 0,
    "w": "The King’s measuring cup."
   },
   {
    "q": "Whose bag was the cup found in?",
    "o": [
     "Binyamin’s",
     "The eldest brother’s",
     "Nobody’s"
    ],
    "a": 0,
    "w": "It came out of Binyamin’s bag."
   },
   {
    "q": "What did Yusuf do when he heard their lie?",
    "o": [
     "He stayed calm and kept his secret",
     "He shouted at them",
     "He told them who he was"
    ],
    "a": 0,
    "w": "He held back his anger."
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
  "big": "Now Ya‘qub had lost three sons, but he still said: beautiful patience, and perhaps Allah will bring them all back. He cried for Yusuf, complained only to Allah, and told his sons: go and search, and never lose hope in Allah’s mercy.",
  "remember": [
   "The eldest said: remember your promise to your father, and how you failed him about Yusuf.",
   "Ya‘qub said: oh, my sorrow for Yusuf!",
   "He stayed in Egypt until his father allowed him, or Allah decided.",
   "His eyes turned white from crying, but he held his sadness inside.",
   "The others said to their father: your son stole. Ask the city and the caravan.",
   "His sons said: you will make yourself ill thinking of Yusuf."
  ],
  "more": [
   {
    "t": "Feeling sorry for the past",
    "p": "The eldest brother remembered what they had done to Yusuf and felt sorry. He did not want to break his father’s heart again."
   },
   {
    "t": "Crying is not weakness",
    "p": "Ya‘qub cried, and his patience was still beautiful. When the Prophet’s ﷺ baby son Ibrahim died, he cried too and said: the eyes shed tears and the heart is sad, but we only say what pleases our Lord."
   },
   {
    "t": "Hiding faults, praising good",
    "p": "When this brother did something wrong long ago, Allah just said “one of them”. Now that he did something good, Allah calls him “the eldest”. The Prophet ﷺ also praised good deeds by name and did not name people who made mistakes."
   },
   {
    "t": "Complain to Allah, not about Allah",
    "p": "It is good to tell Allah about our sadness, as Ya‘qub did. What we must not do is complain about Allah, as if He were unfair."
   },
   {
    "t": "The boy who cried wolf",
    "p": "This time the brothers were telling the truth, but it was hard for their father to believe them. Lies make it hard for people to trust us later."
   }
  ],
  "home": "If you ever make a mistake, say sorry and try to put it right, like the eldest brother tried to do.",
  "game": {
   "type": "sort",
   "title": "Good or not good?",
   "help": "Is this a good way to deal with sadness, or not?",
   "buckets": [
    "Good",
    "Not good"
   ],
   "items": [
    [
     "Telling Allah about your sadness",
     0
    ],
    [
     "Saying Allah is unfair",
     1
    ],
    [
     "Crying when you are sad",
     0
    ],
    [
     "Giving up hope in Allah’s mercy",
     1
    ],
    [
     "Asking Allah for help",
     0
    ],
    [
     "Keeping hope and searching for a way",
     0
    ]
   ]
  },
  "quiz": [
   {
    "q": "Who stayed behind in Egypt?",
    "o": [
     "The eldest brother",
     "Ya‘qub",
     "The youngest brother"
    ],
    "a": 0,
    "w": "The eldest stayed until his father allowed him to return."
   },
   {
    "q": "What happened to Ya‘qub’s eyes?",
    "o": [
     "They turned white from crying",
     "They turned blue",
     "Nothing happened"
    ],
    "a": 0,
    "w": "His eyes turned white from sorrow."
   },
   {
    "q": "Why was it hard for Ya‘qub to believe them?",
    "o": [
     "They had lied to him before",
     "They spoke too quietly",
     "They were too tired"
    ],
    "a": 0,
    "w": "Their lie about Yusuf made it hard to trust them."
   },
   {
    "q": "To whom did Ya‘qub complain?",
    "o": [
     "Only to Allah",
     "To his neighbours",
     "To the King"
    ],
    "a": 0,
    "w": "I complain of my grief only to Allah."
   },
   {
    "q": "What did Ya‘qub say again?",
    "o": [
     "Beautiful patience",
     "I give up",
     "Go away"
    ],
    "a": 0,
    "w": "Fa-sabrun jamil: beautiful patience."
   },
   {
    "q": "What did Ya‘qub tell his sons to do?",
    "o": [
     "Search for Yusuf and his brother",
     "Stay at home",
     "Forget Yusuf"
    ],
    "a": 0,
    "w": "Go and search, and never lose hope."
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
  "big": "On their third visit, Yusuf told his brothers who he was. They said sorry, and he forgave them straight away: “No blame on you today.” Then he sent his shirt home to bring back his father’s sight.",
  "remember": [
   "The brothers said: hard times have hit us, and our goods are poor. Please be kind to us.",
   "The brothers admitted: we were truly wrong.",
   "Yusuf asked: do you remember what you did to Yusuf and his brother when you did not know better?",
   "Yusuf said: no blame on you today. Allah will forgive you. He is the Most Merciful.",
   "They said: are you really Yusuf?",
   "Years later, the Prophet ﷺ said the same words to the people of Makkah."
  ],
  "more": [
   {
    "t": "Kind even now",
    "p": "Yusuf did not shout at them. He said “when you did not know better”, giving them an easy way to feel sorry. He spoke about himself as “Yusuf”, so it would not feel like an attack."
   },
   {
    "t": "Saying sorry is the first step",
    "p": "The brothers finally said: we were wrong. To make tawbah, we first have to admit our mistake."
   },
   {
    "t": "All from Allah",
    "p": "Yusuf did not say “look how powerful I am”. He said: Allah has been kind to us. Everything good comes from Allah."
   },
   {
    "t": "Forgiving completely",
    "p": "Yusuf did not say “I will think about it” or keep reminding them. He forgave them straight away and completely."
   },
   {
    "t": "The message of the whole surah",
    "p": "Yusuf said: whoever fears Allah and is patient, Allah will not waste their reward. That is the story of his whole life in one sentence."
   }
  ],
  "home": "Learn this line by heart: “Whoever fears Allah and is patient, Allah never wastes the reward of those who do good.”",
  "game": {
   "type": "match",
   "title": "The three shirts",
   "help": "Tap a shirt on the left, then what it did on the right.",
   "pairs": [
    [
     "The shirt with false blood",
     "The brothers’ lie"
    ],
    [
     "The shirt torn from the back",
     "Showed Yusuf was innocent"
    ],
    [
     "The shirt sent home",
     "Brought back Ya‘qub’s sight"
    ],
    [
     "“No blame on you today”",
     "Yusuf’s forgiveness"
    ],
    [
     "The Conquest of Makkah",
     "The Prophet ﷺ said the same words"
    ]
   ]
  },
  "quiz": [
   {
    "q": "What did the brothers ask the minister for?",
    "o": [
     "To be kind and give them full measure",
     "A new house",
     "A job in the palace"
    ],
    "a": 0,
    "w": "They were poor and asked for kindness."
   },
   {
    "q": "What did the brothers admit?",
    "o": [
     "That they had been wrong",
     "That they were tired",
     "That they were lost"
    ],
    "a": 0,
    "w": "They said: we have truly been sinful."
   },
   {
    "q": "What question did Yusuf ask them?",
    "o": [
     "Do you remember what you did to Yusuf and his brother?",
     "Where are your camels?",
     "How old are you?"
    ],
    "a": 0,
    "w": "He asked about what they had done."
   },
   {
    "q": "What did Yusuf say to them?",
    "o": [
     "No blame on you today",
     "Go to prison",
     "Never come back"
    ],
    "a": 0,
    "w": "No blame on you today. Allah will forgive you."
   },
   {
    "q": "Who did Yusuf say had been kind to them?",
    "o": [
     "Allah",
     "The King",
     "His brothers"
    ],
    "a": 0,
    "w": "Allah has been kind to us."
   },
   {
    "q": "Who said Yusuf’s words again in Makkah?",
    "o": [
     "The Prophet Muhammad ﷺ",
     "Abu Bakr",
     "The King of Egypt"
    ],
    "a": 0,
    "w": "He forgave the people of Makkah with Yusuf’s words."
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
  "big": "Ya‘qub smelled Yusuf’s scent from far away, and the shirt brought back his sight. The whole family came to Egypt and bowed to Yusuf, just like the stars, the sun and the moon in his dream. Then Yusuf made a beautiful du‘a: let me die as a Muslim.",
  "remember": [
   "Ya‘qub said: I sense the smell of Yusuf.",
   "Yusuf welcomed his parents: enter Egypt safely, if Allah wills.",
   "My Lord, You have given me some power and taught me the meaning of dreams.",
   "The family said: you are still lost in your old idea.",
   "He raised his parents onto the throne.",
   "O Creator of the heavens and the earth!"
  ],
  "more": [
   {
    "t": "Who brought the good news?",
    "p": "Many scholars said the son who carried the shirt with good news was the same one who once carried the shirt with false blood. Imagine how he felt!"
   },
   {
    "t": "Bowing then and now",
    "p": "In the law of Ya‘qub, bowing down to show respect was allowed. In our Islam it is not: we bow and prostrate only to Allah. When Mu‘adh once bowed to the Prophet ﷺ, he told him: don’t do that."
   },
   {
    "t": "Thank Allah first",
    "p": "Yusuf began by thanking Allah and praising Him, and only then asked. Allah says: if you are grateful, I will give you more."
   },
   {
    "t": "Saying sorry to their father",
    "p": "The brothers had already said sorry to Yusuf. Now they said sorry to their father too. The Prophet ﷺ said: feeling sorry is part of repentance."
   },
   {
    "t": "Yusuf’s good manners",
    "p": "Yusuf thanked Allah for getting him out of prison, but he did not mention the well. Talking about the well would have embarrassed his brothers. He even blamed Shaytan, not them, for what went wrong."
   },
   {
    "t": "The most important wish",
    "p": "Yusuf had power, a palace and his family back. But what he asked for was to die as a Muslim. In the end, that is what matters most."
   }
  ],
  "home": "Try to wake up a little before Fajr one day this week and make du‘a, like Ya‘qub did for his sons.",
  "game": {
   "type": "match",
   "title": "The dream comes true",
   "help": "Tap a part of the dream on the left, then who it was on the right.",
   "pairs": [
    [
     "The eleven stars",
     "Yusuf’s eleven brothers"
    ],
    [
     "The sun and the moon",
     "Yusuf’s parents"
    ],
    [
     "Bowing down",
     "Showing respect, as their law allowed"
    ],
    [
     "Al-Latif",
     "Allah, the Subtle and Kind"
    ],
    [
     "The well",
     "Not mentioned, out of kindness"
    ]
   ]
  },
  "quiz": [
   {
    "q": "What did Ya‘qub sense when the caravan left Egypt?",
    "o": [
     "The smell of Yusuf",
     "Rain coming",
     "A storm"
    ],
    "a": 0,
    "w": "He said: I sense the smell of Yusuf."
   },
   {
    "q": "Where did Yusuf raise his parents?",
    "o": [
     "Onto the throne",
     "Onto a camel",
     "Onto a ship"
    ],
    "a": 0,
    "w": "He raised his parents onto the throne."
   },
   {
    "q": "How did Yusuf begin his du‘a?",
    "o": [
     "By thanking Allah for His blessings",
     "By asking for gold",
     "By complaining"
    ],
    "a": 0,
    "w": "Thank and praise Allah first, then ask."
   },
   {
    "q": "What happened when the shirt was put over his face?",
    "o": [
     "He could see again",
     "He fell asleep",
     "Nothing"
    ],
    "a": 0,
    "w": "His sight came back."
   },
   {
    "q": "Which dream came true?",
    "o": [
     "The eleven stars, the sun and the moon",
     "The seven fat cows",
     "The bread and the birds"
    ],
    "a": 0,
    "w": "His childhood dream."
   },
   {
    "q": "What did Yusuf ask to die as?",
    "o": [
     "A Muslim",
     "A king",
     "A rich man"
    ],
    "a": 0,
    "w": "Let me die as a Muslim."
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
  "big": "Allah reminds the Prophet ﷺ that this story was news only Allah knew. He tells him to say: this is my way, I call to Allah. The surah ends: in their stories is a lesson for people who think.",
  "remember": [
   "This story is from the unseen, which Allah revealed to the Prophet ﷺ.",
   "People pass by Allah’s signs in the heavens and the earth without thinking.",
   "Allah sent messengers from among the people of the towns.",
   "He was not there when the brothers plotted.",
   "Many say they believe in Allah but also worship others.",
   "Travel and look at what happened to those who rejected them."
  ],
  "more": [
   {
    "t": "How could he know?",
    "p": "Makkah was a small town. Very few people could read, and there were no Bibles in Arabic. The secret plan of the brothers was known to nobody but them. The Prophet ﷺ could only know it because Allah revealed it."
   },
   {
    "t": "Signs everywhere",
    "p": "The sun, the moon, the sea, the mountains, even our own bodies: all are signs of Allah. Let’s stop and think about them."
   },
   {
    "t": "Help comes at last",
    "p": "The prophets were patient for a very long time, and then Allah’s help came. Allah saved the Prophet ﷺ many times too. So never give up."
   },
   {
    "t": "Not for money",
    "p": "Prophets never asked people to pay them. The Prophet ﷺ lived simply, sleeping on a mat of palm leaves. When ‘Umar cried at this, he said: are you not happy that they have this world and we have the Hereafter?"
   },
   {
    "t": "Believing is not enough",
    "p": "The people of Makkah believed Allah created them, but they also prayed to idols. True iman means worshipping Allah alone."
   },
   {
    "t": "Beginning and end",
    "p": "The surah began: “We tell you the best of stories.” It ends: “In their stories is a lesson.” First we listen to the story, then we think about its lessons."
   }
  ],
  "home": "Ask a grown-up what “Dhikr” means, and tell them it is also a name of the Qur’an.",
  "game": {
   "type": "match",
   "title": "Beginning and end",
   "help": "Tap the beginning on the left, then the matching end on the right.",
   "pairs": [
    [
     "“The best of stories” (verse 3)",
     "“In their stories is a lesson” (verse 111)"
    ],
    [
     "Signs for those who ask",
     "A lesson for people who think"
    ],
    [
     "Yusuf’s dream",
     "The dream comes true"
    ],
    [
     "The Prophet ﷺ is sad",
     "Allah’s help comes at last"
    ]
   ]
  },
  "quiz": [
   {
    "q": "How did the Prophet ﷺ know the story of Yusuf?",
    "o": [
     "Allah revealed it to him",
     "He read it in a book",
     "His friends told him"
    ],
    "a": 0,
    "w": "It is news of the unseen, revealed by Allah."
   },
   {
    "q": "What do many people do with Allah’s signs?",
    "o": [
     "Walk past them without thinking",
     "Write them down",
     "Hide them"
    ],
    "a": 0,
    "w": "They pass them by without reflecting."
   },
   {
    "q": "Were the messengers before the Prophet ﷺ also rejected?",
    "o": [
     "Yes",
     "No",
     "Only one"
    ],
    "a": 0,
    "w": "Allah reminds him that they were too."
   },
   {
    "q": "Which part of the story was most secret?",
    "o": [
     "The brothers’ plan",
     "The King’s dream",
     "The banquet"
    ],
    "a": 0,
    "w": "Nobody but the brothers knew it."
   },
   {
    "q": "How did the Prophet ﷺ call to Allah?",
    "o": [
     "With clear knowledge",
     "With shouting",
     "With money"
    ],
    "a": 0,
    "w": "‘Ala basirah: with clear sight."
   },
   {
    "q": "What came to the messengers at last?",
    "o": [
     "Allah’s help",
     "A storm",
     "Gold"
    ],
    "a": 0,
    "w": "Our help came to them."
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
  "big": "Surah Yusuf is full of lessons for our lives: honour our parents, beware of jealousy, turn to Allah when tempted, forgive, and never give up. The surah is even built like a ring around the King’s dream: another sign that it is from Allah.",
  "remember": [
   "Read the stories of the Qur’an and share them.",
   "Jealousy can make people do terrible things.",
   "Say sorry to people you have hurt, and to Allah.",
   "The middle of the ring is the King’s dream.",
   "Parents should be fair with their children.",
   "Gossip is a bad habit. Stand up for people who are not there."
  ],
  "more": [
   {
    "t": "Lessons we learned",
    "l": [
     "Allah’s stories are the best stories.",
     "Knowledge is a blessing from Allah.",
     "Be thankful for what you have, and happy with what Allah did not give you.",
     "A believer is careful and thinks ahead.",
     "Beautiful patience means taking your sadness to Allah."
    ]
   },
   {
    "t": "Lessons we learned",
    "l": [
     "Inner beauty, good character, lasts longer than outer beauty.",
     "A bad thought is not a sin, but acting on it is.",
     "Patience always tastes sweet in the end.",
     "Don’t hurt people’s feelings.",
     "Being generous opens people’s hearts."
    ]
   },
   {
    "t": "Lessons we learned",
    "l": [
     "Good things are from Allah; Shaytan tries to cause trouble.",
     "Shaytan loves to break up families.",
     "We learn through failures before success.",
     "Allah can make even enemies into friends.",
     "Allah saves the righteous even when things look hopeless."
    ]
   },
   {
    "t": "Matching pairs",
    "l": [
     "Yusuf’s dream ↔ The dream comes true.",
     "Sold as a slave in Egypt ↔ In charge of Egypt’s storehouses.",
     "Tempted by the minister’s wife ↔ She says he is innocent.",
     "Put in prison ↔ Let out of prison.",
     "Explains the prisoners’ dreams ↔ Explains the King’s dream."
    ]
   },
   {
    "t": "Honouring parents",
    "p": "Yusuf went out of the city to welcome his parents and raised them onto the throne. After Allah, nobody deserves our respect more than our parents."
   },
   {
    "t": "Calling to Islam",
    "p": "Yusuf first showed his good character, then waited for the right moment, and then started with tawhid. That is how we should share Islam."
   }
  ],
  "home": "Do one thing to honour your parents today without being asked.",
  "game": {
   "type": "match",
   "title": "Complete the ring",
   "help": "Tap a part on the left, then its matching pair on the right.",
   "pairs": [
    [
     "Yusuf’s dream",
     "The dream comes true"
    ],
    [
     "Sold as a slave in Egypt",
     "In charge of the storehouses"
    ],
    [
     "Tempted by the minister’s wife",
     "She says he is innocent"
    ],
    [
     "Put in prison",
     "Let out of prison"
    ],
    [
     "Explains the prisoners’ dreams",
     "Explains the King’s dream"
    ],
    [
     "The prisoner forgets him",
     "The prisoner remembers him"
    ]
   ]
  },
  "quiz": [
   {
    "q": "How did Yusuf honour his parents?",
    "o": [
     "He raised them onto the throne",
     "He sent them away",
     "He forgot them"
    ],
    "a": 0,
    "w": "He welcomed them and raised them up."
   },
   {
    "q": "What should we do when we are tempted to do wrong?",
    "o": [
     "Turn to Allah straight away",
     "Do it quickly",
     "Hide it"
    ],
    "a": 0,
    "w": "Yusuf said: Allah is my refuge."
   },
   {
    "q": "Is “do wrong now, say sorry later” real tawbah?",
    "o": [
     "No",
     "Yes",
     "Sometimes"
    ],
    "a": 0,
    "w": "Real tawbah needs regret and stopping."
   },
   {
    "q": "What is in the middle of the ring?",
    "o": [
     "The King’s dream",
     "The well",
     "The banquet"
    ],
    "a": 0,
    "w": "Everything turns around the King’s dream."
   },
   {
    "q": "Why should we not show off our blessings?",
    "o": [
     "It can make others jealous",
     "It is boring",
     "It costs money"
    ],
    "a": 0,
    "w": "Ya‘qub warned Yusuf not to tell his brothers."
   },
   {
    "q": "Is a bad thought a sin by itself?",
    "o": [
     "No, acting on it is",
     "Yes, always",
     "Only on Fridays"
    ],
    "a": 0,
    "w": "We are not punished for passing thoughts we don’t act on."
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
