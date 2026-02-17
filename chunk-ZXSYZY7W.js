import{a as h,b as x,c as I,d as S}from"./chunk-K63BAWCR.js";import{Ea as p,ca as B,la as y,ma as C}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as b}from"./chunk-A2FNTR3N.js";import{m as v}from"./chunk-3O7E6U5R.js";import{Hb as s,Ib as e,Jb as o,Kb as i,Ta as k,V as u,Xa as l,gc as m,jb as r,kb as f}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var w=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["it-back-button-link"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["buttonStyle","link"],["buttonStyle","link","direction","up"]],template:function(n,c){n&1&&(e(0,"h3"),m(1,"Link"),o(),e(2,"div",0)(3,"div",1)(4,"div",2),i(5,"it-back-button",3),o()(),e(6,"div",1)(7,"div",2),i(8,"it-back-button",4),o()()())},dependencies:[p],encapsulation:2})}}return t})();var g=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["it-back-button-button"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["direction","up"]],template:function(n,c){n&1&&(e(0,"h3"),m(1,"Pulsanti"),o(),e(2,"div",0)(3,"div",1)(4,"div",2),i(5,"it-back-button"),o()(),e(6,"div",1)(7,"div",2),i(8,"it-back-button",3),o()()())},dependencies:[p],encapsulation:2})}}return t})();var E=(()=>{class t{constructor(){this.typeTornaIndietro="tornaIndietro",this.typeLivelloSuperiore="livelloSuperiore"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["it-back-button-only-icon"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col-auto"],[3,"showText"],["direction","up",3,"showText"]],template:function(n,c){n&1&&(e(0,"h3"),m(1,"Pulsanti con sola icona"),o(),e(2,"div",0)(3,"div",1)(4,"div",2),i(5,"it-back-button",3),o(),e(6,"div",2),i(7,"it-back-button",4),o()()()),n&2&&(l(5),s("showText",!1),l(2),s("showText",!1))},dependencies:[p],encapsulation:2})}}return t})();var T=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["it-back-button-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Link</h3>
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
}`]],template:function(n,c){n&1&&i(0,"it-back-button-link")(1,"it-source-display",0)(2,"it-back-button-button")(3,"it-source-display",1)(4,"it-back-button-only-icon")(5,"it-source-display",2)},dependencies:[h,w,g,E],encapsulation:2})}}return t})();var D=(()=>{class t{constructor(){this.component=x.components.find(a=>a.name==="ItBackButtonComponent")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=r({type:t,selectors:[["it-go-back-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(n,c){n&1&&(e(0,"h1",0),m(1,"BackButton"),o(),e(2,"p",1),m(3,`Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.`),o(),i(4,"div",2),e(5,"it-tab-container")(6,"it-tab-item",3),i(7,"it-back-button-examples"),o(),e(8,"it-tab-item",4),i(9,"it-api-parameters",5),o()()),n&2&&(l(4),s("innerHTML",c.component.description,k),l(5),s("component",c.component))},dependencies:[I,C,y,T],encapsulation:2})}}return t})();var N=[{path:"",component:D}],L=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=u({imports:[b.forChild(N),b]})}}return t})();var rt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=u({imports:[v,S,B,L]})}}return t})();export{rt as BackButtonModule};
