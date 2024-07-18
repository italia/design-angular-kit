import{a as F,b as k,c as L,d as U}from"./chunk-XTG6MU3L.js";import{A as P,T as j,W as z,fa as A,ia as H,k as N,l as W,sa as O,ua as V}from"./chunk-R4LXWPNQ.js";import{l as y}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as R,Db as x,Gc as I,Mc as D,Na as E,Nb as d,Ob as _,Ra as l,Rb as C,Sb as h,Tb as v,U as f,ba as c,ca as u,gb as w,ib as s,la as M,ma as B,ub as i,vb as r,wb as m,xb as T,yb as S}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function X(n,e){if(n&1){let g=R();T(0),i(1,"it-radio-button",14),v("ngModelChange",function(t){M(g);let o=x();return h(o.selectedColor,t)||(o.selectedColor=t),B(t)}),r(),S()}if(n&2){let g=e.$implicit,a=e.index,t=x();l(),s("id","color-"+a)("span",g)("value",g)("label",g),C("ngModel",t.selectedColor)}}var q=(()=>{let e=class e{constructor(){this.colors=["primary","secondary","danger","warning","success"],this.selectedColor="primary",this.badgeText="New",this.isRounded=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-example"]],decls:31,vars:8,consts:[[1,"bd-example"],[1,"row"],[1,"col-4"],[1,"example-section"],[1,"mt-4"],["label","Testo badge",3,"ngModelChange","ngModel"],[1,"col-6"],[4,"ngFor","ngForOf"],["for","isRounded"],["label","Rounded",3,"ngModelChange","ngModel"],[1,"col-6","offset-2"],[1,"card-title"],[3,"itBadge","rounded"],["href","#",3,"itBadge","rounded"],["name","color",3,"ngModelChange","id","span","value","label","ngModel"]],template:function(t,o){t&1&&(i(0,"h3"),d(1,"Configurazione badge"),r(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"it-input",5),v("ngModelChange",function(p){return h(o.badgeText,p)||(o.badgeText=p),p}),r(),m(8,"hr"),r(),i(9,"div",1)(10,"div",6)(11,"span")(12,"strong"),d(13,"Colore Badge"),r()(),w(14,X,2,5,"ng-container",7),r(),i(15,"div",6)(16,"span",8)(17,"strong"),d(18,"Badge arrotondato"),r()(),i(19,"it-checkbox",9),v("ngModelChange",function(p){return h(o.isRounded,p)||(o.isRounded=p),p}),r()()()()(),i(20,"div",10)(21,"h4",11),d(22,"Risultato badge"),r(),i(23,"h5"),d(24," Testo di esempio "),i(25,"span",12),d(26),r()(),i(27,"h5"),d(28,"Link di esempio "),i(29,"a",13),d(30,"link"),r()()()()()),t&2&&(l(7),C("ngModel",o.badgeText),l(7),s("ngForOf",o.colors),l(5),C("ngModel",o.isRounded),l(6),s("itBadge",o.selectedColor)("rounded",o.isRounded),l(),_(o.badgeText),l(3),s("itBadge",o.selectedColor)("rounded",o.isRounded))},dependencies:[I,j,z,P,O,H,V]});let n=e;return n})();var G=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-examples"]],decls:2,vars:0,consts:[["html",`<h3>Configurazione badge</h3>
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
            <ng-container *ngFor="let color of colors; let i = index">
              <it-radio-button
                [id]="'color-' + i"
                name="color"
                [span]="color"
                [value]="color"
                [label]="color"
                [(ngModel)]="selectedColor"></it-radio-button>
            </ng-container>
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
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { BadgeColor } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss'],
})
export class BadgeExampleComponent {
  colors: Array<BadgeColor> = ['primary', 'secondary', 'danger', 'warning', 'success'];

  selectedColor: BadgeColor = 'primary';
  badgeText = 'New';

  isRounded = false;
}`]],template:function(t,o){t&1&&m(0,"it-badge-example")(1,"it-source-display",0)},dependencies:[L,q]});let n=e;return n})();var J=(()=>{let e=class e{constructor(){this.directive=F.directives.find(a=>a.name==="ItBadgeDirective")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,o){t&1&&(i(0,"h1",0),d(1,"Badge"),r(),i(2,"p",1),d(3,"Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette."),r(),m(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-badge-examples"),r(),i(8,"it-tab-item",4),m(9,"it-api-parameters",5),r()()),t&2&&(l(4),s("innerHTML",o.directive.description,E),l(5),s("component",o.directive))},dependencies:[k,W,N,G]});let n=e;return n})();var $=[{path:"",component:J}],K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[y.forChild($),y]});let n=e;return n})();var we=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[D,A,U,K]});let n=e;return n})();export{we as BadgeModule};
