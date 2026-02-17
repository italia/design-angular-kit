import{a as L,b as I,c as R,d as V}from"./chunk-CJGNGVIB.js";import{Q as N,T as z,ca as P,da as B,la as h,ma as C,sa as F,v as W}from"./chunk-HN3BY7NK.js";import"./chunk-MLMGL4QO.js";import{h as k}from"./chunk-A2FNTR3N.js";import{m as w}from"./chunk-3O7E6U5R.js";import{Eb as y,Fb as M,Gb as _,Hb as m,Ib as i,Jb as a,Kb as c,Ta as D,V as x,Vb as S,Xa as r,gc as l,ic as E,jb as p,kb as v,kc as b,lc as f,mc as u}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";function J(e,T){if(e&1&&(i(0,"it-tab-item",9),l(1),a()),e&2){let o=T.$implicit,n=T.$index;m("label",o.label)("icon",o.icon)("active",n===0),r(),E(" ",o.content," ")}}var H=(()=>{class e{constructor(){this.isDarkTheme=!1,this.isDisabled=!1,this.isCard=!1,this.isVertical=!1,this.isInverted=!1,this.tabs=[{label:"tab1",content:"content1",icon:"file"},{label:"tab2",content:"content2",icon:"calendar"},{label:"tab3",content:"content3",icon:"comment"}]}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-tabs-example"]],standalone:!1,decls:25,vars:10,consts:[[1,"bd-example"],[1,"example-section"],["label","Tema scuro",3,"ngModelChange","ngModel"],["label","Disabilita tab custom",3,"ngModelChange","ngModel"],["label","Navigazione a card",3,"ngModelChange","ngModel"],["label","Navigazione verticale",3,"ngModelChange","ngModel"],["label","Posizione invertita",3,"ngModelChange","ngModel"],[1,"mt-5","mb-4"],[3,"dark","cards","vertical","inverted"],[3,"label","icon","active"],["label","custom","icon","settings",3,"disabled"],["itBadge","secondary"]],template:function(n,t){n&1&&(i(0,"h3"),l(1,"Configurazione tabs"),a(),i(2,"div",0)(3,"p",1)(4,"it-checkbox",2),u("ngModelChange",function(s){return f(t.isDarkTheme,s)||(t.isDarkTheme=s),s}),a()(),i(5,"p",1)(6,"it-checkbox",3),u("ngModelChange",function(s){return f(t.isDisabled,s)||(t.isDisabled=s),s}),a()(),i(7,"p",1)(8,"it-checkbox",4),u("ngModelChange",function(s){return f(t.isCard,s)||(t.isCard=s),s}),a()(),i(9,"p",1)(10,"it-checkbox",5),u("ngModelChange",function(s){return f(t.isVertical,s)||(t.isVertical=s),s}),a()(),i(11,"p",1)(12,"it-checkbox",6),u("ngModelChange",function(s){return f(t.isInverted,s)||(t.isInverted=s),s}),a()(),i(13,"h4",7),l(14,"Risultato tabs"),a(),i(15,"it-tab-container",8),M(16,J,2,4,"it-tab-item",9,y),i(18,"it-tab-item",10)(19,"h4"),l(20,"Titolo"),a(),i(21,"p"),l(22,"Contenuto complesso "),i(23,"span",11),l(24,"badge"),a()()()()()),n&2&&(r(4),b("ngModel",t.isDarkTheme),r(2),b("ngModel",t.isDisabled),r(2),b("ngModel",t.isCard),r(2),b("ngModel",t.isVertical),r(2),b("ngModel",t.isInverted),r(3),m("dark",t.isDarkTheme)("cards",t.isCard)("vertical",t.isVertical)("inverted",t.isInverted),r(),_(t.tabs),r(2),m("disabled",t.isDisabled))},dependencies:[N,z,W,C,h,F],encapsulation:2})}}return e})();function Q(e,T){if(e&1&&(i(0,"it-tab-item",3),l(1),a()),e&2){let o=T.$implicit,n=T.$index;m("id","tab-"+n)("label",o)("active",n===0),r(),E(" contenuto del ",o," tab ")}}var j=(()=>{class e{constructor(){this.tabs=["Primo","Secondo","Terzo"]}addTab(){this.tabs.push("Nuovo")}removeTab(o){this.tabs.splice(o,1)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-tabs-dynamic-example"]],standalone:!1,decls:9,vars:2,consts:[[1,"bd-example"],[1,"mt-5"],[3,"tabClosed","tabAdded","cards","editable"],[3,"id","label","active"]],template:function(n,t){n&1&&(i(0,"h3"),l(1,"Tabs Dinamiche"),a(),i(2,"div",0)(3,"div",1)(4,"h4"),l(5,"Risultato tabs"),a(),i(6,"it-tab-container",2),S("tabClosed",function(s){return t.removeTab(s)})("tabAdded",function(){return t.addTab()}),M(7,Q,2,4,"it-tab-item",3,y),a()()()),n&2&&(r(6),m("cards",!0)("editable",!0),r(),_(t.tabs))},dependencies:[C,h],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-tabs-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Configurazione tabs</h3>
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
}`]],template:function(n,t){n&1&&c(0,"it-tabs-example")(1,"it-source-display",0)(2,"it-tabs-dynamic-example")(3,"it-source-display",1)},dependencies:[L,H,j],encapsulation:2})}}return e})();var O=(()=>{class e{constructor(){this.tabGroupComponent=I.components.find(o=>o.name==="ItTabContainerComponent"),this.tabComponent=I.components.find(o=>o.name==="ItTabItemComponent")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-tabs-index"]],standalone:!1,decls:21,vars:4,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Descrizione"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,t){n&1&&(i(0,"h1",0),l(1,"Tabs"),a(),i(2,"p",1),l(3,"Il componente Tabs"),a(),i(4,"div",2)(5,"h3"),l(6,"Tab Group"),a(),c(7,"div",3),i(8,"h3"),l(9,"Tab"),a(),c(10,"div",3),a(),i(11,"it-tab-container")(12,"it-tab-item",4),c(13,"it-tabs-examples"),a(),i(14,"it-tab-item",5)(15,"h2"),l(16,"Tab Group"),a(),c(17,"it-api-parameters",6),i(18,"h2"),l(19,"Tab"),a(),c(20,"it-api-parameters",6),a()()),n&2&&(r(7),m("innerHTML",t.tabGroupComponent.description,D),r(3),m("innerHTML",t.tabComponent.description,D),r(7),m("component",t.tabGroupComponent),r(3),m("component",t.tabComponent))},dependencies:[R,C,h,U],encapsulation:2})}}return e})();var Z=[{path:"",component:O}],q=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=x({imports:[k.forChild(Z),k]})}}return e})();var ve=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=x({imports:[w,P,B,V,q]})}}return e})();export{ve as TabsModule};
