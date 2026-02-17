import{a as A,b as M,c as R,d as j}from"./chunk-K63BAWCR.js";import{Ga as P,Ha as F,Q as I,T as D,ca as W,la as T,ma as N,sa as z,ua as L,y as x}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as _}from"./chunk-A2FNTR3N.js";import{m as S}from"./chunk-3O7E6U5R.js";import{Eb as w,Fb as k,Gb as B,Hb as s,Ib as a,Jb as o,Kb as b,Ta as y,V as g,Vb as C,Xa as m,gc as l,ic as E,jb as h,kb as f,kc as d,lc as p,mc as u}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";function K(t,J){if(t&1&&(a(0,"it-breadcrumb-item",2),l(1),o()),t&2){let i=J.$implicit;s("href",i.link)("iconName",i.icon)("active",i.active),m(),E(" ",i.label," ")}}var H=(()=>{class t{constructor(){this._icon="star-outline",this.separator="/",this.isDark=!1,this.items=[{link:"https://www.aol.com",label:"Crumb 1",icon:this.icon,active:!1},{link:"https://www.yahoo.com",label:"Crumb 2",icon:this.icon,active:!1},{link:"https://www.bing.com",label:"Crumb 3",icon:this.icon,active:!0}],this.i=4}get icon(){return this._icon}set icon(i){this._icon=i,this.items.forEach(r=>r.icon=this._icon)}insert(){for(let i of this.items)i.active=!1;this.items.push({link:"https://www.google.com",label:`Crumb ${this.i}`,icon:this.icon,active:!0}),this.i++}remove(){this.items.length&&(this.items.pop(),this.i--)}change(){this.separator=this.separator==="/"?">":"/",this.items.forEach(i=>{i.icon=i.icon==="star-outline"?"locked":"star-outline"})}toggle(){this.isDark=!this.isDark}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=h({type:t,selectors:[["it-breadcrumb-example"]],standalone:!1,decls:30,vars:11,consts:[[1,"bd-example"],[3,"dark","separator"],[1,"me-1",3,"href","iconName","active"],[1,"row"],[1,"form-check","col-6"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],[1,"row","mt-4"],[1,"col-6"],["itButton","primary","size","lg",1,"mb-3",3,"click"],["itButton","primary","size","lg",1,"mb-3",3,"click","disabled"],[1,"form-check","col-3"],["value","/","label","/","name","separator",3,"ngModelChange","ngModel"],["value",">","label",">","name","separator",3,"ngModelChange","ngModel"],["value","~","label","~","name","separator",3,"ngModelChange","ngModel"],["label","Nessuna","name","icon",3,"ngModelChange","value","ngModel"],["value","star-outline","label","it-star-outline","name","icon",3,"ngModelChange","ngModel"],["value","link","label","it-link","name","icon",3,"ngModelChange","ngModel"]],template:function(r,e){r&1&&(a(0,"h3"),l(1,"Esempio Breadcrumb"),o(),a(2,"div",0)(3,"it-breadcrumb",1),k(4,K,2,4,"it-breadcrumb-item",2,w),o(),a(6,"div",3)(7,"div",4)(8,"h4"),l(9,"Azioni"),o(),a(10,"it-checkbox",5),u("ngModelChange",function(n){return p(e.isDark,n)||(e.isDark=n),n}),o(),a(11,"div",6)(12,"div",7)(13,"button",8),C("click",function(){return e.insert()}),l(14,"Aggiungi breadcrumb"),o()(),a(15,"div",7)(16,"button",9),C("click",function(){return e.remove()}),l(17,"Rimuovi breadcrumb"),o()()()(),a(18,"div",10)(19,"h5"),l(20,"Separatore"),o(),a(21,"it-radio-button",11),u("ngModelChange",function(n){return p(e.separator,n)||(e.separator=n),n}),o(),a(22,"it-radio-button",12),u("ngModelChange",function(n){return p(e.separator,n)||(e.separator=n),n}),o(),a(23,"it-radio-button",13),u("ngModelChange",function(n){return p(e.separator,n)||(e.separator=n),n}),o()(),a(24,"div",10)(25,"h5"),l(26,"Icona"),o(),a(27,"it-radio-button",14),u("ngModelChange",function(n){return p(e.icon,n)||(e.icon=n),n}),o(),a(28,"it-radio-button",15),u("ngModelChange",function(n){return p(e.icon,n)||(e.icon=n),n}),o(),a(29,"it-radio-button",16),u("ngModelChange",function(n){return p(e.icon,n)||(e.icon=n),n}),o()()()()),r&2&&(m(3),s("dark",e.isDark)("separator",e.separator),m(),B(e.items),m(6),d("ngModel",e.isDark),m(6),s("disabled",!e.items.length),m(5),d("ngModel",e.separator),m(),d("ngModel",e.separator),m(),d("ngModel",e.separator),m(4),s("value",void 0),d("ngModel",e.icon),m(),d("ngModel",e.icon),m(),d("ngModel",e.icon))},dependencies:[I,D,x,z,L,F,P],encapsulation:2})}}return t})();var U=(()=>{class t{constructor(){}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=h({type:t,selectors:[["it-breadcrumb-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempio Breadcrumb</h3>
<div class="bd-example">
  <it-breadcrumb [dark]="isDark" [separator]="separator">
    @for (item of items; track item) {
      <it-breadcrumb-item class="me-1" [href]="item.link" [iconName]="item.icon" [active]="item.active">
        /{/{ item.label /}/}
      </it-breadcrumb-item>
    }
  </it-breadcrumb>

  <div class="row">
    <div class="form-check col-6">
      <h4>Azioni</h4>
      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro"></it-checkbox>

      <div class="row mt-4">
        <div class="col-6">
          <button itButton="primary" size="lg" class="mb-3" (click)="insert()">Aggiungi breadcrumb</button>
        </div>
        <div class="col-6">
          <button itButton="primary" size="lg" class="mb-3" (click)="remove()" [disabled]="!items.length">Rimuovi breadcrumb</button>
        </div>
      </div>
    </div>

    <div class="form-check col-3">
      <h5>Separatore</h5>
      <it-radio-button value="/" label="/" [(ngModel)]="separator" name="separator"></it-radio-button>
      <it-radio-button value=">" label=">" [(ngModel)]="separator" name="separator"></it-radio-button>
      <it-radio-button value="~" label="~" [(ngModel)]="separator" name="separator"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Icona</h5>
      <it-radio-button [value]="undefined" label="Nessuna" [(ngModel)]="icon" name="icon"></it-radio-button>
      <it-radio-button value="star-outline" label="it-star-outline" [(ngModel)]="icon" name="icon"></it-radio-button>
      <it-radio-button value="link" label="it-link" [(ngModel)]="icon" name="icon"></it-radio-button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-breadcrumb-example',
  templateUrl: './breadcrumb-example.component.html',
  styleUrls: ['./breadcrumb-example.component.scss'],
  standalone: false,
})
export class BreadcrumbExampleComponent {
  get icon(): IconName {
    return this._icon;
  }
  set icon(value: IconName) {
    this._icon = value;
    this.items.forEach(item => (item.icon = this._icon));
  }
  private _icon: IconName = 'star-outline';

