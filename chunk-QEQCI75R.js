import{a as E,b as I,c as M,d as b}from"./chunk-FNEUKG6X.js";import{Ka as S,La as y,ga as C,ha as v}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as u}from"./chunk-53YMBHPH.js";import{Cb as o,Db as n,Eb as a,Ua as x,Wb as m,Wc as h,Y as s,Za as d,fa as r,ga as c,qb as f}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var g=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["it-skiplink-example"]],decls:14,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["href","#"],["nav",""]],template:function(i,l){i&1&&(o(0,"h3"),m(1,"Skiplink"),n(),o(2,"div",0)(3,"p",1)(4,"it-skiplink")(5,"it-skiplink-item",2),m(6,"Vai al menu"),n(),o(7,"it-skiplink-item",2),m(8,"Vai al contenuto"),n()(),o(9,"it-skiplink",3)(10,"it-skiplink-item",2),m(11,"Vai al menu"),n(),o(12,"it-skiplink-item",2),m(13,"Vai al contenuto"),n()()()())},dependencies:[S,y],encapsulation:2});let t=e;return t})();var D=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["it-skiplink-examples"]],decls:2,vars:0,consts:[["html",`<h3>Skiplink</h3>
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
})
export class SkiplinkExampleComponent {}`]],template:function(i,l){i&1&&a(0,"it-skiplink-example")(1,"it-source-display",0)},dependencies:[M,g],encapsulation:2});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.component=E.components.find(p=>p.name==="ItSkiplinkComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["it-skiplink-index"]],decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(i,l){i&1&&(o(0,"h1",0),m(1,"Skiplink"),n(),o(2,"p",1),m(3,"Barra di navigazione laterale, include liste di link e liste di link annidate."),n(),a(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),a(7,"it-skiplink-examples"),n(),o(8,"it-tab-item",4)(9,"h2"),m(10,"Skiplink"),n(),a(11,"it-api-parameters",5),n()()),i&2&&(d(4),f("innerHTML",l.component.description,x),d(7),f("component",l.component))},dependencies:[I,v,C,D],encapsulation:2});let t=e;return t})();var j=[{path:"",component:V}],T=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[u.forChild(j),u]});let t=e;return t})();var _=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=s({imports:[h,b,T]});let t=e;return t})();export{_ as SkiplinkModule};
