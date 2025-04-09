import{a as U,b as B,c as j,d as A}from"./chunk-FNEUKG6X.js";import{L as G,O as V,Z as F,ga as N,ha as P,pa as g}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{o as w}from"./chunk-53YMBHPH.js";import{$b as k,Cb as o,Db as n,Eb as m,Fb as v,Gb as S,Ib as T,Qc as W,Ua as I,Vb as L,Wb as a,Wc as D,Y as y,Za as p,_b as u,ac as f,fa as s,ga as E,kc as z,ob as _,qa as h,qb as x,ra as b}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";function X(t,e){t&1&&(v(0),a(1," Accetto i "),o(2,"a",10),a(3,"termini di servizio"),n(),S())}function Y(t,e){t&1&&a(0," Sono una checkbox ")}var R=(()=>{let e=class e{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-checkbox-example"]],decls:20,vars:9,consts:[["simpleLabel",""],[1,"bd-example"],[1,"example-section"],["label","Spuntato",3,"ngModelChange","ngModel"],["label","Disabilitato",3,"ngModelChange","ngModel"],["label","Indeterminato",3,"ngModelChange","ngModel"],["label","Testo con link",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","indeterminate","disabled"],["label",""],[4,"ngIf","ngIfElse"],["href","https://italia.github.io/bootstrap-italia/"]],template:function(i,l){if(i&1){let d=T();o(0,"h3"),a(1,"Configurazione checkbox"),n(),o(2,"div",1)(3,"div",2)(4,"fieldset")(5,"legend"),a(6,"Gruppo di checkbox"),n(),o(7,"it-checkbox",3),f("ngModelChange",function(c){return h(d),k(l.checked,c)||(l.checked=c),b(c)}),n(),o(8,"it-checkbox",4),f("ngModelChange",function(c){return h(d),k(l.disabled,c)||(l.disabled=c),b(c)}),n(),o(9,"it-checkbox",5),f("ngModelChange",function(c){return h(d),k(l.indeterminate,c)||(l.indeterminate=c),b(c)}),n(),o(10,"it-checkbox",6),f("ngModelChange",function(c){return h(d),k(l.link,c)||(l.link=c),b(c)}),n()()(),m(11,"hr"),o(12,"h4"),a(13,"Risultato"),n(),o(14,"div",2)(15,"it-checkbox",7),f("ngModelChange",function(c){return h(d),k(l.checked,c)||(l.checked=c),b(c)}),v(16,8),_(17,X,4,0,"ng-container",9)(18,Y,1,0,"ng-template",null,0,z),S(),n()()()}if(i&2){let d=L(19);p(7),u("ngModel",l.checked),p(),u("ngModel",l.disabled),p(),u("ngModel",l.indeterminate),p(),u("ngModel",l.link),p(5),u("ngModel",l.checked),x("indeterminate",l.indeterminate)("disabled",l.disabled),p(2),x("ngIf",l.link)("ngIfElse",d)}},dependencies:[W,G,V,g]});let t=e;return t})();var q=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-checkbox-example-inline"]],decls:9,vars:0,consts:[[1,"bd-example"],["label","label 1","inline","true"],["label","label 2","inline","true"],["label","label 3","inline","true"]],template:function(i,l){i&1&&(o(0,"h3"),a(1,"Inline"),n(),o(2,"div",0)(3,"fieldset")(4,"legend"),a(5,"Gruppo di checkbox"),n(),m(6,"it-checkbox",1)(7,"it-checkbox",2)(8,"it-checkbox",3),n()())},dependencies:[g]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-checkbox-example-group"]],decls:20,vars:0,consts:[[1,"row"],[1,"col-5"],["label","Checkbox selezionato","checked","","group","true"],["label","Checkbox non selezionato","group","true"],["label","Checkbox disabilitato non selezionato","disabled","","group","true"],[1,"col-2"]],template:function(i,l){i&1&&(o(0,"h3"),a(1,"Gruppi"),n(),o(2,"div")(3,"div",0)(4,"fieldset",1)(5,"legend"),a(6,"Gruppo di checkbox"),n(),m(7,"it-checkbox",2)(8,"it-checkbox",3)(9,"it-checkbox",4),n(),m(10,"div",5),o(11,"fieldset",1)(12,"legend"),a(13,"Gruppo di checkbox"),n(),o(14,"it-checkbox",2),a(15," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n(),o(16,"it-checkbox",3),a(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n(),o(18,"it-checkbox",4),a(19," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n()()()())},dependencies:[g]});let t=e;return t})();var K=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-checkbox-examples"]],decls:6,vars:0,consts:[["html",`<h3>Configurazione checkbox</h3>

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

<div>
  <div class="row">
    <fieldset class="col-5">
      <legend>Gruppo di checkbox</legend>
      <it-checkbox label="Checkbox selezionato" checked group="true"> </it-checkbox>
      <it-checkbox label="Checkbox non selezionato" group="true"> </it-checkbox>
      <it-checkbox label="Checkbox disabilitato non selezionato" disabled group="true"> </it-checkbox>
    </fieldset>
    <div class="col-2"></div>
    <fieldset class="col-5">
      <legend>Gruppo di checkbox</legend>
      <it-checkbox label="Checkbox selezionato" checked group="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
      </it-checkbox>
      <it-checkbox label="Checkbox non selezionato" group="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
      </it-checkbox>
      <it-checkbox label="Checkbox disabilitato non selezionato" disabled group="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero
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
}`]],template:function(i,l){i&1&&m(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[j,R,q,J]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.component=U.components.find(r=>r.name==="ItCheckboxComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["it-checkbox-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,l){i&1&&(o(0,"h1",0),a(1,"Checkbox"),n(),o(2,"p",1),a(3,"Il componente Checkbox utilizzabile in un form"),n(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-checkbox-examples"),n(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),n()()),i&2&&(p(4),x("innerHTML",l.component.description,I),p(5),x("component",l.component))},dependencies:[B,P,N,K]});let t=e;return t})();var ne=[{path:"",component:O}],Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=E({type:e}),e.\u0275inj=y({imports:[w.forChild(ne),w]});let t=e;return t})();var _e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=E({type:e}),e.\u0275inj=y({imports:[D,F,A,Q]});let t=e;return t})();export{_e as CheckboxModule};
