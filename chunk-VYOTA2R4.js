import{a as G,b as L,c as F,d as P}from"./chunk-CQV3UQHT.js";import{Q as T,T as _,ca as z,la as W,ma as D,sa as x}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as M}from"./chunk-DVW5EFKD.js";import{m as I}from"./chunk-I647ZKKI.js";import{Bb as v,Cb as E,Hb as k,Ib as o,Jb as n,Kb as m,Lb as S,Mb as w,Sa as y,Wa as s,Y as g,cc as a,fb as d,gb as C,gc as p,hc as h,ic as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function q(t,e){t&1&&(a(0," Accetto i "),o(1,"a",8),a(2,"termini di servizio"),n())}function J(t,e){t&1&&a(0," Sono una checkbox ")}var U=(()=>{let e=class e{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["it-checkbox-example"]],standalone:!1,decls:19,vars:8,consts:[[1,"bd-example"],[1,"example-section"],["label","Spuntato",3,"ngModelChange","ngModel"],["label","Disabilitato",3,"ngModelChange","ngModel"],["label","Indeterminato",3,"ngModelChange","ngModel"],["label","Testo con link",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","indeterminate","disabled"],["label",""],["href","https://italia.github.io/bootstrap-italia/"]],template:function(i,l){i&1&&(o(0,"h3"),a(1,"Configurazione checkbox"),n(),o(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),a(6,"Gruppo di checkbox"),n(),o(7,"it-checkbox",2),b("ngModelChange",function(c){return h(l.checked,c)||(l.checked=c),c}),n(),o(8,"it-checkbox",3),b("ngModelChange",function(c){return h(l.disabled,c)||(l.disabled=c),c}),n(),o(9,"it-checkbox",4),b("ngModelChange",function(c){return h(l.indeterminate,c)||(l.indeterminate=c),c}),n(),o(10,"it-checkbox",5),b("ngModelChange",function(c){return h(l.link,c)||(l.link=c),c}),n()()(),m(11,"hr"),o(12,"h4"),a(13,"Risultato"),n(),o(14,"div",1)(15,"it-checkbox",6),b("ngModelChange",function(c){return h(l.checked,c)||(l.checked=c),c}),S(16,7),v(17,q,3,0)(18,J,1,0),w(),n()()()),i&2&&(s(7),p("ngModel",l.checked),s(),p("ngModel",l.disabled),s(),p("ngModel",l.indeterminate),s(),p("ngModel",l.link),s(5),p("ngModel",l.checked),k("indeterminate",l.indeterminate)("disabled",l.disabled),s(2),E(l.link?17:18))},dependencies:[T,_,x],encapsulation:2});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["it-checkbox-example-inline"]],standalone:!1,decls:9,vars:0,consts:[[1,"bd-example"],["label","label 1","inline","true"],["label","label 2","inline","true"],["label","label 3","inline","true"]],template:function(i,l){i&1&&(o(0,"h3"),a(1,"Inline"),n(),o(2,"div",0)(3,"fieldset")(4,"legend"),a(5,"Gruppo di checkbox"),n(),m(6,"it-checkbox",1)(7,"it-checkbox",2)(8,"it-checkbox",3),n()())},dependencies:[x],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["it-checkbox-example-group"]],standalone:!1,decls:20,vars:0,consts:[[1,"row"],[1,"col-5"],["label","Checkbox selezionato","checked","","group","true"],["label","Checkbox non selezionato","group","true"],["label","Checkbox disabilitato non selezionato","disabled","","group","true"],[1,"col-2"]],template:function(i,l){i&1&&(o(0,"h3"),a(1,"Gruppi"),n(),o(2,"div")(3,"div",0)(4,"fieldset",1)(5,"legend"),a(6,"Gruppo di checkbox"),n(),m(7,"it-checkbox",2)(8,"it-checkbox",3)(9,"it-checkbox",4),n(),m(10,"div",5),o(11,"fieldset",1)(12,"legend"),a(13,"Gruppo di checkbox"),n(),o(14,"it-checkbox",2),a(15," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n(),o(16,"it-checkbox",3),a(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n(),o(18,"it-checkbox",4),a(19," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),n()()()())},dependencies:[x],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["it-checkbox-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Configurazione checkbox</h3>

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
}`]],template:function(i,l){i&1&&m(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[G,U,B,j],encapsulation:2});let t=e;return t})();var H=(()=>{let e=class e{constructor(){this.component=L.components.find(r=>r.name==="ItCheckboxComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["it-checkbox-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,l){i&1&&(o(0,"h1",0),a(1,"Checkbox"),n(),o(2,"p",1),a(3,"Il componente Checkbox utilizzabile in un form"),n(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-checkbox-examples"),n(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),n()()),i&2&&(s(4),k("innerHTML",l.component.description,y),s(5),k("component",l.component))},dependencies:[F,D,W,A],encapsulation:2});let t=e;return t})();var X=[{path:"",component:H}],R=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[M.forChild(X),M]});let t=e;return t})();var Me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[I,z,P,R]});let t=e;return t})();export{Me as CheckboxModule};
