import{a as H,b as V,c as k,d as A}from"./chunk-K63BAWCR.js";import{ca as M,f as b,la as _,ma as D,y as I}from"./chunk-NX3VSRME.js";import"./chunk-MLMGL4QO.js";import{h as w}from"./chunk-A2FNTR3N.js";import{m as S}from"./chunk-3O7E6U5R.js";import{Hb as C,Ib as i,Jb as n,Kb as m,Rb as y,Ta as g,V as p,Vb as v,Xa as a,ca as d,cc as T,da as c,gc as o,ic as x,jb as r,kb as h}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var F=(()=>{class e{constructor(){this.collapse=!0,this.showTime="",this.shownTime="",this.hideTime="",this.hiddenTime=""}logShown(){this.shownTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-collapse-example"]],standalone:!1,decls:15,vars:2,consts:[["itCollapse","itCollapse"],[1,"bd-example"],[1,"example-section"],["itButton","primary",3,"click"],[3,"showEvent","hiddenEvent"],[1,"py-3"],[1,"mt-4"]],template:function(t,s){if(t&1){let f=y();i(0,"h3"),o(1,"Esempio direttiva Collapse"),n(),i(2,"div",1)(3,"div",2)(4,"button",3),v("click",function(){d(f);let O=T(7);return c(O.toggle())}),o(5,"Apri/chiudi contenuto"),n(),i(6,"it-collapse",4,0),v("showEvent",function(){return d(f),c(s.logShown())})("hiddenEvent",function(){return d(f),c(s.logHidden())}),i(8,"div",5),o(9," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),n()()(),i(10,"div",6)(11,"div"),o(12),n(),i(13,"div"),o(14),n()()()}t&2&&(a(12),x("Ultima emissione dell'evento shown = ",s.shownTime),a(2),x("Ultima emissione dell'evento hidden = ",s.hiddenTime))},dependencies:[I,b],encapsulation:2})}}return e})();var N=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-collapse-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempio direttiva Collapse</h3>
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
}`]],template:function(t,s){t&1&&m(0,"it-collapse-example")(1,"it-source-display",0)},dependencies:[H,F],encapsulation:2})}}return e})();var U=(()=>{class e{constructor(){this.collapseComponent=V.components.find(l=>l.name==="ItCollapseComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["it-collapse-index"]],standalone:!1,decls:12,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,s){t&1&&(i(0,"h1",0),o(1,"Collapse"),n(),i(2,"p",1),o(3,"Direttiva per l'interazione con elementi richiudibili"),n(),m(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-collapse-examples"),n(),i(8,"it-tab-item",4)(9,"h2"),o(10,"Collapse"),n(),m(11,"it-api-parameters",5),n()()),t&2&&(a(4),C("innerHTML",s.collapseComponent.description,g),a(7),C("component",s.collapseComponent))},dependencies:[k,D,_,N],encapsulation:2})}}return e})();var q=[{path:"",component:U}],j=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=p({imports:[w.forChild(q),w]})}}return e})();var me=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=p({imports:[S,M,A,j]})}}return e})();export{me as CollapseModule};
