// Content for the older-learner page (age 16+). Source: "Thalathah Al-Usool | Aqeedah: Course Notes
// (Semester One)", Lessons 1-10 only. Same shape as LESSONS / FINAL in learn/index.html.
// Lives under functions/ so it is never served as a static file: only /api/content hands it out.

const LESSONS = [
{id:1,title:"‘Aqeedah: Its Definition and Names",short:"Meaning, subject matter and seven names",
 big:"‘Aqeedah is a person’s firm, certain beliefs. The Islamic science of ‘Aqeedah studies the foundations of iman and what is connected to them, all based on recognised evidences.",
 remember:["Linguistically, ‘Aqeedah is from the root ‘-q-d: tying something firmly, like a knot, covenant or contract.","Technically: the firm, decisive beliefs of a person or group, held without doubt.","Subject matter: the six pillars of iman, the matters connected to iman, and the sources of ‘Aqeedah.","Manhaj is wider than ‘Aqeedah; fiqh is action-based, while ‘Aqeedah is knowledge- and belief-based.","Seven names: ‘Aqeedah, al-Fiqh al-Akbar, as-Sunnah, Usul ad-Din, al-Iman, at-Tawheed, ash-Shari‘ah."],
 more:[
  {t:"Why start with definitions",p:"A ruling on something depends on how well you understand it (al-hukm ‘ala ash-shay’ far‘un ‘an tasawwurihi). “Sunnah” can mean books of belief, fiqh or hadith, so you must know which is meant. Scholars introduce a science before teaching it; this lesson covers the meaning of ‘Aqeedah and its names."},
  {t:"Linguistic and technical meaning",l:["The root ‘-q-d means tying firmly. The Qur’an uses it for fulfilling contracts and covenants, the knots in Surah al-Falaq, and the marriage contract.","‘Aqeedah: firm, decisive beliefs held without doubt. Beliefs can be right or wrong, inside or outside Islam.","Islamic ‘Aqeedah: the science of the matters related to the foundations of iman and what is connected to them, based on recognised Islamic evidences."]},
  {t:"Subject matter: three parts",l:["The six pillars of iman (Hadith of Jibreel): Allah, His angels, His books, His messengers, the Last Day and the Divine Decree (qadar). A person cannot be a Muslim without them.","Matters connected to iman: the reality of iman, the rulings and names given to people, belief about the Companions, and obedience to rulers.","The sources of ‘Aqeedah: every belief must rest on evidence from the Qur’an and Sunnah, understood as the Prophet ﷺ and the Companions understood them."]},
  {t:"‘Aqeedah, manhaj and fiqh",head:["Term","Meaning","How it differs"],rows:[["Manhaj","Methodology","Wider: covers belief and also conduct, manners, worship and dealings. Some scholars treat the two as the same."],["Fiqh","Practical rulings","Action-based: prayer, zakah, fasting, hajj, trade, marriage, divorce."],["‘Aqeedah","Firm beliefs","Knowledge- and belief-based, though iman also has an action side."]]},
  {t:"The seven names",head:["Name","Why it is used"],rows:[["‘Aqeedah","The main name."],["al-Fiqh al-Akbar","“The greater understanding”: belief about Allah is the greatest understanding; rulings are the lesser fiqh."],["as-Sunnah","Many Salaf titled their creed books this, because deviation in belief comes from opposing the Sunnah."],["Usul ad-Din","“Foundations of the religion”: ‘Aqeedah holds more foundational issues than other subjects."],["al-Iman","Most of ‘Aqeedah is the pillars of iman."],["at-Tawheed","Singling out Allah in all that is exclusive to Him; the foundation of ‘Aqeedah."],["ash-Shari‘ah","Normally “legislation”, but also used for beliefs."]]}],
 home:"From memory, answer the Ustadh’s revision questions: the linguistic and technical meaning of ‘Aqeedah, its subject matter, how it differs from manhaj and fiqh, and its seven names.",
 game:{type:"match",title:"Match the name to why it is used",help:"Tap a name on the left, then its explanation on the right.",pairs:[["al-Fiqh al-Akbar","The greater understanding"],["Usul ad-Din","Foundations of the religion"],["at-Tawheed","Singling out Allah in what is exclusive to Him"],["ash-Shari‘ah","Normally “legislation”, also used for beliefs"],["as-Sunnah","Title many Salaf gave their creed books"],["al-Iman","Most of the subject is its pillars"]]},
 quiz:[
  {q:"What does the root ‘-q-d mean?",o:["Tying something firmly","Travelling far","Speaking clearly"],a:0,w:"It means tying firmly, like a knot, covenant or contract."},
  {q:"Which is part of the subject matter of ‘Aqeedah?",o:["The rulings of trade","The six pillars of iman","The rules of recitation"],a:1,w:"The six pillars, the matters connected to iman, and the sources of ‘Aqeedah."},
  {q:"How does manhaj differ from ‘Aqeedah?",o:["It is narrower","It is wider: belief plus conduct, worship and dealings","It only concerns hadith grading"],a:1,w:"Manhaj covers belief and also conduct, manners, worship and dealings with others."},
  {q:"Forgetfully eating in Ramadan is a question of…",o:["‘Aqeedah","Fiqh","Manhaj only"],a:1,w:"It is a practical ruling, so it is fiqh."},
  {q:"“Al-Fiqh al-Akbar” means…",o:["The greater understanding","The foundations of the religion","The legislation"],a:0,w:"Belief about Allah is the greatest understanding; rulings are the lesser fiqh."}]},

{id:2,title:"The Importance of ‘Aqeedah",short:"Six reasons, in order",
 big:"‘Aqeedah is with a person from before birth until entering Jannah. The Ustadh gives six reasons, in order, for why it deserves the most attention.",
 remember:["Before birth: it is the purpose you were created for (Adh-Dhariyat 51:56).","In this life: it brings security and guidance (Al-An‘am 6:82).","In the hereafter: deeds are accepted only with Tawheed (Al-Furqan 25:23).","It is the greatest means of forgiveness, earns the Prophet’s ﷺ intercession, and is the key to Jannah.","Tawheed runs through everything in the Qur’an and Sunnah."],
 more:[
  {t:"1. The purpose of creation",p:"Allah says He created jinn and mankind only to worship Him (Adh-Dhariyat 51:56). Ibn ‘Abbas explained that “worship” in such verses means Tawheed. Your purpose in life is to establish Tawheed; everything else is secondary."},
  {t:"2 and 3. This life and the next",l:["Security and guidance: those who believe and do not mix their iman with wrongdoing (zulm) have safety and are guided (Al-An‘am 6:82). This means not mixing righteous deeds with shirk or wrong belief.","Accepted deeds: Allah turns the deeds of those who lacked Tawheed into scattered dust (Al-Furqan 25:23)."]},
  {t:"4 and 5. Forgiveness and intercession",l:["Forgiveness: in the hadith recorded by at-Tirmidhi (hadith 42 of an-Nawawi’s Forty), if a person comes with sins nearly the size of the earth but meets Allah without associating anything with Him, He will meet him with equal forgiveness.","Intercession: Abu Hurayrah asked who would be most deserving of the Prophet’s ﷺ intercession; he answered that it is the one who said La ilaha illa Allah sincerely from the heart."]},
  {t:"6. The key to Jannah",p:"Whoever testifies to Tawheed, to Muhammad ﷺ as Allah’s slave and messenger, to ‘Isa as His slave, messenger and word, and that Paradise and Hell are true, is admitted to Jannah on whatever deeds he had. Whoever’s last words are La ilaha illa Allah enters Jannah. The 70,000 who enter without reckoning are those who perfect Tawheed and true reliance on Allah."},
  {t:"Tawheed in the Qur’an and Sunnah",l:["The first command in the Qur’an is to worship your Lord, and the next verse gives the first prohibition: do not set up rivals with Allah (Al-Baqarah 2:21–22).","Surah al-Fatihah, the greatest surah, is about Allah’s lordship, mercy and exclusive right to worship and help.","Ayat al-Kursi, the greatest verse, is entirely about Allah.","The Prophet ﷺ spent his first ten years in Makkah calling only to ‘Aqeedah and Tawheed."]}],
 home:"Memorise the six reasons in order, then say them aloud without looking. Note: the lecture’s closing minutes were not captured in the notes, so watch the end of the lesson to fill that in.",
 game:{type:"order",title:"The six reasons, in order",help:"Tap the reasons in the order the Ustadh gave them.",items:["The purpose of creation","Security and guidance in this life","Deeds accepted in the hereafter","The greatest means of forgiveness","The Prophet’s ﷺ intercession","The key to Jannah"]},
 quiz:[
  {q:"Which verse states the purpose of creation?",o:["Adh-Dhariyat 51:56","Al-An‘am 6:82","Al-Furqan 25:23"],a:0,w:"“I created jinn and mankind only to worship Me.”"},
  {q:"How did Ibn ‘Abbas explain “worship” in such verses?",o:["Fasting","Tawheed","Charity"],a:1,w:"He explained it as Tawheed."},
  {q:"What does Al-An‘am 6:82 promise those who do not mix iman with zulm?",o:["Wealth","Security and guidance","Long life"],a:1,w:"They have safety and are guided."},
  {q:"Who is most deserving of the Prophet’s ﷺ intercession?",o:["The one who said La ilaha illa Allah sincerely from the heart","The one with the most wealth","The one from his tribe"],a:0,w:"The one who said it sincerely from the heart."},
  {q:"What did the Prophet ﷺ call to in his first ten years in Makkah?",o:["The detailed rulings","‘Aqeedah and Tawheed only","Trade and travel"],a:1,w:"The detailed obligatory acts came later, with the Night Journey."}]},

{id:3,title:"The Reality and Objectives of ‘Aqeedah",short:"Four objectives and a sound heart",
 big:"Studying ‘Aqeedah has four objectives, and Tawheed must change your heart and conduct, not just add information or arguments.",
 remember:["To know Allah: your Lord, Creator, Provider and Guide.","To worship Allah correctly.","To hold correct beliefs on every other issue of ‘Aqeedah.","To realise Tawheed, so that learning it brings you closer to Allah.","Knowledge is not narrating much; it is fear of Allah."],
 more:[
  {t:"The four objectives",l:["To know Allah. Knowledge takes its honour from what it is about, so the highest knowledge is knowledge of the Highest.","To worship Allah correctly. An action can look right and still be unaccepted, and wrong belief can wipe out other deeds.","To hold correct beliefs on every other issue, which protects you from sin or from what nullifies your deeds.","To realise Tawheed, so that learning it brings you closer to Allah and affects you."]},
  {t:"The common beginner’s mistake",p:"Many new students make refuting people their first use of ‘Aqeedah. Clarifying falsehood is part of the religion, but it is not the whole religion and was not the Salaf’s approach, especially early in seeking knowledge. The Salaf first established Tawheed within themselves and in their actions."},
  {t:"How the Salaf acted on it",head:["Knowing that…","They…"],rows:[["Allah hears everything","guarded their speech"],["Allah sees","avoided what angers Him"],["Allah is Forgiving","asked His forgiveness"],["they will stand before Him for account","prepared"]]},
  {t:"Knowledge and fear of Allah",l:["Whoever knows Allah by His names, attributes and actions will love Him.","The more a person knows Allah, the more he fears Him: “Only those of His servants who have knowledge fear Allah” (Fatir 35:28).","A statement attributed to Ibn Mas‘ud: knowledge is not narrating much, it is fear of Allah.","Some of the Salaf: whoever fears Allah is a scholar, and whoever disobeys Him is ignorant."]},
  {t:"A sound heart",p:"On the Day when wealth and children do not benefit, only the one who comes to Allah with a sound heart will benefit (Ash-Shu‘ara 26:88–89). A sound heart is free of envy and hatred and, as many of the Salaf said, above all free of shirk. The most important means to it is correct ‘Aqeedah."}],
 home:"Ask yourself the Ustadh’s three questions: Does learning more about Allah bring me closer to Him? Do I fear Him when I am alone, and am I more eager to worship? Or am I only gathering information and refutations?",
 game:{type:"match",title:"Knowledge that changed conduct",help:"Tap what the Salaf knew on the left, then how they acted on the right.",pairs:[["Allah hears everything","They guarded their speech"],["Allah sees","They avoided what angers Him"],["Allah is Forgiving","They asked His forgiveness"],["They will stand before Him","They prepared for the account"]]},
 quiz:[
  {q:"How many objectives of studying ‘Aqeedah does the lesson give?",o:["Three","Four","Six"],a:1,w:"Know Allah, worship Him correctly, hold correct beliefs, and realise Tawheed."},
  {q:"What is the common beginner’s mistake?",o:["Making refutation the first use of ‘Aqeedah","Memorising too much Qur’an","Asking the scholars"],a:0,w:"The Salaf first established Tawheed within themselves."},
  {q:"Which verse links knowledge with fear of Allah?",o:["Fatir 35:28","Al-Baqarah 2:21","Luqman 31:15"],a:0,w:"“Only those of His servants who have knowledge fear Allah.”"},
  {q:"According to many of the Salaf, a sound heart is above all free of…",o:["Poverty","Shirk","Travel"],a:1,w:"Free of envy and hatred, and above all free of shirk."},
  {q:"What is the most important means to a sound heart?",o:["Correct ‘Aqeedah","Wealth","Debate"],a:0,w:"Correct ‘Aqeedah, from which everything else follows."}]},

{id:4,title:"Sources of ‘Aqeedah",short:"Qur’an, authentic Sunnah, consensus of the Salaf",
 big:"All beliefs in ‘Aqeedah rest on three sources: the Qur’an, the authentic Sunnah, and the consensus and understanding of the Salaf. Not logic, dreams, inspiration or blind following.",
 remember:["The whole religion is built on evidence (dalil); its opposite is blind following (taqlid).","The Sunnah is also revelation (An-Najm 53:3–4); only sahih and hasan narrations are accepted.","Consensus (ijma‘) of the qualified scholars is binding (An-Nisa 4:115).","The Salaf are three generations: the Companions, the Tabi‘un and the Atba‘ at-Tabi‘in.","The Companions did not differ on the foundations of ‘Aqeedah, only on a few secondary points."],
 more:[
  {t:"Why evidence matters",l:["Evidence keeps Islam pure, sets it apart from other religions, and keeps people united on one source.","The Prophet ﷺ left two things that prevent going astray if you hold to them: the Book of Allah and his Sunnah.","Most differences between sects go back to where they take their ‘Aqeedah from.","Not sources: logic, dreams, inspiration or visions. Scholars are respected and asked (An-Nahl 16:43), but they are not infallible and are not followed blindly."]},
  {t:"The established Sunnah",l:["“Established” means authentic: weak and fabricated narrations are not accepted.","Allah commands obedience to Him and to His Messenger, and sent down the Dhikr so that he would explain it (An-Nahl 16:44).","The Prophet ﷺ warned of a man reclining on his couch saying “stick to the Qur’an alone.”","Ash-Shafi‘i’s principle: if a hadith is authentic, it is my madhhab.","The Companions acted at once: they removed their gold rings, removed their sandals in prayer, and turned in prayer when the qiblah changed."]},
  {t:"Ijma‘ (consensus)",l:["When the qualified, major scholars agree that a ruling holds, it is binding.","Qur’an: whoever opposes the Messenger after guidance is clear and follows a path other than the believers’ (An-Nisa 4:115).","Sunnah: my ummah will not unite on misguidance."]},
  {t:"The understanding of the Salaf",l:["Claiming “Qur’an and Sunnah” is not enough; the question is whose understanding.","Allah is pleased with the first Muhajirun and Ansar and those who follow them in good conduct (At-Tawbah 9:100).","“Follow the path of the one who turns to Me” (Luqman 31:15).","The hadith of al-‘Irbad ibn Sariyah: hold to my Sunnah and that of the rightly guided caliphs; every innovation is misguidance.","The saved group are those on what the Prophet ﷺ and his Companions were on."]},
  {t:"Did the Companions differ?",p:"They never differed on the foundations of ‘Aqeedah. Ibn Taymiyyah noted they differed in some secondary issues, such as whether the Prophet ﷺ saw his Lord on the Night Journey, yet unity and love remained. Differing on a small issue with a person of the Sunnah is no reason to boycott him."}],
 home:"Write down the three sources, then give two proofs for following the Sunnah and two for following the understanding of the Salaf. English suffices at this level.",
 game:{type:"sort",title:"Source or not a source?",help:"Is it one of the sources of ‘Aqeedah, or not?",buckets:["A source of ‘Aqeedah","Not a source"],items:[["The Qur’an",0],["A dream",1],["The authentic Sunnah",0],["Logic placed above the texts",1],["The consensus of the Salaf",0],["Blind following of forefathers",1],["A weak or fabricated narration",1],["Inspiration or visions",1]]},
 quiz:[
  {q:"What is blind following called in Arabic?",o:["Taqlid","Ijma‘","Dalil"],a:0,w:"Taqlid is the opposite of following evidence."},
  {q:"Which narrations are accepted as a source?",o:["Any narration","Only sahih and hasan","Only those in one book"],a:1,w:"Weak and fabricated narrations are not accepted."},
  {q:"Which verse is cited for consensus?",o:["An-Nisa 4:115","Al-Fatihah 1:2","Al-Kahf 18:110"],a:0,w:"Following a path other than the believers’ is condemned in it."},
  {q:"The Salaf are…",o:["Three centuries","Three generations","Three cities"],a:1,w:"The Companions, the Tabi‘un and the Atba‘ at-Tabi‘in."},
  {q:"Did the Companions differ in ‘Aqeedah?",o:["Yes, in its foundations","Never in the foundations, only on a few secondary points","They differed on everything"],a:1,w:"The foundations were agreed; a few secondary points were differed over."}]},

{id:5,title:"Ahl as-Sunnah: Definition and Names",short:"Who they are and six names",
 big:"Ahl as-Sunnah are those who follow the Qur’an and Sunnah with the understanding of the Salaf. It is not a sect or a secret society: it is simply following what the Prophet ﷺ and the Companions were on.",
 remember:["Six names: Ahl as-Sunnah wal-Jama‘ah, Ahl al-Hadith, Ahl al-Athar, at-Ta’ifah al-Mansurah, al-Firqah an-Najiyah, as-Salafiyyun.","“In the Fire” in the hadith of the 73 sects does not necessarily mean forever, and the Prophet ﷺ said “my ummah.”","Allah named us Muslims; a clarifying name may be used where it helps.","What matters is the reality, not the label.","Majority is not a proof."],
 more:[
  {t:"Definition",p:"Scholars defined them as those who hold to the Book of Allah and the Sunnah, to what the earliest Companions and Tabi‘un agreed on, and to those who follow them well. Note: the captions lost most Arabic terms in this lesson, so names and scholars here are reconstructed from context; check them against the workbook."},
  {t:"The six names",head:["Name","Meaning"],rows:[["Ahl as-Sunnah wal-Jama‘ah","Those known for clinging to the Prophet’s ﷺ way and the united body of Muslims"],["Ahl al-Hadith","Those who follow the hadith"],["Ahl al-Athar","People of the narrations"],["at-Ta’ifah al-Mansurah","The victorious group"],["al-Firqah an-Najiyah","The saved sect"],["as-Salafiyyun","Those who follow the Salaf (the predecessors)"]]},
  {t:"The hadith of the 73 sects",l:["The Ustadh says it is authentic.","It does not mean everyone else is a disbeliever: the Prophet ﷺ said “my ummah.”","“In the Fire” in a text does not necessarily mean forever.","The saved are those upon what the Prophet ﷺ and his Companions were upon."]},
  {t:"Can you call yourself “Salafi”?",l:["Ibn Taymiyyah: there is no fault in someone who openly follows the way of the Salaf and attributes himself to it.","The default is that Allah named us Muslims.","There is no dispute over terms if the meaning is correct and clear.","Weigh benefit and harm: if the name causes harm or closes ears, it is better not to use it.","What matters is the reality: your worship, character and manners."]},
  {t:"Answering “the majority is with us”",l:["Majority is not a proof. Prophets came with few followers, some with none.","It is not even true: most ordinary Muslims are on the natural fitrah.","In the time of the Salaf these groups did not exist."]}],
 home:"List the six names from memory, then explain in your own words whether we may call ourselves Salafi, and how you would answer “we are the majority, so we are on the truth.”",
 game:{type:"match",title:"Match the name to its meaning",help:"Tap a name on the left, then its meaning on the right.",pairs:[["Ahl al-Hadith","Those who follow the hadith"],["Ahl al-Athar","People of the narrations"],["at-Ta’ifah al-Mansurah","The victorious group"],["al-Firqah an-Najiyah","The saved sect"],["al-Jama‘ah","The united body of Muslims"],["Salaf","Predecessor"]]},
 quiz:[
  {q:"Who are Ahl as-Sunnah?",o:["Followers of one fiqh school","Those who follow the Qur’an and Sunnah with the understanding of the Salaf","A secret society"],a:1,w:"It is simply following what the Prophet ﷺ and the Companions were on."},
  {q:"“At-Ta’ifah al-Mansurah” means…",o:["The saved sect","The victorious group","People of the narrations"],a:1,w:"From the hadith that a group will always remain victorious on the truth."},
  {q:"In the hadith of the 73 sects, does “in the Fire” necessarily mean forever?",o:["Yes","No"],a:1,w:"The Prophet ﷺ said “my ummah”, so they are still Muslims."},
  {q:"What is the default name Allah gave us?",o:["Muslims","Salafis","Hanbalis"],a:0,w:"A clarifying name may be used, but the default is Muslims."},
  {q:"Is “the majority is with us” a proof?",o:["Yes","No"],a:1,w:"Majority is not a proof; prophets came with few followers."}]},

{id:6,title:"The Methodology of Ahl as-Sunnah",short:"Eight characteristics",
 big:"Eight characteristics show how Ahl as-Sunnah approach the religion, and Ahl as-Sunnah is not tied to any one fiqh madhhab.",
 remember:["They attribute themselves only to the Sunnah.","They cling to the Qur’an and Sunnah and to what the Companions were upon.","They gather all the evidences before ruling.","They combine knowledge with conduct.","They warn against innovation, with wisdom and by qualified people."],
 more:[
  {t:"The eight characteristics",l:["They attribute themselves only to the Sunnah, not to a person, place, action or belief.","They cling firmly to the Qur’an and Sunnah and call to them.","They hold firmly to what the Companions and their students were upon.","They gather all the evidences before ruling.","They agree on the foundations and differ little in secondary issues.","They have a complete methodology for evidences.","They combine knowledge with conduct.","They warn against the people of innovation."]},
  {t:"Only the Sunnah",p:"Imam Malik, asked who Ahl as-Sunnah are, said they are those with no title but the Sunnah. Other groups are named after a person, an action or an idea. Ahl as-Sunnah were sometimes called Hanabilah because Imam Ahmad stood firm in the Mihnah, but the creed is not specific to any school."},
  {t:"Evidence and the intellect",l:["Ahl as-Sunnah collect every verse and hadith on a subject and then conclude. Innovators decide first and then select proofs.","The intellect is used to understand and examine, not to overrule the texts.","Ibn Taymiyyah’s Dar’ Ta‘arud al-‘Aql wa an-Naql argues that sound intellect never contradicts authentic narrations."]},
  {t:"Knowledge with conduct",p:"‘Aqeedah is not just information; it should change you. Imams such as Ahmad and Waki‘ wrote on zuhd, which means the heart is detached from the world: you may hold money, but it is in your hand, not your heart. Creed books include sections on manners."},
  {t:"Warning against innovation",l:["An innovation is anything attributed to the religion that is not from it, whether an action, belief or statement.","Refuting innovators is for qualified people acting with wisdom, aiming at guidance and not at winning.","For now: do not take knowledge from innovators. With ordinary people, speak with good manners and give them the truth.","Do not rush into refutations; focus on solid knowledge first."]},
  {t:"Ahl as-Sunnah and the fiqh madhhabs",p:"Ahl as-Sunnah has no connection to any one fiqh madhhab; scholars of the Sunnah appear in every school. It is the way of the Prophet ﷺ and the Companions, from before the madhhabs existed."}],
 home:"List the eight characteristics from memory. Then pick one, such as gathering all the evidences before ruling, and think of where you could apply it this week.",
 game:{type:"sort",title:"Their methodology, or not?",help:"Is this something Ahl as-Sunnah do, or something they do not do?",buckets:["Ahl as-Sunnah do this","They do not do this"],items:[["Attribute themselves only to the Sunnah",0],["Put intellect ahead of the texts",1],["Gather all the evidences before ruling",0],["Decide first, then select proofs",1],["Combine knowledge with conduct",0],["Name themselves after a person",1],["Hold to what the Companions were upon",0],["Rush into refutations as beginners",1]]},
 quiz:[
  {q:"How many characteristics does the lesson list?",o:["Six","Eight","Ten"],a:1,w:"Eight characteristics of their methodology."},
  {q:"What did Imam Malik say about who Ahl as-Sunnah are?",o:["Those with no title but the Sunnah","Those of one city","Those who debate most"],a:0,w:"They attribute themselves only to the Sunnah."},
  {q:"What is the role of the intellect?",o:["To overrule the texts","To understand and examine, not overrule","It has no role"],a:1,w:"Sound intellect never contradicts authentic narrations."},
  {q:"Zuhd means…",o:["Owning nothing at all","The heart is detached from the world","Avoiding people"],a:1,w:"Money may be in your hand, but not in your heart."},
  {q:"Is Ahl as-Sunnah tied to one fiqh madhhab?",o:["Yes, the Hanbali school","No, its scholars appear in every school"],a:1,w:"It is the way of the Prophet ﷺ and the Companions, from before the madhhabs existed."}]},

{id:7,title:"The Books of ‘Aqeedah",short:"The main works and a study order",
 big:"In the Companions’ time there were no formal books on ‘Aqeedah. As knowledge weakened and deviant groups emerged, the scholars of Ahl as-Sunnah began to write.",
 remember:["No books at first: the Muslims were united and learned directly from the Prophet ﷺ.","Scholars first wrote on specific topics, and later on every topic of ‘Aqeedah.","Beginners start with al-Usul ath-Thalathah and al-Qawa‘id al-Arba‘.","Then Kashf ash-Shubuhat and Nawaqid al-Islam, then Kitab at-Tawheed.","Titles and authors in this lesson are reconstructed from unclear captions; check the workbook."],
 more:[
  {t:"Why books came later",p:"In the Companions’ time the Muslims were united on the truth, learned directly from the Prophet ﷺ, and no major sect had appeared. Writing began when deviation appeared, to preserve sound belief."},
  {t:"Early works",head:["Book","Author"],rows:[["Kitab as-Sunnah","Ibn Abi ‘Asim"],["Ash-Shari‘ah","al-Ajurri"],["Sharh as-Sunnah","al-Barbahari"],["Khalq Af‘al al-‘Ibad","Imam al-Bukhari"],["Usul as-Sunnah","Imam Ahmad"],["Al-Ha’iyyah (a poem)","Ibn Abi Dawud"]]},
  {t:"Two widely studied creeds",l:["Al-‘Aqidah at-Tahawiyyah by at-Tahawi (Hanafi): an early and widely accepted creed text. Ibn Abi al-‘Izz al-Hanafi wrote the main detailed explanation.","Al-‘Aqidah al-Wasitiyyah by Ibn Taymiyyah: written at the request of a judge from Wasit; full of verses and hadith."]},
  {t:"Books of Shaykh Muhammad ibn ‘Abd al-Wahhab",head:["Book","About"],rows:[["Al-Usul ath-Thalathah","The book of this course; a short beginner text"],["Al-Qawa‘id al-Arba‘","A short beginner text"],["Kashf ash-Shubuhat","Removing the doubts raised by the people of shirk"],["Nawaqid al-Islam","Ten things that take a person out of Islam"],["Kitab at-Tawheed","67 chapters on Tawheed, mostly verses and hadith"]]},
  {t:"Suggested order",p:"Beginners start with the two beginner texts, then Kashf ash-Shubuhat and Nawaqid al-Islam, then Kitab at-Tawheed. The order is flexible and scholars differ. The Ustadh asks students to memorise at least the names of these books."}],
 home:"Memorise the names of more than ten of these books and their authors, as the Ustadh asks. Check each title against the workbook first.",
 game:{type:"match",title:"Which scholar wrote it?",help:"Tap a book on the left, then its author on the right.",pairs:[["Usul as-Sunnah","Imam Ahmad"],["al-‘Aqidah at-Tahawiyyah","at-Tahawi"],["al-‘Aqidah al-Wasitiyyah","Ibn Taymiyyah"],["Kitab at-Tawheed","Muhammad ibn ‘Abd al-Wahhab"],["Khalq Af‘al al-‘Ibad","al-Bukhari"],["Ash-Shari‘ah","al-Ajurri"]]},
 quiz:[
  {q:"Why were there no ‘Aqeedah books in the Companions’ time?",o:["Writing was unknown","The Muslims were united and learned directly from the Prophet ﷺ","Books were forbidden"],a:1,w:"No major sect had appeared."},
  {q:"Who wrote Usul as-Sunnah?",o:["Imam Ahmad","at-Tahawi","al-Ajurri"],a:0,w:"A short book by Imam Ahmad."},
  {q:"Who wrote al-‘Aqidah al-Wasitiyyah?",o:["Ibn Abi Dawud","Ibn Taymiyyah","al-Bukhari"],a:1,w:"Written at the request of a judge from Wasit."},
  {q:"How many chapters does Kitab at-Tawheed have?",o:["10","40","67"],a:2,w:"67 chapters, mostly verses and hadith."},
  {q:"Which pair should a beginner start with?",o:["Al-Usul ath-Thalathah and al-Qawa‘id al-Arba‘","Kitab at-Tawheed and al-Wasitiyyah","Any two books"],a:0,w:"The two short beginner texts come first."}]},

{id:8,title:"The Life of the Author",short:"Shaykh Muhammad ibn ‘Abd al-Wahhab",
 big:"The author of Thalathah al-Usool is Shaykh Muhammad ibn ‘Abd al-Wahhab, born in 1115 AH in al-‘Uyaynah and died in 1206 AH aged 91.",
 remember:["Muhammad ibn ‘Abd al-Wahhab ibn Sulayman at-Tamimi, born 1115 AH in al-‘Uyaynah in Najd.","He came from a family of scholars and memorised the Qur’an before ten.","He travelled to study: Makkah, Madinah and Basra.","He allied with Muhammad ibn Sa‘ud in Dir‘iyyah and died in 1206 AH.","Four emphases of his call: Tawheed, the Sunnah, unity and moderation."],
 more:[
  {t:"Name, birthplace and family",l:["Of the tribe of Banu Tamim, born in al-‘Uyaynah, about 30 km north-west of Riyadh.","The environment resembled the Jahiliyyah, with grave and tree worship.","His grandfather Sulayman was the mufti of Najd; his father ‘Abd al-Wahhab was a scholar and judge."]},
  {t:"Early life and character",l:["He memorised the Qur’an before ten and led people in prayer at 12.","Known for forgiving, kindness, loyalty and humility.","Known for worship and sincerity: night prayer, Qur’an and constant dhikr."]},
  {t:"Travels",l:["He first studied in his hometown, then travelled: Makkah, Madinah and Basra.","In Madinah two scholars influenced him most: ‘Abdullah ibn Ibrahim ibn Sayf an-Najdi and Muhammad Hayat as-Sindi.","Lesson for students: study locally first, online if needed, then travel to scholars."]},
  {t:"The call and the alliance",l:["After his father’s death in Huraymila (1153 AH) he called openly.","He went to Dir‘iyyah and made an alliance with its ruler, Muhammad ibn Sa‘ud.","Lesson: a call needs a team, and everyone can serve da‘wah in their own way.","He died in 1206 AH aged 91; he took nothing from the funds."]},
  {t:"The label “Wahhabi”",p:"The Ustadh says the label is wrong: his call was an extension of the Prophet’s ﷺ call, the word is used as a term of abuse, and it is not even his name. Wahhab was his father’s name, and al-Wahhab is a name of Allah meaning the Giver. To know his call, read his books."},
  {t:"His call and his writing",head:["Four emphases of his call","Four traits of his writing"],rows:[["Tawheed and sincerity","Ease and clarity"],["Following the Sunnah","Rulings with evidence"],["Unity","Well gathered and structured"],["Moderation","He wants good for the reader"]]}],
 home:"Without notes, give a short overview of the author: his name, birth and death, the outline of his life, some of his books and his main aim.",
 game:{type:"order",title:"His life, in order",help:"Tap the events in the order they happened.",items:["Born in al-‘Uyaynah (1115 AH)","Memorises the Qur’an before ten","Travels to study in Madinah and Basra","Calls openly after his father’s death (1153 AH)","Alliance with Muhammad ibn Sa‘ud in Dir‘iyyah","Dies aged 91 (1206 AH)"]},
 quiz:[
  {q:"When and where was the author born?",o:["1115 AH in al-‘Uyaynah","1206 AH in Makkah","150 AH in Basra"],a:0,w:"In al-‘Uyaynah in Najd."},
  {q:"Which scholar in Madinah is said to have influenced him most?",o:["Muhammad Hayat as-Sindi","Mansur al-Buhuti","at-Tahawi"],a:0,w:"Later scholars said Hayat as-Sindi influenced him most."},
  {q:"With whom did he make an alliance in Dir‘iyyah?",o:["Muhammad ibn Sa‘ud","The amir of Basra","His uncle"],a:0,w:"Its ruler, Muhammad ibn Sa‘ud."},
  {q:"Which is one of the four emphases of his call?",o:["Unity","Isolation","Wealth"],a:0,w:"Tawheed, the Sunnah, unity and moderation."},
  {q:"How old was he when he died?",o:["54","62","91"],a:2,w:"He died in 1206 AH aged 91."}]},

{id:9,title:"About the Book, Thalathah al-Usool",short:"Its name, structure and the three principles",
 big:"The book is Al-Usool ath-Thalathah wa Adillatuha, “The Three Fundamental Principles and Their Evidences.” Its three principles are the three questions every person is asked in the grave.",
 remember:["Scholars advise it as the first ‘Aqeedah text.","The book has five parts.","The three principles: Who is your Lord? What is your religion? Who is your Prophet?","The Ustadh counts about 65 Qur’anic proofs in the book.","When you first study a book, stick to your teacher’s explanation."],
 more:[
  {t:"Why this book first",l:["It is the advice of the scholars, and a student is walking a path others have already taken.","It is a foundation text in ‘Aqeedah.","The imams made even the general public memorise it.","One of the great scholars taught it more than a hundred times."]},
  {t:"The five parts",l:["The four obligations, from Surah al-‘Asr.","The three points regarding Tawheed.","The third introductory part (the notes’ captions call it “the importance of Tawheed”).","The three fundamental principles, the main part of the book.","The ending: a few extra issues such as the Last Day."]},
  {t:"The three fundamental principles",p:"Who is your Lord? What is your religion? Who is your Prophet? Whoever answers correctly finds the grave a garden from the gardens of Paradise. This ties ‘Aqeedah to the grave: the book should keep reminding us of death. ‘Uthman used to weep when standing at a grave, because the Prophet ﷺ said the grave is the first station of the Hereafter."},
  {t:"Benefit of studying it",p:"If you understand it, act on it, teach it, call to it and are patient in doing so, then, by Allah’s permission, you will be able to answer the questions of the grave and enter Paradise."},
  {t:"Which explanation to use",p:"“Best” is subjective, so the Ustadh declines to name one. The main rule: when you first study a book, stick to your teacher’s explanation. Master it, and only later, after asking your teacher, add others."}],
 home:"Draw the “bird’s-eye view” of the book from memory: its five parts, with the three questions of the grave under part four.",
 game:{type:"order",title:"The five parts of the book",help:"Tap the parts in the order they come in the book.",items:["The four obligations (Surah al-‘Asr)","The three points regarding Tawheed","The third introductory part","The three fundamental principles","The ending"]},
 quiz:[
  {q:"What is the full title of the book?",o:["Al-Usool ath-Thalathah wa Adillatuha","Kitab at-Tawheed","Usul as-Sunnah"],a:0,w:"“The Three Fundamental Principles and Their Evidences.”"},
  {q:"How many parts does the book have?",o:["Three","Five","Seven"],a:1,w:"Five parts, with the three principles as the main part."},
  {q:"What are the three fundamental principles?",o:["Three kinds of prayer","The three questions asked in the grave","Three cities"],a:1,w:"Who is your Lord, what is your religion, who is your Prophet."},
  {q:"Which part comes first?",o:["The ending","The four obligations from Surah al-‘Asr","The three principles"],a:1,w:"The four obligations open the book."},
  {q:"Which explanation should a new student use?",o:["As many as possible","Their teacher’s explanation","None"],a:1,w:"Stick to your teacher’s explanation first."}]},

{id:10,title:"Revision Session, Lessons 1–9",short:"The points to memorise",
 big:"A recap of the whole introduction, which the Ustadh says to treat as the points to memorise. Use it as a mock exam: answering aloud is enough.",
 remember:["‘Aqeedah: firm, decisive belief; seven names; six points of importance; four objectives.","Three sources: the Qur’an, the Sunnah, and the understanding of the Salaf (ijma‘).","Ahl as-Sunnah: six names; eight characteristics of their methodology.","The author: born 1115 AH, died 1206 AH; four emphases of his call.","The book: five parts; its three principles are the three questions of the grave."],
 more:[
  {t:"‘Aqeedah",l:["Linguistically: tying firmly. As a science: the foundations of iman and what is connected to them, from recognised evidence.","Topics: the six pillars plus the connected issues and the sources.","Seven names: ‘Aqeedah, Fiqh al-Akbar, as-Sunnah, Usool ad-Deen, Iman, Tawheed, Shari‘ah."]},
  {t:"Importance and objectives",l:["Six points, including that it is the purpose of creation, brings safety and guidance, and is a means for deeds to be accepted and sins forgiven, for intercession and for entering Paradise.","To “studying ‘Aqeedah divides the Ummah”: sound ‘Aqeedah is what unites.","Objectives: to know Allah, to correct our beliefs, to worship Him correctly, and to draw closer to Him."]},
  {t:"Evidence and sources",l:["Islam is built on dalil; its opposite is taqleed.","Proofs for the Sunnah include “obey Allah and obey the Messenger.”","Proofs for the Salaf: An-Nisa 4:115, At-Tawbah 9:100, Luqman 31:15.","The Companions did not differ in the foundations; at most on a few secondary points."]},
  {t:"Ahl as-Sunnah",l:["Those who follow the Qur’an and Sunnah with the Salaf’s understanding.","To “we are the majority”: numbers are not proof.","Methodology: clinging to the Qur’an and Sunnah, following the Salaf, gathering the evidence, agreeing on foundations, a balanced use of evidence, knowledge with conduct, warning against innovation.","Link to the madhhabs: none."]},
  {t:"Books, the author and the book",l:["Writing began when deviation appeared, to preserve sound belief.","The author: Muhammad ibn ‘Abd al-Wahhab, 1115–1206 AH. Emphases: Tawheed, the Sunnah, unity, moderation.","The book: Al-Usool ath-Thalathah wa Adillatuha; five parts; the three questions of the grave.","For now, focus only on your teacher’s explanation."]}],
 home:"Use the recap as a mock exam: cover the screen, answer each point aloud from memory, and revise any lesson where you get stuck before moving on to the book itself.",
 game:{type:"match",title:"Numbers to remember",help:"Tap what was counted on the left, then the number on the right.",pairs:[["Names of ‘Aqeedah","7"],["Reasons ‘Aqeedah matters","6"],["Objectives of studying it","4"],["Sources of ‘Aqeedah","3"],["Characteristics of the methodology","8"],["Parts of the book","5"]]},
 quiz:[
  {q:"How many names of ‘Aqeedah were covered?",o:["Five","Seven","Nine"],a:1,w:"Seven names."},
  {q:"What is the opposite of following dalil?",o:["Taqleed","Ijma‘","Zuhd"],a:0,w:"Blind following."},
  {q:"What is the answer to “studying ‘Aqeedah divides the Ummah”?",o:["It is true","Sound ‘Aqeedah is what unites","Avoid the topic"],a:1,w:"The claim contradicts the Qur’an and Sunnah."},
  {q:"What link does Ahl as-Sunnah have to the fiqh madhhabs?",o:["None","It is the Hanbali school","It is the Shafi‘i school"],a:0,w:"Its scholars appear in every school."},
  {q:"What are the three principles of the book?",o:["The three questions of the grave","Three types of patience","Three sources"],a:0,w:"Who is your Lord, what is your religion, who is your Prophet."}]}
];

