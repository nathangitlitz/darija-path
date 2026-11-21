import test from 'node:test';import assert from 'node:assert/strict';
import {lessons,legacyLessons,alphabet,conversations} from '../src/content.js';import {units} from '../src/curriculum.js';import {checkAnswer} from '../src/learning.js';
test('Each stage has eight units with four substantial lessons and a checkpoint',()=>{assert.equal(lessons.length,120);assert.equal(units.length,24);for(const level of ['beginner','intermediate','advanced']){assert.equal(units.filter(u=>u.level===level).length,8);assert.equal(lessons.filter(l=>l.level===level).length,40);}for(const unit of units){const ls=lessons.filter(l=>l.unitId===unit.id);assert.equal(ls.length,5);const teaching=ls.filter(l=>l.kind==='teaching');assert.equal(teaching.length,4);for(const l of teaching){assert.ok(l.words.length>=10&&l.words.length<=15,l.id);assert.ok(l.grammar.length>250,l.id);assert.equal(l.examples.length,3);assert.equal(l.reading.length,l.level==='beginner'?4:8);assert.equal(l.level,unit.level);assert.ok(l.mistake);assert.equal(l.exercises.length,8);assert.equal(l.exercises.filter(q=>q.skill==='reading').length,2);for(const r of [...l.words,...l.reading,...l.examples])assert.ok(r.latin&&r.arabic&&r.english)}}});
test('Original lesson and word identities remain reachable without repurposing saved content',()=>{for(const old of legacyLessons){const l=lessons.find(l=>l.id===old.id);assert.ok(l);for(const word of old.words)assert.deepEqual(l.words.find(w=>w.id===word.id),word);assert.equal(l.dialogue,old.dialogue)}});
test('All questions have valid, distinct answers and refer to a source lesson',()=>{const ids=new Set();for(const l of lessons){for(const q of l.exercises||[]){assert.ok(!ids.has(q.id),q.id);ids.add(q.id);assert.ok(lessons.find(x=>x.id===q.lessonId));if(q.type==='choice'){assert.ok(q.options[q.correct]);assert.equal(new Set(q.options).size,q.options.length,q.id);assert.ok(checkAnswer(q.correct,q))}else{assert.ok(checkAnswer(q.answer,q));if(q.type==='build')assert.ok(checkAnswer([...q.tiles].reverse().join(' '),q))}}}});
test('Checkpoint tests all four unit lessons and cumulative questions only reference earlier lessons',()=>{for(const l of lessons.filter(l=>l.kind==='review')){assert.ok(l.exercises.length>=16);for(const id of l.lessonIds)assert.equal(l.exercises.filter(q=>q.lessonId===id).length,4);for(const q of l.exercises){const source=lessons.find(x=>x.id===q.lessonId);assert.ok(lessons.indexOf(source)<lessons.indexOf(l));assert.ok(source.exercises.some(x=>x.id===q.sourceId))}}});
test('Vocabulary and retrieval references resolve; alphabet remains independent',()=>{const ids=lessons.flatMap(l=>l.words.map(w=>w.id));assert.equal(new Set(ids).size,ids.length);for(const l of lessons)for(const id of l.reviewIds||[])assert.ok(ids.includes(id));assert.equal(alphabet.length,28);assert.equal(new Set(alphabet.map(a=>a.letter)).size,28);assert.equal(conversations.length,3)});

test('Higher-stage texts, rehearsals and focus questions remain aligned',()=>{
  for(const unit of units.filter(u=>u.level!=='beginner')){
    const teaching=lessons.filter(l=>l.unitId===unit.id&&l.kind==='teaching');
    assert.ok(unit.reading.map(r=>r.latin).join(' ').split(/\s+/).length>=(unit.level==='advanced'?80:60),unit.id);
    assert.equal(new Set(teaching.map(l=>l.grammar)).size,4);
    assert.equal(new Set(teaching.map(l=>l.readingFocus)).size,4);
    for(const l of teaching){
      assert.equal(l.conversation.length,4);assert.equal(l.conversationId,unit.id);
      assert.equal(new Set(l.conversation.slice(0,3).map(r=>r.latin)).size,3);
      assert.deepEqual(l.reading,unit.reading);assert.equal(l.selfCheck.length,3);
      const q=l.exercises.find(q=>q.id===l.id+'-reading-1');
      assert.equal(q.options[q.correct],l.reading[l.readingFocus].english);
      for(const row of [...l.words,...l.examples,...l.reading,...l.conversation]){
        assert.ok(!/[^\x00-\x7f]/.test(row.latin),l.id+' mixed script: '+row.latin);
        assert.ok(/[\u0600-\u06ff]/.test(row.arabic),l.id+' missing Arabic');
      }
    }
  }
});
