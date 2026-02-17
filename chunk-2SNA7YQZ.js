import{a as W,b as D,c as L,d as F}from"./chunk-K63BAWCR.js";import{Q as w,T as I,ca as T,la as z,ma as G,sa as b}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as g}from"./chunk-A2FNTR3N.js";import{m as _}from"./chunk-3O7E6U5R.js";import{Bb as y,Cb as E,Hb as k,Ib as o,Jb as t,Kb as r,Ob as v,Pb as S,Ta as M,V as f,Xa as m,gc as l,jb as s,kb as C,kc as p,lc as d,mc as h}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";function q(e,H){e&1&&(l(0," Accetto i "),o(1,"a",8),l(2,"termini di servizio"),t())}function J(e,H){e&1&&l(0," Sono una checkbox ")}var N=(()=>{class e{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-checkbox-example"]],standalone:!1,decls:19,vars:8,consts:[[1,"bd-example"],[1,"example-section"],["label","Spuntato",3,"ngModelChange","ngModel"],["label","Disabilitato",3,"ngModelChange","ngModel"],["label","Indeterminato",3,"ngModelChange","ngModel"],["label","Testo con link",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","indeterminate","disabled"],["label",""],["href","https://italia.github.io/bootstrap-italia/"]],template:function(n,i){n&1&&(o(0,"h3"),l(1,"Configurazione checkbox"),t(),o(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),l(6,"Gruppo di checkbox"),t(),o(7,"it-checkbox",2),h("ngModelChange",function(a){return d(i.checked,a)||(i.checked=a),a}),t(),o(8,"it-checkbox",3),h("ngModelChange",function(a){return d(i.disabled,a)||(i.disabled=a),a}),t(),o(9,"it-checkbox",4),h("ngModelChange",function(a){return d(i.indeterminate,a)||(i.indeterminate=a),a}),t(),o(10,"it-checkbox",5),h("ngModelChange",function(a){return d(i.link,a)||(i.link=a),a}),t()()(),r(11,"hr"),o(12,"h4"),l(13,"Risultato"),t(),o(14,"div",1)(15,"it-checkbox",6),h("ngModelChange",function(a){return d(i.checked,a)||(i.checked=a),a}),v(16,7),y(17,q,3,0)(18,J,1,0),S(),t()()()),n&2&&(m(7),p("ngModel",i.checked),m(),p("ngModel",i.disabled),m(),p("ngModel",i.indeterminate),m(),p("ngModel",i.link),m(5),p("ngModel",i.checked),k("indeterminate",i.indeterminate)("disabled",i.disabled),m(2),E(i.link?17:18))},dependencies:[w,I,b],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-checkbox-example-inline"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],["label","label 1","inline","true"],["label","label 2","inline","true"],["label","label 3","inline","true"]],template:function(n,i){n&1&&(o(0,"h3"),l(1,"Inline"),t(),o(2,"div",0)(3,"fieldset")(4,"legend"),l(5,"Gruppo di checkbox"),t(),r(6,"it-checkbox",1)(7,"it-checkbox",2)(8,"it-checkbox",3),t()())},dependencies:[b],encapsulation:2})}}return e})();var B=(()=>{class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-checkbox-example-group"]],standalone:!1,decls:20,vars:0,consts:[[1,"row"],[1,"col-5"],["label","Checkbox selezionato","checked","","group","true"],["label","Checkbox non selezionato","group","true"],["label","Checkbox disabilitato non selezionato","disabled","","group","true"],[1,"col-2"]],template:function(n,i){n&1&&(o(0,"h3"),l(1,"Gruppi"),t(),o(2,"div")(3,"div",0)(4,"fieldset",1)(5,"legend"),l(6,"Gruppo di checkbox"),t(),r(7,"it-checkbox",2)(8,"it-checkbox",3)(9,"it-checkbox",4),t(),r(10,"div",5),o(11,"fieldset",1)(12,"legend"),l(13,"Gruppo di checkbox"),t(),o(14,"it-checkbox",2),l(15," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),t(),o(16,"it-checkbox",3),l(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),t(),o(18,"it-checkbox",4),l(19," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),t()()()())},dependencies:[b],encapsulation:2})}}return e})();var R=(()=>{class e{constructor(){}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-checkbox-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Configurazione checkbox</h3>

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
        @if (link) {
          Accetto i <a href="https://italia.github.io/bootstrap-italia/">termini di servizio</a>
        } @else {
          Sono una checkbox
        }
      </ng-container>
    </it-checkbox>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss'],
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class CheckboxExampleGroupComponent {
  checked = true;
  label = 'Sono una checkbox';
  disabled = false;
  indeterminate = false;
}`]],template:function(n,i){n&1&&r(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[W,N,U,B],encapsulation:2})}}return e})();var j=(()=>{class e{constructor(){this.component=D.components.find(c=>c.name==="ItCheckboxComponent")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-checkbox-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,i){n&1&&(o(0,"h1",0),l(1,"Checkbox"),t(),o(2,"p",1),l(3,"Il componente Checkbox utilizzabile in un form"),t(),r(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),r(7,"it-checkbox-examples"),t(),o(8,"it-tab-item",4),r(9,"it-api-parameters",5),t()()),n&2&&(m(4),k("innerHTML",i.component.description,M),m(5),k("component",i.component))},dependencies:[L,G,z,R],encapsulation:2})}}return e})();var X=[{path:"",component:j}],A=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=f({imports:[g.forChild(X),g]})}}return e})();var Me=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=f({imports:[_,T,F,A]})}}return e})();export{Me as CheckboxModule};
