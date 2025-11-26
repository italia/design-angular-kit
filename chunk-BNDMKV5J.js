import{a as V,b as S,c as A,d as G}from"./chunk-CQV3UQHT.js";import{Q as z,T as P,ca as B,da as F,la as g,ma as x,sa as L,v as N}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as I}from"./chunk-DVW5EFKD.js";import{m as W}from"./chunk-I647ZKKI.js";import{Eb as M,Fb as E,Gb as _,Hb as c,Ib as i,Jb as a,Kb as d,Sa as k,Sb as w,Wa as l,Y as v,cc as m,ec as D,fb as p,gb as y,gc as h,hc as u,ic as C}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function K(n,e){if(n&1&&(i(0,"it-tab-item",9),m(1),a()),n&2){let b=e.$implicit,s=e.$index;c("label",b.label)("icon",b.icon)("active",s===0),l(),D(" ",b.content," ")}}var j=(()=>{let e=class e{constructor(){this.isDarkTheme=!1,this.isDisabled=!1,this.isCard=!1,this.isVertical=!1,this.isInverted=!1,this.tabs=[{label:"tab1",content:"content1",icon:"file"},{label:"tab2",content:"content2",icon:"calendar"},{label:"tab3",content:"content3",icon:"comment"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-tabs-example"]],standalone:!1,decls:25,vars:10,consts:[[1,"bd-example"],[1,"example-section"],["label","Tema scuro",3,"ngModelChange","ngModel"],["label","Disabilita tab custom",3,"ngModelChange","ngModel"],["label","Navigazione a card",3,"ngModelChange","ngModel"],["label","Navigazione verticale",3,"ngModelChange","ngModel"],["label","Posizione invertita",3,"ngModelChange","ngModel"],[1,"mt-5","mb-4"],[3,"dark","cards","vertical","inverted"],[3,"label","icon","active"],["label","custom","icon","settings",3,"disabled"],["itBadge","secondary"]],template:function(o,t){o&1&&(i(0,"h3"),m(1,"Configurazione tabs"),a(),i(2,"div",0)(3,"p",1)(4,"it-checkbox",2),C("ngModelChange",function(r){return u(t.isDarkTheme,r)||(t.isDarkTheme=r),r}),a()(),i(5,"p",1)(6,"it-checkbox",3),C("ngModelChange",function(r){return u(t.isDisabled,r)||(t.isDisabled=r),r}),a()(),i(7,"p",1)(8,"it-checkbox",4),C("ngModelChange",function(r){return u(t.isCard,r)||(t.isCard=r),r}),a()(),i(9,"p",1)(10,"it-checkbox",5),C("ngModelChange",function(r){return u(t.isVertical,r)||(t.isVertical=r),r}),a()(),i(11,"p",1)(12,"it-checkbox",6),C("ngModelChange",function(r){return u(t.isInverted,r)||(t.isInverted=r),r}),a()(),i(13,"h4",7),m(14,"Risultato tabs"),a(),i(15,"it-tab-container",8),E(16,K,2,4,"it-tab-item",9,M),i(18,"it-tab-item",10)(19,"h4"),m(20,"Titolo"),a(),i(21,"p"),m(22,"Contenuto complesso "),i(23,"span",11),m(24,"badge"),a()()()()()),o&2&&(l(4),h("ngModel",t.isDarkTheme),l(2),h("ngModel",t.isDisabled),l(2),h("ngModel",t.isCard),l(2),h("ngModel",t.isVertical),l(2),h("ngModel",t.isInverted),l(3),c("dark",t.isDarkTheme)("cards",t.isCard)("vertical",t.isVertical)("inverted",t.isInverted),l(),_(t.tabs),l(2),c("disabled",t.isDisabled))},dependencies:[z,P,N,x,g,L],encapsulation:2});let n=e;return n})();function X(n,e){if(n&1&&(i(0,"it-tab-item",3),m(1),a()),n&2){let b=e.$implicit,s=e.$index;c("id","tab-"+s)("label",b)("active",s===0),l(),D(" contenuto del ",b," tab ")}}var U=(()=>{let e=class e{constructor(){this.tabs=["Primo","Secondo","Terzo"]}addTab(){this.tabs.push("Nuovo")}removeTab(s){this.tabs.splice(s,1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-tabs-dynamic-example"]],standalone:!1,decls:9,vars:2,consts:[[1,"bd-example"],[1,"mt-5"],[3,"tabClosed","tabAdded","cards","editable"],[3,"id","label","active"]],template:function(o,t){o&1&&(i(0,"h3"),m(1,"Tabs Dinamiche"),a(),i(2,"div",0)(3,"div",1)(4,"h4"),m(5,"Risultato tabs"),a(),i(6,"it-tab-container",2),w("tabClosed",function(r){return t.removeTab(r)})("tabAdded",function(){return t.addTab()}),E(7,X,2,4,"it-tab-item",3,M),a()()()),o&2&&(l(6),c("cards",!0)("editable",!0),l(),_(t.tabs))},dependencies:[x,g],encapsulation:2});let n=e;return n})();var O=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-tabs-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Configurazione tabs</h3>
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
    @for (tab of tabs; track tab; let i = $index) {
      <it-tab-item [label]="tab.label" [icon]="tab.icon" [active]="i === 0">
        /{/{ tab.content /}/}
      </it-tab-item>
    }
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
  standalone: false,
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
      @for (tab of tabs; track tab; let index = $index) {
        <it-tab-item [id]="'tab-' + index" [label]="tab" [active]="index === 0"> contenuto del /{/{ tab /}/} tab </it-tab-item>
      }
    </it-tab-container>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss'],
  standalone: false,
})
export class TabsDynamicExampleComponent {
  tabs = ['Primo', 'Secondo', 'Terzo'];

  addTab() {
    this.tabs.push('Nuovo');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}`]],template:function(o,t){o&1&&d(0,"it-tabs-example")(1,"it-source-display",0)(2,"it-tabs-dynamic-example")(3,"it-source-display",1)},dependencies:[V,j,U],encapsulation:2});let n=e;return n})();var q=(()=>{let e=class e{constructor(){this.tabGroupComponent=S.components.find(s=>s.name==="ItTabContainerComponent"),this.tabComponent=S.components.find(s=>s.name==="ItTabItemComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-tabs-index"]],standalone:!1,decls:21,vars:4,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Descrizione"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,t){o&1&&(i(0,"h1",0),m(1,"Tabs"),a(),i(2,"p",1),m(3,"Il componente Tabs"),a(),i(4,"div",2)(5,"h3"),m(6,"Tab Group"),a(),d(7,"div",3),i(8,"h3"),m(9,"Tab"),a(),d(10,"div",3),a(),i(11,"it-tab-container")(12,"it-tab-item",4),d(13,"it-tabs-examples"),a(),i(14,"it-tab-item",5)(15,"h2"),m(16,"Tab Group"),a(),d(17,"it-api-parameters",6),i(18,"h2"),m(19,"Tab"),a(),d(20,"it-api-parameters",6),a()()),o&2&&(l(7),c("innerHTML",t.tabGroupComponent.description,k),l(3),c("innerHTML",t.tabComponent.description,k),l(7),c("component",t.tabGroupComponent),l(3),c("component",t.tabComponent))},dependencies:[A,x,g,O],encapsulation:2});let n=e;return n})();var $=[{path:"",component:q}],J=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[I.forChild($),I]});let n=e;return n})();var ye=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[W,B,F,G,J]});let n=e;return n})();export{ye as TabsModule};
