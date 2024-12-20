import{a as T,b as G,c as M,d as A}from"./chunk-XXISVWHV.js";import{Z as L,ga as B,ha as V,y as _}from"./chunk-45V3EX6C.js";import"./chunk-XZP45KYQ.js";import{o as z}from"./chunk-NU7RFJ6M.js";import{Cb as o,Db as n,Eb as m,Ib as f,Kb as C,Lb as p,Qc as E,Ua as I,Wb as h,Wc as S,Y as x,Za as c,fa as b,ga as w,ob as v,qa as d,qb as l,ra as u}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var D=(()=>{let t=class t{constructor(){this.primary="primary",this.secondary="secondary",this.warning="warning",this.danger="danger",this.success="success",this.size="lg"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chips-colors"]],decls:14,vars:10,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-sm-auto"],["label","Primary",3,"color","size"],["label","Secondary",3,"color","size"],["label","Success",3,"color","size"],["label","Danger",3,"color","size"],["label","Warning",3,"color","size"]],template:function(i,r){i&1&&(o(0,"h3"),h(1,"Varianti di colore"),n(),o(2,"div",0)(3,"div",1)(4,"div",2),m(5,"it-chip",3),n(),o(6,"div",2),m(7,"it-chip",4),n(),o(8,"div",2),m(9,"it-chip",5),n(),o(10,"div",2),m(11,"it-chip",6),n(),o(12,"div",2),m(13,"it-chip",7),n()()()),i&2&&(c(5),l("color",r.primary)("size",r.size),c(2),l("color",r.secondary)("size",r.size),c(2),l("color",r.success)("size",r.size),c(2),l("color",r.danger)("size",r.size),c(2),l("color",r.warning)("size",r.size))},dependencies:[_],encapsulation:2});let e=t;return e})();function W(e,t){if(e&1){let s=f();o(0,"it-chip",7),C("closeEvent",function(){d(s);let i=p();return u(i.close("first"))}),n()}if(e&2){let s=p();l("disabled",!0)("showCloseButton",!0)("size",s.size)}}var N=(()=>{let t=class t{constructor(){this.el={first:!0},this.iconGithub="github",this.size="lg"}close(a){this.el[a]=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chips-disabled"]],decls:12,vars:10,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-sm-auto"],["label","Label disabilitata",3,"disabled","size"],["label","Label disabilitata",3,"disabled","showCloseButton","size","closeEvent",4,"ngIf"],["label","Label disabilitata",3,"disabled","icon","size"],["label","Label disabilitata",3,"avatar","altAvatar","disabled","size"],["label","Label disabilitata",3,"closeEvent","disabled","showCloseButton","size"]],template:function(i,r){i&1&&(o(0,"h3"),h(1,"Chip disabilitata"),n(),o(2,"div",0)(3,"div",1)(4,"div",2),m(5,"it-chip",3),n(),o(6,"div",2),v(7,W,1,3,"it-chip",4),n(),o(8,"div",2),m(9,"it-chip",5),n(),o(10,"div",2),m(11,"it-chip",6),n()()()),i&2&&(c(5),l("disabled",!0)("size",r.size),c(2),l("ngIf",r.el.first),c(2),l("disabled",!0)("icon",r.iconGithub)("size",r.size),c(2),l("avatar","https://randomuser.me/api/portraits/men/46.jpg")("altAvatar","Mario Rossi")("disabled",!0)("size",r.size))},dependencies:[E,_],encapsulation:2});let e=t;return e})();function J(e,t){if(e&1){let s=f();o(0,"it-chip",11),C("closeEvent",function(){d(s);let i=p();return u(i.close("first"))}),n()}e&2&&l("showCloseButton",!0)}function K(e,t){if(e&1){let s=f();o(0,"it-chip",12),C("closeEvent",function(){d(s);let i=p();return u(i.close("second"))}),n()}if(e&2){let s=p();l("showCloseButton",!0)("icon",s.iconGithub)}}function O(e,t){if(e&1){let s=f();o(0,"it-chip",13),C("closeEvent",function(){d(s);let i=p();return u(i.close("third"))}),n()}e&2&&l("showCloseButton",!0)("avatar","https://randomuser.me/api/portraits/men/46.jpg")("altAvatar","Mario Rossi")}function Q(e,t){if(e&1){let s=f();o(0,"it-chip",14),C("closeEvent",function(){d(s);let i=p();return u(i.close("fourth"))}),n()}if(e&2){let s=p();l("showCloseButton",!0)("size",s.size)}}function X(e,t){if(e&1){let s=f();o(0,"it-chip",15),C("closeEvent",function(){d(s);let i=p();return u(i.close("fifth"))}),n()}if(e&2){let s=p();l("showCloseButton",!0)("icon",s.iconGithub)("size",s.size)}}function Y(e,t){if(e&1){let s=f();o(0,"it-chip",16),C("closeEvent",function(){d(s);let i=p();return u(i.close("sixth"))}),n()}if(e&2){let s=p();l("showCloseButton",!0)("avatar","https://randomuser.me/api/portraits/men/46.jpg")("size",s.size)("altAvatar","Mario Rossi")}}var R=(()=>{let t=class t{constructor(){this.el={first:!0,second:!0,third:!0,fourth:!0,fifth:!0,sixth:!0},this.iconGithub="github",this.size="lg"}close(a){this.el[a]=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chips-group"]],decls:22,vars:7,consts:[[1,"bd-example"],[1,"row"],[1,"col-6","col-sm-auto"],["label","Label"],["label","Label",3,"showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"showCloseButton","icon","closeEvent",4,"ngIf"],["label","Label",3,"showCloseButton","avatar","altAvatar","closeEvent",4,"ngIf"],["label","Label",3,"size"],["label","Label",3,"showCloseButton","size","closeEvent",4,"ngIf"],["label","Label",3,"showCloseButton","icon","size","closeEvent",4,"ngIf"],["label","Label",3,"showCloseButton","avatar","size","altAvatar","closeEvent",4,"ngIf"],["label","Label",3,"closeEvent","showCloseButton"],["label","Label",3,"closeEvent","showCloseButton","icon"],["label","Label",3,"closeEvent","showCloseButton","avatar","altAvatar"],["label","Label",3,"closeEvent","showCloseButton","size"],["label","Label",3,"closeEvent","showCloseButton","icon","size"],["label","Label",3,"closeEvent","showCloseButton","avatar","size","altAvatar"]],template:function(i,r){i&1&&(o(0,"h3"),h(1,"Gruppi di Chip"),n(),o(2,"div",0)(3,"div",1)(4,"div",2),m(5,"it-chip",3),n(),o(6,"div",2),v(7,J,1,1,"it-chip",4),n(),o(8,"div",2),v(9,K,1,2,"it-chip",5),n(),o(10,"div",2),v(11,O,1,3,"it-chip",6),n()(),m(12,"hr"),o(13,"div",1)(14,"div",2),m(15,"it-chip",7),n(),o(16,"div",2),v(17,Q,1,2,"it-chip",8),n(),o(18,"div",2),v(19,X,1,3,"it-chip",9),n(),o(20,"div",2),v(21,Y,1,4,"it-chip",10),n()()()),i&2&&(c(7),l("ngIf",r.el.first),c(2),l("ngIf",r.el.second),c(2),l("ngIf",r.el.third),c(4),l("size",r.size),c(2),l("ngIf",r.el.fourth),c(2),l("ngIf",r.el.fifth),c(2),l("ngIf",r.el.sixth))},dependencies:[E,_],encapsulation:2});let e=t;return e})();function $(e,t){if(e&1){let s=f();o(0,"it-chip",11),C("closeEvent",function(){d(s);let i=p();return u(i.close("first"))}),n()}e&2&&l("showCloseButton",!0)}function ee(e,t){if(e&1){let s=f();o(0,"it-chip",12),C("closeEvent",function(){d(s);let i=p();return u(i.close("second"))}),n()}if(e&2){let s=p();l("icon",s.iconGithub)("showCloseButton",!0)}}function te(e,t){if(e&1){let s=f();o(0,"it-chip",13),C("closeEvent",function(){d(s);let i=p();return u(i.close("third"))}),n()}e&2&&l("avatar","https://randomuser.me/api/portraits/men/46.jpg")("altAvatar","Mario Rossi")("showCloseButton",!0)}function ie(e,t){if(e&1){let s=f();o(0,"it-chip",14),C("closeEvent",function(){d(s);let i=p();return u(i.close("fourth"))}),n()}if(e&2){let s=p();l("size",s.size)("showCloseButton",!0)}}function ne(e,t){if(e&1){let s=f();o(0,"it-chip",15),C("closeEvent",function(){d(s);let i=p();return u(i.close("fifth"))}),n()}if(e&2){let s=p();l("icon",s.iconGithub)("size",s.size)("showCloseButton",!0)}}function oe(e,t){if(e&1){let s=f();o(0,"it-chip",16),C("closeEvent",function(){d(s);let i=p();return u(i.close("sixth"))}),n()}if(e&2){let s=p();l("avatar","https://randomuser.me/api/portraits/men/46.jpg")("altAvatar","Mario Rossi")("size",s.size)("showCloseButton",!0)}}var F=(()=>{let t=class t{constructor(){this.el={first:!0,second:!0,third:!0,fourth:!0,fifth:!0,sixth:!0},this.iconGithub="github",this.size="lg"}close(a){this.el[a]=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chips-example"]],decls:31,vars:7,consts:[[1,"row"],[1,"col-12","col-md-6"],[1,"mt-4","mb-2"],["label","Label"],["label","Label",3,"showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"icon","showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"avatar","altAvatar","showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"size"],["label","Label",3,"size","showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"icon","size","showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"avatar","altAvatar","size","showCloseButton","closeEvent",4,"ngIf"],["label","Label",3,"closeEvent","showCloseButton"],["label","Label",3,"closeEvent","icon","showCloseButton"],["label","Label",3,"closeEvent","avatar","altAvatar","showCloseButton"],["label","Label",3,"closeEvent","size","showCloseButton"],["label","Label",3,"closeEvent","icon","size","showCloseButton"],["label","Label",3,"closeEvent","avatar","altAvatar","size","showCloseButton"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"h4"),h(3,"Versione Standard"),n(),o(4,"p",2),h(5,"Solo testo"),n(),m(6,"it-chip",3),o(7,"p",2),h(8,"Testo e chiusura"),n(),v(9,$,1,1,"it-chip",4),o(10,"p",2),h(11,"Icona, testo e chiusura"),n(),v(12,ee,1,2,"it-chip",5),o(13,"p",2),h(14,"Avatar, testo e chiusura"),n(),v(15,te,1,3,"it-chip",6),n(),o(16,"div",1)(17,"h4"),h(18,"Versione Grande"),n(),o(19,"p",2),h(20,"Solo testo grande"),n(),m(21,"it-chip",7),o(22,"p",2),h(23,"Testo e chiusura grande"),n(),v(24,ie,1,2,"it-chip",8),o(25,"p",2),h(26,"Icona, testo e chiusura grande"),n(),v(27,ne,1,3,"it-chip",9),o(28,"p",2),h(29,"Avatar, testo e chiusura grande"),n(),v(30,oe,1,4,"it-chip",10),n()()),i&2&&(c(9),l("ngIf",r.el.first),c(3),l("ngIf",r.el.second),c(3),l("ngIf",r.el.third),c(6),l("size",r.size),c(3),l("ngIf",r.el.fourth),c(3),l("ngIf",r.el.fifth),c(3),l("ngIf",r.el.sixth))},dependencies:[E,_],encapsulation:2});let e=t;return e})();var k=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chips-examples"]],decls:8,vars:0,consts:[["html",`<div class="row">
  <div class="col-12 col-md-6">
    <h4>Versione Standard</h4>
    <p class="mt-4 mb-2">Solo testo</p>
    <it-chip label="Label"></it-chip>
    <p class="mt-4 mb-2">Testo e chiusura</p>
    <it-chip *ngIf="el.first" [showCloseButton]="true" label="Label" (closeEvent)="close('first')"></it-chip>
    <p class="mt-4 mb-2">Icona, testo e chiusura</p>
    <it-chip *ngIf="el.second" [icon]="iconGithub" [showCloseButton]="true" label="Label" (closeEvent)="close('second')"></it-chip>
    <p class="mt-4 mb-2">Avatar, testo e chiusura</p>
    <it-chip
      *ngIf="el.third"
      [avatar]="'https://randomuser.me/api/portraits/men/46.jpg'"
      [altAvatar]="'Mario Rossi'"
      [showCloseButton]="true"
      label="Label"
      (closeEvent)="close('third')"></it-chip>
  </div>
  <div class="col-12 col-md-6">
    <h4>Versione Grande</h4>
    <p class="mt-4 mb-2">Solo testo grande</p>
    <it-chip [size]="size" label="Label"></it-chip>
    <p class="mt-4 mb-2">Testo e chiusura grande</p>
    <it-chip *ngIf="el.fourth" [size]="size" [showCloseButton]="true" label="Label" (closeEvent)="close('fourth')"></it-chip>
    <p class="mt-4 mb-2">Icona, testo e chiusura grande</p>
    <it-chip
      *ngIf="el.fifth"
      [icon]="iconGithub"
      [size]="size"
      [showCloseButton]="true"
      label="Label"
      (closeEvent)="close('fifth')"></it-chip>
    <p class="mt-4 mb-2">Avatar, testo e chiusura grande</p>
    <it-chip
      *ngIf="el.sixth"
      [avatar]="'https://randomuser.me/api/portraits/men/46.jpg'"
      [altAvatar]="'Mario Rossi'"
      [size]="size"
      [showCloseButton]="true"
      label="Label"
      (closeEvent)="close('sixth')"></it-chip>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-example',
  templateUrl: './chips-example.component.html',
})
export class ChipsExampleComponent {
  el = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: string): void {
    this.el[value] = false;
  }
}`],["html",`<h3>Varianti di colore</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-6 col-sm-auto">
      <it-chip [color]="primary" [size]="size" label="Primary"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip [color]="secondary" [size]="size" label="Secondary"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip [color]="success" [size]="size" label="Success"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip [color]="danger" [size]="size" label="Danger"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip [color]="warning" [size]="size" label="Warning"></it-chip>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { ChipColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-colors',
  templateUrl: './chips-colors.component.html',
})
export class ChipsColorsComponent {
  primary: ChipColor = 'primary';
  secondary: ChipColor = 'secondary';
  warning: ChipColor = 'warning';
  danger: ChipColor = 'danger';
  success: ChipColor = 'success';

