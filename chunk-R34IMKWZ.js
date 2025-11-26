import{a as D,b as W,c as z,d as F}from"./chunk-CQV3UQHT.js";import{Q as S,T as E,ca as T,la as v,ma as w,sa as I}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as x}from"./chunk-DVW5EFKD.js";import{m as k}from"./chunk-I647ZKKI.js";import{Hb as d,Ib as i,Jb as l,Kb as m,Sa as M,Wa as s,Y as g,cc as p,fb as c,gb as f,gc as h,hc as u,ic as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var N=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una toggle",this.disabled=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-toggle-example"]],standalone:!1,decls:13,vars:5,consts:[[1,"bd-example"],["label","Spuntato","toggle","true",3,"ngModelChange","ngModel"],["label","Disabilitato","toggle","true",3,"ngModelChange","ngModel"],[1,"example-section"],["toggle","true",3,"ngModelChange","ngModel","label","disabled"]],template:function(o,n){o&1&&(i(0,"h3"),p(1,"Configurazione toggle"),l(),i(2,"div",0)(3,"fieldset")(4,"legend"),p(5,"Seleziona le caratteristiche"),l(),i(6,"it-checkbox",1),b("ngModelChange",function(a){return u(n.checked,a)||(n.checked=a),a}),l(),i(7,"it-checkbox",2),b("ngModelChange",function(a){return u(n.disabled,a)||(n.disabled=a),a}),l()(),m(8,"hr"),i(9,"h4"),p(10,"Risultato"),l(),i(11,"p",3)(12,"it-checkbox",4),b("ngModelChange",function(a){return u(n.checked,a)||(n.checked=a),a}),l()()()),o&2&&(s(6),h("ngModel",n.checked),s(),h("ngModel",n.disabled),s(5),h("ngModel",n.checked),d("label",n.label)("disabled",n.disabled))},dependencies:[S,E,I],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}"]});let t=e;return t})();var P=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-toggle-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Configurazione toggle</h3>
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
}`]],template:function(o,n){o&1&&m(0,"it-toggle-example")(1,"it-source-display",0)},dependencies:[D,N],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.component=W.components.find(r=>r.name==="ItCheckboxComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["it-toggle-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,n){o&1&&(i(0,"h1",0),p(1,"Toggle"),l(),i(2,"p",1),p(3,"Il componente Toggle utilizzabile in un form"),l(),m(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-toggle-examples"),l(),i(8,"it-tab-item",4),m(9,"it-api-parameters",5),l()()),o&2&&(s(4),d("innerHTML",n.component.description,M),s(5),d("component",n.component))},dependencies:[z,w,v,P],encapsulation:2});let t=e;return t})();var H=[{path:"",component:L}],_=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=g({imports:[x.forChild(H),x]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=f({type:e}),e.\u0275inj=g({imports:[k,T,F,_]});let t=e;return t})();export{re as ToggleModule};
