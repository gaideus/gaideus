// Surah Yusuf, for learners aged 16 and over.
// Based on "Lessons from Surah Yusuf" by Dr Yasir Qadhi (Kube Publishing), summarised in our own words.
// The whole book: Parts 1-13 and the conclusion (lessons 1-34). Same shape as LESSONS / FINAL in learn/index.html.
// Lives under functions/ so it is never served as a static file: only /api/content hands it out.

import { ayat, SOURCE } from "./yusuf-verses.js";

const LESSONS = [
/* ---------- Part 1: The Family of Ya‘qub ---------- */
{id:1,verses:[1,3],title:"Alif-Lam-Ra: The Clear Book",short:"Verses 1–3: the opening of the surah",
 big:"The surah opens with the disjointed letters, praises the Qur’an as a clear Book sent down in Arabic, and announces “the best of stories”, revealed to console the Prophet ﷺ in a time of grief.",
 remember:["Huruf al-muqatta‘at: fourteen letters, half the alphabet, usually followed by praise of the Qur’an.","Kitab mubin: clear in its message and clear in its source.","Anzala: sent down all at once. Nazzala: sent down in parts over twenty-three years.","Only the Arabic Qur’an is Allah’s revelation; a translation is not.","“The best of stories”: every Qur’anic story is the best of its kind, and this one is singled out."],
 more:[
  {t:"The disjointed letters",l:["They are called huruf al-muqatta‘at because they do not form words. Scholars gave more than fifteen opinions on why they were revealed; their true meaning is known to Allah.","Almost every time they open a surah, the next verse praises the Qur’an, so some scholars said they point to its majesty.","They use fourteen letters, exactly half the alphabet. Some linked this to the Verses of Challenge (17:88, 11:13, 10:38): the Qur’an is built from the Arabs’ own letters, yet they cannot produce its like."]},
  {t:"“Those are the verses of the clear Book”",l:["Tilka (“those”) normally points to something distant. Here it conveys the Qur’an’s exalted rank.","Ayah means a verse, and also a sign and a miracle.","Kitab is the revelation as written; Qur’an is the revelation as recited. It is preserved through both.","Mubin has two senses: its guidance is clear to anyone who approaches it sincerely, and it is clear that it comes from Allah (15:9)."]},
  {t:"“We”, anzala and nazzala",l:["“We” is the plural of majesty. Ibn Taymiyyah held that it refers to Allah and His angels, noting that commands to worship are always in the singular (20:14).","Anzala: the whole Qur’an was sent from the Preserved Tablet to the lowest heaven on Laylat al-Qadr, according to a narration in al-Hakim’s Mustadrak. Nazzala: Jibril then brought it in parts over twenty-three years.","The author counts this descent among the proofs that Allah is above His creation in a manner that befits Him."]},
  {t:"An Arabic Qur’an",l:["Ten other verses describe the Qur’an as Arabic. Scholars agree that only the Arabic is Allah’s final revelation.","The Qur’an is kalamullah, the Speech of Allah: an unbroken chain of recitation from Allah to Jibril, to the Prophet ﷺ, to the Companions, to us.","Arabic is the key to the deeper meanings, which should move us to learn it."]},
  {t:"The best of stories",l:["Qissah comes from qassa, to follow footprints (18:64). To hear a story is to walk in someone’s footsteps.","Stories show how belief is put into practice, carry ‘ibrah (lessons and warnings), and strengthen the heart (11:120).","“You were among the unaware (ghafilin)” is not blame. In Makkah the Prophet ﷺ had no access to this story, so it is a favour to him and a proof of his prophethood."]}],
 home:"Read verses 1–3 in Arabic and in translation. Note one thing the Arabic conveys that the translation cannot.",
 game:{type:"match",title:"Terms from verses 1–3",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Huruf al-muqatta‘at","The disjointed letters"],["Kitab mubin","The clear Book"],["Anzala","Sent down all at once"],["Nazzala","Sent down in parts"],["Qissah","A story; from following footprints"],["Ghafil","One who is unaware"]]},
 quiz:[
  {q:"How many letters of the alphabet appear among the disjointed letters?",o:["Fourteen, half of the alphabet","All twenty-eight","Seven"],a:0,w:"Fourteen letters, exactly half."},
  {q:"What two things does “mubin” describe?",o:["The clarity of its message and of its source","Its length and its age","Its script and its paper"],a:0,w:"Its guidance is clear, and it is clearly from Allah."},
  {q:"What is the difference between anzala and nazzala?",o:["All at once, versus in parts","In Makkah, versus in Madinah","In writing, versus in speech"],a:0,w:"Anzala is the single descent; nazzala is the gradual one."},
  {q:"How did Ibn Taymiyyah explain “We” in the Qur’an?",o:["It refers to Allah and His angels","It refers to the prophets","It has no particular meaning"],a:0,w:"He said it refers to Allah and His angels."},
  {q:"What does “you were among the unaware” indicate?",o:["A favour, and a proof of prophethood","A rebuke of the Prophet ﷺ","That the story was already well known in Makkah"],a:0,w:"He could not have known the story except by revelation."}]},

{id:2,verses:[4,6],title:"The Dream and a Father’s Counsel",short:"Verses 4–6",
 big:"A child’s dream sets the whole surah in motion. Ya‘qub recognises it as revelation, tells Yusuf to conceal it, names Shaytan as the real enemy, and foretells Allah’s favours upon him.",
 remember:["The noble, son of the noble, son of the noble, son of the noble: Yusuf ibn Ya‘qub ibn Ishaq ibn Ibrahim.","Dreams come from Allah, from Shaytan, or from the self. A prophet’s dream is wahy.","“Do not relate your vision”: blessings are concealed from those who may envy.","Envy consumes good deeds as fire consumes wood.","Ijtiba is Allah’s choosing. The verse closes with al-‘Alim, al-Hakim."],
 more:[
  {t:"Lineage and sources",l:["Four generations of prophets. The hadith on Yusuf’s nobility is in al-Bukhari’s al-Adab al-Mufrad.","Isma‘il’s line produced the Prophet Muhammad ﷺ. The other prophets came through Ishaq and Ya‘qub (Isra’il), ending with ‘Isa.","On Israelite reports: “neither believe it nor deny it” (al-Bukhari). They may serve as additional reference, never as a basis for creed or law.","Ya‘qub had twelve sons. Yusuf and Binyamin shared a mother, Rahil, who according to most scholars died giving birth to Binyamin."]},
  {t:"The dream",l:["Most scholars said Yusuf was about seven.","After prophethood, only al-mubashshirat remain: true good dreams (al-Bukhari).","“I saw” is repeated; some inferred that the bodies were first still and then prostrated.","Most said the eleven stars are his brothers and the sun and moon his parents, with different views on which is which. The meaning is that Yusuf would rise above his family in rank."]},
  {t:"Ya‘qub’s response",l:["“They will plot against you a plot”: a double emphasis that translation loses.","A dream is told only to someone who cares for you, or to an interpreter (al-Tirmidhi).","He worked to keep peace between his sons, and felt no envy that his son would surpass him.","The verse teaches us not to flaunt blessings."]},
  {t:"Envy and Shaytan",l:["Envy objects to how Allah has distributed His favours. We are not normally accountable for feelings until we act, but harboured envy consumes good deeds (Abu Dawud).","Ya‘qub blamed Shaytan, not his sons. This is an etiquette when criticising others: it leaves the door to repentance open. We do not use Shaytan to excuse our own sins.","Shaytan only whispers. He has no authority over us (14:22)."]},
  {t:"Verse 6: the promise",l:["Ijtiba means to sift through and choose the best.","Yusuf is mentioned separately from “the family of Ya‘qub”.","The brothers are the Asbat (2:136). The majority hold that they were not yet prophets when they plotted.","Allah protects the children of the righteous (18:82).","Al-‘Alim, al-Hakim: whatever trials follow, they belong to a plan."]}],
 home:"Is there a blessing you tend to broadcast? Consider who hears it, and whether concealing it would be wiser.",
 game:{type:"match",title:"Terms from verses 4–6",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-mubashshirat","True good dreams"],["Wahy","Revelation"],["Ijtiba","To sift through and choose the best"],["Al-Asbat","The sons of Ya‘qub"],["Hasad","Envy"],["Al-Hakim","The All-Wise, the Judge"]]},
 quiz:[
  {q:"What is a prophet’s dream?",o:["Wahy (revelation)","Imagination","A whisper from Shaytan"],a:0,w:"A prophet’s dream is revelation."},
  {q:"According to the hadith, what remains of prophethood?",o:["True good dreams","New scripture","Miracles"],a:0,w:"Only al-mubashshirat, the true good dreams."},
  {q:"Why did Ya‘qub blame Shaytan and not his sons?",o:["It leaves the door to repentance open","He did not suspect his sons","He was unaware of their character"],a:0,w:"It is an etiquette of criticism that leaves room for repentance."},
  {q:"What is the majority view on the brothers at the time of the plot?",o:["They were not yet prophets","They were already prophets","They never became prophets"],a:0,w:"They became prophets later (the Asbat)."},
  {q:"To whom should a dream be told?",o:["One who cares for you, or an interpreter","Anyone who will listen","No one, ever"],a:0,w:"Only to a concerned person or an interpreter."}]},

{id:3,verses:[7,14],title:"Envy Becomes a Plot",short:"Verses 7–14",
 big:"Verses 7–14 trace how envy turns into a crime: a grievance, a rationalisation, a “lesser” plan, and the careful persuasion of a father whose intuition resists.",
 remember:["“Signs for those who ask”: the only place in the Qur’an with this wording.","The brothers could only accuse Ya‘qub of loving more. Love is not accountable; material fairness is.","“Then be righteous afterwards” is Shaytan’s rationalisation.","Choosing the lesser of two evils is a recognised principle of usul al-fiqh.","Firasah is the believer’s intuition. Ya‘qub’s “wolf” was a tawriyah."],
 more:[
  {t:"Lessons for those who ask (v. 7)",l:["Elsewhere signs are for those who think, reflect or use their intellect. Here it is only “ask”: the lessons are that accessible.","The surah points to three things: Allah’s power and His way (sunnah), the truthfulness of the Messenger, and the morals of the story.","It was revealed to console the Prophet ﷺ: the outcome belongs to the righteous (11:49)."]},
  {t:"The grievance (v. 8)",l:["“Yusuf and his brother” means Binyamin, his full brother.","They accuse their father only of loving more. In the hadith of Nu‘man’s father, gifts must be equal between children (Ibn Majah).","‘Usbah: a strong band of ten. “Our father is clearly mistaken” is about his affection, not his religion."]},
  {t:"The rationalisation (v. 9)",l:["“Kill Yusuf or cast him away… then be righteous people afterwards”: sin now, repent later.","One sin required more: lying, then swearing to the lie.","They sought a lawful aim, their father’s love, by unlawful means, and lost both their worldly and their spiritual aim.","The majority hold they were adults; they later ask forgiveness (12:97). Some scholars noted that intending to repent is still better than sinning with no remorse at all."]},
  {t:"The lesser evil (v. 10)",l:["One brother, said by some to be the eldest, reduced the harm: a well instead of murder.","Jubb is a primitive, unbuilt well, as opposed to bi’r. Ghayabah is its hidden depth.","Their wrongs: cutting kinship, wronging a child, and wronging their father, who was a prophet.","Hasad “shaves” the religion (al-Tirmidhi). Its cure is to spread salam (Muslim)."]},
  {t:"Persuading Ya‘qub (v. 11–14)",l:["“Why do you not trust us?” First guilt, then an appeal to Yusuf’s happiness, then a triple emphasis in “we will guard him” (compare 15:9).","La‘ib is permissible play in moderation; lahw has no benefit.","“Beware the firasah of the believer” (al-Tirmidhi): Ya‘qub’s heart was not convinced.","The wolf: the strongest view is that it was a tawriyah, an indirect excuse. The brothers later turned it against him."]}],
 home:"Recall a decision where a good aim tempted you towards a wrong means. What would the lawful route have been?",
 game:{type:"order",title:"From envy to action",help:"Tap the steps in the order they occur in the surah.",items:["They resent their father’s love for Yusuf and Binyamin","They propose killing or exiling Yusuf","One brother proposes the well instead","They ask why their father does not trust them","Ya‘qub voices his fear of a wolf","They point to their strength, and he lets Yusuf go"]},
 quiz:[
  {q:"What is unique about the wording of verse 7?",o:["Signs for those who “ask”","Signs for those who travel","It names Makkah"],a:0,w:"It is the only verse that says signs are for those who ask."},
  {q:"What could the brothers accuse Ya‘qub of?",o:["Loving Yusuf more","Giving Yusuf more wealth","Error in his religion"],a:0,w:"Only of loving more, which a person does not control."},
  {q:"What is a tawriyah?",o:["A true statement that conceals the speaker’s real intent","An outright lie","A binding oath"],a:0,w:"A statement that is true but is understood differently by the listener."},
  {q:"How does a jubb differ from a bi’r?",o:["It is a primitive, unbuilt well","It is always deeper","Its water is salty"],a:0,w:"A jubb has no built wall around it."},
  {q:"Which principle does the brother’s suggestion illustrate?",o:["Choosing the lesser of two evils","Consensus","Analogy"],a:0,w:"If one must choose between two wrongs, choose the lesser."}]},

/* ---------- Part 2: Sold Into Slavery ---------- */
{id:4,verses:[15,18],title:"The Well and Beautiful Patience",short:"Verses 15–18",
 big:"The crime is told in one restrained verse. Yusuf is reassured in the well, the brothers stage their grief, and Ya‘qub answers with sabrun jamil.",
 remember:["The Qur’an uses no harsh adjective for the brothers: it is brief about evil, and they later repented.","The inspiration in the well implied that he would live, be reunited, and have the upper hand.","Wahy is of three kinds: to creatures (16:68), to prophets (42:51), and ilham (28:7).","“Lying blood”; and bal sets aside their whole account.","Sabrun jamil: complaint is made to Allah alone (12:86)."],
 more:[
  {t:"Restraint in describing evil (v. 15)",l:["“When they took him away…” The sentence is left unfinished: Qur’anic concision.","The Qur’an speaks of indecency and crime with dignity (4:43) and warns against spreading indecency (24:19).","The brothers’ sin is mentioned only through their own admissions (12:91, 12:97). True forgiveness does not keep reminding people of their faults."]},
  {t:"Inspiration in the well",l:["The promise is emphatic: you will inform them of this while they do not perceive.","It also carried a message for the Prophet ﷺ: he would return to Makkah (28:85), and with hardship comes ease (94:5).","The majority hold that Yusuf was a child, so this was not prophetic revelation. It may have been ilham, like that given to the mother of Musa.","Allah placed sakinah, tranquillity, in his heart."]},
  {t:"Staged grief (v. 16–17)",l:["They came back late on purpose, weeping.","Shurayh al-Qadi, unmoved by a weeping litigant, said: the brothers of Yusuf also wept. Rulings rest on evidence, not emotion.","They used Ya‘qub’s own fear against him, and admitted that it sounded unbelievable."]},
  {t:"The shirt and the reply (v. 18)",l:["Dam kadhib: literally “lying blood”.","Bal is a particle that sets aside what came before it.","“Your souls have enticed you”: he criticised the motive and left the matter open, appealing to their conscience.","Wa-Allahu al-Musta‘an: Allah is the One whose help is sought (compare 65:3)."]},
  {t:"Patience",head:["Type","Meaning"],rows:[["In calamity","Restraint when harm strikes"],["From sin","Holding back from what is forbidden"],["In worship","Persisting in obedience"],["Sabrun jamil","No complaint to people; grief is taken to Allah"]]}],
 home:"Memorise “fa-sabrun jamil, wa-Allahu al-musta‘an” (12:18) with its meaning.",
 game:{type:"match",title:"Terms from verses 15–18",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Ilham","Inspiration below prophetic revelation"],["Sakinah","Tranquillity placed in the heart"],["Dam kadhib","“Lying blood”"],["Sabrun jamil","Patience without complaint to people"],["Al-Musta‘an","The One whose help is sought"],["Bal","A particle that sets aside what came before"]]},
 quiz:[
  {q:"Why does the Qur’an not denounce the brothers in harsh terms?",o:["Its dignity in mentioning evil, and their later repentance","They were not at fault","The reason is not discussed"],a:0,w:"It is brief about evil, and Allah accepted their repentance."},
  {q:"What is the majority view on what Yusuf received in the well?",o:["Inspiration (ilham), as he was still a child","Full prophetic revelation","A dream"],a:0,w:"He was a child, so it was not prophetic revelation."},
  {q:"What does Shurayh’s remark teach?",o:["Judgement rests on evidence, not tears","Litigants should not be heard","Judges should be harsh"],a:0,w:"The brothers of Yusuf also wept."},
  {q:"What does “bal” do in Ya‘qub’s reply?",o:["It sets aside their account","It confirms their account","It asks a question"],a:0,w:"It negates everything that came before it."},
  {q:"How is sabrun jamil defined?",o:["Patience with no complaint to people","Feeling no grief","Refusing to speak of the matter to Allah"],a:0,w:"Grief is taken to Allah, not to people."}]},

{id:5,verses:[19,22],title:"From the Well to Egypt",short:"Verses 19–22",
 big:"A caravan, a cheap sale and a minister’s household: each link is Allah establishing Yusuf in the land. “Allah’s will prevails, but most people do not know.”",
 remember:["Sayyarah: a caravan of seasoned travellers.","Bakhs: a deficient price; “a few counted dirhams”.","Al-‘Aziz showed firasah in recognising Yusuf’s worth.","“Thus We established Yusuf in the land”: the plan is Allah’s, and our part is tawakkul.","At maturity he was given hukm and ‘ilm: the reward of the muhsinin."],
 more:[
  {t:"The caravan (v. 19)",l:["The water-drawer had to lower his own bucket, which shows how primitive the well was.","“Good news! Here is a boy!” A slave was a prized commodity.","They concealed him as merchandise, knowing it was wrong. “Allah is All-Knowing of what they did.”"]},
  {t:"The sale (v. 20)",l:["Bakhs can mean that no price could match his worth, or that he went far below market value. Ibn ‘Abbas suggested perhaps a tenth.","“A few counted dirhams”: so few that they could be counted.","Stolen goods are sold fast, and what costs nothing is valued little. The author applies this to how those born into Islam can undervalue it compared with those who had to search for it."]},
  {t:"The house of al-‘Aziz (v. 21)",l:["Al-‘Aziz is a title of honour. Because Yusuf later bears the same title, several scholars said his master was the minister of finance.","“Honour his stay”: he sensed that Yusuf was no ordinary boy.","Ibn Mas‘ud named three who showed the deepest firasah: al-‘Aziz with Yusuf, the woman who said of Musa “hire him” (28:26), and Abu Bakr in choosing ‘Umar."]},
  {t:"Allah’s plan",l:["“Thus We established Yusuf in the land, so that We might teach him the interpretation of dreams.”","Dream interpretation is a gift from Allah, not something learned from a book.","Tawakkul is to take the means, as Ya‘qub did, and rest the outcome with Allah."]},
  {t:"Maturity (v. 22)",l:["Ashudd is full strength; linguists place it between 18 and 40. Most said he was about 19 or 20.","Hukm is wisdom, and also authority. ‘Ilm is knowledge. Hikmah is knowing how to act on knowledge.","“Thus We reward the muhsinin”: righteousness is rewarded with wisdom and knowledge."]}],
 home:"Write down one hardship that later proved to be a route to something better. Which means did you take, and what did you leave to Allah?",
 game:{type:"order",title:"From the well to maturity",help:"Tap the events in the order they occur in the surah.",items:["A caravan halts near the well","The water-drawer lowers his bucket","Yusuf is concealed as merchandise","He is sold for a few dirhams","Al-‘Aziz tells his wife to honour his stay","On reaching maturity he is given wisdom and knowledge"]},
 quiz:[
  {q:"What does “bakhs” mean?",o:["A deficient price","A fair price","A gift"],a:0,w:"He was sold for less than his worth."},
  {q:"Why was Yusuf sold so cheaply?",o:["He cost them nothing, and they wanted to be rid of stolen goods","He was ill","The buyer was their relative"],a:0,w:"What costs nothing is valued little, and stolen goods are sold fast."},
  {q:"Who is NOT among the three Ibn Mas‘ud named for their firasah?",o:["The king of Egypt","Al-‘Aziz","Abu Bakr"],a:0,w:"The three are al-‘Aziz, the woman in the story of Musa, and Abu Bakr."},
  {q:"What is tawakkul?",o:["Taking the means and leaving the outcome to Allah","Abandoning the means","Optimism about the future"],a:0,w:"We do our part, and the outcome rests with Allah."},
  {q:"What does “hukm” in verse 22 combine?",o:["Wisdom and authority","Wealth and lineage","Beauty and strength"],a:0,w:"It carries both wisdom and power."}]},

/* ---------- Part 3: The Seduction ---------- */
{id:6,verses:[23,24],title:"The Trial of Temptation",short:"Verses 23–24",
 big:"The most discussed verses of the surah: a sustained seduction by a woman with power over Yusuf, his immediate recourse to Allah, and the meaning of “he desired her, had he not seen the proof of his Lord”.",
 remember:["Rawadat: she tried repeatedly. “She in whose house he was” stresses her authority over him.","Ghallaqat: an emphatic form. She bolted every door.","Ma‘adha Allah: his first reflex was to seek refuge in Allah.","Hamm has two interpretations. An inclination that is not acted on is not a sin.","The strongest view of the burhan: his certainty that Allah was watching."],
 more:[
  {t:"The setting (v. 23)",l:["On the Mi‘raj the Prophet ﷺ saw Yusuf, who had been given half of beauty (Muslim).","Rawadat-hu: she sought to seduce him, and the verb indicates repetition.","He was a servant in her house and she belonged to the elite. The author describes it as harassment from which Yusuf had no escape.","“No man is alone with a woman but Shaytan is the third” (al-Tirmidhi)."]},
  {t:"His reply",l:["Ma‘adha Allah: “the One whose refuge I seek is Allah”.","“He is my rabb, who made good my stay”: many commentators read this as al-‘Aziz. The author prefers that it refers to Allah, since the verse begins and ends with Him.","“The wrongdoers never succeed.”","The lesson is to turn to Allah at once when tempted (41:36)."]},
  {t:"“She desired him, and he…” (v. 24)",l:["The predominant reading: he would have desired her had he not seen the proof, so no hamm occurred.","A minority reading: he felt a natural inclination and did not act. An evil intended and then abandoned is written as a good deed (Muslim).","The author sees no problem in the plain sense, and says it only increases our respect for Yusuf."]},
  {t:"Prophets and sin",l:["The strongest view: prophets are protected from major sins and from anything that would cast doubt on their character, such as lying.","They may slip through human emotion, as Adam did. Allah corrects them at once, and they do not persist."]},
  {t:"The proof, and sincerity",l:["Burhan is a decisive proof. Of seven or eight views, the strongest is his certainty that Allah was watching.","Su’ is evil in general; fahsha’ is indecency. He was kept from both.","Two authentic recitations: mukhlasin (chosen) and mukhlisin (sincere). The way to be chosen is to be sincere.","Among the seven shaded on the Day of Judgement is one called by a person of rank and beauty who says “I fear Allah” (al-Bukhari)."]}],
 home:"Identify the “locked room” situations in your own life, where no one would know. Decide now what your “ma‘adha Allah” will be in each.",
 game:{type:"match",title:"Terms from verses 23–24",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Rawadat","She sought to seduce, repeatedly"],["Ma‘adha Allah","Allah is my refuge"],["Hamm","Desire or inclination"],["Burhan","A decisive proof"],["Fahsha’","Indecency"],["Mukhlis","Sincere"]]},
 quiz:[
  {q:"What does the form “ghallaqat” show?",o:["Emphatic, thorough locking","A single door pulled shut","Doors left ajar"],a:0,w:"The doubled form indicates that she bolted every door."},
  {q:"How does the author prefer to read “my rabb” in verse 23?",o:["As Allah","As al-‘Aziz","As the king"],a:0,w:"The verse begins and ends with Allah, so the middle fits Him too."},
  {q:"What is the predominant reading of verse 24?",o:["He would have desired her had he not seen the proof","He acted, then repented","The verse is about another person"],a:0,w:"On this reading no hamm occurred on his part."},
  {q:"What is the strongest view on the burhan?",o:["His certainty that Allah was watching","A message from al-‘Aziz","A guard at the door"],a:0,w:"He was certain that Allah was watching him."},
  {q:"What is the strongest view on prophets and sin?",o:["They are protected from major sins and from what undermines their character","They can commit any sin","They never err in anything at all"],a:0,w:"They may slip through human emotion, and are corrected at once."}]},

{id:7,verses:[25,29],title:"The Shirt as Evidence",short:"Verses 25–29",
 big:"A race to the door, an instant counter-accusation, and a relative who proposes a test. The passage teaches about intentions, slander, self-defence and evidence.",
 remember:["The same outward act can carry opposite intentions.","“Her master” (sayyidaha): the wording underlines her betrayal.","She alleged intent, not an act. Blaming an innocent adds slander to sin (4:112).","Yusuf defended himself here, yet let a later accusation pass.","Ibn Taymiyyah and Ibn al-Qayyim allowed judgement on strong circumstantial evidence."],
 more:[
  {t:"At the door (v. 25)",l:["Istabaqa: both raced, he to flee sin and she to prevent him. Do not judge an act before knowing the intention.","Alfaya: they came upon him unexpectedly.","Sayyidaha, “her master”, not “her husband”: she betrayed one to whom she owed loyalty.","She lied in an instant, alleging that he “intended evil”, which carries a lighter burden of proof, and she proposed the penalty herself."]},
  {t:"Shifting the blame",l:["Whoever commits a sin and blames an innocent person bears slander as well (4:112).","Sin has a domino effect, as it did with the brothers.","Iblis blamed Allah for his own disobedience (7:16). Shifting blame is his trait."]},
  {t:"Yusuf’s defence (v. 26)",l:["“It was she who sought to seduce me”: specific, where her charge was vague.","He spoke of her in the third person, addressing al-‘Aziz.","As a slave, silence could mean prison, so he spoke. Later, as a minister, he let an accusation pass because answering would have exposed his identity. Defending one’s honour depends on the consequences."]},
  {t:"The witness (v. 26–28)",l:["Shahid min ahliha: from her own family, so not biased against her. The soundest view is that he was a relative living in the house.","He is called a witness although he saw nothing: he stated a sound rule of evidence.","Torn from the front, she is truthful. Torn from the back, he is.","The motifs of racing and a shirt return from the brothers’ story."]},
  {t:"Evidence, and al-‘Aziz (v. 28–29)",l:["Most jurists required two witnesses, and four for zina. Ibn Taymiyyah and Ibn al-Qayyim accepted strong circumstantial evidence, and many judges today argue the same for DNA and fingerprints. This verse is part of that debate.","“Yusuf, turn away from this”: al-‘Aziz chose damage control. Pride tolerates corruption as long as it stays private.","He told his wife to seek forgiveness. Even without revelation, people know by fitrah that infidelity is wrong."]}],
 home:"Recall a time you judged someone by an outward act. What might their intention have been? Then consider when it is right to defend yourself, and when to let an accusation pass.",
 game:{type:"match",title:"Terms from verses 25–29",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Istabaqa","They raced one another"],["Sayyidaha","“Her master”"],["Shahid min ahliha","A witness from her family"],["Torn from the back","He was fleeing: he is truthful"],["Torn from the front","Would have supported her claim"],["Fitrah","The innate moral sense"]]},
 quiz:[
  {q:"Why does the verse say “her master” and not “her husband”?",o:["To underline her betrayal","Because he was the king","For no particular reason"],a:0,w:"She betrayed one to whom she owed loyalty."},
  {q:"What did she accuse Yusuf of?",o:["Intending evil","Completing an assault","Theft"],a:0,w:"She alleged intent, which is harder to disprove."},
  {q:"Why did Yusuf answer this accusation but not a later one?",o:["Here silence risked prison; later a reply would have exposed him","He was angrier this time","He was ordered to speak"],a:0,w:"He weighed the consequences each time."},
  {q:"Who accepted judgement on strong circumstantial evidence?",o:["Ibn Taymiyyah and Ibn al-Qayyim","No scholar at all","Every jurist, unanimously"],a:0,w:"They argued two witnesses are not always necessary."},
  {q:"How is al-‘Aziz’s response best described?",o:["Damage control to protect his reputation","Full justice","Immediate punishment of Yusuf"],a:0,w:"He wanted the affair kept private."}]},

{id:8,verses:[30,35],title:"Gossip, the Banquet and Prison",short:"Verses 30–35",
 big:"The scandal becomes public. The wife of al-‘Aziz turns the gossip to her advantage and threatens Yusuf openly; he chooses prison. The powerful jail an innocent man to protect a reputation.",
 remember:["Shaghafaha hubban: love had pierced the lining of her heart.","Three sins of the tongue: ghibah, buhtan and namimah.","Fa-sta‘sam: “he held firm”. She herself testifies to his inner beauty.","His du‘a: prison is dearer; without Allah’s help he would incline and be among the jahilin.","Life is a succession of tests, each followed by a higher ease."],
 more:[
  {t:"The gossip (v. 30)",l:["Most scholars said the news leaked through the servants of the household.","Shaghaf is the inner lining of the heart: the love had reached its core.","Turawidu, “she is trying to seduce”, implies that she had failed, which added to her humiliation."]},
  {t:"Three sins of the tongue",head:["Term","Meaning"],rows:[["Ghibah","Saying of an absent person what they would dislike, even if true"],["Buhtan","Slander: spreading a lie about someone"],["Namimah","Carrying talk in order to harm; “the tale-bearer shall not enter Paradise” (Muslim)"]]},
  {t:"The etiquette of scandal",p:"When an indecent scandal occurs, Islam teaches silence and concealment, not amplification. The author adds that this does not apply where a crime has been committed: a victim has every right to expose it and involve the law."},
  {t:"The banquet (v. 31–32)",l:["Muttaka’ is a place to recline. She gave each woman a knife and called Yusuf out.","They cut their hands and said: this is no human, this is a noble angel. His beauty was not a matter of taste.","“I did seek to seduce him, but he held firm.” She admits it openly, then threatens him with prison.","Allah knows best on whom to bestow each blessing. We should be content with our portion."]},
  {t:"The du‘a and the verdict (v. 33–35)",l:["“My Lord, prison is dearer to me than what they invite me to”: he weighed a worldly punishment against the Hereafter.","“Unless You turn their plot from me, I will incline towards them”: he claimed no strength of his own.","Jahil: whoever knowingly disobeys Allah acts in ignorance (compare 4:17).","“So his Lord answered him.” Yet after seeing the signs of his innocence they jailed him: the victim was blamed to protect the powerful."]}],
 home:"Review one day of your own speech for ghibah and namimah. Then memorise Yusuf’s du‘a in 12:33.",
 game:{type:"match",title:"Terms from verses 30–35",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Ghibah","Saying of the absent what they would dislike"],["Buhtan","Slander"],["Namimah","Tale-bearing"],["Shaghaf","The inner lining of the heart"],["Fa-sta‘sam","He held firm"],["Jahil","One who acts in ignorance"]]},
 quiz:[
  {q:"How did the news most likely spread?",o:["Through the servants of the household","Yusuf told people","Al-‘Aziz announced it"],a:0,w:"Most scholars said it leaked through the household servants."},
  {q:"What is ghibah?",o:["Saying of an absent person what they would dislike, even if true","Spreading a lie","Praising someone to their face"],a:0,w:"It is backbiting, even when what is said is true."},
  {q:"What does “fa-sta‘sam” tell us?",o:["He firmly resisted","He fled the country","He agreed"],a:0,w:"He held firm: a testimony to his inner beauty."},
  {q:"What did Yusuf admit in his du‘a?",o:["That without Allah’s help he would incline towards them","That he was beyond temptation","That he wished for wealth"],a:0,w:"He claimed no strength of his own."},
  {q:"Why was Yusuf imprisoned?",o:["To protect the reputation of the powerful, despite the proofs","He was proven guilty","He asked al-‘Aziz for it"],a:0,w:"They jailed the victim to calm the scandal."}]},
/* ---------- Part 4: The Prisoner ---------- */
{id:9,verses:[36,40],title:"Da‘wah in the Prison",short:"Verses 36–40",
 big:"Two of the king’s servants ask Yusuf to interpret their dreams. Before answering, he gives a complete call to tawhid: a model of the content, order and manner of da‘wah.",
 remember:["The two were the king’s baker and wine-maker, said to be accused of plotting to poison him.","“We see you are of the muhsinin”: his conduct earned him a hearing.","Tawhid first: the order the Prophet ﷺ gave Mu‘adh for Yemen (Muslim).","“My two companions of the prison”: a bond, not an insult.","“Many lords, or Allah, al-Wahid, al-Qahhar?” and “The hukm belongs only to Allah.”"],
 more:[
  {t:"Credentials before message (v. 36–37)",l:["He was approachable, and his character made the prisoners trust him.","He promised the interpretation before their next meal, settling their minds so they would listen.","“This is from what my Lord taught me”: he attributes every good to Allah, and rules out sorcery or his own cleverness.","He explains why: “I have left the religion of a people who do not believe in Allah and deny the Hereafter.”"]},
  {t:"The three pillars in a few sentences (v. 37–38)",l:["Tawhid: Allah’s Lordship, Names and Attributes, and His sole right to worship.","Risalah: the religion of his fathers Ibrahim, Ishaq and Ya‘qub, the message of every prophet (21:25).","Akhirah: those who deny the Hereafter.","“Never to associate anything (min shay’) with Allah”: the min shay’ is emphatic, meaning nothing whatsoever."]},
  {t:"Gratitude in adversity",p:"Kidnapped, enslaved, falsely accused and imprisoned, he still says “that is from Allah’s favour upon us”. The believer dwells on the blessings he cannot fully thank Allah for, not on a few hardships."},
  {t:"The argument (v. 39–40)",l:["The Qur’an addresses people as “O mankind” and “O Children of Adam”; the harsher addresses are reserved for those who demand that tawhid be compromised (109:1–2, 39:64).","A rhetorical question appealing to fitrah: many lords, or One who rules supreme?","Al-Wahid: there is nothing like Him. Al-Qahhar: He subdues all things.","“Names you and your fathers have named”: not all religions are equal. The hukm, the right to legislate, is Allah’s alone. That is ad-din al-qayyim: Tawhid al-Uluhiyyah."]},
  {t:"Method, not just content",l:["Criticise the practice, not the person: he says “we” do not commit shirk, without denouncing them.","Know your audience; combine reason and emotion; highlight common ground.","The Qur’an does not say whether they accepted. The duty is to present the truth well, not to bend it in order to win converts."]}],
 home:"Write out how you would explain tawhid to a curious friend in under a minute, following Yusuf’s order: rapport, credentials, the message, a question to reflect on.",
 game:{type:"match",title:"Terms from verses 36–40",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-Wahid","The One; nothing is like Him"],["Al-Qahhar","The One who subdues all"],["Ad-din al-qayyim","The upright religion"],["Tawhid al-Uluhiyyah","Worshipping Allah alone"],["Risalah","The message of the prophets"],["Muhsinin","The doers of good"]]},
 quiz:[
  {q:"Why did the prisoners trust Yusuf with their dreams?",o:["His character: “we see you are of the muhsinin”","He offered them money","He was a royal official"],a:0,w:"His conduct established his credentials."},
  {q:"What order of da‘wah did the Prophet ﷺ give Mu‘adh?",o:["Tawhid, then prayer, then zakah","Zakah, then prayer, then tawhid","Any order"],a:0,w:"The most important comes first."},
  {q:"Which three pillars does Yusuf cover?",o:["Tawhid, risalah and akhirah","Prayer, fasting and hajj","Law, history and language"],a:0,w:"Belief in Allah, the message, and the Hereafter."},
  {q:"Whom does Yusuf criticise?",o:["The practice of shirk, not the people","The prisoners personally","No one at all"],a:0,w:"He criticises the action, not the person."},
  {q:"What does “the hukm is only for Allah” establish here?",o:["Only Allah legislates worship and religion","The king’s law is final","Judges must be prophets"],a:0,w:"Only what Allah has authorised is the true religion."}]},

{id:10,verses:[41,42],title:"The Interpretation, and “Mention Me”",short:"Verses 41–42",
 big:"Yusuf interprets both dreams with prophetic certainty, then asks the man who will be freed to mention him to his master. The correct reading of verse 42 teaches tawakkul with means.",
 remember:["He softens bad news: “one of you”, without naming him.","“The matter has been decided”: only a prophet interprets with such certainty.","Asking for help is permissible; tawakkul includes taking means.","“Shaytan made him forget”: the pronoun refers to the freed man.","Bid‘ sinin: three to nine years. Most say seven."],
 more:[
  {t:"The interpretations (v. 41)",l:["The wine-maker would be released and serve his master wine again.","The bread the birds ate stood for the baker’s head: he would be crucified and left unburied.","He addressed them again as “my two companions of the prison”."]},
  {t:"Means and trust",l:["“Mention me before your master”: he sought release through lawful means.","The Sirah is full of means: alliances, protection, defensive war, treaties.","It is Sunnah to use every permissible means for a legitimate aim, including the courts."]},
  {t:"Who forgot? (v. 42)",l:["Correct reading: Shaytan made the freed man forget to mention Yusuf to the king.","A rejected reading: Shaytan made Yusuf forget to remember Allah, so he was punished with more years for asking a person for help.","The author calls that reading false: it rests on a mistaken idea of tawakkul. Even the prophets’ miracles began with an action."]},
  {t:"The wisdom of the delay",l:["Forgetfulness is one of Shaytan’s tools, and Allah does not hold us to account for what we forget.","Had Yusuf been freed then, he would not have reached the position he did.","“Victory comes with patience, relief with affliction, and with hardship comes ease” (Ahmad)."]}],
 home:"Identify one goal you have been only making du‘a for. List one permissible means you could also take.",
 game:{type:"sort",title:"Correct reading or rejected reading?",help:"Which reading of verse 42 does each statement belong to?",buckets:["The correct reading","The rejected reading"],items:[["The freed man forgot to mention Yusuf",0],["Yusuf was punished for asking a person",1],["Taking means is part of tawakkul",0],["Asking anyone but Allah is a sin",1],["The delay had a hidden wisdom",0],["Yusuf forgot to remember Allah",1]]},
 quiz:[
  {q:"Why did Yusuf say “one of you” instead of naming the man?",o:["To soften the bad news","He did not know which","He forgot their names"],a:0,w:"Politeness in delivering hard news."},
  {q:"In the correct reading, who forgot?",o:["The freed wine-maker","Yusuf","The king"],a:0,w:"Shaytan made the freed man forget to mention Yusuf."},
  {q:"Why does the author reject the other reading?",o:["It rests on a mistaken idea of tawakkul","It is too short","No scholar ever held it"],a:0,w:"Taking lawful means is part of trusting Allah."},
  {q:"“Bid‘ sinin” means…",o:["Three to nine years","Exactly one year","A lifetime"],a:0,w:"Most scholars said seven years."},
  {q:"Which shows that it is Sunnah to use means?",o:["The Prophet’s ﷺ alliances and treaties","Avoiding all planning","Relying only on dreams"],a:0,w:"The Sirah is full of the use of means."}]},

/* ---------- Part 5: The King and His Dream ---------- */
{id:11,verses:[43,45],title:"Al-Malik and His Ru’ya",short:"Verses 43–45",
 big:"The king’s dream reaches a court that cannot interpret it. The Qur’an’s choice of “al-Malik” rather than “Pharaoh” is itself a sign, and the cupbearer finally remembers.",
 remember:["The Qur’an calls him al-Malik; for Musa’s ruler it says Fir‘awn.","Historians link Yusuf’s era to the Hyksos rulers, who did not use the title Pharaoh.","The king called it a ru’ya (a meaningful vision); his court called it adghath ahlam (jumbled dreams).","The court covered their ignorance rather than admit it.","Wa-ddakara ba‘da ummah: he remembered “after a time”, an implied rebuke."],
 more:[
  {t:"Al-Malik, not Fir‘awn",l:["The Bible calls both rulers Pharaoh.","Historians say the rulers of Yusuf’s time were the Hyksos, outsiders who did not use the title; the rulers in Musa’s time were a native dynasty who did.","The Prophet ﷺ had no means of knowing this distinction. The author presents it as evidence that the Qur’an is from Allah.","Some placed Yusuf’s city at Manf (Memphis)."]},
  {t:"Ru’ya and ahlam",l:["Ru’ya: a true, significant vision. The king sensed his dream mattered.","Adghath ahlam: confused, meaningless dreams. This was the court’s verdict.","“We do not know the interpretation of such dreams”: they saved face by implying the dream itself was at fault."]},
  {t:"The cupbearer remembers (v. 45)",l:["“After a time” implies he should have remembered long before.","He saw an opportunity: to make himself known at court and present the remarkable interpreter.","“Send me forth” to the prison."]}],
 home:"Recall a time you covered not knowing something. Practise saying “I don’t know” plainly.",
 game:{type:"match",title:"Terms from verses 43–45",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-Malik","The king (in Yusuf’s story)"],["Fir‘awn","The ruler’s title in Musa’s story"],["Ru’ya","A meaningful vision"],["Adghath ahlam","Jumbled dreams"],["Ba‘da ummah","After a long time"],["Al-mala’","The chiefs of the court"]]},
 quiz:[
  {q:"What title does the Qur’an give Egypt’s ruler in Surah Yusuf?",o:["Al-Malik","Fir‘awn","Al-‘Aziz"],a:0,w:"The king, not Pharaoh."},
  {q:"Why is that significant?",o:["It matches history the Prophet ﷺ could not have known","It is a copyist’s choice","The two titles mean the same"],a:0,w:"The author presents it as a sign of the Qur’an’s divine source."},
  {q:"What did the court call the dream?",o:["Jumbled dreams","A prophecy","A warning from the gods"],a:0,w:"Adghath ahlam: confused dreams."},
  {q:"What does “after a time” imply about the cupbearer?",o:["He should have remembered long before","He remembered at once","He never knew Yusuf"],a:0,w:"An implied rebuke of his forgetting."},
  {q:"How did the court handle their ignorance?",o:["They blamed the dream rather than admit it","They admitted it humbly","They consulted Yusuf"],a:0,w:"They saved face."}]},

{id:12,verses:[46,49],title:"Seven Years of Plenty, Seven of Drought",short:"Verses 46–49",
 big:"Yusuf, still a prisoner, interprets the dream, prescribes a national food policy, and infers a year of relief that the dream never mentioned, all without conditions and for the good of his oppressors.",
 remember:["“Yusuf, O siddiq”: the cupbearer’s title for him; he offered no apology.","Store the harvest in its ears for seven years, eating little.","Seven hard years would consume the stores, except seed kept back.","Then a year of rain in which they press (oil and wine): inferred, not seen in the dream.","The Prophet ﷺ: I would not have answered until they let me out."],
 more:[
  {t:"No grudge, no bargain",l:["Seven years of being forgotten, and no apology, yet Yusuf neither rebuked nor refused him.","The Prophet ﷺ said he was amazed at Yusuf’s patience and generosity: in his place, he would not have interpreted until released (al-Tabarani).","The cupbearer appears to have hidden that the dream was the king’s, hoping for the credit."]},
  {t:"Interpretation and policy",l:["Seven fat cows and green ears: seven years of abundance. Seven lean cows and dry ears: seven years of drought.","Leaving grain in the ear preserves it for years.","He went beyond the question: a prisoner was in effect directing the king."]},
  {t:"The inferred year (v. 49)",l:["The dream shows fourteen years; the fifteenth comes from Yusuf’s understanding: a drought ends only with abundant rain.","“They will press”: people press fruit for oil and wine only when there is a surplus, so it signals plenty.","It shows the depth of knowledge Allah had given him."]},
  {t:"Mercy to all people",p:"He did not withhold beneficial knowledge from idolaters who had imprisoned him unjustly. He valued their lives as fellow human beings. Those who show mercy are shown mercy."}],
 home:"Is there someone who wronged you whom you could still benefit? Consider how Yusuf’s example applies.",
 game:{type:"order",title:"The fifteen years",help:"Tap the stages in the order Yusuf described them.",items:["Sow for seven consecutive years","Leave the harvest in its ears","Eat only a little","Seven severe years consume the stores","Keep back a little for seed","A year of rain in which they press"]},
 quiz:[
  {q:"What did the cupbearer call Yusuf?",o:["As-siddiq, the man of truth","The prisoner","The foreigner"],a:0,w:"He had witnessed Yusuf’s truthfulness."},
  {q:"What did the Prophet ﷺ say about Yusuf’s response?",o:["He would not have answered until released","Yusuf should have refused","He would have asked for gold"],a:0,w:"He was amazed at Yusuf’s patience and generosity."},
  {q:"Where does the year of rain come from?",o:["Yusuf’s inference, not the dream itself","The seventh cow","The king’s second dream"],a:0,w:"A drought can only end with abundant rain."},
  {q:"Why mention pressing oil and wine?",o:["It signals abundance","It is a warning about wine","It refers to the cupbearer"],a:0,w:"People press fruit only when there is surplus."},
  {q:"What does Yusuf’s help to his oppressors show?",o:["Mercy towards all people","Fear of the king","A wish for reward"],a:0,w:"He valued their lives as fellow humans."}]},

/* ---------- Part 6: From Prisoner to Minister ---------- */
{id:13,verses:[50,53],title:"Exoneration",short:"Verses 50–53",
 big:"Offered freedom, Yusuf refuses to leave until his honour is cleared. The inquiry forces a public confession from the wife of al-‘Aziz, followed by a reflection on the soul that commands evil.",
 remember:["“Return to your master and ask about the women who cut their hands.”","He named the women, not the wife of al-‘Aziz: discretion that also roused the king’s curiosity.","Hasha lillah: “Allah forbid! We know of no evil in him.”","Al-ana hashasa l-haqq: “Now the truth is clear.” She confessed.","The strongest view: verses 52–53 are her words, not Yusuf’s."],
 more:[
  {t:"Honour before freedom (v. 50)",l:["The charge was a moral one that his society barely cared about, yet he would not leave with it on his record.","The Prophet ﷺ praised his patience in this.","Allah’s plan: the dream drew the king personally into a case he would otherwise never have heard."]},
  {t:"The inquiry (v. 51)",l:["The king asked the women what happened when they sought to seduce Yusuf.","Hasha lillah is an exclamation of disbelief at the very question.","Once all had testified, only the wife of al-‘Aziz was left. Nearly a decade had passed; some say al-‘Aziz had died."]},
  {t:"Who speaks in verses 52–53?",l:["The most reliable view: she speaks, about her husband. “He will know I did not betray him in his absence”: she intended the sin but did not commit it.","Another view makes Yusuf the speaker, about his master or about Allah. The author says the context does not support it.","“I do not acquit myself”: a confession after years of guilt for imprisoning an innocent man."]},
  {t:"The three states of the soul",head:["Soul","Description"],rows:[["An-nafs al-ammarah","Commands evil; without the compass of faith"],["An-nafs al-lawwamah","Reproaches itself; torn between faith and desire (75:2). Most Muslims"],["An-nafs al-mutma’innah","At peace with its Lord (89:27–28)"]]},
  {t:"Fitrah",p:"The scholars differ on whether these are three kinds of soul or three states of one soul; both views are valid. Every child is born on the fitrah (al-Bukhari): no one is created evil. With faith the soul inclines to good; when faith leaves, it inclines to evil."}],
 home:"Over the next week, note which state your soul was in at the end of each day: ammarah, lawwamah or mutma’innah.",
 game:{type:"match",title:"Terms from verses 50–53",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Hasha lillah","Allah forbid!"],["Hashasa l-haqq","The truth has become clear"],["An-nafs al-ammarah","The soul that commands evil"],["An-nafs al-lawwamah","The self-reproaching soul"],["An-nafs al-mutma’innah","The soul at peace"],["Fitrah","The pure nature every child is born on"]]},
 quiz:[
  {q:"Why did Yusuf refuse to leave prison at first?",o:["He wanted his honour cleared","He feared the king","He had not finished his sentence"],a:0,w:"Being accused of immorality was worse to him than prison."},
  {q:"Why did he ask about “the women who cut their hands”?",o:["Discretion, and to rouse the king’s curiosity","He had forgotten her name","They were the real culprits"],a:0,w:"He avoided naming her and let the king investigate."},
  {q:"According to the most reliable view, who speaks in verse 52?",o:["The wife of al-‘Aziz","Yusuf","The king"],a:0,w:"She says she did not betray her husband in his absence."},
  {q:"Which soul do most Muslims have?",o:["An-nafs al-lawwamah","An-nafs al-ammarah","None of these"],a:0,w:"The self-reproaching soul, torn between faith and desire."},
  {q:"What does the hadith of fitrah establish?",o:["No one is created evil","Some are born evil","Only prophets have a fitrah"],a:0,w:"Every child is born on the pure nature."}]},

{id:14,verses:[54,57],title:"Over the Storehouses of the Land",short:"Verses 54–57",
 big:"Cleared, Yusuf is taken into the king’s service and asks for the storehouses, citing competence and trustworthiness. The cycle of trial and elevation completes, with a reminder that the Hereafter’s reward is better.",
 remember:["Makin amin: established in rank and fully trusted.","Hafiz ‘alim: one who guards well and knows well.","Asking for a post you are qualified for, in order to serve, is legitimate.","Serving in a non-Muslim government is permissible if it benefits people and does not compromise belief or practice.","Two rewards for believers: in this world and in the Hereafter (Sufyan ibn ‘Uyaynah)."],
 more:[
  {t:"Two summonses (v. 54)",l:["First: “bring him to me”. After the inquiry: “bring him to me, I will take him exclusively for myself”.","Convinced of his innocence before meeting him, the king made him an inner adviser after speaking with him."]},
  {t:"Hafiz ‘alim (v. 55)",l:["He knew the coming crisis from the dream, so he asked for the role that could meet it.","‘Alim: the knowledge to manage. Hafiz: the integrity to protect what is entrusted. Success needs both the inner and the outer.","He becomes the most powerful man after the king; in a famine, the one who controls food holds real power."]},
  {t:"Working within a system",p:"The author derives that Muslims may serve in a non-Islamic government when it benefits society and does not hinder religious practice or belief. Working within a system does not endorse everything in it; scholars of each land and era set the limits."},
  {t:"“Thus We established Yusuf” (v. 56)",l:["The phrase first appeared at verse 21, in the house of al-‘Aziz. Now it marks his rise to power.","Well, slavery, accusation, prison, palace: each trial greater, each relief sweeter.","“We do not let the reward of the muhsinin be lost.”"]},
  {t:"The better reward (v. 57)",p:"Wealth and status are short-lived. Sufyan ibn ‘Uyaynah and others took this verse as evidence that believers are rewarded twice, in this world and the next, while disbelievers are rewarded for good works in this world only."}],
 home:"Write down your own “hafiz ‘alim”: one skill you could offer your community and one trust you must guard.",
 game:{type:"order",title:"The cycle of trial and elevation",help:"Tap Yusuf’s stations in the order they happened.",items:["In the care of his father","Thrown into the well","Sold into slavery","Falsely accused","Imprisoned","Over the storehouses of Egypt"]},
 quiz:[
  {q:"What two qualities did Yusuf cite?",o:["Hafiz and ‘alim","Strong and handsome","Rich and noble"],a:0,w:"A knowing guardian."},
  {q:"What did the king call him after speaking with him?",o:["Makin amin: honoured and trusted","A foreign slave","A dream-teller"],a:0,w:"Established in rank and fully trusted."},
  {q:"What does the author derive about serving in a non-Muslim government?",o:["Permissible if it benefits people without compromising faith","Always forbidden","Required of every Muslim"],a:0,w:"Within limits set by the scholars of each era."},
  {q:"Where did “Thus We established Yusuf in the land” first appear?",o:["Verse 21","Verse 4","Verse 100"],a:0,w:"When he entered the house of al-‘Aziz."},
  {q:"What did Sufyan ibn ‘Uyaynah take from verse 57?",o:["Believers are rewarded in this world and the next","There is no reward in this world","Only scholars are rewarded"],a:0,w:"Two rewards for the believers."}]},
/* ---------- Part 7: The Brothers Return ---------- */
{id:15,verses:[58,62],title:"The Brothers Before Al-‘Aziz",short:"Verses 58–62",
 big:"Probably in the sixth year of famine, the brothers come to Egypt for grain. Yusuf knows them; they do not know him. Through generosity, an incentive and a warning, he works to bring Binyamin to Egypt.",
 remember:["Four words, “and Yusuf’s brothers came”, imply years of famine and a long journey: Qur’anic concision.","As foreigners buying in bulk, they needed the minister’s authorisation.","Jahhazahum bi-jahazihim: he equipped them, with extra for the road.","“Bring me a brother of yours from your father”: an incentive (full measure, best of hosts) then a warning (no measure).","“We will seek to persuade his father”: his father, not ours."],
 more:[
  {t:"Why did they not know him? (v. 58)",l:["He had been about seven when they last saw him; now he was a grown man and a minister.","He shared their dress and their Hebrew, yet his survival, let alone his rank, was unimaginable to them.","The scholars describe him questioning them until he had the whole news of his family."]},
  {t:"Incentive and warning (v. 59–60)",l:["“Do you not see that I give full measure, and I am the best of hosts?”","“If you do not bring him, there is no measure for you with me, nor will you come near me.”","Why Binyamin? The most logical view is that it was by Allah’s inspiration, part of His plan. Possible wisdoms: to strengthen Ya‘qub’s faith, or concern that the brothers mistreated Binyamin."]},
  {t:"The returned merchandise (v. 62)",l:["Trade was largely barter. He had their goods put back in their saddlebags.","Purpose: that they would recognise it at home and return; his family was poor and might not otherwise manage another trip.","Was it ethical? He acted within his authority: either the king allowed him discretion over the grain, or he repaid the treasury himself. Abuse of office is inconceivable for him."]}],
 home:"Reflect on how Yusuf held power over those who had wronged him and used it for their good.",
 game:{type:"order",title:"The first visit",help:"Tap the events in the order they occur in the surah.",items:["The brothers enter upon Yusuf","He recognises them; they do not recognise him","He equips them with their supplies","He asks for their brother from their father","He warns: no measure without him","He has their goods returned to their bags"]},
 quiz:[
  {q:"Why did the brothers deal with Yusuf personally?",o:["Foreigners buying in bulk needed the minister’s authorisation","They asked for him by name","He was the only seller"],a:0,w:"They needed a higher authorisation."},
  {q:"What is the most logical reason Yusuf demanded Binyamin?",o:["Allah’s inspiration, part of the divine plan","Revenge on his brothers","To make Binyamin a servant"],a:0,w:"The scholars discuss many reasons; this is the most logical."},
  {q:"What does “his father” in verse 61 reveal?",o:["Lingering jealousy","Respect","Confusion"],a:0,w:"They did not say “our father”."},
  {q:"Why return their merchandise?",o:["So they could and would come back","To insult them","By accident"],a:0,w:"His family was poor, and he wanted them to return."},
  {q:"How does the author answer whether returning the goods was ethical?",o:["He acted within his authority, or repaid the treasury himself","It was not ethical","The Qur’an condemns it"],a:0,w:"Abuse of power is inconceivable for him."}]},

{id:16,verses:[63,66],title:"Should I Trust You Again?",short:"Verses 63–66",
 big:"The brothers press Ya‘qub to send Binyamin, using the very words they once used for Yusuf. Ya‘qub entrusts the matter to Allah, al-Hafiz, and releases Binyamin only against a solemn oath.",
 remember:["“Send our brother with us… and we will guard him”: the same words as verse 12.","“The believer is not stung twice from the same hole” (al-Bukhari).","“Allah is the best guardian, and He is the Most Merciful of the merciful.”","Ma nabghi: “what more could we want?” Two readings.","Mawthiq: a solemn oath by Allah. “Allah is witness over what we say.”"],
 more:[
  {t:"Words that echo (v. 63–64)",l:["They arrived pressing him at once: “measure has been denied us”. The family was in real need.","“We will guard him” must have struck Ya‘qub like a thunderbolt.","His love for Yusuf had not dimmed, and he held the brothers responsible for his loss.","Reputation: their past made trust difficult. If that is so in this world, how much more for entry to Jannah."]},
  {t:"The returned goods (v. 65)",l:["Ma nabghi: “What more do we desire? Do you think we are deceiving you?” Or: “We seek nothing wrong; we only want more grain.”","Yusuf’s policy was one camel-load per person; Binyamin meant an extra load.","Fiqh: some scholars require a spoken offer and acceptance in every sale. This story shows an unspoken mutual understanding can suffice, and that voluntarily returning a buyer’s payment is permissible."]},
  {t:"The oath (v. 66)",l:["“Unless you are surrounded”: unless something beyond your control overpowers you.","Swearing by Allah is grave: those who trade Allah’s covenant and their oaths for a small price have no share in the Hereafter (3:77).","He knew his sons would not swear by Allah and then break it."]}],
 home:"Reflect: whose trust have you lost, or nearly lost? What would rebuilding it require?",
 game:{type:"match",title:"Terms from verses 63–66",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-Hafiz","The Guardian"],["Arham ar-rahimin","Most Merciful of the merciful"],["Ma nabghi","What more could we want?"],["Mawthiq","A solemn covenant"],["Kayl ba‘ir","A camel-load"],["Yuhat bikum","You are overpowered"]]},
 quiz:[
  {q:"Which earlier words do the brothers repeat?",o:["“We will guard him”","“A wolf ate him”","“We are a strong group”"],a:0,w:"The same promise they made about Yusuf."},
  {q:"Which hadith fits Ya‘qub’s caution?",o:["The believer is not stung twice from the same hole","The strong one controls his anger","Spread salam"],a:0,w:"He would not repeat the same mistake."},
  {q:"What fiqh point does the author draw from the returned goods?",o:["An unspoken mutual understanding can validate a transaction","All sales must be written","Returning payment is forbidden"],a:0,w:"Both parties clearly agreed without words."},
  {q:"Why demand an oath by Allah specifically?",o:["He knew they would not break an oath by Allah","Oaths are a formality","It was Egyptian law"],a:0,w:"He had taught them its gravity."},
  {q:"What was Yusuf’s ration policy?",o:["One camel-load per person","Unlimited grain for family","Grain only for Egyptians"],a:0,w:"So Binyamin meant one more load."}]},

{id:17,verses:[67,68],title:"Separate Gates, and Tawakkul",short:"Verses 67–68",
 big:"Ya‘qub advises his sons to enter by separate gates, then declares that no precaution avails against Allah’s decree. Allah praises him for knowledge that he understood and acted on.",
 remember:["Two reasons: avoid suspicion, and protection from the evil eye.","“The evil eye is real” (Muslim); its root is envy (113:5).","Ma sha’ Allah, tabarak Allah, and du‘a for barakah (18:39; Ahmad).","Tawakkul: plan and act, then leave the result to Allah.","“He had knowledge because We taught him”: knowledge understood and acted upon."],
 more:[
  {t:"Why separate gates?",l:["Walled cities checked those who entered; eleven strong, foreign brothers together would draw suspicion.","Spiritual: protection from al-‘ayn. Eleven fine sons were a conspicuous blessing."]},
  {t:"The evil eye",l:["Real according to the Qur’an and Sunnah; caused by envy, and harm can come even without seeing the person.","The strongest view: envy empowers Shaytan to harm the victim. One who casts it, even unintentionally, bears sin for unchecked envy.","On admiring something: ask Allah to bless it for them (Ahmad). Never wish its loss."]},
  {t:"Protection and cure",l:["Seek refuge in Allah; recite al-Falaq; the Prophet’s ﷺ du‘a seeking refuge in Allah’s perfect words from every harmful eye (al-Bukhari).","Do not flaunt blessings.","The cure in the Muwatta’: the one afflicted washes with the wudu’ water of the one who caused it."]},
  {t:"Tawakkul and decree (v. 67–68)",l:["“I cannot avail you against Allah at all. The decision is only Allah’s. In Him I trust.”","Their obedience in his absence shows faith remained in them, yet it could not avert what was decreed.","“A need in Ya‘qub’s soul which he fulfilled.”","“Dhu ‘ilm because We taught him”: Allah gave the knowledge; he understood it; he acted on it (Ibn ‘Abbas). He knew he could not avert the decree, yet did all he could."]}],
 home:"Memorise the morning and evening refuge from the evil eye, and make a habit of saying “ma sha’ Allah, tabarak Allah” when you admire something.",
 game:{type:"match",title:"Terms from verses 67–68",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-‘ayn","The evil eye"],["Ma sha’ Allah","What Allah has willed"],["Tabarak Allah","Blessed is Allah"],["Tawakkul","Taking means, then trusting Allah"],["Al-hukm lillah","The decision is Allah’s"],["Dhu ‘ilm","Possessor of knowledge"]]},
 quiz:[
  {q:"What were the two reasons for separate gates?",o:["Avoiding suspicion, and the evil eye","Speed and convenience","The king’s orders"],a:0,w:"Practical and spiritual protection."},
  {q:"What is the root cause of the evil eye?",o:["Envy","Bad luck","The stars"],a:0,w:"Al-Falaq: the envier when he envies."},
  {q:"What did the precaution achieve against Allah’s decree?",o:["Nothing at all","It cancelled the decree","It delayed it"],a:0,w:"It fulfilled a need in Ya‘qub’s soul."},
  {q:"What did Ibn ‘Abbas emphasise in “dhu ‘ilm”?",o:["Ya‘qub acted on his knowledge","Ya‘qub memorised much","Ya‘qub taught many students"],a:0,w:"Acting on knowledge is the higher level."},
  {q:"What is the cure mentioned in the Muwatta’?",o:["Washing with the wudu’ water of the one who caused it","Wearing an amulet","Avoiding all people"],a:0,w:"If the source is known."}]},

/* ---------- Part 8: Binyamin and the Ruse ---------- */
{id:18,verses:[69,72],title:"The Siqayah in the Saddlebag",short:"Verses 69–72",
 big:"Yusuf reveals himself privately to Binyamin, then places the king’s measuring vessel in his bag. A herald accuses the caravan. The passage raises a question of prophetic truthfulness and two points of fiqh.",
 remember:["“Inni ana akhuk”: a double emphasis: I am your very brother.","“Do not grieve over what they used to do”: the brothers likely mistreated Binyamin.","Ja‘ala as-siqayah: singular, so Yusuf placed it himself, keeping the plan secret.","A prophet cannot lie: the herald’s word “thieves” was his own conclusion, or it alluded to their earlier “theft” of Yusuf.","Ju‘alah (a reward for finding) and za‘im (a guarantor) are both derived here."],
 more:[
  {t:"Reunion with Binyamin (v. 69)",l:["Some say he hosted the brothers in small groups to gain time alone with Binyamin.","Binyamin was too young to remember Yusuf’s face, but knew his story from Ya‘qub.","Why keep him? By Allah’s command (“thus did We plan for Yusuf”, v. 76), and to spare him further mistreatment. Both may be true. Egyptian policy barred foreigners from settling, so a way had to be found."]},
  {t:"The vessel and the herald (v. 70)",l:["Siqayah: the king’s drinking cup, or more accurately the measuring bowl; precious and a symbol of the king’s power to distribute grain.","Adhdhana mu’adhdhin: a crier called out.","How could a prophet approve “you are thieves”? One view: they had once stolen Yusuf from his father. Another: Yusuf reported only that the bowl was missing and the caravan last handled grain; the word “thieves” was the crier’s."]},
  {t:"Body language (v. 71)",l:["They turned towards their accusers, not away: thieves would have fled.","“What are you missing?” They said “missing”, not “stolen”."]},
  {t:"Fiqh from verse 72",l:["Suwa‘ al-malik: the king’s measure (compare the sa‘ of zakat al-fitr).","Ju‘alah: normally both pay and work must be specified, but a reward for finding a lost item, of unknown effort, is permissible.","Kafalah: “I am its guarantor”, which shows the permissibility of a guarantor."]}],
 home:"Consider the difference between a lie and a tawriyah, and why Islam permits the latter only in limited cases.",
 game:{type:"match",title:"Terms from verses 69–72",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Siqayah","The measuring vessel"],["Suwa‘ al-malik","The king’s measure"],["Mu’adhdhin","A crier"],["Ju‘alah","A reward for finding"],["Za‘im","A guarantor"],["Inni ana akhuk","I am your very brother"]]},
 quiz:[
  {q:"What does the singular “ja‘ala” indicate?",o:["Yusuf placed the vessel himself","A servant placed it","It fell in by accident"],a:0,w:"Ordering a servant would have exposed the plan."},
  {q:"Why did the brothers turn towards their accusers?",o:["They knew they were innocent","They wanted to fight","They did not hear"],a:0,w:"Thieves would have run away."},
  {q:"How do scholars reconcile the herald’s accusation with prophetic truthfulness?",o:["The word was the crier’s, or it alluded to their taking Yusuf","Prophets may lie for good reasons","The verse is not about Yusuf"],a:0,w:"A prophet cannot lie."},
  {q:"Which contract does the reward in verse 72 illustrate?",o:["Ju‘alah","Salam","Mudarabah"],a:0,w:"A reward for an outcome of unknown effort."},
  {q:"What does “I am its guarantor” show?",o:["The permissibility of a guarantor","That guarantees are forbidden","That the reward was a trick"],a:0,w:"Kafalah is permitted."}]},

{id:19,verses:[73,76],title:"By the Law of Ya‘qub",short:"Verses 73–76",
 big:"The brothers protest their innocence and themselves name the penalty from Ya‘qub’s law. The search ends at Binyamin’s bag: “Thus did We plan for Yusuf.” Allah raises in rank whom He wills.",
 remember:["Tallahi: an oath, “by Allah”. They had done nothing wrong on their visits.","Theft is fasad; Allah curses the thief (al-Bukhari).","Under Ya‘qub’s law the thief became the slave of the owner.","Fa-bada’a: Yusuf began with their bags, before Binyamin’s.","“He could not take his brother under the din of the king.” Din here means a whole way of life and law."],
 more:[
  {t:"Their defence (v. 73)",l:["“You know we did not come to cause corruption in the land, and we are not thieves.”","Stealing is called fasad, corruption; the hadd punishment shows its gravity in Allah’s sight."]},
  {t:"Naming the penalty (v. 74–75)",l:["Egyptian law: flogging or double repayment, then expulsion of the foreigner.","By asking the brothers, the Egyptians bypassed their own law: Allah put this question in their hearts.","Ya‘qub’s law: enslavement to the owner. This let Yusuf keep Binyamin, which he could not have done under Egypt’s law."]},
  {t:"The search (v. 76)",l:["The narration shifts from the crowd to the singular: Yusuf took charge.","He searched methodically, leaving Binyamin’s bag for last.","Kadhalika kidna li-Yusuf: “Thus did We plan for Yusuf”: by Allah’s command."]},
  {t:"Ranks and knowledge",l:["“We raise in degrees whom We will; and above every possessor of knowledge is one more knowing.”","Allah raises those who believe and those given knowledge (58:11).","The scholar’s superiority over the worshipper is like the full moon over the stars (al-Tirmidhi).","Adam was preferred over the angels by knowledge, not by size or strength."]}],
 home:"Choose one area of beneficial knowledge to study steadily this month, with the intention of being raised by Allah through it.",
 game:{type:"sort",title:"Egypt’s law or Ya‘qub’s law?",help:"Which law does each penalty belong to?",buckets:["Egypt’s law","Ya‘qub’s law"],items:[["Flogging",0],["Enslavement to the owner",1],["Double repayment",0],["The thief stays with the one he stole from",1],["Expulsion of the foreigner",0]]},
 quiz:[
  {q:"What does the word fasad tell us about theft?",o:["It is a form of corruption","It is minor","It is permitted in famine"],a:0,w:"Allah curses the thief."},
  {q:"Why did the brothers’ answer allow Yusuf to keep Binyamin?",o:["Ya‘qub’s law made the thief a slave of the owner","Egypt allowed foreigners to settle","Binyamin asked to stay"],a:0,w:"Under the king’s law he could not have kept him."},
  {q:"What does “din” mean in “din al-malik”?",o:["A whole way of life and law","Only worship","A tax"],a:0,w:"The word is wider than “religion”."},
  {q:"Why search Binyamin’s bag last?",o:["To play the plan out without suspicion","He forgot it","It was the heaviest"],a:0,w:"He searched methodically."},
  {q:"How was Adam preferred over the angels?",o:["By knowledge","By strength","By size"],a:0,w:"Allah taught him the names."}]},

{id:20,verses:[77,79],title:"Restraint and Precise Speech",short:"Verses 77–79",
 big:"The brothers distance themselves from Binyamin and slander Yusuf to his face. He contains himself, then refuses their offer of a substitute with words chosen so as not to lie.",
 remember:["“If he stole, a brother of his stole before”: a lie or an exaggeration.","Fa-asarraha Yusufu fi nafsih: he kept it within himself and did not reveal it.","Defending oneself is permissible, not always obligatory: compare verse 26.","Ab, shaykh, kabir: three appeals to sympathy.","Ma‘adha Allah, and “the one with whom we found our property”: not “the thief”."],
 more:[
  {t:"Slander to his face (v. 77)",l:["Caught out, they disowned Binyamin at once.","Yusuf said within himself: “You are in a worse position, and Allah knows best what you describe”, alluding to their far greater crime against him.","Earlier he defended himself against an accusation of indecency; here silence served the plan. Speaking up is a right, not a duty in every case."]},
  {t:"The appeal (v. 78)",l:["“O ‘Aziz”: either his former master’s office, or simply “Your Excellency”.","“He has a father”: for sympathy, or because their love for Ya‘qub was not as deep.","Ab (father), shaykh (elder, learned, aged) and kabir (great): each word invoked sympathy.","“Take one of us in his place”; “we see you are of the muhsinin”: the same praise the prisoners gave him."]},
  {t:"The reply (v. 79)",l:["Ma‘adha Allah: the same phrase he used when tempted.","“Except the one with whom we found our property”: neutral and true, since Binyamin had not stolen.","Lying is never permitted; tawriyah may be used where necessary.","“Otherwise we would be wrongdoers”: no one bears another’s crime."]}],
 home:"Next time you are wrongly accused, ask yourself before replying: will speaking or silence serve the better outcome here?",
 game:{type:"match",title:"Terms from verses 77–79",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Asarraha fi nafsih","He kept it within himself"],["Shaykh kabir","An aged, honoured elder"],["Ma‘adha Allah","Allah is my refuge"],["Tawriyah","True words understood differently"],["Zalimun","Wrongdoers"],["Muhsinun","Doers of good"]]},
 quiz:[
  {q:"What did the brothers claim in verse 77?",o:["Binyamin’s brother had stolen before","Binyamin was innocent","They had planted the cup"],a:0,w:"A lie or an exaggeration about Yusuf."},
  {q:"What does the contrast with verse 26 teach?",o:["Self-defence is permissible but not always obligatory","Yusuf changed his principles","Silence is always required"],a:0,w:"He weighed the outcome each time."},
  {q:"Why did Yusuf say “the one with whom we found our property”?",o:["To avoid a lie: Binyamin had not stolen","To be poetic","He had forgotten Binyamin’s name"],a:0,w:"A prophet never lies."},
  {q:"What did the brothers offer?",o:["One of themselves in Binyamin’s place","Double payment","To leave Egypt for ever"],a:0,w:"A substitute, which Yusuf refused as unjust."},
  {q:"What phrase links verse 79 to verse 23?",o:["Ma‘adha Allah","Fa-sabrun jamil","Hayta lak"],a:0,w:"The same refuge he sought when tempted."}]},

/* ---------- Part 9: Deprived of Three Sons ---------- */
{id:21,verses:[80,83],title:"The Eldest’s Resolve",short:"Verses 80–83",
 big:"The brothers confer in private. The eldest, remorseful, refuses to leave Egypt; the others carry the news home, where Ya‘qub, now bereft of three sons, renews his beautiful patience and his hope.",
 remember:["Istay’asu: they despaired after persistent effort. Khalasu najiyya: they withdrew to confer.","Farrattum: you fell short regarding Yusuf.","Allah names the eldest only when he does good; earlier he was “one of them”.","“Ask the town… and the caravan”: their truth was held hostage to their past lies.","“Perhaps Allah will bring them all to me”: “I am as My servant thinks of Me” (al-Bukhari)."],
 more:[
  {t:"The conference (v. 80)",l:["The added letters in istay’asu show they tried persistently before giving up.","The eldest, some say the one who argued against killing Yusuf, recalls the oath and their earlier failure.","He exiles himself in a foreign land rather than face his father in disgrace: the stirrings of real repentance.","“Or Allah judges for me”: perhaps revelation to Ya‘qub, or death or illness."]},
  {t:"Concealing faults",p:"When he did wrong he was left unnamed; now he does right and is singled out. The Prophet ﷺ would say “why do some people do such-and-such?” without naming anyone, but praised good deeds by name."},
  {t:"The message home (v. 81–82)",l:["“Your son stole. We testify only to what we know, and we were not guardians of the unseen.”","They cite the town and the caravan as witnesses.","Binyamin’s silence seemed to them an admission.","The boy who cried wolf: a truth weighed down by a lie told some thirty years earlier."]},
  {t:"Ya‘qub’s answer (v. 83)",l:["Bal, and “your souls have enticed you”: the same words as verse 18. He judged by experience but lacked clear evidence.","Fa-sabrun jamil: renewed.","‘Asa: hopefulness that all three would return.","The weak in faith complain at the first trial and drift towards doubt; Iblis objected to Allah’s command and lost everything."]}],
 home:"Think of someone who may struggle to trust you because of your past. What consistent conduct would rebuild that trust?",
 game:{type:"order",title:"From the palace to Ya‘qub",help:"Tap the events in the order they occur.",items:["They despair of freeing Binyamin","They confer in private","The eldest vows to stay in Egypt","The others report to Ya‘qub","They cite the town and the caravan","Ya‘qub renews beautiful patience and hope"]},
 quiz:[
  {q:"What does the form istay’asu indicate?",o:["Despair after persistent effort","Instant despair","No despair"],a:0,w:"The added letters show repeated attempts."},
  {q:"Why is the eldest named here but not in verse 10?",o:["Faults are concealed, good deeds are named","He was not present earlier","A copying difference"],a:0,w:"The same etiquette appears in the Sunnah."},
  {q:"Why did Ya‘qub doubt a true report?",o:["Their earlier lie about Yusuf","Binyamin wrote to him","The caravan contradicted them"],a:0,w:"Like the boy who cried wolf."},
  {q:"Which hadith qudsi fits Ya‘qub’s hope?",o:["I am as My servant thinks of Me","The strong believer is better","Actions are by intentions"],a:0,w:"He always thought well of Allah."},
  {q:"What does the example of Iblis warn against?",o:["Objecting to Allah’s decree","Asking questions in class","Travelling"],a:0,w:"Questioning Allah’s decision ruined him."}]},

{id:22,verses:[84,87],title:"Ya Asafa, and the Mercy of Allah",short:"Verses 84–87",
 big:"Ya‘qub’s grief for Yusuf resurfaces after some twenty-five years. He suppresses it before people and pours it out to Allah alone, then commands his sons to search, and never to despair of Allah’s mercy.",
 remember:["Ya asafa ‘ala Yusuf: grief drawn up from the depths of the heart.","Ibyaddat ‘aynah: his eyes whitened. The author holds his sight weakened, not that he necessarily went blind.","Kazim: one who has long suppressed his grief.","Innama ashku bathth wa-huzni ila Allah: complaint to Allah is iman; complaint about Allah is not.","“No one despairs of Allah’s rawh except the disbelieving people.”"],
 more:[
  {t:"Grief and patience (v. 84)",l:["Their plan backfired: removing Yusuf only increased their father’s longing. Allah does not bless evil means.","Crying does not contradict sabrun jamil. The Prophet ﷺ wept at his son Ibrahim’s death (al-Bukhari); al-Hasan al-Basri, weeping for his son, said Allah did not rebuke Ya‘qub for crying.","Ihsan in patience: not seeking a shoulder to cry on, though accepting comfort when it is offered."]},
  {t:"The hadith to Ibn ‘Abbas",p:"“Be mindful of Allah and He will protect you… If you ask, ask Allah. If you seek help, seek help from Allah. If the nations gathered to benefit you, they could not, except with what Allah has written for you… The pens have been lifted and the pages have dried” (al-Tirmidhi)."},
  {t:"Complaint to Allah (v. 85–86)",l:["Harad: wasting away. The sons were exasperated.","Bathth: the most severe grief, which scatters a person’s speech.","Innama: exclusivity, to Allah alone. The Prophet ﷺ did the same after Ta’if.","“I know from Allah what you do not know”: the dream had not yet been fulfilled, so Yusuf must be alive."]},
  {t:"Search, and never despair (v. 87)",l:["Tahassasu: search with all your senses.","Despairing of Allah’s mercy is equated with disbelief.","Rawh, comfort and relief, shares its root with ruh, life."]}],
 home:"Write a private du‘a, in your own words, telling Allah about a burden you have not shared with anyone.",
 game:{type:"match",title:"Terms from verses 84–87",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Ya asafa","Oh, my sorrow!"],["Kazim","One who suppresses grief"],["Bathth","The most severe grief"],["Harad","Wasting away"],["Tahassasu","Search with all your senses"],["Rawh","Allah’s comforting mercy"]]},
 quiz:[
  {q:"Does crying contradict sabrun jamil?",o:["No: Ya‘qub and the Prophet ﷺ both wept","Yes, always","Only for prophets"],a:0,w:"Patience governs words and complaint, not tears."},
  {q:"What does the author conclude about Ya‘qub’s eyes?",o:["His sight weakened; total blindness is not certain","He was born blind","Nothing happened"],a:0,w:"Ibyaddat: they became white and glazed."},
  {q:"What is the difference that matters in complaint?",o:["To Allah is iman; about Allah is forbidden","Both are forbidden","Both are fine"],a:0,w:"Complaining to Allah seeks His mercy."},
  {q:"How did Ya‘qub know Yusuf was alive?",o:["The dream had not yet been fulfilled","A letter from Egypt","The brothers told him"],a:0,w:"I know from Allah what you do not know."},
  {q:"Who despairs of Allah’s rawh?",o:["Only the disbelieving people","The scholars","The patient"],a:0,w:"Despair is equated with disbelief."}]},
/* ---------- Part 10: Yusuf Reveals His Identity ---------- */
{id:23,verses:[88,90],title:"“Are You Indeed Yusuf?”",short:"Verses 88–90",
 big:"On the third journey, nine brothers plead for charity with poor goods. Yusuf reveals himself with a question framed to spare them, and sums up the surah: taqwa and patience are never left unrewarded.",
 remember:["Massana d-durr: hardship has touched us. Bida‘ah muzjat: poor, second-rate goods.","“Allah rewards the charitable”: an irony that cannot have escaped Yusuf.","“When you were ignorant”: a face-saving phrase; he refers to himself in the third person.","A-innaka la-anta Yusuf: a triple emphasis of disbelief.","Manna: an unearned favour. “Whoever has taqwa and is patient…”"],
 more:[
  {t:"The plea (v. 88)",l:["Nine came; the eldest had stayed in Egypt. Nearly seven years of drought had impoverished them.","They were not beggars: they brought goods, but ashamed of their quality, they asked for full measure and charity."]},
  {t:"The revelation (v. 89)",l:["Their guarded secret, spoken by the minister of Egypt.","He criticised neither them nor their act directly, despite power and every justification.","Why now? Either Allah’s command, as prophets wait for it (the Hijrah came only with permission), or a practical reason: some early tafsir reports, with Biblical support, say a younger king had succeeded, giving senior ministers like Yusuf the authority to bring his family."]},
  {t:"“I am Yusuf, and this is my brother” (v. 90)",l:["He attributes everything to Allah: “Allah has conferred favour (manna) upon us.”","Then, in the third person: whoever has taqwa and sabr, Allah does not let the reward of the muhsinin be lost. He does not say “I was patient”.","Taqwa and sabr are the two pillars running through the whole story; this verse is its summary.","An implicit lesson for the brothers: they sought their aim through disobedience and lost; he was patient and was given more than imagined. Reform, not revenge."]}],
 home:"Memorise the end of verse 90 and reflect on where taqwa and sabr have been tested in your own life this year.",
 game:{type:"match",title:"Terms from verses 88–90",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Massana d-durr","Hardship has touched us"],["Muzjat","Poor, second-rate goods"],["Jahilun","Acting in ignorance"],["Manna","An unearned favour"],["Taqwa","Mindfulness of Allah"],["Sabr","Patience"]]},
 quiz:[
  {q:"Why “when you were ignorant”?",o:["To give them a face-saving way out","To insult their intelligence","It was a legal term"],a:0,w:"He spared them direct blame."},
  {q:"What are the two reasons offered for revealing himself now?",o:["Allah’s command, or a change of king giving him authority","Boredom, or anger","The brothers guessed it"],a:0,w:"Prophets wait for Allah’s command; a practical reason is also reported."},
  {q:"What does “manna” mean?",o:["A favour that is not earned","A wage","A loan"],a:0,w:"Allah’s gift from His generosity."},
  {q:"Why does Yusuf switch to “whoever has taqwa”?",o:["Humility: he does not praise himself","He forgot himself","He meant the king"],a:0,w:"He never says “I was patient”."},
  {q:"Which two qualities summarise the surah?",o:["Taqwa and sabr","Wealth and power","Beauty and lineage"],a:0,w:"Whoever is mindful and patient is rewarded."}]},

{id:24,verses:[91,93],title:"La Tathriba ‘Alaykum al-Yawm",short:"Verses 91–93",
 big:"The brothers confess. Yusuf forgives them completely, in neutral words, and voices hope of Allah’s forgiveness; the Prophet ﷺ would repeat his words at the conquest of Makkah. A third shirt is sent, this time to heal.",
 remember:["Tallahi la-qad atharaka Allah ‘alayna: Allah has preferred you over us; we were sinners.","Tathrib: rebuking someone and reminding them of their sins.","“Allah will forgive you”: because the wronged party forgave, or as a hope; both are valid.","Wrongs against people need the forgiveness of the wronged; Allah settles the rest on the Day.","At Makkah: “I say what Yusuf said: no blame on you today. Go, you are free” (Ibn Sa‘d)."],
 more:[
  {t:"Confession (v. 91)",p:"An oath with emphasis: their first step towards repentance was to admit the wrong plainly."},
  {t:"Forgiveness (v. 92)",l:["“No blame on you today”: impersonal, not even “I will not blame you”. He removes himself from the picture.","Rights of people are not waived by Allah unless the victim forgives; on the Day even animals will receive justice.","It is easier to attain Allah’s forgiveness than people’s, because He is the Most Merciful."]},
  {t:"The Year of Sorrow",p:"Surah Yusuf came down in the Prophet’s ﷺ hardest period: the deaths of Abu Talib and Khadijah, and the rejection at Ta’if. Years later, standing at the Ka‘bah with the Quraysh in his power, he asked how they thought he would treat them, then forgave them with Yusuf’s words. The surah had given him hope, and a model."},
  {t:"The third shirt (v. 93)",l:["The bloodstained shirt: a lie (v. 18).","The torn shirt: evidence of innocence (v. 25–28).","This shirt: healing and good news; its scent would reach Ya‘qub before it did.","“Bring me your family, all together.”"]}],
 home:"Identify one grievance you still hold. Consider whether you could release it with words as complete as Yusuf’s.",
 game:{type:"sort",title:"Rights of Allah or rights of people?",help:"Sort each statement by the kind of wrong it concerns.",buckets:["Wrongs against Allah","Wrongs against people"],items:[["Allah may forgive them out of His mercy",0],["Need the forgiveness of the one wronged",1],["Settled on the Day if not resolved",1],["Even animals will receive justice for them",1],["Repentance to Allah alone suffices",0]]},
 quiz:[
  {q:"What does “tathrib” mean?",o:["Reproach and reminding of sins","Forgiveness","Reward"],a:0,w:"No reproach on you today."},
  {q:"How could Yusuf say “Allah will forgive you”?",o:["The wronged party forgave, or it expresses hope","He had authority over forgiveness","It was a guess"],a:0,w:"Both interpretations are valid."},
  {q:"When did the Prophet ﷺ repeat Yusuf’s words?",o:["At the conquest of Makkah","At Badr","At the Hijrah"],a:0,w:"He forgave the Quraysh with them."},
  {q:"In what year was Surah Yusuf revealed, according to the author?",o:["The Year of Sorrow","The year of the Hijrah","The year of Hudaybiyah"],a:0,w:"After the deaths of Abu Talib and Khadijah."},
  {q:"What role does the third shirt play?",o:["Healing and good news","Evidence of a crime","A lie"],a:0,w:"It restores Ya‘qub’s sight."}]},

/* ---------- Part 11: The Dream Fulfilled ---------- */
{id:25,verses:[94,98],title:"The Scent, the Sight, the Seeking of Forgiveness",short:"Verses 94–98",
 big:"Ya‘qub senses Yusuf’s scent from far away, his sight returns with the shirt, and his sons seek his intercession. He defers the du‘a, most scholars say, to the last third of the night.",
 remember:["“I find the scent of Yusuf, if you did not think me senile”: firasah given by Allah.","Al-bashir: many say the same son who carried the bloodied shirt.","Allah mentions the good and passes over the bad.","“Regret is repentance” (Ibn Majah): admission comes first.","Sawfa astaghfiru lakum: “I will”, not now: awaiting the last third of the night (al-Bukhari)."],
 more:[
  {t:"The scent (v. 94–95)",l:["Hundreds of miles away, Ya‘qub sensed his son: a sign from Allah, consistent with his firasah throughout.","Tufannidun: you think me senile. Their reply, “you are in your old error”, is attributed by some to his grandchildren."]},
  {t:"The bearer of good news (v. 96)",l:["He cast the shirt on his face and he “returned seeing”.","If he was the son who brought the bloodied shirt, imagine bringing this one.","“Did I not tell you I know from Allah what you do not know?” He had never lost hope."]},
  {t:"Repentance (v. 97–98)",l:["They had asked Yusuf; now they asked their father: “we were sinners”.","The delay: the Lord descends in the last third of the night asking who seeks forgiveness (al-Bukhari).","Husn al-khitam: what counts is the ending, not the beginning.","A modern court would call it attempted murder of a child; yet they repented, were forgiven, and in the majority view became prophets: the stars of the dream."]}],
 home:"Set an alarm for the last third of the night once this week, and use it for istighfar for yourself and others.",
 game:{type:"order",title:"Verses 94–98 in order",help:"Tap the events in the order they occur.",items:["The caravan departs from Egypt","Ya‘qub senses Yusuf’s scent","His family calls it his old error","The bearer casts the shirt on his face","He regains his sight","His sons ask him to seek forgiveness for them"]},
 quiz:[
  {q:"What faculty allowed Ya‘qub to sense Yusuf?",o:["Firasah, a gift from Allah","Ordinary smell","A message by letter"],a:0,w:"Spiritual intuition, a sign from Allah."},
  {q:"Who, according to many scholars, was the bashir?",o:["The son who carried the bloodied shirt","Binyamin","A servant of Yusuf"],a:0,w:"A fitting reversal."},
  {q:"Why did Ya‘qub say “I will” seek forgiveness?",o:["To wait for the last third of the night","He refused","He was unsure they meant it"],a:0,w:"The most blessed time for du‘a."},
  {q:"What is husn al-khitam?",o:["A good ending","A good beginning","Good manners"],a:0,w:"Our final state is what counts."},
  {q:"What does “regret is repentance” teach?",o:["Admission and regret come first","Regret alone is enough without change","Repentance needs no regret"],a:0,w:"One cannot repent without acknowledging the wrong."}]},

{id:26,verses:[99,100],title:"Ta’wil Ru’yaya: The Dream Realised",short:"Verses 99–100",
 big:"The family emigrates to Egypt. Yusuf raises his parents to the throne; they fall in prostration, and the childhood dream is realised. His speech thanks Allah while sparing his brothers, and names Allah al-Latif.",
 remember:["“Enter Egypt, if Allah wills, in security”: Allah is the source; he is only a means.","“His parents”: his father and his maternal aunt; a khalah has the standing of a mother.","Sujud of respect was allowed in Ya‘qub’s law and is forbidden in ours (Ibn Majah, the hadith of Mu‘adh).","Ta’wil here means actualisation: the dream is realised.","He mentions the prison, not the well, and blames Shaytan for the rift."],
 more:[
  {t:"Emigration (v. 99)",l:["About seventy people with their possessions: emigrants, not travellers.","Their descendants would leave five centuries later in the Exodus under Musa.","The scholars describe Yusuf leading a procession to the outskirts to receive them. It was Ya‘qub’s first time in Egypt."]},
  {t:"The throne and the prostration (v. 100)",l:["Whether Yusuf’s own seat or the throne of Egypt, it was an honour after a life begun in the wilderness.","Kharru lahu sujjada: some say full prostration, some say bowing.","Our Shari‘ah, the most perfect, reserves this for Allah. When Mu‘adh, back from Sham, prostrated to the Prophet ﷺ, he said: do not do that."]},
  {t:"His words (v. 100)",l:["“This is the ta’wil of my dream of before; my Lord has made it true.”","“He was good to me when He brought me out of prison”: the well, the greater rescue, goes unmentioned so as not to shame his brothers.","“After Shaytan had sown discord between me and my brothers”: blame placed on Shaytan.","“My Lord is Latif in what He wills”: aware of the most hidden things, and gently kind. Then al-‘Alim, al-Hakim, closing as verse 6 did."]}],
 home:"Look back over a hard chapter of your life that resolved. Where can you now see Allah’s lutf, His subtle kindness, in it?",
 game:{type:"match",title:"Terms from verses 99–100",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Al-‘arsh","The throne"],["Sujjada","Prostrating or bowing"],["Ta’wil","Realisation of the dream"],["Al-Latif","The Subtle, the Gently Kind"],["Nazagha","Sowed discord"],["Khalah","Maternal aunt"]]},
 quiz:[
  {q:"Who were Yusuf’s “parents” in verse 100?",o:["His father and his maternal aunt","His father and his birth mother","His brothers"],a:0,w:"His mother had died; a khalah has a mother’s standing."},
  {q:"What is the ruling on prostrating to people today?",o:["Forbidden: reserved for Allah","Permitted to scholars","Recommended for parents"],a:0,w:"Allowed in Ya‘qub’s law, not in ours."},
  {q:"What does “ta’wil” mean here?",o:["Actualisation of the dream","Interpretation by a scholar","Translation"],a:0,w:"The dream became reality."},
  {q:"Why mention the prison but not the well?",o:["So as not to shame his brothers","The well was less dangerous","He forgot the well"],a:0,w:"The well was the greater rescue, but naming it would embarrass them."},
  {q:"What does al-Latif combine?",o:["Knowledge of the hidden and gentle kindness","Strength and speed","Wealth and power"],a:0,w:"He knows the finest details and cares gently."}]},

{id:27,verses:[101,101],title:"Tawaffani Musliman",short:"Verse 101: the closing du‘a",
 big:"Yusuf’s du‘a closes his story: praise for the favours of power and knowledge, the names Rabb, Fatir and Wali, and a request for the most precious thing: to die in submission and be joined with the righteous.",
 remember:["Ar-Rabb: Owner, Nourisher and Sustainer, Lord.","“Of the dominion”: min al-mulk, a small share of authority beside Allah’s.","Fatir as-samawati wal-ard: the Originator who creates from nothing.","Al-Wali: the near one, protector and friend.","Tawaffani musliman wa alhiqni bis-salihin."],
 more:[
  {t:"Praise before asking",l:["“You have given me of dominion and taught me of the interpretation of events”: al-Malik and al-‘Alim in view. “Of” signals how small his share is.","Mentioning Allah’s favours is a form of gratitude, and gratitude brings increase (14:7).","The prophets usually combined spirituality and knowledge rather than worldly rule. Yusuf held authority, Sulayman a kingdom; the Prophet ﷺ combined state leadership with prophethood."]},
  {t:"Fatir and Wali",l:["Fatir is used only of Allah: He originates, while people only reshape what He created.","Wali comes from waliya, to be next to: one who is close. Allah is the wali of the believers and of orphans.","Paired: the Creator of the physical world, and the Guardian of the spiritual life."]},
  {t:"The request",l:["After every blessing, he asks to die as a Muslim: what matters is meeting Allah in submission.","“Join me with the righteous”: “a man is upon the religion of his close friend” (al-Tirmidhi).","The Prophet’s ﷺ last words asked for the highest companionship (compare 4:69)."]},
  {t:"The end of the story",p:"History books report that Ya‘qub died two or three years after the emigration, and Yusuf soon after. Seen that way, the du‘a is even more moving: the most righteous person he knew was his father. In a few words he affirms tawhid, the perfection of Allah’s names, and his submission."}],
 home:"Memorise verse 101 and add “tawaffani musliman wa alhiqni bis-salihin” to your own du‘a.",
 game:{type:"match",title:"Names in Yusuf’s du‘a",help:"Tap a name on the left, then its meaning on the right.",pairs:[["Ar-Rabb","Owner, Sustainer and Lord"],["Al-Fatir","Originator from nothing"],["Al-Wali","The close Protector and Friend"],["Al-Malik","Owner of all dominion"],["Al-‘Alim","The All-Knowing"],["Al-Akram","The Most Generous"]]},
 quiz:[
  {q:"Why does Yusuf say “of dominion” rather than “dominion”?",o:["His share was small beside Allah’s","He had no authority","It is a copyist’s addition"],a:0,w:"Min: a part of, minuscule compared to Allah’s power."},
  {q:"What is unique about the name al-Fatir?",o:["Only Allah originates from nothing","It means King","It is used of prophets too"],a:0,w:"People only modify what He created."},
  {q:"What is the root sense of al-Wali?",o:["To be near","To rule","To punish"],a:0,w:"From waliya: one who is close."},
  {q:"What does Yusuf ask for after praising Allah?",o:["To die as a Muslim and join the righteous","More power","A longer life"],a:0,w:"The most precious request."},
  {q:"Which hadith supports seeking righteous company?",o:["A man is upon the religion of his close friend","The believer is not stung twice","Envy eats good deeds"],a:0,w:"Look at whom you befriend."}]},
/* ---------- Part 12: Reminders to the Prophet ﷺ ---------- */
{id:28,verses:[102,104],title:"News of the Unseen",short:"Verses 102–104",
 big:"With the story complete, the address returns to the Prophet ﷺ. The most secret scene, the brothers’ plotting, is singled out as proof of revelation, followed by consolation: most will not believe, and he asks no reward.",
 remember:["Dhalika (that), not hadha (this): it elevates the story.","“You were not with them when they agreed and plotted”: the one scene no one else could know.","Makkah: about a thousand people, around ten literate; the first Arabic Bible translation appears around 180 AH.","Harasta: however keen you are, most will not believe.","Dhikr: a reminder of what the fitrah already knows."],
 more:[
  {t:"Proof of revelation (v. 102)",l:["Allah singles out the plot rather than the well or the palace because it was known to no one else.","The address is to the Prophet ﷺ, and through him to all humanity and to Makkah.","The claim that he copied from the Bible fails: no Arabic translation existed in his time, and many details of the Qur’anic account are absent from the Old Testament."]},
  {t:"Consolation (v. 103)",l:["Harasta: zealous, anxious for their guidance (9:128).","For thirteen years in Makkah most rejected him despite knowing his character. Da‘wah is not a matter of a few proofs.","Allah values the quality of those who believe, not their number."]},
  {t:"No reward (v. 104)",l:["Every prophet said: I ask you no wage. Charity was even forbidden to the Prophet ﷺ and his family.","He slept on a palm-fibre mat; when ‘Umar wept at this, he said: are you not content that they have this world and we the Hereafter? (al-Bukhari)"]},
  {t:"Names of the Qur’an",l:["Qur’an, Kitab, Dhikr and al-Furqan (the criterion between truth and falsehood).","Dhikr: a reminder of the fitrah; a continuous reminder; and an honour for a people (43:44). Within decades the Arabs were united and leading."]}],
 home:"Reflect on your own da‘wah expectations: are you measuring success by conversions, or by presenting the truth well?",
 game:{type:"match",title:"Terms from verses 102–104",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Anba’ al-ghayb","News of the unseen"],["Harasta","You were eager"],["Dhikr","Reminder"],["Al-Furqan","The criterion"],["‘Alamin","All the worlds and peoples"],["Ajr","A wage or reward"]]},
 quiz:[
  {q:"Why is the brothers’ plot singled out in verse 102?",o:["No one but they could have known it","It was the longest scene","It happened in Egypt"],a:0,w:"Proof that the knowledge came from Allah."},
  {q:"When does the first Arabic translation of the Bible appear, per the author?",o:["Around 180 AH","Before the Prophet’s ﷺ birth","In the Prophet’s ﷺ lifetime"],a:0,w:"Generations after him."},
  {q:"What does verse 103 teach about da‘wah?",o:["Most will not believe, however keen we are","Everyone believes with enough proof","Da‘wah is pointless"],a:0,w:"Quality, not quantity."},
  {q:"Why were prophets forbidden worldly reward for their mission?",o:["So no one doubts their sincerity","They were already rich","It was a cultural custom"],a:0,w:"Selflessness proves sincerity."},
  {q:"What does “Dhikr” imply about the human being?",o:["The message reminds the fitrah of what it knows","Humans know nothing by nature","Only scholars are reminded"],a:0,w:"Belief in the Creator is innate."}]},

{id:29,verses:[105,108],title:"Signs, Shirk, and the Way of the Prophet ﷺ",short:"Verses 105–108",
 big:"People pass by Allah’s signs without reflection; most who believe in Allah still associate partners with Him. The Prophet ﷺ is told to declare his way: a single path, called to with basirah by him and those who follow him.",
 remember:["Yamurruna: they pass by the signs, turning away.","Belief in Allah is not the essence of iman; the Quraysh believed in Him yet committed shirk.","Ghashiyah: an overwhelming punishment. The warning is not a bluff.","Sabili: “my way”, singular. Truth is one; falsehoods are many (2:257).","‘Ala basirah: with insight rooted in certain knowledge. Calling others is an obligation on every Muslim."],
 more:[
  {t:"Passing by the signs (v. 105)",p:"Signs in the sky, the earth, the soul, and the ruins of past nations such as ‘Ad and Thamud. The verb yamurruna pictures people walking right past them without a thought."},
  {t:"Belief and shirk (v. 106)",l:["The Quraysh affirmed Allah as Creator and All-Powerful, but gave idols a share, which voided their belief.","A warning to Muslims to purify belief of open and hidden shirk, including the idolising of wealth, power and celebrity."]},
  {t:"The warning (v. 107)",p:"“Do they feel secure…?” The Qur’an motivates by Paradise and also warns of a real punishment. Avoiding the subject of the Fire out of political correctness misrepresents the Qur’an."},
  {t:"“This is my way” (v. 108)",l:["The Prophet ﷺ drew one straight line and lines branching off with a devil on each, then recited 6:153 (Ahmad).","“I left you on a clear path, its night like its day” (Ibn Majah). Following him requires knowledge.","Da‘wah is not chiefly debate: conduct is the first and most effective call, as Yusuf showed.","SubhanAllah, and I am not of the mushrikin."]}],
 home:"Spend ten minutes this week looking at one sign of Allah in creation and write down what it tells you about Him.",
 game:{type:"match",title:"Terms from verses 105–108",help:"Tap a term on the left, then its meaning on the right.",pairs:[["Yamurruna","They pass by"],["Mushrikun","Those who associate partners"],["Ghashiyah","An overwhelming punishment"],["Baghtatan","Suddenly"],["Sabili","My way"],["‘Ala basirah","With clear insight"]]},
 quiz:[
  {q:"What did the Quraysh lack despite believing in Allah?",o:["Worshipping Him alone","Belief in a Creator","Any religion at all"],a:0,w:"Shirk voided their belief."},
  {q:"Why is “my way” singular?",o:["The path to Allah is one","It is a grammatical habit","It refers to Makkah"],a:0,w:"Truth is one, falsehoods many."},
  {q:"What does “‘ala basirah” require of a follower?",o:["Knowledge","Wealth","Eloquence alone"],a:0,w:"Insight rooted in certain knowledge."},
  {q:"What is the primary means of da‘wah, per the author?",o:["Good conduct","Debate","Pamphlets"],a:0,w:"Conduct affects hearts most."},
  {q:"What does verse 107 warn against?",o:["Feeling secure from Allah’s punishment","Travelling","Asking questions"],a:0,w:"The threat is real."}]},

{id:30,verses:[109,111],title:"‘Ibrah for People of Understanding",short:"Verses 109–111",
 big:"The messengers before him were men from the towns, also rejected; when they despaired, help came. The surah closes by mirroring its opening: in their stories is ‘ibrah for people of understanding, a true account that confirms, details, guides and shows mercy.",
 remember:["All prophets were men; this is the standard Sunni position. Men and women are spiritually equal.","Travel and see the end of those before: no civilisation is indestructible.","Kudhibu and kudhdhibu: two authentic recitations, two true meanings.","Nujjiya and nunji: past and future; Allah saved before and will save again.","‘Ibrah from ‘abara, to cross over: from the story to its wisdom."],
 more:[
  {t:"Men from the towns (v. 109)",l:["Consolation: earlier prophets also suffered at the hands of their people.","Maryam spoke with an angel but received no revelation or book; she was not a prophet.","Every nation thinks itself the pinnacle: “you are not the first, and not the last.”","The Home of the Hereafter is better for the mindful."]},
  {t:"Two recitations (v. 110)",l:["Kudhibu: the peoples thought the prophets had lied to them, and punishment came.","Kudhdhibu: the prophets realised their peoples would not believe.","All authentic recitations are equally valid, and here they complement each other.","Nujjiya (past) and nunji (future): the Prophet ﷺ was saved repeatedly, from assassination attempts and at Badr, Uhud and al-Ahzab."]},
  {t:"The surah’s frame (v. 111)",l:["Opening: “we relate the best of stories” (present tense); “signs for those who ask”.","Close: “in their stories there was ‘ibrah” (past tense); “for people of understanding”.","First listen and find the signs; then reflect and cross over to the hidden wisdom.","Not a fabrication: a confirmation of earlier revelation, a detailing of all things, guidance and mercy."]}],
 home:"Write the one ‘ibrah from Surah Yusuf that has changed you most, and how it will show in your conduct.",
 game:{type:"match",title:"Opening and close",help:"Tap the opening on the left, then the matching close on the right.",pairs:[["“We relate the best of stories” (v. 3)","“In their stories there was ‘ibrah” (v. 111)"],["Signs for those who ask (v. 7)","‘Ibrah for people of understanding (v. 111)"],["Present tense","Past tense"],["Listening to the story","Reflecting on its wisdom"],["A clear Arabic Book (v. 1–2)","Not a fabricated account (v. 111)"]]},
 quiz:[
  {q:"What is the standard Sunni position on prophethood?",o:["All prophets were men","Maryam was a prophet","Many women were prophets"],a:0,w:"This does not make women spiritually inferior."},
  {q:"How are kudhibu and kudhdhibu treated?",o:["Both authentic, both meanings true","Only one is valid","Both are errors"],a:0,w:"All authentic recitations are equally valid."},
  {q:"What does ‘ibrah literally relate to?",o:["Crossing over","Building","Counting"],a:0,w:"From the story across to its wisdom."},
  {q:"How does the close of the surah mirror its opening?",o:["Present to past tense; asking to understanding","It repeats verse 1 exactly","It does not"],a:0,w:"From signs to deeper ‘ibrah."},
  {q:"What do nujjiya and nunji together convey?",o:["Allah saved in the past and will save in the future","Two different prophets","Two different punishments"],a:0,w:"A promise to the Prophet ﷺ."}]},

/* ---------- Part 13: Fifty Lessons from Surah Yusuf ---------- */
{id:31,verses:[[3,3],[6,6],[18,18],[67,67]],title:"Fifty Lessons I: The Qur’an and the Family",short:"Lessons 1–17",
 big:"The first group of the author’s fifty lessons: the Qur’an’s language and stories, knowledge as Allah’s greatest gift, firasah and true dreams, and lessons for the household: fairness, discretion, caution, beautiful patience, strategy, honouring parents and righteous lineage.",
 remember:["If Allah intends good for someone, He gives them understanding of the religion (al-Bukhari).","Firasah carries no legal weight, but may inform personal decisions.","Fairness is required between children; equal love is not.","A good strategy is part of good faith: the believer thinks ahead.","Protect faith and chastity in youth, and Allah protects you in old age."],
 more:[
  {t:"Lessons 1–7",l:["1. The miraculous language of the Qur’an. 2. Its stories are the best: study them and tell them to children.","3. Knowledge is a sign of Allah’s good will. 4. The believer’s intuition is real, a fruit of piety.","5. True dreams and their interpretation are gifts. 6. Inner beauty outlasts outer beauty.","7. Righteousness brings success in both lives."]},
  {t:"Lessons 8–13",l:["8. Be fair and just, distinguishing fairness from love. 9. Appreciate what you have and accept what Allah withheld.","10. Do not flaunt blessings. 11. The believer is cautious: not stung twice.","12. Sabrun jamil: complaining to Allah, not to people. 13. Strategy: Yusuf searched the older brothers’ bags first."]},
  {t:"Lessons 14–17",l:["14. Honour parents in every way: Yusuf met them outside the city and seated them on the throne.","15. Pious households produce pious children (18:82). 16. Believers protect their children in din and dunya.","17. Guard faith in youth; those who delay piety to old age rarely reach it."]}],
 home:"Choose one household lesson from 8–17 and agree a concrete practice with your family this week.",
 game:{type:"match",title:"Lesson and evidence",help:"Tap a lesson on the left, then its evidence from the surah on the right.",pairs:[["Firasah is real","Ya‘qub sensed the plot"],["Don’t flaunt blessings","“Do not relate your vision”"],["Not stung twice","Ya‘qub’s hesitation over Binyamin"],["Sabrun jamil","“I complain only to Allah”"],["Good strategy","Searching Binyamin’s bag last"],["Honour parents","Raising them to the throne"]]},
 quiz:[
  {q:"Which hadith opens the lesson on knowledge?",o:["If Allah intends good for someone, He gives them understanding of the religion","Seek knowledge from cradle to grave","Knowledge is power"],a:0,w:"Al-Bukhari."},
  {q:"What legal weight does firasah carry?",o:["None, though it may inform personal decisions","It is binding evidence","It overrides witnesses"],a:0,w:"A fruit of piety, not a court proof."},
  {q:"What must parents give children equally?",o:["Fair treatment","Equal love","Identical gifts in all cases"],a:0,w:"Love is not within one’s control."},
  {q:"What does lesson 17 warn against?",o:["Delaying piety to old age","Marrying young","Travelling"],a:0,w:"Those who wait rarely reform."},
  {q:"What is lesson 13’s example of strategy?",o:["Searching the older brothers’ bags first","Storing grain","Sending the shirt"],a:0,w:"So as not to draw attention."}]},

{id:32,verses:[[24,24],[33,33],[39,39],[55,55]],title:"Fifty Lessons II: The Self and Society",short:"Lessons 18–35",
 big:"The middle group: ego, envy and unchecked desire; boundaries between the sexes; gossip and haste; the difference between a thought and a deed; patience; sparing feelings and generosity; da‘wah by conduct; tawakkul with means; civic engagement; circumstantial evidence; and justice in this world and the next.",
 remember:["Envy makes rational people act irrationally.","Seclusion with an unrelated person: Shaytan is the third (Ahmad).","“Haste is from Shaytan” (al-Tirmidhi).","A desire is not a sin; acting on it is. Controlling it is the essence of taqwa.","Fight injustice by lawful means; perfect justice is in the Hereafter."],
 more:[
  {t:"Lessons 18–25: the self",l:["18. The evils of ego: the wife of al-‘Aziz. 19. Envy is destructive. 20. The dangers of mixing that leads to temptation: avoid seclusion, lower the gaze, dress modestly.","21. Unchecked lust ruins people. 22. Gossip: leave what does not concern you, and defend the absent.","23. Haste: Yusuf did not rush out of prison. 24. Desire versus deed. 25. Turn to Allah to control an urge."]},
  {t:"Lessons 26–31: conduct and da‘wah",l:["26. The fruits of patience are sweet: reward without measure. 27. Do not hurt feelings: Yusuf never asked why they threw him in the well.","28. Generosity wins hearts: “I am the best of hosts.” 29. Actions before words.","30. Choose the right setting and audience. 31. Begin with tawhid."]},
  {t:"Lessons 32–35: means, society and justice",l:["32. Tawakkul with means: “mention me to your master”.","33. Civic engagement: Yusuf served a non-Muslim king and worked within the law; seek rights through the courts where permissible.","34. Secondary evidence: the untorn bloodstained shirt and the shirt torn from behind.","35. Injustice is part of this world; justice is complete in the next."]}],
 home:"Identify which of lessons 18–25 is your greatest personal struggle, and write one practical safeguard for it.",
 game:{type:"sort",title:"The self or society?",help:"Is the lesson mainly about the inner self, or about dealing with society?",buckets:["The inner self","Society and da‘wah"],items:[["Guard against ego",0],["Civic engagement",1],["Control unlawful desire",0],["Begin da‘wah with tawhid",1],["Beware of envy",0],["Use circumstantial evidence",1],["Turn to Allah when tempted",0],["Generosity to guests",1]]},
 quiz:[
  {q:"Is an unlawful desire that is not acted on a sin?",o:["No; controlling it is taqwa","Yes, always","Only for prophets"],a:0,w:"Lesson 24."},
  {q:"What did Yusuf avoid asking his brothers?",o:["Why they threw him in the well","Their names","Their father’s health"],a:0,w:"Lesson 27: sparing feelings."},
  {q:"What does lesson 33 draw from Yusuf’s ministry?",o:["Civic engagement can be permissible","All government work is forbidden","Muslims must rule"],a:0,w:"Within the limits of the faith."},
  {q:"What is the evidence for lesson 34?",o:["The two shirts","The dream","The cup’s reward"],a:0,w:"Secondary evidence established the truth."},
  {q:"Which hadith supports lesson 23?",o:["Haste is from Shaytan","The believer is not stung twice","Envy eats good deeds"],a:0,w:"Al-Tirmidhi."}]},

{id:33,verses:[[86,86],[92,92],[97,97],[101,101]],title:"Fifty Lessons III: Repentance and Endings",short:"Lessons 36–50",
 big:"The final group: attributing good to Allah and evil to Shaytan, Shaytan’s work in families, failure before success, complaint to Allah and du‘a, true repentance and apology, forgiving in power, care with words, reconciliation, hope for sinners, and the primacy of how a life ends.",
 remember:["Good is from Allah; discord is from Shaytan (v. 100).","Sinning on the plan of later repentance is not repentance.","Wrongs against people need their forgiveness as well as Allah’s.","Real forgiveness is at the height of power.","Allah judges by our last actions: husn al-khitam."],
 more:[
  {t:"Lessons 36–40",l:["36. Ascribe good to Allah and evil to Shaytan. 37. Shaytan targets families: pause in disputes and seek refuge.","38. No success without failure: well, slavery, accusation, prison, then the palace.","39. Complaint to Allah is iman; complaint to people is a weaker state. 40. Du‘a is the best therapy."]},
  {t:"Lessons 41–45",l:["41. Genuine repentance needs regret, remorse and resolve; Allah looks at the quality of repentance, not the quantity of sins.","42. Apologise to those you wronged: the brothers asked both Yusuf and their father.","43. Forgive, especially family and especially in power: “no blame on you today”.","44. Be careful what you say to the untrustworthy: the wolf excuse. 45. Allah can reconcile the bitterest enemies."]},
  {t:"Lessons 46–50",l:["46. When confronting wrongdoing, raise the right of Allah first: “your souls have enticed you”.","47. Everyone has some good; do not despair of sinners. The brothers became prophets.","48. Turning to Allah overcomes desire (v. 34). 49. Allah saves the righteous in hopeless situations.","50. What matters is where we end, not where we began: “let me die as a Muslim”."]}],
 home:"Is there a wrong you have repented of to Allah but not yet apologised for to the person? Plan how to make it right.",
 game:{type:"order",title:"The brothers’ path to repentance",help:"Tap the stages in the order they occur in the surah.",items:["“Then be righteous afterwards”: false repentance","Years of guilt and deceit","“We have been sinners”: confession to Yusuf","“No blame on you today”: forgiven","“Ask forgiveness for us”: to their father","Counted among the prophets, in the majority view"]},
 quiz:[
  {q:"Why was the brothers’ early “repentance” invalid?",o:["They planned to sin first","They said it too quietly","It was in the wrong place"],a:0,w:"Lesson 41."},
  {q:"Whom did the brothers apologise to?",o:["Yusuf and their father, then Allah","Only Allah","No one"],a:0,w:"Lesson 42."},
  {q:"What does lesson 46 advise when confronting wrongdoing?",o:["Raise the right of Allah first","Ignore Allah’s right","Only mention the victim"],a:0,w:"Ya‘qub began with “your souls have enticed you”."},
  {q:"Which lesson does the wolf excuse illustrate?",o:["Care with words to the untrustworthy","Hospitality","Planning"],a:0,w:"Lesson 44."},
  {q:"What is lesson 50?",o:["Where we end matters, not where we began","Wealth secures the Hereafter","Lineage decides our fate"],a:0,w:"Husn al-khitam."}]},

/* ---------- Conclusion: The Ring Composition ---------- */
{id:34,verses:[43,44],title:"The Ring Composition of Surah Yusuf",short:"Conclusion",
 big:"Modern researchers have noted that the surah’s themes are arranged in concentric rings, moving inward to a centre, the king’s dream, then outward in mirror order. The author presents this symmetry as a further sign of the Qur’an’s eloquence and divine origin.",
 remember:["Centre (K): the king’s dream, verses 43–44.","Each section mirrors its counterpart: A with A′, B with B′, and so on.","F, Yusuf tempted by the minister’s wife, mirrors F′, his exoneration by her.","Source: Jawad Anwar Qureshi, “Ring Composition in Surah Yusuf”, JIQSA vol. 2 (2017), adapted by the author.","The aim is implementation, not only memorisation."],
 more:[
  {t:"The rings",head:["Before the centre","After the centre"],rows:[["A 1–3 Preface","A′ 102–111 Conclusion"],["B 4–6 Yusuf’s dream","B′ 99–101 The dream fulfilled"],["C 7–18 Separated from Ya‘qub","C′ 58–98 Reunited with Ya‘qub"],["D 19–22 A slave in Egypt","D′ 54–57 Keeper of the storehouses"],["H 33–35 Imprisoned","H′ 50 Released"],["I 36–41 Interprets the prisoners’ dreams","I′ 46–49 Interprets the king’s dream"],["J 42 The freed prisoner forgets","J′ 45 The freed prisoner remembers"]]},
  {t:"The other pairs",l:["E 23–24, resisting the minister’s wife out of loyalty, mirrors E′ 52–53, exoneration before the ministers.","F 24–29, tempted by her, mirrors F′ 51, exonerated by her.","G 30–32, displayed before the noblewomen, mirrors G′ 51, the noblewomen testify to his innocence.","K 43–44, the king’s dream, stands alone at the centre."]},
  {t:"Closing counsel",p:"The author ends by reminding readers that faith asks for implementation, not just memorisation: absorb these lessons into daily life, and let the surah begin a life-long reflection on the whole Qur’an."}],
 home:"Sketch the ring yourself from memory, then pick the pair that most surprised you and explain why.",
 game:{type:"match",title:"Complete the ring",help:"Tap a section on the left, then its mirror on the right.",pairs:[["B: Yusuf’s dream (4–6)","B′: The dream fulfilled (99–101)"],["D: A slave in Egypt (19–22)","D′: Keeper of the storehouses (54–57)"],["F: Tempted by the minister’s wife","F′: Exonerated by her"],["H: Imprisoned (33–35)","H′: Released (50)"],["I: The prisoners’ dreams","I′: The king’s dream interpreted"],["J: The prisoner forgets (42)","J′: The prisoner remembers (45)"]]},
 quiz:[
  {q:"What sits at the centre of the ring?",o:["The king’s dream","The well","The reunion"],a:0,w:"Section K, verses 43–44."},
  {q:"What mirrors “separated from Ya‘qub” (C)?",o:["Reunited with Ya‘qub (C′)","The banquet","The prison"],a:0,w:"Verses 58–98."},
  {q:"What does the author take the symmetry to indicate?",o:["The Qur’an’s eloquence and divine origin","A later editor’s work","Coincidence"],a:0,w:"Yet another sign of its source."},
  {q:"Whose study is the ring adapted from?",o:["Jawad Anwar Qureshi","Ibn Taymiyyah","Ibn Kathir"],a:0,w:"JIQSA, vol. 2 (2017)."},
  {q:"What does the author ask of readers at the end?",o:["To implement, not only memorise","To memorise the index","To read no other surah"],a:0,w:"Faith requires practice."}]}
];

// 20 mixed questions: [question, options, index of the right answer]
const FINAL = [
 ["“Kitab” and “Qur’an” refer to revelation as…", ["Written and recited", "Old and new", "Makkan and Madinan"], 0],
 ["“Ijtiba” means…", ["To sift through and choose the best", "To test with hardship", "To send down in parts"], 0],
 ["Ya‘qub’s mention of the wolf is best understood as…", ["A tawriyah", "A prophecy", "A joke"], 0],
 ["“Sabrun jamil” means patience…", ["Without complaint to people", "Without any grief", "Without du‘a"], 0],
 ["The strongest view of the “burhan” is…", ["His certainty that Allah was watching", "A sound outside the door", "A warning from al-‘Aziz"], 0],
 ["Carrying talk between people to cause harm is…", ["Namimah", "Ghibah", "Hasad"], 0],
 ["Yusuf’s da‘wah in prison began with…", ["Tawhid", "The dreams", "Prison conditions"], 0],
 ["In the correct reading of verse 42, who forgot?", ["The freed wine-maker", "Yusuf", "The king"], 0],
 ["The Qur’an calls Egypt’s ruler in this surah…", ["Al-Malik", "Fir‘awn", "Al-‘Aziz"], 0],
 ["The soul that reproaches itself is…", ["An-nafs al-lawwamah", "An-nafs al-ammarah", "An-nafs al-mutma’innah"], 0],
 ["Yusuf described himself as…", ["Hafiz ‘alim", "Qawiy amin", "Sadiq wafi"], 0],
 ["“The believer is not stung twice” fits…", ["Ya‘qub’s caution over Binyamin", "The banquet", "The prison dreams"], 0],
 ["The reward offered for the cup illustrates…", ["Ju‘alah", "Mudarabah", "Salam"], 0],
 ["“Din al-malik” shows that din can mean…", ["A whole way of life and law", "Only worship", "A tax"], 0],
 ["Despairing of Allah’s rawh is equated with…", ["Disbelief", "Minor sin", "Nothing"], 0],
 ["“La tathriba ‘alaykum al-yawm” was repeated by the Prophet ﷺ at…", ["The conquest of Makkah", "Badr", "The Hijrah"], 0],
 ["Prostration of respect is, in our Shari‘ah…", ["Forbidden", "Recommended", "Required for parents"], 0],
 ["Al-Fatir means…", ["The Originator from nothing", "The King", "The Judge"], 0],
 ["‘Ibrah comes from a root meaning…", ["To cross over", "To build", "To count"], 0],
 ["The centre of the surah’s ring composition is…", ["The king’s dream", "The well", "The reunion"], 0]
].map(([q,o,a]) => ({q, o, a, w:"The answer is: "+o[a]+"."}));

export default {
  name: "Surah Yusuf",
  lines: ["In the story of Yusuf are signs for those who ask.","Sabrun jamil: patience without complaint.","Allah prevails over His affair.","Read the verses first, then the notes.","The outcome belongs to the righteous."],
  versesSource: SOURCE,
  // verses is [from, to], or a list of ranges such as [[3,3],[18,18]] for lessons that draw on several places.
  lessons: LESSONS.map((l) => ({ ...l, ayat: (Array.isArray(l.verses[0]) ? l.verses : [l.verses]).flatMap(([a, b]) => ayat(a, b)) })),
  final: FINAL,
};