// 20 mixed questions: [question, options, index of the right answer]
const FINAL = [
 ["‘Aqeedah comes from a root meaning…",["Tying firmly","Travelling","Reading"],0],
 ["How many pillars of iman are there?",["Five","Six","Seven"],1],
 ["Which is action-based?",["‘Aqeedah","Fiqh"],1],
 ["“Usul ad-Din” means…",["Foundations of the religion","The greater understanding","The saved sect"],0],
 ["How many reasons for the importance of ‘Aqeedah were given?",["Four","Six","Eight"],1],
 ["The purpose of creation is stated in…",["Adh-Dhariyat 51:56","An-Nisa 4:115","Fatir 35:28"],0],
 ["How many objectives of studying ‘Aqeedah are there?",["Three","Four","Five"],1],
 ["A sound heart is above all free of…",["Shirk","Poverty","Travel"],0],
 ["Which one is NOT a source of ‘Aqeedah?",["The Qur’an","Dreams","The authentic Sunnah"],1],
 ["The Salaf are three…",["Centuries","Generations","Cities"],1],
 ["“Al-Firqah an-Najiyah” means…",["The saved sect","The victorious group","People of the narrations"],0],
 ["Is majority a proof?",["Yes","No"],1],
 ["How many characteristics of the methodology of Ahl as-Sunnah were listed?",["Six","Eight","Twelve"],1],
 ["The intellect is used to…",["Overrule the texts","Understand and examine"],1],
 ["Who wrote al-‘Aqidah at-Tahawiyyah?",["at-Tahawi","Imam Ahmad","Ibn Taymiyyah"],0],
 ["Which book has 67 chapters on Tawheed?",["Kitab at-Tawheed","Usul as-Sunnah","Ash-Shari‘ah"],0],
 ["The author was born in…",["1115 AH","1206 AH","204 AH"],0],
 ["Which is an emphasis of the author’s call?",["Moderation","Wealth","Isolation"],0],
 ["How many parts does Thalathah al-Usool have?",["Three","Five","Ten"],1],
 ["The three principles are…",["The three questions of the grave","Three surahs","Three journeys"],0]
].map(([q,o,a]) => ({q, o, a, w:"The answer is: "+o[a]+".", keep:true}));

export default {
  name: "Aqeedah Studies",
  lines: ["Knowledge takes its honour from what it is about.","Answer the revision questions from memory before you move on.","Knowledge is not narrating much; it is fear of Allah.","Revise a little every day: it should take only a few minutes.","Tawheed should change your heart and conduct, not just add information."],
  lessons: LESSONS,
  final: FINAL,
};
