import{a as E,b as I,c as z,d as D}from"./chunk-ZWYEEAVU.js";import{Fa as _,Q as B,T as y,ca as w,la as v,ma as x,sa as S}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as g}from"./chunk-F32MIGDQ.js";import{m as M}from"./chunk-66PP3R5H.js";import{Gb as c,Hb as n,Ib as i,Jb as l,Sa as b,V as d,Wa as m,fc as p,ib as s,jb as f,jc as u,kc as h,lc as k}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var W=(()=>{class e{constructor(){this.small=!1,this.shadow=!1,this.dark=!1}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-back-to-top-button"]],standalone:!1,decls:13,vars:6,consts:[[1,"bd-example"],[3,"small","shadow","dark"],[1,"row"],[1,"form-check","col-2"],["label","Small",3,"ngModelChange","ngModel"],["label","Shadow",3,"ngModelChange","ngModel"],["label","Dark",3,"ngModelChange","ngModel"]],template:function(o,t){o&1&&(n(0,"h3"),p(1,"Interazione con il componente Back to top"),i(),n(2,"div",0)(3,"p"),p(4,"Per visualizzare il componente, scorrere la pagina."),i(),l(5,"it-back-to-top",1),n(6,"div",2)(7,"div",3)(8,"h5"),p(9,"Opzioni"),i(),n(10,"it-checkbox",4),k("ngModelChange",function(a){return h(t.small,a)||(t.small=a),a}),i(),n(11,"it-checkbox",5),k("ngModelChange",function(a){return h(t.shadow,a)||(t.shadow=a),a}),i(),n(12,"it-checkbox",6),k("ngModelChange",function(a){return h(t.dark,a)||(t.dark=a),a}),i()()()()),o&2&&(m(5),c("small",t.small)("shadow",t.shadow)("dark",t.dark),m(5),u("ngModel",t.small),m(),u("ngModel",t.shadow),m(),u("ngModel",t.dark))},dependencies:[S,_,B,y],encapsulation:2})}}return e})();var P=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-back-to-top-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Interazione con il componente Back to top</h3>

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
  standalone: false,
})
export class BackToTopButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}`]],template:function(o,t){o&1&&l(0,"it-back-to-top-button")(1,"it-source-display",0)},dependencies:[E,W],encapsulation:2})}}return e})();var F=(()=>{class e{constructor(){this.component=I.components.find(r=>r.name==="ItBackToTopComponent")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-go-to-top-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(o,t){o&1&&(n(0,"h1",0),p(1,"Back To Top"),i(),n(2,"p",1),p(3,`Consente agli utenti di avere un pulsante con un'azione equivalente al "torna su" nella pagina.`),i(),l(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-back-to-top-examples"),i(),n(8,"it-tab-item",4),l(9,"it-api-parameters",5),i()()),o&2&&(m(4),c("innerHTML",t.component.description,b),m(5),c("component",t.component))},dependencies:[z,x,v,P],encapsulation:2})}}return e})();var H=[{path:"",component:F}],N=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=d({imports:[g.forChild(H),g]})}}return e})();var le=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=d({imports:[M,D,w,N]})}}return e})();export{le as BackToTopModule};
