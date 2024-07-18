import{a as z,b as P,c as U,d as A}from"./chunk-XTG6MU3L.js";import{T as B,W as G,fa as j,k as F,l as N,sa as k}from"./chunk-R4LXWPNQ.js";import{l as v}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as _,Hc as D,Mb as T,Mc as V,Na as I,Nb as r,Ra as s,Rb as u,Sb as g,Tb as f,U as S,ba as m,bc as W,ca as w,gb as L,ib as x,la as h,ma as b,ub as o,vb as a,wb as p,xb as M,yb as y}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function X(t,e){t&1&&(M(0),r(1," Accetto i "),o(2,"a",10),r(3,"termini di servizio"),a(),y())}function Y(t,e){t&1&&r(0," Sono una checkbox ")}var R=(()=>{let e=class e{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example"]],decls:16,vars:9,consts:[["simpleLabel",""],[1,"bd-example"],[1,"example-section"],["label","Spuntato",3,"ngModelChange","ngModel"],["label","Disabilitato",3,"ngModelChange","ngModel"],["label","Indeterminato",3,"ngModelChange","ngModel"],["label","Testo con link",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","indeterminate","disabled"],["label",""],[4,"ngIf","ngIfElse"],["href","https://italia.github.io/bootstrap-italia/"]],template:function(i,n){if(i&1){let d=_();o(0,"h3"),r(1,"Configurazione checkbox"),a(),o(2,"div",1)(3,"p",2)(4,"it-checkbox",3),f("ngModelChange",function(l){return h(d),g(n.checked,l)||(n.checked=l),b(l)}),a(),o(5,"it-checkbox",4),f("ngModelChange",function(l){return h(d),g(n.disabled,l)||(n.disabled=l),b(l)}),a(),o(6,"it-checkbox",5),f("ngModelChange",function(l){return h(d),g(n.indeterminate,l)||(n.indeterminate=l),b(l)}),a(),o(7,"it-checkbox",6),f("ngModelChange",function(l){return h(d),g(n.link,l)||(n.link=l),b(l)}),a()(),o(8,"h4"),r(9,"Risultato"),a(),o(10,"p",2)(11,"it-checkbox",7),f("ngModelChange",function(l){return h(d),g(n.checked,l)||(n.checked=l),b(l)}),M(12,8),L(13,X,4,0,"ng-container",9)(14,Y,1,0,"ng-template",null,0,W),y(),a()()()}if(i&2){let d=T(15);s(4),u("ngModel",n.checked),s(),u("ngModel",n.disabled),s(),u("ngModel",n.indeterminate),s(),u("ngModel",n.link),s(4),u("ngModel",n.checked),x("indeterminate",n.indeterminate)("disabled",n.disabled),s(2),x("ngIf",n.link)("ngIfElse",d)}},dependencies:[D,B,G,k]});let t=e;return t})();var q=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example-inline"]],decls:6,vars:0,consts:[[1,"bd-example"],["label","label 1","inline","true"],["label","label 2","inline","true"],["label","label 3","inline","true"]],template:function(i,n){i&1&&(o(0,"h3"),r(1,"Inline"),a(),o(2,"div",0),p(3,"it-checkbox",1)(4,"it-checkbox",2)(5,"it-checkbox",3),a())},dependencies:[k]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example-group"]],decls:15,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["label","Prima checkbox raggruppata","group","true"],["label","Seconda checkbox raggruppata","group","true"],["group","true"],["label",""],["href","https://italia.github.io/bootstrap-italia/docs/form/checkbox/"]],template:function(i,n){i&1&&(o(0,"h3"),r(1,"Gruppi"),a(),o(2,"div",0)(3,"p",1)(4,"it-checkbox",2),r(5," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),a(),o(6,"it-checkbox",3),r(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie liber "),a(),o(8,"it-checkbox",4),M(9,5),r(10," Terza "),o(11,"a",6),r(12,"checkbox"),a(),r(13," raggruppata"),y(),r(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),a()()())},dependencies:[k]});let t=e;return t})();var K=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-examples"]],decls:6,vars:0,consts:[["html",`<h3>Configurazione checkbox</h3>

<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" label="Spuntato"></it-checkbox>
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
    <it-checkbox [(ngModel)]="indeterminate" label="Indeterminato"></it-checkbox>
    <it-checkbox [(ngModel)]="link" label="Testo con link"></it-checkbox>
  </p>

  <h4>Risultato</h4>

  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" [indeterminate]="indeterminate" [disabled]="disabled">
      <ng-container label>
        <ng-container *ngIf="link; else simpleLabel">
          Accetto i <a href="https://italia.github.io/bootstrap-italia/">termini di servizio</a>
        </ng-container>
        <ng-template #simpleLabel> Sono una checkbox </ng-template>
      </ng-container>
    </it-checkbox>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss'],
})
export class CheckboxExampleComponent {
  checked = true;
  disabled = false;
  indeterminate = false;
  link = false;
}`],["html",`<h3>Inline</h3>
<div class="bd-example">
  <it-checkbox label="label 1" inline="true"></it-checkbox>
  <it-checkbox label="label 2" inline="true"></it-checkbox>
  <it-checkbox label="label 3" inline="true"></it-checkbox>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example-inline',
  templateUrl: './checkbox-example-inline.component.html',
  styleUrls: ['./checkbox-example-inline.component.scss'],
})
export class CheckboxExampleInlineComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}`],["html",`<h3>Gruppi</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox label="Prima checkbox raggruppata" group="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
    </it-checkbox>
    <it-checkbox label="Seconda checkbox raggruppata" group="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Maecenas molestie liber
    </it-checkbox>
    <it-checkbox group="true">
      <ng-container label>
        Terza <a href="https://italia.github.io/bootstrap-italia/docs/form/checkbox/">checkbox</a> raggruppata</ng-container
      >

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
    </it-checkbox>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example-group',
  templateUrl: './checkbox-example-group.component.html',
  styleUrls: ['./checkbox-example-group.component.scss'],
})
export class CheckboxExampleGroupComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}`]],template:function(i,n){i&1&&p(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[U,R,q,J]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.component=z.components.find(c=>c.name==="ItCheckboxComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,n){i&1&&(o(0,"h1",0),r(1,"Checkbox"),a(),o(2,"p",1),r(3,"Il componente Checkbox utilizzabile in un form"),a(),p(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-checkbox-examples"),a(),o(8,"it-tab-item",4),p(9,"it-api-parameters",5),a()()),i&2&&(s(4),x("innerHTML",n.component.description,I),s(5),x("component",n.component))},dependencies:[P,N,F,K]});let t=e;return t})();var ie=[{path:"",component:O}],Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=w({type:e}),e.\u0275inj=S({imports:[v.forChild(ie),v]});let t=e;return t})();var Le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=w({type:e}),e.\u0275inj=S({imports:[V,j,A,Q]});let t=e;return t})();export{Le as CheckboxModule};
