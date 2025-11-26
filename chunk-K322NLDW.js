import{a as k,b as A,c as F,d as N}from"./chunk-CQV3UQHT.js";import{ca as M,f as I,la as H,ma as V,y as D}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as g}from"./chunk-DVW5EFKD.js";import{m as b}from"./chunk-I647ZKKI.js";import{Hb as C,Ib as n,Jb as o,Kb as p,Ob as T,Sa as y,Sb as w,Wa as r,Y as d,_b as S,cc as l,ec as x,fb as m,ga as c,gb as f,ha as h}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var U=(()=>{let e=class e{constructor(){this.collapse=!0,this.showTime="",this.shownTime="",this.hideTime="",this.hiddenTime=""}logShown(){this.shownTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-example"]],standalone:!1,decls:15,vars:2,consts:[["itCollapse","itCollapse"],[1,"bd-example"],[1,"example-section"],["itButton","primary",3,"click"],[3,"showEvent","hiddenEvent"],[1,"py-3"],[1,"mt-4"]],template:function(i,a){if(i&1){let v=T();n(0,"h3"),l(1,"Esempio direttiva Collapse"),o(),n(2,"div",1)(3,"div",2)(4,"button",3),w("click",function(){c(v);let B=S(7);return h(B.toggle())}),l(5,"Apri/chiudi contenuto"),o(),n(6,"it-collapse",4,0),w("showEvent",function(){return c(v),h(a.logShown())})("hiddenEvent",function(){return c(v),h(a.logHidden())}),n(8,"div",5),l(9," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),o()()(),n(10,"div",6)(11,"div"),l(12),o(),n(13,"div"),l(14),o()()()}i&2&&(r(12),x("Ultima emissione dell'evento shown = ",a.shownTime),r(2),x("Ultima emissione dell'evento hidden = ",a.hiddenTime))},dependencies:[D,I],encapsulation:2});let t=e;return t})();var _=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempio direttiva Collapse</h3>
<div class="bd-example">
  <div class="example-section">
    <button itButton="primary" (click)="itCollapse.toggle()">Apri/chiudi contenuto</button>

    <it-collapse (showEvent)="logShown()" (hiddenEvent)="logHidden()" #itCollapse="itCollapse">
      <div class="py-3">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
        beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </it-collapse>
  </div>

  <div class="mt-4">
    <div>Ultima emissione dell'evento shown = /{/{ shownTime /}/}</div>

    <div>Ultima emissione dell'evento hidden = /{/{ hiddenTime /}/}</div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-collapse-example',
  templateUrl: './collapse-example.component.html',
  styleUrls: ['./collapse-example.component.scss'],
  standalone: false,
})
export class CollapseExampleComponent {
  collapse = true;

  showTime = '';
  shownTime = '';
  hideTime = '';
  hiddenTime = '';

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}`]],template:function(i,a){i&1&&p(0,"it-collapse-example")(1,"it-source-display",0)},dependencies:[k,U],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.collapseComponent=A.components.find(s=>s.name==="ItCollapseComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,a){i&1&&(n(0,"h1",0),l(1,"Collapse"),o(),n(2,"p",1),l(3,"Direttiva per l'interazione con elementi richiudibili"),o(),p(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-collapse-examples"),o(),n(8,"it-tab-item",4)(9,"h2"),l(10,"Collapse"),o(),p(11,"it-api-parameters",5),o()()),i&2&&(r(4),C("innerHTML",a.collapseComponent.description,y),r(7),C("component",a.collapseComponent))},dependencies:[F,V,H,_],encapsulation:2});let t=e;return t})();var L=[{path:"",component:j}],O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[g.forChild(L),g]});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[b,M,N,O]});let t=e;return t})();export{pe as CollapseModule};
