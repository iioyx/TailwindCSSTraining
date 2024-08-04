import './polyfills.server.mjs';
import{A as M,C as T,D as A,G as F,M as I,N as D,a as m,b as u,c as x,d as S,e as p,f as v,g as b,h as g,i as w,j as E,k as _,l as t,m as n,n as r,o as h,p as y,q as C,r as i,s as k,t as s}from"./chunk-U7CUGAY4.mjs";function O(o,e){if(o&1){let c=h();t(0,"button",10),y("click",function(){u(c);let a=C();return x(a.MenuOpen())}),r(1,"i",11),n()}}function P(o,e){if(o&1){let c=h();t(0,"button",10),y("click",function(){u(c);let a=C();return x(a.MenuClose())}),r(1,"i",11),n()}}function q(o,e){o&1&&(t(0,"div",9)(1,"div",12)(2,"a",6),i(3,"Portfolio"),n(),t(4,"a",6),i(5,"About"),n(),t(6,"a",6),i(7,"Social"),n(),t(8,"a",6),i(9,"Contact"),n(),t(10,"a",7),i(11,"Call Me"),n()()())}var H=(()=>{let e=class e{constructor(){this.navIsClicked=!1}MenuOpen(){this.navIsClicked=!0}MenuClose(){this.navIsClicked=!1}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["app-nav"]],standalone:!0,features:[s],decls:19,vars:2,consts:[[1,"container","mx-auto","p-6"],[1,"flex","items-center","justify-between"],[1,"Logo"],["href","#"],["src","./assets/images.png","alt","Logo",1,"w-40"],[1,"hidden","md:flex","gap-6","items-center"],["href","#",1,"text-slate-900","transition-all","hover:text-slate-500"],["href","#",1,"bg-orange-500","text-white","hover:text-black","transition-all","py-2","px-6","rounded-full","hover:bg-orange-300"],[1,"md:hidden"],[1,"md-hidden"],[1,"md:hidden",3,"click"],[1,"ri-menu-line","text-3xl"],[1,"absolute","flex-col","items-center","space-y-4","font-bold","bg-gray-50","drop-shadow-lg","border-gray-300","py-8","left-6","right-6","flex"]],template:function(a,d){a&1&&(t(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),r(4,"img",4),n()(),t(5,"div",5)(6,"a",6),i(7,"Portfolio"),n(),t(8,"a",6),i(9,"About"),n(),t(10,"a",6),i(11,"Social"),n(),t(12,"a",6),i(13,"Contact"),n(),t(14,"a",7),i(15,"Call Me"),n()(),v(16,O,2,0,"button",8)(17,P,2,0),n(),v(18,q,12,0,"div",9),n()),a&2&&(p(16),g(16,d.navIsClicked?d.navIsClicked?17:-1:16),p(2),g(18,d.navIsClicked?18:-1))}});let o=e;return o})();var N=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["app-hero"]],standalone:!0,features:[s],decls:14,vars:0,consts:[[1,"flex","my-1","container","mx-auto","gap-6","flex-col-reverse","md:flex-row","px-6"],[1,"md:w-1/2","flex","flex-col","justify-center","py-8","text-center","text-slate-900","md:text-left","gap-6"],[1,"font-bold","text-3xl","md:text-5xl"],[1,"font-medium"],[1,"font-mono","font-medium","text-sky-500"],["href","#",1,"bg-orange-500","self-center","md:self-start","text-white","hover:text-black","transition-all","py-2","px-6","rounded-full","hover:bg-orange-300"],[1,"md:w-1/2"],["src","./assets/undraw_home_screen_re_640d.svg","alt","Hero Picture",1,"w-full"]],template:function(a,d){a&1&&(t(0,"section")(1,"div",0)(2,"div",1)(3,"h1",2),i(4,"Rapidly build modern websites without ever leaving your HTML."),n(),t(5,"p",3),i(6,"A utility-first CSS framework packed with classes like "),t(7,"span",4),i(8,"flex, pt-4, text-center"),n(),i(9," and rotate-90 that can be composed to build any design, directly in your markup."),n(),t(10,"a",5),i(11,"Try Now"),n()(),t(12,"div",6),r(13,"img",7),n()()())}});let o=e;return o})();function G(o,e){if(o&1&&(t(0,"div",4),r(1,"img",5),t(2,"h5",6),i(3),n(),t(4,"p",7),i(5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque, ab magnam cum iusto ex consequuntur iure quibusdam perspiciatis. Nulla?"),n()()),o&2){let c=e.$implicit;p(),b("src",c.img,S),p(2),k(c.name)}}var j=(()=>{let e=class e{constructor(){this.items=[{img:"./assets/aGBUBmRb_400x400.jpg",name:"Ethan Matheo"},{img:"./assets/iHIyzH7x_400x400.jpg",name:"Andrew Bawer"},{img:"./assets/WWRMHczd_400x400.png",name:"John Alex"}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["app-author"]],standalone:!0,features:[s],decls:9,vars:0,consts:[[1,"mx-auto","my-20","px-5","text-center","container"],[1,"font-bold","text-4xl"],[1,"mt-8"],[1,"mt-10","flex","flex-col","space-x-0","space-y-10","md:space-y-0","md:flex-row","md:space-x-5"],[1,"bg-slate-200","border","items-center","border-slate-200","space-y-2","rounded-lg","flex","flex-col","p-6","md:w-1/3"],["alt","Picture",1,"w-16","-mt-12","rounded-full",3,"src"],[1,"font-bold","text-lg","text-slate-900"],[1,"leading-5","text-sm"]],template:function(a,d){a&1&&(t(0,"section")(1,"div",0)(2,"h2",1),i(3,"Authors"),n(),t(4,"p",2),i(5,"Tailwind CSS is the only framework that I've seen scale on large teams. It\u2019s easy to customize, adapts to any design, and the build size is tiny."),n(),t(6,"div",3),E(7,G,6,2,"div",4,w),n()()()),a&2&&(p(7),_(d.items))}});let o=e;return o})();var R=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[s],decls:27,vars:0,consts:[[1,"bg-slate-900"],[1,"container","flex","space-y-5","items-center","justify-between","flex-col","md:flex-row","mx-auto","p-6","py-10","text-white"],[1,"flex"],["href","#"],[1,"flex","justify-around","space-x-32"],[1,"flex","flex-col","space-y-2"],["action","#"],["placeholder","Subscribe to Newsletter","type","text","name","","id","",1,"flex-1","mx-2","space-x-2","py-2","px-6","rounded-full"],[1,"bg-orange-500","rounded-full","px-4","py-2"]],template:function(a,d){a&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div")(4,"a",3)(5,"h3"),i(6,"Tailwind CSS"),n()()()(),t(7,"div",4)(8,"div",5)(9,"a",3),i(10,"Home"),n(),t(11,"a",3),i(12,"About"),n(),t(13,"a",3),i(14,"Contact"),n()(),t(15,"div",5)(16,"a",3),i(17,"Home"),n(),t(18,"a",3),i(19,"About"),n(),t(20,"a",3),i(21,"Contact"),n()()(),t(22,"div",2)(23,"form",6),r(24,"input",7),t(25,"button",8),i(26,"Go"),n()()()()())}});let o=e;return o})();var V=(()=>{let e=class e{constructor(){this.title="TailwindTraining"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[s],decls:4,vars:0,template:function(a,d){a&1&&r(0,"app-nav")(1,"app-hero")(2,"app-author")(3,"app-footer")},dependencies:[H,N,j,R]});let o=e;return o})();var z=[];var L={providers:[I(z,D()),A()]};var U={providers:[F()]},B=M(L,U);var W=()=>T(V,B),ue=W;export{ue as a};