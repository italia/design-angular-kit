import{a as j,b as x,c as U,d as W}from"./chunk-CQV3UQHT.js";import{Q as P,T as _,ca as z,ja as f,ka as u,la as H,ma as N,sa as V}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as b}from"./chunk-DVW5EFKD.js";import{m as F}from"./chunk-I647ZKKI.js";import{Eb as k,Fb as w,Gb as y,Hb as m,Ib as n,Jb as i,Kb as l,Sb as E,Tb as B,Wa as r,Y as h,ac as T,cc as a,ec as D,fb as c,gb as C,gc as L,hc as I,ic as M}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function R(t,e){if(t&1&&(n(0,"it-steppers-item",4)(1,"div",5),a(2),i()()),t&2){let g=e.$implicit,p=B();m("label",g),r(),T("text-white",p.isDark),r(),D(" ",g," ")}}var G=(()=>{let e=class e{constructor(){this.activeStep=1,this.steps=["Primo contenuto","Secondo contenuto","Terzo contenuto"],this.isDark=!1,this.isConfirmLoading=!1,this.isSaveLoading=!1}onForwardClick(p){p<this.steps.length-1&&this.activeStep++,this.isConfirmLoading=!1,this.isSaveLoading=!1}onBackClick(p){p>0&&this.activeStep--,this.isConfirmLoading=!1,this.isSaveLoading=!1}onConfirmClick(){this.isConfirmLoading=!0}onSaveClick(){this.isSaveLoading=!0}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-dynamic-example"]],standalone:!1,decls:8,vars:9,consts:[[1,"bd-example"],[1,"mb-3"],["label","Modalit\xE0 dark",3,"ngModelChange","ngModel"],[3,"backClick","forwardClick","confirmClick","saveClick","activeStep","dark","disableBackButton","showForwardButton","showSaveButton","showConfirmButton","confirmLoading","saveLoading"],[3,"label"],[1,"container"]],template:function(o,s){o&1&&(n(0,"h3"),a(1,"Stepper"),i(),n(2,"div",0)(3,"div",1)(4,"it-checkbox",2),M("ngModelChange",function(d){return I(s.isDark,d)||(s.isDark=d),d}),i()(),n(5,"it-steppers-container",3),E("backClick",function(d){return s.onBackClick(d)})("forwardClick",function(d){return s.onForwardClick(d)})("confirmClick",function(){return s.onConfirmClick()})("saveClick",function(){return s.onSaveClick()}),w(6,R,3,4,"it-steppers-item",4,k),i()()),o&2&&(r(4),L("ngModel",s.isDark),r(),m("activeStep",s.activeStep)("dark",s.isDark)("disableBackButton",s.activeStep===0)("showForwardButton",s.activeStep<s.steps.length-1)("showSaveButton",s.activeStep===0)("showConfirmButton",s.activeStep===s.steps.length-1)("confirmLoading",s.isConfirmLoading)("saveLoading",s.isSaveLoading),r(),y(s.steps))},dependencies:[u,f,V,P,_],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-header-example"]],standalone:!1,decls:23,vars:3,consts:[[1,"bd-example"],["showBackButton","false","showForwardButton","false",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["label","Primo contenuto","icon","calendar","iconTitle","Calendario"],["label","Secondo contenuto","icon","locked","iconTitle","Lucchetto"],["label","Terzo contenuto","icon","settings","iconTitle","Impostazioni"],["steppersNumber","true","showBackButton","false","showForwardButton","false",3,"activeStep"]],template:function(o,s){o&1&&(n(0,"h3"),a(1,"Varianti intestazione"),i(),n(2,"h4"),a(3,"Solo testo"),i(),n(4,"div",0)(5,"it-steppers-container",1),l(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),i()(),n(9,"h4"),a(10,"Testo e icone"),i(),n(11,"div",0)(12,"it-steppers-container",1),l(13,"it-steppers-item",5)(14,"it-steppers-item",6)(15,"it-steppers-item",7),i()(),n(16,"h4"),a(17,"Ordine degli step"),i(),n(18,"div",0)(19,"it-steppers-container",8),l(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),i()()),o&2&&(r(5),m("activeStep",1),r(7),m("activeStep",1),r(7),m("activeStep",1))},dependencies:[u,f],encapsulation:2});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-mobile-example"]],standalone:!1,decls:30,vars:4,consts:[[1,"bd-example","mobile-examples"],["showHeader","false","progressStyle","progress",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["showHeader","false","progressStyle","dots",3,"activeStep"],[1,"bd-example"],["showHeader","false","showSaveButton","true",3,"activeStep"],["showHeader","false","showForwardButton","false","showConfirmButton","true",3,"activeStep"]],template:function(o,s){o&1&&(n(0,"h3"),a(1,"Varianti navigazione per mobile"),i(),n(2,"h4"),a(3,"Progress bar"),i(),n(4,"div",0)(5,"it-steppers-container",1),l(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),i()(),n(9,"h4"),a(10,"Pallini"),i(),n(11,"div",0)(12,"it-steppers-container",5),l(13,"it-steppers-item",2)(14,"it-steppers-item",3)(15,"it-steppers-item",4),i()(),n(16,"h4"),a(17,"Pulsante salva"),i(),n(18,"div",6)(19,"it-steppers-container",7),l(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),i()(),n(23,"h4"),a(24,"Pulsante conferma"),i(),n(25,"div",6)(26,"it-steppers-container",8),l(27,"it-steppers-item",2)(28,"it-steppers-item",3)(29,"it-steppers-item",4),i()()),o&2&&(r(5),m("activeStep",1),r(7),m("activeStep",1),r(7),m("activeStep",1),r(7),m("activeStep",1))},dependencies:[u,f],styles:[`@media screen and (min-width: 992px){.bd-example.mobile-examples .steppers-progress{display:block}.bd-example.mobile-examples .steppers-dots{display:flex}}
`],encapsulation:2});let t=e;return t})();var J=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Stepper</h3>
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
    @for (step of steps; track step) {
      <it-steppers-item [label]="step">
        <div class="container" [class.text-white]="isDark">
          /{/{ step /}/}
        </div>
      </it-steppers-item>
    }
  </it-steppers-container>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-steppers-dynamic-example',
  templateUrl: './steppers-dynamic-example.component.html',
  standalone: false,
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
    <it-steppers-item label="Primo contenuto" icon="calendar" iconTitle="Calendario"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto" icon="locked" iconTitle="Lucchetto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto" icon="settings" iconTitle="Impostazioni"></it-steppers-item>
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
  standalone: false,
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
  standalone: false,
})
export class SteppersMobileExampleComponent {}`]],template:function(o,s){o&1&&l(0,"it-steppers-dynamic-example")(1,"it-source-display",0)(2,"it-steppers-header-example")(3,"it-source-display",1)(4,"it-steppers-mobile-example")(5,"it-source-display",2)},dependencies:[j,G,$,q],encapsulation:2});let t=e;return t})();var K=(()=>{let e=class e{constructor(){this.steppersContainer=x.components.find(p=>p.name==="ItSteppersContainerComponent"),this.steppersItem=x.components.find(p=>p.name==="ItSteppersItemComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-steppers-index"]],standalone:!1,decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,s){o&1&&(n(0,"h1",0),a(1,"Steppers"),i(),n(2,"p",1),a(3,` Gli \u201CStepper\u201D mostrano l\u2019avanzamento del progresso di una procedura a pi\xF9 passi attraverso la numerazione dei passi stessi.
`),i(),n(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-steppers-examples"),i(),n(7,"it-tab-item",3)(8,"h2"),a(9,"Steppers container"),i(),l(10,"it-api-parameters",4),n(11,"h2"),a(12,"Steppers item"),i(),l(13,"it-api-parameters",4),i()()),o&2&&(r(10),m("component",s.steppersContainer),r(3),m("component",s.steppersItem))},dependencies:[U,N,H,J],encapsulation:2});let t=e;return t})();var te=[{path:"",component:K}],Q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=h({imports:[b.forChild(te),b]});let t=e;return t})();var Te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=h({imports:[F,W,z,Q]});let t=e;return t})();export{Te as SteppersModule};
