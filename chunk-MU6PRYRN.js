import{a as E,b as y,c as M,d as g}from"./chunk-K63BAWCR.js";import{Pa as h,Qa as v,la as S,ma as C}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as f}from"./chunk-A2FNTR3N.js";import{m as x}from"./chunk-3O7E6U5R.js";import{Hb as d,Ib as n,Jb as t,Kb as l,Ta as u,V as r,Xa as c,gc as o,jb as m,kb as s}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var I=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-skiplink-example"]],standalone:!1,decls:14,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["href","#"],["nav",""]],template:function(i,a){i&1&&(n(0,"h3"),o(1,"Skiplink"),t(),n(2,"div",0)(3,"p",1)(4,"it-skiplink")(5,"it-skiplink-item",2),o(6,"Vai al menu"),t(),n(7,"it-skiplink-item",2),o(8,"Vai al contenuto"),t()(),n(9,"it-skiplink",3)(10,"it-skiplink-item",2),o(11,"Vai al menu"),t(),n(12,"it-skiplink-item",2),o(13,"Vai al contenuto"),t()()()())},dependencies:[h,v],encapsulation:2})}}return e})();var b=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-skiplink-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Skiplink</h3>
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
export class SkiplinkExampleComponent {}`]],template:function(i,a){i&1&&l(0,"it-skiplink-example")(1,"it-source-display",0)},dependencies:[E,I],encapsulation:2})}}return e})();var D=(()=>{class e{constructor(){this.component=y.components.find(p=>p.name==="ItSkiplinkComponent")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-skiplink-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(i,a){i&1&&(n(0,"h1",0),o(1,"Skiplink"),t(),n(2,"p",1),o(3,"Barra di navigazione laterale, include liste di link e liste di link annidate."),t(),l(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-skiplink-examples"),t(),n(8,"it-tab-item",4)(9,"h2"),o(10,"Skiplink"),t(),l(11,"it-api-parameters",5),t()()),i&2&&(c(4),d("innerHTML",a.component.description,u),c(7),d("component",a.component))},dependencies:[M,C,S,b],encapsulation:2})}}return e})();var F=[{path:"",component:D}],V=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=r({imports:[f.forChild(F),f]})}}return e})();var $=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=s({type:e})}static{this.\u0275inj=r({imports:[x,g,V]})}}return e})();export{$ as SkiplinkModule};
