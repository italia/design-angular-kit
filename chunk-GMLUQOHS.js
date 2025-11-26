import{a as H,b as V,c as U,d as q}from"./chunk-CQV3UQHT.js";import{Q as W,T as F,ca as N,fa as L,la as P,ma as j,sa as z,ua as A,v as k,y as D}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as y}from"./chunk-DVW5EFKD.js";import{m as _}from"./chunk-I647ZKKI.js";import{Eb as w,Fb as S,Gb as T,Hb as s,Ib as i,Jb as a,Kb as m,Ob as R,Sa as E,Tb as x,Wa as l,Y as u,cc as r,dc as I,fb as c,ga as B,gb as f,gc as C,ha as M,hc as v,ic as b}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function X(n,e){if(n&1){let g=R();i(0,"it-radio-button",16),b("ngModelChange",function(t){B(g);let o=x();return v(o.selectedColor,t)||(o.selectedColor=t),M(t)}),a()}if(n&2){let g=e.$implicit,d=e.$index,t=x();s("id","color-"+d)("span",g)("value",g)("label",g),C("ngModel",t.selectedColor)}}var G=(()=>{let e=class e{constructor(){this.colors=["primary","secondary","danger","warning","success"],this.selectedColor="primary",this.badgeText="New",this.isRounded=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-example"]],standalone:!1,decls:38,vars:10,consts:[[1,"bd-example"],[1,"row"],[1,"col-4"],[1,"example-section"],[1,"mt-4"],["label","Testo badge",3,"ngModelChange","ngModel"],[1,"col-6"],["name","color",3,"id","span","value","label","ngModel"],["for","isRounded"],["label","Rounded",3,"ngModelChange","ngModel"],[1,"col-6","offset-2"],[1,"card-title"],[3,"itBadge","rounded"],["href","#",3,"itBadge","rounded"],[1,"mb-5",3,"itButton"],[1,"visually-hidden"],["name","color",3,"ngModelChange","id","span","value","label","ngModel"]],template:function(t,o){t&1&&(i(0,"h3"),r(1,"Configurazione badge"),a(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"it-input",5),b("ngModelChange",function(p){return v(o.badgeText,p)||(o.badgeText=p),p}),a(),m(8,"hr"),a(),i(9,"div",1)(10,"div",6)(11,"span")(12,"strong"),r(13,"Colore Badge"),a()(),S(14,X,1,5,"it-radio-button",7,w),a(),i(16,"div",6)(17,"span",8)(18,"strong"),r(19,"Badge arrotondato"),a()(),i(20,"it-checkbox",9),b("ngModelChange",function(p){return v(o.isRounded,p)||(o.isRounded=p),p}),a()()()()(),i(21,"div",10)(22,"h4",11),r(23,"Risultato badge"),a(),i(24,"h5"),r(25," Testo di esempio "),i(26,"span",12),r(27),a()(),i(28,"h5"),r(29,"Link di esempio "),i(30,"a",13),r(31,"link"),a()(),i(32,"button",14),r(33," Profilo "),i(34,"span",12),r(35,"9"),a(),i(36,"span",15),r(37,"Messaggi non letti"),a()()()()()),t&2&&(l(7),C("ngModel",o.badgeText),l(7),T(o.colors),l(6),C("ngModel",o.isRounded),l(6),s("itBadge",o.selectedColor)("rounded",o.isRounded),l(),I(o.badgeText),l(3),s("itBadge",o.selectedColor)("rounded",o.isRounded),l(2),s("itButton","primary"),l(2),s("itBadge",o.selectedColor)("rounded",o.isRounded))},dependencies:[W,F,k,D,z,L,A],encapsulation:2});let n=e;return n})();var J=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Configurazione badge</h3>
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
}`]],template:function(t,o){t&1&&m(0,"it-badge-example")(1,"it-source-display",0)},dependencies:[H,G],encapsulation:2});let n=e;return n})();var K=(()=>{let e=class e{constructor(){this.directive=V.directives.find(d=>d.name==="ItBadgeDirective")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["it-badge-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,o){t&1&&(i(0,"h1",0),r(1,"Badge"),a(),i(2,"p",1),r(3,"Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette."),a(),m(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-badge-examples"),a(),i(8,"it-tab-item",4),m(9,"it-api-parameters",5),a()()),t&2&&(l(4),s("innerHTML",o.directive.description,E),l(5),s("component",o.directive))},dependencies:[U,j,P,J],encapsulation:2});let n=e;return n})();var $=[{path:"",component:K}],O=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[y.forChild($),y]});let n=e;return n})();var we=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[_,N,q,O]});let n=e;return n})();export{we as BadgeModule};
