import{a as j,b as T,c as P,d as W}from"./chunk-CQV3UQHT.js";import{Q as F,R as w,T as G,U as I,V as R,W as S,ba as N,ca as z,da as D,la as V,ma as B,va as g}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h}from"./chunk-DVW5EFKD.js";import{m as E}from"./chunk-I647ZKKI.js";import{Hb as d,Ib as r,Jb as n,Kb as p,Wa as l,Y as f,aa as x,cc as m,ec as C,fb as s,gb as u,gc as y,hc as b,ic as M}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var A=(()=>{let e=class e{constructor(){this.formBuilder=x(N),this.rangeValue=50,this.formGroup=this.formBuilder.group({range:[null]})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-range-example"]],standalone:!1,decls:9,vars:7,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["label","Esempio ngModel",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio FormGroup","formControlName","range",3,"min","max","step"]],template:function(o,a){o&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"it-range",3),M("ngModelChange",function(v){return b(a.rangeValue,v)||(a.rangeValue=v),v}),m(4),n()(),r(5,"div",2)(6,"form",4)(7,"it-range",5),m(8),n()()()()()),o&2&&(l(3),y("ngModel",a.rangeValue),l(),C(" ",a.rangeValue," % "),l(2),d("formGroup",a.formGroup),l(),d("min",0)("max",1e3)("step",2),l(),C(" Valore selezionato: ",a.formGroup.get("range").value," "))},dependencies:[g,I,F,w,R,S,G],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-range-custom-colors"]],standalone:!1,decls:8,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["leftColor","var(--bs-primary)","rightColor","var(--bs-gray-300)"],["leftColor","var(--bs-warning)","rightColor","#ffdc73"]],template:function(o,a){o&1&&(r(0,"h3"),m(1,"Barra personalizzata"),n(),r(2,"div",0)(3,"div",1)(4,"div",2),p(5,"it-range",3),n(),r(6,"div",2),p(7,"it-range",4),n()()())},dependencies:[g],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-range-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range label="Esempio ngModel" [(ngModel)]="rangeValue"> /{/{ rangeValue /}/} % </it-range>
    </div>
    <div class="col-sm-12 col-md-6">
      <form [formGroup]="formGroup">
        <it-range label="Esempio FormGroup" [min]="0" [max]="1000" [step]="2" formControlName="range">
          Valore selezionato: /{/{ formGroup.get('range').value /}/}
        </it-range>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-range-example',
  templateUrl: './range-example.component.html',
  standalone: false,
})
export class RangeExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rangeValue = 50;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      range: [null],
    });
  }
}`],["html",`<h3>Barra personalizzata</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-primary)" rightColor="var(--bs-gray-300)"></it-range>
    </div>

    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-warning)" rightColor="#ffdc73"></it-range>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-range-custom-colors',
  templateUrl: './range-custom-colors.component.html',
  standalone: false,
})
export class RangeCustomColorsComponent {}`]],template:function(o,a){o&1&&p(0,"it-range-example")(1,"it-source-display",0)(2,"it-range-custom-colors")(3,"it-source-display",1)},dependencies:[j,A,U],encapsulation:2});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.component=T.components.find(i=>i.name==="ItRangeComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["it-range-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,a){o&1&&(r(0,"h1",0),m(1,"Range"),n(),r(2,"p",1),m(3,"Input di intervallo personalizzato per uno stile uniforme su tutti i browser e personalizzazione integrata."),n(),r(4,"it-tab-container")(5,"it-tab-item",2),p(6,"it-range-examples"),n(),r(7,"it-tab-item",3)(8,"h3"),m(9,"ItRangeComponent"),n(),p(10,"it-api-parameters",4),n()()),o&2&&(l(10),d("component",a.component))},dependencies:[P,B,V,L],encapsulation:2});let t=e;return t})();var Q=[{path:"",component:k}],q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[h.forChild(Q),h]});let t=e;return t})();var be=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[E,W,q,D,z]});let t=e;return t})();export{be as RangeModule};
