import{a as z,b as D,c as W,d as P}from"./chunk-ZDM52FTL.js";import{L as w,O as v,Z as x,ga as B,ha as S,na as E,za as I}from"./chunk-TYHSE32C.js";import"./chunk-XZP45KYQ.js";import{o as C}from"./chunk-53YMBHPH.js";import{$b as k,Cb as i,Db as a,Eb as p,Ua as y,Wb as s,Wc as T,Y as f,Za as l,_b as u,ac as g,fa as c,ga as h,qb as d}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var F=(()=>{let e=class e{constructor(){this.small=!1,this.shadow=!1,this.dark=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-back-to-top-button"]],decls:13,vars:6,consts:[[1,"bd-example"],[3,"small","shadow","dark"],[1,"row"],[1,"form-check","col-2"],["label","Small",3,"ngModelChange","ngModel"],["label","Shadow",3,"ngModelChange","ngModel"],["label","Dark",3,"ngModelChange","ngModel"]],template:function(o,n){o&1&&(i(0,"h3"),s(1,"Interazione con il componente Back to top"),a(),i(2,"div",0)(3,"p"),s(4,"Per visualizzare il componente, scorrere la pagina."),a(),p(5,"it-back-to-top",1),i(6,"div",2)(7,"div",3)(8,"h5"),s(9,"Opzioni"),a(),i(10,"it-checkbox",4),g("ngModelChange",function(r){return k(n.small,r)||(n.small=r),r}),a(),i(11,"it-checkbox",5),g("ngModelChange",function(r){return k(n.shadow,r)||(n.shadow=r),r}),a(),i(12,"it-checkbox",6),g("ngModelChange",function(r){return k(n.dark,r)||(n.dark=r),r}),a()()()()),o&2&&(l(5),d("small",n.small)("shadow",n.shadow)("dark",n.dark),l(5),u("ngModel",n.small),l(),u("ngModel",n.shadow),l(),u("ngModel",n.dark))},dependencies:[E,I,w,v],encapsulation:2});let t=e;return t})();var N=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-back-to-top-examples"]],decls:2,vars:0,consts:[["html",`<h3>Interazione con il componente Back to top</h3>

<div class="bd-example">
  <p>Per visualizzare il componente, scorrere la pagina.</p>
  <it-back-to-top [small]="small" [shadow]="shadow" [dark]="dark"> </it-back-to-top>

  <div class="row">
    <div class="form-check col-2">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="small" label="Small"></it-checkbox>
      <it-checkbox [(ngModel)]="shadow" label="Shadow"></it-checkbox>
      <it-checkbox [(ngModel)]="dark" label="Dark"></it-checkbox>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
})
export class BackToTopButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}`]],template:function(o,n){o&1&&p(0,"it-back-to-top-button")(1,"it-source-display",0)},dependencies:[W,F],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.component=z.components.find(m=>m.name==="ItBackToTopComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-go-to-top-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(o,n){o&1&&(i(0,"h1",0),s(1,"Back To Top"),a(),i(2,"p",1),s(3,`Consente agli utenti di avere un pulsante con un'azione equivalente al "torna su" nella pagina.`),a(),p(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-back-to-top-examples"),a(),i(8,"it-tab-item",4),p(9,"it-api-parameters",5),a()()),o&2&&(l(4),d("innerHTML",n.component.description,y),l(5),d("component",n.component))},dependencies:[D,S,B,N],encapsulation:2});let t=e;return t})();var A=[{path:"",component:L}],j=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[C.forChild(A),C]});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[T,P,x,j]});let t=e;return t})();export{pe as BackToTopModule};
