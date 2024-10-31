import{a as O,b as V,c as U,d as q}from"./chunk-XPAZYYAC.js";import{L as N,O as W,Z as L,aa as P,ga as j,ha as z,na as A,pa as H,q as F,t as k}from"./chunk-EZQPAPWN.js";import"./chunk-XZP45KYQ.js";import{o as y}from"./chunk-NU7RFJ6M.js";import{$b as v,Cb as o,Db as r,Eb as m,Fb as w,Gb as T,Ib as R,Lb as x,Pc as I,Ua as E,Wb as a,Wc as D,Xb as _,Y as u,Za as d,_b as C,ac as h,fa as c,ga as f,ob as S,qa as B,qb as s,ra as M}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";function Y(n,e){if(n&1){let g=R();w(0),o(1,"it-radio-button",16),h("ngModelChange",function(t){B(g);let i=x();return v(i.selectedColor,t)||(i.selectedColor=t),M(t)}),r(),T()}if(n&2){let g=e.$implicit,l=e.index,t=x();d(),s("id","color-"+l)("span",g)("value",g)("label",g),C("ngModel",t.selectedColor)}}var G=(()=>{let e=class e{constructor(){this.colors=["primary","secondary","danger","warning","success"],this.selectedColor="primary",this.badgeText="New",this.isRounded=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-example"]],decls:37,vars:11,consts:[[1,"bd-example"],[1,"row"],[1,"col-4"],[1,"example-section"],[1,"mt-4"],["label","Testo badge",3,"ngModelChange","ngModel"],[1,"col-6"],[4,"ngFor","ngForOf"],["for","isRounded"],["label","Rounded",3,"ngModelChange","ngModel"],[1,"col-6","offset-2"],[1,"card-title"],[3,"itBadge","rounded"],["href","#",3,"itBadge","rounded"],[1,"mb-5",3,"itButton"],[1,"visually-hidden"],["name","color",3,"ngModelChange","id","span","value","label","ngModel"]],template:function(t,i){t&1&&(o(0,"h3"),a(1,"Configurazione badge"),r(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"it-input",5),h("ngModelChange",function(p){return v(i.badgeText,p)||(i.badgeText=p),p}),r(),m(8,"hr"),r(),o(9,"div",1)(10,"div",6)(11,"span")(12,"strong"),a(13,"Colore Badge"),r()(),S(14,Y,2,5,"ng-container",7),r(),o(15,"div",6)(16,"span",8)(17,"strong"),a(18,"Badge arrotondato"),r()(),o(19,"it-checkbox",9),h("ngModelChange",function(p){return v(i.isRounded,p)||(i.isRounded=p),p}),r()()()()(),o(20,"div",10)(21,"h4",11),a(22,"Risultato badge"),r(),o(23,"h5"),a(24," Testo di esempio "),o(25,"span",12),a(26),r()(),o(27,"h5"),a(28,"Link di esempio "),o(29,"a",13),a(30,"link"),r()(),o(31,"button",14),a(32," Profilo "),o(33,"span",12),a(34,"9"),r(),o(35,"span",15),a(36,"Messaggi non letti"),r()()()()()),t&2&&(d(7),C("ngModel",i.badgeText),d(7),s("ngForOf",i.colors),d(5),C("ngModel",i.isRounded),d(6),s("itBadge",i.selectedColor)("rounded",i.isRounded),d(),_(i.badgeText),d(3),s("itBadge",i.selectedColor)("rounded",i.isRounded),d(2),s("itButton","primary"),d(2),s("itBadge",i.selectedColor)("rounded",i.isRounded))},dependencies:[I,N,W,F,k,A,P,H]});let n=e;return n})();var J=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-examples"]],decls:2,vars:0,consts:[["html",`<h3>Configurazione badge</h3>
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
})
export class BadgeExampleComponent {
  colors: Array<BadgeColor> = ['primary', 'secondary', 'danger', 'warning', 'success'];

  selectedColor: BadgeColor = 'primary';
  badgeText = 'New';

  isRounded = false;
}`]],template:function(t,i){t&1&&m(0,"it-badge-example")(1,"it-source-display",0)},dependencies:[U,G]});let n=e;return n})();var K=(()=>{let e=class e{constructor(){this.directive=O.directives.find(l=>l.name==="ItBadgeDirective")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,i){t&1&&(o(0,"h1",0),a(1,"Badge"),r(),o(2,"p",1),a(3,"Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette."),r(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-badge-examples"),r(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),r()()),t&2&&(d(4),s("innerHTML",i.directive.description,E),d(5),s("component",i.directive))},dependencies:[V,z,j,J]});let n=e;return n})();var ee=[{path:"",component:K}],Q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[y.forChild(ee),y]});let n=e;return n})();var Te=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[D,L,q,Q]});let n=e;return n})();export{Te as BadgeModule};
