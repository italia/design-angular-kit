import{a as w,b as j,c as H,d as O}from"./chunk-U6QXSFPS.js";import{Aa as P,Ba as A,L as D,O as W,Z as N,ga as T,ha as F,na as z,pa as L,t as x}from"./chunk-EZQPAPWN.js";import"./chunk-XZP45KYQ.js";import{o as M}from"./chunk-NU7RFJ6M.js";import{$b as u,Cb as r,Db as n,Eb as h,Kb as _,Pc as S,Ua as k,Wb as s,Wc as I,Y as f,Yb as B,Za as l,_b as p,ac as b,fa as g,ga as C,ob as E,qb as c}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";function J(o,e){if(o&1&&(r(0,"it-breadcrumb-item",17),s(1),n()),o&2){let y=e.$implicit;c("href",y.link)("iconName",y.icon),l(),B(" ",y.label," ")}}var R=(()=>{let e=class e{constructor(){this._icon="star-outline",this.separator="/",this.isDark=!1,this.items=[{link:"https://www.aol.com",label:"Crumb 1",icon:this.icon},{link:"https://www.yahoo.com",label:"Crumb 2",icon:this.icon},{link:"https://www.bing.com",label:"Crumb 3",icon:this.icon}],this.i=4}get icon(){return this._icon}set icon(m){this._icon=m,this.items.forEach(a=>a.icon=this._icon)}insert(){this.items.push({link:"https://www.google.com",label:`Crumb ${this.i}`,icon:this.icon}),this.i++}remove(){this.items.length&&(this.items.pop(),this.i--)}change(){this.separator=this.separator==="/"?">":"/",this.items.forEach(m=>{m.icon=m.icon==="star-outline"?"locked":"star-outline"})}toggle(){this.isDark=!this.isDark}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=g({type:e,selectors:[["it-breadcrumb-example"]],decls:29,vars:12,consts:[[1,"bd-example"],[3,"dark","separator"],["class","me-1",3,"href","iconName",4,"ngFor","ngForOf"],[1,"row"],[1,"form-check","col-6"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],[1,"row","mt-4"],[1,"col-6"],["itButton","primary","size","lg",1,"mb-3",3,"click"],["itButton","primary","size","lg",1,"mb-3",3,"click","disabled"],[1,"form-check","col-3"],["value","/","label","/","name","separator",3,"ngModelChange","ngModel"],["value",">","label",">","name","separator",3,"ngModelChange","ngModel"],["value","~","label","~","name","separator",3,"ngModelChange","ngModel"],["label","Nessuna","name","icon",3,"ngModelChange","value","ngModel"],["value","star-outline","label","it-star-outline","name","icon",3,"ngModelChange","ngModel"],["value","link","label","it-link","name","icon",3,"ngModelChange","ngModel"],[1,"me-1",3,"href","iconName"]],template:function(a,t){a&1&&(r(0,"h3"),s(1,"Esempio Breadcrumb"),n(),r(2,"div",0)(3,"it-breadcrumb",1),E(4,J,2,3,"it-breadcrumb-item",2),n(),r(5,"div",3)(6,"div",4)(7,"h4"),s(8,"Azioni"),n(),r(9,"it-checkbox",5),b("ngModelChange",function(i){return u(t.isDark,i)||(t.isDark=i),i}),n(),r(10,"div",6)(11,"div",7)(12,"button",8),_("click",function(){return t.insert()}),s(13,"Aggiungi breadcrumb"),n()(),r(14,"div",7)(15,"button",9),_("click",function(){return t.remove()}),s(16,"Rimuovi breadcrumb"),n()()()(),r(17,"div",10)(18,"h5"),s(19,"Separatore"),n(),r(20,"it-radio-button",11),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n(),r(21,"it-radio-button",12),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n(),r(22,"it-radio-button",13),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n()(),r(23,"div",10)(24,"h5"),s(25,"Icona"),n(),r(26,"it-radio-button",14),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n(),r(27,"it-radio-button",15),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n(),r(28,"it-radio-button",16),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n()()()()),a&2&&(l(3),c("dark",t.isDark)("separator",t.separator),l(),c("ngForOf",t.items),l(5),p("ngModel",t.isDark),l(6),c("disabled",!t.items.length),l(5),p("ngModel",t.separator),l(),p("ngModel",t.separator),l(),p("ngModel",t.separator),l(4),c("value",void 0),p("ngModel",t.icon),l(),p("ngModel",t.icon),l(),p("ngModel",t.icon))},dependencies:[S,D,W,x,z,L,A,P]});let o=e;return o})();var U=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=g({type:e,selectors:[["it-breadcrumb-examples"]],decls:2,vars:0,consts:[["html",`<h3>Esempio Breadcrumb</h3>
<div class="bd-example">
  <it-breadcrumb [dark]="isDark" [separator]="separator">
    <it-breadcrumb-item *ngFor="let item of items" class="me-1" [href]="item.link" [iconName]="item.icon">
      /{/{ item.label /}/}
    </it-breadcrumb-item>
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
    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon },
    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon },
    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon },
  ];

  i = 4;

  insert() {
    this.items.push({ link: \`https://www.google.com\`, label: \`Crumb \${this.i}\`, icon: this.icon });
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
}`]],template:function(a,t){a&1&&h(0,"it-breadcrumb-example")(1,"it-source-display",0)},dependencies:[H,R]});let o=e;return o})();var q=(()=>{let e=class e{constructor(){this.component=w.components.find(m=>m.name==="ItBreadcrumbComponent"),this.subcomponent=w.components.find(m=>m.name==="ItBreadcrumbItemComponent")}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=g({type:e,selectors:[["it-breadcrumb-index"]],decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(a,t){a&1&&(r(0,"h1",0),s(1,"Breadcrumb"),n(),r(2,"p",1),s(3,"Il componente Breadcrumb utilizzabile per la navigazione"),n(),h(4,"div",2),r(5,"it-tab-container")(6,"it-tab-item",3),h(7,"it-breadcrumb-examples"),n(),r(8,"it-tab-item",4)(9,"h2"),s(10,"Breadcrumb"),n(),h(11,"it-api-parameters",5),r(12,"h2"),s(13,"Breadcrumb Item"),n(),h(14,"it-api-parameters",5),n()()),a&2&&(l(4),c("innerHTML",t.component.description,k),l(7),c("component",t.component),l(3),c("component",t.subcomponent))},dependencies:[j,F,T,U]});let o=e;return o})();var V=[{path:"",component:q}],G=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=C({type:e}),e.\u0275inj=f({imports:[M.forChild(V),M]});let o=e;return o})();var Me=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=C({type:e}),e.\u0275inj=f({imports:[I,N,O,G]});let o=e;return o})();export{Me as BreadcrumbModule};
