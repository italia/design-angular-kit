import{a as T,b as F,c as N,d as q}from"./chunk-XTG6MU3L.js";import{T as z,W as j,fa as A,k as B,l as H,sa as U,t as S,u as W,ua as R}from"./chunk-R4LXWPNQ.js";import{l as P}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Cb as k,Gc as D,Hc as L,Mc as O,Na as x,Nb as m,Ob as I,Pb as b,Ra as a,Rb as p,Sb as s,Tb as c,U as v,ba as f,ca as M,gb as _,ib as u,ub as i,vb as o,wb as w,xb as y,yb as E}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function $(l,t){l&1&&(i(0,"span",32),m(1,"Intestazione Menu"),o())}function ee(l,t){l&1&&w(0,"it-dropdown-item",33)}function ne(l,t){if(l&1&&(i(0,"it-dropdown-item",34),m(1),o()),l&2){let g=t.$implicit;u("href",g.link)("active",g.active)("disabled",g.disabled)("large",g.large)("iconName",g.icon)("iconPosition",g.iconPosition),a(),b(" ",g.text," ")}}var G=(()=>{let t=class t{constructor(){this.label="Click me",this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=f({type:t,selectors:[["it-dropdown-example"]],decls:50,vars:31,consts:[[1,"bd-example"],[1,"example-section"],[3,"showEvent","hideEvent","color","dark","direction","fullWidth"],["button",""],["listHeading","",4,"ngIf"],["list",""],["divider","true",4,"ngIf"],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition",4,"ngFor","ngForOf"],[1,"row"],[1,"form-check","col-3"],["label","Disposizione orizzontale",3,"ngModelChange","ngModel"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],["label","Con intestazione",3,"ngModelChange","ngModel"],[1,"form-check","col-2"],["name","default","label","Default",3,"ngModelChange","ngModel","value"],["name","dropup","value","dropup","label","Dropup",3,"ngModelChange","ngModel"],["name","dropstart","value","dropstart","label","Dropstart",3,"ngModelChange","ngModel"],["name","dropend","value","dropend","label","Dropend",3,"ngModelChange","ngModel"],["name","clickMe","value","Click me","label","Click me",3,"ngModelChange","ngModel"],["name","check","value","Check","label","Check",3,"ngModelChange","ngModel"],["name","hello","value","Hello world!","label","Hello world!",3,"ngModelChange","ngModel"],[1,"form-check","col-5"],[1,"form-check","col-4"],["name","none","label","None",3,"ngModelChange","ngModel","value"],["name","primary","value","primary","label","Primary",3,"ngModelChange","ngModel"],["name","secondary","value","secondary","label","Secondary",3,"ngModelChange","ngModel"],["name","success","value","success","label","Success",3,"ngModelChange","ngModel"],["name","warning","value","warning","label","Warning",3,"ngModelChange","ngModel"],["name","danger","value","danger","label","Danger",3,"ngModelChange","ngModel"],["name","info","value","info","label","Info",3,"ngModelChange","ngModel"],["name","light","value","light","label","Light",3,"ngModelChange","ngModel"],["name","dark","value","dark","label","Dark",3,"ngModelChange","ngModel"],["listHeading",""],["divider","true"],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Esempio Dropdown"),o(),i(2,"div",0)(3,"p",1)(4,"it-dropdown",2),k("showEvent",function(){return e.onOpenEvent()})("hideEvent",function(){return e.onCloseEvent()}),i(5,"span",3),m(6),o(),_(7,$,2,0,"span",4),y(8,5),_(9,ee,1,0,"it-dropdown-item",6)(10,ne,2,7,"it-dropdown-item",7),E(),o()(),i(11,"p",1),m(12),o(),i(13,"p",1),m(14),o(),i(15,"div",8)(16,"div",9)(17,"h5"),m(18,"Opzioni"),o(),i(19,"it-checkbox",10),c("ngModelChange",function(n){return s(e.isFullWidth,n)||(e.isFullWidth=n),n}),o(),i(20,"it-checkbox",11),c("ngModelChange",function(n){return s(e.isDark,n)||(e.isDark=n),n}),o(),i(21,"it-checkbox",12),c("ngModelChange",function(n){return s(e.withHeading,n)||(e.withHeading=n),n}),o()(),i(22,"div",13)(23,"h5"),m(24,"Posizione menu"),o(),i(25,"it-radio-button",14),c("ngModelChange",function(n){return s(e.menuPlacement,n)||(e.menuPlacement=n),n}),o(),i(26,"it-radio-button",15),c("ngModelChange",function(n){return s(e.menuPlacement,n)||(e.menuPlacement=n),n}),o(),i(27,"it-radio-button",16),c("ngModelChange",function(n){return s(e.menuPlacement,n)||(e.menuPlacement=n),n}),o(),i(28,"it-radio-button",17),c("ngModelChange",function(n){return s(e.menuPlacement,n)||(e.menuPlacement=n),n}),o()(),i(29,"div",13)(30,"h5"),m(31,"Testo"),o(),i(32,"it-radio-button",18),c("ngModelChange",function(n){return s(e.label,n)||(e.label=n),n}),o(),i(33,"it-radio-button",19),c("ngModelChange",function(n){return s(e.label,n)||(e.label=n),n}),o(),i(34,"it-radio-button",20),c("ngModelChange",function(n){return s(e.label,n)||(e.label=n),n}),o()(),i(35,"div",21)(36,"h5"),m(37,"Colorazione"),o(),i(38,"div",8)(39,"div",22)(40,"it-radio-button",23),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(41,"it-radio-button",24),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(42,"it-radio-button",25),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(43,"it-radio-button",26),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(44,"it-radio-button",27),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o()(),i(45,"div",21)(46,"it-radio-button",28),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(47,"it-radio-button",29),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(48,"it-radio-button",30),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o(),i(49,"it-radio-button",31),c("ngModelChange",function(n){return s(e.color,n)||(e.color=n),n}),o()()()()()()),r&2&&(a(4),u("color",e.color)("dark",e.isDark)("direction",e.menuPlacement)("fullWidth",e.isFullWidth),a(2),I(e.label),a(),u("ngIf",e.withHeading),a(2),u("ngIf",e.withHeading),a(),u("ngForOf",e.items),a(2),b("Open: ",e.openTime,""),a(2),b("Close: ",e.closeTime,""),a(5),p("ngModel",e.isFullWidth),a(),p("ngModel",e.isDark),a(),p("ngModel",e.withHeading),a(4),p("ngModel",e.menuPlacement),u("value",void 0),a(),p("ngModel",e.menuPlacement),a(),p("ngModel",e.menuPlacement),a(),p("ngModel",e.menuPlacement),a(4),p("ngModel",e.label),a(),p("ngModel",e.label),a(),p("ngModel",e.label),a(6),p("ngModel",e.color),u("value",void 0),a(),p("ngModel",e.color),a(),p("ngModel",e.color),a(),p("ngModel",e.color),a(),p("ngModel",e.color),a(2),p("ngModel",e.color),a(),p("ngModel",e.color),a(),p("ngModel",e.color),a(),p("ngModel",e.color))},dependencies:[D,L,W,S,U,R,z,j]});let l=t;return l})();function oe(l,t){if(l&1&&(i(0,"it-dropdown-item",6),m(1),o()),l&2){let g=t.$implicit;u("href",g.link)("active",g.active)("disabled",g.disabled)("large",g.large)("iconName",g.icon)("iconPosition",g.iconPosition),a(),b(" ",g.text," ")}}var J=(()=>{let t=class t{constructor(){this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=f({type:t,selectors:[["it-dropdown-link-example"]],decls:13,vars:3,consts:[[1,"bd-example"],[1,"example-section"],["mode","link",3,"showEvent","hideEvent"],["button",""],["list",""],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition",4,"ngFor","ngForOf"],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Dropdown link"),o(),i(2,"div",0)(3,"p",1)(4,"it-dropdown",2),k("showEvent",function(){return e.onOpenEvent()})("hideEvent",function(){return e.onCloseEvent()}),i(5,"span",3),m(6,"Apri dropdown"),o(),y(7,4),_(8,oe,2,7,"it-dropdown-item",5),E(),o()(),i(9,"p",1),m(10),o(),i(11,"p",1),m(12),o()()),r&2&&(a(8),u("ngForOf",e.items),a(2),b("Open: ",e.openTime,""),a(2),b("Close: ",e.closeTime,""))},dependencies:[D,W,S],encapsulation:2});let l=t;return l})();var K=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=f({type:t,selectors:[["it-dropdown-examples"]],decls:4,vars:0,consts:[["html",`<h3>Esempio Dropdown</h3>
<div class="bd-example">
  <p class="example-section">
    <it-dropdown
      [color]="color"
      [dark]="isDark"
      [direction]="menuPlacement"
      [fullWidth]="isFullWidth"
      (showEvent)="onOpenEvent()"
      (hideEvent)="onCloseEvent()">
      <span button>/{/{ label /}/}</span>
      <span *ngIf="withHeading" listHeading>Intestazione Menu</span>

      <ng-container list>
        <it-dropdown-item *ngIf="withHeading" divider="true"></it-dropdown-item>

        <it-dropdown-item
          *ngFor="let item of items"
          [href]="item.link"
          externalLink="true"
          [active]="item.active"
          [disabled]="item.disabled"
          [large]="item.large"
          [iconName]="item.icon"
          [iconPosition]="item.iconPosition">
          /{/{ item.text /}/}
        </it-dropdown-item>
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>

  <div class="row">
    <div class="form-check col-3">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="isFullWidth" label="Disposizione orizzontale"></it-checkbox>
      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro"></it-checkbox>
      <it-checkbox [(ngModel)]="withHeading" label="Con intestazione"></it-checkbox>
    </div>
    <div class="form-check col-2">
      <h5>Posizione menu</h5>
      <it-radio-button name="default" [(ngModel)]="menuPlacement" [value]="undefined" label="Default"></it-radio-button>
      <it-radio-button name="dropup" [(ngModel)]="menuPlacement" value="dropup" label="Dropup"></it-radio-button>
      <it-radio-button name="dropstart" [(ngModel)]="menuPlacement" value="dropstart" label="Dropstart"></it-radio-button>
      <it-radio-button name="dropend" [(ngModel)]="menuPlacement" value="dropend" label="Dropend"></it-radio-button>
    </div>

    <div class="form-check col-2">
      <h5>Testo</h5>
      <it-radio-button name="clickMe" [(ngModel)]="label" value="Click me" label="Click me"></it-radio-button>
      <it-radio-button name="check" [(ngModel)]="label" value="Check" label="Check"></it-radio-button>
      <it-radio-button name="hello" [(ngModel)]="label" value="Hello world!" label="Hello world!"></it-radio-button>
    </div>

    <div class="form-check col-5">
      <h5>Colorazione</h5>
      <div class="row">
        <div class="form-check col-4">
          <it-radio-button name="none" [(ngModel)]="color" [value]="undefined" label="None"></it-radio-button>
          <it-radio-button name="primary" [(ngModel)]="color" value="primary" label="Primary"></it-radio-button>
          <it-radio-button name="secondary" [(ngModel)]="color" value="secondary" label="Secondary"></it-radio-button>
          <it-radio-button name="success" [(ngModel)]="color" value="success" label="Success"></it-radio-button>
          <it-radio-button name="warning" [(ngModel)]="color" value="warning" label="Warning"></it-radio-button>
        </div>
        <div class="form-check col-5">
          <it-radio-button name="danger" [(ngModel)]="color" value="danger" label="Danger"></it-radio-button>
          <it-radio-button name="info" [(ngModel)]="color" value="info" label="Info"></it-radio-button>
          <it-radio-button name="light" [(ngModel)]="color" value="light" label="Light"></it-radio-button>
          <it-radio-button name="dark" [(ngModel)]="color" value="dark" label="Dark"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { ButtonColor, DropdownDirection } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss'],
})
export class DropdownExampleComponent {
  color?: ButtonColor;
  label = 'Click me';
  isDark = false;
  isFullWidth = false;
  withHeading = true;

  menuPlacement?: DropdownDirection;

  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}`],["html",`<h3>Dropdown link</h3>
<div class="bd-example">
  <p class="example-section">
    <it-dropdown mode="link" (showEvent)="onOpenEvent()" (hideEvent)="onCloseEvent()">
      <span button>Apri dropdown</span>
      <ng-container list>
        <it-dropdown-item
          *ngFor="let item of items"
          [href]="item.link"
          externalLink="true"
          [active]="item.active"
          [disabled]="item.disabled"
          [large]="item.large"
          [iconName]="item.icon"
          [iconPosition]="item.iconPosition">
          /{/{ item.text /}/}
        </it-dropdown-item>
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-dropdown-link-example',
  templateUrl: './dropdown-link-example.component.html',
})
export class DropdownLinkExampleComponent {
  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}`]],template:function(r,e){r&1&&w(0,"it-dropdown-example")(1,"it-source-display",0)(2,"it-dropdown-link-example")(3,"it-source-display",1)},dependencies:[N,G,J]});let l=t;return l})();var Q=(()=>{let t=class t{constructor(){this.component=T.components.find(h=>h.name==="ItDropdownComponent"),this.subcomponent=T.components.find(h=>h.name==="ItDropdownItemComponent")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=f({type:t,selectors:[["it-dropdown-index"]],decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,e){r&1&&(i(0,"h1",0),m(1,"Dropdown"),o(),i(2,"p",1),m(3,"Il componente Dropdown per men\xF9 a tendina contestuali"),o(),w(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),w(7,"it-dropdown-examples"),o(),i(8,"it-tab-item",4)(9,"h2"),m(10,"Dropdown"),o(),w(11,"it-api-parameters",5),i(12,"h2"),m(13,"Dropdown Item"),o(),w(14,"it-api-parameters",5),o()()),r&2&&(a(4),u("innerHTML",e.component.description,x),a(7),u("component",e.component),a(3),u("component",e.subcomponent))},dependencies:[F,H,B,K]});let l=t;return l})();var le=[{path:"",component:Q}],V=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=M({type:t}),t.\u0275inj=v({imports:[P.forChild(le),P]});let l=t;return l})();var xe=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=M({type:t}),t.\u0275inj=v({imports:[O,V,q,A]});let l=t;return l})();export{xe as DropdownModule};
