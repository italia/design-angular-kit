import{a as N,b as O,c as G,d as V}from"./chunk-XTG6MU3L.js";import{A as H,T as E,W as k,fa as R,ga as j,h as L,ia as U,k as h,l as x,sa as I}from"./chunk-R4LXWPNQ.js";import{l as F}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as z,Cb as w,Db as A,Gc as D,Mc as B,Na as S,Nb as m,Pb as _,Ra as s,Rb as f,Sb as u,Tb as g,U as T,ba as d,ca as v,gb as M,ib as c,la as P,ma as W,ub as i,vb as a,wb as b}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function ne(t,e){if(t&1&&(i(0,"it-tab-item",10),m(1),a()),t&2){let p=e.$implicit,l=e.index;c("label",p.label)("icon",p.icon)("active",l===0),s(),_(" ",p.content," ")}}var K=(()=>{let e=class e{constructor(){this.isDarkTheme=!1,this.isDisabled=!1,this.isPill=!1,this.tabs=[{label:"tab1",content:"content1",icon:"file"},{label:"tab2",content:"content2",icon:"calendar"},{label:"tab3",content:"content3",icon:"comment"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["it-tabs-example"]],decls:20,vars:6,consts:[[1,"bd-example"],[1,"example-section"],["label","Tema scuro",3,"ngModelChange","ngModel"],["label","Disabilita tab custom",3,"ngModelChange","ngModel"],["label","Navigazione con pill",3,"ngModelChange","ngModel"],[1,"mt-5","mb-4"],[3,"dark"],[3,"label","icon","active",4,"ngFor","ngForOf"],["label","custom","icon","settings",3,"disabled"],["itBadge","secondary"],[3,"label","icon","active"]],template:function(o,n){o&1&&(i(0,"h3"),m(1,"Configurazione tabs"),a(),i(2,"div",0)(3,"p",1)(4,"it-checkbox",2),g("ngModelChange",function(r){return u(n.isDarkTheme,r)||(n.isDarkTheme=r),r}),a()(),i(5,"p",1)(6,"it-checkbox",3),g("ngModelChange",function(r){return u(n.isDisabled,r)||(n.isDisabled=r),r}),a()(),i(7,"p",1)(8,"it-checkbox",4),g("ngModelChange",function(r){return u(n.isPill,r)||(n.isPill=r),r}),a()(),i(9,"h4",5),m(10,"Risultato tabs"),a(),i(11,"it-tab-container",6),M(12,ne,2,4,"it-tab-item",7),i(13,"it-tab-item",8)(14,"h4"),m(15,"Titolo"),a(),i(16,"p"),m(17,"Contenuto complesso "),i(18,"span",9),m(19,"badge"),a()()()()()),o&2&&(s(4),f("ngModel",n.isDarkTheme),s(2),f("ngModel",n.isDisabled),s(2),f("ngModel",n.isPill),s(3),c("dark",n.isDarkTheme),s(),c("ngForOf",n.tabs),s(),c("disabled",n.isDisabled))},dependencies:[D,E,k,H,x,h,I]});let t=e;return t})();function oe(t,e){if(t&1){let p=z();i(0,"it-tab-item",6),m(1),i(2,"div",7)(3,"button",8),w("click",function(){let o=P(p).index,n=A();return W(n.removeTab(o))}),m(4,"Cancella tab"),a()()()}if(t&2){let p=e.$implicit,l=e.index,o=A();c("id","tab-"+l)("label",p)("active",o.selectedIndex===l),s(),_(" contenuto del ",p," tab "),s(2),c("disabled",o.tabs.length===1)}}var Q=(()=>{let e=class e{constructor(){this.tabs=["Primo","Secondo","Terzo"],this.selectedIndex=0,this.selectAfterAdding=!1}addTab(){this.tabs.push("Nuovo"),this.selectAfterAdding&&(this.selectedIndex=this.tabs.length-1)}removeTab(l){this.tabs.splice(l,1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["it-tabs-dynamic-example"]],decls:12,vars:3,consts:[[1,"bd-example"],["type","number","label","indice del tab selezionato:",3,"ngModelChange","ngModel"],["itButton","primary",3,"click"],["label","Seleziona il tab dopo averlo aggiunto",3,"ngModelChange","ngModel"],[1,"mt-5"],[3,"id","label","active",4,"ngFor","ngForOf"],[3,"id","label","active"],[1,"container-fluid","mt-3"],["itButton","primary",3,"click","disabled"]],template:function(o,n){o&1&&(i(0,"h3"),m(1,"Tabs Dinamiche"),a(),i(2,"div",0)(3,"it-input",1),g("ngModelChange",function(r){return u(n.selectedIndex,r)||(n.selectedIndex=r),r}),a(),i(4,"button",2),w("click",function(){return n.addTab()}),m(5,"Aggiungi un nuovo tab"),a(),i(6,"it-checkbox",3),g("ngModelChange",function(r){return u(n.selectAfterAdding,r)||(n.selectAfterAdding=r),r}),a(),i(7,"div",4)(8,"h4"),m(9,"Risultato tabs"),a(),i(10,"it-tab-container"),M(11,oe,5,5,"it-tab-item",5),a()()()),o&2&&(s(3),f("ngModel",n.selectedIndex),s(3),f("ngModel",n.selectAfterAdding),s(5),c("ngForOf",n.tabs))},dependencies:[D,E,k,L,x,h,I,U]});let t=e;return t})();var X=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["it-tabs-examples"]],decls:4,vars:0,consts:[["html",`<h3>Configurazione tabs</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isPill" label="Navigazione con pill"></it-checkbox>
  </p>

  <h4 class="mt-5 mb-4">Risultato tabs</h4>
  <!--    TODO  [pill]="isPill"-->
  <it-tab-container [dark]="isDarkTheme">
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

  isPill = false;

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
  <it-input type="number" [(ngModel)]="selectedIndex" label="indice del tab selezionato:"></it-input>

  <button itButton="primary" (click)="addTab()">Aggiungi un nuovo tab</button>
  <it-checkbox [(ngModel)]="selectAfterAdding" label="Seleziona il tab dopo averlo aggiunto"></it-checkbox>

  <div class="mt-5">
    <h4>Risultato tabs</h4>
    <it-tab-container>
      <it-tab-item [id]="'tab-' + index" *ngFor="let tab of tabs; let index = index" [label]="tab" [active]="selectedIndex === index">
        contenuto del /{/{ tab /}/} tab

        <div class="container-fluid mt-3">
          <button itButton="primary" [disabled]="tabs.length === 1" (click)="removeTab(index)">Cancella tab</button>
        </div>
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
  selectedIndex = 0;
  selectAfterAdding = false;

  addTab() {
    this.tabs.push('Nuovo');

    if (this.selectAfterAdding) {
      this.selectedIndex = this.tabs.length - 1;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}`]],template:function(o,n){o&1&&b(0,"it-tabs-example")(1,"it-source-display",0)(2,"it-tabs-dynamic-example")(3,"it-source-display",1)},dependencies:[G,K,Q]});let t=e;return t})();var Y=(()=>{let e=class e{constructor(){this.tabGroupComponent=N.components.find(l=>l.name==="ItTabContainerComponent"),this.tabComponent=N.components.find(l=>l.name==="ItTabItemComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["it-tabs-index"]],decls:21,vars:4,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Descrizione"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,n){o&1&&(i(0,"h1",0),m(1,"Tabs"),a(),i(2,"p",1),m(3,"Il componente Tabs"),a(),i(4,"div",2)(5,"h3"),m(6,"Tab Group"),a(),b(7,"div",3),i(8,"h3"),m(9,"Tab"),a(),b(10,"div",3),a(),i(11,"it-tab-container")(12,"it-tab-item",4),b(13,"it-tabs-examples"),a(),i(14,"it-tab-item",5)(15,"h2"),m(16,"Tab Group"),a(),b(17,"it-api-parameters",6),i(18,"h2"),m(19,"Tab"),a(),b(20,"it-api-parameters",6),a()()),o&2&&(s(7),c("innerHTML",n.tabGroupComponent.description,S),s(3),c("innerHTML",n.tabComponent.description,S),s(7),c("component",n.tabGroupComponent),s(3),c("component",n.tabComponent))},dependencies:[O,x,h,X]});let t=e;return t})();var me=[{path:"",component:Y}],Z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e}),e.\u0275inj=T({imports:[F.forChild(me),F]});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e}),e.\u0275inj=T({imports:[B,R,j,V,Z]});let t=e;return t})();export{we as TabsModule};
