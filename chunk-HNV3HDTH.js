import{a as C,b,c as E,d as h}from"./chunk-K63BAWCR.js";import{ia as c,la as S,ma as x}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as u}from"./chunk-A2FNTR3N.js";import{m as g}from"./chunk-3O7E6U5R.js";import{Hb as v,Ib as i,Jb as n,Kb as o,V as a,Xa as f,gc as l,jb as r,kb as d}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-spinner-single-example"]],standalone:!1,decls:22,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-lg-3"],[1,"mb-3"],["active","false"],[1,"col-6","col-lg-3","mt-3","mt-lg-0"],["active","false","small","true"],["small","true"]],template:function(t,m){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3)(4,"strong"),l(5,"Spinner standard"),n()(),o(6,"it-spinner",4),n(),i(7,"div",2)(8,"p",3)(9,"strong"),l(10,"Spinner Attivo"),n()(),o(11,"it-spinner"),n(),i(12,"div",5)(13,"p",3)(14,"strong"),l(15,"Small"),n()(),o(16,"it-spinner",6),n(),i(17,"div",5)(18,"p",3)(19,"strong"),l(20,"Small attivo"),n()(),o(21,"it-spinner",7),n()()())},dependencies:[c],encapsulation:2})}}return e})();var D=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-spinner-double-example"]],standalone:!1,decls:24,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-lg-3"],[1,"mb-3"],["active","false","double","true"],["double","true"],[1,"col-6","col-lg-3","mt-3","mt-lg-0"],["active","false","small","true","double","true"],["small","true","double","true"]],template:function(t,m){t&1&&(i(0,"h3"),l(1,"Spinner doppio"),n(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"p",3)(6,"strong"),l(7,"Spinner doppio"),n()(),o(8,"it-spinner",4),n(),i(9,"div",2)(10,"p",3)(11,"strong"),l(12,"Doppio attivo"),n()(),o(13,"it-spinner",5),n(),i(14,"div",6)(15,"p",3)(16,"strong"),l(17,"Doppio small"),n()(),o(18,"it-spinner",7),n(),i(19,"div",6)(20,"p",3)(21,"strong"),l(22,"Doppio small attivo"),n()(),o(23,"it-spinner",8),n()()())},dependencies:[c],encapsulation:2})}}return e})();var M=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-spinner-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<div class="bd-example">
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
  standalone: false,
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
  standalone: false,
})
export class SpinnerDoubleExampleComponent {}`]],template:function(t,m){t&1&&o(0,"it-spinner-single-example")(1,"it-source-display",0)(2,"it-spinner-double-example")(3,"it-source-display",1)},dependencies:[C,y,D],encapsulation:2})}}return e})();var I=(()=>{class e{constructor(){this.component=b.components.find(p=>p.name==="ItSpinnerComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-spinner-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,m){t&1&&(i(0,"h1",0),l(1,"Spinner"),n(),i(2,"p",1),l(3,` L\u2019elemento Spinner comunica lo stato attivo di un\u2019operazione ma non il progresso percentuale della stessa. \xC8 utile quindi quando non \xE8 possibile determinare il tempo necessario a completare una procedura.
`),n(),i(4,"it-tab-container")(5,"it-tab-item",2),o(6,"it-spinner-examples"),n(),i(7,"it-tab-item",3)(8,"h3"),l(9,"SpinnerComponent"),n(),o(10,"it-api-parameters",4),n()()),t&2&&(f(10),v("component",m.component))},dependencies:[E,x,S,M],encapsulation:2})}}return e})();var N=[{path:"",component:I}],w=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=a({imports:[u.forChild(N),u]})}}return e})();var _=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=a({imports:[g,h,w]})}}return e})();export{_ as SpinnerModule};
