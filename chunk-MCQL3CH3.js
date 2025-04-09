import{a as S,b as L,c as O,d as V}from"./chunk-FNEUKG6X.js";import{L as N,O as W,Z as z,_ as P,ga as C,ha as v,pa as B,q as F}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as k}from"./chunk-53YMBHPH.js";import{$b as g,Cb as i,Db as a,Eb as d,Kb as I,Pc as E,Ua as D,Wb as l,Wc as w,Y as T,Yb as _,Za as m,_b as h,ac as u,fa as c,ga as y,ob as M,qb as p}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";function K(n,e){if(n&1&&(i(0,"it-tab-item",12),l(1),a()),n&2){let b=e.$implicit,s=e.index;p("label",b.label)("icon",b.icon)("active",s===0),m(),_(" ",b.content," ")}}var H=(()=>{let e=class e{constructor(){this.isDarkTheme=!1,this.isDisabled=!1,this.isCard=!1,this.isVertical=!1,this.isInverted=!1,this.tabs=[{label:"tab1",content:"content1",icon:"file"},{label:"tab2",content:"content2",icon:"calendar"},{label:"tab3",content:"content3",icon:"comment"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-tabs-example"]],decls:24,vars:11,consts:[[1,"bd-example"],[1,"example-section"],["label","Tema scuro",3,"ngModelChange","ngModel"],["label","Disabilita tab custom",3,"ngModelChange","ngModel"],["label","Navigazione a card",3,"ngModelChange","ngModel"],["label","Navigazione verticale",3,"ngModelChange","ngModel"],["label","Posizione invertita",3,"ngModelChange","ngModel"],[1,"mt-5","mb-4"],[3,"dark","cards","vertical","inverted"],[3,"label","icon","active",4,"ngFor","ngForOf"],["label","custom","icon","settings",3,"disabled"],["itBadge","secondary"],[3,"label","icon","active"]],template:function(o,t){o&1&&(i(0,"h3"),l(1,"Configurazione tabs"),a(),i(2,"div",0)(3,"p",1)(4,"it-checkbox",2),u("ngModelChange",function(r){return g(t.isDarkTheme,r)||(t.isDarkTheme=r),r}),a()(),i(5,"p",1)(6,"it-checkbox",3),u("ngModelChange",function(r){return g(t.isDisabled,r)||(t.isDisabled=r),r}),a()(),i(7,"p",1)(8,"it-checkbox",4),u("ngModelChange",function(r){return g(t.isCard,r)||(t.isCard=r),r}),a()(),i(9,"p",1)(10,"it-checkbox",5),u("ngModelChange",function(r){return g(t.isVertical,r)||(t.isVertical=r),r}),a()(),i(11,"p",1)(12,"it-checkbox",6),u("ngModelChange",function(r){return g(t.isInverted,r)||(t.isInverted=r),r}),a()(),i(13,"h4",7),l(14,"Risultato tabs"),a(),i(15,"it-tab-container",8),M(16,K,2,4,"it-tab-item",9),i(17,"it-tab-item",10)(18,"h4"),l(19,"Titolo"),a(),i(20,"p"),l(21,"Contenuto complesso "),i(22,"span",11),l(23,"badge"),a()()()()()),o&2&&(m(4),h("ngModel",t.isDarkTheme),m(2),h("ngModel",t.isDisabled),m(2),h("ngModel",t.isCard),m(2),h("ngModel",t.isVertical),m(2),h("ngModel",t.isInverted),m(3),p("dark",t.isDarkTheme)("cards",t.isCard)("vertical",t.isVertical)("inverted",t.isInverted),m(),p("ngForOf",t.tabs),m(),p("disabled",t.isDisabled))},dependencies:[E,N,W,F,v,C,B]});let n=e;return n})();function X(n,e){if(n&1&&(i(0,"it-tab-item",4),l(1),a()),n&2){let b=e.$implicit,s=e.index;p("id","tab-"+s)("label",b)("active",s===0),m(),_(" contenuto del ",b," tab ")}}var R=(()=>{let e=class e{constructor(){this.tabs=["Primo","Secondo","Terzo"]}addTab(){this.tabs.push("Nuovo")}removeTab(s){this.tabs.splice(s,1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-tabs-dynamic-example"]],decls:8,vars:3,consts:[[1,"bd-example"],[1,"mt-5"],[3,"tabClosed","tabAdded","cards","editable"],[3,"id","label","active",4,"ngFor","ngForOf"],[3,"id","label","active"]],template:function(o,t){o&1&&(i(0,"h3"),l(1,"Tabs Dinamiche"),a(),i(2,"div",0)(3,"div",1)(4,"h4"),l(5,"Risultato tabs"),a(),i(6,"it-tab-container",2),I("tabClosed",function(r){return t.removeTab(r)})("tabAdded",function(){return t.addTab()}),M(7,X,2,4,"it-tab-item",3),a()()()),o&2&&(m(6),p("cards",!0)("editable",!0),m(),p("ngForOf",t.tabs))},dependencies:[E,v,C]});let n=e;return n})();var j=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-tabs-examples"]],decls:4,vars:0,consts:[["html",`<h3>Configurazione tabs</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isCard" label="Navigazione a card"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isVertical" label="Navigazione verticale"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isInverted" label="Posizione invertita"></it-checkbox>
  </p>

  <h4 class="mt-5 mb-4">Risultato tabs</h4>
  <!--    TODO  [pill]="isPill"-->
  <it-tab-container [dark]="isDarkTheme" [cards]="isCard" [vertical]="isVertical" [inverted]="isInverted">
    <it-tab-item *ngFor="let tab of tabs; let i = index" [label]="tab.label" [icon]="tab.icon" [active]="i === 0">
      /{/{ tab.content /}/}
    </it-tab-item>
    <it-tab-item label="custom" [disabled]="isDisabled" icon="settings">
      <h4>Titolo</h4>
      <p>Contenuto complesso <span itBadge="secondary">badge</span></p>
    </it-tab-item>
  </it-tab-container>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss'],
})
export class TabsExampleComponent {
  isDarkTheme = false;

  isDisabled = false;

  isCard = false;

  isVertical = false;

  isInverted = false;

  tabs: Array<{
    label: string;
    content: string;
    icon: IconName;
  }> = [
    {
      label: 'tab1',
      content: 'content1',
      icon: 'file',
    },
    {
      label: 'tab2',
      content: 'content2',
      icon: 'calendar',
    },
    {
      label: 'tab3',
      content: 'content3',
      icon: 'comment',
    },
  ];
}`],["html",`<h3>Tabs Dinamiche</h3>
<div class="bd-example">
  <div class="mt-5">
    <h4>Risultato tabs</h4>
    <it-tab-container [cards]="true" [editable]="true" (tabClosed)="removeTab($event)" (tabAdded)="addTab()">
      <it-tab-item [id]="'tab-' + index" *ngFor="let tab of tabs; let index = index" [label]="tab" [active]="index === 0">
        contenuto del /{/{ tab /}/} tab
      </it-tab-item>
    </it-tab-container>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss'],
})
export class TabsDynamicExampleComponent {
  tabs = ['Primo', 'Secondo', 'Terzo'];

  addTab() {
    this.tabs.push('Nuovo');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}`]],template:function(o,t){o&1&&d(0,"it-tabs-example")(1,"it-source-display",0)(2,"it-tabs-dynamic-example")(3,"it-source-display",1)},dependencies:[O,H,R]});let n=e;return n})();var U=(()=>{let e=class e{constructor(){this.tabGroupComponent=S.components.find(s=>s.name==="ItTabContainerComponent"),this.tabComponent=S.components.find(s=>s.name==="ItTabItemComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-tabs-index"]],decls:21,vars:4,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Descrizione"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,t){o&1&&(i(0,"h1",0),l(1,"Tabs"),a(),i(2,"p",1),l(3,"Il componente Tabs"),a(),i(4,"div",2)(5,"h3"),l(6,"Tab Group"),a(),d(7,"div",3),i(8,"h3"),l(9,"Tab"),a(),d(10,"div",3),a(),i(11,"it-tab-container")(12,"it-tab-item",4),d(13,"it-tabs-examples"),a(),i(14,"it-tab-item",5)(15,"h2"),l(16,"Tab Group"),a(),d(17,"it-api-parameters",6),i(18,"h2"),l(19,"Tab"),a(),d(20,"it-api-parameters",6),a()()),o&2&&(m(7),p("innerHTML",t.tabGroupComponent.description,D),m(3),p("innerHTML",t.tabComponent.description,D),m(7),p("component",t.tabGroupComponent),m(3),p("component",t.tabComponent))},dependencies:[L,v,C,j]});let n=e;return n})();var $=[{path:"",component:U}],q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=T({imports:[k.forChild($),k]});let n=e;return n})();var ye=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=T({imports:[w,z,P,V,q]});let n=e;return n})();export{ye as TabsModule};