  size: '' | 'lg' = 'lg';
}`],["html",`<h3>Chip disabilitata</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-6 col-sm-auto">
      <it-chip [disabled]="true" [size]="size" label="Label disabilitata"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip
        *ngIf="el.first"
        [disabled]="true"
        [showCloseButton]="true"
        [size]="size"
        label="Label disabilitata"
        (closeEvent)="close('first')"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip [disabled]="true" [icon]="iconGithub" [size]="size" label="Label disabilitata"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip
        [avatar]="'https://randomuser.me/api/portraits/men/46.jpg'"
        [altAvatar]="'Mario Rossi'"
        [disabled]="true"
        [size]="size"
        label="Label disabilitata"></it-chip>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-disabled',
  templateUrl: './chips-disabled.component.html',
})
export class ChipsDisabledComponent {
  el = {
    first: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: string): void {
    this.el[value] = false;
  }
}`],["html",`<h3>Gruppi di Chip</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-6 col-sm-auto">
      <it-chip label="Label"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip *ngIf="el.first" [showCloseButton]="true" label="Label" (closeEvent)="close('first')"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip *ngIf="el.second" [showCloseButton]="true" [icon]="iconGithub" label="Label" (closeEvent)="close('second')"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip
        *ngIf="el.third"
        [showCloseButton]="true"
        [avatar]="'https://randomuser.me/api/portraits/men/46.jpg'"
        [altAvatar]="'Mario Rossi'"
        label="Label"
        (closeEvent)="close('third')"></it-chip>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-6 col-sm-auto">
      <it-chip [size]="size" label="Label"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip *ngIf="el.fourth" [showCloseButton]="true" [size]="size" label="Label" (closeEvent)="close('fourth')"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip
        *ngIf="el.fifth"
        [showCloseButton]="true"
        [icon]="iconGithub"
        [size]="size"
        label="Label"
        (closeEvent)="close('fifth')"></it-chip>
    </div>
    <div class="col-6 col-sm-auto">
      <it-chip
        *ngIf="el.sixth"
        [showCloseButton]="true"
        [avatar]="'https://randomuser.me/api/portraits/men/46.jpg'"
        [size]="size"
        [altAvatar]="'Mario Rossi'"
        label="Label"
        (closeEvent)="close('sixth')"></it-chip>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-group',
  templateUrl: './chips-group.component.html',
})
export class ChipsGroupComponent {
  el = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: string): void {
    this.el[value] = false;
  }
}`]],template:function(i,r){i&1&&m(0,"it-chips-example")(1,"it-source-display",0)(2,"it-chips-colors")(3,"it-source-display",1)(4,"it-chips-disabled")(5,"it-source-display",2)(6,"it-chips-group")(7,"it-source-display",3)},dependencies:[M,D,N,R,F]});let e=t;return e})();var P=(()=>{let t=class t{constructor(){this.component=T.components.find(a=>a.name==="ItChipComponent")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=b({type:t,selectors:[["it-chip-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(i,r){i&1&&(o(0,"h1",0),h(1,"Chips"),n(),o(2,"p",1),h(3,"Elementi compatti che rappresentano un input, attributo o azione."),n(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-chips-examples"),n(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),n()()),i&2&&(c(4),l("innerHTML",r.component.description,I),c(5),l("component",r.component))},dependencies:[G,V,B,k],encapsulation:2});let e=t;return e})();var re=[{path:"",component:P}],U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=w({type:t}),t.\u0275inj=x({imports:[z.forChild(re),z]});let e=t;return e})();var Me=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=w({type:t}),t.\u0275inj=x({imports:[S,A,L,U]});let e=t;return e})();export{Me as ChipModule};
