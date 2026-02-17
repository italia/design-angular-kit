import{a as w,b as I,c as D,d as W}from"./chunk-K63BAWCR.js";import{Q as T,T as k,ca as E,la as S,ma as _,sa as v}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as C}from"./chunk-A2FNTR3N.js";import{m as y}from"./chunk-3O7E6U5R.js";import{Hb as d,Ib as n,Jb as i,Kb as r,Ta as M,V as c,Xa as m,gc as p,jb as s,kb as g,kc as f,lc as u,mc as h}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class e{constructor(){this.checked=!0,this.label="Sono una toggle",this.disabled=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-toggle-example"]],standalone:!1,decls:13,vars:5,consts:[[1,"bd-example"],["label","Spuntato","toggle","true",3,"ngModelChange","ngModel"],["label","Disabilitato","toggle","true",3,"ngModelChange","ngModel"],[1,"example-section"],["toggle","true",3,"ngModelChange","ngModel","label","disabled"]],template:function(t,o){t&1&&(n(0,"h3"),p(1,"Configurazione toggle"),i(),n(2,"div",0)(3,"fieldset")(4,"legend"),p(5,"Seleziona le caratteristiche"),i(),n(6,"it-checkbox",1),h("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i(),n(7,"it-checkbox",2),h("ngModelChange",function(l){return u(o.disabled,l)||(o.disabled=l),l}),i()(),r(8,"hr"),n(9,"h4"),p(10,"Risultato"),i(),n(11,"p",3)(12,"it-checkbox",4),h("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i()()()),t&2&&(m(6),f("ngModel",o.checked),m(),f("ngModel",o.disabled),m(5),f("ngModel",o.checked),d("label",o.label)("disabled",o.disabled))},dependencies:[T,k,v],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}"]})}}return e})();var F=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-toggle-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Configurazione toggle</h3>
<div class="bd-example">
  <fieldset>
    <legend>Seleziona le caratteristiche</legend>
    <it-checkbox [(ngModel)]="checked" label="Spuntato" toggle="true"></it-checkbox>
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato" toggle="true"></it-checkbox>
  </fieldset>
  <hr />
  <h4>Risultato</h4>
  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" [label]="label" [disabled]="disabled" toggle="true"></it-checkbox>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss'],
  standalone: false,
})
export class ToggleExampleComponent {
  checked = true;
  label = 'Sono una toggle';
  disabled = false;

  constructor() {}
}`]],template:function(t,o){t&1&&r(0,"it-toggle-example")(1,"it-source-display",0)},dependencies:[w,z],encapsulation:2})}}return e})();var N=(()=>{class e{constructor(){this.component=I.components.find(a=>a.name==="ItCheckboxComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-toggle-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,o){t&1&&(n(0,"h1",0),p(1,"Toggle"),i(),n(2,"p",1),p(3,"Il componente Toggle utilizzabile in un form"),i(),r(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),r(7,"it-toggle-examples"),i(),n(8,"it-tab-item",4),r(9,"it-api-parameters",5),i()()),t&2&&(m(4),d("innerHTML",o.component.description,M),m(5),d("component",o.component))},dependencies:[D,_,S,F],encapsulation:2})}}return e})();var j=[{path:"",component:N}],P=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=c({imports:[C.forChild(j),C]})}}return e})();var ae=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=c({imports:[y,E,W,P]})}}return e})();export{ae as ToggleModule};
