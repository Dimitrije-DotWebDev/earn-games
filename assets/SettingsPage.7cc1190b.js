import{u as w}from"./languageDropdown.5a2b3dd5.js";import{a as V,g as B,i as I,k as g,o as n,c as l,b as t,F as u,r as p,l as N,a6 as P,Q as v,w as f,m,t as S,n as h,p as D,e as E,_ as M}from"./index.38e7ac00.js";const R="/assets/settings-bg-left.dfe4db96.svg",F="/assets/settings-bg-top.71f95256.svg",L="/assets/settings-bg-right.d9cba50a.png",_=o=>(D("data-v-3d003f62"),o=o(),E(),o),$={class:"inner-container"},z=_(()=>t("h2",{class:"page-settings__title title-primary"},"Settings",-1)),Q={class:"page-settings__box"},T={class:"page-settings__box__nav desktop"},j={class:"page-settings__box__nav__mobile-box"},q={class:"page-settings__box__nav__mobile mobile"},A={class:"page-settings__box__content"},G=_(()=>t("img",{class:"settings-bg__left",src:R,alt:""},null,-1)),H=_(()=>t("img",{class:"settings-bg__top",src:F,alt:""},null,-1)),J=_(()=>t("img",{class:"settings-bg__right",src:L,alt:""},null,-1)),K=V({__name:"SettingsPage",setup(o){const k=w(),b=s=>{s.target.id!=="dropdown"&&k.closeDropdown()},i=B([{id:0,name:"My profile",link:"MyProfile",activeStatus:!1},{id:1,name:"Security",link:"security",activeStatus:!1},{id:2,name:"Verification",link:"verification",activeStatus:!1},{id:3,name:"Settings",link:"settings",activeStatus:!1}]),r=s=>{i.value.forEach(a=>{a.id===s?a.activeStatus=!a.activeStatus:a.activeStatus=!1})},x=P();return I(()=>{i.value.forEach(s=>{x.path.slice(17).includes(s.link)?s.activeStatus=!s.activeStatus:s.activeStatus=!1})}),(s,a)=>{const d=g("router-link"),y=g("RouterView");return n(),l("div",{onClick:b,class:"page page-settings"},[t("div",$,[z,t("div",Q,[t("nav",T,[(n(!0),l(u,null,p(i.value,(e,c)=>(n(),v(d,{class:h(["page-settings__box__nav__el",{active:e.activeStatus}]),onClick:C=>r(e.id),to:{path:e.link},key:c},{default:f(()=>[m(S(e.name),1)]),_:2},1032,["class","onClick","to"]))),128))]),t("div",j,[t("nav",q,[(n(!0),l(u,null,p(i.value,(e,c)=>(n(),v(d,{class:h(["page-settings__box__nav__mobile__el",{active:e.activeStatus}]),onClick:C=>r(e.id),to:{path:e.link},key:c},{default:f(()=>[m(S(e.name),1)]),_:2},1032,["class","onClick","to"]))),128))])]),t("div",A,[N(y)])])]),G,H,J])}}});const W=M(K,[["__scopeId","data-v-3d003f62"]]);export{W as default};
