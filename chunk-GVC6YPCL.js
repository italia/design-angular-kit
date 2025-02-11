import{a as B,b as S,c as w,d as I}from"./chunk-ZDM52FTL.js";import{Z as h,ga as C,ha as x,ya as d}from"./chunk-TYHSE32C.js";import"./chunk-XZP45KYQ.js";import{o as v}from"./chunk-53YMBHPH.js";import{Cb as o,Db as i,Eb as r,Ua as k,Wb as c,Wc as y,Y as b,Za as p,fa as m,ga as f,qb as s}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var M=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-link"]],decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["buttonStyle","link"],["buttonStyle","link","direction","up"]],template:function(n,l){n&1&&(o(0,"h3"),c(1,"Link"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),r(5,"it-back-button",3),i()(),o(6,"div",1)(7,"div",2),r(8,"it-back-button",4),i()()())},dependencies:[d],encapsulation:2});let e=t;return e})();var T=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-button"]],decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["direction","up"]],template:function(n,l){n&1&&(o(0,"h3"),c(1,"Pulsanti"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),r(5,"it-back-button"),i()(),o(6,"div",1)(7,"div",2),r(8,"it-back-button",3),i()()())},dependencies:[d],encapsulation:2});let e=t;return e})();var E=(()=>{let t=class t{constructor(){this.typeTornaIndietro="tornaIndietro",this.typeLivelloSuperiore="livelloSuperiore"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-only-icon"]],decls:8,vars:2,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col-auto"],[3,"showText"],["direction","up",3,"showText"]],template:function(n,l){n&1&&(o(0,"h3"),c(1,"Pulsanti con sola icona"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),r(5,"it-back-button",3),i(),o(6,"div",2),r(7,"it-back-button",4),i()()()),n&2&&(p(5),s("showText",!1),p(2),s("showText",!1))},dependencies:[d],encapsulation:2});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-examples"]],decls:6,vars:0,consts:[["html",`<h3>Link</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-back-button buttonStyle="link"></it-back-button>
    </div>
  </div>
  <div class="row my-2">
    <div class="col">
      <it-back-button buttonStyle="link" direction="up"></it-back-button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-back-button-link',
  templateUrl: './back-button-link.component.html',
})
export class BackButtonLinkComponent {}`],["html",`<h3>Pulsanti</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-back-button></it-back-button>
    </div>
  </div>
  <div class="row my-2">
    <div class="col">
      <it-back-button direction="up"></it-back-button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-back-button-button',
  templateUrl: './back-button-button.component.html',
})
export class BackButtonButtonComponent {}`],["html",`<h3>Pulsanti con sola icona</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col-auto">
      <it-back-button [showText]="false"></it-back-button>
    </div>
    <div class="col-auto">
      <it-back-button [showText]="false" direction="up"></it-back-button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-back-button-only-icon',
  templateUrl: './back-button-only-icon.component.html',
})
export class BackButtonOnlyIconComponent {
  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';
}`]],template:function(n,l){n&1&&r(0,"it-back-button-link")(1,"it-source-display",0)(2,"it-back-button-button")(3,"it-source-display",1)(4,"it-back-button-only-icon")(5,"it-source-display",2)},dependencies:[w,M,T,E],encapsulation:2});let e=t;return e})();var L=(()=>{let t=class t{constructor(){this.component=B.components.find(a=>a.name==="ItBackButtonComponent")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-go-back-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(n,l){n&1&&(o(0,"h1",0),c(1,"BackButton"),i(),o(2,"p",1),c(3,`Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.`),i(),r(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),r(7,"it-back-button-examples"),i(),o(8,"it-tab-item",4),r(9,"it-api-parameters",5),i()()),n&2&&(p(4),s("innerHTML",l.component.description,k),p(5),s("component",l.component))},dependencies:[S,x,C,D],encapsulation:2});let e=t;return e})();var O=[{path:"",component:L}],F=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=b({imports:[v.forChild(O),v]});let e=t;return e})();var mt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=b({imports:[y,I,h,F]});let e=t;return e})();export{mt as BackButtonModule};
