import{a as z,b as B,c as L,d as P}from"./chunk-CQV3UQHT.js";import{Ca as d,Q as x,R as F,T as S,U as D,V as w,W as N,ba as G,ca as j,da as H,la as R,ma as k}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as C}from"./chunk-DVW5EFKD.js";import{m as b}from"./chunk-I647ZKKI.js";import{Hb as p,Ib as r,Jb as o,Kb as f,Sa as T,Sb as y,Wa as s,Y as v,aa as g,cc as m,fb as l,gb as h,gc as I,hc as E,ic as M}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var W=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}]}transferChangesHandler(a){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["it-transfer-default-example"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"transferChanges","options","selected"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio senza form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"Esempio di default"),o(),r(7,"it-transfer",3),y("transferChanges",function(u){return i.transferChangesHandler(u)}),o()()()()),n&2&&(s(7),p("options",i.options)("selected",i.selected))},dependencies:[d],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.transferModel=this.selected}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["it-transfer-template-form-example"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","ngModel","options"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio con Template Form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"NgModel"),o(),r(7,"it-transfer",3),M("ngModelChange",function(u){return E(i.transferModel,u)||(i.transferModel=u),u}),o()()()()),n&2&&(s(7),I("ngModel",i.transferModel),p("options",i.options))},dependencies:[d,x,S],encapsulation:2});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.formGroup=g(G).group({transfer:[this.selected]})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["it-transfer-reactive-form-example"]],standalone:!1,decls:9,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"formGroup"],["formControlName","transfer",3,"options"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio con Reactive Form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"FormGroup"),o(),r(7,"form",3),f(8,"it-transfer",4),o()()()()),n&2&&(s(7),p("formGroup",i.formGroup),s(),p("options",i.options))},dependencies:[d,D,x,F,w,N],encapsulation:2});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["it-transfer-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Esempio senza form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>Esempio di default</h5>
      <it-transfer [options]="options" [selected]="selected" (transferChanges)="transferChangesHandler($event)"></it-transfer>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-default-example',
  templateUrl: './transfer-default-example.component.html',
  standalone: false,
})
export class TransferDefaultExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transferChangesHandler(_: TransferItem<number>[]) {
    // handle changing data
  }
}`],["html",`<h3>Esempio con Template Form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>NgModel</h5>
      <it-transfer [(ngModel)]="transferModel" [options]="options"></it-transfer>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-template-form-example',
  templateUrl: './transfer-template-form-example.component.html',
  standalone: false,
})
export class TransferTemplateFormExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  transferModel = this.selected;
}`],["html",`<h3>Esempio con Reactive Form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-transfer formControlName="transfer" [options]="options"></it-transfer>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-reactive-form-example',
  templateUrl: './transfer-reactive-form-example.component.html',
  standalone: false,
})
export class TransferReactiveFormExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  readonly formGroup = inject(FormBuilder).group({
    transfer: [this.selected],
  });
}`]],template:function(n,i){n&1&&f(0,"it-transfer-default-example")(1,"it-source-display",0)(2,"it-transfer-template-form-example")(3,"it-source-display",1)(4,"it-transfer-reactive-form-example")(5,"it-source-display",2)},dependencies:[z,W,A,V],encapsulation:2});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.component=B.components.find(a=>a.name==="ItTransferComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["it-transfer-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,i){n&1&&(r(0,"h1",0),m(1,"Transfer"),o(),r(2,"p",1),m(3,"Componente che consente la creazione di liste di checkbox"),o(),f(4,"div",2),r(5,"it-tab-container")(6,"it-tab-item",3),f(7,"it-transfer-examples"),o(),r(8,"it-tab-item",4)(9,"h3"),m(10,"ItTransferComponent"),o(),f(11,"it-api-parameters",5),o()()),n&2&&(s(4),p("innerHTML",i.component.description,T),s(7),p("component",i.component))},dependencies:[L,k,R,q],encapsulation:2});let t=e;return t})();var $=[{path:"",component:J}],K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[C.forChild($),C]});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[K,P,j,H,b]});let t=e;return t})();export{Fe as TransferModule};
