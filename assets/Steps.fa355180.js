import{a as c,o as _,c as a,b as s,t as i,n as o,y as n,F as p,p as r,e as l,_ as d}from"./index.75e46ba4.js";const m=t=>(r("data-v-1b0a8f5d"),t=t(),l(),t),u={class:"step__title"},b={class:"step__number title-primary"},v={class:"step__number__text"},h=m(()=>s("div",{class:"step__img"},null,-1)),S={class:"step__title"},f={class:"step__number title-primary"},y={class:"step__number__text"},g={key:0,class:"step__img"},k={key:1,class:"step__img__mobile"},x={key:0,class:"hr"},O=c({__name:"Steps",props:["title","number","isActive","numberOfSteps"],setup(t){const e=t;return(I,N)=>(_(),a(p,null,[s("div",{class:o(["step desktop",{active:e.isActive}])},[s("span",u,i(e.title),1),s("div",b,[s("span",v,i(e.number),1)]),h],2),s("div",{class:o(["step__mobile mobile",{active:e.isActive}])},[s("span",S,i(e.title),1),s("div",f,[s("span",y,i(e.number),1)]),e.number!==JSON.stringify(t.numberOfSteps)?(_(),a("div",g)):n("",!0),e.number!=="1"?(_(),a("div",k)):n("",!0)],2),e.number!==JSON.stringify(t.numberOfSteps)?(_(),a("hr",x)):n("",!0)],64))}});const B=d(O,[["__scopeId","data-v-1b0a8f5d"]]);export{B as S};
