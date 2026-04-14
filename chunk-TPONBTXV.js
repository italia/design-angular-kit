import{a as H,b as V,c as U,d as q}from"./chunk-ZWYEEAVU.js";import{Q as W,T as F,ca as N,fa as L,la as P,ma as j,sa as z,ua as A,v as k,y as D}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h}from"./chunk-F32MIGDQ.js";import{m as I}from"./chunk-66PP3R5H.js";import{Db as _,Eb as w,Fb as S,Gb as l,Hb as o,Ib as i,Jb as s,Qb as T,Sa as E,V as g,Wa as d,Wb as x,ca as B,da as M,fc as r,gc as R,ib as p,jb as u,jc as f,kc as C,lc as v}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";function Q(e,y){if(e&1){let a=T();o(0,"it-radio-button",16),v("ngModelChange",function(t){B(a);let c=x();return C(c.selectedColor,t)||(c.selectedColor=t),M(t)}),i()}if(e&2){let a=y.$implicit,n=y.$index,t=x();l("id","color-"+n)("span",a)("value",a)("label",a),f("ngModel",t.selectedColor)}}var G=(()=>{class e{constructor(){this.colors=["primary","secondary","danger","warning","success"],this.selectedColor="primary",this.badgeText="New",this.isRounded=!1}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-badge-example"]],standalone:!1,decls:38,vars:10,consts:[[1,"bd-example"],[1,"row"],[1,"col-4"],[1,"example-section"],[1,"mt-4"],["label","Testo badge",3,"ngModelChange","ngModel"],[1,"col-6"],["name","color",3,"id","span","value","label","ngModel"],["for","isRounded"],["label","Rounded",3,"ngModelChange","ngModel"],[1,"col-6","offset-2"],[1,"card-title"],[3,"itBadge","rounded"],["href","#",3,"itBadge","rounded"],[1,"mb-5",3,"itButton"],[1,"visually-hidden"],["name","color",3,"ngModelChange","id","span","value","label","ngModel"]],template:function(n,t){n&1&&(o(0,"h3"),r(1,"Configurazione badge"),i(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"it-input",5),v("ngModelChange",function(m){return C(t.badgeText,m)||(t.badgeText=m),m}),i(),s(8,"hr"),i(),o(9,"div",1)(10,"div",6)(11,"span")(12,"strong"),r(13,"Colore Badge"),i()(),w(14,Q,1,5,"it-radio-button",7,_),i(),o(16,"div",6)(17,"span",8)(18,"strong"),r(19,"Badge arrotondato"),i()(),o(20,"it-checkbox",9),v("ngModelChange",function(m){return C(t.isRounded,m)||(t.isRounded=m),m}),i()()()()(),o(21,"div",10)(22,"h4",11),r(23,"Risultato badge"),i(),o(24,"h5"),r(25," Testo di esempio "),o(26,"span",12),r(27),i()(),o(28,"h5"),r(29,"Link di esempio "),o(30,"a",13),r(31,"link"),i()(),o(32,"button",14),r(33," Profilo "),o(34,"span",12),r(35,"9"),i(),o(36,"span",15),r(37,"Messaggi non letti"),i()()()()()),n&2&&(d(7),f("ngModel",t.badgeText),d(7),S(t.colors),d(6),f("ngModel",t.isRounded),d(6),l("itBadge",t.selectedColor)("rounded",t.isRounded),d(),R(t.badgeText),d(3),l("itBadge",t.selectedColor)("rounded",t.isRounded),d(2),l("itButton","primary"),d(2),l("itBadge",t.selectedColor)("rounded",t.isRounded))},dependencies:[W,F,k,D,z,L,A],encapsulation:2})}}return e})();var J=(()=>{class e{constructor(){}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-badge-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Configurazione badge</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div class="example-section">
        <div class="mt-4">
          <it-input label="Testo badge" [(ngModel)]="badgeText"></it-input>
          <hr />
        </div>
        <div class="row">
          <div class="col-6">
            <span><strong>Colore Badge</strong></span>
            @for (color of colors; track color; let i = $index) {
              <it-radio-button
                [id]="'color-' + i"
                name="color"
                [span]="color"
                [value]="color"
                [label]="color"
                [(ngModel)]="selectedColor"></it-radio-button>
            }
          </div>
          <div class="col-6">
            <span for="isRounded"><strong>Badge arrotondato</strong></span>
            <it-checkbox [(ngModel)]="isRounded" label="Rounded"></it-checkbox>
          </div>
        </div>
      </div>
    </div>

    <div class="col-6 offset-2">
      <h4 class="card-title">Risultato badge</h4>

      <h5>
        Testo di esempio <span [itBadge]="selectedColor" [rounded]="isRounded">/{/{ badgeText /}/}</span>
      </h5>

      <h5>Link di esempio <a href="#" [itBadge]="selectedColor" [rounded]="isRounded">link</a></h5>
      <button class="mb-5" [itButton]="'primary'">
        Profilo <span [itBadge]="selectedColor" [rounded]="isRounded">9</span>
        <span class="visually-hidden">Messaggi non letti</span>
      </button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { BadgeColor } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss'],
  standalone: false,
})
export class BadgeExampleComponent {
  colors: Array<BadgeColor> = ['primary', 'secondary', 'danger', 'warning', 'success'];

  selectedColor: BadgeColor = 'primary';
  badgeText = 'New';

  isRounded = false;
}`]],template:function(n,t){n&1&&s(0,"it-badge-example")(1,"it-source-display",0)},dependencies:[H,G],encapsulation:2})}}return e})();var K=(()=>{class e{constructor(){this.directive=V.directives.find(a=>a.name==="ItBadgeDirective")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-badge-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,t){n&1&&(o(0,"h1",0),r(1,"Badge"),i(),o(2,"p",1),r(3,"Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette."),i(),s(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),s(7,"it-badge-examples"),i(),o(8,"it-tab-item",4),s(9,"it-api-parameters",5),i()()),n&2&&(d(4),l("innerHTML",t.directive.description,E),d(5),l("component",t.directive))},dependencies:[U,j,P,J],encapsulation:2})}}return e})();var Z=[{path:"",component:K}],O=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[h.forChild(Z),h]})}}return e})();var Ee=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[I,N,q,O]})}}return e})();export{Ee as BadgeModule};
