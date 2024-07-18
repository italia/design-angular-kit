import{a as X,b as Z,c as te,d as ce}from"./chunk-XTG6MU3L.js";import{S as D,T as _,U as z,V as ne,W as w,X as A,Y as ie,Z as oe,aa as q,ba as ae,ca as le,da as re,e as Q,ea as me,fa as pe,ga as de,h as F,ha as W,ia as h,k as $,l as ee,sa as se,ta as ue,ua as U}from"./chunk-R4LXWPNQ.js";import{l as G}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as S,Cb as V,Db as b,Hc as E,Mb as N,Mc as K,Na as j,Nb as m,Pb as B,Ra as r,Rb as c,Sa as Y,Sb as g,Tb as v,U as P,ba as y,ca as L,gb as C,ib as p,la as M,ma as x,ub as o,vb as n,wb as f,xb as H,yb as J}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function Ee(a,t){if(a&1){let s=S();o(0,"it-input",22),v("ngModelChange",function(l){M(s);let e=b();return g(e.value,l)||(e.value=l),x(l)}),n()}if(a&2){let s=b();p("label",s.label)("placeholder",s.placeholder)("disabled",s.disabled)("readonly",s.readOnly)("type",s.type!=="password"?s.type:"text"),c("ngModel",s.value),p("description",s.note)}}function we(a,t){if(a&1){let s=S();o(0,"it-password-input",23),v("ngModelChange",function(l){M(s);let e=b();return g(e.value,l)||(e.value=l),x(l)}),n()}if(a&2){let s=b();p("label",s.label)("placeholder",s.placeholder)("disabled",s.disabled),c("ngModel",s.value),p("validationMode",!1)}}var ge=(()=>{let t=class t{constructor(){this.i=0,this.readOnly=!1,this.disabled=!1,this.type="text",this.icon="pencil",this.value="myNgModel",this.hasPlaceholder=!0,this.hasLabel=!0,this.hasNote=!1}get placeholder(){return this.hasPlaceholder?"Testo di esempio":""}get label(){return this.hasLabel?"Label dell'input":""}get note(){return this.hasNote?"non condivideremo mai i tuoi dati":""}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-example"]],decls:36,vars:16,consts:[[1,"bd-example"],[1,"row"],[1,"col-8"],[3,"label","placeholder","disabled","readonly","type","ngModel","description","ngModelChange",4,"ngIf"],["showStrengthMeter","true",3,"label","placeholder","disabled","ngModel","validationMode","ngModelChange",4,"ngIf"],[1,"form-check","col-6"],[1,"col-4"],["label","Disabled",3,"ngModelChange","ngModel"],["label","Readonly",3,"ngModelChange","ngModel"],["label","Label",3,"ngModelChange","ngModel"],[1,"col-auto"],["label","Placeholder",3,"ngModelChange","ngModel"],["label","Note",3,"ngModelChange","ngModel"],["name","text","value","text","label","text",3,"ngModelChange","ngModel"],["name","number","value","number","label","number",3,"ngModelChange","ngModel"],["name","email","value","email","label","email",3,"ngModelChange","ngModel"],["name","password","value","password","label","password",3,"ngModelChange","ngModel"],["name","time","value","time","label","time",3,"ngModelChange","ngModel"],["name","date","value","date","label","date",3,"ngModelChange","ngModel"],["name","tel","value","tel","label","tel",3,"ngModelChange","ngModel"],["name","color","value","color","label","color",3,"ngModelChange","ngModel"],["name","url","value","url","label","url",3,"ngModelChange","ngModel"],[3,"ngModelChange","label","placeholder","disabled","readonly","type","ngModel","description"],["showStrengthMeter","true",3,"ngModelChange","label","placeholder","disabled","ngModel","validationMode"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Interazione con Form Input"),n(),o(2,"p"),m(3,"Elementi e stili per la creazione di input accessibili e responsivi."),n(),o(4,"div",0)(5,"div",1)(6,"div",2),C(7,Ee,1,7,"it-input",3)(8,we,1,5,"it-password-input",4),n()(),o(9,"div",1)(10,"div",5)(11,"h5"),m(12,"Opzioni"),n(),o(13,"div",1)(14,"div",6)(15,"it-checkbox",7),v("ngModelChange",function(i){return g(e.disabled,i)||(e.disabled=i),i}),n(),o(16,"it-checkbox",8),v("ngModelChange",function(i){return g(e.readOnly,i)||(e.readOnly=i),i}),n(),o(17,"it-checkbox",9),v("ngModelChange",function(i){return g(e.hasLabel,i)||(e.hasLabel=i),i}),n()(),o(18,"div",10)(19,"it-checkbox",11),v("ngModelChange",function(i){return g(e.hasPlaceholder,i)||(e.hasPlaceholder=i),i}),n(),o(20,"it-checkbox",12),v("ngModelChange",function(i){return g(e.hasNote,i)||(e.hasNote=i),i}),n()()()(),o(21,"div",5)(22,"h5"),m(23,"Tipo Input"),n(),o(24,"div",1)(25,"div",6)(26,"it-radio-button",13),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(27,"it-radio-button",14),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(28,"it-radio-button",15),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(29,"it-radio-button",16),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n()(),o(30,"div",10)(31,"it-radio-button",17),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(32,"it-radio-button",18),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(33,"it-radio-button",19),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(34,"it-radio-button",20),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n(),o(35,"it-radio-button",21),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),n()()()()()()),l&2&&(r(7),p("ngIf",e.type!=="password"),r(),p("ngIf",e.type==="password"),r(7),c("ngModel",e.disabled),r(),c("ngModel",e.readOnly),r(),c("ngModel",e.hasLabel),r(2),c("ngModel",e.hasPlaceholder),r(),c("ngModel",e.hasNote),r(6),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(2),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type))},dependencies:[E,_,w,se,h,ue,U],changeDetection:0});let a=t;return a})();function Fe(a,t){if(a&1&&f(0,"it-icon",12),a&2){let s=b();p("name",s.icon)}}function Te(a,t){if(a&1&&f(0,"it-icon",13),a&2){let s=b();p("name",s.icon)}}function Ve(a,t){if(a&1&&f(0,"it-icon",12),a&2){let s=b();p("name",s.icon)}}var fe=(()=>{let t=class t{constructor(){this.i=0,this.type="text",this.icon="pencil",this.value="",this.label="Etichetta di esempio"}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-icon-example"]],decls:20,vars:11,consts:[[1,"bd-example"],[1,"row"],[1,"col-5"],[3,"label"],["size","sm","color","primary","prependText","",3,"name",4,"ngIf"],["size","sm","color","primary","appendText","",3,"name",4,"ngIf"],["itButton","primary","append",""],[1,"form-check","col-auto","offset-1"],["name","none","label","Nessuna",3,"ngModelChange","ngModel","value"],["name","it-pencil","value","pencil","label","it-pencil",3,"ngModelChange","ngModel"],["name","it-link","value","link","label","it-link",3,"ngModelChange","ngModel"],["name","it-star-outline","value","star-outline","label","it-star-outline",3,"ngModelChange","ngModel"],["size","sm","color","primary","prependText","",3,"name"],["size","sm","color","primary","appendText","",3,"name"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input con icona o pulsanti"),n(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-input",3),C(6,Fe,1,1,"it-icon",4),n(),o(7,"it-input",3),C(8,Te,1,1,"it-icon",5),n(),o(9,"it-input",3),C(10,Ve,1,1,"it-icon",4),o(11,"button",6),m(12,"Invia"),n()()(),o(13,"div",7)(14,"h5"),m(15,"Icona"),n(),o(16,"it-radio-button",8),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),n(),o(17,"it-radio-button",9),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),n(),o(18,"it-radio-button",10),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),n(),o(19,"it-radio-button",11),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),n()()()()),l&2&&(r(5),p("label",e.label),r(),p("ngIf",e.icon),r(),p("label",e.label),r(),p("ngIf",e.icon),r(),p("label",e.label),r(),p("ngIf",e.icon),r(6),c("ngModel",e.icon),p("value",void 0),r(),c("ngModel",e.icon),r(),c("ngModel",e.icon),r(),c("ngModel",e.icon))},dependencies:[E,_,w,F,h,U,Q]});let a=t;return a})();function De(a,t){if(a&1&&(o(0,"div"),m(1),n()),a&2){let s=b();r(),B("Salvato `",s.savedValue,"`")}}var ye=(()=>{let t=class t{constructor(){this.value="",this.savedValue=void 0}save(u){this.savedValue=u.value.myInput}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-template-driven-validation-example"]],decls:9,vars:3,consts:[["myForm","ngForm"],[1,"bd-example"],["name","myInput","minlength","3","maxlength","10","pattern","[ab]+","required","",3,"ngModelChange","ngModel"],["itButton","primary",3,"click","disabled"],[4,"ngIf"]],template:function(l,e){if(l&1){let d=S();o(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Template Driven"),n(),o(2,"div",1)(3,"form",null,0)(5,"it-input",2),v("ngModelChange",function(T){return M(d),g(e.value,T)||(e.value=T),x(T)}),n(),o(6,"button",3),V("click",function(){M(d);let T=N(4);return x(e.save(T))}),m(7,"Salva"),n(),C(8,De,2,1,"div",4),n()()}if(l&2){let d=N(4);r(5),c("ngModel",e.value),r(),p("disabled",!d.valid),r(2),p("ngIf",e.savedValue)}},dependencies:[E,A,_,z,q,ae,le,re,w,ne,F,h]});let a=t;return a})();function ke(a,t){a&1&&(o(0,"div"),m(1,"Il campo \xE8 obbligatorio"),n())}function Pe(a,t){a&1&&(o(0,"div"),m(1,"Deve essere almeno di lunghezza 3"),n())}function Le(a,t){a&1&&(o(0,"div"),m(1,"Deve essere massimo di lunghezza 10"),n())}function Be(a,t){a&1&&(o(0,"div"),m(1,"Non corrisponde al pattern [ab]+"),n())}function ze(a,t){if(a&1&&(o(0,"div"),m(1),n()),a&2){let s=b();r(),B("Salvato `",s.savedValue,"`")}}var be=(()=>{let t=class t{constructor(u){this._fb=u,this.value="",this.savedValue=void 0;let l=[D.required,D.minLength(3),D.maxLength(10),D.pattern("[ab]+")];this.myForm=this._fb.group({taxCode:[null,W.taxCode],vat:[null,W.vatNumber],cap:[null,W.cap],email:[null],url:[null],phone:[null],iban:[null,W.iban],myInput:["",l]})}save(u){this.savedValue=u.value.myInput}markAllAsTouched(){this.myForm.markAllAsTouched()}};t.\u0275fac=function(l){return new(l||t)(Y(me))},t.\u0275cmp=y({type:t,selectors:[["it-model-driven-validation-example"]],decls:35,vars:7,consts:[["myInput",""],[1,"bd-example"],[3,"formGroup"],[1,"row"],[1,"col-6"],["label","Custom","formControlName","myInput"],["error",""],[4,"ngIf"],["label","Codice fiscale","formControlName","taxCode","required",""],[1,"col-4"],["label","IBAN","formControlName","iban"],["label","Partita IVA","formControlName","vat","required",""],["label","Cap","formControlName","cap","required",""],["type","email","label","Email","formControlName","email","required",""],["type","url","label","Url","formControlName","url","required",""],["type","tel","label","Telefono","formControlName","phone","required",""],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"]],template:function(l,e){if(l&1){let d=S();o(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Model Driven"),n(),o(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"it-input",5,0),H(8,6),C(9,ke,2,0,"div",7)(10,Pe,2,0,"div",7)(11,Le,2,0,"div",7)(12,Be,2,0,"div",7),J(),n()(),o(13,"div",4),f(14,"it-input",8),n()(),o(15,"div",3)(16,"div",9),f(17,"it-input",10),n(),o(18,"div",9),f(19,"it-input",11),n(),o(20,"div",9),f(21,"it-input",12),n()(),o(22,"div",3)(23,"div",9),f(24,"it-input",13),n(),o(25,"div",9),f(26,"it-input",14),n(),o(27,"div",9),f(28,"it-input",15),n()(),o(29,"div",16)(30,"button",17),V("click",function(){return M(d),x(e.save(e.myForm))}),m(31,"Salva"),n(),o(32,"button",18),V("click",function(){return M(d),x(e.markAllAsTouched())}),m(33,"Valida"),n()(),C(34,ze,2,1,"div",7),n()()}if(l&2){let d=N(7);r(3),p("formGroup",e.myForm),r(6),p("ngIf",d.hasError("required")),r(),p("ngIf",d.hasError("minlength")),r(),p("ngIf",d.hasError("maxlength")),r(),p("ngIf",d.hasError("pattern")),r(18),p("disabled",!e.myForm.valid),r(4),p("ngIf",e.savedValue)}},dependencies:[E,A,_,z,q,F,h,ie,oe]});let a=t;return a})();var he=(()=>{let t=class t{constructor(){this.adaptiveInputValue=99999}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-number-example"]],decls:23,vars:4,consts:[[1,"bd-example"],[1,"mb-5"],["type","number","label","Min, Max & Step",3,"min","max","step"],["type","number","label","Currency","currency","true","symbol","$"],["type","number","label","Percentage","percentage","true","symbol","%"],["type","number","label","Adattivo","adaptive","true",3,"ngModelChange","ngModel"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input Numerico"),n(),o(2,"div",0)(3,"h5"),m(4,"Limiti e Step"),n(),o(5,"p",1),m(6,' Aggiungendo le propriet\xE0 "min", "max" e "step" all\u2019input \xE8 possibile limitare il valore minimo e massimo del campo e decidere di quanto varier\xE0 a ogni click sui pulsanti. '),n(),f(7,"it-input",2),o(8,"h5"),m(9,"Valuta"),n(),o(10,"p",1),m(11,'Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\xE0 "currency"'),n(),f(12,"it-input",3),o(13,"h5"),m(14,"Percentuale"),n(),o(15,"p",1),m(16,'Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\xE0 "percentage"'),n(),f(17,"it-input",4),o(18,"h5"),m(19,"Ridimensionamento"),n(),o(20,"p",1),m(21,' \xC8 possibile far s\xEC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la propriet\xE0 "adaptive" '),n(),o(22,"it-input",5),v("ngModelChange",function(i){return g(e.adaptiveInputValue,i)||(e.adaptiveInputValue=i),i}),n()()),l&2&&(r(7),p("min",10)("max",100)("step",5),r(15),c("ngModel",e.adaptiveInputValue))},dependencies:[_,w,h]});let a=t;return a})();var Ce=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-calendar-example"]],decls:17,vars:0,consts:[[1,"bd-example"],[1,"mb-5"],["type","date","label","Datepicker"],["type","date","label","Min, Max","minDate","2020-05-07","maxDate","2025-05-07"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input Calendario"),n(),o(2,"p")(3,"strong"),m(4,"Attenzione:"),n(),m(5," i valori delle date devono essere in formato YYYY-MM-DD."),n(),o(6,"div",0)(7,"h5"),m(8,"Datepicker"),n(),o(9,"p",1),m(10,"Clicca sull\u2019icona a destra per visualizzare il datepicker."),n(),f(11,"it-input",2),o(12,"h5"),m(13,"Limiti"),n(),o(14,"p",1),m(15,`Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo`),n(),f(16,"it-input",3),n())},dependencies:[h]});let a=t;return a})();var _e=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-examples"]],decls:12,vars:0,consts:[["html",`<h3>Interazione con Form Input</h3>
<p>Elementi e stili per la creazione di input accessibili e responsivi.</p>

<div class="bd-example">
  <div class="row">
    <div class="col-8">
      <it-input
        *ngIf="type !== 'password'"
        [label]="label"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readOnly"
        [type]="type !== 'password' ? type : 'text'"
        [(ngModel)]="value"
        [description]="note">
      </it-input>
      <it-password-input
        *ngIf="type === 'password'"
        [label]="label"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [(ngModel)]="value"
        showStrengthMeter="true"
        [validationMode]="false"></it-password-input>
    </div>
  </div>

  <div class="row">
    <div class="form-check col-6">
      <h5>Opzioni</h5>
      <div class="row">
        <div class="col-4">
          <it-checkbox [(ngModel)]="disabled" label="Disabled"></it-checkbox>
          <it-checkbox [(ngModel)]="readOnly" label="Readonly"></it-checkbox>
          <it-checkbox [(ngModel)]="hasLabel" label="Label"></it-checkbox>
        </div>
        <div class="col-auto">
          <it-checkbox [(ngModel)]="hasPlaceholder" label="Placeholder"></it-checkbox>
          <it-checkbox [(ngModel)]="hasNote" label="Note"></it-checkbox>
        </div>
      </div>
    </div>

    <div class="form-check col-6">
      <h5>Tipo Input</h5>
      <div class="row">
        <div class="col-4">
          <it-radio-button name="text" [(ngModel)]="type" value="text" label="text"></it-radio-button>
          <it-radio-button name="number" [(ngModel)]="type" value="number" label="number"></it-radio-button>
          <it-radio-button name="email" [(ngModel)]="type" value="email" label="email"></it-radio-button>
          <it-radio-button name="password" [(ngModel)]="type" value="password" label="password"></it-radio-button>
        </div>
        <div class="col-auto">
          <it-radio-button name="time" [(ngModel)]="type" value="time" label="time"></it-radio-button>
          <it-radio-button name="date" [(ngModel)]="type" value="date" label="date"></it-radio-button>
          <it-radio-button name="tel" [(ngModel)]="type" value="tel" label="tel"></it-radio-button>
          <it-radio-button name="color" [(ngModel)]="type" value="color" label="color"></it-radio-button>
          <it-radio-button name="url" [(ngModel)]="type" value="url" label="url"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,"typescript",`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputControlType } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-form-input-example',
  templateUrl: './form-input-example.component.html',
  styleUrls: ['./form-input-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputExampleComponent {
  i = 0;
  readOnly = false;
  disabled = false;
  type: InputControlType | 'password' = 'text';
  icon = 'pencil';
  value = 'myNgModel';

  get placeholder() {
    return this.hasPlaceholder ? 'Testo di esempio' : '';
  }

  get label() {
    return this.hasLabel ? "Label dell'input" : '';
  }

  get note() {
    return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';
  }

  hasPlaceholder = true;

  hasLabel = true;

  hasNote = false;
}`],["html",`<h3>Input Numerico</h3>
<div class="bd-example">
  <h5>Limiti e Step</h5>
  <p class="mb-5">
    Aggiungendo le propriet\xE0 "min", "max" e "step" all\u2019input \xE8 possibile limitare il valore minimo e massimo del campo e decidere di quanto
    varier\xE0 a ogni click sui pulsanti.
  </p>

  <!-- Input numerico con min, max e step -->
  <it-input type="number" label="Min, Max & Step" [min]="10" [max]="100" [step]="5"></it-input>

  <h5>Valuta</h5>
  <p class="mb-5">Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\xE0 "currency"</p>

  <!-- Input numerico con valuta -->
  <it-input type="number" label="Currency" currency="true" symbol="$"></it-input>

  <h5>Percentuale</h5>
  <p class="mb-5">Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\xE0 "percentage"</p>

  <!-- Input numerico con percentuale -->
  <it-input type="number" label="Percentage" percentage="true" symbol="%"></it-input>

  <h5>Ridimensionamento</h5>
  <p class="mb-5">
    \xC8 possibile far s\xEC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la
    propriet\xE0 "adaptive"
  </p>

  <!-- Input numerico con ridimensionamento automatico -->
  <it-input type="number" label="Adattivo" adaptive="true" [(ngModel)]="adaptiveInputValue"></it-input>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-form-input-number-example',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.scss'],
})
export class FormInputNumberExampleComponent {
  adaptiveInputValue: number = 99999;
}`],["html",`<h3>Input Calendario</h3>
<p><strong>Attenzione:</strong> i valori delle date devono essere in formato YYYY-MM-DD.</p>
<div class="bd-example">
  <h5>Datepicker</h5>
  <p class="mb-5">Clicca sull\u2019icona a destra per visualizzare il datepicker.</p>

  <it-input type="date" label="Datepicker"></it-input>

  <h5>Limiti</h5>
  <p class="mb-5">Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo</p>

  <!-- Input date con min, max e step -->
  <it-input type="date" label="Min, Max" minDate="2020-05-07" maxDate="2025-05-07"></it-input>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-form-input-calendar-example',
  templateUrl: './form-input-calendar.component.html',
  styleUrls: ['./form-input-calendar.component.scss'],
})
export class FormInputCalendarExampleComponent {}`],["html",`<h3>Input con icona o pulsanti</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-5">
      <!-- Input con icona a sinistra tramite attributo -->
      <it-input [label]="label">
        <it-icon *ngIf="icon" [name]="icon" size="sm" color="primary" prependText></it-icon>
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix -->
      <it-input [label]="label">
        <it-icon *ngIf="icon" [name]="icon" size="sm" color="primary" appendText></it-icon>
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix e bottone a destra tramite direttiva itSuffix-->
      <it-input [label]="label">
        <it-icon *ngIf="icon" [name]="icon" size="sm" color="primary" prependText></it-icon>
        <button itButton="primary" append>Invia</button>
      </it-input>
    </div>

    <div class="form-check col-auto offset-1">
      <h5>Icona</h5>
      <it-radio-button name="none" [(ngModel)]="icon" [value]="undefined" label="Nessuna"></it-radio-button>
      <it-radio-button name="it-pencil" [(ngModel)]="icon" value="pencil" label="it-pencil"></it-radio-button>
      <it-radio-button name="it-link" [(ngModel)]="icon" value="link" label="it-link"></it-radio-button>
      <it-radio-button name="it-star-outline" [(ngModel)]="icon" value="star-outline" label="it-star-outline"></it-radio-button>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-form-input-icon-example',
  templateUrl: './form-input-icon.component.html',
  styleUrls: ['./form-input-icon.component.scss'],
})
export class FormInputIconExampleComponent {
  i = 0;
  type = 'text';
  icon: IconName = 'pencil';
  value = '';
  label = 'Etichetta di esempio';
}`],["html",`<h3>Interazione con Form Input dotato di validazione Template Driven</h3>

