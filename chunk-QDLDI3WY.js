import{a as U,b as B,c as j,d as A}from"./chunk-747GECUZ.js";import{L as V,O as z,Z as P,ga as F,ha as N,na as k}from"./chunk-NCNX5TI5.js";import"./chunk-XZP45KYQ.js";import{o as w}from"./chunk-NU7RFJ6M.js";import{$b as g,Cb as o,Db as i,Eb as p,Fb as M,Gb as y,Ib as _,Qc as D,Ua as I,Vb as T,Wb as l,Wc as G,Y as S,Za as s,_b as u,ac as f,fa as m,ga as v,kc as W,ob as L,qa as h,qb as x,ra as b}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";function X(t,e){t&1&&(M(0),l(1," Accetto i "),o(2,"a",10),l(3,"termini di servizio"),i(),y())}function Y(t,e){t&1&&l(0," Sono una checkbox ")}var R=(()=>{let e=class e{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example"]],decls:20,vars:9,consts:[["simpleLabel",""],[1,"bd-example"],[1,"example-section"],["label","Spuntato",3,"ngModelChange","ngModel"],["label","Disabilitato",3,"ngModelChange","ngModel"],["label","Indeterminato",3,"ngModelChange","ngModel"],["label","Testo con link",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","indeterminate","disabled"],["label",""],[4,"ngIf","ngIfElse"],["href","https://italia.github.io/bootstrap-italia/"]],template:function(n,a){if(n&1){let d=_();o(0,"h3"),l(1,"Configurazione checkbox"),i(),o(2,"div",1)(3,"div",2)(4,"fieldset")(5,"legend"),l(6,"Gruppo di checkbox"),i(),o(7,"it-checkbox",3),f("ngModelChange",function(r){return h(d),g(a.checked,r)||(a.checked=r),b(r)}),i(),o(8,"it-checkbox",4),f("ngModelChange",function(r){return h(d),g(a.disabled,r)||(a.disabled=r),b(r)}),i(),o(9,"it-checkbox",5),f("ngModelChange",function(r){return h(d),g(a.indeterminate,r)||(a.indeterminate=r),b(r)}),i(),o(10,"it-checkbox",6),f("ngModelChange",function(r){return h(d),g(a.link,r)||(a.link=r),b(r)}),i()()(),p(11,"hr"),o(12,"h4"),l(13,"Risultato"),i(),o(14,"div",2)(15,"it-checkbox",7),f("ngModelChange",function(r){return h(d),g(a.checked,r)||(a.checked=r),b(r)}),M(16,8),L(17,X,4,0,"ng-container",9)(18,Y,1,0,"ng-template",null,0,W),y(),i()()()}if(n&2){let d=T(19);s(7),u("ngModel",a.checked),s(),u("ngModel",a.disabled),s(),u("ngModel",a.indeterminate),s(),u("ngModel",a.link),s(5),u("ngModel",a.checked),x("indeterminate",a.indeterminate)("disabled",a.disabled),s(2),x("ngIf",a.link)("ngIfElse",d)}},dependencies:[D,V,z,k]});let t=e;return t})();var q=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example-inline"]],decls:9,vars:0,consts:[[1,"bd-example"],["label","label 1","inline","true"],["label","label 2","inline","true"],["label","label 3","inline","true"]],template:function(n,a){n&1&&(o(0,"h3"),l(1,"Inline"),i(),o(2,"div",0)(3,"fieldset")(4,"legend"),l(5,"Gruppo di checkbox"),i(),p(6,"it-checkbox",1)(7,"it-checkbox",2)(8,"it-checkbox",3),i()())},dependencies:[k]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-example-group"]],decls:18,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["label","Prima checkbox raggruppata","group","true"],["label","Seconda checkbox raggruppata","group","true"],["group","true"],["label",""],["href","https://italia.github.io/bootstrap-italia/docs/form/checkbox/"]],template:function(n,a){n&1&&(o(0,"h3"),l(1,"Gruppi"),i(),o(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),l(6,"Gruppo di checkbox"),i(),o(7,"it-checkbox",2),l(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),i(),o(9,"it-checkbox",3),l(10," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie liber "),i(),o(11,"it-checkbox",4),M(12,5),l(13," Terza "),o(14,"a",6),l(15,"checkbox"),i(),l(16," raggruppata"),y(),l(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),i()()()())},dependencies:[k]});let t=e;return t})();var K=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-examples"]],decls:6,vars:0,consts:[["html",`<h3>Configurazione checkbox</h3>

<div class="bd-example">
  <div class="example-section">
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      <it-checkbox [(ngModel)]="checked" label="Spuntato"></it-checkbox>
      <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
      <it-checkbox [(ngModel)]="indeterminate" label="Indeterminato"></it-checkbox>
      <it-checkbox [(ngModel)]="link" label="Testo con link"></it-checkbox>
    </fieldset>
  </div>
  <hr />
  <h4>Risultato</h4>

  <div class="example-section">
    <it-checkbox [(ngModel)]="checked" [indeterminate]="indeterminate" [disabled]="disabled">
      <ng-container label>
        <ng-container *ngIf="link; else simpleLabel">
          Accetto i <a href="https://italia.github.io/bootstrap-italia/">termini di servizio</a>
        </ng-container>
        <ng-template #simpleLabel> Sono una checkbox </ng-template>
      </ng-container>
    </it-checkbox>
  </div>
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
  <fieldset>
    <legend>Gruppo di checkbox</legend>
    <it-checkbox label="label 1" inline="true"></it-checkbox>
    <it-checkbox label="label 2" inline="true"></it-checkbox>
    <it-checkbox label="label 3" inline="true"></it-checkbox>
  </fieldset>
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
  <div class="example-section">
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      <it-checkbox label="Prima checkbox raggruppata" group="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
      </it-checkbox>
      <it-checkbox label="Seconda checkbox raggruppata" group="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas molestie liber
      </it-checkbox>
      <it-checkbox group="true">
        <ng-container label>
          Terza <a href="https://italia.github.io/bootstrap-italia/docs/form/checkbox/">checkbox</a> raggruppata</ng-container
        >

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
      </it-checkbox>
    </fieldset>
  </div>
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
}`]],template:function(n,a){n&1&&p(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[j,R,q,J]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.component=U.components.find(c=>c.name==="ItCheckboxComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-checkbox-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,a){n&1&&(o(0,"h1",0),l(1,"Checkbox"),i(),o(2,"p",1),l(3,"Il componente Checkbox utilizzabile in un form"),i(),p(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-checkbox-examples"),i(),o(8,"it-tab-item",4),p(9,"it-api-parameters",5),i()()),n&2&&(s(4),x("innerHTML",a.component.description,I),s(5),x("component",a.component))},dependencies:[B,N,F,K]});let t=e;return t})();var ie=[{path:"",component:O}],Q=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=v({type:e}),e.\u0275inj=S({imports:[w.forChild(ie),w]});let t=e;return t})();var Le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=v({type:e}),e.\u0275inj=S({imports:[G,P,A,Q]});let t=e;return t})();export{Le as CheckboxModule};
