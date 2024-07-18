import{a as g,b as I,c as z,d as j}from"./chunk-XTG6MU3L.js";import{T as H,W as N,fa as V,k as P,l as _,ma as f,na as u,sa as O}from"./chunk-R4LXWPNQ.js";import{l as b}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Cb as y,Db as E,Gc as M,Mc as T,Nb as r,Pb as B,Ra as a,Rb as D,Sb as F,Tb as L,U as h,ba as c,ca as C,gb as k,ib as m,kb as w,ub as n,vb as i,wb as l}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function Q(t,e){if(t&1&&(n(0,"it-steppers-item",5)(1,"div",6),r(2),i()()),t&2){let x=e.$implicit,p=E();m("label",x),a(),w("text-white",p.isDark),a(),B(" ",x," ")}}var A=(()=>{let e=class e{constructor(){this.activeStep=1,this.steps=["Primo contenuto","Secondo contenuto","Terzo contenuto"],this.isDark=!1,this.isConfirmLoading=!1,this.isSaveLoading=!1}onForwardClick(p){p<this.steps.length-1&&this.activeStep++,this.isConfirmLoading=!1,this.isSaveLoading=!1}onBackClick(p){p>0&&this.activeStep--,this.isConfirmLoading=!1,this.isSaveLoading=!1}onConfirmClick(){this.isConfirmLoading=!0}onSaveClick(){this.isSaveLoading=!0}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-dynamic-example"]],decls:7,vars:10,consts:[[1,"bd-example"],[1,"mb-3"],["label","Modalit\xE0 dark",3,"ngModelChange","ngModel"],[3,"backClick","forwardClick","confirmClick","saveClick","activeStep","dark","disableBackButton","showForwardButton","showSaveButton","showConfirmButton","confirmLoading","saveLoading"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"container"]],template:function(o,s){o&1&&(n(0,"h3"),r(1,"Stepper"),i(),n(2,"div",0)(3,"div",1)(4,"it-checkbox",2),L("ngModelChange",function(d){return F(s.isDark,d)||(s.isDark=d),d}),i()(),n(5,"it-steppers-container",3),y("backClick",function(d){return s.onBackClick(d)})("forwardClick",function(d){return s.onForwardClick(d)})("confirmClick",function(){return s.onConfirmClick()})("saveClick",function(){return s.onSaveClick()}),k(6,Q,3,4,"it-steppers-item",4),i()()),o&2&&(a(4),D("ngModel",s.isDark),a(),m("activeStep",s.activeStep)("dark",s.isDark)("disableBackButton",s.activeStep===0)("showForwardButton",s.activeStep<s.steps.length-1)("showSaveButton",s.activeStep===0)("showConfirmButton",s.activeStep===s.steps.length-1)("confirmLoading",s.isConfirmLoading)("saveLoading",s.isSaveLoading),a(),m("ngForOf",s.steps))},dependencies:[M,u,f,O,H,N],encapsulation:2});let t=e;return t})();var G=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-header-example"]],decls:23,vars:3,consts:[[1,"bd-example"],["showBackButton","false","showForwardButton","false",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["label","Primo contenuto","icon","calendar"],["label","Secondo contenuto","icon","locked"],["label","Terzo contenuto","icon","settings"],["steppersNumber","true","showBackButton","false","showForwardButton","false",3,"activeStep"]],template:function(o,s){o&1&&(n(0,"h3"),r(1,"Varianti intestazione"),i(),n(2,"h4"),r(3,"Solo testo"),i(),n(4,"div",0)(5,"it-steppers-container",1),l(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),i()(),n(9,"h4"),r(10,"Testo e icone"),i(),n(11,"div",0)(12,"it-steppers-container",1),l(13,"it-steppers-item",5)(14,"it-steppers-item",6)(15,"it-steppers-item",7),i()(),n(16,"h4"),r(17,"Ordine degli step"),i(),n(18,"div",0)(19,"it-steppers-container",8),l(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),i()()),o&2&&(a(5),m("activeStep",1),a(7),m("activeStep",1),a(7),m("activeStep",1))},dependencies:[u,f],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-mobile-example"]],decls:30,vars:4,consts:[[1,"bd-example","mobile-examples"],["showHeader","false","progressStyle","progress",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["showHeader","false","progressStyle","dots",3,"activeStep"],[1,"bd-example"],["showHeader","false","showSaveButton","true",3,"activeStep"],["showHeader","false","showForwardButton","false","showConfirmButton","true",3,"activeStep"]],template:function(o,s){o&1&&(n(0,"h3"),r(1,"Varianti navigazione per mobile"),i(),n(2,"h4"),r(3,"Progress bar"),i(),n(4,"div",0)(5,"it-steppers-container",1),l(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),i()(),n(9,"h4"),r(10,"Pallini"),i(),n(11,"div",0)(12,"it-steppers-container",5),l(13,"it-steppers-item",2)(14,"it-steppers-item",3)(15,"it-steppers-item",4),i()(),n(16,"h4"),r(17,"Pulsante salva"),i(),n(18,"div",6)(19,"it-steppers-container",7),l(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),i()(),n(23,"h4"),r(24,"Pulsante conferma"),i(),n(25,"div",6)(26,"it-steppers-container",8),l(27,"it-steppers-item",2)(28,"it-steppers-item",3)(29,"it-steppers-item",4),i()()),o&2&&(a(5),m("activeStep",1),a(7),m("activeStep",1),a(7),m("activeStep",1),a(7),m("activeStep",1))},dependencies:[u,f],styles:[`@media screen and (min-width: 992px){.bd-example.mobile-examples .steppers-progress{display:block}.bd-example.mobile-examples .steppers-dots{display:flex}}
`],encapsulation:2});let t=e;return t})();var q=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-examples"]],decls:6,vars:0,consts:[["html",`<h3>Stepper</h3>
<div class="bd-example">
  <div class="mb-3">
    <it-checkbox label="Modalit\xE0 dark" [(ngModel)]="isDark"></it-checkbox>
  </div>

  <it-steppers-container
    [activeStep]="activeStep"
    [dark]="isDark"
    [disableBackButton]="activeStep === 0"
    [showForwardButton]="activeStep < steps.length - 1"
    [showSaveButton]="activeStep === 0"
    [showConfirmButton]="activeStep === steps.length - 1"
    (backClick)="onBackClick($event)"
    (forwardClick)="onForwardClick($event)"
    (confirmClick)="onConfirmClick()"
    [confirmLoading]="isConfirmLoading"
    (saveClick)="onSaveClick()"
    [saveLoading]="isSaveLoading">
    <it-steppers-item *ngFor="let step of steps" [label]="step">
      <div class="container" [class.text-white]="isDark">
        /{/{ step /}/}
      </div>
    </it-steppers-item>
  </it-steppers-container>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-steppers-dynamic-example',
  templateUrl: './steppers-dynamic-example.component.html',
})
export class SteppersDynamicExampleComponent {
  /**
   * Step index
   */
  activeStep = 1;
  steps = ['Primo contenuto', 'Secondo contenuto', 'Terzo contenuto'];

