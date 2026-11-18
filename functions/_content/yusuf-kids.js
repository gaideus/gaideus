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
  "short": "The surah begins, and Yusuf has a dream",
  "big": "Allah calls the story of Yusuf “the best of stories”. It begins when young Yusuf dreams that eleven stars, the sun and the moon bow down to him. His father Ya‘qub knows it is a special dream, and tells him to keep it secret from his brothers.",
  "remember": [
   "The surah starts with three letters: Alif, Lam, Ra. Only Allah knows their full meaning.",
   "Yusuf was the son of Ya‘qub, son of Ishaq, son of Ibrahim: four prophets in one family.",
   "The Qur’an is a clear Book. Anyone who wants its guidance can find it.",
   "The dream: eleven stars, the sun and the moon bowing down to Yusuf.",
   "Allah sent the Qur’an down in Arabic so that we may understand.",
   "Ya‘qub said: do not tell your brothers, or they may plot against you."
  ],
  "more": [
   {
    "t": "Why does Allah tell us stories?",
    "p": "The Arabic word for story, qissah, comes from a word that means following footprints in the sand. When we listen to someone’s story, we walk in their footsteps. Stories show us how to live our faith, and they make our iman stronger."
   },
   {
    "t": "A noble family",
    "p": "The Prophet ﷺ was asked who the most noble person was. He said it was Yusuf: the noble one, son of a noble one, son of a noble one, son of a noble one. His father, grandfather and great-grandfather were all prophets."
   },
   {
    "t": "A gift in a hard time",
    "p": "Allah sent this surah when life was very hard for the Prophet ﷺ. People were mocking him and hurting him. The story of Yusuf comforted him: just as Yusuf won in the end, he would too."
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
    "t": "The big lessons",
    "l": [
     "Allah is always watching over His servants.",
     "Evil never wins in the end.",
     "Those who are patient and do good come out on top."
    ]
   }
  ],
  "home": "Tell someone at home: “Allah calls the story of Yusuf the best of stories.” Ask them what they already know about Prophet Yusuf.",
  "game": {
   "type": "match",
   "title": "Who is who?",
   "help": "Tap a name on the left, then who it is on the right.",
   "pairs": [
    [
     "Ya‘qub",
     "Yusuf’s father"
    ],
    [
     "Ishaq",
     "Yusuf’s grandfather"
    ],
    [
     "Ibrahim",
     "Yusuf’s great-grandfather"
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
     "The best of stories",
     "The longest story",
     "A sad story"
    ],
    "a": 0,
    "w": "Allah calls it “the best of stories”."
   },
   {
    "q": "What did Yusuf see in his dream?",
    "o": [
     "Eleven stars, the sun and the moon bowing to him",
     "A wolf in the desert",
     "A river full of fish"
    ],
    "a": 0,
    "w": "Eleven stars, the sun and the moon bowed down to him."
   },
   {
    "q": "Which letters begin Surah Yusuf?",
    "o": [
     "Alif, Lam, Ra",
     "Ya, Sin",
     "Qaf"
    ],
    "a": 0,
    "w": "It begins with Alif, Lam, Ra."
   },
   {
    "q": "Who did Yusuf tell about his dream?",
    "o": [
     "His father, Ya‘qub",
     "His brothers",
     "A king"
    ],
    "a": 0,
    "w": "He told his father, Prophet Ya‘qub."
   },
   {
    "q": "In which language did Allah send down the Qur’an?",
    "o": [
     "Arabic",
     "Persian",
     "Greek"
    ],
    "a": 0,
    "w": "An Arabic Qur’an, so that we may understand."
   },
   {
    "q": "Why did Ya‘qub say not to tell the brothers?",
    "o": [
     "They might become jealous and plot against him",
     "They were asleep",
     "Dreams must always be kept secret"
    ],
    "a": 0,
    "w": "He feared they would become jealous and plot against Yusuf."
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
  "big": "Yusuf’s ten older brothers became jealous. They thought their father loved Yusuf and his little brother Binyamin more than them, and made a terrible plan to get rid of Yusuf.",
  "remember": [
   "Yusuf had ten older brothers. Binyamin was his brother from the same mother.",
   "The brothers said: our father loves Yusuf and his brother more, even though we are a strong group.",
   "They planned to kill Yusuf or send him far away. One brother said: do not kill him, put him in a well.",
   "They told themselves: “We will be good people afterwards.” This is a trick of Shaytan.",
   "Ya‘qub said: I fear a wolf may eat him."
  ],
  "more": [
   {
    "t": "Love is in the heart",
    "p": "The brothers could only say that their father loved Yusuf more. They could not say he gave Yusuf more things. Parents must be fair with gifts, but no one can control how much love is in the heart."
   },
   {
    "t": "Shaytan’s trick",
    "p": "Shaytan says: “Do the wrong thing now and be good later.” But one wrong leads to another. After hurting Yusuf, the brothers had to lie, and then swear that the lie was true."
   },
   {
    "t": "A good wish, a wrong way",
    "p": "The brothers wanted their father’s love. That is a good thing to want. But they chose a haram way to get it, and they lost. Their father’s heart broke, and he missed Yusuf even more."
   },
   {
    "t": "Asking their father",
    "p": "The brothers said: “Send Yusuf with us tomorrow to play. We will look after him.” Ya‘qub felt in his heart that something was wrong. He said it would make him sad, and that he feared a wolf. In the end, he let Yusuf go."
   }
  ],
  "home": "The next time you feel jealous of a brother, sister or friend, make a du‘a for them and give them salam. The Prophet ﷺ taught us that spreading salam makes love grow.",
  "game": {
   "type": "order",
   "title": "The plan, step by step",
   "help": "Tap the events in the order they happened.",
   "items": [
    "The brothers feel jealous of Yusuf",
    "They talk about getting rid of him",
    "One brother says: do not kill him, use a well",
    "They ask their father to let Yusuf come and play",
    "Ya‘qub says he fears a wolf",
    "Ya‘qub lets Yusuf go with them"
   ]
  },
  "quiz": [
   {
    "q": "Why were the brothers jealous?",
    "o": [
     "They thought their father loved Yusuf and Binyamin more",
     "Yusuf had more money",
     "Yusuf was taller than them"
    ],
    "a": 0,
    "w": "They thought their father loved Yusuf and his brother more."
   },
   {
    "q": "What did one brother suggest instead of killing Yusuf?",
    "o": [
     "Putting him in a well",
     "Selling his shirt",
     "Sending him to school"
    ],
    "a": 0,
    "w": "He said: do not kill him, put him in a well."
   },
   {
    "q": "Which animal did Ya‘qub say he feared?",
    "o": [
     "A wolf",
     "A lion",
     "A snake"
    ],
    "a": 0,
    "w": "He said he feared a wolf might eat Yusuf."
   },
   {
    "q": "“Do wrong now and be good later” is a trick of…",
    "o": [
     "Shaytan",
     "A good friend",
     "The angels"
    ],
    "a": 0,
    "w": "It is one of Shaytan’s tricks. One wrong leads to another."
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
  "big": "The brothers threw Yusuf into a dark well and came home with fake tears and a shirt with false blood. Ya‘qub answered with beautiful patience. Travellers found Yusuf and sold him in Egypt, where an important man took him into his home: all part of Allah’s plan.",
  "remember": [
   "In the well, Allah inspired Yusuf: one day you will tell them what they did, and they will not know who you are.",
   "A caravan stopped at the well. The water-boy let down his bucket and found Yusuf.",
   "The brothers came home in the evening, crying fake tears.",
   "They hid him and sold him for a few silver coins.",
   "Their story: we were racing, and a wolf ate Yusuf.",
   "The man who bought him said: take good care of him. He may be useful to us, or we may adopt him as a son."
  ],
  "more": [
   {
    "t": "Not alone in the dark",
    "p": "Allah put calm into Yusuf’s heart. The message meant three things: he would not die in the well, he would see his family again, and one day he would be the stronger one."
   },
   {
    "t": "From a well to a great house",
    "p": "Yusuf could have ended up with a cruel master. Instead, Allah lifted him from the bottom of a well and placed him in the home of an important minister of Egypt, called al-‘Aziz."
   },
   {
    "t": "Tears do not prove the truth",
    "p": "A famous judge called Shurayh once stayed calm while a woman cried loudly in front of him. His students were surprised. He said: the brothers of Yusuf cried too, and they were the ones who had done wrong. We judge by facts, not by tears."
   },
   {
    "t": "A few silver coins",
    "p": "The travellers sold Yusuf cheaply because he had cost them nothing, and they wanted to get rid of him quickly. People often do not value what they get for free. We should take care not to treat our Islam like that."
   },
   {
    "t": "Beautiful patience",
    "p": "Ya‘qub did not believe the story. He said: “Your souls have tempted you to do something.” Then he said he would have beautiful patience. That means not complaining to people, and taking your sadness to Allah."
   }
  ],
  "home": "Learn the words Ya‘qub said: “Allahu al-Musta‘an”, which means Allah is the One whose help I seek. Say them the next time something feels too hard.",
  "game": {
   "type": "order",
   "title": "Yusuf’s journey",
   "help": "Tap the events in the order they happened.",
   "items": [
    "Yusuf is alone in the well",
    "A caravan stops for water",
    "The water-boy finds Yusuf",
    "Yusuf is hidden and taken to Egypt",
    "He is sold for a few silver coins",
    "Al-‘Aziz tells his wife to take good care of him"
   ]
  },
  "quiz": [
   {
    "q": "What did Allah tell Yusuf in the well?",
    "o": [
     "One day you will remind them of what they did",
     "Climb out straight away",
     "Your brothers are coming back for you"
    ],
    "a": 0,
    "w": "Allah told him that one day he would remind them of this."
   },
   {
    "q": "Who found Yusuf in the well?",
    "o": [
     "Travellers in a caravan",
     "His brothers",
     "His father"
    ],
    "a": 0,
    "w": "A caravan of travellers found him."
   },
   {
    "q": "What did the brothers bring as “proof”?",
    "o": [
     "Yusuf’s shirt with false blood",
     "A wolf",
     "Yusuf’s shoes"
    ],
    "a": 0,
    "w": "They brought his shirt, stained with false blood."
   },
   {
    "q": "How much was Yusuf sold for?",
    "o": [
     "A few silver coins",
     "A chest of gold",
     "A hundred camels"
    ],
    "a": 0,
    "w": "He was sold cheaply, for a few silver coins."
   },
   {
    "q": "How did Ya‘qub answer?",
    "o": [
     "With beautiful patience",
     "With great shouting",
     "By leaving home"
    ],
    "a": 0,
    "w": "He said he would have beautiful patience and asked Allah for help."
   },
   {
    "q": "Which land was Yusuf taken to?",
    "o": [
     "Egypt",
     "Yemen",
     "Persia"
    ],
    "a": 0,
    "w": "He was taken to Egypt."
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
  "big": "When the lady of the house called Yusuf to do something very wrong, he said at once: “Allah is my refuge!” He ran to the door, she tore his shirt from behind, and the torn shirt showed that Yusuf was telling the truth.",
  "remember": [
   "The Prophet ﷺ said that Yusuf was given half of all beauty.",
   "Both of them raced to the door: Yusuf to escape from sin, and the lady to stop him.",
   "The lady of the house locked the doors and called Yusuf to sin.",
   "She tore his shirt from the back.",
   "Yusuf’s first words were “Ma‘adha Allah”: Allah is my refuge.",
   "She blamed Yusuf at once. Yusuf said: it was she who tried to make me do wrong."
  ],
  "more": [
   {
    "t": "A very hard test",
    "p": "Yusuf was a servant in her house, and she was a powerful lady. No one else was there, and the doors were locked. Saying no was hard and dangerous. But Yusuf still said no."
   },
   {
    "t": "Same action, different hearts",
    "p": "Two people ran to the same door. One was running away from sin, and the other was chasing it. We should not judge people only by what we see on the outside."
   },
   {
    "t": "Turn to Allah first",
    "p": "Yusuf did not trust in his own strength. He asked Allah for protection straight away. Allah tells us in the Qur’an: if Shaytan tempts you, seek refuge with Allah."
   },
   {
    "t": "One sin leads to another",
    "p": "The lady planned one sin. When she was caught, she told a lie and blamed an innocent person. The same thing happened to Yusuf’s brothers. Blaming others for our own wrong is what Iblis did."
   },
   {
    "t": "Allah is watching",
    "p": "The Qur’an says Yusuf saw a sign from his Lord. The strongest explanation is that he knew, with no doubt, that Allah was watching him. Even behind locked doors, Allah sees everything."
   }
  ],
  "home": "When no one can see you, remember: Allah sees me. Choose one moment today to do the right thing when nobody is looking.",
  "game": {
   "type": "sort",
   "title": "What did Yusuf do?",
   "help": "Did Yusuf do this, or not?",
   "buckets": [
    "Yusuf did this",
    "Yusuf did not do this"
   ],
   "items": [
    [
     "Said: Allah is my refuge",
     0
    ],
    [
     "Agreed to do wrong",
     1
    ],
    [
     "Remembered that Allah was watching",
     0
    ],
    [
     "Trusted only in his own strength",
     1
    ],
    [
     "Said: wrongdoers never succeed",
     0
    ],
    [
     "Forgot Allah because the doors were locked",
     1
    ]
   ]
  },
  "quiz": [
   {
    "q": "What were Yusuf’s first words when he was called to do wrong?",
    "o": [
     "Allah is my refuge",
     "I am afraid of your husband",
     "Maybe later"
    ],
    "a": 0,
    "w": "He said “Ma‘adha Allah”: Allah is my refuge."
   },
   {
    "q": "Where was Yusuf’s shirt torn?",
    "o": [
     "From the back",
     "From the front",
     "On the sleeve"
    ],
    "a": 0,
    "w": "It was torn from the back."
   },
   {
    "q": "How much beauty was Yusuf given?",
    "o": [
     "Half of all beauty",
     "Just a little",
     "The surah does not say he was beautiful"
    ],
    "a": 0,
    "w": "The Prophet ﷺ said Yusuf was given half of all beauty."
   },
   {
    "q": "What did the torn shirt prove?",
    "o": [
     "Yusuf was running away and told the truth",
     "Yusuf was to blame",
     "Nothing at all"
    ],
    "a": 0,
    "w": "It showed Yusuf was running away, so he was truthful."
   },
   {
    "q": "What sign helped Yusuf to stay away from sin?",
    "o": [
     "Knowing for sure that Allah was watching him",
     "A letter from his father",
     "A loud noise outside"
    ],
    "a": 0,
    "w": "The strongest view is that he knew Allah was watching him."
   },
   {
    "q": "Who said to check the shirt?",
    "o": [
     "A witness from the lady’s own family",
     "Yusuf’s father",
     "The king of Egypt"
    ],
    "a": 0,
    "w": "A witness from her own family suggested it."
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
  "short": "Yusuf chooses Allah over everything",
  "big": "The women of the city gossiped, and the lady threatened Yusuf with prison. Yusuf made du‘a: he would rather be in prison than disobey Allah. Allah answered him, and Yusuf was sent to prison even though he was innocent.",
  "remember": [
   "Women in the city gossiped about the lady of the house.",
   "At her banquet, the women were so amazed by Yusuf that they cut their hands. They said: this is a noble angel!",
   "The lady said: obey me, or you will go to prison.",
   "Yusuf’s du‘a: “My Lord, prison is dearer to me than what they call me to.”",
   "Allah answered his du‘a. Yusuf was sent to prison even though he was innocent."
  ],
  "more": [
   {
    "t": "The harm of gossip",
    "l": [
     "Ghibah (backbiting): saying something true about a person that they would not like.",
     "Buhtan (slander): saying something untrue about a person.",
     "Namimah (carrying tales): passing on what someone said in order to cause trouble."
    ]
   },
   {
    "t": "Beauty on the inside",
    "p": "The lady herself said that Yusuf firmly refused. Yusuf was beautiful on the outside, and also on the inside: he was modest and had good character. Inner beauty matters most."
   },
   {
    "t": "Du‘a is the believer’s weapon",
    "p": "Yusuf said: “If You do not turn their plan away from me, I might give in.” He knew he needed Allah’s help. Allah answered him and turned their plan away."
   },
   {
    "t": "One test after another",
    "p": "First the well, then a comfortable home, then prison. Life is a series of tests. Each time we pass one, the reward grows. At the end of all the tests is Jannah."
   }
  ],
  "home": "This week, if someone starts to gossip, change the subject or say something good about the person.",
  "game": {
   "type": "match",
   "title": "Name it",
   "help": "Tap a word on the left, then its meaning on the right.",
   "pairs": [
    [
     "Ghibah",
     "Saying something true that a person would not like"
    ],
    [
     "Buhtan",
     "Saying something untrue about a person"
    ],
    [
     "Namimah",
     "Carrying tales to cause trouble"
    ],
    [
     "Du‘a",
     "Calling on Allah for help"
    ],
    [
     "Sabr",
     "Patience"
    ],
    [
     "Jannah",
     "The reward at the end of all the tests"
    ]
   ]
  },
  "quiz": [
   {
    "q": "What did the women do when they saw Yusuf?",
    "o": [
     "They cut their hands in amazement",
     "They ran away",
     "They fell asleep"
    ],
    "a": 0,
    "w": "They were so amazed that they cut their hands."
   },
   {
    "q": "What did Yusuf prefer to disobeying Allah?",
    "o": [
     "Prison",
     "Money",
     "Escaping to another land"
    ],
    "a": 0,
    "w": "He said prison was dearer to him than sin."
   },
   {
    "q": "What is backbiting (ghibah)?",
    "o": [
     "Saying something true about someone that they would not like",
     "Praising someone",
     "Keeping a secret"
    ],
    "a": 0,
    "w": "Saying something true about a person, behind their back, that they would not like."
   },
   {
    "q": "What happened after Yusuf made du‘a?",
    "o": [
     "Allah answered him and turned their plan away",
     "Nothing happened",
     "He was sent back to his father"
    ],
    "a": 0,
    "w": "Allah answered and protected him from their plan."
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
  "big": "In prison, two young men asked Yusuf about their dreams. First he told them about Allah, the One. Then he explained their dreams, and asked the man who would be freed to mention him to the King. But Shaytan made the man forget.",
  "remember": [
   "Two servants of the king went to prison with Yusuf.",
   "The wine-maker would be freed and serve drinks to the king again.",
   "One dreamt he was pressing grapes for wine. The other dreamt birds were eating bread from his head.",
   "The baker would be punished, and birds would eat from his head.",
   "They said: we can see that you are a good person.",
   "Yusuf said: the matter you asked about has been decided."
  ],
  "more": [
   {
    "t": "Good manners open hearts",
    "p": "The prisoners came to Yusuf because of his good character. People listen to someone who is kind and honest. Our good manners are the first way we show people Islam."
   },
   {
    "t": "Gentle with bad news",
    "p": "Yusuf did not say which man would be punished. He said “one of you”. When we have sad news to share, we should be gentle."
   },
   {
    "t": "Tawhid comes first",
    "p": "Yusuf spoke about Allah before he explained the dreams. The Prophet ﷺ taught the same when he sent Mu‘adh to Yemen: first call people to La ilaha illa Allah, then teach them prayer, then charity."
   },
   {
    "t": "Trust Allah and take the means",
    "p": "Yusuf asked the freed man for help. This is not wrong. Tawakkul means we trust Allah and also do what we can, just as the Prophet ﷺ made plans, made friends and asked for help."
   },
   {
    "t": "“O my two friends of the prison”",
    "p": "Yusuf called them his friends. He spoke kindly and asked them a simple question: is it better to have many gods, or One God who is in charge of everything? He spoke against idol worship, but he did not insult the prisoners."
   }
  ],
  "home": "Think of a friend or neighbour who is not Muslim. What is one kind thing you could do for them this week?",
  "game": {
   "type": "sort",
   "title": "What did Yusuf teach?",
   "help": "Is this part of Yusuf’s message, or not?",
   "buckets": [
    "Yusuf’s message",
    "Not his message"
   ],
   "items": [
    [
     "Allah is One",
     0
    ],
    [
     "Worship many gods",
     1
    ],
    [
     "My knowledge is from my Lord",
     0
    ],
    [
     "All religions are the same",
     1
    ],
    [
     "Only Allah decides",
     0
    ],
    [
     "Idols are just names people made up",
     0
    ]
   ]
  },
  "quiz": [
   {
    "q": "Why did the two prisoners come to Yusuf?",
    "o": [
     "They saw that he was a good person",
     "He asked them to",
     "They were his brothers"
    ],
    "a": 0,
    "w": "They said: we see that you are one of the good-doers."
   },
   {
    "q": "What did the wine-maker’s dream mean?",
    "o": [
     "He would serve the king again",
     "He would become king",
     "He would travel"
    ],
    "a": 0,
    "w": "He would be freed and serve the king."
   },
   {
    "q": "What did Yusuf talk about before explaining the dreams?",
    "o": [
     "Allah is One and should be worshipped alone",
     "The food in prison",
     "How to escape"
    ],
    "a": 0,
    "w": "He called them to tawhid first."
   },
   {
    "q": "What did Yusuf ask the freed man to do?",
    "o": [
     "Mention him to the king",
     "Bring him food",
     "Find his father"
    ],
    "a": 0,
    "w": "Mention me in the presence of your master."
   },
   {
    "q": "Where did Yusuf say his knowledge came from?",
    "o": [
     "His Lord taught him",
     "A book of magic",
     "His brothers"
    ],
    "a": 0,
    "w": "This is what my Lord has taught me."
   },
   {
    "q": "Who made the man forget?",
    "o": [
     "Shaytan",
     "The king",
     "Yusuf"
    ],
    "a": 0,
    "w": "Shaytan made him forget to mention Yusuf."
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
