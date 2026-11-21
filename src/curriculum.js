import {beginnerData,units as beginnerUnits} from './beginner-data.js';
import {higherData,higherUnits} from './higher-data.js';
export const units=[...beginnerUnits.map(u=>({...u,level:'beginner'})),...higherUnits];
export const buildBeginner=legacy=>buildStage(legacy,'beginner',beginnerData);
export const buildHigher=legacy=>['intermediate','advanced'].flatMap(level=>buildStage(legacy,level,higherData));
function choice(id,lessonId,prompt,options,answer,explanation,skill='reading'){
  // Rotate options so the answer position varies deterministically.
  const shift=[...id].reduce((n,c)=>n+c.charCodeAt(0),0)%options.length;
  return {id,lessonId,type:'choice',skill,prompt,options:[...options.slice(shift),...options.slice(0,shift)],correct:(answer-shift+options.length)%options.length,explanation};
}
function buildStage(legacy,level,data){
  const result=[];const learned=[];
  for(const unit of units.filter(u=>u.level===level)){
    const teaching=[];
    for(const [position,d] of data.filter(l=>l.unitId===unit.id).entries()){
      const old=legacy.find(l=>l.id===d.id);
      const words=[...(old?.words||[]),...d.words.split(';').map((s,j)=>{const [latin,arabic,english]=s.split('|');return {id:old?`${d.id}-extra-${j}`:`${d.id}-word-${j}`,latin,arabic,english}})];
      const l={...old,id:d.id,level,unitId:unit.id,position,kind:'teaching',title:d.title,goal:d.task.split('. ')[0]+'.',grammar:d.grammar,words,examples:d.examples,mistake:d.mistake,reading:d.reading,readingTitle:d.readingTitle,readingFocus:d.readingFocus,conversation:d.conversation,conversationId:d.conversationId,conversationTitle:d.conversationTitle,selfCheck:d.selfCheck,phrases:[d.examples[0],d.examples[2]],task:d.task,minutes:level==='advanced'?40:level==='intermediate'?30:25,dialogue:old?.dialogue||d.reading.map(x=>x.latin).join(' / '),arabic:old?.arabic||d.reading.map(x=>x.arabic).join(' / '),translation:old?.translation||d.reading.map(x=>x.english).join(' / '),prompt:words[0].english,answer:words[0].latin,reviewIds:learned.slice(-4).map(w=>w.id)};
      l.exercises=[
        choice(`${l.id}-recognize`,l.id,`Which meaning fits “${words[0].latin}”?`,[words[0].english,words[1].english,words[2].english],0,`${words[0].latin} means ${words[0].english}.`,'vocabulary'),
        ...[1,3,words.length-1].map(j=>({id:`${l.id}-recall-${j}`,lessonId:l.id,wordId:words[j].id,type:'text',skill:'recall',prompt:`Write in Darija: ${words[j].english}`,answer:words[j].latin,arabic:words[j].arabic,explanation:`Our house spelling is ${words[j].latin}. Spacing and supported spelling variants are accepted.`})),
        choice(`${l.id}-grammar-check`,l.id,`Choose the expression meaning: “${d.examples[1].english}”`,d.examples.map(e=>e.latin),1,`${d.examples[1].latin} — ${d.examples[1].english} ${d.mistake}`,'grammar'),
        ...d.questions.map((q,j)=>choice(`${l.id}-reading-${j}`,l.id,q.prompt,q.options,q.answer,q.explanation)),
        {id:`${l.id}-build`,lessonId:l.id,type:'build',skill:'sentence',prompt:`Build in Darija: ${d.build.english}`,answer:d.build.latin,arabic:d.build.arabic,tiles:d.build.latin.replace(/[.!?]/g,'').split(' ').reverse(),explanation:`${d.build.latin} — ${d.build.english}`}
      ];
      const grammarQuestion=l.exercises.find(q=>q.skill==='grammar');
      grammarQuestion.optionArabic=grammarQuestion.options.map(option=>d.examples.find(e=>e.latin===option)?.arabic||'');
      l.readingQuestions=l.exercises.filter(q=>q.skill==='reading');
      teaching.push(l);result.push(l);learned.push(...words);
    }
    const prior=result.filter(l=>l.kind==='teaching'&&l.unitId!==unit.id).slice(-2);
    const reviewId=`${unit.id}-review`;
    const sources=[...teaching.flatMap(l=>[l.exercises[1],l.exercises[4],l.exercises[6],l.exercises[7]]),...prior.flatMap(l=>[l.exercises[0],l.exercises[3]])];
    result.push({id:reviewId,unitId:unit.id,kind:'review',level,title:`Checkpoint: ${unit.title.toLowerCase()}`,goal:unit.goal,minutes:20,words:[],grammar:'Retrieve the unit vocabulary and apply its patterns without looking at the lessons. A score of 80% completes this checkpoint. Review explanations, then retry if needed.',dialogue:'',arabic:'',translation:'',task:`Show you can: ${unit.goal}`,exercises:sources.map((q,j)=>({...q,id:`${reviewId}-q-${j}`,sourceId:q.id})),lessonIds:teaching.map(l=>l.id)});
  }
  return result;
}