  isDark = false;

  isConfirmLoading = false;
  isSaveLoading = false;

  onForwardClick(activeStep: number): void {
    if (activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }
  onBackClick(activeStep: number): void {
    if (activeStep > 0) {
      this.activeStep--;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }

  onConfirmClick(): void {
    this.isConfirmLoading = true;
  }

  onSaveClick(): void {
    this.isSaveLoading = true;
  }
}`],["html",`<h3>Varianti intestazione</h3>
<h4>Solo testo</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Testo e icone</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto" icon="calendar"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto" icon="locked"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto" icon="settings"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Ordine degli step</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" steppersNumber="true" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-steppers-header-example',
  templateUrl: './steppers-header-example.component.html',
})
export class SteppersHeaderExampleComponent {}`],["html",`<h3>Varianti navigazione per mobile</h3>
<h4>Progress bar</h4>
<div class="bd-example mobile-examples">
  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="progress">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pallini</h4>
<div class="bd-example mobile-examples">
  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="dots">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pulsante salva</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showHeader="false" showSaveButton="true">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pulsante conferma</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showHeader="false" showForwardButton="false" showConfirmButton="true">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>`,"typescript",`import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'it-steppers-mobile-example',
  templateUrl: './steppers-mobile-example.component.html',
  styleUrls: ['steppers-mobile-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SteppersMobileExampleComponent {}`]],template:function(o,s){o&1&&l(0,"it-steppers-dynamic-example")(1,"it-source-display",0)(2,"it-steppers-header-example")(3,"it-source-display",1)(4,"it-steppers-mobile-example")(5,"it-source-display",2)},dependencies:[z,A,G,$]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.steppersContainer=g.components.find(p=>p.name==="ItSteppersContainerComponent"),this.steppersItem=g.components.find(p=>p.name==="ItSteppersItemComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-index"]],decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,s){o&1&&(n(0,"h1",0),r(1,"Steppers"),i(),n(2,"p",1),r(3,` Gli \u201CStepper\u201D mostrano l\u2019avanzamento del progresso di una procedura a pi\xF9 passi attraverso la numerazione dei passi stessi.
`),i(),n(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-steppers-examples"),i(),n(7,"it-tab-item",3)(8,"h2"),r(9,"Steppers container"),i(),l(10,"it-api-parameters",4),n(11,"h2"),r(12,"Steppers item"),i(),l(13,"it-api-parameters",4),i()()),o&2&&(a(10),m("component",s.steppersContainer),a(3),m("component",s.steppersItem))},dependencies:[I,_,P,q],encapsulation:2});let t=e;return t})();var ee=[{path:"",component:J}],K=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=h({imports:[b.forChild(ee),b]});let t=e;return t})();var De=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=h({imports:[T,j,V,K]});let t=e;return t})();export{De as SteppersModule};
