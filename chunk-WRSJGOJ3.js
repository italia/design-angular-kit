import{a as P,b as z,c as A,d as L}from"./chunk-CQV3UQHT.js";import{P as E,Q as b,R as F,T as G,U as N,V as T,W as w,ba as S,ca as I,da as D,la as V,ma as B,ya as j}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h}from"./chunk-DVW5EFKD.js";import{m as y}from"./chunk-I647ZKKI.js";import{Hb as d,Ib as n,Jb as i,Kb as m,Wa as l,Y as c,aa as g,cc as p,fb as s,gb as f,gc as C,hc as v,ic as M}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var W=(()=>{let e=class e{constructor(){this.formBuilder=g(S),this.formGroup=this.formBuilder.group({textarea:[null,E.maxLength(50)]})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-textarea-example"]],standalone:!1,decls:11,vars:3,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[1,"mb-5"],["label","Esempio di area di testo","description","Esempio descrizione",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio max 50 caratteri","placeholder","Esempio placeholder","formControlName","textarea",3,"rows"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),p(4,"NgModel"),i(),n(5,"it-textarea",4),M("ngModelChange",function(x){return v(a.ngModelValue,x)||(a.ngModelValue=x),x}),i()(),n(6,"div",2)(7,"h5",3),p(8,"FormGroup"),i(),n(9,"form",5),m(10,"it-textarea",6),i()()()()),o&2&&(l(5),C("ngModel",a.ngModelValue),l(4),d("formGroup",a.formGroup),l(),d("rows",5))},dependencies:[j,N,b,F,G,T,w],encapsulation:2});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-textarea-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<div class="bd-example">
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
}`]],template:function(o,a){o&1&&m(0,"it-textarea-example")(1,"it-source-display",0)},dependencies:[P,W],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{constructor(){this.component=z.components.find(r=>r.name==="ItTextareaComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-textarea-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,a){o&1&&(n(0,"h1",0),p(1,"Area di testo"),i(),n(2,"p",1),p(3,"Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni)."),i(),n(4,"it-tab-container")(5,"it-tab-item",2),m(6,"it-textarea-examples"),i(),n(7,"it-tab-item",3)(8,"h3"),p(9,"TextareaComponent"),i(),m(10,"it-api-parameters",4),i()()),o&2&&(l(10),d("component",a.component))},dependencies:[A,B,V,R],encapsulation:2});let t=e;return t})();var J=[{path:"",component:U}],k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=c({imports:[h.forChild(J),h]});let t=e;return t})();var ge=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=c({imports:[y,L,k,I,D]});let t=e;return t})();export{ge as TextareaModule};
