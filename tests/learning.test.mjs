import test from 'node:test';import assert from 'node:assert/strict';import {checkAnswer,chooseReview,reviewRecord,checkpointResult,vocabularyPool,questionPool} from '../src/learning.js';import {lessons} from '../src/content.js';
const state={completed:[],bookmarks:[],reviews:{}};
test('Spelling accepts explicit variants and spacing without erasing meaningful consonants',()=>{for(const value of ['Shukran!','chokran','chokrane'])assert.ok(checkAnswer(value,{type:'text',answer:'shukran'}));assert.ok(checkAnswer('ma kanshrb sh qhwa',{type:'text',answer:'Makanshrbsh qhwa.'}));assert.ok(checkAnswer('Kan9ra',{type:'text',answer:'kanqra'}));assert.equal(checkAnswer('3ut',{type:'text',answer:'7ut'}),false);assert.equal(checkAnswer('Bla l7lib',{type:'text',answer:'B l7lib'}),false);assert.equal(checkAnswer('Shukran bzzaf',{type:'text',answer:'shukran'}),false)});
test('Completed lessons seed vocabulary and grammar; review lessons add no accidental content',()=>{assert.equal(vocabularyPool(lessons,state).length,0);assert.equal(questionPool(lessons,state).length,0);const learned={...state,completed:['lesson-1','b1-review']};assert.equal(vocabularyPool(lessons,learned).length,12);assert.equal(questionPool(lessons,learned).length,8);const saved={...state,bookmarks:['word-1-0']};assert.equal(vocabularyPool(lessons,saved,'saved')[0].latin,'salam');assert.ok(!vocabularyPool(lessons,learned).some(w=>w.lessonId==='b8-tomorrow'))});
test('Missed then due then unseen items precede early review, without mutating the pool',()=>{const items=['early','new','due','missed'].map(id=>({id}));const reviews={early:{due:200,correct:true},due:{due:50,correct:true},missed:{due:300,correct:false}};assert.deepEqual(chooseReview(items,reviews,4,100,()=>0).map(x=>x.id),['missed','due','new','early']);assert.equal(items[0].id,'early');let r=reviewRecord({},true,100);assert.equal(r.interval,1);r=reviewRecord(r,true,200);assert.equal(r.interval,2);r=reviewRecord(r,false,300);assert.equal(r.interval,0);assert.equal(r.due,600300);assert.equal(r.misses,1)});
test('Checkpoint requires every answer and an actual 80 percent, not rounded percentage',()=>{const qs=Array.from({length:16},(_,i)=>({id:'q'+i}));const a=Object.fromEntries(qs.map((q,i)=>[q.id,{correct:i<13}]));assert.equal(checkpointResult(qs,a).passed,true);a.q12.correct=false;assert.equal(checkpointResult(qs,a).passed,false);a.q12.correct=true;delete a.q15;assert.equal(checkpointResult(qs,a).passed,false)});

test('Intermediate and advanced completion and exploration feed every structured practice mode',()=>{
 for(const level of ['intermediate','advanced']){
  const lesson=lessons.find(l=>l.level===level&&l.kind==='teaching');
  const learned={...state,completed:[lesson.id]};
  assert.equal(vocabularyPool(lessons,learned).length,12);
  assert.equal(questionPool(lessons,learned).length,8);
  assert.ok(questionPool(lessons,learned).some(q=>q.type==='build'));
  assert.ok(questionPool(lessons,state,level).every(q=>lessons.find(l=>l.id===q.lessonId).level===level));
  assert.equal(questionPool(lessons,{...state,bookmarks:[lesson.id]},'saved').length,8);
 }
});
