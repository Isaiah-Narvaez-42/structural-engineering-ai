/* A01 v2: transparent conditional assumptions; not a fitted statistical forecast. */
(function(root){
'use strict';
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
function weights(tasks,custom){
 const raw=tasks.map(t=>Math.max(0,Number(custom?.[t.id]??t.weight)||0));
 const sum=raw.reduce((a,b)=>a+b,0);
 return sum?raw.map(w=>w/sum):tasks.map(t=>t.weight/100);
}
function estimate(data,scenarioId,index,custom={},options={}){
 const sc=data.scenarios.find(s=>s.id===scenarioId);
 if(!sc)throw new Error('Unknown scenario');
 if(!Number.isInteger(index)||index<0||index>=data.horizons.length)throw new Error('Invalid horizon');
 const w=weights(data.tasks,custom),scale=options.potentialScale??1,realization=options.adoptionScale??1;
 const byTask=data.tasks.map((t,i)=>({id:t.id,weight:w[i],removable:index===0?0:clamp(t.potential[index-1]/100*sc.capability[index]*scale,0,.98)*clamp(sc.adoption[index]*realization,0,1)}));
 const gross=byTask.reduce((v,t)=>v+t.weight*t.removable,0);
 const overhead=index===0?0:clamp(sc.overhead[index]+(options.overheadDelta??0),0,.5);
 return {gross,overhead,net:gross-overhead,remaining:1-gross+overhead,byTask};
}
function envelope(data,scenarioId,index,custom={},options={}){
 const scale=options.potentialScale??1,delta=options.overheadDelta??0;
 const low=estimate(data,scenarioId,index,custom,{...options,potentialScale:scale*.8,overheadDelta:delta+.03});
 const high=estimate(data,scenarioId,index,custom,{...options,potentialScale:scale*1.2,overheadDelta:delta-.03});
 return {low:low.net,high:high.net};
}
function laborIndex(savings,years,growth,newWork){return 100*Math.pow(1+growth,years)*(1-savings+newWork);}
function breakEven(savings,years,newWork){return years>0?Math.pow(1/(1-savings+newWork),1/years)-1:0;}
function baseline(data){return {version:2,scenario:'central',horizon:2,profile:'balanced',hours:Object.fromEntries(data.tasks.map(t=>[t.id,t.weight*.4])),growth:2,newWork:10,potentialScale:1,adoptionScale:1,overheadDelta:0};}
function allocateHours(tasks,values,total){const cents=Math.round(total*100),sum=values.reduce((a,b)=>a+b,0);const exact=values.map(w=>cents*w/sum),counts=exact.map(Math.floor);let left=cents-counts.reduce((a,b)=>a+b,0);const order=exact.map((v,i)=>({i,r:v-counts[i]})).sort((a,b)=>b.r-a.r);for(let j=0;j<left;j++)counts[order[j].i]++;return Object.fromEntries(tasks.map((t,i)=>[t.id,counts[i]/100]));}
function profileHours(data,id,total=40){const p=data.profiles.find(p=>p.id===id);if(!p)throw Error('Unknown profile');return allocateHours(data.tasks,p.weights,total);}
function validateSnapshot(data,value){
 if(!value||typeof value!=='object'||Array.isArray(value)||value.version!==2)throw Error('Choose a Structural Futures v2 scenario JSON file.');
 const validNumber=(key,min,max)=>{const n=value[key];if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max)throw Error('Invalid '+key+'.');return n;};
 if(!data.scenarios.some(s=>s.id===value.scenario))throw Error('Unknown scenario.');
 const horizon=validNumber('horizon',0,4);if(!Number.isInteger(horizon))throw Error('Invalid horizon.');
 if(!data.profiles.some(p=>p.id===value.profile)&&value.profile!=='custom')throw Error('Unknown workload profile.');
 if(!value.hours||typeof value.hours!=='object'||Array.isArray(value.hours)||Object.keys(value.hours).length!==data.tasks.length)throw Error('The file must include all 14 task clusters.');
 const hours=Object.fromEntries(data.tasks.map(t=>{const h=value.hours[t.id];if(typeof h!=='number'||!Number.isFinite(h)||h<0||h>168)throw Error('Invalid task hours.');return[t.id,h];}));
 const total=Object.values(hours).reduce((a,b)=>a+b,0);if(total<=0||total>168+1e-9)throw Error('Total weekly hours must be greater than 0 and at most 168.');
 return {version:2,scenario:value.scenario,horizon,profile:value.profile,hours,growth:validNumber('growth',-2,5),newWork:validNumber('newWork',0,30),potentialScale:validNumber('potentialScale',.5,1.5),adoptionScale:validNumber('adoptionScale',.5,1.2),overheadDelta:validNumber('overheadDelta',-.05,.15)};
}
const api={weights,estimate,envelope,laborIndex,breakEven,baseline,allocateHours,profileHours,validateSnapshot};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Forecast=api;
})(typeof window!=='undefined'?window:globalThis);
