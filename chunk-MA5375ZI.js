import{a as j,b as P,c as R,d as _}from"./chunk-K63BAWCR.js";import{P as E,Q as T,R as y,T as b,U as F,V as G,W as N,ba as w,ca as S,da as I,la as D,ma as V,ya as B}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as x}from"./chunk-A2FNTR3N.js";import{m as v}from"./chunk-3O7E6U5R.js";import{Hb as s,Ib as n,Jb as o,Kb as a,V as d,Xa as p,Z as g,gc as m,jb as l,kb as c,kc as h,lc as C,mc as M}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class e{constructor(){this.formBuilder=g(w),this.formGroup=this.formBuilder.group({textarea:[null,E.maxLength(50)]})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-textarea-example"]],standalone:!1,decls:11,vars:3,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[1,"mb-5"],["label","Esempio di area di testo","description","Esempio descrizione",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio max 50 caratteri","placeholder","Esempio placeholder","formControlName","textarea",3,"rows"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),m(4,"NgModel"),o(),n(5,"it-textarea",4),M("ngModelChange",function(u){return C(i.ngModelValue,u)||(i.ngModelValue=u),u}),o()(),n(6,"div",2)(7,"h5",3),m(8,"FormGroup"),o(),n(9,"form",5),a(10,"it-textarea",6),o()()()()),t&2&&(p(5),h("ngModel",i.ngModelValue),p(4),s("formGroup",i.formGroup),p(),s("rows",5))},dependencies:[B,F,T,y,b,N,G],encapsulation:2})}}return e})();var A=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-textarea-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5 class="mb-5">NgModel</h5>
      <it-textarea label="Esempio di area di testo" description="Esempio descrizione" [(ngModel)]="ngModelValue"></it-textarea>
    </div>
    <div class="col">
      <h5 class="mb-5">FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-textarea label="Esempio max 50 caratteri" placeholder="Esempio placeholder" [rows]="5" formControlName="textarea"></it-textarea>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-textarea-example',
  templateUrl: './textarea-example.component.html',
  standalone: false,
})
export class TextareaExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  ngModelValue?: string;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      textarea: [null, Validators.maxLength(50)],
    });
  }
}`]],template:function(t,i){t&1&&a(0,"it-textarea-example")(1,"it-source-display",0)},dependencies:[j,z],encapsulation:2})}}return e})();var L=(()=>{class e{constructor(){this.component=P.components.find(r=>r.name==="ItTextareaComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-textarea-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,i){t&1&&(n(0,"h1",0),m(1,"Area di testo"),o(),n(2,"p",1),m(3,"Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni)."),o(),n(4,"it-tab-container")(5,"it-tab-item",2),a(6,"it-textarea-examples"),o(),n(7,"it-tab-item",3)(8,"h3"),m(9,"TextareaComponent"),o(),a(10,"it-api-parameters",4),o()()),t&2&&(p(10),s("component",i.component))},dependencies:[R,V,D,A],encapsulation:2})}}return e})();var q=[{path:"",component:L}],W=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=d({imports:[x.forChild(q),x]})}}return e})();var ge=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=d({imports:[v,_,W,S,I]})}}return e})();export{ge as TextareaModule};
