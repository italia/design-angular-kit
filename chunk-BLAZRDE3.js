import{a as H,b as w,c as R,d as U}from"./chunk-CQV3UQHT.js";import{Ga as A,Ha as j,Q as W,T,ca as N,la as z,ma as L,sa as P,ua as F,y as D}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as _}from"./chunk-DVW5EFKD.js";import{m as x}from"./chunk-I647ZKKI.js";import{Eb as E,Fb as B,Gb as S,Hb as c,Ib as a,Jb as n,Kb as h,Sa as k,Sb as M,Wa as l,Y as v,cc as s,ec as I,fb as f,gb as C,gc as p,hc as u,ic as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function O(o,e){if(o&1&&(a(0,"it-breadcrumb-item",2),s(1),n()),o&2){let g=e.$implicit;c("href",g.link)("iconName",g.icon)("active",g.active),l(),I(" ",g.label," ")}}var q=(()=>{let e=class e{constructor(){this._icon="star-outline",this.separator="/",this.isDark=!1,this.items=[{link:"https://www.aol.com",label:"Crumb 1",icon:this.icon,active:!1},{link:"https://www.yahoo.com",label:"Crumb 2",icon:this.icon,active:!1},{link:"https://www.bing.com",label:"Crumb 3",icon:this.icon,active:!0}],this.i=4}get icon(){return this._icon}set icon(m){this._icon=m,this.items.forEach(r=>r.icon=this._icon)}insert(){for(let m of this.items)m.active=!1;this.items.push({link:"https://www.google.com",label:`Crumb ${this.i}`,icon:this.icon,active:!0}),this.i++}remove(){this.items.length&&(this.items.pop(),this.i--)}change(){this.separator=this.separator==="/"?">":"/",this.items.forEach(m=>{m.icon=m.icon==="star-outline"?"locked":"star-outline"})}toggle(){this.isDark=!this.isDark}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["it-breadcrumb-example"]],standalone:!1,decls:30,vars:11,consts:[[1,"bd-example"],[3,"dark","separator"],[1,"me-1",3,"href","iconName","active"],[1,"row"],[1,"form-check","col-6"],["label","Sfondo scuro",3,"ngModelChange","ngModel"],[1,"row","mt-4"],[1,"col-6"],["itButton","primary","size","lg",1,"mb-3",3,"click"],["itButton","primary","size","lg",1,"mb-3",3,"click","disabled"],[1,"form-check","col-3"],["value","/","label","/","name","separator",3,"ngModelChange","ngModel"],["value",">","label",">","name","separator",3,"ngModelChange","ngModel"],["value","~","label","~","name","separator",3,"ngModelChange","ngModel"],["label","Nessuna","name","icon",3,"ngModelChange","value","ngModel"],["value","star-outline","label","it-star-outline","name","icon",3,"ngModelChange","ngModel"],["value","link","label","it-link","name","icon",3,"ngModelChange","ngModel"]],template:function(r,t){r&1&&(a(0,"h3"),s(1,"Esempio Breadcrumb"),n(),a(2,"div",0)(3,"it-breadcrumb",1),B(4,O,2,4,"it-breadcrumb-item",2,E),n(),a(6,"div",3)(7,"div",4)(8,"h4"),s(9,"Azioni"),n(),a(10,"it-checkbox",5),b("ngModelChange",function(i){return u(t.isDark,i)||(t.isDark=i),i}),n(),a(11,"div",6)(12,"div",7)(13,"button",8),M("click",function(){return t.insert()}),s(14,"Aggiungi breadcrumb"),n()(),a(15,"div",7)(16,"button",9),M("click",function(){return t.remove()}),s(17,"Rimuovi breadcrumb"),n()()()(),a(18,"div",10)(19,"h5"),s(20,"Separatore"),n(),a(21,"it-radio-button",11),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n(),a(22,"it-radio-button",12),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n(),a(23,"it-radio-button",13),b("ngModelChange",function(i){return u(t.separator,i)||(t.separator=i),i}),n()(),a(24,"div",10)(25,"h5"),s(26,"Icona"),n(),a(27,"it-radio-button",14),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n(),a(28,"it-radio-button",15),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n(),a(29,"it-radio-button",16),b("ngModelChange",function(i){return u(t.icon,i)||(t.icon=i),i}),n()()()()),r&2&&(l(3),c("dark",t.isDark)("separator",t.separator),l(),S(t.items),l(6),p("ngModel",t.isDark),l(6),c("disabled",!t.items.length),l(5),p("ngModel",t.separator),l(),p("ngModel",t.separator),l(),p("ngModel",t.separator),l(4),c("value",void 0),p("ngModel",t.icon),l(),p("ngModel",t.icon),l(),p("ngModel",t.icon))},dependencies:[W,T,D,P,F,j,A],encapsulation:2});let o=e;return o})();var G=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["it-breadcrumb-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempio Breadcrumb</h3>
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
}`]],template:function(r,t){r&1&&h(0,"it-breadcrumb-example")(1,"it-source-display",0)},dependencies:[H,q],encapsulation:2});let o=e;return o})();var J=(()=>{let e=class e{constructor(){this.component=w.components.find(m=>m.name==="ItBreadcrumbComponent"),this.subcomponent=w.components.find(m=>m.name==="ItBreadcrumbItemComponent")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["it-breadcrumb-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,t){r&1&&(a(0,"h1",0),s(1,"Breadcrumb"),n(),a(2,"p",1),s(3,"Il componente Breadcrumb utilizzabile per la navigazione"),n(),h(4,"div",2),a(5,"it-tab-container")(6,"it-tab-item",3),h(7,"it-breadcrumb-examples"),n(),a(8,"it-tab-item",4)(9,"h2"),s(10,"Breadcrumb"),n(),h(11,"it-api-parameters",5),a(12,"h2"),s(13,"Breadcrumb Item"),n(),h(14,"it-api-parameters",5),n()()),r&2&&(l(4),c("innerHTML",t.component.description,k),l(7),c("component",t.component),l(3),c("component",t.subcomponent))},dependencies:[R,L,z,G],encapsulation:2});let o=e;return o})();var X=[{path:"",component:J}],K=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=v({imports:[_.forChild(X),_]});let o=e;return o})();var _e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=v({imports:[x,N,U,K]});let o=e;return o})();export{_e as BreadcrumbModule};
