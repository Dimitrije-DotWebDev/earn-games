import{d as g,a as j,g as x,k as f,o as u,c as r,b as e,F as m,r as b,l as C,w as L,m as N,n as G,t as l,p as V,e as T,_ as S}from"./index.37e49a73.js";const w=g({id:"guildList",state:()=>[{id:0,guildName:"Gamers Guild",victories:100,TVL:100,revenue:1e4,isChoosen:!0},{id:1,guildName:"Pirate Guild",victories:100,TVL:20003,revenue:1e4,isChoosen:!1},{id:2,guildName:"The best Guild",victories:100,TVL:100,revenue:13242,isChoosen:!1},{id:3,guildName:"Silent Hill",victories:1234,TVL:100,revenue:1e4,isChoosen:!1},{id:4,guildName:"Metal Gamers",victories:230,TVL:100,revenue:1e4,isChoosen:!1},{id:5,guildName:"Some Gamers",victories:100,TVL:100,revenue:1e4,isChoosen:!1},{id:6,guildName:"Gamers Guild",victories:100,TVL:100,revenue:1e4,isChoosen:!1}],actions:{setIsChoosen(s){this.$state.map(_=>_.id===s?_.isChoosen=!0:_.isChoosen=!1)},getGuildListByName(s){return this.$state.filter(_=>_.guildName.toLowerCase().includes(s.toLowerCase()))}}}),i=s=>(V("data-v-471ce0a2"),s=s(),T(),s),k={class:"join"},y=i(()=>e("div",{class:"join__header"},[e("h2",{class:"join__header__title join-title"},"Let's start with the guild"),e("span",{class:"join__header__text join-text"},"Please enter the guild you want to join")],-1)),F={class:"join__search"},I=i(()=>e("span",{class:"join__search__title join-sub-title"},"Search",-1)),B=["value"],$={class:"join__guild-list"},J=i(()=>e("span",{class:"join__guild-list__title join-sub-title"},"Guild",-1)),E={class:"join__guild-list__box"},P=["onClick"],z={class:"join__guild-list__box__el__wrapper"},D={class:"join__guild-list__box__el__info"},H=i(()=>e("span",{class:"join__guild-list__box__el__info__title"},"Guild Name",-1)),M={class:"join__guild-list__box__el__info__text"},R={class:"join__guild-list__box__el__info"},q=i(()=>e("span",{class:"join__guild-list__box__el__info__title"},"Victories",-1)),A={class:"join__guild-list__box__el__info__text"},K={class:"join__guild-list__box__el__info"},O=i(()=>e("span",{class:"join__guild-list__box__el__info__title"},"TVL",-1)),Q={class:"join__guild-list__box__el__info__text"},U={class:"join__guild-list__box__el__info"},W=i(()=>e("span",{class:"join__guild-list__box__el__info__title"},"Revenue",-1)),X={class:"join__guild-list__box__el__info__text"},Y={class:"join__buttons"},Z=j({__name:"FirstJoin",setup(s){const _=w(),a=x(""),h=t=>{const n=t.target.value;a.value=n},p=()=>_.getGuildListByName(a.value),v=t=>{_.setIsChoosen(t)};function d(t){return`${String(t).split("").reverse().map((n,c)=>(c+1)%3===0?` ${n}`:n).reverse().join("")}`}return(t,n)=>{const c=f("router-link");return u(),r("div",k,[y,e("div",F,[I,e("input",{value:a.value,onInput:h,placeholder:"Enter the guild name",type:"text",class:"join__search__input join-input"},null,40,B)]),e("div",$,[J,e("div",E,[(u(!0),r(m,null,b(p(),o=>(u(),r("div",{class:G(["join__guild-list__box__el",{choosen:o.isChoosen}]),onClick:ee=>v(o.id)},[e("div",z,[e("div",D,[H,e("span",M,l(o.guildName),1)]),e("div",R,[q,e("span",A,l(d(o.victories)),1)]),e("div",K,[O,e("span",Q,l(d(o.TVL)),1)]),e("div",U,[W,e("span",X,l(d(o.revenue)),1)])])],10,P))),256))])]),e("div",Y,[C(c,{to:"2",class:"join__buttons__next next-button btn-purple"},{default:L(()=>[N("Next")]),_:1})])])}}});const _e=S(Z,[["__scopeId","data-v-471ce0a2"]]);export{_e as default};
