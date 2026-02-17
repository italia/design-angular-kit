import{a as H,b as k,c as z,d as B}from"./chunk-CJGNGVIB.js";import{Ca as f,Q as x,R as F,T as b,U as D,V as S,W as w,ba as N,ca as _,da as G,la as R,ma as j}from"./chunk-HN3BY7NK.js";import"./chunk-MLMGL4QO.js";import{h}from"./chunk-A2FNTR3N.js";import{m as M}from"./chunk-3O7E6U5R.js";import{Hb as l,Ib as o,Jb as n,Kb as p,Ta as T,V as u,Vb as g,Xa as m,Z as C,gc as a,jb as s,kb as v,kc as y,lc as E,mc as I}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var P=(()=>{class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}]}transferChangesHandler(i){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-transfer-default-example"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"transferChanges","options","selected"]],template:function(t,r){t&1&&(o(0,"h3"),a(1,"Esempio senza form"),n(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),a(6,"Esempio di default"),n(),o(7,"it-transfer",3),g("transferChanges",function(c){return r.transferChangesHandler(c)}),n()()()()),t&2&&(m(7),l("options",r.options)("selected",r.selected))},dependencies:[f],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.transferModel=this.selected}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-transfer-template-form-example"]],standalone:!1,decls:8,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","ngModel","options"]],template:function(t,r){t&1&&(o(0,"h3"),a(1,"Esempio con Template Form"),n(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),a(6,"NgModel"),n(),o(7,"it-transfer",3),I("ngModelChange",function(c){return E(r.transferModel,c)||(r.transferModel=c),c}),n()()()()),t&2&&(m(7),y("ngModel",r.transferModel),l("options",r.options))},dependencies:[f,x,b],encapsulation:2})}}return e})();var W=(()=>{class e{constructor(){this.options=[{text:"Item 1",value:1},{text:"Item 2",value:2}],this.selected=[{text:"Item 3",value:3}],this.formGroup=C(N).group({transfer:[this.selected]})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-transfer-reactive-form-example"]],standalone:!1,decls:9,vars:2,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"formGroup"],["formControlName","transfer",3,"options"]],template:function(t,r){t&1&&(o(0,"h3"),a(1,"Esempio con Reactive Form"),n(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),a(6,"FormGroup"),n(),o(7,"form",3),p(8,"it-transfer",4),n()()()()),t&2&&(m(7),l("formGroup",r.formGroup),m(),l("options",r.options))},dependencies:[f,D,x,F,w,S],encapsulation:2})}}return e})();var A=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-transfer-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Esempio senza form</h3>
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
}`]],template:function(t,r){t&1&&p(0,"it-transfer-default-example")(1,"it-source-display",0)(2,"it-transfer-template-form-example")(3,"it-source-display",1)(4,"it-transfer-reactive-form-example")(5,"it-source-display",2)},dependencies:[H,P,U,W],encapsulation:2})}}return e})();var V=(()=>{class e{constructor(){this.component=k.components.find(i=>i.name==="ItTransferComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-transfer-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,r){t&1&&(o(0,"h1",0),a(1,"Transfer"),n(),o(2,"p",1),a(3,"Componente che consente la creazione di liste di checkbox"),n(),p(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-transfer-examples"),n(),o(8,"it-tab-item",4)(9,"h3"),a(10,"ItTransferComponent"),n(),p(11,"it-api-parameters",5),n()()),t&2&&(m(4),l("innerHTML",r.component.description,T),m(7),l("component",r.component))},dependencies:[z,j,R,A],encapsulation:2})}}return e})();var Z=[{path:"",component:V}],q=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=u({imports:[h.forChild(Z),h]})}}return e})();var Fe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=u({imports:[q,B,_,G,M]})}}return e})();export{Fe as TransferModule};
