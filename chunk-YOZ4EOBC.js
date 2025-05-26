import{a as D,b as S,c as F,d as T}from"./chunk-VOECI7NO.js";import{Ea as C,da as A,ma as M,na as E}from"./chunk-AH6A2KSZ.js";import"./chunk-XZP45KYQ.js";import{h}from"./chunk-BTXKVGUM.js";import"./chunk-WH5OHNTV.js";import{$a as s,Eb as a,Fb as i,Gb as m,Mb as b,Wa as y,Yb as c,Z as d,ed as x,ga as l,ha as f,sb as p}from"./chunk-E5TMX6OZ.js";import"./chunk-JNJ3D7EP.js";var L=(()=>{let e=class e{constructor(){this.source=["Abruzzo","Basilicata","Calabria","Campania","Emilia Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d\u2019Aosta","Veneto"]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-autocomplete-example"]],decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","regions","label","Regione",3,"source"]],template:function(t,r){t&1&&(a(0,"h3"),c(1,"Esempio Autocomplete"),i(),a(2,"div",0)(3,"div",1),m(4,"it-autocomplete",2),i()()),t&2&&(s(4),p("source",r.source))},dependencies:[C]});let o=e;return o})();var z=(()=>{let e=class e{constructor(){this.categories=["Frutta","Verdura"],this.store={Frutta:["Mela","Pera","Melone","Banana"],Verdura:["Carota","Zucchina","Melanzana","Carciofo"]},this.selectedCategory=null,this.source=(n,t)=>{let v=this.store[this.selectedCategory].filter(g=>g.toLowerCase().indexOf(n.toLowerCase())!==-1);t(v)}}changeCategory(n){this.selectedCategory=n}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-autocomplete-double"]],decls:6,vars:2,consts:[[1,"bd-example"],[1,"example-section"],["id","categoria","label","Categoria",3,"selected","source"],["id","alimento","label","Alimento",3,"source"]],template:function(t,r){t&1&&(a(0,"h3"),c(1,"Cambiare i valori dinamicamente"),i(),a(2,"div",0)(3,"div",1)(4,"it-autocomplete",2),b("selected",function(g){return r.changeCategory(g)}),i(),m(5,"it-autocomplete",3),i()()),t&2&&(s(4),p("source",r.categories),s(),p("source",r.source))},dependencies:[C]});let o=e;return o})();var I=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-autocomplete-examples"]],decls:4,vars:0,consts:[["html",`<h3>Esempio Autocomplete</h3>
<div class="bd-example">
  <div class="example-section">
    <it-autocomplete id="regions" label="Regione" [source]="source"></it-autocomplete>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss'],
})
export class AutocompleteExampleComponent {
  source = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino Alto Adige',
    'Umbria',
    'Valle d\u2019Aosta',
    'Veneto',
  ];
}`],["html",`<h3>Cambiare i valori dinamicamente</h3>
<div class="bd-example">
  <div class="example-section">
    <it-autocomplete id="categoria" [source]="categories" label="Categoria" (selected)="changeCategory($event)"></it-autocomplete>
    <it-autocomplete id="alimento" [source]="source" label="Alimento"></it-autocomplete>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-autocomplete-double',
  templateUrl: './autocomplete-double.component.html',
  styleUrls: ['./autocomplete-double.component.scss'],
})
export class AutocompleteDoubleComponent {
  categories = ['Frutta', 'Verdura'];

  store = {
    Frutta: ['Mela', 'Pera', 'Melone', 'Banana'],
    Verdura: ['Carota', 'Zucchina', 'Melanzana', 'Carciofo'],
  };

  selectedCategory: string = null;

  changeCategory(value: string) {
    this.selectedCategory = value;
  }

  source = (query: string, populateResults: (results: string[]) => void) => {
    const results = this.store[this.selectedCategory];
    const filteredResults = results.filter(result => result.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    populateResults(filteredResults);
  };
}`]],template:function(t,r){t&1&&m(0,"it-autocomplete-example")(1,"it-source-display",0)(2,"it-autocomplete-double")(3,"it-source-display",1)},dependencies:[F,L,z]});let o=e;return o})();var w=(()=>{let e=class e{constructor(){this.autocompleteComponent=D.components.find(n=>n.name==="ItAutocompleteComponent")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-autocomplete-index"]],decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,r){t&1&&(a(0,"h1",0),c(1,"Autocomplete"),i(),a(2,"p",1),c(3,"Componente di autocompletamento"),i(),m(4,"div",2),a(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-autocomplete-examples"),i(),a(8,"it-tab-item",4)(9,"h2"),c(10,"Autocomplete"),i(),m(11,"it-api-parameters",5),i()()),t&2&&(s(4),p("innerHTML",r.autocompleteComponent.description,y),s(7),p("component",r.autocompleteComponent))},dependencies:[S,E,M,I]});let o=e;return o})();var B=[{path:"",component:w}],V=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[h.forChild(B),h]});let o=e;return o})();var re=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[x,A,T,V]});let o=e;return o})();export{re as AutocompleteModule};
