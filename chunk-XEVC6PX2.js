import{a as L,b as j,c as N,d as q}from"./chunk-CQV3UQHT.js";import{la as _,ma as B,ra as m,y as H}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as I}from"./chunk-DVW5EFKD.js";import{l as F,m as O}from"./chunk-I647ZKKI.js";import{Bb as y,Cb as E,Hb as u,Ib as i,Jb as o,Kb as d,Ob as V,Sa as M,Sb as b,Tb as w,Wa as r,Y as v,_b as U,cc as l,ec as S,fb as s,ga as h,gb as x,ha as g,mc as z,rc as P,tc as D}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var A=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-example"]],standalone:!1,decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","triggers","click",1,"btn","btn-lg","btn-danger"]],template:function(n,p){n&1&&(i(0,"h3"),l(1,"Esempio"),o(),i(2,"div",0)(3,"p",1)(4,"button",2),l(5," Clicca per attivare/disattivare il tooltip "),o()()())},dependencies:[m],encapsulation:2});let e=t;return e})();var G=(()=>{let t=class t{constructor(){this.currentPlacement="right"}changeCurrentPlacement(){switch(this.currentPlacement){case"right":this.currentPlacement="top";break;case"top":this.currentPlacement="left";break;case"left":this.currentPlacement="bottom";break;case"bottom":this.currentPlacement="right";break}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-placements-example"]],standalone:!1,decls:17,vars:1,consts:[[1,"bd-example"],[1,"example-section","mb-5"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","top",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","right",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","left",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","bottom",1,"btn","btn-outline-secondary"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","triggers","click",1,"btn","btn-lg","btn-danger","me-4",3,"tooltipPlacement"],["type","button",1,"btn","btn-lg","btn-primary",3,"click"]],template:function(n,p){n&1&&(i(0,"h3"),l(1,"Le quattro direzioni"),o(),i(2,"div",0)(3,"p",1)(4,"button",2),l(5," Tooltip in alto "),o(),i(6,"button",3),l(7," Tooltip a destra "),o(),i(8,"button",4),l(9," Tooltip a sinistra "),o(),i(10,"button",5),l(11," Tooltip in basso "),o()(),i(12,"p",6)(13,"button",7),l(14," Clicca per il tooltip ricollocabile "),o(),i(15,"button",8),b("click",function(){return p.changeCurrentPlacement()}),l(16,"Cambia il collocamento della tooltip"),o()()()),n&2&&(r(13),u("tooltipPlacement",p.currentPlacement))},dependencies:[m],encapsulation:2});let e=t;return e})();function tt(e,t){if(e&1&&(i(0,"div"),l(1),P(2,"date"),o()),e&2){let C=w();r(),S("Ultima emissione dell'evento shown = ",D(2,1,C.shownTime,"long"))}}function et(e,t){if(e&1&&(i(0,"div"),l(1),P(2,"date"),o()),e&2){let C=w();r(),S("Ultima emissione dell'evento hidden = ",D(2,1,C.hiddenTime,"long"))}}var J=(()=>{let t=class t{constructor(){this.showTime="",this.shownTime="",this.insertedTime="",this.hideTime="",this.hiddenTime=""}logShow(){this.showTime=new Date().toISOString()}logShown(){this.shownTime=new Date().toISOString()}logInserted(){this.insertedTime=new Date().toISOString()}logHide(){this.hideTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-events-example"]],standalone:!1,decls:12,vars:2,consts:[["destructibleTooltip","itTooltip"],[1,"bd-example"],[1,"example-section"],["itButton","danger","size","lg","itTooltip","Tooltip di esempio",1,"me-4",3,"shownEvent","hiddenEvent"],["itButton","primary","size","lg",3,"click"],[1,"tooltip-events","mt-4"]],template:function(n,p){if(n&1){let f=V();i(0,"h3"),l(1,"Eventi tooltip"),o(),i(2,"div",1)(3,"p",2)(4,"button",3,0),b("shownEvent",function(){return h(f),g(p.logShown())})("hiddenEvent",function(){return h(f),g(p.logHidden())}),l(6," Clicca per il tooltip distruttibile "),o(),i(7,"button",4),b("click",function(){h(f);let Y=U(5);return g(Y.dispose())}),l(8,"Distruggi il tooltip"),o()(),i(9,"div",5),y(10,tt,3,4,"div"),y(11,et,3,4,"div"),o()()}n&2&&(r(10),E(p.shownTime?10:-1),r(),E(p.hiddenTime?11:-1))},dependencies:[H,m,F],encapsulation:2});let e=t;return e})();var K=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-disabled-example"]],standalone:!1,decls:11,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["itTooltip","Popover disabilitato",1,"d-inline-block"],["type","button","disabled","",1,"btn","btn-primary"]],template:function(n,p){n&1&&(i(0,"h3"),l(1,"Elementi disabilitati"),o(),i(2,"div",0)(3,"p",1)(4,"span",2)(5,"button",3),l(6,"Elemento disabilitato con popover abilitato"),o()()(),i(7,"p",1)(8,"span",2)(9,"button",3),l(10,"Elemento attivo con popover disabilitato"),o()()()())},dependencies:[m],encapsulation:2});let e=t;return e})();var Q=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-config-example"]],standalone:!1,features:[z([])],decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio",1,"btn","btn-lg","btn-danger"]],template:function(n,p){n&1&&(i(0,"h3"),l(1,"Configurazione globale dei tooltip"),o(),i(2,"div",0)(3,"p",1)(4,"button",2),l(5," Clicca per attivare/disattivare il tooltip preconfigurato "),o()()())},dependencies:[m],encapsulation:2});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-examples"]],standalone:!1,decls:10,vars:0,consts:[["html",`<h3>Esempio</h3>
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
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
    @if (shownTime) {
      <div>Ultima emissione dell'evento shown = /{/{ shownTime | date: 'long' /}/}</div>
    }

    @if (hiddenTime) {
      <div>Ultima emissione dell'evento hidden = /{/{ hiddenTime | date: 'long' /}/}</div>
    }
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tooltip-events-example',
  templateUrl: './tooltip-events-example.component.html',
  styleUrls: ['./tooltip-events-example.component.scss'],
  standalone: false,
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
  standalone: false,
})
export class TooltipConfigExampleComponent {}`]],template:function(n,p){n&1&&d(0,"it-tooltip-example")(1,"it-source-display",0)(2,"it-tooltip-placements-example")(3,"it-source-display",1)(4,"it-tooltip-disabled-example")(5,"it-source-display",2)(6,"it-tooltip-events-example")(7,"it-source-display",3)(8,"it-tooltip-config-example")(9,"it-source-display",4)},dependencies:[L,A,G,J,K,Q],encapsulation:2});let e=t;return e})();var W=(()=>{let t=class t{constructor(){this.directive=j.directives.find(a=>a.name==="ItTooltipDirective")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["it-tooltip-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,p){n&1&&(i(0,"h1",0),l(1,"Tooltip"),o(),i(2,"p",1),l(3,"La direttiva tooltip utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito"),o(),d(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),d(7,"it-tooltip-examples"),o(),i(8,"it-tab-item",4),d(9,"it-api-parameters",5),o()()),n&2&&(r(4),u("innerHTML",p.directive.description,M),r(5),u("component",p.directive))},dependencies:[N,B,_,R],encapsulation:2});let e=t;return e})();var at=[{path:"",component:W}],X=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({imports:[I.forChild(at),I]});let e=t;return e})();var Ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({imports:[O,q,X]});let e=t;return e})();export{Ot as TooltipModule};
