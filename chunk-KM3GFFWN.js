import{a as S,b as T,c as w,d as N}from"./chunk-XTG6MU3L.js";import{T as I,W as D,fa as W,k as E,l as v,sa as F}from"./chunk-R4LXWPNQ.js";import{l as x}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Mc as k,Na as M,Nb as c,Ra as m,Rb as h,Sb as u,Tb as b,U as g,ba as p,ca as f,ib as d,ub as l,vb as a,wb as s}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";var P=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una toggle",this.disabled=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-toggle-example"]],decls:10,vars:5,consts:[[1,"bd-example"],[1,"example-section"],["label","Spuntato","toggle","true",3,"ngModelChange","ngModel"],["label","Disabilitato","toggle","true",3,"ngModelChange","ngModel"],["toggle","true",3,"ngModelChange","ngModel","label","disabled"]],template:function(o,n){o&1&&(l(0,"h3"),c(1,"Configurazione toggle"),a(),l(2,"div",0)(3,"p",1)(4,"it-checkbox",2),b("ngModelChange",function(i){return u(n.checked,i)||(n.checked=i),i}),a(),l(5,"it-checkbox",3),b("ngModelChange",function(i){return u(n.disabled,i)||(n.disabled=i),i}),a()(),l(6,"h4"),c(7,"Risultato"),a(),l(8,"p",1)(9,"it-checkbox",4),b("ngModelChange",function(i){return u(n.checked,i)||(n.checked=i),i}),a()()()),o&2&&(m(4),h("ngModel",n.checked),m(),h("ngModel",n.disabled),m(4),h("ngModel",n.checked),d("label",n.label)("disabled",n.disabled))},dependencies:[I,D,F],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}"]});let t=e;return t})();var z=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-toggle-examples"]],decls:2,vars:0,consts:[["html",`<h3>Configurazione toggle</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" label="Spuntato" toggle="true"></it-checkbox>
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato" toggle="true"></it-checkbox>
  </p>

  <h4>Risultato</h4>
  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" [label]="label" [disabled]="disabled" toggle="true"></it-checkbox>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss'],
})
export class ToggleExampleComponent {
  checked = true;
  label = 'Sono una toggle';
  disabled = false;

  constructor() {}
}`]],template:function(o,n){o&1&&s(0,"it-toggle-example")(1,"it-source-display",0)},dependencies:[w,P]});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.component=S.components.find(r=>r.name==="ItCheckboxComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["it-toggle-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,n){o&1&&(l(0,"h1",0),c(1,"Toggle"),a(),l(2,"p",1),c(3,"Il componente Toggle utilizzabile in un form"),a(),s(4,"div",2),l(5,"it-tab-container")(6,"it-tab-item",3),s(7,"it-toggle-examples"),a(),l(8,"it-tab-item",4),s(9,"it-api-parameters",5),a()()),o&2&&(m(4),d("innerHTML",n.component.description,M),m(5),d("component",n.component))},dependencies:[T,v,E,z]});let t=e;return t})();var H=[{path:"",component:L}],_=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=g({imports:[x.forChild(H),x]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=g({imports:[k,W,N,_]});let t=e;return t})();export{re as ToggleModule};
