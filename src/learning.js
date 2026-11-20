// Shared answer checking, review scheduling, and checkpoint scoring.
const aliases = {
  shukran:['chokran','chokrane','shokran'], juj:['jouj','jooj'],
  mafhemtsh:['mafhemtch','mafhmtch'], ghdda:['ghda','ghedda'],
  bsh7al:['bch7al','bchhal'], bshwiya:['bchwiya','bchwia'],
  shwiya:['chwiya','chwia'], bikhir:['bikheir'],
  smiti:['smiti','smeeti'], khobz:['khoubz'], qhwa:['9hwa','9ahwa','qahwa'],
  wa7d:['wa7ed','wahed'], tlata:['tlatha'], rb3a:['reb3a'],
  kanqra:['kan9ra'], kanqraw:['kan9raw'], kayqra:['kay9ra'], katqra:['kat9ra'],
  katqray:['kat9ray'], katqraw:['kat9raw'], kayqraw:['kay9raw'],
  qrit:['9rit'], nqra:['n9ra'], qrib:['9rib'], qdim:['9dim'], qdima:['9dima'],
  qalam:['9alam'], suq:['souq','sou9','so9'],
  makanshrbsh:['makanchrbch'], makankhdemsh:['makankhdemch'],
  makanqrash:['makan9rach'], ma3ndish:['ma3ndich'],
  bghit:['bghite'], atay:['atay','atay'],
  kanhder:['kanhder','kanh dar'.replace(' ','')],
};
export function normalize(text){return String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[\s.,!?؟،؛:;\-–—'"]/g,'').trim()}
// Only explicit, word-specific aliases are accepted; do not erase meaningful sounds globally.
export function acceptedAnswers(answer, extra=[]){
  const tokens=String(answer).trim().split(/\s+/);let candidates=[''];
  for(const token of tokens){const bare=token.replace(/[.,!?؟،]/g,'');const forms=[bare,...(aliases[bare.toLowerCase()]||[])];candidates=candidates.flatMap(prefix=>forms.map(w=>prefix+' '+w)).slice(0,256)}
  return new Set([answer,...extra,...candidates].map(normalize));
}
export function checkAnswer(value,question){if(question.type==='choice')return Number(value)===question.correct;return acceptedAnswers(question.answer,question.accepted||[]).has(normalize(value))}
export function reviewRecord(previous={},ok,now=Date.now()){
  const interval=ok?Math.min(30,Math.max(1,(previous.interval||0)*2)):0;
  return {interval,due:now+(ok?interval*86400000:600000),last:now,misses:(previous.misses||0)+(ok?0:1),correct:ok};
}
export function chooseReview(items,reviews,limit=5,now=Date.now(),random=Math.random){
  return items.map(item=>{const r=reviews[item.id];return {item,rank:r?.correct===false?0:r&&r.due<=now?1:!r?2:3,due:r?.due||0,tie:random()}})
    .sort((a,b)=>a.rank-b.rank||a.due-b.due||a.tie-b.tie).slice(0,limit).map(x=>x.item);
}
export function checkpointResult(questions,attempts){const answered=questions.filter(q=>attempts[q.id]);const correct=answered.filter(q=>attempts[q.id].correct).length;return {answered:answered.length,total:questions.length,correct,percent:Math.round(correct/questions.length*100),passed:answered.length===questions.length&&correct/questions.length>=0.8}}
export function vocabularyPool(lessons,state,scope='learned'){
  const selected=lessons.filter(l=>l.kind!=='review'&&(scope==='learned'?state.completed.includes(l.id):scope==='saved'?true:l.level===scope));
  const seen=new Set();return selected.flatMap(l=>l.words.map(w=>({...w,lessonId:l.id}))).filter(w=>{
    if(scope==='saved'&&!state.bookmarks.includes(w.id))return false;const key=normalize(w.latin);if(seen.has(key))return false;seen.add(key);return true;
  });
}
export function questionPool(lessons,state,scope='learned'){
  return lessons.filter(l=>l.kind!=='review'&&(scope==='learned'?state.completed.includes(l.id):scope==='saved'?state.bookmarks.includes(l.id):l.level===scope)).flatMap(l=>l.exercises||[]);
}
