import{a as E,b as D,c as S,d as F}from"./chunk-K63BAWCR.js";import{Da as f,ca as b,la as y,ma as M}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as g}from"./chunk-A2FNTR3N.js";import{m as A}from"./chunk-3O7E6U5R.js";import{Hb as s,Ib as i,Jb as n,Kb as l,Ta as x,V as u,Vb as v,Xa as m,gc as p,jb as r,kb as d}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var I=(()=>{class e{constructor(){this.source=["Abruzzo","Basilicata","Calabria","Campania","Emilia Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d\u2019Aosta","Veneto"]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-autocomplete-example"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","regions","label","Regione",3,"source"]],template:function(t,a){t&1&&(i(0,"h3"),p(1,"Esempio Autocomplete"),n(),i(2,"div",0)(3,"div",1),l(4,"it-autocomplete",2),n()()),t&2&&(m(4),s("source",a.source))},dependencies:[f],encapsulation:2})}}return e})();var T=(()=>{class e{constructor(){this.categories=["Frutta","Verdura"],this.store={Frutta:["Mela","Pera","Melone","Banana"],Verdura:["Carota","Zucchina","Melanzana","Carciofo"]},this.selectedCategory=null,this.source=(o,t)=>{let h=this.store[this.selectedCategory].filter(C=>C.toLowerCase().indexOf(o.toLowerCase())!==-1);t(h)}}changeCategory(o){this.selectedCategory=o}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-autocomplete-double"]],standalone:!1,decls:6,vars:2,consts:[[1,"bd-example"],[1,"example-section"],["id","categoria","label","Categoria",3,"selected","source"],["id","alimento","label","Alimento",3,"source"]],template:function(t,a){t&1&&(i(0,"h3"),p(1,"Cambiare i valori dinamicamente"),n(),i(2,"div",0)(3,"div",1)(4,"it-autocomplete",2),v("selected",function(C){return a.changeCategory(C)}),n(),l(5,"it-autocomplete",3),n()()),t&2&&(m(4),s("source",a.categories),m(),s("source",a.source))},dependencies:[f],encapsulation:2})}}return e})();var L=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-autocomplete-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Esempio Autocomplete</h3>
<div class="bd-example">
  <div class="example-section">
    <it-autocomplete id="regions" label="Regione" [source]="source"></it-autocomplete>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss'],
  standalone: false,
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
  standalone: false,
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
}`]],template:function(t,a){t&1&&l(0,"it-autocomplete-example")(1,"it-source-display",0)(2,"it-autocomplete-double")(3,"it-source-display",1)},dependencies:[E,I,T],encapsulation:2})}}return e})();var R=(()=>{class e{constructor(){this.autocompleteComponent=D.components.find(o=>o.name==="ItAutocompleteComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-autocomplete-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,a){t&1&&(i(0,"h1",0),p(1,"Autocomplete"),n(),i(2,"p",1),p(3,"Componente di autocompletamento"),n(),l(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),l(7,"it-autocomplete-examples"),n(),i(8,"it-tab-item",4)(9,"h2"),p(10,"Autocomplete"),n(),l(11,"it-api-parameters",5),n()()),t&2&&(m(4),s("innerHTML",a.autocompleteComponent.description,x),m(7),s("component",a.autocompleteComponent))},dependencies:[S,M,y,L],encapsulation:2})}}return e})();var j=[{path:"",component:R}],z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=u({imports:[g.forChild(j),g]})}}return e})();var ae=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=u({imports:[A,b,F,z]})}}return e})();export{ae as AutocompleteModule};
