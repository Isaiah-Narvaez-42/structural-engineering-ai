const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const D=JSON.parse(fs.readFileSync(path.join(root,'data/research.json'),'utf8'));
const F=require('../model.js');
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
test('data mirror matches canonical JSON exactly',()=>{const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data/research.js'),'utf8'),ctx);assert.equal(JSON.stringify(ctx.window.RESEARCH),JSON.stringify(D));});
test('full task taxonomy, dates, citations and horizon inputs are valid',()=>{
 assert.equal(D.tasks.length,14);assert.equal(D.tasks.flatMap(t=>t.items).length,59);assert.equal(D.sources.length,24);assert.equal(D.tasks.reduce((n,t)=>n+t.weight,0),100);
 const ids=new Set(D.sources.map(s=>s.id));assert.equal(ids.size,D.sources.length);
 for(const s of D.sources){assert.ok(s.url.startsWith('https://'));assert.equal(s.accessed,D.asOf);for(const k of ['finding','scope','limitation','locator'])assert.ok(s[k]);}
 for(const t of D.tasks){assert.equal(t.potential.length,4);assert.ok(t.refs.length);for(const id of t.refs)assert.ok(ids.has(id));for(const p of t.potential)assert.ok(p>=0&&p<=100);}
 for(const group of [...D.scenarios,...D.timeline])for(const id of group.refs)assert.ok(ids.has(id));
});
test('zero means no additional saving vs 2026, and initial labor index is 100',()=>{for(const s of D.scenarios){near(F.estimate(D,s.id,0).net,0);near(F.laborIndex(0,0,.02,0),100);}});
test('scenario math matches independent sum, deducting overhead only once',()=>{
 for(const s of D.scenarios)for(let i=1;i<D.horizons.length;i++){
  const expected=D.tasks.reduce((n,t)=>n+t.weight/100*Math.min(.98,t.potential[i-1]/100*s.capability[i])*s.adoption[i],0)-s.overhead[i];
  const r=F.estimate(D,s.id,i);near(r.net,expected);near(r.remaining,1-r.net);assert.ok(r.net>=0&&r.net<1);
 }
 near(F.estimate(D,'central',1).net,.2578);
});
test('custom mixes normalize, single task isolates exposure, all-zero fallback works',()=>{
 const custom=Object.fromEntries(D.tasks.map(t=>[t.id,0]));custom.T11=12;
 const r=F.estimate(D,'central',1,custom);near(r.gross,.10*.95*.80);near(r.net,.026);
 const zeros=Object.fromEntries(D.tasks.map(t=>[t.id,0]));near(F.estimate(D,'central',3,zeros).net,F.estimate(D,'central',3).net);
 near(F.weights(D.tasks,{T01:20}).reduce((a,b)=>a+b,0),1);
});
test('demand and break-even identities behave correctly',()=>{near(F.laborIndex(.4,10,0,0),60);near(F.laborIndex(.4,10,0,.1),70);let g=F.breakEven(.4,10,.1);near(F.laborIndex(.4,10,g,.1),100);assert.ok(F.laborIndex(.4,10,.03,.1)>70);});
test('scenario ordering and horizons match declared assumptions',()=>{for(let i=1;i<5;i++){assert.ok(F.estimate(D,'slow',i).net<F.estimate(D,'central',i).net);assert.ok(F.estimate(D,'central',i).net<F.estimate(D,'fast',i).net);}for(const sc of D.scenarios.filter(s=>s.id!=='setback'))for(let i=2;i<5;i++)assert.ok(F.estimate(D,sc.id,i).net>=F.estimate(D,sc.id,i-1).net);});
test('setback path permits adoption reversal and a loss of savings',()=>{
 assert.equal(D.scenarios.length,4);
 assert.ok(F.estimate(D,'setback',2).net<F.estimate(D,'setback',1).net);
 assert.ok(F.estimate(D,'setback',4).net>F.estimate(D,'setback',2).net);
 const onlyResponsibility=Object.fromEntries(D.tasks.map(t=>[t.id,t.id==='T14'?1:0]));
 assert.ok(F.estimate(D,'setback',2,onlyResponsibility).net<0);
});
test('sensitivity envelopes contain selected results, preserve baseline and honor caps',()=>{
 for(const sc of D.scenarios)for(let i=0;i<5;i++)for(const p of D.profiles){
  const hours=F.profileHours(D,p.id),opts={potentialScale:1.1,adoptionScale:1.15,overheadDelta:.02};
  const r=F.estimate(D,sc.id,i,hours,opts),e=F.envelope(D,sc.id,i,hours,opts);
  assert.ok(e.low<=r.net+1e-10);assert.ok(e.high>=r.net-1e-10);
  assert.ok(r.byTask.every(t=>t.removable<=.98));
  if(i===0){near(e.low,0);near(e.high,0);near(r.net,0);}
 }
 const opts={potentialScale:1.5,adoptionScale:1.2,overheadDelta:.15};
 const r=F.estimate(D,'fast',4,{},opts),e=F.envelope(D,'fast',4,{},opts);
 near(e.low,F.estimate(D,'fast',4,{},{...opts,potentialScale:1.2,overheadDelta:.18}).net);
 near(e.high,F.estimate(D,'fast',4,{},{...opts,potentialScale:1.8,overheadDelta:.12}).net);
});
test('every role preset conserves hours and remains valid at the weekly limit',()=>{
 for(const profile of D.profiles)for(const total of [1,37.5,40,168]){
  const hours=F.profileHours(D,profile.id,total);near(Object.values(hours).reduce((a,b)=>a+b,0),total);
  assert.ok(Object.values(hours).every(n=>n>=0));
  F.validateSnapshot(D,{...F.baseline(D),profile:profile.id,hours});
 }
 const b=F.baseline(D),rescaled=F.allocateHours(D.tasks,D.tasks.map(t=>b.hours[t.id]),168);
 near(Object.values(rescaled).reduce((a,b)=>a+b,0),168);
});
test('JSON and shared URL round trips preserve only safe supported scenario inputs',()=>{
 const original={...F.baseline(D),profile:'bim',scenario:'setback',hours:F.profileHours(D,'bim',37.5),growth:-.5,potentialScale:.75,overheadDelta:.1};
 const u=new URL('https://example.com/#scenarios');u.searchParams.set('plan',JSON.stringify(original));
 assert.deepEqual(F.validateSnapshot(D,JSON.parse(u.searchParams.get('plan'))),original);
 const b=F.baseline(D);
 for(const bad of [{...b,version:1},{...b,horizon:1.5},{...b,scenario:'unknown'},{...b,profile:'<script>'},{...b,growth:'2'},{...b,growth:Infinity},{...b,potentialScale:8},{...b,hours:{}},{...b,hours:{...b.hours,T01:-1}},{...b,hours:{...b.hours,T01:168}},{...b,hours:Object.fromEntries(D.tasks.map(t=>[t.id,0]))}])assert.throws(()=>F.validateSnapshot(D,bad));
 const safe=F.validateSnapshot(D,{...b,malicious:'<script>alert(1)</script>'});assert.equal(safe.malicious,undefined);
});
