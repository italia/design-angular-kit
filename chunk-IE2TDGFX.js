import{a as y,b as _,c as N,d as T}from"./chunk-ZWYEEAVU.js";import{ga as u,la as E,ma as b}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as v}from"./chunk-F32MIGDQ.js";import{m as x}from"./chunk-66PP3R5H.js";import{Gb as l,Hb as i,Ib as a,Jb as h,Ub as s,V as f,Wa as m,fc as r,ib as g,jb as P}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class e{constructor(){this.leftCurrentPage=0,this.centerCurrentPage=25,this.rightCurrentPage=0}leftPageChange(t){this.leftCurrentPage=t}centerPageChange(t){this.centerCurrentPage=t}rightPageChange(t){this.rightCurrentPage=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-example"]],standalone:!1,decls:10,vars:7,consts:[[1,"bd-example"],[1,"mb-4"],[3,"pageEvent","currentPage","pageNumbers"],[1,"my-4"],["alignment","center",3,"pageEvent","currentPage","pageNumbers"],["alignment","end",3,"pageEvent","currentPage","visiblePages","pageNumbers"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"h3",1),r(2,"Navigazione allineata a sinistra"),a(),i(3,"it-pagination",2),s("pageEvent",function(p){return o.leftPageChange(p)}),a(),i(4,"h3",3),r(5,"Navigazione centrata"),a(),i(6,"it-pagination",4),s("pageEvent",function(p){return o.centerPageChange(p)}),a(),i(7,"h3",3),r(8,"Navigazione allineata a destra"),a(),i(9,"it-pagination",5),s("pageEvent",function(p){return o.rightPageChange(p)}),a()()),n&2&&(m(3),l("currentPage",o.leftCurrentPage)("pageNumbers",3),m(3),l("currentPage",o.centerCurrentPage)("pageNumbers",50),m(3),l("currentPage",o.rightCurrentPage)("visiblePages",3)("pageNumbers",50))},dependencies:[u],encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.currentPage=25,this.changerValue=10,this.changerValues=[10,25,50,100,250]}pageChange(t){this.currentPage=t}changerEvent(t){this.changerValue=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-changer-example"]],standalone:!1,decls:6,vars:4,consts:[[1,"bd-example"],[3,"pageEvent","changerEvent","currentPage","pageNumbers","currentChanger","changerValues"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Changer"),a(),i(2,"p"),r(3,"La funzionalit\xE0 di changer permette di scegliere da un dropdown la quantit\xE0 di record da visualizzare in una pagina."),a(),i(4,"div",0)(5,"it-pagination",1),s("pageEvent",function(p){return o.pageChange(p)})("changerEvent",function(p){return o.changerEvent(p)}),a()()),n&2&&(m(5),l("currentPage",o.currentPage)("pageNumbers",50)("currentChanger",o.changerValue)("changerValues",o.changerValues))},dependencies:[u],encapsulation:2})}}return e})();var M=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-jump-example"]],standalone:!1,decls:6,vars:2,consts:[[1,"bd-example"],["showJumpToPage","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Jump to page"),a(),i(2,"p"),r(3,"Con l\u2019elemento aggiuntivo \u201CJump to page\u201D l\u2019utente pu\xF2 specificare un numero di pagina concreto."),a(),i(4,"div",0)(5,"it-pagination",1),s("pageEvent",function(p){return o.pageChange(p)}),a()()),n&2&&(m(5),l("currentPage",o.currentPage)("pageNumbers",50))},dependencies:[u],encapsulation:2})}}return e})();var D=(()=>{class e{constructor(){this.currentPage=0}pageChange(t){this.currentPage=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-simple-example"]],standalone:!1,decls:6,vars:2,consts:[[1,"bd-example"],["simpleMode","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Simple mode"),a(),i(2,"p"),r(3,` La paginazione in versione \u201CSimple mode\u201D \xE8 ottimizzata per i dispositivi mobile. Pu\xF2 essere utilizzata anche su tablet e desktop quando il numero di pagine \xE8 ridotto.
`),a(),i(4,"div",0)(5,"it-pagination",1),s("pageEvent",function(p){return o.pageChange(p)}),a()()),n&2&&(m(5),l("currentPage",o.currentPage)("pageNumbers",5))},dependencies:[u],encapsulation:2})}}return e})();var k=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-text-links-example"]],standalone:!1,decls:6,vars:2,consts:[[1,"bd-example"],["textLinks","true",3,"pageEvent","currentPage","pageNumbers"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Link testuali"),a(),i(2,"p"),r(3,"Le icone chevron utilizzate come link di navigazione vengono sostituite da link testuali come \u201Cprecedente\u201D e \u201Csuccessiva\u201D."),a(),i(4,"div",0)(5,"it-pagination",1),s("pageEvent",function(p){return o.pageChange(p)}),a()()),n&2&&(m(5),l("currentPage",o.currentPage)("pageNumbers",50))},dependencies:[u],encapsulation:2})}}return e})();var I=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-total-number-example"]],standalone:!1,decls:5,vars:2,consts:[[1,"bd-example"],[3,"pageEvent","currentPage","pageNumbers"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Total number"),a(),i(2,"div",0)(3,"it-pagination",1),s("pageEvent",function(p){return o.pageChange(p)}),r(4," Totale 300 elementi "),a()()),n&2&&(m(3),l("currentPage",o.currentPage)("pageNumbers",50))},dependencies:[u],encapsulation:2})}}return e})();var L=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-examples"]],standalone:!1,decls:12,vars:0,consts:[["html",`<div class="bd-example">
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class PaginationTotalNumberExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`]],template:function(n,o){n&1&&h(0,"it-pagination-example")(1,"it-source-display",0)(2,"it-pagination-changer-example")(3,"it-source-display",1)(4,"it-pagination-jump-example")(5,"it-source-display",2)(6,"it-pagination-simple-example")(7,"it-source-display",3)(8,"it-pagination-text-links-example")(9,"it-source-display",4)(10,"it-pagination-total-number-example")(11,"it-source-display",5)},dependencies:[y,S,z,M,D,k,I],encapsulation:2})}}return e})();var F=(()=>{class e{constructor(){this.component=_.components.find(t=>t.name==="ItPaginationComponent")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=g({type:e,selectors:[["it-pagination-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,o){n&1&&(i(0,"h1",0),r(1,"Paginazione"),a(),i(2,"p",1),r(3,"Utile per indicare una serie di contenuti correlati tra pi\xF9 pagine."),a(),i(4,"it-tab-container")(5,"it-tab-item",2),h(6,"it-pagination-examples"),a(),i(7,"it-tab-item",3)(8,"h3"),r(9,"Pagination Component"),a(),h(10,"it-api-parameters",4),a()()),n&2&&(m(10),l("component",o.component))},dependencies:[N,b,E,L],encapsulation:2})}}return e})();var R=[{path:"",component:F}],w=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=P({type:e})}static{this.\u0275inj=f({imports:[v.forChild(R),v]})}}return e})();var Pe=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=P({type:e})}static{this.\u0275inj=f({imports:[x,T,w]})}}return e})();export{Pe as PaginationModule};