  separator = '/';
  isDark = false;
  items = [
    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon, active: false },
    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon, active: false },
    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon, active: true },
  ];

  i = 4;

  insert() {
    for (const item of this.items) {
      item.active = false;
    }
    this.items.push({ link: \`https://www.google.com\`, label: \`Crumb \${this.i}\`, icon: this.icon, active: true });
    this.i++;
  }

  remove() {
    if (this.items.length) {
      this.items.pop();
      this.i--;
    }
  }

  change() {
    this.separator = this.separator === '/' ? '>' : '/';
    this.items.forEach(item => {
      item.icon = item.icon === 'star-outline' ? 'locked' : 'star-outline';
    });
  }

  toggle() {
    this.isDark = !this.isDark;
  }
}`]],template:function(r,e){r&1&&b(0,"it-breadcrumb-example")(1,"it-source-display",0)},dependencies:[A,H],encapsulation:2})}}return t})();var q=(()=>{class t{constructor(){this.component=M.components.find(i=>i.name==="ItBreadcrumbComponent"),this.subcomponent=M.components.find(i=>i.name==="ItBreadcrumbItemComponent")}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=h({type:t,selectors:[["it-breadcrumb-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,e){r&1&&(a(0,"h1",0),l(1,"Breadcrumb"),o(),a(2,"p",1),l(3,"Il componente Breadcrumb utilizzabile per la navigazione"),o(),b(4,"div",2),a(5,"it-tab-container")(6,"it-tab-item",3),b(7,"it-breadcrumb-examples"),o(),a(8,"it-tab-item",4)(9,"h2"),l(10,"Breadcrumb"),o(),b(11,"it-api-parameters",5),a(12,"h2"),l(13,"Breadcrumb Item"),o(),b(14,"it-api-parameters",5),o()()),r&2&&(m(4),s("innerHTML",e.component.description,y),m(7),s("component",e.component),m(3),s("component",e.subcomponent))},dependencies:[R,N,T,U],encapsulation:2})}}return t})();var V=[{path:"",component:q}],G=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=g({imports:[_.forChild(V),_]})}}return t})();var Me=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=g({imports:[S,W,j,G]})}}return t})();export{Me as BreadcrumbModule};
