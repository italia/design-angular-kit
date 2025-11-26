import{a as B,b as S,c as w,d as I}from"./chunk-CQV3UQHT.js";import{Ea as d,ca as h,la as C,ma as x}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as v}from"./chunk-DVW5EFKD.js";import{m as y}from"./chunk-I647ZKKI.js";import{Hb as p,Ib as o,Jb as i,Kb as a,Sa as k,Wa as s,Y as f,cc as l,fb as m,gb as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var M=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-link"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["buttonStyle","link"],["buttonStyle","link","direction","up"]],template:function(n,c){n&1&&(o(0,"h3"),l(1,"Link"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),a(5,"it-back-button",3),i()(),o(6,"div",1)(7,"div",2),a(8,"it-back-button",4),i()()())},dependencies:[d],encapsulation:2});let e=t;return e})();var T=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-button"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["direction","up"]],template:function(n,c){n&1&&(o(0,"h3"),l(1,"Pulsanti"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),a(5,"it-back-button"),i()(),o(6,"div",1)(7,"div",2),a(8,"it-back-button",3),i()()())},dependencies:[d],encapsulation:2});let e=t;return e})();var E=(()=>{let t=class t{constructor(){this.typeTornaIndietro="tornaIndietro",this.typeLivelloSuperiore="livelloSuperiore"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-only-icon"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col-auto"],[3,"showText"],["direction","up",3,"showText"]],template:function(n,c){n&1&&(o(0,"h3"),l(1,"Pulsanti con sola icona"),i(),o(2,"div",0)(3,"div",1)(4,"div",2),a(5,"it-back-button",3),i(),o(6,"div",2),a(7,"it-back-button",4),i()()()),n&2&&(s(5),p("showText",!1),s(2),p("showText",!1))},dependencies:[d],encapsulation:2});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-back-button-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Link</h3>
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class BackButtonOnlyIconComponent {
  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';
}`]],template:function(n,c){n&1&&a(0,"it-back-button-link")(1,"it-source-display",0)(2,"it-back-button-button")(3,"it-source-display",1)(4,"it-back-button-only-icon")(5,"it-source-display",2)},dependencies:[B,M,T,E],encapsulation:2});let e=t;return e})();var L=(()=>{let t=class t{constructor(){this.component=S.components.find(r=>r.name==="ItBackButtonComponent")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["it-go-back-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(n,c){n&1&&(o(0,"h1",0),l(1,"BackButton"),i(),o(2,"p",1),l(3,`Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.`),i(),a(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),a(7,"it-back-button-examples"),i(),o(8,"it-tab-item",4),a(9,"it-api-parameters",5),i()()),n&2&&(s(4),p("innerHTML",c.component.description,k),s(5),p("component",c.component))},dependencies:[w,x,C,D],encapsulation:2});let e=t;return e})();var O=[{path:"",component:L}],F=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=f({imports:[v.forChild(O),v]});let e=t;return e})();var mt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=f({imports:[y,I,h,F]});let e=t;return e})();export{mt as BackButtonModule};
