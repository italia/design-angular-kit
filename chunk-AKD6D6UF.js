import{a as P,b as A,c as w,d as M}from"./chunk-FNEUKG6X.js";import{ga as T,ha as D,oa as S}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as g}from"./chunk-53YMBHPH.js";import{Cb as o,Db as i,Eb as l,Kb as u,Ua as E,Wb as p,Wc as I,Y as d,Za as m,fa as c,ga as f,k as x,kb as y,qb as s,ua as b}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var v=(()=>{let e=class e{constructor(){this._autoCompleteData=[{value:"Luisa Neri",avatarSrcPath:"https://randomuser.me/api/portraits/women/44.jpg",avatarAltText:"Luisa Neri",label:"Profilo"},{value:"Cristian Borelli",avatarSrcPath:"https://randomuser.me/api/portraits/men/1.jpg",avatarAltText:"Cristian Borelli",label:"Profilo"},{value:"Andrea Stagi",avatarSrcPath:"https://randomuser.me/api/portraits/men/2.jpg",avatarAltText:"Andrea Stagi",label:"Profilo"},{value:"Comune di Firenze",icon:"pa",link:"https:www.comune.fi.it/",label:"Comune"},{value:"Italia",avatarSrcPath:"https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg",avatarAltText:"Italia"}],this.searchUsers$=n=>n?x(this._autoCompleteData):x([])}onSearchSelected(n){console.log(n)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-search-example"]],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare",3,"searchSelectedEvent","searchData"]],template:function(a,r){a&1&&(o(0,"h3"),p(1,"Ricerca con autocompletamento e dati"),i(),o(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(C){return r.onSearchSelected(C)}),i()()),a&2&&(m(3),s("searchData",r.searchUsers$))},dependencies:[S],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e extends v{};e.\u0275fac=(()=>{let n;return function(r){return(n||(n=b(e)))(r||e)}})(),e.\u0275cmp=c({type:e,selectors:[["it-search-big-search-example"]],features:[y],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare","big","true",3,"searchSelectedEvent","searchData"]],template:function(a,r){a&1&&(o(0,"h3"),p(1,"Ricerca con autocompletamento grande e dati"),i(),o(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(C){return r.onSearchSelected(C)}),i()()),a&2&&(m(3),s("searchData",r.searchUsers$))},dependencies:[S],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-examples"]],decls:4,vars:0,consts:[["html",`<h3>Ricerca con autocompletamento e dati</h3>

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
})
export class SearchBigSearchExampleComponent extends SearchSearchExampleComponent {}`]],template:function(a,r){a&1&&l(0,"it-search-search-example")(1,"it-source-display",0)(2,"it-search-big-search-example")(3,"it-source-display",1)},dependencies:[w,v,j],encapsulation:2});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.component=P.components.find(n=>n.name==="ItSearchComponent")}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(a,r){a&1&&(o(0,"h1",0),p(1,"Ricerca con autocompletamento"),i(),o(2,"p",1),p(3,"Elementi e stili per la creazione di input di ricerca con autocompletamento."),i(),l(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-search-examples"),i(),o(8,"it-tab-item",4),l(9,"it-api-parameters",5),i()()),a&2&&(m(4),s("innerHTML",r.component.description,E),m(5),s("component",r.component))},dependencies:[D,T,A,F],encapsulation:2});let t=e;return t})();var k=[{path:"",component:B}],N=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[g.forChild(k),g]});let t=e;return t})();var se=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[I,N,M]});let t=e;return t})();export{se as SearchModule};
