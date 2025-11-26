import{a as S,b as I,c as M,d as w}from"./chunk-CQV3UQHT.js";import{h as C,la as P,ma as E,w as d,x as y,y as B}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as b}from"./chunk-DVW5EFKD.js";import{m as h}from"./chunk-I647ZKKI.js";import{Hb as m,Ib as o,Jb as r,Kb as i,Sa as x,Wa as p,Y as f,cc as a,fb as l,gb as g}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var D=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-example"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],[3,"value"]],template:function(t,c){t&1&&(o(0,"h3"),a(1,"Esempio barra di avanzamento"),r(),o(2,"div",0)(3,"p",1),i(4,"it-progress-bar",2),r()()),t&2&&(p(4),m("value",50))},dependencies:[d],styles:[".example-section[_ngcontent-%COMP%]{align-content:center;align-items:center}"]});let n=e;return n})();var T=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-label"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["showLabel","true",3,"value"]],template:function(t,c){t&1&&(o(0,"h3"),a(1,"Esempio con etichette"),r(),o(2,"div",0)(3,"p",1),i(4,"it-progress-bar",2),r()()),t&2&&(p(4),m("value",25))},dependencies:[d],encapsulation:2});let n=e;return n})();var U=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-indeterminate"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["indeterminate","true",3,"value"]],template:function(t,c){t&1&&(o(0,"h3"),a(1,"Progresso indeterminato"),r(),o(2,"div",0)(3,"p",1),i(4,"it-progress-bar",2),r()()),t&2&&(p(4),m("value",0))},dependencies:[d],encapsulation:2});let n=e;return n})();var F=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-bg"]],standalone:!1,decls:11,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["color","info",3,"value"],["color","success",3,"value"],["color","warning",3,"value"],["color","danger",3,"value"]],template:function(t,c){t&1&&(o(0,"h3"),a(1,"Esempio con sfondi supportati"),r(),o(2,"div",0)(3,"p",1),i(4,"it-progress-bar",2),r(),o(5,"p",1),i(6,"it-progress-bar",3),r(),o(7,"p",1),i(8,"it-progress-bar",4),r(),o(9,"p",1),i(10,"it-progress-bar",5),r()()),t&2&&(p(4),m("value",25),p(2),m("value",50),p(2),m("value",75),p(2),m("value",100))},dependencies:[d],encapsulation:2});let n=e;return n})();var L=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-button"]],standalone:!1,decls:18,vars:1,consts:[[1,"bd-example"],[1,"row"],[1,"col-12","col-sm-6"],["itButton","primary","progress","true","disabled","true"],["name","github","color","white",1,"ms-2"],["itButton","secondary","disabled","true",3,"progress"]],template:function(t,c){t&1&&(o(0,"h3"),a(1,"Pulsante con Progress Bar"),r(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"p")(6,"strong"),a(7,"Pulsante primario"),r()(),o(8,"button",3),a(9," Label pulsante "),i(10,"it-icon",4),r()(),o(11,"div",2)(12,"p")(13,"strong"),a(14,"Pulsante secondario"),r()(),o(15,"button",5),a(16," Completo al 70% "),i(17,"it-icon",4),r()()()()),t&2&&(p(15),m("progress",70))},dependencies:[B,y,C],encapsulation:2});let n=e;return n})();var z=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-examples"]],standalone:!1,decls:10,vars:0,consts:[["html",`<h3>Progresso indeterminato</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="0" indeterminate="true"></it-progress-bar>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-indeterminate',
  templateUrl: './progress-bar-indeterminate.component.html',
  styleUrls: ['./progress-bar-indeterminate.component.scss'],
  standalone: false,
})
export class ProgressBarIndeterminateComponent {}`],["html",`<h3>Pulsante con Progress Bar</h3>

<div class="bd-example">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante primario</strong></p>
      <button itButton="primary" progress="true" disabled="true">
        Label pulsante
        <it-icon name="github" color="white" class="ms-2"></it-icon>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante secondario</strong></p>
      <button itButton="secondary" [progress]="70" disabled="true">
        Completo al 70%
        <it-icon name="github" color="white" class="ms-2"></it-icon>
      </button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-button',
  templateUrl: './progress-bar-button.component.html',
  styleUrls: ['./progress-bar-button.component.scss'],
  standalone: false,
})
export class ProgressBarButtonComponent {}`],["html",`<h3>Esempio barra di avanzamento</h3>

<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="50"></it-progress-bar>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-example',
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss'],
  standalone: false,
})
export class ProgressBarExampleComponent {}`],["html",`<h3>Esempio con etichette</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="25" showLabel="true"></it-progress-bar>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-label',
  templateUrl: './progress-bar-label.component.html',
  styleUrls: ['./progress-bar-label.component.scss'],
  standalone: false,
})
export class ProgressBarLabelComponent {}`],["html",`<h3>Esempio con sfondi supportati</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="25" color="info"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="50" color="success"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="75" color="warning"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="100" color="danger"></it-progress-bar>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-bg',
  templateUrl: './progress-bar-bg.component.html',
  styleUrls: ['./progress-bar-bg.component.scss'],
  standalone: false,
})
export class ProgressBarBgComponent {}`]],template:function(t,c){t&1&&i(0,"it-progress-bar-indeterminate")(1,"it-source-display",0)(2,"it-progress-bar-button")(3,"it-source-display",1)(4,"it-progress-bar-example")(5,"it-source-display",2)(6,"it-progress-bar-label")(7,"it-source-display",3)(8,"it-progress-bar-bg")(9,"it-source-display",4)},dependencies:[S,D,T,U,F,L],encapsulation:2});let n=e;return n})();var j=(()=>{let e=class e{constructor(){this.component=I.components.find(s=>s.name==="ItProgressBarComponent")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-progress-bar-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,c){t&1&&(o(0,"h1",0),a(1,"Barra di avanzamento"),r(),o(2,"p",1),a(3,"Il componente Barra di avanzamento utilizzabile per mostrare dei progressi"),r(),i(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),i(7,"it-progress-bar-examples"),r(),o(8,"it-tab-item",4),i(9,"it-api-parameters",5),r()()),t&2&&(p(4),m("innerHTML",c.component.description,x),p(5),m("component",c.component))},dependencies:[M,E,P,z],encapsulation:2});let n=e;return n})();var J=[{path:"",component:j}],N=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=f({imports:[b.forChild(J),b]});let n=e;return n})();var he=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=f({imports:[h,w,N]});let n=e;return n})();export{he as ProgressBarModule};
