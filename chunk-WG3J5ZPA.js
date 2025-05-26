import{a as P,b as z,c as A,d as L}from"./chunk-VOECI7NO.js";import{Q as E,R as b,S as F,U as G,V as N,W as T,X as w,ca as S,da as I,ea as D,ma as V,na as B,za as j}from"./chunk-AH6A2KSZ.js";import"./chunk-XZP45KYQ.js";import{h}from"./chunk-BTXKVGUM.js";import"./chunk-WH5OHNTV.js";import{$a as s,Eb as n,Fb as r,Gb as m,Yb as p,Z as c,ab as g,ac as C,bc as v,cc as M,ed as y,ga as l,ha as f,sb as d}from"./chunk-E5TMX6OZ.js";import"./chunk-JNJ3D7EP.js";var W=(()=>{let e=class e{constructor(i){this.formBuilder=i,this.formGroup=this.formBuilder.group({textarea:[null,E.maxLength(50)]})}};e.\u0275fac=function(o){return new(o||e)(g(S))},e.\u0275cmp=l({type:e,selectors:[["it-textarea-example"]],decls:11,vars:3,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[1,"mb-5"],["label","Esempio di area di testo","description","Esempio descrizione",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio max 50 caratteri","placeholder","Esempio placeholder","formControlName","textarea",3,"rows"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),p(4,"NgModel"),r(),n(5,"it-textarea",4),M("ngModelChange",function(x){return v(a.ngModelValue,x)||(a.ngModelValue=x),x}),r()(),n(6,"div",2)(7,"h5",3),p(8,"FormGroup"),r(),n(9,"form",5),m(10,"it-textarea",6),r()()()()),o&2&&(s(5),C("ngModel",a.ngModelValue),s(4),d("formGroup",a.formGroup),s(),d("rows",5))},dependencies:[j,N,b,F,G,T,w],encapsulation:2});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["it-textarea-examples"]],decls:2,vars:0,consts:[["html",`<div class="bd-example">
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
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-textarea-example',
  templateUrl: './textarea-example.component.html',
})
export class TextareaExampleComponent {
  ngModelValue?: string;

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      textarea: [null, Validators.maxLength(50)],
    });
  }
}`]],template:function(o,a){o&1&&m(0,"it-textarea-example")(1,"it-source-display",0)},dependencies:[A,W],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{constructor(){this.component=P.components.find(i=>i.name==="ItTextareaComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["it-textarea-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,a){o&1&&(n(0,"h1",0),p(1,"Area di testo"),r(),n(2,"p",1),p(3,"Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni)."),r(),n(4,"it-tab-container")(5,"it-tab-item",2),m(6,"it-textarea-examples"),r(),n(7,"it-tab-item",3)(8,"h3"),p(9,"TextareaComponent"),r(),m(10,"it-api-parameters",4),r()()),o&2&&(s(10),d("component",a.component))},dependencies:[z,B,V,R],encapsulation:2});let t=e;return t})();var J=[{path:"",component:U}],k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=c({imports:[h.forChild(J),h]});let t=e;return t})();var xe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=c({imports:[y,L,k,I,D]});let t=e;return t})();export{xe as TextareaModule};
