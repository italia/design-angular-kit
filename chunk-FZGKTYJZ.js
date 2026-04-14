import{a as D,b as H,c as k,d as A}from"./chunk-ZWYEEAVU.js";import{ca as I,f as S,la as M,ma as _,y as b}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as C}from"./chunk-F32MIGDQ.js";import{m as T}from"./chunk-66PP3R5H.js";import{Gb as h,Hb as n,Ib as i,Jb as p,Qb as w,Sa as g,Ub as u,V as r,Wa as s,bc as y,ca as x,da as E,fc as o,hc as f,ib as m,jb as d}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var F=(()=>{class e{constructor(){this.collapse=!0,this.showTime="",this.shownTime="",this.hideTime="",this.hiddenTime=""}logShown(){this.shownTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-collapse-example"]],standalone:!1,decls:15,vars:2,consts:[["itCollapse","itCollapse"],[1,"bd-example"],[1,"example-section"],["itButton","primary",3,"click"],[3,"showEvent","hiddenEvent"],[1,"py-3"],[1,"mt-4"]],template:function(t,a){if(t&1){let O=w();n(0,"h3"),o(1,"Esempio direttiva Collapse"),i(),n(2,"div",1)(3,"div",2)(4,"button",3),u("click",function(){x(O);let B=y(7);return E(B.toggle())}),o(5,"Apri/chiudi contenuto"),i(),n(6,"it-collapse",4,0),u("showEvent",function(){return a.logShown()})("hiddenEvent",function(){return a.logHidden()}),n(8,"div",5),o(9," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),i()()(),n(10,"div",6)(11,"div"),o(12),i(),n(13,"div"),o(14),i()()()}t&2&&(s(12),f("Ultima emissione dell'evento shown = ",a.shownTime),s(2),f("Ultima emissione dell'evento hidden = ",a.hiddenTime))},dependencies:[b,S],encapsulation:2})}}return e})();var N=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-collapse-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempio direttiva Collapse</h3>
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
}`]],template:function(t,a){t&1&&p(0,"it-collapse-example")(1,"it-source-display",0)},dependencies:[D,F],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){this.collapseComponent=H.components.find(l=>l.name==="ItCollapseComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-collapse-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,a){t&1&&(n(0,"h1",0),o(1,"Collapse"),i(),n(2,"p",1),o(3,"Direttiva per l'interazione con elementi richiudibili"),i(),p(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),p(7,"it-collapse-examples"),i(),n(8,"it-tab-item",4)(9,"h2"),o(10,"Collapse"),i(),p(11,"it-api-parameters",5),i()()),t&2&&(s(4),h("innerHTML",a.collapseComponent.description,g),s(7),h("component",a.collapseComponent))},dependencies:[k,_,M,N],encapsulation:2})}}return e})();var q=[{path:"",component:U}],j=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=r({imports:[C.forChild(q),C]})}}return e})();var pe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=r({imports:[T,I,A,j]})}}return e})();export{pe as CollapseModule};
