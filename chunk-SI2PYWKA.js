import{a as U,b as z,c as q,d as G}from"./chunk-ZWYEEAVU.js";import{Q as H,T as L,ca as N,j as E,k as S,la as R,ma as j,sa as B,ua as x}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as O}from"./chunk-F32MIGDQ.js";import{m as F}from"./chunk-66PP3R5H.js";import{Ab as _,Bb as C,Db as f,Eb as M,Fb as y,Gb as u,Hb as o,Ib as t,Jb as h,Nb as v,Ob as D,Sa as A,Ub as k,V as P,Wa as i,fc as s,gc as I,hc as g,ib as w,jb as T,jc as r,kc as d,lc as m}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";function oe(a,b){a&1&&(o(0,"span",4),s(1,"Intestazione Menu"),t())}function ie(a,b){a&1&&h(0,"it-dropdown-item",6)}function ae(a,b){if(a&1&&(o(0,"it-dropdown-item",7),s(1),t()),a&2){let p=b.$implicit;u("href",p.link)("active",p.active)("disabled",p.disabled)("large",p.large)("iconName",p.icon)("iconPosition",p.iconPosition),i(),g(" ",p.text," ")}}var Q=(()=>{class a{constructor(){this.label="Click me",this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275cmp=w({type:a,selectors:[["it-dropdown-example"]],standalone:!1,decls:51,vars:30,consts:[[1,"bd-example"],[1,"example-section"],[3,"showEvent","hideEvent","color","dark","direction","fullWidth"],["button",""],["listHeading",""],["list",""],["divider","true"],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition"],[1,"row"],[1,"form-check","col-3"],["label","Disposizione orizzontale",3,"ngModelChange","ngModel"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],["label","Con intestazione",3,"ngModelChange","ngModel"],[1,"form-check","col-2"],["name","default","label","Default",3,"ngModelChange","ngModel","value"],["name","dropup","value","dropup","label","Dropup",3,"ngModelChange","ngModel"],["name","dropstart","value","dropstart","label","Dropstart",3,"ngModelChange","ngModel"],["name","dropend","value","dropend","label","Dropend",3,"ngModelChange","ngModel"],["name","clickMe","value","Click me","label","Click me",3,"ngModelChange","ngModel"],["name","check","value","Check","label","Check",3,"ngModelChange","ngModel"],["name","hello","value","Hello world!","label","Hello world!",3,"ngModelChange","ngModel"],[1,"form-check","col-5"],[1,"form-check","col-4"],["name","none","label","None",3,"ngModelChange","ngModel","value"],["name","primary","value","primary","label","Primary",3,"ngModelChange","ngModel"],["name","secondary","value","secondary","label","Secondary",3,"ngModelChange","ngModel"],["name","success","value","success","label","Success",3,"ngModelChange","ngModel"],["name","warning","value","warning","label","Warning",3,"ngModelChange","ngModel"],["name","danger","value","danger","label","Danger",3,"ngModelChange","ngModel"],["name","info","value","info","label","Info",3,"ngModelChange","ngModel"],["name","light","value","light","label","Light",3,"ngModelChange","ngModel"],["name","dark","value","dark","label","Dark",3,"ngModelChange","ngModel"]],template:function(c,n){c&1&&(o(0,"h3"),s(1,"Esempio Dropdown"),t(),o(2,"div",0)(3,"p",1)(4,"it-dropdown",2),k("showEvent",function(){return n.onOpenEvent()})("hideEvent",function(){return n.onCloseEvent()}),o(5,"span",3),s(6),t(),_(7,oe,2,0,"span",4),v(8,5),_(9,ie,1,0,"it-dropdown-item",6),M(10,ae,2,7,"it-dropdown-item",7,f),D(),t()(),o(12,"p",1),s(13),t(),o(14,"p",1),s(15),t(),o(16,"div",8)(17,"div",9)(18,"h5"),s(19,"Opzioni"),t(),o(20,"it-checkbox",10),m("ngModelChange",function(e){return d(n.isFullWidth,e)||(n.isFullWidth=e),e}),t(),o(21,"it-checkbox",11),m("ngModelChange",function(e){return d(n.isDark,e)||(n.isDark=e),e}),t(),o(22,"it-checkbox",12),m("ngModelChange",function(e){return d(n.withHeading,e)||(n.withHeading=e),e}),t()(),o(23,"div",13)(24,"h5"),s(25,"Posizione menu"),t(),o(26,"it-radio-button",14),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(27,"it-radio-button",15),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(28,"it-radio-button",16),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(29,"it-radio-button",17),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t()(),o(30,"div",13)(31,"h5"),s(32,"Testo"),t(),o(33,"it-radio-button",18),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t(),o(34,"it-radio-button",19),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t(),o(35,"it-radio-button",20),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t()(),o(36,"div",21)(37,"h5"),s(38,"Colorazione"),t(),o(39,"div",8)(40,"div",22)(41,"it-radio-button",23),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(42,"it-radio-button",24),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(43,"it-radio-button",25),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(44,"it-radio-button",26),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(45,"it-radio-button",27),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t()(),o(46,"div",21)(47,"it-radio-button",28),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(48,"it-radio-button",29),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(49,"it-radio-button",30),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(50,"it-radio-button",31),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t()()()()()()),c&2&&(i(4),u("color",n.color)("dark",n.isDark)("direction",n.menuPlacement)("fullWidth",n.isFullWidth),i(2),I(n.label),i(),C(n.withHeading?7:-1),i(2),C(n.withHeading?9:-1),i(),y(n.items),i(3),g("Open: ",n.openTime),i(2),g("Close: ",n.closeTime),i(5),r("ngModel",n.isFullWidth),i(),r("ngModel",n.isDark),i(),r("ngModel",n.withHeading),i(4),r("ngModel",n.menuPlacement),u("value",void 0),i(),r("ngModel",n.menuPlacement),i(),r("ngModel",n.menuPlacement),i(),r("ngModel",n.menuPlacement),i(4),r("ngModel",n.label),i(),r("ngModel",n.label),i(),r("ngModel",n.label),i(6),r("ngModel",n.color),u("value",void 0),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(2),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color))},dependencies:[S,E,B,x,H,L],encapsulation:2})}}return a})();function re(a,b){if(a&1&&(o(0,"it-dropdown-item",5),s(1),t()),a&2){let p=b.$implicit;u("href",p.link)("active",p.active)("disabled",p.disabled)("large",p.large)("iconName",p.icon)("iconPosition",p.iconPosition),i(),g(" ",p.text," ")}}var V=(()=>{class a{constructor(){this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275cmp=w({type:a,selectors:[["it-dropdown-link-example"]],standalone:!1,decls:14,vars:2,consts:[[1,"bd-example"],[1,"example-section"],["mode","link",3,"showEvent","hideEvent"],["button",""],["list",""],["externalLink","true",3,"href","active","disabled","large","iconName","iconPosition"]],template:function(c,n){c&1&&(o(0,"h3"),s(1,"Dropdown link"),t(),o(2,"div",0)(3,"p",1)(4,"it-dropdown",2),k("showEvent",function(){return n.onOpenEvent()})("hideEvent",function(){return n.onCloseEvent()}),o(5,"span",3),s(6,"Apri dropdown"),t(),v(7,4),M(8,re,2,7,"it-dropdown-item",5,f),D(),t()(),o(10,"p",1),s(11),t(),o(12,"p",1),s(13),t()()),c&2&&(i(8),y(n.items),i(3),g("Open: ",n.openTime),i(2),g("Close: ",n.closeTime))},dependencies:[S,E],encapsulation:2})}}return a})();function me(a,b){a&1&&(o(0,"span",4),s(1,"Intestazione Menu"),t())}function pe(a,b){a&1&&h(0,"li",6)}function se(a,b){if(a&1&&(o(0,"li",7),s(1),t()),a&2){let p=b.$implicit;u("href",p.link)("active",p.active)("disabled",p.disabled)("large",p.large)("iconName",p.icon)("iconPosition",p.iconPosition),i(),g(" ",p.text," ")}}var X=(()=>{class a{constructor(){this.label="Click me",this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275cmp=w({type:a,selectors:[["it-dropdown-host-attribute"]],standalone:!1,decls:53,vars:30,consts:[[1,"bd-example"],[1,"example-section"],[3,"showEvent","hideEvent","color","dark","direction","fullWidth"],["button",""],["listHeading",""],["list",""],["itDropdownItem","","divider","true"],["itDropdownItem","","externalLink","true",3,"href","active","disabled","large","iconName","iconPosition"],[1,"row"],[1,"form-check","col-3"],["label","Disposizione orizzontale",3,"ngModelChange","ngModel"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],["label","Con intestazione",3,"ngModelChange","ngModel"],[1,"form-check","col-2"],["name","default","label","Default",3,"ngModelChange","ngModel","value"],["name","dropup","value","dropup","label","Dropup",3,"ngModelChange","ngModel"],["name","dropstart","value","dropstart","label","Dropstart",3,"ngModelChange","ngModel"],["name","dropend","value","dropend","label","Dropend",3,"ngModelChange","ngModel"],["name","clickMe","value","Click me","label","Click me",3,"ngModelChange","ngModel"],["name","check","value","Check","label","Check",3,"ngModelChange","ngModel"],["name","hello","value","Hello world!","label","Hello world!",3,"ngModelChange","ngModel"],[1,"form-check","col-5"],[1,"form-check","col-4"],["name","none","label","None",3,"ngModelChange","ngModel","value"],["name","primary","value","primary","label","Primary",3,"ngModelChange","ngModel"],["name","secondary","value","secondary","label","Secondary",3,"ngModelChange","ngModel"],["name","success","value","success","label","Success",3,"ngModelChange","ngModel"],["name","warning","value","warning","label","Warning",3,"ngModelChange","ngModel"],["name","danger","value","danger","label","Danger",3,"ngModelChange","ngModel"],["name","info","value","info","label","Info",3,"ngModelChange","ngModel"],["name","light","value","light","label","Light",3,"ngModelChange","ngModel"],["name","dark","value","dark","label","Dark",3,"ngModelChange","ngModel"]],template:function(c,n){c&1&&(o(0,"h3"),s(1,"Dropdown accessibile"),t(),o(2,"p"),s(3,"Dropdown che sfrutta host attribute"),t(),o(4,"div",0)(5,"p",1)(6,"it-dropdown",2),k("showEvent",function(){return n.onOpenEvent()})("hideEvent",function(){return n.onCloseEvent()}),o(7,"span",3),s(8),t(),_(9,me,2,0,"span",4),v(10,5),_(11,pe,1,0,"li",6),M(12,se,2,7,"li",7,f),D(),t()(),o(14,"p",1),s(15),t(),o(16,"p",1),s(17),t(),o(18,"div",8)(19,"div",9)(20,"h5"),s(21,"Opzioni"),t(),o(22,"it-checkbox",10),m("ngModelChange",function(e){return d(n.isFullWidth,e)||(n.isFullWidth=e),e}),t(),o(23,"it-checkbox",11),m("ngModelChange",function(e){return d(n.isDark,e)||(n.isDark=e),e}),t(),o(24,"it-checkbox",12),m("ngModelChange",function(e){return d(n.withHeading,e)||(n.withHeading=e),e}),t()(),o(25,"div",13)(26,"h5"),s(27,"Posizione menu"),t(),o(28,"it-radio-button",14),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(29,"it-radio-button",15),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(30,"it-radio-button",16),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t(),o(31,"it-radio-button",17),m("ngModelChange",function(e){return d(n.menuPlacement,e)||(n.menuPlacement=e),e}),t()(),o(32,"div",13)(33,"h5"),s(34,"Testo"),t(),o(35,"it-radio-button",18),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t(),o(36,"it-radio-button",19),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t(),o(37,"it-radio-button",20),m("ngModelChange",function(e){return d(n.label,e)||(n.label=e),e}),t()(),o(38,"div",21)(39,"h5"),s(40,"Colorazione"),t(),o(41,"div",8)(42,"div",22)(43,"it-radio-button",23),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(44,"it-radio-button",24),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(45,"it-radio-button",25),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(46,"it-radio-button",26),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(47,"it-radio-button",27),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t()(),o(48,"div",21)(49,"it-radio-button",28),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(50,"it-radio-button",29),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(51,"it-radio-button",30),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t(),o(52,"it-radio-button",31),m("ngModelChange",function(e){return d(n.color,e)||(n.color=e),e}),t()()()()()()),c&2&&(i(6),u("color",n.color)("dark",n.isDark)("direction",n.menuPlacement)("fullWidth",n.isFullWidth),i(2),I(n.label),i(),C(n.withHeading?9:-1),i(2),C(n.withHeading?11:-1),i(),y(n.items),i(3),g("Open: ",n.openTime),i(2),g("Close: ",n.closeTime),i(5),r("ngModel",n.isFullWidth),i(),r("ngModel",n.isDark),i(),r("ngModel",n.withHeading),i(4),r("ngModel",n.menuPlacement),u("value",void 0),i(),r("ngModel",n.menuPlacement),i(),r("ngModel",n.menuPlacement),i(),r("ngModel",n.menuPlacement),i(4),r("ngModel",n.label),i(),r("ngModel",n.label),i(),r("ngModel",n.label),i(6),r("ngModel",n.color),u("value",void 0),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(2),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color),i(),r("ngModel",n.color))},dependencies:[S,E,B,x,H,L],encapsulation:2})}}return a})();var Y=(()=>{class a{constructor(){}static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275cmp=w({type:a,selectors:[["it-dropdown-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Esempio Dropdown</h3>
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
      @if (withHeading) {
        <span listHeading>Intestazione Menu</span>
      }

      <ng-container list>
        @if (withHeading) {
          <it-dropdown-item divider="true"></it-dropdown-item>
        }

        @for (item of items; track item) {
          <it-dropdown-item
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </it-dropdown-item>
        }
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
  standalone: false,
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
        @for (item of items; track item) {
          <it-dropdown-item
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </it-dropdown-item>
        }
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-dropdown-link-example',
  templateUrl: './dropdown-link-example.component.html',
  standalone: false,
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
}`],["html",`<h3>Dropdown accessibile</h3>
<p>Dropdown che sfrutta host attribute</p>
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
      @if (withHeading) {
        <span listHeading>Intestazione Menu</span>
      }

      <ng-container list>
        @if (withHeading) {
          <li itDropdownItem divider="true"></li>
        }

        @for (item of items; track item) {
          <li
            itDropdownItem
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </li>
        }
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
  selector: 'it-dropdown-host-attribute',
  templateUrl: './dropdown-host-attribute.component.html',
  standalone: false,
})
export class DropdownHostAttributeComponent {
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
}`]],template:function(c,n){c&1&&h(0,"it-dropdown-example")(1,"it-source-display",0)(2,"it-dropdown-link-example")(3,"it-source-display",1)(4,"it-dropdown-host-attribute")(5,"it-source-display",2)},dependencies:[U,Q,V,X],encapsulation:2})}}return a})();var Z=(()=>{class a{constructor(){this.component=z.components.find(p=>p.name==="ItDropdownComponent"),this.subcomponent=z.components.find(p=>p.name==="ItDropdownItemComponent")}static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275cmp=w({type:a,selectors:[["it-dropdown-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(c,n){c&1&&(o(0,"h1",0),s(1,"Dropdown"),t(),o(2,"p",1),s(3,"Il componente Dropdown per men\xF9 a tendina contestuali"),t(),h(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),h(7,"it-dropdown-examples"),t(),o(8,"it-tab-item",4)(9,"h2"),s(10,"Dropdown"),t(),h(11,"it-api-parameters",5),o(12,"h2"),s(13,"Dropdown Item"),t(),h(14,"it-api-parameters",5),t()()),c&2&&(i(4),u("innerHTML",n.component.description,A),i(7),u("component",n.component),i(3),u("component",n.subcomponent))},dependencies:[q,j,R,Y],encapsulation:2})}}return a})();var ge=[{path:"",component:Z}],$=(()=>{class a{static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275mod=T({type:a})}static{this.\u0275inj=P({imports:[O.forChild(ge),O]})}}return a})();var Ae=(()=>{class a{static{this.\u0275fac=function(c){return new(c||a)}}static{this.\u0275mod=T({type:a})}static{this.\u0275inj=P({imports:[F,$,G,N]})}}return a})();export{Ae as DropdownModule};
