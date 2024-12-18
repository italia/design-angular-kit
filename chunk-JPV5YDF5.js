import{a as D,b as P,c as w,d as M}from"./chunk-747GECUZ.js";import{ga as I,ha as T,wa as v}from"./chunk-NCNX5TI5.js";import"./chunk-XZP45KYQ.js";import{o as S}from"./chunk-NU7RFJ6M.js";import{Cb as i,Db as r,Eb as s,Kb as h,Ua as b,Wb as c,Wc as y,Y as d,Za as p,fa as m,ga as f,k as g,kb as E,qb as l,ua as A}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var C=(()=>{let e=class e{constructor(){this._autoCompleteData=[{value:"Luisa Neri",avatarSrcPath:"https://randomuser.me/api/portraits/women/44.jpg",avatarAltText:"Luisa Neri",label:"Profilo"},{value:"Cristian Borelli",avatarSrcPath:"https://randomuser.me/api/portraits/men/1.jpg",avatarAltText:"Cristian Borelli",label:"Profilo"},{value:"Andrea Stagi",avatarSrcPath:"https://randomuser.me/api/portraits/men/2.jpg",avatarAltText:"Andrea Stagi",label:"Profilo"},{value:"Comune di Firenze",icon:"pa",link:"https:www.comune.fi.it/",label:"Comune"},{value:"Italia",avatarSrcPath:"https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg",avatarAltText:"Italia"}],this.autocompleteUsers$=a=>a?g(this._autoCompleteData):g([])}onAutocompleteSelected(a){console.log(a)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["it-autocomplete-search-example"]],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare",3,"autocompleteSelectedEvent","autocompleteData"]],template:function(o,n){o&1&&(i(0,"h3"),c(1,"Ricerca con autocompletamento e dati"),r(),i(2,"div",0)(3,"it-autocomplete",1),h("autocompleteSelectedEvent",function(x){return n.onAutocompleteSelected(x)}),r()()),o&2&&(p(3),l("autocompleteData",n.autocompleteUsers$))},dependencies:[v],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e extends C{};e.\u0275fac=(()=>{let a;return function(n){return(a||(a=A(e)))(n||e)}})(),e.\u0275cmp=m({type:e,selectors:[["it-autocomplete-big-search-example"]],features:[E],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare","big","true",3,"autocompleteSelectedEvent","autocompleteData"]],template:function(o,n){o&1&&(i(0,"h3"),c(1,"Ricerca con autocompletamento grande e dati"),r(),i(2,"div",0)(3,"it-autocomplete",1),h("autocompleteSelectedEvent",function(x){return n.onAutocompleteSelected(x)}),r()()),o&2&&(p(3),l("autocompleteData",n.autocompleteUsers$))},dependencies:[v],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["it-autocomplete-examples"]],decls:4,vars:0,consts:[["html",`<h3>Ricerca con autocompletamento e dati</h3>

<div class="bd-example">
  <it-autocomplete
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    [autocompleteData]="autocompleteUsers$"
    (autocompleteSelectedEvent)="onAutocompleteSelected($event)" />
</div>`,"typescript",`import { Component } from '@angular/core';
import { AutocompleteItem } from 'design-angular-kit/interfaces/form';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'it-autocomplete-search-example',
  templateUrl: './autocomplete-search-example.component.html',
})
export class AutocompleteSearchExampleComponent {
  private _autoCompleteData: AutocompleteItem[] = [
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
   * Dynamic AutocompleteData (API) accepted by it-input
   * @param search the autocomplete input string
   */
  autocompleteUsers$ = (search?: string): Observable<Array<AutocompleteItem>> => {
    if (!search) {
      return of([]);
    }

    // API request for retrieve data, use \`search\` to filter data
    return of(this._autoCompleteData);
  };

  onAutocompleteSelected(item: AutocompleteItem): void {
    console.log(item);
  }
}`],["html",`<h3>Ricerca con autocompletamento grande e dati</h3>

<div class="bd-example">
  <it-autocomplete
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    big="true"
    [autocompleteData]="autocompleteUsers$"
    (autocompleteSelectedEvent)="onAutocompleteSelected($event)" />
</div>`,"typescript",`import { Component } from '@angular/core';
import { AutocompleteSearchExampleComponent } from '../autocomplete-search-example/autocomplete-search-example.component';

@Component({
  selector: 'it-autocomplete-big-search-example',
  templateUrl: './autocomplete-big-search-example.component.html',
})
export class AutocompleteBigSearchExampleComponent extends AutocompleteSearchExampleComponent {}`]],template:function(o,n){o&1&&s(0,"it-autocomplete-search-example")(1,"it-source-display",0)(2,"it-autocomplete-big-search-example")(3,"it-source-display",1)},dependencies:[w,C,j],encapsulation:2});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.component=D.components.find(a=>a.name==="ItAutocompleteComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["it-autocomplete-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,n){o&1&&(i(0,"h1",0),c(1,"Autocompletamento"),r(),i(2,"p",1),c(3,"Elementi e stili per la creazione di input con autocompletamento."),r(),s(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),s(7,"it-autocomplete-examples"),r(),i(8,"it-tab-item",4),s(9,"it-api-parameters",5),r()()),o&2&&(p(4),l("innerHTML",n.component.description,b),p(5),l("component",n.component))},dependencies:[T,I,P,F],encapsulation:2});let t=e;return t})();var k=[{path:"",component:B}],N=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[S.forChild(k),S]});let t=e;return t})();var le=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[y,N,M]});let t=e;return t})();export{le as AutocompleteModule};
