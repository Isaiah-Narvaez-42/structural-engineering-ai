/* A01: conditional author assumptions, not a fitted statistical forecast. */
(function(root){
'use strict';
function weights(tasks,custom){
 const raw=tasks.map(t=>Math.max(0,Number(custom?.[t.id]??t.weight)||0));
 const sum=raw.reduce((a,b)=>a+b,0);
 return sum?raw.map(w=>w/sum):tasks.map(t=>t.weight/100);
}
function estimate(data,scenarioId,index,custom={}){
 const sc=data.scenarios.find(s=>s.id===scenarioId);
 if(!sc)throw new Error('Unknown scenario');
 if(index<0||index>=data.horizons.length)throw new Error('Invalid horizon');
 const w=weights(data.tasks,custom);
 const byTask=data.tasks.map((t,i)=>({id:t.id,weight:w[i],removable:index===0?0:Math.min(.98,t.potential[index-1]/100*sc.capability[index])*sc.adoption[index]}));
 const gross=byTask.reduce((v,t)=>v+t.weight*t.removable,0);
 const overhead=sc.overhead[index];
 return {gross,overhead,net:gross-overhead,remaining:1-gross+overhead,byTask};
}
function laborIndex(savings,years,growth,newWork){return 100*Math.pow(1+growth,years)*(1-savings+newWork);}
function breakEven(savings,years,newWork){return years>0?Math.pow(1/(1-savings+newWork),1/years)-1:0;}
const api={weights,estimate,laborIndex,breakEven};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Forecast=api;
})(typeof window!=='undefined'?window:globalThis);
