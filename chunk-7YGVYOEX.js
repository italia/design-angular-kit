import{a as T,b as P,c as _,d as z}from"./chunk-K63BAWCR.js";import{Q as M,R as b,T as S,U as F,V as G,W as I,ba as N,ca as w,da as D,la as B,ma as j,wa as f}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as v}from"./chunk-A2FNTR3N.js";import{m as E}from"./chunk-3O7E6U5R.js";import{Hb as s,Ib as n,Jb as o,Kb as m,V as c,Xa as l,Z as x,gc as i,ic as C,jb as p,kb as u,kc as h,lc as y,mc as R}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var L=(()=>{class e{constructor(){this.formBuilder=x(N),this.rating=3,this.formGroup=this.formBuilder.group({rating:[0]})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-rating-example"]],standalone:!1,decls:19,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","label","ngModel"],[3,"formGroup"],["formControlName","rating"],[1,"pt-5"],[1,"example-section"],[1,"example-selected-value"]],template:function(t,r){t&1&&(n(0,"h3"),i(1,"Con Label"),o(),n(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),i(6,"NgModel"),o(),n(7,"it-rating",3),R("ngModelChange",function(g){return y(r.rating,g)||(r.rating=g),g}),o()(),n(8,"div",2)(9,"h5"),i(10,"FormGroup"),o(),n(11,"form",4),m(12,"it-rating",5),n(13,"div",6)(14,"h4"),i(15,"Risultato"),o(),n(16,"div",7)(17,"div",8),i(18),o()()()()()()()),t&2&&(l(7),s("label",r.rating+" stelle"),h("ngModel",r.rating),l(4),s("formGroup",r.formGroup),l(7),C("Valore selezionato: ",r.formGroup.get("rating").value))},dependencies:[f,F,M,b,S,I,G],encapsulation:2})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-rating-example-readonly"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"container-fluid","pb-4","mb-4"],["disabled","true",3,"value"]],template:function(t,r){t&1&&(n(0,"h3"),i(1,"Sola lettura"),o(),n(2,"div",0)(3,"div",1),m(4,"it-rating",2),o()()),t&2&&(l(4),s("value",4))},dependencies:[f],encapsulation:2})}}return e})();var W=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-rating-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Con Label</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>NgModel</h5>
      <it-rating [label]="rating + ' stelle'" [(ngModel)]="rating"></it-rating>
    </div>
    <div class="col">
      <h5>FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-rating formControlName="rating"></it-rating>

        <div class="pt-5">
          <h4>Risultato</h4>
          <div class="example-section">
            <div class="example-selected-value">Valore selezionato: /{/{ formGroup.get('rating').value /}/}</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-rating-example',
  templateUrl: './rating-example.component.html',
  standalone: false,
})
export class RatingExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rating: number = 3;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      rating: [0],
    });
  }
}`],["html",`<h3>Sola lettura</h3>
<div class="bd-example">
  <div class="container-fluid pb-4 mb-4">
    <it-rating [value]="4" disabled="true"></it-rating>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-rating-example-readonly',
  templateUrl: './rating-example-readonly.component.html',
  standalone: false,
})
export class RatingExampleReadonlyComponent {}`]],template:function(t,r){t&1&&m(0,"it-rating-example")(1,"it-source-display",0)(2,"it-rating-example-readonly")(3,"it-source-display",1)},dependencies:[T,L,V],encapsulation:2})}}return e})();var A=(()=>{class e{constructor(){this.component=P.components.find(a=>a.name==="ItRatingComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-rating-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,r){t&1&&(n(0,"h1",0),i(1,"Rating"),o(),n(2,"p",1),i(3,"Per esprimere una valutazione su un contenuto."),o(),n(4,"it-tab-container")(5,"it-tab-item",2),m(6,"it-rating-examples"),o(),n(7,"it-tab-item",3)(8,"h3"),i(9,"RatingComponent"),o(),m(10,"it-api-parameters",4),o()()),t&2&&(l(10),s("component",r.component))},dependencies:[_,j,B,W],encapsulation:2})}}return e})();var K=[{path:"",component:A}],U=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[v.forChild(K),v]})}}return e})();var ye=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[E,z,U,w,D]})}}return e})();export{ye as RatingModule};