<div class="bd-example">
  <form #myForm="ngForm">
    <it-input [(ngModel)]="value" name="myInput" minlength="3" maxlength="10" pattern="[ab]+" required>
      <!-- Default errors-->
    </it-input>

    <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>

    <div *ngIf="savedValue">Salvato \`/{/{ savedValue /}/}\`</div>
  </form>
</div>`,"typescript",`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'it-template-driven-validation-example',
  templateUrl: './template-driven-validation-example.component.html',
  styleUrls: ['./template-driven-validation-example.component.scss'],
})
export class TemplateDrivenValidationExampleComponent {
  value = '';
  savedValue = undefined;

  save(ngForm: NgForm) {
    this.savedValue = ngForm.value.myInput;
  }
}`],["html",`<h3>Interazione con Form Input dotato di validazione Model Driven</h3>

<div class="bd-example">
  <form [formGroup]="myForm">
    <div class="row">
      <div class="col-6">
        <it-input label="Custom" formControlName="myInput" #myInput>
          <ng-container error>
            <!-- Custom errors-->
            <div *ngIf="myInput.hasError('required')">Il campo \xE8 obbligatorio</div>
            <div *ngIf="myInput.hasError('minlength')">Deve essere almeno di lunghezza 3</div>
            <div *ngIf="myInput.hasError('maxlength')">Deve essere massimo di lunghezza 10</div>
            <div *ngIf="myInput.hasError('pattern')">Non corrisponde al pattern [ab]+</div>
          </ng-container>
        </it-input>
      </div>
      <div class="col-6">
        <it-input label="Codice fiscale" formControlName="taxCode" required>
          <!-- Default errors-->
        </it-input>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <it-input label="IBAN" formControlName="iban"></it-input>
      </div>
      <div class="col-4">
        <it-input label="Partita IVA" formControlName="vat" required></it-input>
      </div>
      <div class="col-4">
        <it-input label="Cap" formControlName="cap" required></it-input>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <it-input type="email" label="Email" formControlName="email" required></it-input>
      </div>
      <div class="col-4">
        <it-input type="url" label="Url" formControlName="url" required></it-input>
      </div>
      <div class="col-4">
        <it-input type="tel" label="Telefono" formControlName="phone" required></it-input>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>
      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>
    </div>

    <div *ngIf="savedValue">Salvato \`/{/{ savedValue /}/}\`</div>
  </form>
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-model-driven-validation-example',
  templateUrl: './model-driven-validation-example.component.html',
  styleUrls: ['./model-driven-validation-example.component.scss'],
})
export class ModelDrivenValidationExampleComponent {
  myForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    const validators = [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[ab]+')];
    this.myForm = this._fb.group({
      taxCode: [null, ItValidators.taxCode],
      vat: [null, ItValidators.vatNumber],
      cap: [null, ItValidators.cap],
      email: [null],
      url: [null],
      phone: [null],
      iban: [null, ItValidators.iban],
      myInput: ['', validators],
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.myInput;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}`]],template:function(l,e){l&1&&f(0,"it-form-input-example")(1,"it-source-display",0)(2,"it-form-input-number-example")(3,"it-source-display",1)(4,"it-form-input-calendar-example")(5,"it-source-display",2)(6,"it-form-input-icon-example")(7,"it-source-display",3)(8,"it-template-driven-validation-example")(9,"it-source-display",4)(10,"it-model-driven-validation-example")(11,"it-source-display",5)},dependencies:[te,ge,fe,ye,be,he,Ce]});let a=t;return a})();var Me=(()=>{let t=class t{constructor(){this.component=X.components.find(u=>u.name==="ItInputComponent")}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=y({type:t,selectors:[["it-form-input-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(l,e){l&1&&(o(0,"h1",0),m(1,"Form Input"),n(),o(2,"p",1),m(3,"Il componente Form Input utilizzabile in un form"),n(),f(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),f(7,"it-form-input-examples"),n(),o(8,"it-tab-item",4),f(9,"it-api-parameters",5),n()()),l&2&&(r(4),p("innerHTML",e.component.description,j),r(5),p("component",e.component))},dependencies:[Z,ee,$,_e]});let a=t;return a})();var Ge=[{path:"",component:Me}],xe=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=L({type:t}),t.\u0275inj=P({imports:[G.forChild(Ge),G]});let a=t;return a})();var It=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=L({type:t}),t.\u0275inj=P({imports:[K,pe,ce,xe,de]});let a=t;return a})();export{It as FormInputModule};
