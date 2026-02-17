import{a as E,b as M,c as I,d as S}from"./chunk-K63BAWCR.js";import{h as x,la as y,ma as P,w as c,x as B,y as h}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as f}from"./chunk-A2FNTR3N.js";import{m as C}from"./chunk-3O7E6U5R.js";import{Hb as p,Ib as n,Jb as o,Kb as r,Ta as v,V as g,Xa as a,gc as i,jb as m,kb as u}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var w=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-example"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],[3,"value"]],template:function(t,l){t&1&&(n(0,"h3"),i(1,"Esempio barra di avanzamento"),o(),n(2,"div",0)(3,"p",1),r(4,"it-progress-bar",2),o()()),t&2&&(a(4),p("value",50))},dependencies:[c],styles:[".example-section[_ngcontent-%COMP%]{align-content:center;align-items:center}"]})}}return e})();var D=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-label"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["showLabel","true",3,"value"]],template:function(t,l){t&1&&(n(0,"h3"),i(1,"Esempio con etichette"),o(),n(2,"div",0)(3,"p",1),r(4,"it-progress-bar",2),o()()),t&2&&(a(4),p("value",25))},dependencies:[c],encapsulation:2})}}return e})();var L=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-indeterminate"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["indeterminate","true",3,"value"]],template:function(t,l){t&1&&(n(0,"h3"),i(1,"Progresso indeterminato"),o(),n(2,"div",0)(3,"p",1),r(4,"it-progress-bar",2),o()()),t&2&&(a(4),p("value",0))},dependencies:[c],encapsulation:2})}}return e})();var T=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-bg"]],standalone:!1,decls:11,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["color","info",3,"value"],["color","success",3,"value"],["color","warning",3,"value"],["color","danger",3,"value"]],template:function(t,l){t&1&&(n(0,"h3"),i(1,"Esempio con sfondi supportati"),o(),n(2,"div",0)(3,"p",1),r(4,"it-progress-bar",2),o(),n(5,"p",1),r(6,"it-progress-bar",3),o(),n(7,"p",1),r(8,"it-progress-bar",4),o(),n(9,"p",1),r(10,"it-progress-bar",5),o()()),t&2&&(a(4),p("value",25),a(2),p("value",50),a(2),p("value",75),a(2),p("value",100))},dependencies:[c],encapsulation:2})}}return e})();var U=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-button"]],standalone:!1,decls:18,vars:1,consts:[[1,"bd-example"],[1,"row"],[1,"col-12","col-sm-6"],["itButton","primary","progress","true","disabled","true"],["name","github","color","white",1,"ms-2"],["itButton","secondary","disabled","true",3,"progress"]],template:function(t,l){t&1&&(n(0,"h3"),i(1,"Pulsante con Progress Bar"),o(),n(2,"div",0)(3,"div",1)(4,"div",2)(5,"p")(6,"strong"),i(7,"Pulsante primario"),o()(),n(8,"button",3),i(9," Label pulsante "),r(10,"it-icon",4),o()(),n(11,"div",2)(12,"p")(13,"strong"),i(14,"Pulsante secondario"),o()(),n(15,"button",5),i(16," Completo al 70% "),r(17,"it-icon",4),o()()()()),t&2&&(a(15),p("progress",70))},dependencies:[h,B,x],encapsulation:2})}}return e})();var F=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-examples"]],standalone:!1,decls:10,vars:0,consts:[["html",`<h3>Progresso indeterminato</h3>
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
export class ProgressBarBgComponent {}`]],template:function(t,l){t&1&&r(0,"it-progress-bar-indeterminate")(1,"it-source-display",0)(2,"it-progress-bar-button")(3,"it-source-display",1)(4,"it-progress-bar-example")(5,"it-source-display",2)(6,"it-progress-bar-label")(7,"it-source-display",3)(8,"it-progress-bar-bg")(9,"it-source-display",4)},dependencies:[E,w,D,L,T,U],encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.component=M.components.find(s=>s.name==="ItProgressBarComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-progress-bar-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,l){t&1&&(n(0,"h1",0),i(1,"Barra di avanzamento"),o(),n(2,"p",1),i(3,"Il componente Barra di avanzamento utilizzabile per mostrare dei progressi"),o(),r(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),r(7,"it-progress-bar-examples"),o(),n(8,"it-tab-item",4),r(9,"it-api-parameters",5),o()()),t&2&&(a(4),p("innerHTML",l.component.description,v),a(5),p("component",l.component))},dependencies:[I,P,y,F],encapsulation:2})}}return e})();var q=[{path:"",component:z}],j=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[f.forChild(q),f]})}}return e})();var Ce=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[C,S,j]})}}return e})();export{Ce as ProgressBarModule};
