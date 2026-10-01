const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..');
function app(){const nodes=new Map();const node=()=>({innerHTML:'',textContent:'',value:'',open:false,hidden:false,classList:{toggle(){},contains(){return false},add(){},remove(){}},addEventListener(){},setAttribute(){},removeAttribute(){},focus(){},showModal(){this.open=true;},close(){this.open=false;},scrollIntoView(){}});const ctx={URL,Blob,setTimeout,clearTimeout,scrollY:0,scrollTo(){},navigator:{},window:{addEventListener(){},print(){ctx.printed=true;}},document:{querySelector(s){if(!nodes.has(s))nodes.set(s,node());return nodes.get(s);},querySelectorAll(){return[];},getElementById(){return node();},addEventListener(){},title:'',body:node()},location:{href:'https://example.com/',hash:''},history:{replaceState(){}},localStorage:{getItem(){return null;},setItem(){}}};vm.createContext(ctx);for(const file of ['data/research.js','model.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);return {ctx,nodes,run:s=>vm.runInContext(s,ctx)};}
test('all views render; every data figure and table has an evidence/assumption caption',()=>{
 const a=app(),ids=new Set(JSON.parse(fs.readFileSync(path.join(root,'data/research.json'),'utf8')).sources.map(s=>s.id));
 for(const view of ['overview','tasks','scenarios','timeline','evidence','career','methods','references']){
  const html=a.run(`views['${view}']()`);assert.ok(html.includes('<h1>'),view);assert.ok(!html.includes('undefined'),view);assert.ok(!html.includes('NaN'),view);
  for(const figure of html.matchAll(/<figure>([\s\S]*?)<\/figure>/g))assert.match(figure[1],/<figcaption>[\s\S]*class="citations"/,view);
  for(const table of html.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/g))assert.match(table[1],/<caption>[\s\S]*class="citations"/,view);
  for(const cite of html.matchAll(/data-source="(S\d+)"/g))assert.ok(ids.has(cite[1]),cite[1]);
 }
});
test('task details expose calculation and matching source boundaries at every horizon',()=>{
 const a=app();for(const id of ['T03','T06','T11','T14'])for(let h=0;h<5;h++){a.run(`inspectTask('${id}',${h})`);const html=a.nodes.get('#dialog-content').innerHTML;assert.match(html,/What it does not establish/);assert.ok(!html.includes('undefined'));if(h>0)assert.match(html,/gross reduction/);else assert.match(html,/2026 baseline/);}
});
test('filtering finds Revit and no-result searches produce usable empty states',()=>{
 const a=app();a.run("ui.taskQuery='Revit';ui.taskTag='BIM'");const html=a.run('tasks()');assert.match(html,/BIM authoring &amp; model management/);assert.match(html,/1 \/ 14 clusters/);a.run("ui.taskQuery='not-a-task-92837'");assert.match(a.run('tasks()'),/No matching tasks/);
 a.run("ui.sourceQuery='METR'");assert.match(a.run('references()'),/1 entries/);
});
test('printable scenario report contains complete inputs and the complete source register',()=>{
 const a=app();a.run('printReport()');assert.equal(a.ctx.printed,true);const html=a.nodes.get('#print-report').innerHTML;assert.match(html,/A01 v2/);assert.match(html,/Source register/);assert.equal([...html.matchAll(/id="print-S\d+"/g)].length,24);assert.ok(!html.includes('NaN'));assert.match(html,/Gross modeled reduction/);
});
