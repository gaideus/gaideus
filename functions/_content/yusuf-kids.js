// Surah Yusuf, for learners aged 15 and under.
// Based on "Lessons from Surah Yusuf" by Dr Yasir Qadhi (Kube Publishing), retold in our own words.
// The whole book: Parts 1-13 and the conclusion (lessons 1-34). Same shape as LESSONS / FINAL in learn/index.html.
// Lives under functions/ so it is never served as a static file: only /api/content hands it out.

import { ayat, SOURCE } from "./yusuf-verses.js";

const LESSONS = [
/* ---------- Part 1: The Family of Ya‘qub ---------- */
{id:1,verses:[1,3],title:"The Best of Stories",short:"How Surah Yusuf begins",
 big:"Surah Yusuf is the story of Prophet Yusuf (peace be upon him). Allah Himself calls it “the best of stories”. It begins by telling us that the Qur’an is a clear Book, sent down in Arabic so that we can understand it.",
 remember:["The surah starts with three letters: Alif, Lam, Ra. Only Allah knows their full meaning.","The Qur’an is a clear Book. Anyone who wants its guidance can find it.","Allah sent the Qur’an down in Arabic so that we may understand.","Allah calls the story of Yusuf “the best of stories”. It is true, not a made-up tale.","The Prophet Muhammad ﷺ did not know this story until Allah revealed it to him."],
 more:[
  {t:"Why does Allah tell us stories?",p:"The Arabic word for story, qissah, comes from a word that means following footprints in the sand. When we listen to someone’s story, we walk in their footsteps. Stories show us how to live our faith, and they make our iman stronger."},
  {t:"A gift in a hard time",p:"Allah sent this surah when life was very hard for the Prophet ﷺ. People were mocking him and hurting him. The story of Yusuf comforted him: just as Yusuf won in the end, he would too."},
  {t:"The big lessons",l:["Allah is always watching over His servants.","Evil never wins in the end.","Those who are patient and do good come out on top."]}],
 home:"Tell someone at home: “Allah calls the story of Yusuf the best of stories.” Ask them what they already know about Prophet Yusuf.",
 game:{type:"sort",title:"True or not true?",help:"Is this true about the Qur’an and Surah Yusuf, or not?",buckets:["True","Not true"],items:[["The Qur’an was sent down in Arabic",0],["The stories in the Qur’an are made up",1],["The Qur’an is a clear Book",0],["The Prophet ﷺ already knew this story before it was revealed",1],["Allah calls this story the best of stories",0],["The surah begins with the letters Ya and Sin",1]]},
 quiz:[
  {q:"What does Allah call the story of Yusuf?",o:["The best of stories","The longest story","A sad story"],a:0,w:"Allah calls it “the best of stories”."},
  {q:"Which letters begin Surah Yusuf?",o:["Alif, Lam, Ra","Ya, Sin","Qaf"],a:0,w:"It begins with Alif, Lam, Ra."},
  {q:"In which language did Allah send down the Qur’an?",o:["Arabic","Persian","Greek"],a:0,w:"An Arabic Qur’an, so that we may understand."},
  {q:"Why did Allah send this surah to the Prophet ﷺ?",o:["To comfort him in a very hard time","To teach him how to trade","To tell him about Egypt’s rivers"],a:0,w:"It comforted him: like Yusuf, he would win in the end."}]},

{id:2,verses:[4,6],title:"Yusuf’s Dream",short:"Eleven stars, the sun and the moon",
 big:"When Yusuf was a young boy, he dreamt that eleven stars, the sun and the moon were bowing down to him. He told his father, Prophet Ya‘qub, who knew that this was a special dream from Allah.",
 remember:["Yusuf was the son of Ya‘qub, son of Ishaq, son of Ibrahim: four prophets in one family.","The dream: eleven stars, the sun and the moon bowing down to Yusuf.","Ya‘qub said: do not tell your brothers, or they may plot against you.","Ya‘qub said: Shaytan is a clear enemy to people.","Allah would choose Yusuf and teach him the meaning of dreams."],
 more:[
  {t:"A noble family",p:"The Prophet ﷺ was asked who the most noble person was. He said it was Yusuf: the noble one, son of a noble one, son of a noble one, son of a noble one. His father, grandfather and great-grandfather were all prophets."},
  {t:"Three kinds of dreams",l:["True dreams that come from Allah. A prophet’s dream is a message from Allah.","Bad dreams that come from Shaytan.","Dreams that come from our own thoughts."]},
  {t:"What did the dream mean?",p:"Most scholars said Yusuf was about seven years old. The eleven stars were his eleven brothers, and the sun and the moon were his parents. One day, Yusuf would be raised higher than all of them."},
  {t:"Jealousy eats good deeds",p:"Ya‘qub did not want the brothers to become jealous. The Prophet ﷺ said: beware of envy, for it eats up good deeds just as fire eats up wood. That is why we should not show off our blessings."}],
 home:"Is there something you like to show off? This week, thank Allah for it quietly instead.",
 game:{type:"match",title:"Who is who?",help:"Tap a name on the left, then who it is on the right.",pairs:[["Ya‘qub","Yusuf’s father"],["Ishaq","Yusuf’s grandfather"],["Ibrahim","Yusuf’s great-grandfather"],["The eleven stars","Yusuf’s brothers"],["The sun and the moon","Yusuf’s parents"],["Shaytan","A clear enemy to people"]]},
 quiz:[
  {q:"What did Yusuf see in his dream?",o:["Eleven stars, the sun and the moon bowing to him","A wolf in the desert","A river full of fish"],a:0,w:"Eleven stars, the sun and the moon bowed down to him."},
  {q:"Who did Yusuf tell about his dream?",o:["His father, Ya‘qub","His brothers","A king"],a:0,w:"He told his father, Prophet Ya‘qub."},
  {q:"Why did Ya‘qub say not to tell the brothers?",o:["They might become jealous and plot against him","They were asleep","Dreams must always be kept secret"],a:0,w:"He feared they would become jealous and plot against Yusuf."},
  {q:"What did the Prophet ﷺ say envy does to good deeds?",o:["It eats them like fire eats wood","It makes them grow","It does nothing to them"],a:0,w:"Envy eats up good deeds like fire eats up wood."}]},

{id:3,verses:[7,14],title:"The Brothers’ Plan",short:"Jealousy leads to a terrible idea",
 big:"Yusuf’s ten older brothers became jealous. They thought their father loved Yusuf and his little brother Binyamin more than them. Their jealousy pushed them to make a terrible plan to get rid of Yusuf.",
 remember:["Yusuf had ten older brothers. Binyamin was his brother from the same mother.","The brothers said: our father loves Yusuf and his brother more, even though we are a strong group.","They planned to kill Yusuf or send him far away. One brother said: do not kill him, put him in a well.","They told themselves: “We will be good people afterwards.” This is a trick of Shaytan.","Ya‘qub said: I fear a wolf may eat him."],
 more:[
  {t:"Love is in the heart",p:"The brothers could only say that their father loved Yusuf more. They could not say he gave Yusuf more things. Parents must be fair with gifts, but no one can control how much love is in the heart."},
  {t:"Shaytan’s trick",p:"Shaytan says: “Do the wrong thing now and be good later.” But one wrong leads to another. After hurting Yusuf, the brothers had to lie, and then swear that the lie was true."},
  {t:"A good wish, a wrong way",p:"The brothers wanted their father’s love. That is a good thing to want. But they chose a haram way to get it, and they lost. Their father’s heart broke, and he missed Yusuf even more."},
  {t:"Asking their father",p:"The brothers said: “Send Yusuf with us tomorrow to play. We will look after him.” Ya‘qub felt in his heart that something was wrong. He said it would make him sad, and that he feared a wolf. In the end, he let Yusuf go."}],
 home:"The next time you feel jealous of a brother, sister or friend, make a du‘a for them and give them salam. The Prophet ﷺ taught us that spreading salam makes love grow.",
 game:{type:"order",title:"The plan, step by step",help:"Tap the events in the order they happened.",items:["The brothers feel jealous of Yusuf","They talk about getting rid of him","One brother says: do not kill him, use a well","They ask their father to let Yusuf come and play","Ya‘qub says he fears a wolf","Ya‘qub lets Yusuf go with them"]},
 quiz:[
  {q:"Why were the brothers jealous?",o:["They thought their father loved Yusuf and Binyamin more","Yusuf had more money","Yusuf was taller than them"],a:0,w:"They thought their father loved Yusuf and his brother more."},
  {q:"What did one brother suggest instead of killing Yusuf?",o:["Putting him in a well","Selling his shirt","Sending him to school"],a:0,w:"He said: do not kill him, put him in a well."},
  {q:"Which animal did Ya‘qub say he feared?",o:["A wolf","A lion","A snake"],a:0,w:"He said he feared a wolf might eat Yusuf."},
  {q:"“Do wrong now and be good later” is a trick of…",o:["Shaytan","A good friend","The angels"],a:0,w:"It is one of Shaytan’s tricks. One wrong leads to another."}]},

/* ---------- Part 2: Sold Into Slavery ---------- */
{id:4,verses:[15,18],title:"Into the Well",short:"Fake tears and beautiful patience",
 big:"The brothers threw young Yusuf into a dark well. He was alone and afraid, but Allah comforted him. Then the brothers went home with fake tears and a shirt covered in false blood.",
 remember:["In the well, Allah inspired Yusuf: one day you will tell them what they did, and they will not know who you are.","The brothers came home in the evening, crying fake tears.","Their story: we were racing, and a wolf ate Yusuf.","They brought his shirt with false blood on it.","Ya‘qub answered with “beautiful patience” and asked Allah for help."],
 more:[
  {t:"Not alone in the dark",p:"Allah put calm into Yusuf’s heart. The message meant three things: he would not die in the well, he would see his family again, and one day he would be the stronger one."},
  {t:"Tears do not prove the truth",p:"A famous judge called Shurayh once stayed calm while a woman cried loudly in front of him. His students were surprised. He said: the brothers of Yusuf cried too, and they were the ones who had done wrong. We judge by facts, not by tears."},
  {t:"Beautiful patience",p:"Ya‘qub did not believe the story. He said: “Your souls have tempted you to do something.” Then he said he would have beautiful patience. That means not complaining to people, and taking your sadness to Allah."},
  {t:"Three kinds of patience",l:["Patience when something sad happens.","Patience in staying away from sins.","Patience in keeping up our worship."]}],
 home:"Learn the words Ya‘qub said: “Allahu al-Musta‘an”, which means Allah is the One whose help I seek. Say them the next time something feels too hard.",
 game:{type:"sort",title:"Who said or did it?",help:"Was it the brothers, or their father Ya‘qub?",buckets:["The brothers","Ya‘qub"],items:[["Came home crying in the evening",0],["Said: beautiful patience",1],["Said that a wolf ate Yusuf",0],["Asked Allah for help",1],["Brought a shirt with false blood",0],["Said: your souls have tempted you",1]]},
 quiz:[
  {q:"What did Allah tell Yusuf in the well?",o:["One day you will remind them of what they did","Climb out straight away","Your brothers are coming back for you"],a:0,w:"Allah told him that one day he would remind them of this."},
  {q:"What did the brothers bring as “proof”?",o:["Yusuf’s shirt with false blood","A wolf","Yusuf’s shoes"],a:0,w:"They brought his shirt, stained with false blood."},
  {q:"How did Ya‘qub answer?",o:["With beautiful patience","With great shouting","By leaving home"],a:0,w:"He said he would have beautiful patience and asked Allah for help."},
  {q:"What is “beautiful patience”?",o:["Taking your sadness to Allah, not complaining to people","Never feeling sad at all","Pretending nothing happened"],a:0,w:"It is patience where you take your sadness to Allah."}]},

{id:5,verses:[19,22],title:"Sold in Egypt",short:"Allah’s plan is the best plan",
 big:"Travellers found Yusuf in the well and sold him in Egypt for a few silver coins. An important man bought him and told his wife to take good care of him. It looked like bad luck, but it was all part of Allah’s plan.",
 remember:["A caravan stopped at the well. The water-boy let down his bucket and found Yusuf.","They hid him and sold him for a few silver coins.","The man who bought him said: take good care of him. He may be useful to us, or we may adopt him as a son.","Allah’s will always wins, but most people do not know.","When Yusuf grew up, Allah gave him wisdom and knowledge."],
 more:[
  {t:"From a well to a great house",p:"Yusuf could have ended up with a cruel master. Instead, Allah lifted him from the bottom of a well and placed him in the home of an important minister of Egypt, called al-‘Aziz."},
  {t:"A few silver coins",p:"The travellers sold Yusuf cheaply because he had cost them nothing, and they wanted to get rid of him quickly. People often do not value what they get for free. We should take care not to treat our Islam like that."},
  {t:"Trusting Allah (tawakkul)",p:"Tawakkul means we do our part, like Ya‘qub did when he tried to protect Yusuf. Then we trust that what happens is in Allah’s hands. He is the best of planners."},
  {t:"The reward for doing good",p:"Allah says: this is how We reward those who do good. When we try our best to be good, Allah gives us wisdom and knowledge."}],
 home:"Think of something that went wrong for you but turned out well later. Tell your family the story, and say: Allah is the best of planners.",
 game:{type:"order",title:"Yusuf’s journey",help:"Tap the events in the order they happened.",items:["Yusuf is alone in the well","A caravan stops for water","The water-boy finds Yusuf","Yusuf is hidden and taken to Egypt","He is sold for a few silver coins","Al-‘Aziz tells his wife to take good care of him"]},
 quiz:[
  {q:"Who found Yusuf in the well?",o:["Travellers in a caravan","His brothers","His father"],a:0,w:"A caravan of travellers found him."},
  {q:"How much was Yusuf sold for?",o:["A few silver coins","A chest of gold","A hundred camels"],a:0,w:"He was sold cheaply, for a few silver coins."},
  {q:"Which land was Yusuf taken to?",o:["Egypt","Yemen","Persia"],a:0,w:"He was taken to Egypt."},
  {q:"What does tawakkul mean?",o:["Doing our part, then trusting Allah’s plan","Doing nothing and waiting","Trusting in good luck"],a:0,w:"We do our part and trust Allah, the best of planners."}]},

/* ---------- Part 3: The great test ---------- */
{id:6,verses:[23,24],title:"Allah Is My Refuge",short:"Yusuf says no to wrong",
 big:"Yusuf grew into a young man in the house of al-‘Aziz. One day the lady of the house locked the doors and called him to do something very wrong. At once Yusuf said: “Allah is my refuge!”",
 remember:["The Prophet ﷺ said that Yusuf was given half of all beauty.","The lady of the house locked the doors and called Yusuf to sin.","Yusuf’s first words were “Ma‘adha Allah”: Allah is my refuge.","He said: wrongdoers never succeed.","Yusuf knew for sure that Allah was watching him. Allah kept evil away from him because he was sincere."],
 more:[
  {t:"A very hard test",p:"Yusuf was a servant in her house, and she was a powerful lady. No one else was there, and the doors were locked. Saying no was hard and dangerous. But Yusuf still said no."},
  {t:"Turn to Allah first",p:"Yusuf did not trust in his own strength. He asked Allah for protection straight away. Allah tells us in the Qur’an: if Shaytan tempts you, seek refuge with Allah."},
  {t:"Allah is watching",p:"The Qur’an says Yusuf saw a sign from his Lord. The strongest explanation is that he knew, with no doubt, that Allah was watching him. Even behind locked doors, Allah sees everything."},
  {t:"Shade on the Day of Judgement",p:"The Prophet ﷺ told us about seven kinds of people whom Allah will shade on the Day when there is no other shade. One of them is a person who is invited to sin and says: “I fear Allah.” Yusuf is the best example."}],
 home:"When no one can see you, remember: Allah sees me. Choose one moment today to do the right thing when nobody is looking.",
 game:{type:"sort",title:"What did Yusuf do?",help:"Did Yusuf do this, or not?",buckets:["Yusuf did this","Yusuf did not do this"],items:[["Said: Allah is my refuge",0],["Agreed to do wrong",1],["Remembered that Allah was watching",0],["Trusted only in his own strength",1],["Said: wrongdoers never succeed",0],["Forgot Allah because the doors were locked",1]]},
 quiz:[
  {q:"What were Yusuf’s first words when he was called to do wrong?",o:["Allah is my refuge","I am afraid of your husband","Maybe later"],a:0,w:"He said “Ma‘adha Allah”: Allah is my refuge."},
  {q:"How much beauty was Yusuf given?",o:["Half of all beauty","Just a little","The surah does not say he was beautiful"],a:0,w:"The Prophet ﷺ said Yusuf was given half of all beauty."},
  {q:"What sign helped Yusuf to stay away from sin?",o:["Knowing for sure that Allah was watching him","A letter from his father","A loud noise outside"],a:0,w:"The strongest view is that he knew Allah was watching him."},
  {q:"Who is among those Allah will shade on the Day of Judgement?",o:["Someone invited to sin who says “I fear Allah”","Someone with the most money","Someone who is very famous"],a:0,w:"A person who is called to sin and says “I fear Allah”."}]},

{id:7,verses:[25,29],title:"The Torn Shirt",short:"The truth comes out",
 big:"Yusuf ran to the door to get away. The lady grabbed his shirt from behind, and it tore. At the door stood her husband! She blamed Yusuf, but the torn shirt showed who was telling the truth.",
 remember:["Both of them raced to the door: Yusuf to escape from sin, and the lady to stop him.","She tore his shirt from the back.","She blamed Yusuf at once. Yusuf said: it was she who tried to make me do wrong.","A witness from her own family said: if the shirt is torn at the front, she is telling the truth. If it is torn at the back, Yusuf is.","The shirt was torn from the back. Al-‘Aziz knew that Yusuf was innocent."],
 more:[
  {t:"Same action, different hearts",p:"Two people ran to the same door. One was running away from sin, and the other was chasing it. We should not judge people only by what we see on the outside."},
  {t:"One sin leads to another",p:"The lady planned one sin. When she was caught, she told a lie and blamed an innocent person. The same thing happened to Yusuf’s brothers. Blaming others for our own wrong is what Iblis did."},
  {t:"Speak up for the truth",p:"Yusuf did not stay silent when he was blamed. He told the truth clearly and politely. He spoke to al-‘Aziz and did not insult the lady."},
  {t:"Two shirts",p:"A shirt appears twice in the story. The first shirt had false blood on it and was used to hide a lie. The second shirt was torn, and it showed the truth."}],
 home:"If you are ever blamed for something you did not do, do what Yusuf did: stay calm, tell the truth clearly, and trust Allah.",
 game:{type:"match",title:"Clues in the story",help:"Tap a clue on the left, then what it tells us on the right.",pairs:[["Shirt torn from the back","Yusuf was running away"],["Shirt torn from the front","It would have meant Yusuf was to blame"],["A witness from her family","Said to check the shirt"],["Al-‘Aziz at the door","Nobody expected him"],["A shirt with false blood","The brothers’ lie"],["Racing to the door","Yusuf escaping from sin"]]},
 quiz:[
  {q:"Where was Yusuf’s shirt torn?",o:["From the back","From the front","On the sleeve"],a:0,w:"It was torn from the back."},
  {q:"What did the torn shirt prove?",o:["Yusuf was running away and told the truth","Yusuf was to blame","Nothing at all"],a:0,w:"It showed Yusuf was running away, so he was truthful."},
  {q:"Who said to check the shirt?",o:["A witness from the lady’s own family","Yusuf’s father","The king of Egypt"],a:0,w:"A witness from her own family suggested it."},
  {q:"What did Yusuf do when he was blamed?",o:["He told the truth clearly","He stayed silent","He ran away from the city"],a:0,w:"He defended himself and told the truth."}]},

{id:8,verses:[30,35],title:"Prison Is Dearer to Me",short:"Yusuf chooses Allah over everything",
 big:"The news spread in the city, and some women began to gossip. The lady invited them to see Yusuf, then said he must obey her or go to prison. Yusuf made du‘a: he would rather be in prison than disobey Allah.",
 remember:["Women in the city gossiped about the lady of the house.","At her banquet, the women were so amazed by Yusuf that they cut their hands. They said: this is a noble angel!","The lady said: obey me, or you will go to prison.","Yusuf’s du‘a: “My Lord, prison is dearer to me than what they call me to.”","Allah answered his du‘a. Yusuf was sent to prison even though he was innocent."],
 more:[
  {t:"The harm of gossip",l:["Ghibah (backbiting): saying something true about a person that they would not like.","Buhtan (slander): saying something untrue about a person.","Namimah (carrying tales): passing on what someone said in order to cause trouble."]},
  {t:"Beauty on the inside",p:"The lady herself said that Yusuf firmly refused. Yusuf was beautiful on the outside, and also on the inside: he was modest and had good character. Inner beauty matters most."},
  {t:"Du‘a is the believer’s weapon",p:"Yusuf said: “If You do not turn their plan away from me, I might give in.” He knew he needed Allah’s help. Allah answered him and turned their plan away."},
  {t:"One test after another",p:"First the well, then a comfortable home, then prison. Life is a series of tests. Each time we pass one, the reward grows. At the end of all the tests is Jannah."}],
 home:"This week, if someone starts to gossip, change the subject or say something good about the person.",
 game:{type:"match",title:"Name it",help:"Tap a word on the left, then its meaning on the right.",pairs:[["Ghibah","Saying something true that a person would not like"],["Buhtan","Saying something untrue about a person"],["Namimah","Carrying tales to cause trouble"],["Du‘a","Calling on Allah for help"],["Sabr","Patience"],["Jannah","The reward at the end of all the tests"]]},
 quiz:[
  {q:"What did the women do when they saw Yusuf?",o:["They cut their hands in amazement","They ran away","They fell asleep"],a:0,w:"They were so amazed that they cut their hands."},
  {q:"What did Yusuf prefer to disobeying Allah?",o:["Prison","Money","Escaping to another land"],a:0,w:"He said prison was dearer to him than sin."},
  {q:"What is backbiting (ghibah)?",o:["Saying something true about someone that they would not like","Praising someone","Keeping a secret"],a:0,w:"Saying something true about a person, behind their back, that they would not like."},
  {q:"What happened after Yusuf made du‘a?",o:["Allah answered him and turned their plan away","Nothing happened","He was sent back to his father"],a:0,w:"Allah answered and protected him from their plan."}]},
/* ---------- Part 4: The Prisoner ---------- */
{id:9,verses:[36,40],title:"Calling to Allah in Prison",short:"Yusuf teaches his friends about Allah",
 big:"In prison, two young men asked Yusuf what their dreams meant. Before answering, Yusuf told them about Allah: there is only One God, and He alone should be worshipped.",
 remember:["Two servants of the king went to prison with Yusuf.","One dreamt he was pressing grapes for wine. The other dreamt birds were eating bread from his head.","They said: we can see that you are a good person.","Yusuf said: this knowledge is what my Lord taught me.","He asked: is it better to have many gods, or Allah, the One, the Supreme?"],
 more:[
  {t:"Good manners open hearts",p:"The prisoners came to Yusuf because of his good character. People listen to someone who is kind and honest. Our good manners are the first way we show people Islam."},
  {t:"Tawhid comes first",p:"Yusuf spoke about Allah before he explained the dreams. The Prophet ﷺ taught the same when he sent Mu‘adh to Yemen: first call people to La ilaha illa Allah, then teach them prayer, then charity."},
  {t:"“O my two friends of the prison”",p:"Yusuf called them his friends. He spoke kindly and asked them a simple question: is it better to have many gods, or One God who is in charge of everything? He spoke against idol worship, but he did not insult the prisoners."},
  {t:"Thankful, not complaining",p:"Yusuf had been thrown in a well, sold, and put in prison for no crime. Yet he said: this is from Allah’s favour upon us. He thought about his blessings, not his problems."}],
 home:"Think of a friend or neighbour who is not Muslim. What is one kind thing you could do for them this week?",
 game:{type:"sort",title:"What did Yusuf teach?",help:"Is this part of Yusuf’s message, or not?",buckets:["Yusuf’s message","Not his message"],items:[["Allah is One",0],["Worship many gods",1],["My knowledge is from my Lord",0],["All religions are the same",1],["Only Allah decides",0],["Idols are just names people made up",0]]},
 quiz:[
  {q:"Why did the two prisoners come to Yusuf?",o:["They saw that he was a good person","He asked them to","They were his brothers"],a:0,w:"They said: we see that you are one of the good-doers."},
  {q:"What did Yusuf talk about before explaining the dreams?",o:["Allah is One and should be worshipped alone","The food in prison","How to escape"],a:0,w:"He called them to tawhid first."},
  {q:"Where did Yusuf say his knowledge came from?",o:["His Lord taught him","A book of magic","His brothers"],a:0,w:"This is what my Lord has taught me."},
  {q:"What did Yusuf call the two prisoners?",o:["My two friends of the prison","You bad men","Servants"],a:0,w:"He spoke to them kindly as his friends."}]},

{id:10,verses:[41,42],title:"Two Dreams Come True",short:"“Mention me to your master”",
 big:"Yusuf explained the dreams: one man would be freed and serve the king again, and the other would be punished. Yusuf asked the freed man to tell the king about him, but Shaytan made the man forget.",
 remember:["The wine-maker would be freed and serve drinks to the king again.","The baker would be punished, and birds would eat from his head.","Yusuf said: the matter you asked about has been decided.","Yusuf said to the freed man: mention me to your master.","Shaytan made him forget, so Yusuf stayed in prison for several more years."],
 more:[
  {t:"Gentle with bad news",p:"Yusuf did not say which man would be punished. He said “one of you”. When we have sad news to share, we should be gentle."},
  {t:"Trust Allah and take the means",p:"Yusuf asked the freed man for help. This is not wrong. Tawakkul means we trust Allah and also do what we can, just as the Prophet ﷺ made plans, made friends and asked for help."},
  {t:"Waiting years more",p:"Most scholars said Yusuf stayed in prison about seven more years. That seems unfair, but it was part of Allah’s plan. If he had come out earlier, he might not have become a great minister."},
  {t:"With hardship comes ease",p:"The Prophet ﷺ taught that victory comes with patience, and relief comes after hardship. Allah says: indeed, with hardship comes ease."}],
 home:"Is there something you are waiting for? Make du‘a for it, do your part, and practise being patient.",
 game:{type:"match",title:"Dreams and their meanings",help:"Tap a dream on the left, then what it meant on the right.",pairs:[["Pressing grapes for wine","He will serve the king again"],["Birds eating bread from his head","He will be punished"],["“Mention me to your master”","Yusuf asked for help"],["Shaytan made him forget","Yusuf stayed in prison"],["Several years","About seven more years"]]},
 quiz:[
  {q:"What did the wine-maker’s dream mean?",o:["He would serve the king again","He would become king","He would travel"],a:0,w:"He would be freed and serve the king."},
  {q:"What did Yusuf ask the freed man to do?",o:["Mention him to the king","Bring him food","Find his father"],a:0,w:"Mention me in the presence of your master."},
  {q:"Who made the man forget?",o:["Shaytan","The king","Yusuf"],a:0,w:"Shaytan made him forget to mention Yusuf."},
  {q:"Was it wrong for Yusuf to ask for help?",o:["No, we trust Allah and also take the means","Yes, we must never ask anyone","Only on Fridays"],a:0,w:"Tawakkul means trusting Allah and doing our part."}]},

/* ---------- Part 5: The King and His Dream ---------- */
{id:11,verses:[43,45],title:"The King’s Strange Dream",short:"Seven fat cows and seven thin ones",
 big:"The King of Egypt had a dream that worried him: seven fat cows eaten by seven thin cows, and seven green ears of corn and seven dry ones. His advisers could not explain it. Then the wine-maker finally remembered Yusuf.",
 remember:["The King dreamt of seven fat cows eaten by seven thin ones.","He also saw seven green ears of corn and seven dry ones.","His chiefs said: these are mixed-up dreams, and we do not know their meaning.","After a long time, the wine-maker remembered Yusuf.","He said: send me to him, and I will bring you the meaning."],
 more:[
  {t:"“The King”, not “Pharaoh”",p:"In Yusuf’s story the Qur’an calls the ruler “the King”. In Musa’s story it says “Pharaoh”. Historians say the rulers in Yusuf’s time did not use the title Pharaoh. The Prophet ﷺ could not have known this himself: it shows the Qur’an is from Allah."},
  {t:"Saying “I don’t know”",p:"The advisers did not want to admit they did not know. So they said the dream was just a jumble. It is better to say honestly: I don’t know."},
  {t:"Remembering at last",p:"The wine-maker had forgotten Yusuf for years. When he saw that nobody could explain the dream, he finally remembered his old friend in prison."}],
 home:"Practise saying “I don’t know, but I will find out” when you are not sure of an answer.",
 game:{type:"match",title:"The King’s dream",help:"Tap a part of the story on the left, then what matches it on the right.",pairs:[["Seven fat cows","Eaten by seven thin cows"],["Seven green ears of corn","And seven dry ones"],["The chiefs","Said the dreams were mixed up"],["The wine-maker","Finally remembered Yusuf"],["The ruler in Yusuf’s story","Called “the King”"]]},
 quiz:[
  {q:"What did the King see in his dream?",o:["Seven fat cows eaten by seven thin cows","A giant bird","A burning city"],a:0,w:"Seven fat cows eaten by seven thin ones, and green and dry ears of corn."},
  {q:"What did the King’s chiefs say?",o:["These are mixed-up dreams","It means good news","Ask the children"],a:0,w:"They said it was a jumble and they did not know its meaning."},
  {q:"Who remembered Yusuf?",o:["The wine-maker","The King’s wife","A guard"],a:0,w:"The freed wine-maker remembered him after a long time."},
  {q:"What does the Qur’an call the ruler in Yusuf’s story?",o:["The King","Pharaoh","The Sultan"],a:0,w:"He is called the King, not Pharaoh."}]},

{id:12,verses:[46,49],title:"A Plan to Save Egypt",short:"Seven good years, seven hard years",
 big:"Yusuf explained the dream and also gave a plan: grow crops for seven years and store most of it, because seven hard years of drought would follow. Then a year of plenty would come.",
 remember:["The wine-maker called Yusuf “O man of truth”.","Seven good years: plant, and leave the grain in its ears, except a little to eat.","Then seven hard years would eat up what was stored.","Then a year of rain and plenty would come.","Yusuf helped even though he was still in prison and had not been thanked."],
 more:[
  {t:"No grudge",p:"The wine-maker had forgotten Yusuf for years and did not even say sorry. Yusuf did not scold him. He simply helped."},
  {t:"More than an answer",p:"Yusuf was only asked for the meaning, but he also gave a plan to store food. He wanted to help everyone in Egypt, even people who had treated him badly."},
  {t:"The Prophet ﷺ was amazed",p:"The Prophet ﷺ said he was amazed by Yusuf’s patience and generosity: he helped without first asking to be let out of prison."},
  {t:"Planning ahead",p:"Saving in good times for hard times is wise. Yusuf’s plan saved a whole country from hunger."}],
 home:"Save a little of your pocket money each week, like Yusuf saved grain in the good years.",
 game:{type:"order",title:"Yusuf’s plan, in order",help:"Tap the steps in the right order.",items:["Seven years of good harvests","Store the grain in its ears","Eat only a little","Seven hard years of drought","Use what was stored","A year of rain and plenty"]},
 quiz:[
  {q:"What did the seven fat cows stand for?",o:["Seven years of good harvests","Seven kings","Seven rivers"],a:0,w:"Seven years of plenty."},
  {q:"What did Yusuf tell them to do with the grain?",o:["Leave it in its ears and store it","Sell it all","Throw it in the river"],a:0,w:"Store it in its ears and eat only a little."},
  {q:"What did the wine-maker call Yusuf?",o:["O man of truth","O prisoner","O stranger"],a:0,w:"He called him siddiq, a man of truth."},
  {q:"Did Yusuf ask to be freed before helping?",o:["No, he helped straight away","Yes, he refused to help","He asked for gold"],a:0,w:"The Prophet ﷺ was amazed at his patience and generosity."}]},

/* ---------- Part 6: From Prisoner to Minister ---------- */
{id:13,verses:[50,53],title:"The Truth Comes Out",short:"Yusuf clears his good name",
 big:"The King wanted to meet Yusuf. But Yusuf would not leave prison until his name was cleared. The King asked the women, and the wife of al-‘Aziz admitted: “It was I who tried to make him do wrong. He is truthful.”",
 remember:["Yusuf told the messenger: go back and ask the King about the women who cut their hands.","He cared about his good name more than leaving prison.","The women said: Allah forbid! We know nothing bad about him.","The wife of al-‘Aziz said: now the truth is clear. It was my fault, and he is truthful.","She said: the soul often pushes towards wrong, except whom Allah shows mercy."],
 more:[
  {t:"Your good name matters",p:"Yusuf could have walked out of prison at once. But he wanted everyone to know he was innocent. A good name and honesty are precious."},
  {t:"Polite even now",p:"Yusuf did not say “ask about that lady who lied”. He asked about “the women who cut their hands”. He was careful not to name or shame her."},
  {t:"Three kinds of soul",l:["The soul that pushes us to do wrong.","The soul that blames itself after doing wrong, and wants to do better.","The soul at peace, close to Allah."]},
  {t:"Born good",p:"The Prophet ﷺ said every child is born on the fitrah, a pure nature that knows right from wrong. Faith keeps the soul good."}],
 home:"If you ever do something wrong, be brave like the lady was at the end: tell the truth and say sorry.",
 game:{type:"order",title:"Clearing Yusuf’s name",help:"Tap the events in the order they happened.",items:["The King says: bring him to me","Yusuf says: first ask about the women","The King asks the women","The women say: we know nothing bad about him","The lady admits it was her fault","Yusuf is shown to be innocent"]},
 quiz:[
  {q:"Why didn’t Yusuf leave prison straight away?",o:["He wanted his name cleared first","He liked prison","He was asleep"],a:0,w:"He wanted everyone to know he was innocent."},
  {q:"What did the women say about Yusuf?",o:["We know nothing bad about him","He is a liar","We never met him"],a:0,w:"They said: Allah forbid, we know nothing bad about him."},
  {q:"What did the wife of al-‘Aziz admit?",o:["It was her fault, and Yusuf is truthful","Yusuf was to blame","She had forgotten"],a:0,w:"She said: it was I who tried, and he is truthful."},
  {q:"Which soul blames itself and wants to do better?",o:["The self-blaming soul","The soul that pushes to wrong","No soul does that"],a:0,w:"An-nafs al-lawwamah blames itself after doing wrong."}]},

{id:14,verses:[54,57],title:"From Prisoner to Minister",short:"“I am a knowing guardian”",
 big:"The King said: “Today you are honoured and trusted by us.” Yusuf asked to be put in charge of Egypt’s food stores, because he knew how to look after them. Allah raised him from prison to one of the most powerful men in the land.",
 remember:["The King said: today you are honoured and trusted with us.","Yusuf said: put me in charge of the storehouses, for I am a knowing guardian.","Two qualities: knowing what to do, and keeping things safe.","Allah says: this is how We established Yusuf in the land.","Allah never lets the reward of good people go to waste, and the reward of the Hereafter is even better."],
 more:[
  {t:"Asking for a job to help people",p:"Yusuf asked for the job because he knew he could do it well and help everyone get through the hard years. Using our skills to help others is a good thing."},
  {t:"From the well to the palace",p:"Well, slavery, prison, and now the palace. Each test was bigger than the last, and each reward was sweeter. That is the story of Yusuf’s life."},
  {t:"Two rewards",p:"Allah gave Yusuf success in this world. But Allah tells us the reward of the Hereafter is better still, for those who believe and are mindful of Him."}],
 home:"What are you good at? Think of one way to use it to help your family or school this week.",
 game:{type:"sort",title:"Before or after?",help:"Did this happen while Yusuf was in prison, or after he became a minister?",buckets:["In prison","As a minister"],items:[["Explained the prisoners’ dreams",0],["In charge of the storehouses",1],["Explained the King’s dream",0],["Honoured and trusted by the King",1],["Waited about seven more years",0],["Could live wherever he pleased in Egypt",1]]},
 quiz:[
  {q:"What job did Yusuf ask for?",o:["In charge of the storehouses","Captain of the army","Chief gardener"],a:0,w:"He asked to look after Egypt’s food stores."},
  {q:"How did Yusuf describe himself?",o:["A knowing guardian","The strongest man","The King’s son"],a:0,w:"He said: I am a knowing guardian."},
  {q:"What did the King say to Yusuf?",o:["Today you are honoured and trusted","Go back to prison","Leave Egypt"],a:0,w:"Today you are highly esteemed and trusted by us."},
  {q:"Which reward does Allah say is better?",o:["The reward of the Hereafter","Gold","Being famous"],a:0,w:"The reward of the Hereafter is better for the believers."}]},
/* ---------- Part 7: The Brothers Return ---------- */
{id:15,verses:[58,62],title:"The Brothers Come to Egypt",short:"Yusuf knows them, but they don’t know him",
 big:"The famine reached Palestine, so Yusuf’s brothers travelled to Egypt for food. They stood in front of Yusuf. He knew them straight away, but they had no idea who he was.",
 remember:["The brothers came to Egypt to buy grain during the famine.","Yusuf recognised them, but they did not recognise him.","He gave them full measure and treated them as honoured guests.","He said: next time, bring your brother from your father’s side. If you don’t, you will get no grain.","He secretly put their goods back in their bags so they would come back."],
 more:[
  {t:"Why didn’t they know him?",p:"The last time they saw Yusuf he was a little boy. Now he was a grown man and a great minister of Egypt. They could never have imagined that their little brother was alive, let alone in charge of Egypt’s food."},
  {t:"Kindness, not revenge",p:"Yusuf had the power to punish them. Instead he gave them full measure, extra food for the journey, and good hospitality."},
  {t:"“His father”, not “our father”",p:"The brothers said: we will try to persuade his father to let him come. They said “his father”, as if Binyamin’s father was not theirs. We can still hear a little jealousy."},
  {t:"Goods in their bags",p:"In those days people swapped goods for grain. Yusuf put their goods back in their bags. His family was poor, and he wanted to be sure they could come back."}],
 home:"Is there someone you could be kind to even though they were unkind to you once? Try it this week.",
 game:{type:"order",title:"The first visit",help:"Tap the events in the order they happened.",items:["The famine reaches Palestine","The brothers travel to Egypt","Yusuf recognises them","He gives them grain and hospitality","He asks them to bring their youngest brother","He hides their goods in their bags"]},
 quiz:[
  {q:"Why did the brothers go to Egypt?",o:["To buy grain during the famine","To find Yusuf","To see the King"],a:0,w:"There was a famine, and Egypt had stored food."},
  {q:"Did the brothers recognise Yusuf?",o:["No, but he recognised them","Yes, straight away","Only Binyamin did"],a:0,w:"He knew them, but they did not know him."},
  {q:"Whom did Yusuf ask them to bring next time?",o:["Their brother from their father’s side","Their father","Their camels"],a:0,w:"He wanted to see Binyamin."},
  {q:"What did Yusuf secretly put in their bags?",o:["The goods they had paid with","A letter","A gold cup"],a:0,w:"Their goods, so they could come back."}]},

{id:16,verses:[63,66],title:"A Promise to Their Father",short:"“Allah is the best guardian”",
 big:"The brothers asked their father to send Binyamin with them so they could get more grain. Ya‘qub remembered what had happened to Yusuf. He let Binyamin go only after they made a solemn promise by Allah to bring him back.",
 remember:["The brothers said: send our brother with us, and we will look after him.","Those were the same words they had said about Yusuf long ago.","Ya‘qub said: should I trust you as I trusted you with his brother before?","He said: Allah is the best guardian, and He is the Most Merciful.","They found their goods in their bags, and swore by Allah to bring Binyamin back."],
 more:[
  {t:"Not stung twice",p:"The Prophet ﷺ said a believer is not stung twice from the same hole. Ya‘qub had been hurt once by trusting his sons, so he was careful the second time."},
  {t:"Al-Hafiz, the Guardian",p:"Ya‘qub did not put his trust in his sons. He put it in Allah, the best Guardian. We can call on Allah by this name when we worry about people we love."},
  {t:"A good name matters",p:"Ya‘qub found it hard to trust his sons because of what they had done before. When we are honest, people trust us."},
  {t:"Promises by Allah",p:"Swearing by Allah is very serious. Ya‘qub made them promise by Allah, and then said: Allah is witness to what we say."}],
 home:"Make a small promise to someone at home and keep it carefully, like a real promise should be kept.",
 game:{type:"sort",title:"Who said it?",help:"Was it the brothers, or Ya‘qub?",buckets:["The brothers","Ya‘qub"],items:[["Send our brother with us",0],["Allah is the best guardian",1],["We will look after him",0],["Should I trust you as I did before?",1],["Our goods were returned to us",0],["Allah is witness to what we say",1]]},
 quiz:[
  {q:"Why did the brothers want Binyamin to come?",o:["To get more grain from Egypt","To play in the desert","To visit the King"],a:0,w:"They could only get more grain if he came."},
  {q:"Why was Ya‘qub worried?",o:["They had promised to look after Yusuf before","Binyamin was ill","The road was flooded"],a:0,w:"They said the same words about Yusuf long ago."},
  {q:"Who did Ya‘qub say is the best guardian?",o:["Allah","His eldest son","The King of Egypt"],a:0,w:"Allah is the best guardian, the Most Merciful."},
  {q:"What did Ya‘qub make them do before Binyamin left?",o:["Promise by Allah to bring him back","Pay him money","Leave a camel behind"],a:0,w:"A solemn promise by Allah."}]},

{id:17,verses:[67,68],title:"Different Gates",short:"Plan well, then trust Allah",
 big:"Before they left, Ya‘qub told his sons not to enter the city all through one gate, but through different gates. He said: I cannot protect you from what Allah has decided. In Him I trust.",
 remember:["Enter through different gates, not all through one.","It would help them avoid attention and the evil eye.","Ya‘qub said: I cannot help you against Allah’s decree. Allah alone decides.","He said: in Him I trust, and in Him the trusting should trust.","Allah praised Ya‘qub’s knowledge."],
 more:[
  {t:"The evil eye is real",p:"The Prophet ﷺ said: the evil eye is real. It comes from jealousy. In Surah al-Falaq we ask Allah to protect us from the envier when he envies."},
  {t:"Say “ma sha’ Allah”",p:"When we see something nice that someone else has, we should say “ma sha’ Allah” or “tabarak Allah” and ask Allah to bless them. We should never wish that they lose it."},
  {t:"Protection",l:["Read Surah al-Falaq often.","Don’t show off your blessings.","Make du‘a for protection, as the Prophet ﷺ did."]},
  {t:"What tawakkul really means",p:"Tawakkul does not mean doing nothing. It means we plan well and do our best, then leave the result to Allah. Ya‘qub gave good advice and still trusted Allah."}],
 home:"When you see something nice that a friend has, say “ma sha’ Allah” and make a du‘a for them.",
 game:{type:"match",title:"Protection from the evil eye",help:"Tap a word on the left, then its meaning on the right.",pairs:[["Ma sha’ Allah","What Allah wills"],["Tabarak Allah","Blessed is Allah"],["Surah al-Falaq","Protection from the envier"],["Al-‘ayn","The evil eye"],["Tawakkul","Do your best, then trust Allah"]]},
 quiz:[
  {q:"How did Ya‘qub tell his sons to enter the city?",o:["Through different gates","All through one gate","At night"],a:0,w:"Through separate gates."},
  {q:"What did the Prophet ﷺ say about the evil eye?",o:["It is real","It is a made-up story","It only harms animals"],a:0,w:"The evil eye is real."},
  {q:"What should we say when we like something someone has?",o:["Ma sha’ Allah","Give it to me","Nothing at all"],a:0,w:"Say ma sha’ Allah, and ask Allah to bless them."},
  {q:"What does tawakkul mean?",o:["Plan and do your best, then trust Allah","Do nothing and wait","Trust in luck"],a:0,w:"Ya‘qub planned well and still trusted Allah."}]},

/* ---------- Part 8: Binyamin and the Ruse ---------- */
{id:18,verses:[69,72],title:"“I Am Your Brother”",short:"Yusuf’s secret, and the missing cup",
 big:"Yusuf took Binyamin aside and told him a wonderful secret: “I am your brother!” Then, as the brothers loaded their camels, Yusuf secretly put the King’s precious measuring cup in Binyamin’s bag, and a caller cried out: “You are thieves!”",
 remember:["Yusuf told Binyamin: I am your brother, so don’t be sad about what they did.","Yusuf secretly put the King’s measuring cup in Binyamin’s bag.","A caller shouted: O people of the caravan, you are thieves!","The brothers turned and asked: what have you lost?","The reward for finding it: a camel-load of grain."],
 more:[
  {t:"A happy secret",p:"Binyamin was very young when Yusuf disappeared. Imagine his joy at meeting his brother again after so many years! Yusuf told him not to be sad about how the other brothers had treated him."},
  {t:"Part of Allah’s plan",p:"Yusuf planned a way to keep Binyamin with him in Egypt. Allah says later: this is how We planned for Yusuf."},
  {t:"Honest people don’t run",p:"When the caller shouted “thieves!”, the brothers turned towards him and asked what was lost. People who have stolen usually run away. They knew they had taken nothing."}],
 home:"Is there someone in your family you haven’t spoken to for a while? Call them or send them a kind message.",
 game:{type:"order",title:"At the caravan",help:"Tap the events in the order they happened.",items:["Yusuf takes Binyamin aside","He says: I am your brother","The cup is placed in Binyamin’s bag","A caller shouts: you are thieves!","The brothers ask: what have you lost?","A camel-load of grain is offered as a reward"]},
 quiz:[
  {q:"What did Yusuf tell Binyamin?",o:["I am your brother","You must leave Egypt","I am the King"],a:0,w:"He told him: I am your brother."},
  {q:"What went missing?",o:["The King’s measuring cup","A camel","A ring"],a:0,w:"The King’s measuring cup."},
  {q:"What did the caller shout?",o:["O people of the caravan, you are thieves!","Welcome back!","Go home now!"],a:0,w:"He accused the caravan of theft."},
  {q:"What was the reward for finding the cup?",o:["A camel-load of grain","A bag of gold","A house"],a:0,w:"A camel-load of grain, which was very precious in a famine."}]},

{id:19,verses:[73,76],title:"The Cup Is Found",short:"Allah raises whom He wills",
 big:"The brothers said: by Allah, we are not thieves! They agreed that whoever had the cup in his bag would be kept as a servant, as was the rule in their own land. The bags were searched one by one, and the cup was found in Binyamin’s bag.",
 remember:["The brothers swore: we did not come to cause trouble, and we are not thieves.","They were asked: what is the punishment if you are lying?","They said: the one in whose bag it is found stays as a servant. That is our rule.","The bags were searched, and the cup came out of Binyamin’s bag last.","Allah says: We raise in rank whom We will, and above everyone with knowledge is One who knows all."],
 more:[
  {t:"Stealing is a big sin",p:"The Prophet ﷺ said Allah curses the thief. Taking what belongs to others is a serious wrong. The brothers were right: this time they had not stolen anything."},
  {t:"Allah’s clever plan",p:"Under Egypt’s law, Yusuf could not have kept Binyamin. But the brothers chose their own family rule, and that let Binyamin stay. Allah says: this is how We planned for Yusuf."},
  {t:"Knowledge raises people",p:"Allah raises people in rank through faith and knowledge. That is how Allah showed the angels that Adam was special: Allah taught him."}],
 home:"Learn one new thing today about your deen, and teach it to someone at home.",
 game:{type:"sort",title:"True or not true?",help:"Is this true in the story, or not?",buckets:["True","Not true"],items:[["The brothers swore they were not thieves",0],["The cup was found in the eldest brother’s bag",1],["The bags were searched one by one",0],["Egypt’s law let Yusuf keep Binyamin",1],["The brothers chose their own family rule",0],["Allah raises whom He wills in rank",0]]},
 quiz:[
  {q:"What rule did the brothers give for a thief?",o:["He stays as a servant","He pays one coin","He is let go"],a:0,w:"In their land, the thief became a servant of the one he stole from."},
  {q:"Whose bag was the cup found in?",o:["Binyamin’s","The eldest brother’s","Nobody’s"],a:0,w:"It came out of Binyamin’s bag."},
  {q:"How does Allah raise people in rank?",o:["Through faith and knowledge","Through money","Through height"],a:0,w:"Faith and knowledge raise people."},
  {q:"Who knows more than everyone with knowledge?",o:["Allah, who knows all","The King","The oldest person"],a:0,w:"Above all who have knowledge is One who knows all."}]},

{id:20,verses:[77,79],title:"“Take One of Us Instead”",short:"Yusuf stays calm and fair",
 big:"The brothers quickly said: if he stole, his brother stole before him. It was not true, but Yusuf kept calm and kept his secret. They begged him to take one of them instead, because their father was old. Yusuf said: Allah forbid that we take anyone except the one who had our property.",
 remember:["They said: if he stole, so did a brother of his before.","Yusuf held back his anger and said nothing about who he was.","They begged: he has a very old father, so take one of us instead.","They said: we see that you are a good person.","Yusuf said: Ma‘adha Allah! We will only keep the one with whom we found our property."],
 more:[
  {t:"Staying calm",p:"The brothers told a lie about Yusuf himself, right in front of him. Yusuf could have shouted, but he stayed calm and kept his plan. Sometimes being quiet is the wiser choice."},
  {t:"Careful words",p:"Yusuf did not say “the one who stole”, because Binyamin had not stolen. He said “the one with whom we found our property”. A prophet never lies."},
  {t:"Fair to everyone",p:"Yusuf said it would be unfair to punish someone for what another person did. Islam teaches that each person is responsible for his own actions."}],
 home:"The next time someone says something unfair to you, take a deep breath before you answer, like Yusuf did.",
 game:{type:"match",title:"Who said it?",help:"Tap the words on the left, then who said them on the right.",pairs:[["If he stole, his brother stole before","The brothers"],["Ma‘adha Allah!","Yusuf"],["Take one of us instead","The brothers"],["The one with whom we found our property","Yusuf"],["He has a very old father","The brothers"]]},
 quiz:[
  {q:"What did the brothers say about Binyamin’s brother?",o:["That he had stolen before","That he was a king","That he was lost"],a:0,w:"They falsely said he had stolen before."},
  {q:"What did Yusuf do when he heard their lie?",o:["He stayed calm and kept his secret","He shouted at them","He told them who he was"],a:0,w:"He held back his anger."},
  {q:"What did the brothers offer?",o:["To take one of them instead","To pay with gold","To leave and never return"],a:0,w:"They offered one of themselves in Binyamin’s place."},
  {q:"Why did Yusuf choose his words carefully?",o:["He would not lie: Binyamin had not stolen","He forgot the word “thief”","He was tired"],a:0,w:"He said “the one with whom we found our property”."}]},

/* ---------- Part 9: Deprived of Three Sons ---------- */
{id:21,verses:[80,83],title:"The Eldest Brother Stays",short:"Beautiful patience again",
 big:"The brothers lost hope of getting Binyamin back. The eldest said: I will not leave this land until my father allows me. The rest went home and told Ya‘qub. Once again, he answered with beautiful patience, hoping Allah would bring all his sons back.",
 remember:["The eldest said: remember your promise to your father, and how you failed him about Yusuf.","He stayed in Egypt until his father allowed him, or Allah decided.","The others said to their father: your son stole. Ask the city and the caravan.","Ya‘qub said again: your souls have tempted you. Beautiful patience!","He said: perhaps Allah will bring them all back to me."],
 more:[
  {t:"Feeling sorry for the past",p:"The eldest brother remembered what they had done to Yusuf and felt sorry. He did not want to break his father’s heart again."},
  {t:"Hiding faults, praising good",p:"When this brother did something wrong long ago, Allah just said “one of them”. Now that he did something good, Allah calls him “the eldest”. The Prophet ﷺ also praised good deeds by name and did not name people who made mistakes."},
  {t:"The boy who cried wolf",p:"This time the brothers were telling the truth, but it was hard for their father to believe them. Lies make it hard for people to trust us later."},
  {t:"Hope in Allah",p:"Ya‘qub had now lost three sons, but he said: perhaps Allah will bring them all back. Allah says: I am as My servant thinks of Me. Always think well of Allah."}],
 home:"If you ever make a mistake, say sorry and try to put it right, like the eldest brother tried to do.",
 game:{type:"order",title:"After the cup is found",help:"Tap the events in the order they happened.",items:["The brothers lose hope of getting Binyamin back","The eldest decides to stay in Egypt","The others travel home","They tell Ya‘qub: your son stole","Ya‘qub says: beautiful patience","He hopes Allah will bring them all back"]},
 quiz:[
  {q:"Who stayed behind in Egypt?",o:["The eldest brother","Ya‘qub","The youngest brother"],a:0,w:"The eldest stayed until his father allowed him to return."},
  {q:"Why was it hard for Ya‘qub to believe them?",o:["They had lied to him before","They spoke too quietly","They were too tired"],a:0,w:"Their lie about Yusuf made it hard to trust them."},
  {q:"What did Ya‘qub say again?",o:["Beautiful patience","I give up","Go away"],a:0,w:"Fa-sabrun jamil: beautiful patience."},
  {q:"What did Ya‘qub hope for?",o:["That Allah would bring all his sons back","To move to Egypt","A new house"],a:0,w:"He always thought well of Allah."}]},

{id:22,verses:[84,87],title:"Never Lose Hope",short:"“I complain only to Allah”",
 big:"Ya‘qub turned away and said: “Oh, my sorrow for Yusuf!” He had cried so much that his eyes turned white. When his sons told him to stop thinking about Yusuf, he said: I complain of my sadness only to Allah. Go and search for Yusuf and his brother, and never lose hope in Allah’s mercy.",
 remember:["Ya‘qub said: oh, my sorrow for Yusuf!","His eyes turned white from crying, but he held his sadness inside.","His sons said: you will make yourself ill thinking of Yusuf.","He said: I complain of my grief only to Allah.","Go and search for Yusuf and his brother. Never lose hope in Allah’s mercy."],
 more:[
  {t:"Crying is not weakness",p:"Ya‘qub cried, and his patience was still beautiful. When the Prophet’s ﷺ baby son Ibrahim died, he cried too and said: the eyes shed tears and the heart is sad, but we only say what pleases our Lord."},
  {t:"Complain to Allah, not about Allah",p:"It is good to tell Allah about our sadness, as Ya‘qub did. What we must not do is complain about Allah, as if He were unfair."},
  {t:"Ask from Allah",p:"The Prophet ﷺ taught Ibn ‘Abbas: be mindful of Allah and He will protect you. If you ask, ask Allah. If you need help, seek help from Allah."},
  {t:"Ya‘qub knew something",p:"Ya‘qub knew about Yusuf’s dream. The dream had not come true yet, so he knew Yusuf must still be alive."}],
 home:"When you feel sad, tell Allah about it in a du‘a, in your own words. He always listens.",
 game:{type:"sort",title:"Good or not good?",help:"Is this a good way to deal with sadness, or not?",buckets:["Good","Not good"],items:[["Telling Allah about your sadness",0],["Saying Allah is unfair",1],["Crying when you are sad",0],["Giving up hope in Allah’s mercy",1],["Asking Allah for help",0],["Keeping hope and searching for a way",0]]},
 quiz:[
  {q:"What happened to Ya‘qub’s eyes?",o:["They turned white from crying","They turned blue","Nothing happened"],a:0,w:"His eyes turned white from sorrow."},
  {q:"To whom did Ya‘qub complain?",o:["Only to Allah","To his neighbours","To the King"],a:0,w:"I complain of my grief only to Allah."},
  {q:"What did Ya‘qub tell his sons to do?",o:["Search for Yusuf and his brother","Stay at home","Forget Yusuf"],a:0,w:"Go and search, and never lose hope."},
  {q:"Is it wrong to cry when we are sad?",o:["No, the Prophet ﷺ cried too","Yes, always","Only for grown-ups"],a:0,w:"Crying is human, and patience can still be beautiful."}]},
/* ---------- Part 10: Yusuf Reveals Who He Is ---------- */
{id:23,verses:[88,90],title:"“I Am Yusuf!”",short:"The big surprise",
 big:"The brothers came to Egypt a third time, poor and tired, and asked the minister to be kind to them. Then he asked: “Do you remember what you did to Yusuf and his brother?” They gasped: “Are you really Yusuf?” He said: “I am Yusuf, and this is my brother!”",
 remember:["The brothers said: hard times have hit us, and our goods are poor. Please be kind to us.","Yusuf asked: do you remember what you did to Yusuf and his brother when you did not know better?","They said: are you really Yusuf?","He said: I am Yusuf, and this is my brother. Allah has been kind to us.","Whoever fears Allah and is patient, Allah never wastes the reward of those who do good."],
 more:[
  {t:"Kind even now",p:"Yusuf did not shout at them. He said “when you did not know better”, giving them an easy way to feel sorry. He spoke about himself as “Yusuf”, so it would not feel like an attack."},
  {t:"All from Allah",p:"Yusuf did not say “look how powerful I am”. He said: Allah has been kind to us. Everything good comes from Allah."},
  {t:"The message of the whole surah",p:"Yusuf said: whoever fears Allah and is patient, Allah will not waste their reward. That is the story of his whole life in one sentence."}],
 home:"Learn this line by heart: “Whoever fears Allah and is patient, Allah never wastes the reward of those who do good.”",
 game:{type:"order",title:"The big surprise",help:"Tap the events in the order they happened.",items:["The brothers come to Egypt a third time","They ask the minister to be kind","He asks about Yusuf and his brother","They ask: are you really Yusuf?","He says: I am Yusuf, and this is my brother","He says: Allah has been kind to us"]},
 quiz:[
  {q:"What did the brothers ask the minister for?",o:["To be kind and give them full measure","A new house","A job in the palace"],a:0,w:"They were poor and asked for kindness."},
  {q:"What question did Yusuf ask them?",o:["Do you remember what you did to Yusuf and his brother?","Where are your camels?","How old are you?"],a:0,w:"He asked about what they had done."},
  {q:"Who did Yusuf say had been kind to them?",o:["Allah","The King","His brothers"],a:0,w:"Allah has been kind to us."},
  {q:"Whose reward does Allah never waste?",o:["Those who fear Him and are patient","Those who are rich","Those who are famous"],a:0,w:"Taqwa and patience are rewarded."}]},

{id:24,verses:[91,93],title:"No Blame on You Today",short:"Forgiveness, and the healing shirt",
 big:"The brothers said: by Allah, Allah has chosen you over us, and we were wrong. Yusuf answered: “No blame on you today. Allah will forgive you.” Then he gave them his shirt to put over their father’s face, so he would see again.",
 remember:["The brothers admitted: we were truly wrong.","Yusuf said: no blame on you today. Allah will forgive you. He is the Most Merciful.","Years later, the Prophet ﷺ said the same words to the people of Makkah.","Take my shirt and put it over my father’s face, and he will see again.","Come back to me with your whole family."],
 more:[
  {t:"Saying sorry is the first step",p:"The brothers finally said: we were wrong. To make tawbah, we first have to admit our mistake."},
  {t:"Forgiving completely",p:"Yusuf did not say “I will think about it” or keep reminding them. He forgave them straight away and completely."},
  {t:"The Prophet ﷺ in Makkah",p:"When the Prophet ﷺ returned to Makkah in victory, the people who had hurt him were afraid. He said: I say to you what Yusuf said to his brothers: no blame on you today. Go, you are free."},
  {t:"Three shirts",l:["A shirt with false blood, used to tell a lie.","A shirt torn from the back, which showed the truth.","A shirt that brought healing and good news."]}],
 home:"Is there someone you need to forgive? Try saying to them, or in your heart: “No blame on you today.”",
 game:{type:"match",title:"The three shirts",help:"Tap a shirt on the left, then what it did on the right.",pairs:[["The shirt with false blood","The brothers’ lie"],["The shirt torn from the back","Showed Yusuf was innocent"],["The shirt sent home","Brought back Ya‘qub’s sight"],["“No blame on you today”","Yusuf’s forgiveness"],["The Conquest of Makkah","The Prophet ﷺ said the same words"]]},
 quiz:[
  {q:"What did the brothers admit?",o:["That they had been wrong","That they were tired","That they were lost"],a:0,w:"They said: we have truly been sinful."},
  {q:"What did Yusuf say to them?",o:["No blame on you today","Go to prison","Never come back"],a:0,w:"No blame on you today. Allah will forgive you."},
  {q:"Who said Yusuf’s words again in Makkah?",o:["The Prophet Muhammad ﷺ","Abu Bakr","The King of Egypt"],a:0,w:"He forgave the people of Makkah with Yusuf’s words."},
  {q:"What would Yusuf’s shirt do for Ya‘qub?",o:["Help him see again","Keep him warm","Make him young"],a:0,w:"Put over his face, it would bring back his sight."}]},

/* ---------- Part 11: The Dream Fulfilled ---------- */
{id:25,verses:[94,98],title:"The Scent of Yusuf",short:"Good news reaches Ya‘qub",
 big:"As the caravan left Egypt, far away Ya‘qub said: I can smell Yusuf! The family thought he was confused. Then the bringer of good news came and put Yusuf’s shirt over his face, and his sight came back.",
 remember:["Ya‘qub said: I sense the smell of Yusuf.","The family said: you are still lost in your old idea.","The shirt was put over his face, and he could see again.","Ya‘qub said: didn’t I tell you that I know from Allah what you don’t know?","The brothers asked their father to pray for their forgiveness, and he said: I will."],
 more:[
  {t:"Who brought the good news?",p:"Many scholars said the son who carried the shirt with good news was the same one who once carried the shirt with false blood. Imagine how he felt!"},
  {t:"Saying sorry to their father",p:"The brothers had already said sorry to Yusuf. Now they said sorry to their father too. The Prophet ﷺ said: feeling sorry is part of repentance."},
  {t:"“I will ask Allah”",p:"Ya‘qub said: I will ask my Lord to forgive you. Many scholars said he waited for the last part of the night, when Allah calls out: who is asking Me for forgiveness, so that I may forgive him?"},
  {t:"Never too late",p:"The brothers did something very wrong, but they repented, and Allah forgave them. Most scholars said they later became prophets. The door of Allah’s mercy is always open."}],
 home:"Try to wake up a little before Fajr one day this week and make du‘a, like Ya‘qub did for his sons.",
 game:{type:"order",title:"Good news",help:"Tap the events in the order they happened.",items:["The caravan leaves Egypt","Ya‘qub says: I smell Yusuf","The family says he is confused","The shirt is put over his face","Ya‘qub can see again","The brothers ask him to pray for their forgiveness"]},
 quiz:[
  {q:"What did Ya‘qub sense when the caravan left Egypt?",o:["The smell of Yusuf","Rain coming","A storm"],a:0,w:"He said: I sense the smell of Yusuf."},
  {q:"What happened when the shirt was put over his face?",o:["He could see again","He fell asleep","Nothing"],a:0,w:"His sight came back."},
  {q:"What did the brothers ask their father?",o:["To pray for their forgiveness","To give them money","To stay at home"],a:0,w:"They said: pray for our forgiveness, we were wrong."},
  {q:"When did many scholars say Ya‘qub made that du‘a?",o:["In the last part of the night","At lunchtime","He never made it"],a:0,w:"The blessed time before Fajr."}]},

{id:26,verses:[99,100],title:"The Dream Comes True",short:"The family together again",
 big:"The whole family came to Egypt. Yusuf welcomed his parents and raised them onto the throne. Then they all bowed down to him, just like the stars, the sun and the moon in his dream. Yusuf said: “Father, this is the meaning of my dream. My Lord has made it come true.”",
 remember:["Yusuf welcomed his parents: enter Egypt safely, if Allah wills.","He raised his parents onto the throne.","They bowed down to him: the eleven stars, the sun and the moon.","Yusuf said: my Lord has made my dream come true.","He thanked Allah for taking him out of prison and bringing his family from the desert."],
 more:[
  {t:"Bowing then and now",p:"In the law of Ya‘qub, bowing down to show respect was allowed. In our Islam it is not: we bow and prostrate only to Allah. When Mu‘adh once bowed to the Prophet ﷺ, he told him: don’t do that."},
  {t:"Yusuf’s good manners",p:"Yusuf thanked Allah for getting him out of prison, but he did not mention the well. Talking about the well would have embarrassed his brothers. He even blamed Shaytan, not them, for what went wrong."},
  {t:"Al-Latif",p:"Yusuf said: my Lord is Subtle in what He wills. Al-Latif means Allah knows the smallest hidden things and is gentle and kind with us, even when we cannot see His plan."}],
 home:"Tell someone in your family the whole story of Yusuf’s dream, from the beginning to how it came true.",
 game:{type:"match",title:"The dream comes true",help:"Tap a part of the dream on the left, then who it was on the right.",pairs:[["The eleven stars","Yusuf’s eleven brothers"],["The sun and the moon","Yusuf’s parents"],["Bowing down","Showing respect, as their law allowed"],["Al-Latif","Allah, the Subtle and Kind"],["The well","Not mentioned, out of kindness"]]},
 quiz:[
  {q:"Where did Yusuf raise his parents?",o:["Onto the throne","Onto a camel","Onto a ship"],a:0,w:"He raised his parents onto the throne."},
  {q:"Which dream came true?",o:["The eleven stars, the sun and the moon","The seven fat cows","The bread and the birds"],a:0,w:"His childhood dream."},
  {q:"May we bow down to people in our Islam?",o:["No, only to Allah","Yes, to anyone","Only to teachers"],a:0,w:"It was allowed in Ya‘qub’s law, but not in ours."},
  {q:"Why didn’t Yusuf mention the well?",o:["So his brothers would not feel embarrassed","He forgot it","It was not important"],a:0,w:"He was kind even in his words."}]},

{id:27,verses:[101,101],title:"Yusuf’s Beautiful Du‘a",short:"“Let me die as a Muslim”",
 big:"At the happiest moment of his life, Yusuf made a beautiful du‘a. He thanked Allah for everything, then asked for the most important thing of all: to die as a Muslim and be with the righteous.",
 remember:["My Lord, You have given me some power and taught me the meaning of dreams.","O Creator of the heavens and the earth!","You are my protector in this world and the Hereafter.","Let me die as a Muslim.","And join me with the righteous."],
 more:[
  {t:"Thank Allah first",p:"Yusuf began by thanking Allah and praising Him, and only then asked. Allah says: if you are grateful, I will give you more."},
  {t:"The most important wish",p:"Yusuf had power, a palace and his family back. But what he asked for was to die as a Muslim. In the end, that is what matters most."},
  {t:"Good friends",p:"Yusuf asked to be with the righteous. The Prophet ﷺ said a person follows the way of his close friend, so look at whom you befriend."},
  {t:"Names of Allah in the du‘a",l:["Ar-Rabb: the Lord who owns and looks after us.","Al-Fatir: the Creator who made everything from nothing.","Al-Wali: our Protector and Friend."]}],
 home:"Learn Yusuf’s du‘a: “Tawaffani musliman wa alhiqni bis-salihin”: let me die as a Muslim and join me with the righteous.",
 game:{type:"order",title:"Yusuf’s du‘a, in order",help:"Tap the parts of the du‘a in the order Yusuf said them.",items:["My Lord, You gave me some power","And taught me the meaning of dreams","O Creator of the heavens and the earth","You are my protector in this world and the next","Let me die as a Muslim","Join me with the righteous"]},
 quiz:[
  {q:"How did Yusuf begin his du‘a?",o:["By thanking Allah for His blessings","By asking for gold","By complaining"],a:0,w:"Thank and praise Allah first, then ask."},
  {q:"What did Yusuf ask to die as?",o:["A Muslim","A king","A rich man"],a:0,w:"Let me die as a Muslim."},
  {q:"Whom did Yusuf ask to be joined with?",o:["The righteous","The famous","The powerful"],a:0,w:"Join me with the righteous."},
  {q:"What does Al-Fatir mean?",o:["The Creator who made everything from nothing","The Judge","The Rich"],a:0,w:"The Originator of the heavens and the earth."}]},
/* ---------- Part 12: Reminders to the Prophet ﷺ ---------- */
{id:28,verses:[102,104],title:"A Story Only Allah Knew",short:"Proof that the Qur’an is from Allah",
 big:"After the story ends, Allah tells the Prophet ﷺ: this is news of the unseen. You were not there when the brothers made their secret plan. The Prophet ﷺ could only know it because Allah told him.",
 remember:["This story is from the unseen, which Allah revealed to the Prophet ﷺ.","He was not there when the brothers plotted.","Most people will not believe, however much you want them to.","The Prophet ﷺ asked for no payment for the Qur’an.","The Qur’an is a reminder for all the worlds."],
 more:[
  {t:"How could he know?",p:"Makkah was a small town. Very few people could read, and there were no Bibles in Arabic. The secret plan of the brothers was known to nobody but them. The Prophet ﷺ could only know it because Allah revealed it."},
  {t:"Not for money",p:"Prophets never asked people to pay them. The Prophet ﷺ lived simply, sleeping on a mat of palm leaves. When ‘Umar cried at this, he said: are you not happy that they have this world and we have the Hereafter?"},
  {t:"A reminder",p:"One name of the Qur’an is the Dhikr, the Reminder. Deep inside, every person knows Allah is their Creator. The Qur’an reminds us of what our hearts already know."}],
 home:"Ask a grown-up what “Dhikr” means, and tell them it is also a name of the Qur’an.",
 game:{type:"sort",title:"True or not true?",help:"Is this true, or not?",buckets:["True","Not true"],items:[["The Prophet ﷺ was not there when the brothers plotted",0],["He read the story in an Arabic Bible",1],["Allah revealed the story to him",0],["He asked people to pay for the Qur’an",1],["The Qur’an is a reminder for all people",0],["Every single person will believe",1]]},
 quiz:[
  {q:"How did the Prophet ﷺ know the story of Yusuf?",o:["Allah revealed it to him","He read it in a book","His friends told him"],a:0,w:"It is news of the unseen, revealed by Allah."},
  {q:"Which part of the story was most secret?",o:["The brothers’ plan","The King’s dream","The banquet"],a:0,w:"Nobody but the brothers knew it."},
  {q:"Did the Prophet ﷺ ask for payment for the Qur’an?",o:["No, never","Yes, a little","Only from the rich"],a:0,w:"Prophets never asked for payment."},
  {q:"What does “Dhikr” mean?",o:["Reminder","Story","Prayer mat"],a:0,w:"The Qur’an reminds us of what we already know inside."}]},

{id:29,verses:[105,108],title:"“This Is My Way”",short:"Calling people to Allah",
 big:"So many signs of Allah are all around us, yet people walk past them without thinking. Allah told the Prophet ﷺ to say: this is my way. I call to Allah with clear knowledge, I and those who follow me.",
 remember:["People pass by Allah’s signs in the heavens and the earth without thinking.","Many say they believe in Allah but also worship others.","The Prophet ﷺ said: this is my way. I call to Allah with clear sight.","“I and those who follow me”: we can call to Allah too.","Glory be to Allah. I am not one of those who worship others."],
 more:[
  {t:"Signs everywhere",p:"The sun, the moon, the sea, the mountains, even our own bodies: all are signs of Allah. Let’s stop and think about them."},
  {t:"Believing is not enough",p:"The people of Makkah believed Allah created them, but they also prayed to idols. True iman means worshipping Allah alone."},
  {t:"One straight path",p:"The Prophet ﷺ drew one straight line in the sand and said: this is Allah’s path. Then he drew lines going off to the sides and said: these are other paths, with a devil on each. The way to Allah is one."},
  {t:"Inviting with good manners",p:"Calling to Allah is not just arguing. Our good manners are the best invitation, just like Yusuf in prison."}],
 home:"Go outside, look at the sky or a tree for one minute, and say “SubhanAllah”.",
 game:{type:"match",title:"Words from the lesson",help:"Tap a word on the left, then its meaning on the right.",pairs:[["Ayat","Signs of Allah"],["Shirk","Worshipping others with Allah"],["Basirah","Clear sight and knowledge"],["Sabil","The way, the path"],["SubhanAllah","Glory be to Allah"]]},
 quiz:[
  {q:"What do many people do with Allah’s signs?",o:["Walk past them without thinking","Write them down","Hide them"],a:0,w:"They pass them by without reflecting."},
  {q:"How did the Prophet ﷺ call to Allah?",o:["With clear knowledge","With shouting","With money"],a:0,w:"‘Ala basirah: with clear sight."},
  {q:"Who else can call to Allah?",o:["Those who follow the Prophet ﷺ","Only kings","Nobody"],a:0,w:"I and those who follow me."},
  {q:"How many straight paths to Allah are there?",o:["One","Seven","Many"],a:0,w:"The Prophet ﷺ drew one straight line."}]},

{id:30,verses:[109,111],title:"A Lesson for People Who Think",short:"The end of the surah",
 big:"Allah reminds the Prophet ﷺ that the messengers before him were also rejected, but Allah’s help always came at last. The surah ends: in their stories is a lesson for people who think. This is no made-up story; it is guidance and mercy for believers.",
 remember:["Allah sent messengers from among the people of the towns.","Travel and look at what happened to those who rejected them.","When the messengers were close to giving up, Allah’s help came.","In their stories is a lesson for people of understanding.","The Qur’an is not made up: it is guidance and mercy for those who believe."],
 more:[
  {t:"Help comes at last",p:"The prophets were patient for a very long time, and then Allah’s help came. Allah saved the Prophet ﷺ many times too. So never give up."},
  {t:"Beginning and end",p:"The surah began: “We tell you the best of stories.” It ends: “In their stories is a lesson.” First we listen to the story, then we think about its lessons."},
  {t:"It really happened",p:"This is not a fairy tale. It is a true story from Allah, so we listen with our whole heart."}],
 home:"Choose your favourite lesson from the story of Yusuf and tell it to someone at dinner.",
 game:{type:"match",title:"Beginning and end",help:"Tap the beginning on the left, then the matching end on the right.",pairs:[["“The best of stories” (verse 3)","“In their stories is a lesson” (verse 111)"],["Signs for those who ask","A lesson for people who think"],["Yusuf’s dream","The dream comes true"],["The Prophet ﷺ is sad","Allah’s help comes at last"]]},
 quiz:[
  {q:"Were the messengers before the Prophet ﷺ also rejected?",o:["Yes","No","Only one"],a:0,w:"Allah reminds him that they were too."},
  {q:"What came to the messengers at last?",o:["Allah’s help","A storm","Gold"],a:0,w:"Our help came to them."},
  {q:"Who is the lesson in these stories for?",o:["People who think and understand","Only children","Nobody"],a:0,w:"A lesson for people of understanding."},
  {q:"Is the story of Yusuf made up?",o:["No, it is true, from Allah","Yes, it is a fairy tale","Nobody knows"],a:0,w:"It is guidance and mercy, not a made-up tale."}]},

/* ---------- Part 13: Lessons from Surah Yusuf ---------- */
{id:31,verses:[[3,3],[6,6],[18,18]],title:"Lessons for Our Family",short:"From Surah Yusuf to our homes",
 big:"Surah Yusuf is full of lessons for us at home: be fair with each other, don’t show off, look after each other, honour our parents, and be patient when things are hard.",
 remember:["Read the stories of the Qur’an and share them.","Parents should be fair with their children.","Don’t show off your blessings.","Honour your parents in every way, like Yusuf did.","Good homes grow good children."],
 more:[
  {t:"Lessons we learned",l:["Allah’s stories are the best stories.","Knowledge is a blessing from Allah.","Be thankful for what you have, and happy with what Allah did not give you.","A believer is careful and thinks ahead.","Beautiful patience means taking your sadness to Allah."]},
  {t:"Honouring parents",p:"Yusuf went out of the city to welcome his parents and raised them onto the throne. After Allah, nobody deserves our respect more than our parents."},
  {t:"Good parents, good children",p:"Allah looked after the family of Ya‘qub because of Ibrahim and Ishaq. If parents are good, Allah blesses their children."}],
 home:"Do one thing to honour your parents today without being asked.",
 game:{type:"match",title:"Lesson and example",help:"Tap a lesson on the left, then the example from the story on the right.",pairs:[["Don’t show off blessings","Ya‘qub said: don’t tell your brothers"],["Honour your parents","Yusuf raised them onto the throne"],["Be careful, think ahead","Ya‘qub worried about Binyamin"],["Beautiful patience","Ya‘qub complained only to Allah"],["Be fair","Parents must treat children fairly"]]},
 quiz:[
  {q:"How did Yusuf honour his parents?",o:["He raised them onto the throne","He sent them away","He forgot them"],a:0,w:"He welcomed them and raised them up."},
  {q:"Why should we not show off our blessings?",o:["It can make others jealous","It is boring","It costs money"],a:0,w:"Ya‘qub warned Yusuf not to tell his brothers."},
  {q:"What is beautiful patience?",o:["Taking your sadness to Allah","Never feeling sad","Shouting"],a:0,w:"Complaining only to Allah."},
  {q:"What helps children grow up good?",o:["Good, righteous parents","Lots of toys","Being famous"],a:0,w:"Allah blesses the children of the righteous."}]},

{id:32,verses:[[23,23],[33,33],[39,39]],title:"Lessons for Our Hearts",short:"Jealousy, temptation and good manners",
 big:"Yusuf’s story teaches us to watch our hearts: beware of jealousy and gossip, turn to Allah when tempted to do wrong, be patient, and invite people to Islam through good manners.",
 remember:["Jealousy can make people do terrible things.","Gossip is a bad habit. Stand up for people who are not there.","When tempted, turn to Allah straight away.","Don’t rush: haste is from Shaytan.","Our actions speak louder than our words."],
 more:[
  {t:"Lessons we learned",l:["Inner beauty, good character, lasts longer than outer beauty.","A bad thought is not a sin, but acting on it is.","Patience always tastes sweet in the end.","Don’t hurt people’s feelings.","Being generous opens people’s hearts."]},
  {t:"Calling to Islam",p:"Yusuf first showed his good character, then waited for the right moment, and then started with tawhid. That is how we should share Islam."},
  {t:"Trust and plan",p:"Tawakkul means doing our best and trusting Allah, like Yusuf asking the freed man to mention him to the King."}],
 home:"Pick one habit from this lesson, such as not gossiping, and practise it all week.",
 game:{type:"sort",title:"Good habit or bad habit?",help:"Is this a good habit, or a bad one?",buckets:["Good habit","Bad habit"],items:[["Turning to Allah when tempted",0],["Gossiping about people",1],["Being patient",0],["Rushing without thinking",1],["Being generous to guests",0],["Hurting people’s feelings",1]]},
 quiz:[
  {q:"What should we do when we are tempted to do wrong?",o:["Turn to Allah straight away","Do it quickly","Hide it"],a:0,w:"Yusuf said: Allah is my refuge."},
  {q:"Is a bad thought a sin by itself?",o:["No, acting on it is","Yes, always","Only on Fridays"],a:0,w:"We are not punished for passing thoughts we don’t act on."},
  {q:"Which beauty lasts longer?",o:["Inner beauty: good character","Outer beauty","Neither"],a:0,w:"Good character grows; looks fade."},
  {q:"How did Yusuf first invite people to Islam?",o:["Through his good character","By shouting","By paying them"],a:0,w:"Actions speak louder than words."}]},

{id:33,verses:[[86,86],[92,92],[101,101]],title:"Lessons for Our Ending",short:"Repent, forgive, never give up",
 big:"The last lessons of the surah: say sorry and mean it, forgive others, especially family, complain only to Allah, never give up hope, and remember that what matters most is how we end.",
 remember:["Say sorry to people you have hurt, and to Allah.","Forgive, especially when you could take revenge.","Complain to Allah: du‘a is the best comfort.","Never give up on people: the brothers changed.","What matters is how we end, not how we began."],
 more:[
  {t:"Lessons we learned",l:["Good things are from Allah; Shaytan tries to cause trouble.","Shaytan loves to break up families.","We learn through failures before success.","Allah can make even enemies into friends.","Allah saves the righteous even when things look hopeless."]},
  {t:"Real tawbah",p:"Doing wrong while planning to say sorry later is not real tawbah. Real tawbah means feeling sorry, stopping, and deciding never to do it again."},
  {t:"The best ending",p:"Yusuf asked Allah: let me die as a Muslim. Our last deeds matter most, so it is never too late to come back to Allah."}],
 home:"Say sorry to someone you may have upset, and forgive someone who upset you.",
 game:{type:"order",title:"Steps of real tawbah",help:"Tap the steps in the right order.",items:["Realise you did wrong","Feel truly sorry","Stop doing it","Say sorry to the person you hurt","Ask Allah to forgive you","Decide never to do it again"]},
 quiz:[
  {q:"Is “do wrong now, say sorry later” real tawbah?",o:["No","Yes","Sometimes"],a:0,w:"Real tawbah needs regret and stopping."},
  {q:"When is forgiving most special?",o:["When you could take revenge","When you are scared","Never"],a:0,w:"Yusuf forgave when he had all the power."},
  {q:"What matters most in the end?",o:["How we end","How we began","How rich we are"],a:0,w:"Our last deeds matter most."},
  {q:"Did Yusuf’s brothers change?",o:["Yes, they repented and were forgiven","No, never","We don’t know"],a:0,w:"So never give up hope in people."}]},

/* ---------- Conclusion: The Ring of Surah Yusuf ---------- */
{id:34,verses:[43,44],title:"The Ring of the Surah",short:"A beautiful pattern",
 big:"Surah Yusuf is built like a ring. The story goes in, step by step, to the King’s dream in the middle. Then it comes back out, step by step, in the same order, with each part matching one before it. This beautiful pattern is another sign that the Qur’an is from Allah.",
 remember:["The middle of the ring is the King’s dream.","Yusuf’s dream at the start matches the dream coming true at the end.","Yusuf put in prison matches Yusuf let out of prison.","The prisoner forgets Yusuf matches the prisoner remembers him.","Knowing is not enough: we must live what we learn."],
 more:[
  {t:"Matching pairs",l:["Yusuf’s dream ↔ The dream comes true.","Sold as a slave in Egypt ↔ In charge of Egypt’s storehouses.","Tempted by the minister’s wife ↔ She says he is innocent.","Put in prison ↔ Let out of prison.","Explains the prisoners’ dreams ↔ Explains the King’s dream."]},
  {t:"Live it",p:"We studied this surah not just to know it, but to live it: Ya‘qub’s trust in Allah, Yusuf’s patience, and the brothers’ tawbah."}],
 home:"Draw the ring of Surah Yusuf as a circle, with the King’s dream in the middle, and explain it to someone.",
 game:{type:"match",title:"Complete the ring",help:"Tap a part on the left, then its matching pair on the right.",pairs:[["Yusuf’s dream","The dream comes true"],["Sold as a slave in Egypt","In charge of the storehouses"],["Tempted by the minister’s wife","She says he is innocent"],["Put in prison","Let out of prison"],["Explains the prisoners’ dreams","Explains the King’s dream"],["The prisoner forgets him","The prisoner remembers him"]]},
 quiz:[
  {q:"What is in the middle of the ring?",o:["The King’s dream","The well","The banquet"],a:0,w:"Everything turns around the King’s dream."},
  {q:"What matches “Yusuf’s dream” at the start?",o:["The dream comes true","The wolf","The shirt"],a:0,w:"The first and last parts match."},
  {q:"What does this pattern show us?",o:["The Qur’an is from Allah","It is an accident","Nothing"],a:0,w:"Such careful design is a sign of its divine source."},
  {q:"Why did we study Surah Yusuf?",o:["To live its lessons","Only to pass a quiz","To forget it"],a:0,w:"Knowledge is for putting into practice."}]}
];

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
  name: "Surah Yusuf",
  lines: ["Allah calls this the best of stories.","Patience is beautiful. Keep going!","Allah is the best of planners.","A little every day, like drops filling a well.","Evil never wins in the end."],
  versesSource: SOURCE,
  // verses is [from, to], or a list of ranges such as [[3,3],[18,18]] for lessons that draw on several places.
  lessons: LESSONS.map((l) => ({ ...l, ayat: (Array.isArray(l.verses[0]) ? l.verses : [l.verses]).flatMap(([a, b]) => ayat(a, b)) })),
  final: FINAL,
};
