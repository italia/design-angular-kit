import{a as _,b as B,c as j,d as q}from"./chunk-XTG6MU3L.js";import{h as H,k as L,l as N,ra as m}from"./chunk-R4LXWPNQ.js";import{l as P}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as M,Cb as b,Db as C,Hc as z,Lc as F,Mb as V,Mc as O,Na as I,Nb as l,Pb as E,Ra as r,U as v,Ub as U,_b as w,ac as S,ba as s,ca as g,gb as k,ib as c,la as h,ma as x,ub as n,vb as o,wb as u}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";var A=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-example"]],decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","triggers","click",1,"btn","btn-lg","btn-danger"]],template:function(i,p){i&1&&(n(0,"h3"),l(1,"Esempio"),o(),n(2,"div",0)(3,"p",1)(4,"button",2),l(5," Clicca per attivare/disattivare il tooltip "),o()()())},dependencies:[m]});let e=t;return e})();var G=(()=>{let t=class t{constructor(){this.currentPlacement="right"}changeCurrentPlacement(){switch(this.currentPlacement){case"right":this.currentPlacement="top";break;case"top":this.currentPlacement="left";break;case"left":this.currentPlacement="bottom";break;case"bottom":this.currentPlacement="right";break}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-placements-example"]],decls:17,vars:1,consts:[[1,"bd-example"],[1,"example-section","mb-5"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","top",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","right",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","left",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","bottom",1,"btn","btn-outline-secondary"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","it-title","Titolo del Tooltip","triggers","click",1,"btn","btn-lg","btn-danger","me-4",3,"tooltipPlacement"],["type","button",1,"btn","btn-lg","btn-primary",3,"click"]],template:function(i,p){i&1&&(n(0,"h3"),l(1,"Le quattro direzioni"),o(),n(2,"div",0)(3,"p",1)(4,"button",2),l(5," Tooltip in alto "),o(),n(6,"button",3),l(7," Tooltip a destra "),o(),n(8,"button",4),l(9," Tooltip a sinistra "),o(),n(10,"button",5),l(11," Tooltip in basso "),o()(),n(12,"p",6)(13,"button",7),l(14," Clicca per il tooltip ricollocabile "),o(),n(15,"button",8),b("click",function(){return p.changeCurrentPlacement()}),l(16,"Cambia il collocamento della tooltip"),o()()()),i&2&&(r(13),c("tooltipPlacement",p.currentPlacement))},dependencies:[m]});let e=t;return e})();function tt(e,t){if(e&1&&(n(0,"div"),l(1),w(2,"date"),o()),e&2){let y=C();r(),E("Ultima emissione dell'evento shown = ",S(2,1,y.shownTime,"long"),"")}}function et(e,t){if(e&1&&(n(0,"div"),l(1),w(2,"date"),o()),e&2){let y=C();r(),E("Ultima emissione dell'evento hidden = ",S(2,1,y.hiddenTime,"long"),"")}}var J=(()=>{let t=class t{constructor(){this.showTime="",this.shownTime="",this.insertedTime="",this.hideTime="",this.hiddenTime=""}logShow(){this.showTime=new Date().toISOString()}logShown(){this.shownTime=new Date().toISOString()}logInserted(){this.insertedTime=new Date().toISOString()}logHide(){this.hideTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-events-example"]],decls:12,vars:2,consts:[["destructibleTooltip","itTooltip"],[1,"bd-example"],[1,"example-section"],["itButton","danger","size","lg","itTooltip","Tooltip di esempio",1,"me-4",3,"shownEvent","hiddenEvent"],["itButton","primary","size","lg",3,"click"],[1,"tooltip-events","mt-4"],[4,"ngIf"]],template:function(i,p){if(i&1){let f=M();n(0,"h3"),l(1,"Eventi tooltip"),o(),n(2,"div",1)(3,"p",2)(4,"button",3,0),b("shownEvent",function(){return h(f),x(p.logShown())})("hiddenEvent",function(){return h(f),x(p.logHidden())}),l(6," Clicca per il tooltip distruttibile "),o(),n(7,"button",4),b("click",function(){h(f);let Y=V(5);return x(Y.dispose())}),l(8,"Distruggi il tooltip"),o()(),n(9,"div",5),k(10,tt,3,4,"div",6)(11,et,3,4,"div",6),o()()}i&2&&(r(10),c("ngIf",p.shownTime),r(),c("ngIf",p.hiddenTime))},dependencies:[z,H,m,F]});let e=t;return e})();var K=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-disabled-example"]],decls:11,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["itTooltip","Popover disabilitato",1,"d-inline-block"],["type","button","disabled","",1,"btn","btn-primary"]],template:function(i,p){i&1&&(n(0,"h3"),l(1,"Elementi disabilitati"),o(),n(2,"div",0)(3,"p",1)(4,"span",2)(5,"button",3),l(6,"Elemento disabilitato con popover abilitato"),o()()(),n(7,"p",1)(8,"span",2)(9,"button",3),l(10,"Elemento attivo con popover disabilitato"),o()()()())},dependencies:[m]});let e=t;return e})();var Q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-config-example"]],features:[U([])],decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio",1,"btn","btn-lg","btn-danger"]],template:function(i,p){i&1&&(n(0,"h3"),l(1,"Configurazione globale dei tooltip"),o(),n(2,"div",0)(3,"p",1)(4,"button",2),l(5," Clicca per attivare/disattivare il tooltip preconfigurato "),o()()())},dependencies:[m]});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-examples"]],decls:10,vars:0,consts:[["html",`<h3>Esempio</h3>
<div class="bd-example">
  <p class="example-section">
    <button type="button" class="btn btn-lg btn-danger" itTooltip="Tooltip di esempio" triggers="click">
      Clicca per attivare/disattivare il tooltip
    </button>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.scss'],
})
export class TooltipExampleComponent {}`],["html",`<h3>Le quattro direzioni</h3>
<div class="bd-example">
  <p class="example-section mb-5">
    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="top">
      Tooltip in alto
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="right">
      Tooltip a destra
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="left">
      Tooltip a sinistra
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="bottom">
      Tooltip in basso
    </button>
  </p>

  <p class="example-section">
    <button
      type="button"
      class="btn btn-lg btn-danger me-4"
      itTooltip="Tooltip di esempio"
      it-title="Titolo del Tooltip"
      [tooltipPlacement]="currentPlacement"
      triggers="click">
      Clicca per il tooltip ricollocabile
    </button>

    <button type="button" class="btn btn-lg btn-primary" (click)="changeCurrentPlacement()">Cambia il collocamento della tooltip</button>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';
import { ElementPlacement } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-tooltip-placements-example',
  templateUrl: './tooltip-placements-example.component.html',
  styleUrls: ['./tooltip-placements-example.component.scss'],
})
export class TooltipPlacementsExampleComponent {
  currentPlacement: ElementPlacement = 'right';

  changeCurrentPlacement() {
    switch (this.currentPlacement) {
      case 'right':
        this.currentPlacement = 'top';
        break;
      case 'top':
        this.currentPlacement = 'left';
        break;
      case 'left':
        this.currentPlacement = 'bottom';
        break;
      case 'bottom':
        this.currentPlacement = 'right';
        break;
    }
  }
}`],["html",`<h3>Elementi disabilitati</h3>
<div class="bd-example">
  <p class="example-section">
    <span class="d-inline-block" itTooltip="Popover disabilitato">
      <button class="btn btn-primary" type="button" disabled>Elemento disabilitato con popover abilitato</button>
    </span>
  </p>

  <p class="example-section">
    <span class="d-inline-block" itTooltip="Popover disabilitato">
      <button class="btn btn-primary" type="button" disabled>Elemento attivo con popover disabilitato</button>
    </span>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-disabled-example',
  templateUrl: './tooltip-disabled-example.component.html',
  styleUrls: ['./tooltip-disabled-example.component.scss'],
})
export class TooltipDisabledExampleComponent {}`],["html",`<h3>Eventi tooltip</h3>
<div class="bd-example">
  <p class="example-section">
    <button
      itButton="danger"
      size="lg"
      class="me-4"
      itTooltip="Tooltip di esempio"
      (shownEvent)="logShown()"
      (hiddenEvent)="logHidden()"
      #destructibleTooltip="itTooltip">
      Clicca per il tooltip distruttibile
    </button>

    <button itButton="primary" size="lg" (click)="destructibleTooltip.dispose()">Distruggi il tooltip</button>
  </p>

  <div class="tooltip-events mt-4">
    <div *ngIf="shownTime">Ultima emissione dell'evento shown = /{/{ shownTime | date: 'long' /}/}</div>

    <div *ngIf="hiddenTime">Ultima emissione dell'evento hidden = /{/{ hiddenTime | date: 'long' /}/}</div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-events-example',
  templateUrl: './tooltip-events-example.component.html',
  styleUrls: ['./tooltip-events-example.component.scss'],
})
export class TooltipEventsExampleComponent {
  showTime = '';
  shownTime = '';
  insertedTime = '';
  hideTime = '';
  hiddenTime = '';

  logShow() {
    this.showTime = new Date().toISOString();
  }

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logInserted() {
    this.insertedTime = new Date().toISOString();
  }

  logHide() {
    this.hideTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}`],["html",`<h3>Configurazione globale dei tooltip</h3>
<div class="bd-example">
  <p class="example-section">
    <button type="button" class="btn btn-lg btn-danger" itTooltip="Tooltip di esempio">
      Clicca per attivare/disattivare il tooltip preconfigurato
    </button>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-config-example',
  templateUrl: './tooltip-config-example.component.html',
  styleUrls: ['./tooltip-config-example.component.scss'],
  providers: [],
})
export class TooltipConfigExampleComponent {}`]],template:function(i,p){i&1&&u(0,"it-tooltip-example")(1,"it-source-display",0)(2,"it-tooltip-placements-example")(3,"it-source-display",1)(4,"it-tooltip-disabled-example")(5,"it-source-display",2)(6,"it-tooltip-events-example")(7,"it-source-display",3)(8,"it-tooltip-config-example")(9,"it-source-display",4)},dependencies:[j,A,G,J,K,Q]});let e=t;return e})();var W=(()=>{let t=class t{constructor(){this.directive=_.directives.find(a=>a.name==="ItTooltipDirective")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,p){i&1&&(n(0,"h1",0),l(1,"Tooltip"),o(),n(2,"p",1),l(3,"La direttiva tooltip utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito"),o(),u(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),u(7,"it-tooltip-examples"),o(),n(8,"it-tab-item",4),u(9,"it-api-parameters",5),o()()),i&2&&(r(4),c("innerHTML",p.directive.description,I),r(5),c("component",p.directive))},dependencies:[B,N,L,R]});let e=t;return e})();var at=[{path:"",component:W}],X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=v({imports:[P.forChild(at),P]});let e=t;return e})();var Ot=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=v({imports:[O,q,X]});let e=t;return e})();export{Ot as TooltipModule};
