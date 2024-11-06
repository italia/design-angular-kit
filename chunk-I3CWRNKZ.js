import{a as z,b as B,c as L,d as P}from"./chunk-U6QXSFPS.js";import{L as x,M as F,O as S,P as D,Q as w,R as N,Y as G,Z as j,_ as H,ga as R,ha as k,xa as d}from"./chunk-EZQPAPWN.js";import"./chunk-XZP45KYQ.js";import{o as C}from"./chunk-NU7RFJ6M.js";import{$b as E,Cb as r,Db as o,Eb as f,Kb as y,Ua as T,Wb as m,Wc as b,Y as v,Za as p,_b as I,ac as M,ba as g,fa as s,ga as h,qb as l}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var W=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}]}transferChangesHandler(a){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-transfer-default-example"]],decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"transferChanges","options","selected"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio senza form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"Esempio di default"),o(),r(7,"it-transfer",3),y("transferChanges",function(u){return i.transferChangesHandler(u)}),o()()()()),n&2&&(p(7),l("options",i.options)("selected",i.selected))},dependencies:[d],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.transferModel=this.selected}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-transfer-template-form-example"]],decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","ngModel","options"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio con Template Form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"NgModel"),o(),r(7,"it-transfer",3),M("ngModelChange",function(u){return E(i.transferModel,u)||(i.transferModel=u),u}),o()()()()),n&2&&(p(7),I("ngModel",i.transferModel),l("options",i.options))},dependencies:[d,x,S],encapsulation:2});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.formGroup=g(G).group({transfer:[this.selected]})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-transfer-reactive-form-example"]],decls:9,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"formGroup"],["formControlName","transfer",3,"options"]],template:function(n,i){n&1&&(r(0,"h3"),m(1,"Esempio con Reactive Form"),o(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),m(6,"FormGroup"),o(),r(7,"form",3),f(8,"it-transfer",4),o()()()()),n&2&&(p(7),l("formGroup",i.formGroup),p(),l("options",i.options))},dependencies:[d,D,x,F,w,N],encapsulation:2});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-transfer-examples"]],decls:6,vars:0,consts:[["html",`<h3>Esempio senza form</h3>
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
}`]],template:function(n,i){n&1&&f(0,"it-transfer-default-example")(1,"it-source-display",0)(2,"it-transfer-template-form-example")(3,"it-source-display",1)(4,"it-transfer-reactive-form-example")(5,"it-source-display",2)},dependencies:[L,W,A,V],encapsulation:2});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.component=z.components.find(a=>a.name==="ItTransferComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["it-transfer-index"]],decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,i){n&1&&(r(0,"h1",0),m(1,"Transfer"),o(),r(2,"p",1),m(3,"Componente che consente la creazione di liste di checkbox"),o(),f(4,"div",2),r(5,"it-tab-container")(6,"it-tab-item",3),f(7,"it-transfer-examples"),o(),r(8,"it-tab-item",4)(9,"h3"),m(10,"ItTransferComponent"),o(),f(11,"it-api-parameters",5),o()()),n&2&&(p(4),l("innerHTML",i.component.description,T),p(7),l("component",i.component))},dependencies:[B,k,R,q],encapsulation:2});let t=e;return t})();var $=[{path:"",component:J}],K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[C.forChild($),C]});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[K,P,j,H,b]});let t=e;return t})();export{Fe as TransferModule};
