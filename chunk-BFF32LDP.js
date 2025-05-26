import{a as k,b as A,c as F,d as N}from"./chunk-VOECI7NO.js";import{da as M,f as I,ma as H,na as V,z as D}from"./chunk-AH6A2KSZ.js";import"./chunk-XZP45KYQ.js";import{h as g}from"./chunk-BTXKVGUM.js";import"./chunk-WH5OHNTV.js";import{$a as a,Eb as n,Fb as o,Gb as p,Kb as T,Mb as w,Wa as y,Xb as S,Yb as r,Z as d,_b as x,ed as b,ga as m,ha as c,ra as h,sa as f,sb as C}from"./chunk-E5TMX6OZ.js";import"./chunk-JNJ3D7EP.js";var U=(()=>{let e=class e{constructor(){this.collapse=!0,this.showTime="",this.shownTime="",this.hideTime="",this.hiddenTime=""}logShown(){this.shownTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-example"]],decls:15,vars:2,consts:[["itCollapse","itCollapse"],[1,"bd-example"],[1,"example-section"],["itButton","primary",3,"click"],[3,"showEvent","hiddenEvent"],[1,"py-3"],[1,"mt-4"]],template:function(i,s){if(i&1){let v=T();n(0,"h3"),r(1,"Esempio direttiva Collapse"),o(),n(2,"div",1)(3,"div",2)(4,"button",3),w("click",function(){h(v);let B=S(7);return f(B.toggle())}),r(5,"Apri/chiudi contenuto"),o(),n(6,"it-collapse",4,0),w("showEvent",function(){return h(v),f(s.logShown())})("hiddenEvent",function(){return h(v),f(s.logHidden())}),n(8,"div",5),r(9," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),o()()(),n(10,"div",6)(11,"div"),r(12),o(),n(13,"div"),r(14),o()()()}i&2&&(a(12),x("Ultima emissione dell'evento shown = ",s.shownTime,""),a(2),x("Ultima emissione dell'evento hidden = ",s.hiddenTime,""))},dependencies:[D,I]});let t=e;return t})();var _=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-examples"]],decls:2,vars:0,consts:[["html",`<h3>Esempio direttiva Collapse</h3>
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
}`]],template:function(i,s){i&1&&p(0,"it-collapse-example")(1,"it-source-display",0)},dependencies:[F,U]});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.collapseComponent=k.components.find(l=>l.name==="ItCollapseComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["it-collapse-index"]],decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,s){i&1&&(n(0,"h1",0),r(1,"Collapse"),o(),n(2,"p",1),r(3,"Direttiva per l'interazione con elementi richiudibili"),o(),p(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-collapse-examples"),o(),n(8,"it-tab-item",4)(9,"h2"),r(10,"Collapse"),o(),p(11,"it-api-parameters",5),o()()),i&2&&(a(4),C("innerHTML",s.collapseComponent.description,y),a(7),C("component",s.collapseComponent))},dependencies:[A,V,H,_]});let t=e;return t})();var L=[{path:"",component:j}],O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[g.forChild(L),g]});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[b,M,N,O]});let t=e;return t})();export{pe as CollapseModule};
