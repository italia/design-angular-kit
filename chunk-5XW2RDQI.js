import{a as C,b as E,c as h,d as y}from"./chunk-FNEUKG6X.js";import{da as u,ga as S,ha as b}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as f}from"./chunk-53YMBHPH.js";import{Cb as o,Db as n,Eb as r,Wb as l,Wc as x,Y as c,Za as v,fa as s,ga as d,qb as g}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var D=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-spinner-single-example"]],decls:22,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-lg-3"],[1,"mb-3"],["active","false"],[1,"col-6","col-lg-3","mt-3","mt-lg-0"],["active","false","small","true"],["small","true"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3)(4,"strong"),l(5,"Spinner standard"),n()(),r(6,"it-spinner",4),n(),o(7,"div",2)(8,"p",3)(9,"strong"),l(10,"Spinner Attivo"),n()(),r(11,"it-spinner"),n(),o(12,"div",5)(13,"p",3)(14,"strong"),l(15,"Small"),n()(),r(16,"it-spinner",6),n(),o(17,"div",5)(18,"p",3)(19,"strong"),l(20,"Small attivo"),n()(),r(21,"it-spinner",7),n()()())},dependencies:[u],encapsulation:2});let t=e;return t})();var M=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-spinner-double-example"]],decls:24,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-lg-3"],[1,"mb-3"],["active","false","double","true"],["double","true"],[1,"col-6","col-lg-3","mt-3","mt-lg-0"],["active","false","small","true","double","true"],["small","true","double","true"]],template:function(i,a){i&1&&(o(0,"h3"),l(1,"Spinner doppio"),n(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"p",3)(6,"strong"),l(7,"Spinner doppio"),n()(),r(8,"it-spinner",4),n(),o(9,"div",2)(10,"p",3)(11,"strong"),l(12,"Doppio attivo"),n()(),r(13,"it-spinner",5),n(),o(14,"div",6)(15,"p",3)(16,"strong"),l(17,"Doppio small"),n()(),r(18,"it-spinner",7),n(),o(19,"div",6)(20,"p",3)(21,"strong"),l(22,"Doppio small attivo"),n()(),r(23,"it-spinner",8),n()()())},dependencies:[u],encapsulation:2});let t=e;return t})();var I=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-spinner-examples"]],decls:4,vars:0,consts:[["html",`<div class="bd-example">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner standard</strong></p>

      <it-spinner active="false"></it-spinner>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner Attivo</strong></p>

      <it-spinner></it-spinner>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small</strong></p>

      <it-spinner active="false" small="true"></it-spinner>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small attivo</strong></p>

      <it-spinner small="true"></it-spinner>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-spinner-single-example',
  templateUrl: './spinner-single-example.component.html',
})
export class SpinnerSingleExampleComponent {}`],["html",`<h3>Spinner doppio</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner doppio</strong></p>

      <it-spinner active="false" double="true"></it-spinner>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Doppio attivo</strong></p>

      <it-spinner double="true"></it-spinner>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small</strong></p>

      <it-spinner active="false" small="true" double="true"></it-spinner>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small attivo</strong></p>

      <it-spinner small="true" double="true"></it-spinner>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-spinner-double-example',
  templateUrl: './spinner-double-example.component.html',
})
export class SpinnerDoubleExampleComponent {}`]],template:function(i,a){i&1&&r(0,"it-spinner-single-example")(1,"it-source-display",0)(2,"it-spinner-double-example")(3,"it-source-display",1)},dependencies:[h,D,M],encapsulation:2});let t=e;return t})();var w=(()=>{let e=class e{constructor(){this.component=C.components.find(p=>p.name==="ItSpinnerComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-spinner-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,a){i&1&&(o(0,"h1",0),l(1,"Spinner"),n(),o(2,"p",1),l(3,` L\u2019elemento Spinner comunica lo stato attivo di un\u2019operazione ma non il progresso percentuale della stessa. \xC8 utile quindi quando non \xE8 possibile determinare il tempo necessario a completare una procedura.
`),n(),o(4,"it-tab-container")(5,"it-tab-item",2),r(6,"it-spinner-examples"),n(),o(7,"it-tab-item",3)(8,"h3"),l(9,"SpinnerComponent"),n(),r(10,"it-api-parameters",4),n()()),i&2&&(v(10),g("component",a.component))},dependencies:[E,b,S,I],encapsulation:2});let t=e;return t})();var q=[{path:"",component:w}],F=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[f.forChild(q),f]});let t=e;return t})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[x,y,F]});let t=e;return t})();export{ee as SpinnerModule};
