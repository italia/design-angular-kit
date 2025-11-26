import{a as E,b as I,c as M,d as b}from"./chunk-CQV3UQHT.js";import{Pa as S,Qa as y,la as C,ma as v}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as u}from"./chunk-DVW5EFKD.js";import{m as h}from"./chunk-I647ZKKI.js";import{Hb as f,Ib as o,Jb as n,Kb as l,Sa as x,Wa as k,Y as s,cc as m,fb as a,gb as c}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var g=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["it-skiplink-example"]],standalone:!1,decls:14,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["href","#"],["nav",""]],template:function(i,r){i&1&&(o(0,"h3"),m(1,"Skiplink"),n(),o(2,"div",0)(3,"p",1)(4,"it-skiplink")(5,"it-skiplink-item",2),m(6,"Vai al menu"),n(),o(7,"it-skiplink-item",2),m(8,"Vai al contenuto"),n()(),o(9,"it-skiplink",3)(10,"it-skiplink-item",2),m(11,"Vai al menu"),n(),o(12,"it-skiplink-item",2),m(13,"Vai al contenuto"),n()()()())},dependencies:[S,y],encapsulation:2});let t=e;return t})();var D=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["it-skiplink-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Skiplink</h3>
<div class="bd-example">
  <p class="example-section">
    <it-skiplink>
      <it-skiplink-item href="#">Vai al menu</it-skiplink-item>
      <it-skiplink-item href="#">Vai al contenuto</it-skiplink-item>
    </it-skiplink>

    <it-skiplink nav>
      <it-skiplink-item href="#">Vai al menu</it-skiplink-item>
      <it-skiplink-item href="#">Vai al contenuto</it-skiplink-item>
    </it-skiplink>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-skiplink-example',
  templateUrl: './skiplink-example.component.html',
  standalone: false,
})
export class SkiplinkExampleComponent {}`]],template:function(i,r){i&1&&l(0,"it-skiplink-example")(1,"it-source-display",0)},dependencies:[E,g],encapsulation:2});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.component=I.components.find(p=>p.name==="ItSkiplinkComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["it-skiplink-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(i,r){i&1&&(o(0,"h1",0),m(1,"Skiplink"),n(),o(2,"p",1),m(3,"Barra di navigazione laterale, include liste di link e liste di link annidate."),n(),l(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-skiplink-examples"),n(),o(8,"it-tab-item",4)(9,"h2"),m(10,"Skiplink"),n(),l(11,"it-api-parameters",5),n()()),i&2&&(k(4),f("innerHTML",r.component.description,x),k(7),f("component",r.component))},dependencies:[M,v,C,D],encapsulation:2});let t=e;return t})();var j=[{path:"",component:V}],T=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[u.forChild(j),u]});let t=e;return t})();var _=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[h,b,T]});let t=e;return t})();export{_ as SkiplinkModule};
