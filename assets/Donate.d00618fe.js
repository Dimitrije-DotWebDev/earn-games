import{a,g as r,o as c,c as n,b as e,n as y,p as d,e as l,_ as u,a1 as $,l as i,V as w,m as v}from"./index.38e7ac00.js";import{_ as x}from"./human.59bb989a.js";const I="/assets/donateMobile.47f1b639.png",k="/assets/donateDesktopBG.0e61e928.png",C="/assets/donateDesktopBoy.8a4e89ed.png",h=o=>(d("data-v-ea8240d2"),o=o(),l(),o),B=h(()=>e("img",{class:"your-name__img",src:x,alt:""},null,-1)),Y=h(()=>e("input",{id:"your-name",class:"your-name__input",placeholder:"Your name"},null,-1)),S=h(()=>e("span",{class:"your-name__type"},"Send anonymously",-1)),D=a({__name:"YourName",setup(o){const t=r(!1),s=()=>{t.value=!t.value},m=()=>{var p;(p=document.getElementById("your-name"))==null||p.focus()};return(p,g)=>(c(),n("div",{class:"your-name",onClick:m},[B,Y,S,e("button",{class:y(["your-name__checbox",t.value?"your-name__checbox--active":""]),onClick:g[0]||(g[0]=ee=>s())},[e("div",{class:y(["your-name__cycle",t.value?"your-name__cycle-active":""])},null,2)],2)]))}});const N=u(D,[["__scopeId","data-v-ea8240d2"]]),E="/assets/dollar.4bc5db2f.svg",f=o=>(d("data-v-de45e6c4"),o=o(),l(),o),H=f(()=>e("img",{class:"how-much__img",src:E,alt:""},null,-1)),M=f(()=>e("input",{id:"how-much",type:"number",class:"how-much__input",placeholder:"How much to deposit"},null,-1)),V=[H,M],T=a({__name:"HowMuch",setup(o){r(!1);const t=()=>{var s;(s=document.getElementById("how-much"))==null||s.focus()};return(s,m)=>(c(),n("div",{class:"how-much",onClick:t},V))}});const z=u(T,[["__scopeId","data-v-de45e6c4"]]),b=o=>(d("data-v-3671d58b"),o=o(),l(),o),A=b(()=>e("img",{class:"your-comment__img",src:$,alt:""},null,-1)),G=b(()=>e("textarea",{id:"your-comment",class:"your-comment__input",placeholder:"Your comment"},null,-1)),j=[A,G],q=a({__name:"YourComment",setup(o){r(!1);const t=()=>{var s;(s=document.getElementById("your-comment"))==null||s.focus()};return(s,m)=>(c(),n("div",{class:"your-comment",onClick:t},j))}});const F=u(q,[["__scopeId","data-v-3671d58b"]]),_=o=>(d("data-v-7917a28e"),o=o(),l(),o),J={class:"page page-donate"},K={class:"inner-container"},L={class:"page-donate__content"},O=_(()=>e("div",{class:"page-donate__header"},[e("img",{class:"page-donate__img",src:w,alt:""}),e("h1",{class:"page-donate__name"},"mwoodo")],-1)),P=_(()=>e("h2",{class:"page-donate__to-user"},[v("Thank you for "),e("br"),v(" supporting my blog")],-1)),Q={class:"page-donate__base"},R=_(()=>e("button",{class:"page-donate__button btn-purple"},"Donate",-1)),U=_(()=>e("img",{class:"page-donate__logo mobile",src:I,alt:""},null,-1)),W=_(()=>e("img",{class:"page-donate__bg desktop",src:k,alt:""},null,-1)),X=_(()=>e("img",{class:"page-donate__boy desktop",src:C,alt:""},null,-1)),Z=a({__name:"Donate",setup(o){return(t,s)=>(c(),n("div",J,[e("div",K,[e("div",L,[O,P,e("div",Q,[i(N,{class:"page-donate__ur-name"}),i(z,{class:"page-donate__how-much"})]),i(F,{class:"page-donate__comment"}),R])]),U,W,X]))}});const te=u(Z,[["__scopeId","data-v-7917a28e"]]);export{te as default};
