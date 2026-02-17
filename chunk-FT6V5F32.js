import{a as H,b as B,c as L,d as j}from"./chunk-K63BAWCR.js";import{la as F,ma as O,ra as m,y as z}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as P}from"./chunk-A2FNTR3N.js";import{l as V,m as U}from"./chunk-3O7E6U5R.js";import{Bb as h,Cb as C,Hb as d,Ib as n,Jb as i,Kb as c,Rb as _,Ta as I,V as f,Vb as u,Xa as s,Xb as E,ca as v,cc as M,da as g,gc as o,ic as y,jb as p,kb as T,qc as k,vc as w,xc as S}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var N=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-example"]],standalone:!1,decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","triggers","click",1,"btn","btn-lg","btn-danger"]],template:function(e,a){e&1&&(n(0,"h3"),o(1,"Esempio"),i(),n(2,"div",0)(3,"p",1)(4,"button",2),o(5," Clicca per attivare/disattivare il tooltip "),i()()())},dependencies:[m],encapsulation:2})}}return t})();var q=(()=>{class t{constructor(){this.currentPlacement="right"}changeCurrentPlacement(){switch(this.currentPlacement){case"right":this.currentPlacement="top";break;case"top":this.currentPlacement="left";break;case"left":this.currentPlacement="bottom";break;case"bottom":this.currentPlacement="right";break}}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-placements-example"]],standalone:!1,decls:17,vars:1,consts:[[1,"bd-example"],[1,"example-section","mb-5"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","top",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","right",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","left",1,"btn","btn-outline-secondary","me-2"],["type","button","itTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","tooltipPlacement","bottom",1,"btn","btn-outline-secondary"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio","triggers","click",1,"btn","btn-lg","btn-danger","me-4",3,"tooltipPlacement"],["type","button",1,"btn","btn-lg","btn-primary",3,"click"]],template:function(e,a){e&1&&(n(0,"h3"),o(1,"Le quattro direzioni"),i(),n(2,"div",0)(3,"p",1)(4,"button",2),o(5," Tooltip in alto "),i(),n(6,"button",3),o(7," Tooltip a destra "),i(),n(8,"button",4),o(9," Tooltip a sinistra "),i(),n(10,"button",5),o(11," Tooltip in basso "),i()(),n(12,"p",6)(13,"button",7),o(14," Clicca per il tooltip ricollocabile "),i(),n(15,"button",8),u("click",function(){return a.changeCurrentPlacement()}),o(16,"Cambia il collocamento della tooltip"),i()()()),e&2&&(s(13),d("tooltipPlacement",a.currentPlacement))},dependencies:[m],encapsulation:2})}}return t})();function $(t,W){if(t&1&&(n(0,"div"),o(1),w(2,"date"),i()),t&2){let l=E();s(),y("Ultima emissione dell'evento shown = ",S(2,1,l.shownTime,"long"))}}function tt(t,W){if(t&1&&(n(0,"div"),o(1),w(2,"date"),i()),t&2){let l=E();s(),y("Ultima emissione dell'evento hidden = ",S(2,1,l.hiddenTime,"long"))}}var R=(()=>{class t{constructor(){this.showTime="",this.shownTime="",this.insertedTime="",this.hideTime="",this.hiddenTime=""}logShow(){this.showTime=new Date().toISOString()}logShown(){this.shownTime=new Date().toISOString()}logInserted(){this.insertedTime=new Date().toISOString()}logHide(){this.hideTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-events-example"]],standalone:!1,decls:12,vars:2,consts:[["destructibleTooltip","itTooltip"],[1,"bd-example"],[1,"example-section"],["itButton","danger","size","lg","itTooltip","Tooltip di esempio",1,"me-4",3,"shownEvent","hiddenEvent"],["itButton","primary","size","lg",3,"click"],[1,"tooltip-events","mt-4"]],template:function(e,a){if(e&1){let b=_();n(0,"h3"),o(1,"Eventi tooltip"),i(),n(2,"div",1)(3,"p",2)(4,"button",3,0),u("shownEvent",function(){return v(b),g(a.logShown())})("hiddenEvent",function(){return v(b),g(a.logHidden())}),o(6," Clicca per il tooltip distruttibile "),i(),n(7,"button",4),u("click",function(){v(b);let X=M(5);return g(X.dispose())}),o(8,"Distruggi il tooltip"),i()(),n(9,"div",5),h(10,$,3,4,"div"),h(11,tt,3,4,"div"),i()()}e&2&&(s(10),C(a.shownTime?10:-1),s(),C(a.hiddenTime?11:-1))},dependencies:[z,m,V],encapsulation:2})}}return t})();var A=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-disabled-example"]],standalone:!1,decls:11,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["itTooltip","Popover disabilitato",1,"d-inline-block"],["type","button","disabled","",1,"btn","btn-primary"]],template:function(e,a){e&1&&(n(0,"h3"),o(1,"Elementi disabilitati"),i(),n(2,"div",0)(3,"p",1)(4,"span",2)(5,"button",3),o(6,"Elemento disabilitato con popover abilitato"),i()()(),n(7,"p",1)(8,"span",2)(9,"button",3),o(10,"Elemento attivo con popover disabilitato"),i()()()())},dependencies:[m],encapsulation:2})}}return t})();var G=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-config-example"]],standalone:!1,features:[k([])],decls:6,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["type","button","itTooltip","Tooltip di esempio",1,"btn","btn-lg","btn-danger"]],template:function(e,a){e&1&&(n(0,"h3"),o(1,"Configurazione globale dei tooltip"),i(),n(2,"div",0)(3,"p",1)(4,"button",2),o(5," Clicca per attivare/disattivare il tooltip preconfigurato "),i()()())},dependencies:[m],encapsulation:2})}}return t})();var J=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-examples"]],standalone:!1,decls:10,vars:0,consts:[["html",`<h3>Esempio</h3>
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
export class TooltipConfigExampleComponent {}`]],template:function(e,a){e&1&&c(0,"it-tooltip-example")(1,"it-source-display",0)(2,"it-tooltip-placements-example")(3,"it-source-display",1)(4,"it-tooltip-disabled-example")(5,"it-source-display",2)(6,"it-tooltip-events-example")(7,"it-source-display",3)(8,"it-tooltip-config-example")(9,"it-source-display",4)},dependencies:[H,N,q,R,A,G],encapsulation:2})}}return t})();var K=(()=>{class t{constructor(){this.directive=B.directives.find(l=>l.name==="ItTooltipDirective")}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["it-tooltip-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(e,a){e&1&&(n(0,"h1",0),o(1,"Tooltip"),i(),n(2,"p",1),o(3,"La direttiva tooltip utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito"),i(),c(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),c(7,"it-tooltip-examples"),i(),n(8,"it-tab-item",4),c(9,"it-api-parameters",5),i()()),e&2&&(s(4),d("innerHTML",a.directive.description,I),s(5),d("component",a.directive))},dependencies:[L,O,F,J],encapsulation:2})}}return t})();var lt=[{path:"",component:K}],Q=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=f({imports:[P.forChild(lt),P]})}}return t})();var zt=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=f({imports:[U,j,Q]})}}return t})();export{zt as TooltipModule};
