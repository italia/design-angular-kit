import{a as D,b as M,c as P,d as A}from"./chunk-ZWYEEAVU.js";import{Ba as f,la as I,ma as T}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as x}from"./chunk-F32MIGDQ.js";import{m as y}from"./chunk-66PP3R5H.js";import{Gb as m,Hb as r,Ib as o,Jb as l,Sa as b,Ub as u,V as h,Wa as c,fc as s,ib as i,j as C,jb as d,mb as E,ua as g}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class e{constructor(){this._autoCompleteData=[{value:"Luisa Neri",avatarSrcPath:"https://randomuser.me/api/portraits/women/44.jpg",avatarAltText:"Luisa Neri",label:"Profilo"},{value:"Cristian Borelli",avatarSrcPath:"https://randomuser.me/api/portraits/men/1.jpg",avatarAltText:"Cristian Borelli",label:"Profilo"},{value:"Andrea Stagi",avatarSrcPath:"https://randomuser.me/api/portraits/men/2.jpg",avatarAltText:"Andrea Stagi",label:"Profilo"},{value:"Comune di Firenze",icon:"pa",link:"https:www.comune.fi.it/",label:"Comune"},{value:"Italia",avatarSrcPath:"https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg",avatarAltText:"Italia"}],this.searchUsers$=a=>a?C(this._autoCompleteData):C([])}onSearchSelected(a){console.log(a)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=i({type:e,selectors:[["it-search-search-example"]],standalone:!1,decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare",3,"searchSelectedEvent","searchData"]],template:function(t,n){t&1&&(r(0,"h3"),s(1,"Ricerca con autocompletamento e dati"),o(),r(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(v){return n.onSearchSelected(v)}),o()()),t&2&&(c(3),m("searchData",n.searchUsers$))},dependencies:[f],encapsulation:2})}}return e})();var w=(()=>{class e extends S{static{this.\u0275fac=(()=>{let a;return function(n){return(a||(a=g(e)))(n||e)}})()}static{this.\u0275cmp=i({type:e,selectors:[["it-search-big-search-example"]],standalone:!1,features:[E],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare","big","true",3,"searchSelectedEvent","searchData"]],template:function(t,n){t&1&&(r(0,"h3"),s(1,"Ricerca con autocompletamento grande e dati"),o(),r(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(v){return n.onSearchSelected(v)}),o()()),t&2&&(c(3),m("searchData",n.searchUsers$))},dependencies:[f],encapsulation:2})}}return e})();var _=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=i({type:e,selectors:[["it-search-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Ricerca con autocompletamento e dati</h3>

<div class="bd-example">
  <it-search
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    [searchData]="searchUsers$"
    (searchSelectedEvent)="onSearchSelected($event)" />
</div>`,"typescript",`import { Component } from '@angular/core';
import { SearchItem } from 'design-angular-kit/interfaces/form';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'it-search-search-example',
  templateUrl: './search-search-example.component.html',
  standalone: false,
})
export class SearchSearchExampleComponent {
  private _autoCompleteData: SearchItem[] = [
    {
      value: 'Luisa Neri',
      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarAltText: 'Luisa Neri',
      label: 'Profilo',
    },
    {
      value: 'Cristian Borelli',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
      avatarAltText: 'Cristian Borelli',
      label: 'Profilo',
    },
    {
      value: 'Andrea Stagi',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
      avatarAltText: 'Andrea Stagi',
      label: 'Profilo',
    },
    {
      value: 'Comune di Firenze',
      icon: 'pa',
      link: 'https:www.comune.fi.it/',
      label: 'Comune',
    },
    {
      value: 'Italia',
      avatarSrcPath: 'https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
      avatarAltText: 'Italia',
    },
  ];

  /**
   * Dynamic SearchData (API) accepted by it-input
   * @param search the search input string
   */
  searchUsers$ = (search?: string): Observable<Array<SearchItem>> => {
    if (!search) {
      return of([]);
    }

    // API request for retrieve data, use \`search\` to filter data
    return of(this._autoCompleteData);
  };

  onSearchSelected(item: SearchItem): void {
    console.log(item);
  }
}`],["html",`<h3>Ricerca con autocompletamento grande e dati</h3>

<div class="bd-example">
  <it-search
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    big="true"
    [searchData]="searchUsers$"
    (searchSelectedEvent)="onSearchSelected($event)" />
</div>`,"typescript",`import { Component } from '@angular/core';
import { SearchSearchExampleComponent } from '../search-search-example/search-search-example.component';

@Component({
  selector: 'it-search-big-search-example',
  templateUrl: './search-big-search-example.component.html',
  standalone: false,
})
export class SearchBigSearchExampleComponent extends SearchSearchExampleComponent {}`]],template:function(t,n){t&1&&l(0,"it-search-search-example")(1,"it-source-display",0)(2,"it-search-big-search-example")(3,"it-source-display",1)},dependencies:[D,S,w],encapsulation:2})}}return e})();var j=(()=>{class e{constructor(){this.component=M.components.find(a=>a.name==="ItSearchComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=i({type:e,selectors:[["it-search-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,n){t&1&&(r(0,"h1",0),s(1,"Ricerca con autocompletamento"),o(),r(2,"p",1),s(3,"Elementi e stili per la creazione di input di ricerca con autocompletamento."),o(),l(4,"div",2),r(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-search-examples"),o(),r(8,"it-tab-item",4),l(9,"it-api-parameters",5),o()()),t&2&&(c(4),m("innerHTML",n.component.description,b),c(5),m("component",n.component))},dependencies:[T,I,P,_],encapsulation:2})}}return e})();var L=[{path:"",component:j}],B=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=h({imports:[x.forChild(L),x]})}}return e})();var me=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=h({imports:[y,B,A]})}}return e})();export{me as SearchModule};
