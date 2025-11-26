import{a as P,b as z,c as L,d as V}from"./chunk-CQV3UQHT.js";import{Q as S,R,T as F,U as G,V as N,W as I,ba as w,ca as D,da as B,la as j,ma as T,wa as g}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h}from"./chunk-DVW5EFKD.js";import{m as M}from"./chunk-I647ZKKI.js";import{Hb as d,Ib as i,Jb as o,Kb as l,Wa as p,Y as f,aa as x,cc as r,ec as C,fb as s,gb as u,gc as y,hc as b,ic as E}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var W=(()=>{let e=class e{constructor(){this.formBuilder=x(w),this.rating=3,this.formGroup=this.formBuilder.group({rating:[0]})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-rating-example"]],standalone:!1,decls:19,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","label","ngModel"],[3,"formGroup"],["formControlName","rating"],[1,"pt-5"],[1,"example-section"],[1,"example-selected-value"]],template:function(n,m){n&1&&(i(0,"h3"),r(1,"Con Label"),o(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),r(6,"NgModel"),o(),i(7,"it-rating",3),E("ngModelChange",function(v){return b(m.rating,v)||(m.rating=v),v}),o()(),i(8,"div",2)(9,"h5"),r(10,"FormGroup"),o(),i(11,"form",4),l(12,"it-rating",5),i(13,"div",6)(14,"h4"),r(15,"Risultato"),o(),i(16,"div",7)(17,"div",8),r(18),o()()()()()()()),n&2&&(p(7),d("label",m.rating+" stelle"),y("ngModel",m.rating),p(4),d("formGroup",m.formGroup),p(7),C("Valore selezionato: ",m.formGroup.get("rating").value))},dependencies:[g,G,S,R,F,N,I],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-rating-example-readonly"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"container-fluid","pb-4","mb-4"],["disabled","true",3,"value"]],template:function(n,m){n&1&&(i(0,"h3"),r(1,"Sola lettura"),o(),i(2,"div",0)(3,"div",1),l(4,"it-rating",2),o()()),n&2&&(p(4),d("value",4))},dependencies:[g],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-rating-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Con Label</h3>
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
export class RatingExampleReadonlyComponent {}`]],template:function(n,m){n&1&&l(0,"it-rating-example")(1,"it-source-display",0)(2,"it-rating-example-readonly")(3,"it-source-display",1)},dependencies:[P,W,A],encapsulation:2});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.component=z.components.find(a=>a.name==="ItRatingComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-rating-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,m){n&1&&(i(0,"h1",0),r(1,"Rating"),o(),i(2,"p",1),r(3,"Per esprimere una valutazione su un contenuto."),o(),i(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-rating-examples"),o(),i(7,"it-tab-item",3)(8,"h3"),r(9,"RatingComponent"),o(),l(10,"it-api-parameters",4),o()()),n&2&&(p(10),d("component",m.component))},dependencies:[L,T,j,U],encapsulation:2});let t=e;return t})();var Q=[{path:"",component:k}],q=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[h.forChild(Q),h]});let t=e;return t})();var be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[M,V,q,D,B]});let t=e;return t})();export{be as RatingModule};
