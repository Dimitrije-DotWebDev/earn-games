import{a as u,g as j,o as s,c as p,F as h,r as y,n as b,t as S,_ as v,k as C,b as _,l as d,w as f,m,x as r,p as k,e as x,a8 as $}from"./index.75e46ba4.js";const w="/assets/projectPage-img.b793ae63.png",I={class:"filters"},T=["onClick"],F=u({__name:"LaunchpadFilters",setup(t){const n=j([{id:0,name:"Currency1 Pool",checkedStatus:!0},{id:1,name:"Currency2 Pool",checkedStatus:!1},{id:2,name:"Currency3 Pool",checkedStatus:!1}]),l=e=>{n.value.forEach(a=>{a.id===e?a.checkedStatus=!0:a.checkedStatus=!1})};return(e,a)=>(s(),p("div",I,[(s(!0),p(h,null,y(n.value,(o,i)=>(s(),p("button",{class:b(["filters__el btn",{picked:o.checkedStatus}]),onClick:P=>l(o.id),key:i},S(o.name),11,T))),128))]))}});const g=v(F,[["__scopeId","data-v-c1d0c6ca"]]),A="/assets/popup-project-img.6e6eaad9.png",c=t=>(k("data-v-cdf0cc52"),t=t(),x(),t),B={class:"popup__content"},L={class:"popup__content__wrapper"},N=r('<h2 class="popup__content__title" data-v-cdf0cc52>Invest in the project</h2><div class="popup__content__project-name" data-v-cdf0cc52><div class="popup__content__project-name__img" data-v-cdf0cc52><img src="'+A+'" alt="project-img" class="popup__content__project-name__img__inside" data-v-cdf0cc52></div><span class="popup__content__project-name__text" data-v-cdf0cc52>Project Name</span></div><div class="popup__content__info" data-v-cdf0cc52><div class="popup__content__info__el" data-v-cdf0cc52><span class="popup__content__info__el__text" data-v-cdf0cc52>Max commntment limit</span><span class="popup__content__info__el__number" data-v-cdf0cc52>1000</span></div><div class="popup__content__info__el" data-v-cdf0cc52><span class="popup__content__info__el__text" data-v-cdf0cc52>Spot wallet balance</span><span class="popup__content__info__el__number" data-v-cdf0cc52>1907</span></div></div><div class="popup__content__amount" data-v-cdf0cc52><span class="popup__content__amount__title" data-v-cdf0cc52>Amount</span><div class="popup__content__amount__input-box" data-v-cdf0cc52><input placeholder="Enter amount" type="number" class="popup__content__amount__input-box__input" data-v-cdf0cc52><button class="popup__content__amount__input-box__max-button" data-v-cdf0cc52>MAX</button></div></div>',4),R={class:"popup__content__agree desktop"},O=c(()=>_("label",{class:"popup__content__agree__input__label"},[_("input",{type:"checkbox",class:"popup__content__agree__input"})],-1)),E={class:"popup__content__agree__el"},M=c(()=>_("span",{class:"popup__content__agree__el__text"},"I read it(a) and agree to the Finance Betting\xA0",-1)),V={class:"popup__content__buttons desktop"},D=c(()=>_("button",{class:"popup__content__buttons__confirm btn-purple"},"\u0421onfirm",-1)),Y={class:"popup__content__buttons mobile"},q={class:"popup__content__agree mobile"},z=c(()=>_("label",{class:"popup__content__agree__input__label"},[_("input",{type:"checkbox",class:"popup__content__agree__input"})],-1)),G={class:"popup__content__agree__el"},X=c(()=>_("span",{class:"popup__content__agree__el__text"},"I read it(a) and agree to the Finance Betting\xA0",-1)),H=c(()=>_("button",{class:"popup__content__buttons__confirm btn-purple"},"\u0421onfirm",-1)),J=u({__name:"Popup",props:["handler"],setup(t){const n=t;return(l,e)=>{const a=C("router-link");return s(),p(h,null,[_("div",{class:"popup__overlay",onClick:e[0]||(e[0]=o=>n.handler.handleOpenPopup())}),_("div",B,[_("div",L,[N,_("div",R,[O,_("div",E,[M,d(a,{to:"#",class:"popup__content__agree__el__link"},{default:f(()=>[m("Service Agreement")]),_:1})])]),_("div",V,[_("button",{onClick:e[1]||(e[1]=o=>n.handler.handleOpenPopup()),class:"popup__content__buttons__cancel"},"Cancel"),D]),_("div",Y,[_("div",q,[z,_("div",G,[X,d(a,{to:"#",class:"popup__content__agree__el__link"},{default:f(()=>[m("Service Agreement")]),_:1})])]),_("button",{onClick:e[2]||(e[2]=o=>n.handler.handleOpenPopup()),class:"popup__content__buttons__cancel"},"Cancel"),H])])])],64)}}});const K=v(J,[["__scopeId","data-v-cdf0cc52"]]),Q=t=>(k("data-v-1d79f95a"),t=t(),x(),t),U={class:"page page-project"},W={class:"inner-container"},Z={class:"page-project__header"},__=Q(()=>_("img",{src:w,alt:"Card-Img",class:"page-project__header__img"},null,-1)),e_=r('<div class="page-project__header__descr__title" data-v-1d79f95a><span class="page-project__header__descr__title__name" data-v-1d79f95a>Project Name</span><span class="page-project__header__descr__title__end-time" data-v-1d79f95a>End time 2022-05-29</span></div><p class="page-project__header__descr__text" data-v-1d79f95a>Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button class="page-project__header__descr__learn-more-button" data-v-1d79f95a>Learn more</button>',3),t_=r('<div class="page-project__header__info" data-v-1d79f95a><div class="page-project__header__info__el" data-v-1d79f95a><span class="page-project__header__info__el__title" data-v-1d79f95a>Participants:</span><span class="page-project__header__info__el__title" data-v-1d79f95a>Total staked:</span></div><div class="page-project__header__info__el numbers" data-v-1d79f95a><span class="page-project__header__info__el__number" data-v-1d79f95a>124 890</span><span class="page-project__header__info__el__number" data-v-1d79f95a>7 985 905</span></div></div>',1),a_={class:"page-project__filters mobile"},n_={class:"page-project__filters desktop"},o_=r('<section class="page-project__content desktop" data-v-1d79f95a><div class="page-project__content__column" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Total Rewards</span><span class="page-project__content__column__el__text" data-v-1d79f95a>7 985 905</span></div><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Total Staked</span><span class="page-project__content__column__el__text" data-v-1d79f95a>9 985 905</span></div></div><div class="page-project__content__column" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Staking Token</span><span class="page-project__content__column__el__text" data-v-1d79f95a>Token</span></div><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Annual Percentage Yield</span><span class="page-project__content__column__el__text" data-v-1d79f95a>2,5 %</span></div></div><div class="page-project__content__column" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Today\u2019s Pool Rewards</span><span class="page-project__content__column__el__text" data-v-1d79f95a>585 905</span></div></div></section><section class="page-project__content mobile" data-v-1d79f95a><div class="page-project__content__column" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Annual Percentage Yield</span><span class="page-project__content__column__el__text" data-v-1d79f95a>2,5 %</span></div><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Today\u2019s Pool Rewards</span><span class="page-project__content__column__el__text" data-v-1d79f95a>585 905</span></div></div><div class="page-project__content__column" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Total Staked</span><span class="page-project__content__column__el__text" data-v-1d79f95a>9 985 905</span></div><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Staking Token</span><span class="page-project__content__column__el__text" data-v-1d79f95a>Token</span></div></div><div class="page-project__content__column bottom" data-v-1d79f95a><div class="page-project__content__column__el" data-v-1d79f95a><span class="page-project__content__column__el__title" data-v-1d79f95a>Total Rewards</span><span class="page-project__content__column__el__text" data-v-1d79f95a>7 985 905</span></div></div></section><section class="page-project__footer" data-v-1d79f95a><div class="page-project__footer__column" data-v-1d79f95a><div class="page-project__footer__column__el" data-v-1d79f95a><span class="page-project__footer__column__el__title" data-v-1d79f95a>My Funds</span><span class="page-project__footer__column__el__text" data-v-1d79f95a>16 203</span></div></div><div class="page-project__footer__column" data-v-1d79f95a><div class="page-project__footer__column__el" data-v-1d79f95a><span class="page-project__footer__column__el__title" data-v-1d79f95a>My Rewards</span><div class="page-project__footer__column__el__text-box" data-v-1d79f95a><span class="page-project__footer__column__el__text" data-v-1d79f95a>97 809</span><span class="page-project__footer__column__el__text-box__small" data-v-1d79f95a>The rewards have been sent to your wallet</span></div></div></div><div class="page-project__footer__column desktop" data-v-1d79f95a></div></section>',3),c_=u({__name:"ProjectPage",setup(t){const n=$(),l=()=>{n.go(-1)},e=j(!1),a=()=>{e.value=!e.value};return(o,i)=>(s(),p("div",U,[_("div",W,[_("button",{class:"page-project__back-button",onClick:i[0]||(i[0]=P=>l())},"Back"),_("section",Z,[__,_("div",{class:"page-project__header__descr"},[e_,_("button",{onClick:a,class:"page-project__header__descr__invest-button btn-purple desktop"},"Invest now")]),t_,_("button",{onClick:a,class:"page-project__header__descr__invest-button btn-purple mobile"},"Invest now"),_("div",a_,[d(g)])]),_("section",n_,[d(g)]),o_]),_("div",{class:b(["page-project__popup",{closed:!e.value}])},[d(K,{handler:{handleOpenPopup:a}},null,8,["handler"])],2)]))}});const p_=v(c_,[["__scopeId","data-v-1d79f95a"]]);export{p_ as default};
