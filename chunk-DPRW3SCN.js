import{a as N,b as S,c as T,d as _}from"./chunk-FNEUKG6X.js";import{ba as c,ga as b,ha as y}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as E}from"./chunk-53YMBHPH.js";import{Cb as o,Db as i,Eb as f,Kb as u,Wb as p,Wc as x,Y as C,Za as l,fa as g,ga as P,qb as s}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var z=(()=>{let e=class e{constructor(){this.leftCurrentPage=0,this.centerCurrentPage=25,this.rightCurrentPage=0}leftPageChange(a){this.leftCurrentPage=a}centerPageChange(a){this.centerCurrentPage=a}rightPageChange(a){this.rightCurrentPage=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-example"]],decls:10,vars:7,consts:[[1,"bd-example"],[1,"mb-4"],[3,"pageEvent","currentPage","pageNumbers"],[1,"my-4"],["alignment","center",3,"pageEvent","currentPage","pageNumbers"],["alignment","end",3,"pageEvent","currentPage","visiblePages","pageNumbers"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"h3",1),p(2,"Navigazione allineata a sinistra"),i(),o(3,"it-pagination",2),u("pageEvent",function(m){return r.leftPageChange(m)}),i(),o(4,"h3",3),p(5,"Navigazione centrata"),i(),o(6,"it-pagination",4),u("pageEvent",function(m){return r.centerPageChange(m)}),i(),o(7,"h3",3),p(8,"Navigazione allineata a destra"),i(),o(9,"it-pagination",5),u("pageEvent",function(m){return r.rightPageChange(m)}),i()()),n&2&&(l(3),s("currentPage",r.leftCurrentPage)("pageNumbers",3),l(3),s("currentPage",r.centerCurrentPage)("pageNumbers",50),l(3),s("currentPage",r.rightCurrentPage)("visiblePages",3)("pageNumbers",50))},dependencies:[c],encapsulation:2});let t=e;return t})();var D=(()=>{let e=class e{constructor(){this.currentPage=25,this.changerValue=10,this.changerValues=[10,25,50,100,250]}pageChange(a){this.currentPage=a}changerEvent(a){this.changerValue=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-changer-example"]],decls:6,vars:4,consts:[[1,"bd-example"],[3,"pageEvent","changerEvent","currentPage","pageNumbers","currentChanger","changerValues"]],template:function(n,r){n&1&&(o(0,"h3"),p(1,"Changer"),i(),o(2,"p"),p(3,"La funzionalit\xE0 di changer permette di scegliere da un dropdown la quantit\xE0 di record da visualizzare in una pagina."),i(),o(4,"div",0)(5,"it-pagination",1),u("pageEvent",function(m){return r.pageChange(m)})("changerEvent",function(m){return r.changerEvent(m)}),i()()),n&2&&(l(5),s("currentPage",r.currentPage)("pageNumbers",50)("currentChanger",r.changerValue)("changerValues",r.changerValues))},dependencies:[c],encapsulation:2});let t=e;return t})();var M=(()=>{let e=class e{constructor(){this.currentPage=25}pageChange(a){this.currentPage=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-jump-example"]],decls:6,vars:2,consts:[[1,"bd-example"],["showJumpToPage","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,r){n&1&&(o(0,"h3"),p(1,"Jump to page"),i(),o(2,"p"),p(3,"Con l\u2019elemento aggiuntivo \u201CJump to page\u201D l\u2019utente pu\xF2 specificare un numero di pagina concreto."),i(),o(4,"div",0)(5,"it-pagination",1),u("pageEvent",function(m){return r.pageChange(m)}),i()()),n&2&&(l(5),s("currentPage",r.currentPage)("pageNumbers",50))},dependencies:[c],encapsulation:2});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.currentPage=0}pageChange(a){this.currentPage=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-simple-example"]],decls:6,vars:2,consts:[[1,"bd-example"],["simpleMode","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,r){n&1&&(o(0,"h3"),p(1,"Simple mode"),i(),o(2,"p"),p(3,` La paginazione in versione \u201CSimple mode\u201D \xE8 ottimizzata per i dispositivi mobile. Pu\xF2 essere utilizzata anche su tablet e desktop quando il numero di pagine \xE8 ridotto.
`),i(),o(4,"div",0)(5,"it-pagination",1),u("pageEvent",function(m){return r.pageChange(m)}),i()()),n&2&&(l(5),s("currentPage",r.currentPage)("pageNumbers",5))},dependencies:[c],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{constructor(){this.currentPage=25}pageChange(a){this.currentPage=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-text-links-example"]],decls:6,vars:2,consts:[[1,"bd-example"],["textLinks","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,r){n&1&&(o(0,"h3"),p(1,"Link testuali"),i(),o(2,"p"),p(3,"Le icone chevron utilizzate come link di navigazione vengono sostituite da link testuali come \u201Cprecedente\u201D e \u201Csuccessiva\u201D."),i(),o(4,"div",0)(5,"it-pagination",1),u("pageEvent",function(m){return r.pageChange(m)}),i()()),n&2&&(l(5),s("currentPage",r.currentPage)("pageNumbers",50))},dependencies:[c],encapsulation:2});let t=e;return t})();var I=(()=>{let e=class e{constructor(){this.currentPage=25}pageChange(a){this.currentPage=a}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-total-number-example"]],decls:5,vars:2,consts:[[1,"bd-example"],[3,"pageEvent","currentPage","pageNumbers"]],template:function(n,r){n&1&&(o(0,"h3"),p(1,"Total number"),i(),o(2,"div",0)(3,"it-pagination",1),u("pageEvent",function(m){return r.pageChange(m)}),p(4," Totale 300 elementi "),i()()),n&2&&(l(3),s("currentPage",r.currentPage)("pageNumbers",50))},dependencies:[c],encapsulation:2});let t=e;return t})();var w=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-examples"]],decls:12,vars:0,consts:[["html",`<div class="bd-example">
  <h3 class="mb-4">Navigazione allineata a sinistra</h3>
  <it-pagination [currentPage]="leftCurrentPage" [pageNumbers]="3" (pageEvent)="leftPageChange($event)"></it-pagination>

  <h3 class="my-4">Navigazione centrata</h3>
  <it-pagination
    [currentPage]="centerCurrentPage"
    [pageNumbers]="50"
    alignment="center"
    (pageEvent)="centerPageChange($event)"></it-pagination>

  <h3 class="my-4">Navigazione allineata a destra</h3>
  <it-pagination
    [currentPage]="rightCurrentPage"
    [visiblePages]="3"
    [pageNumbers]="50"
    alignment="end"
    (pageEvent)="rightPageChange($event)"></it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-example',
  templateUrl: './pagination-example.component.html',
})
export class PaginationExampleComponent {
  leftCurrentPage = 0;
  centerCurrentPage = 25;
  rightCurrentPage = 0;

  leftPageChange(page: number): void {
    this.leftCurrentPage = page;
  }

  centerPageChange(page: number): void {
    this.centerCurrentPage = page;
  }

  rightPageChange(page: number): void {
    this.rightCurrentPage = page;
  }
}`],["html",`<h3>Changer</h3>
<p>La funzionalit\xE0 di changer permette di scegliere da un dropdown la quantit\xE0 di record da visualizzare in una pagina.</p>

<div class="bd-example">
  <it-pagination
    [currentPage]="currentPage"
    [pageNumbers]="50"
    [currentChanger]="changerValue"
    [changerValues]="changerValues"
    (pageEvent)="pageChange($event)"
    (changerEvent)="changerEvent($event)"></it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-changer-example',
  templateUrl: './pagination-changer-example.component.html',
})
export class PaginationChangerExampleComponent {
  currentPage: number = 25;

  changerValue: number = 10;

  /**
   * By default, the values are [10, 25, 50, 100]
   */
  changerValues: Array<number> = [10, 25, 50, 100, 250];

  pageChange(page: number): void {
    this.currentPage = page;
  }

  changerEvent(value: number): void {
    this.changerValue = value;
  }
}`],["html",`<h3>Jump to page</h3>
<p>Con l\u2019elemento aggiuntivo \u201CJump to page\u201D l\u2019utente pu\xF2 specificare un numero di pagina concreto.</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" showJumpToPage="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-jump-example',
  templateUrl: './pagination-jump-example.component.html',
})
export class PaginationJumpExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],["html",`<h3>Simple mode</h3>
<p>
  La paginazione in versione \u201CSimple mode\u201D \xE8 ottimizzata per i dispositivi mobile. Pu\xF2 essere utilizzata anche su tablet e desktop quando il
  numero di pagine \xE8 ridotto.
</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="5" simpleMode="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-simple-example',
  templateUrl: './pagination-simple-example.component.html',
})
export class PaginationSimpleExampleComponent {
  currentPage: number = 0;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],["html",`<h3>Link testuali</h3>
<p>Le icone chevron utilizzate come link di navigazione vengono sostituite da link testuali come \u201Cprecedente\u201D e \u201Csuccessiva\u201D.</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" textLinks="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-text-links-example',
  templateUrl: './pagination-text-links-example.component.html',
})
export class PaginationTextLinksExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],["html",`<h3>Total number</h3>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" (pageEvent)="pageChange($event)"> Totale 300 elementi </it-pagination>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-total-number-example',
  templateUrl: './pagination-total-number-example.component.html',
})
export class PaginationTotalNumberExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`]],template:function(n,r){n&1&&f(0,"it-pagination-example")(1,"it-source-display",0)(2,"it-pagination-changer-example")(3,"it-source-display",1)(4,"it-pagination-jump-example")(5,"it-source-display",2)(6,"it-pagination-simple-example")(7,"it-source-display",3)(8,"it-pagination-text-links-example")(9,"it-source-display",4)(10,"it-pagination-total-number-example")(11,"it-source-display",5)},dependencies:[T,z,D,M,k,F,I],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.component=N.components.find(a=>a.name==="ItPaginationComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["it-pagination-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,r){n&1&&(o(0,"h1",0),p(1,"Paginazione"),i(),o(2,"p",1),p(3,"Utile per indicare una serie di contenuti correlati tra pi\xF9 pagine."),i(),o(4,"it-tab-container")(5,"it-tab-item",2),f(6,"it-pagination-examples"),i(),o(7,"it-tab-item",3)(8,"h3"),p(9,"Pagination Component"),i(),f(10,"it-api-parameters",4),i()()),n&2&&(l(10),s("component",r.component))},dependencies:[S,y,b,w],encapsulation:2});let t=e;return t})();var G=[{path:"",component:L}],V=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=C({imports:[E.forChild(G),E]});let t=e;return t})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=C({imports:[x,_,V]});let t=e;return t})();export{Pe as PaginationModule};
