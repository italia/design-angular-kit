import{a as P,b as A,c as w,d as M}from"./chunk-CQV3UQHT.js";import{Ba as S,la as T,ma as D}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as g}from"./chunk-DVW5EFKD.js";import{m as I}from"./chunk-I647ZKKI.js";import{Hb as m,Ib as o,Jb as i,Kb as p,Sa as E,Sb as u,Wa as s,Y as d,cc as l,fb as c,gb as f,jb as y,l as x,va as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var v=(()=>{let e=class e{constructor(){this._autoCompleteData=[{value:"Luisa Neri",avatarSrcPath:"https://randomuser.me/api/portraits/women/44.jpg",avatarAltText:"Luisa Neri",label:"Profilo"},{value:"Cristian Borelli",avatarSrcPath:"https://randomuser.me/api/portraits/men/1.jpg",avatarAltText:"Cristian Borelli",label:"Profilo"},{value:"Andrea Stagi",avatarSrcPath:"https://randomuser.me/api/portraits/men/2.jpg",avatarAltText:"Andrea Stagi",label:"Profilo"},{value:"Comune di Firenze",icon:"pa",link:"https:www.comune.fi.it/",label:"Comune"},{value:"Italia",avatarSrcPath:"https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg",avatarAltText:"Italia"}],this.searchUsers$=n=>n?x(this._autoCompleteData):x([])}onSearchSelected(n){console.log(n)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-search-example"]],standalone:!1,decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare",3,"searchSelectedEvent","searchData"]],template:function(a,r){a&1&&(o(0,"h3"),l(1,"Ricerca con autocompletamento e dati"),i(),o(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(C){return r.onSearchSelected(C)}),i()()),a&2&&(s(3),m("searchData",r.searchUsers$))},dependencies:[S],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e extends v{};e.\u0275fac=(()=>{let n;return function(r){return(n||(n=b(e)))(r||e)}})(),e.\u0275cmp=c({type:e,selectors:[["it-search-big-search-example"]],standalone:!1,features:[y],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare","big","true",3,"searchSelectedEvent","searchData"]],template:function(a,r){a&1&&(o(0,"h3"),l(1,"Ricerca con autocompletamento grande e dati"),i(),o(2,"div",0)(3,"it-search",1),u("searchSelectedEvent",function(C){return r.onSearchSelected(C)}),i()()),a&2&&(s(3),m("searchData",r.searchUsers$))},dependencies:[S],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Ricerca con autocompletamento e dati</h3>

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
export class SearchBigSearchExampleComponent extends SearchSearchExampleComponent {}`]],template:function(a,r){a&1&&p(0,"it-search-search-example")(1,"it-source-display",0)(2,"it-search-big-search-example")(3,"it-source-display",1)},dependencies:[P,v,j],encapsulation:2});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.component=A.components.find(n=>n.name==="ItSearchComponent")}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=c({type:e,selectors:[["it-search-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(a,r){a&1&&(o(0,"h1",0),l(1,"Ricerca con autocompletamento"),i(),o(2,"p",1),l(3,"Elementi e stili per la creazione di input di ricerca con autocompletamento."),i(),p(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-search-examples"),i(),o(8,"it-tab-item",4),p(9,"it-api-parameters",5),i()()),a&2&&(s(4),m("innerHTML",r.component.description,E),s(5),m("component",r.component))},dependencies:[D,T,w,F],encapsulation:2});let t=e;return t})();var k=[{path:"",component:B}],N=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[g.forChild(k),g]});let t=e;return t})();var me=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[I,N,M]});let t=e;return t})();export{me as SearchModule};
