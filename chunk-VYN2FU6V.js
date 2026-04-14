import{a as N,b,c as V,d as j}from"./chunk-ZWYEEAVU.js";import{Q as I,T as L,ca as F,ja as d,ka as f,la as P,ma as z,sa as H}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as C}from"./chunk-F32MIGDQ.js";import{m as T}from"./chunk-66PP3R5H.js";import{Db as x,Eb as g,Fb as k,Gb as r,Hb as i,Ib as t,Jb as m,Ub as w,V as v,Wa as a,Wb as y,dc as E,fc as p,hc as B,ib as l,jb as h,jc as _,kc as M,lc as D}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";function K(e,J){if(e&1&&(i(0,"it-steppers-item",4)(1,"div",5),p(2),t()()),e&2){let s=J.$implicit,n=y();r("label",s),a(),E("text-white",n.isDark),a(),B(" ",s," ")}}var W=(()=>{class e{constructor(){this.activeStep=1,this.steps=["Primo contenuto","Secondo contenuto","Terzo contenuto"],this.isDark=!1,this.isConfirmLoading=!1,this.isSaveLoading=!1}onForwardClick(s){s<this.steps.length-1&&this.activeStep++,this.isConfirmLoading=!1,this.isSaveLoading=!1}onBackClick(s){s>0&&this.activeStep--,this.isConfirmLoading=!1,this.isSaveLoading=!1}onConfirmClick(){this.isConfirmLoading=!0}onSaveClick(){this.isSaveLoading=!0}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-steppers-dynamic-example"]],standalone:!1,decls:8,vars:9,consts:[[1,"bd-example"],[1,"mb-3"],["label","Modalit\xE0 dark",3,"ngModelChange","ngModel"],[3,"backClick","forwardClick","confirmClick","saveClick","activeStep","dark","disableBackButton","showForwardButton","showSaveButton","showConfirmButton","confirmLoading","saveLoading"],[3,"label"],[1,"container"]],template:function(n,o){n&1&&(i(0,"h3"),p(1,"Stepper"),t(),i(2,"div",0)(3,"div",1)(4,"it-checkbox",2),D("ngModelChange",function(c){return M(o.isDark,c)||(o.isDark=c),c}),t()(),i(5,"it-steppers-container",3),w("backClick",function(c){return o.onBackClick(c)})("forwardClick",function(c){return o.onForwardClick(c)})("confirmClick",function(){return o.onConfirmClick()})("saveClick",function(){return o.onSaveClick()}),g(6,K,3,4,"it-steppers-item",4,x),t()()),n&2&&(a(4),_("ngModel",o.isDark),a(),r("activeStep",o.activeStep)("dark",o.isDark)("disableBackButton",o.activeStep===0)("showForwardButton",o.activeStep<o.steps.length-1)("showSaveButton",o.activeStep===0)("showConfirmButton",o.activeStep===o.steps.length-1)("confirmLoading",o.isConfirmLoading)("saveLoading",o.isSaveLoading),a(),k(o.steps))},dependencies:[f,d,H,I,L],encapsulation:2})}}return e})();var A=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-steppers-header-example"]],standalone:!1,decls:23,vars:3,consts:[[1,"bd-example"],["showBackButton","false","showForwardButton","false",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["label","Primo contenuto","icon","calendar","iconTitle","Calendario"],["label","Secondo contenuto","icon","locked","iconTitle","Lucchetto"],["label","Terzo contenuto","icon","settings","iconTitle","Impostazioni"],["steppersNumber","true","showBackButton","false","showForwardButton","false",3,"activeStep"]],template:function(n,o){n&1&&(i(0,"h3"),p(1,"Varianti intestazione"),t(),i(2,"h4"),p(3,"Solo testo"),t(),i(4,"div",0)(5,"it-steppers-container",1),m(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),t()(),i(9,"h4"),p(10,"Testo e icone"),t(),i(11,"div",0)(12,"it-steppers-container",1),m(13,"it-steppers-item",5)(14,"it-steppers-item",6)(15,"it-steppers-item",7),t()(),i(16,"h4"),p(17,"Ordine degli step"),t(),i(18,"div",0)(19,"it-steppers-container",8),m(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),t()()),n&2&&(a(5),r("activeStep",1),a(7),r("activeStep",1),a(7),r("activeStep",1))},dependencies:[f,d],encapsulation:2})}}return e})();var O=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-steppers-mobile-example"]],standalone:!1,decls:30,vars:4,consts:[[1,"bd-example","mobile-examples"],["showHeader","false","progressStyle","progress",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["showHeader","false","progressStyle","dots",3,"activeStep"],[1,"bd-example"],["showHeader","false","showSaveButton","true",3,"activeStep"],["showHeader","false","showForwardButton","false","showConfirmButton","true",3,"activeStep"]],template:function(n,o){n&1&&(i(0,"h3"),p(1,"Varianti navigazione per mobile"),t(),i(2,"h4"),p(3,"Progress bar"),t(),i(4,"div",0)(5,"it-steppers-container",1),m(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),t()(),i(9,"h4"),p(10,"Pallini"),t(),i(11,"div",0)(12,"it-steppers-container",5),m(13,"it-steppers-item",2)(14,"it-steppers-item",3)(15,"it-steppers-item",4),t()(),i(16,"h4"),p(17,"Pulsante salva"),t(),i(18,"div",6)(19,"it-steppers-container",7),m(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),t()(),i(23,"h4"),p(24,"Pulsante conferma"),t(),i(25,"div",6)(26,"it-steppers-container",8),m(27,"it-steppers-item",2)(28,"it-steppers-item",3)(29,"it-steppers-item",4),t()()),n&2&&(a(5),r("activeStep",1),a(7),r("activeStep",1),a(7),r("activeStep",1),a(7),r("activeStep",1))},dependencies:[f,d],styles:[`@media screen and (min-width:992px){.bd-example.mobile-examples .steppers-progress{display:block}.bd-example.mobile-examples .steppers-dots{display:flex}}
`],encapsulation:2})}}return e})();var G=(()=>{class e{constructor(){}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-steppers-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Stepper</h3>
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
export class SteppersMobileExampleComponent {}`]],template:function(n,o){n&1&&m(0,"it-steppers-dynamic-example")(1,"it-source-display",0)(2,"it-steppers-header-example")(3,"it-source-display",1)(4,"it-steppers-mobile-example")(5,"it-source-display",2)},dependencies:[N,W,A,O],encapsulation:2})}}return e})();var $=(()=>{class e{constructor(){this.steppersContainer=b.components.find(s=>s.name==="ItSteppersContainerComponent"),this.steppersItem=b.components.find(s=>s.name==="ItSteppersItemComponent")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-steppers-index"]],standalone:!1,decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,o){n&1&&(i(0,"h1",0),p(1,"Steppers"),t(),i(2,"p",1),p(3,` Gli \u201CStepper\u201D mostrano l\u2019avanzamento del progresso di una procedura a pi\xF9 passi attraverso la numerazione dei passi stessi.
`),t(),i(4,"it-tab-container")(5,"it-tab-item",2),m(6,"it-steppers-examples"),t(),i(7,"it-tab-item",3)(8,"h2"),p(9,"Steppers container"),t(),m(10,"it-api-parameters",4),i(11,"h2"),p(12,"Steppers item"),t(),m(13,"it-api-parameters",4),t()()),n&2&&(a(10),r("component",o.steppersContainer),a(3),r("component",o.steppersItem))},dependencies:[V,z,P,G],encapsulation:2})}}return e})();var ee=[{path:"",component:$}],q=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=v({imports:[C.forChild(ee),C]})}}return e})();var Be=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=v({imports:[T,j,F,q]})}}return e})();export{Be as SteppersModule};
