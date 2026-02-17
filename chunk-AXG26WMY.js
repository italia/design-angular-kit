import{a as B,b as j,c as T,d as _}from"./chunk-K63BAWCR.js";import{Q as E,R as b,T as F,U as I,V as w,W as G,ba as S,ca as N,da as z,la as D,ma as V,va as f}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as v}from"./chunk-A2FNTR3N.js";import{m as M}from"./chunk-3O7E6U5R.js";import{Hb as p,Ib as t,Jb as n,Kb as s,V as c,Xa as m,Z as x,gc as a,ic as C,jb as l,kb as u,kc as h,lc as y,mc as R}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var P=(()=>{class e{constructor(){this.formBuilder=x(S),this.rangeValue=50,this.formGroup=this.formBuilder.group({range:[null]})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-range-example"]],standalone:!1,decls:9,vars:7,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["label","Esempio ngModel",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio FormGroup","formControlName","range",3,"min","max","step"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"it-range",3),R("ngModelChange",function(g){return y(i.rangeValue,g)||(i.rangeValue=g),g}),a(4),n()(),t(5,"div",2)(6,"form",4)(7,"it-range",5),a(8),n()()()()()),o&2&&(m(3),h("ngModel",i.rangeValue),m(),C(" ",i.rangeValue," % "),m(2),p("formGroup",i.formGroup),m(),p("min",0)("max",1e3)("step",2),m(),C(" Valore selezionato: ",i.formGroup.get("range").value," "))},dependencies:[f,I,E,b,G,w,F],encapsulation:2})}}return e})();var W=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-range-custom-colors"]],standalone:!1,decls:8,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["leftColor","var(--bs-primary)","rightColor","var(--bs-gray-300)"],["leftColor","var(--bs-warning)","rightColor","#ffdc73"]],template:function(o,i){o&1&&(t(0,"h3"),a(1,"Barra personalizzata"),n(),t(2,"div",0)(3,"div",1)(4,"div",2),s(5,"it-range",3),n(),t(6,"div",2),s(7,"it-range",4),n()()())},dependencies:[f],encapsulation:2})}}return e})();var A=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-range-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<div class="bd-example">
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
export class RangeCustomColorsComponent {}`]],template:function(o,i){o&1&&s(0,"it-range-example")(1,"it-source-display",0)(2,"it-range-custom-colors")(3,"it-source-display",1)},dependencies:[B,P,W],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){this.component=j.components.find(r=>r.name==="ItRangeComponent")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-range-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,i){o&1&&(t(0,"h1",0),a(1,"Range"),n(),t(2,"p",1),a(3,"Input di intervallo personalizzato per uno stile uniforme su tutti i browser e personalizzazione integrata."),n(),t(4,"it-tab-container")(5,"it-tab-item",2),s(6,"it-range-examples"),n(),t(7,"it-tab-item",3)(8,"h3"),a(9,"ItRangeComponent"),n(),s(10,"it-api-parameters",4),n()()),o&2&&(m(10),p("component",i.component))},dependencies:[T,V,D,A],encapsulation:2})}}return e})();var K=[{path:"",component:U}],L=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[v.forChild(K),v]})}}return e})();var ye=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[M,_,L,z,N]})}}return e})();export{ye as RangeModule};
