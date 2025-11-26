import{a as pe,b as se,c as ue,d as ce}from"./chunk-CQV3UQHT.js";import{$ as ee,Da as de,P as W,Q as _,R as B,S as Q,T as S,U as A,V as X,W as Z,Z as q,_ as $,aa as ne,ba as te,ca as ie,da as oe,ea as V,fa as M,h as K,la as ae,ma as le,sa as re,ta as me,ua as U,y as F}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as G}from"./chunk-DVW5EFKD.js";import{m as J}from"./chunk-I647ZKKI.js";import{Bb as h,Cb as y,Hb as b,Ib as o,Jb as t,Kb as u,Lb as Y,Mb as H,Ob as w,Sa as j,Sb as N,Tb as C,Wa as r,Y as L,_b as D,aa as O,cc as m,ec as z,fb as f,ga as x,gb as P,gc as c,ha as E,hc as g,ic as v}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function Ie(a,n){if(a&1){let p=w();o(0,"it-input",22),v("ngModelChange",function(l){x(p);let e=C();return g(e.value,l)||(e.value=l),E(l)}),t()}if(a&2){let p=C();b("label",p.label)("placeholder",p.placeholder)("disabled",p.disabled)("readonly",p.readOnly)("type",p.type!=="password"?p.type:"text"),c("ngModel",p.value),b("description",p.note)}}function Se(a,n){if(a&1){let p=w();o(0,"it-password-input",23),v("ngModelChange",function(l){x(p);let e=C();return g(e.value,l)||(e.value=l),E(l)}),t()}if(a&2){let p=C();b("label",p.label)("placeholder",p.placeholder)("disabled",p.disabled),c("ngModel",p.value),b("validationMode",!1)}}var ge=(()=>{let n=class n{constructor(){this.i=0,this.readOnly=!1,this.disabled=!1,this.type="text",this.icon="pencil",this.value="myNgModel",this.hasPlaceholder=!0,this.hasLabel=!0,this.hasNote=!1}get placeholder(){return this.hasPlaceholder?"Testo di esempio":""}get label(){return this.hasLabel?"Label dell'input":""}get note(){return this.hasNote?"non condivideremo mai i tuoi dati":""}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-example"]],standalone:!1,decls:36,vars:16,consts:[[1,"bd-example"],[1,"row"],[1,"col-8"],[3,"label","placeholder","disabled","readonly","type","ngModel","description"],["showStrengthMeter","true",3,"label","placeholder","disabled","ngModel","validationMode"],[1,"form-check","col-6"],[1,"col-4"],["label","Disabled",3,"ngModelChange","ngModel"],["label","Readonly",3,"ngModelChange","ngModel"],["label","Label",3,"ngModelChange","ngModel"],[1,"col-auto"],["label","Placeholder",3,"ngModelChange","ngModel"],["label","Note",3,"ngModelChange","ngModel"],["name","text","value","text","label","text",3,"ngModelChange","ngModel"],["name","number","value","number","label","number",3,"ngModelChange","ngModel"],["name","email","value","email","label","email",3,"ngModelChange","ngModel"],["name","password","value","password","label","password",3,"ngModelChange","ngModel"],["name","time","value","time","label","time",3,"ngModelChange","ngModel"],["name","date","value","date","label","date",3,"ngModelChange","ngModel"],["name","tel","value","tel","label","tel",3,"ngModelChange","ngModel"],["name","color","value","color","label","color",3,"ngModelChange","ngModel"],["name","url","value","url","label","url",3,"ngModelChange","ngModel"],[3,"ngModelChange","label","placeholder","disabled","readonly","type","ngModel","description"],["showStrengthMeter","true",3,"ngModelChange","label","placeholder","disabled","ngModel","validationMode"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Interazione con Form Input"),t(),o(2,"p"),m(3,"Elementi e stili per la creazione di input accessibili e responsivi."),t(),o(4,"div",0)(5,"div",1)(6,"div",2),h(7,Ie,1,7,"it-input",3),h(8,Se,1,5,"it-password-input",4),t()(),o(9,"div",1)(10,"div",5)(11,"h5"),m(12,"Opzioni"),t(),o(13,"div",1)(14,"div",6)(15,"it-checkbox",7),v("ngModelChange",function(i){return g(e.disabled,i)||(e.disabled=i),i}),t(),o(16,"it-checkbox",8),v("ngModelChange",function(i){return g(e.readOnly,i)||(e.readOnly=i),i}),t(),o(17,"it-checkbox",9),v("ngModelChange",function(i){return g(e.hasLabel,i)||(e.hasLabel=i),i}),t()(),o(18,"div",10)(19,"it-checkbox",11),v("ngModelChange",function(i){return g(e.hasPlaceholder,i)||(e.hasPlaceholder=i),i}),t(),o(20,"it-checkbox",12),v("ngModelChange",function(i){return g(e.hasNote,i)||(e.hasNote=i),i}),t()()()(),o(21,"div",5)(22,"h5"),m(23,"Tipo Input"),t(),o(24,"div",1)(25,"div",6)(26,"it-radio-button",13),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(27,"it-radio-button",14),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(28,"it-radio-button",15),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(29,"it-radio-button",16),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t()(),o(30,"div",10)(31,"it-radio-button",17),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(32,"it-radio-button",18),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(33,"it-radio-button",19),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(34,"it-radio-button",20),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t(),o(35,"it-radio-button",21),v("ngModelChange",function(i){return g(e.type,i)||(e.type=i),i}),t()()()()()()),l&2&&(r(7),y(e.type!=="password"?7:-1),r(),y(e.type==="password"?8:-1),r(7),c("ngModel",e.disabled),r(),c("ngModel",e.readOnly),r(),c("ngModel",e.hasLabel),r(2),c("ngModel",e.hasPlaceholder),r(),c("ngModel",e.hasNote),r(6),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(2),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type),r(),c("ngModel",e.type))},dependencies:[_,S,re,M,me,U],encapsulation:2,changeDetection:0});let a=n;return a})();function Fe(a,n){if(a&1&&u(0,"it-icon",4),a&2){let p=C();b("name",p.icon)}}function Ve(a,n){if(a&1&&u(0,"it-icon",5),a&2){let p=C();b("name",p.icon)}}function Te(a,n){if(a&1&&u(0,"it-icon",4),a&2){let p=C();b("name",p.icon)}}var be=(()=>{let n=class n{constructor(){this.i=0,this.type="text",this.icon="pencil",this.value="",this.label="Etichetta di esempio"}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-icon-example"]],standalone:!1,decls:20,vars:11,consts:[[1,"bd-example"],[1,"row"],[1,"col-5"],[3,"label"],["size","sm","color","primary","prependText","",3,"name"],["size","sm","color","primary","appendText","",3,"name"],["itButton","primary","append",""],[1,"form-check","col-auto","offset-1"],["name","none","label","Nessuna",3,"ngModelChange","ngModel","value"],["name","it-pencil","value","pencil","label","it-pencil",3,"ngModelChange","ngModel"],["name","it-link","value","link","label","it-link",3,"ngModelChange","ngModel"],["name","it-star-outline","value","star-outline","label","it-star-outline",3,"ngModelChange","ngModel"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input con icona o pulsanti"),t(),o(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-input",3),h(6,Fe,1,1,"it-icon",4),t(),o(7,"it-input",3),h(8,Ve,1,1,"it-icon",5),t(),o(9,"it-input",3),h(10,Te,1,1,"it-icon",4),o(11,"button",6),m(12,"Invia"),t()()(),o(13,"div",7)(14,"h5"),m(15,"Icona"),t(),o(16,"it-radio-button",8),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),t(),o(17,"it-radio-button",9),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),t(),o(18,"it-radio-button",10),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),t(),o(19,"it-radio-button",11),v("ngModelChange",function(i){return g(e.icon,i)||(e.icon=i),i}),t()()()()),l&2&&(r(5),b("label",e.label),r(),y(e.icon?6:-1),r(),b("label",e.label),r(),y(e.icon?8:-1),r(),b("label",e.label),r(),y(e.icon?10:-1),r(6),c("ngModel",e.icon),b("value",void 0),r(),c("ngModel",e.icon),r(),c("ngModel",e.icon),r(),c("ngModel",e.icon))},dependencies:[_,S,F,M,U,K],encapsulation:2});let a=n;return a})();function De(a,n){if(a&1&&(o(0,"div"),m(1),t()),a&2){let p=C();r(),z("Salvato `",p.savedValue,"`")}}var fe=(()=>{let n=class n{constructor(){this.value="",this.savedValue=void 0}save(s){this.savedValue=s.value.myInput}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-template-driven-validation-example"]],standalone:!1,decls:9,vars:3,consts:[["myForm","ngForm"],[1,"bd-example"],["name","myInput","minlength","3","maxlength","10","pattern","[ab]+","required","",3,"ngModelChange","ngModel"],["itButton","primary",3,"click","disabled"]],template:function(l,e){if(l&1){let d=w();o(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Template Driven"),t(),o(2,"div",1)(3,"form",null,0)(5,"it-input",2),v("ngModelChange",function(T){return x(d),g(e.value,T)||(e.value=T),E(T)}),t(),o(6,"button",3),N("click",function(){x(d);let T=D(4);return E(e.save(T))}),m(7,"Salva"),t(),h(8,De,2,1,"div"),t()()}if(l&2){let d=D(4);r(5),c("ngModel",e.value),r(),b("disabled",!d.valid),r(2),y(e.savedValue?8:-1)}},dependencies:[A,_,B,q,$,ee,ne,S,Q,F,M],encapsulation:2});let a=n;return a})();function ke(a,n){a&1&&(o(0,"div"),m(1,"Il campo \xE8 obbligatorio"),t())}function Le(a,n){a&1&&(o(0,"div"),m(1,"Deve essere almeno di lunghezza 3"),t())}function Pe(a,n){a&1&&(o(0,"div"),m(1,"Deve essere massimo di lunghezza 10"),t())}function ze(a,n){a&1&&(o(0,"div"),m(1,"Non corrisponde al pattern [ab]+"),t())}function Be(a,n){if(a&1&&(o(0,"div"),m(1),t()),a&2){let p=C();r(),z("Salvato `",p.savedValue,"`")}}var he=(()=>{let n=class n{constructor(){this._fb=O(te),this.regions=[],this.value="",this.savedValue=void 0,this.regions=["Abruzzo","Basilicata","Calabria","Campania","Emilia Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d'Aosta","Veneto"];let s=[W.required,W.minLength(3),W.maxLength(10),W.pattern("[ab]+")];this.myForm=this._fb.group({taxCode:[null,V.taxCode],vat:[null,V.vatNumber],cap:[null,V.cap],email:[null],url:[null],phone:[null],region:[null,V.includes(this.regions)],iban:[null,V.iban],myInput:["",s]})}save(s){this.savedValue=s.value.myInput}markAllAsTouched(){this.myForm.markAllAsTouched()}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-model-driven-validation-example"]],standalone:!1,decls:38,vars:8,consts:[["myInput",""],[1,"bd-example"],[3,"formGroup"],[1,"row"],[1,"col-6"],["label","Custom","formControlName","myInput"],["error",""],["label","Codice fiscale","formControlName","taxCode","required",""],[1,"col-4"],["label","IBAN","formControlName","iban"],["label","Partita IVA","formControlName","vat","required",""],["label","Cap","formControlName","cap","required",""],["type","email","label","Email","formControlName","email","required",""],["type","url","label","Url","formControlName","url","required",""],["type","tel","label","Telefono","formControlName","phone","required",""],["label","Regione","formControlName","region","required","",3,"source"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"]],template:function(l,e){if(l&1){let d=w();o(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Model Driven"),t(),o(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"it-input",5,0),Y(8,6),h(9,ke,2,0,"div"),h(10,Le,2,0,"div"),h(11,Pe,2,0,"div"),h(12,ze,2,0,"div"),H(),t()(),o(13,"div",4),u(14,"it-input",7),t()(),o(15,"div",3)(16,"div",8),u(17,"it-input",9),t(),o(18,"div",8),u(19,"it-input",10),t(),o(20,"div",8),u(21,"it-input",11),t()(),o(22,"div",3)(23,"div",8),u(24,"it-input",12),t(),o(25,"div",8),u(26,"it-input",13),t(),o(27,"div",8),u(28,"it-input",14),t()(),o(29,"div",3)(30,"div",8),u(31,"it-autocomplete",15),t()(),o(32,"div",16)(33,"button",17),N("click",function(){return x(d),E(e.save(e.myForm))}),m(34,"Salva"),t(),o(35,"button",18),N("click",function(){return x(d),E(e.markAllAsTouched())}),m(36,"Valida"),t()(),h(37,Be,2,1,"div"),t()()}if(l&2){let d=D(7);r(3),b("formGroup",e.myForm),r(6),y(d.hasError("required")?9:-1),r(),y(d.hasError("minlength")?10:-1),r(),y(d.hasError("maxlength")?11:-1),r(),y(d.hasError("pattern")?12:-1),r(19),b("source",e.regions),r(2),b("disabled",!e.myForm.valid),r(4),y(e.savedValue?37:-1)}},dependencies:[A,_,B,q,F,de,M,X,Z],encapsulation:2});let a=n;return a})();var ye=(()=>{let n=class n{constructor(){this.adaptiveInputValue=99999}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-number-example"]],standalone:!1,decls:23,vars:4,consts:[[1,"bd-example"],[1,"mb-5"],["type","number","label","Min, Max & Step",3,"min","max","step"],["type","number","label","Currency","currency","true","symbol","$"],["type","number","label","Percentage","percentage","true","symbol","%"],["type","number","label","Adattivo","adaptive","true",3,"ngModelChange","ngModel"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input Numerico"),t(),o(2,"div",0)(3,"h5"),m(4,"Limiti e Step"),t(),o(5,"p",1),m(6,' Aggiungendo le propriet\xE0 "min", "max" e "step" all\u2019input \xE8 possibile limitare il valore minimo e massimo del campo e decidere di quanto varier\xE0 a ogni click sui pulsanti. '),t(),u(7,"it-input",2),o(8,"h5"),m(9,"Valuta"),t(),o(10,"p",1),m(11,'Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\xE0 "currency"'),t(),u(12,"it-input",3),o(13,"h5"),m(14,"Percentuale"),t(),o(15,"p",1),m(16,'Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\xE0 "percentage"'),t(),u(17,"it-input",4),o(18,"h5"),m(19,"Ridimensionamento"),t(),o(20,"p",1),m(21,' \xC8 possibile far s\xEC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la propriet\xE0 "adaptive" '),t(),o(22,"it-input",5),v("ngModelChange",function(i){return g(e.adaptiveInputValue,i)||(e.adaptiveInputValue=i),i}),t()()),l&2&&(r(7),b("min",10)("max",100)("step",5),r(15),c("ngModel",e.adaptiveInputValue))},dependencies:[_,S,M],encapsulation:2});let a=n;return a})();var Ce=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-calendar-example"]],standalone:!1,decls:17,vars:0,consts:[[1,"bd-example"],[1,"mb-5"],["type","date","label","Datepicker"],["type","date","label","Min, Max","minDate","2020-05-07","maxDate","2025-05-07"]],template:function(l,e){l&1&&(o(0,"h3"),m(1,"Input Calendario"),t(),o(2,"p")(3,"strong"),m(4,"Attenzione:"),t(),m(5," i valori delle date devono essere in formato YYYY-MM-DD."),t(),o(6,"div",0)(7,"h5"),m(8,"Datepicker"),t(),o(9,"p",1),m(10,"Clicca sull\u2019icona a destra per visualizzare il datepicker."),t(),u(11,"it-input",2),o(12,"h5"),m(13,"Limiti"),t(),o(14,"p",1),m(15,`Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo`),t(),u(16,"it-input",3),t())},dependencies:[M],encapsulation:2});let a=n;return a})();var Me=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-examples"]],standalone:!1,decls:12,vars:0,consts:[["html",`<h3>Interazione con Form Input</h3>
<p>Elementi e stili per la creazione di input accessibili e responsivi.</p>

<div class="bd-example">
  <div class="row">
    <div class="col-8">
      @if (type !== 'password') {
        <it-input
          [label]="label"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readOnly"
          [type]="type !== 'password' ? type : 'text'"
          [(ngModel)]="value"
          [description]="note"></it-input>
      }
      @if (type === 'password') {
        <it-password-input
          [label]="label"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [(ngModel)]="value"
          showStrengthMeter="true"
          [validationMode]="false"></it-password-input>
      }
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class FormInputCalendarExampleComponent {}`],["html",`<h3>Input con icona o pulsanti</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-5">
      <!-- Input con icona a sinistra tramite attributo -->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" prependText></it-icon>
        }
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix -->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" appendText></it-icon>
        }
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix e bottone a destra tramite direttiva itSuffix-->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" prependText></it-icon>
        }
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
  standalone: false,
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

    @if (savedValue) {
      <div>Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,"typescript",`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'it-template-driven-validation-example',
  templateUrl: './template-driven-validation-example.component.html',
  styleUrls: ['./template-driven-validation-example.component.scss'],
  standalone: false,
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
            @if (myInput.hasError('required')) {
              <div>Il campo \xE8 obbligatorio</div>
            }
            @if (myInput.hasError('minlength')) {
              <div>Deve essere almeno di lunghezza 3</div>
            }
            @if (myInput.hasError('maxlength')) {
              <div>Deve essere massimo di lunghezza 10</div>
            }
            @if (myInput.hasError('pattern')) {
              <div>Non corrisponde al pattern [ab]+</div>
            }
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
    <div class="row">
      <div class="col-4">
        <it-autocomplete label="Regione" formControlName="region" [source]="regions" required></it-autocomplete>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>
      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>
    </div>

    @if (savedValue) {
      <div>Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-model-driven-validation-example',
  templateUrl: './model-driven-validation-example.component.html',
  styleUrls: ['./model-driven-validation-example.component.scss'],
  standalone: false,
})
export class ModelDrivenValidationExampleComponent {
  private _fb = inject(FormBuilder);

  myForm: FormGroup;
  regions: string[] = [];

  constructor() {
    this.regions = [
      'Abruzzo',
      'Basilicata',
      'Calabria',
      'Campania',
      'Emilia Romagna',
      'Friuli Venezia Giulia',
      'Lazio',
      'Liguria',
      'Lombardia',
      'Marche',
      'Molise',
      'Piemonte',
      'Puglia',
      'Sardegna',
      'Sicilia',
      'Toscana',
      'Trentino Alto Adige',
      'Umbria',
      "Valle d'Aosta",
      'Veneto',
    ];
    const validators = [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[ab]+')];
    this.myForm = this._fb.group({
      taxCode: [null, ItValidators.taxCode],
      vat: [null, ItValidators.vatNumber],
      cap: [null, ItValidators.cap],
      email: [null],
      url: [null],
      phone: [null],
      region: [null, ItValidators.includes(this.regions)],
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
}`]],template:function(l,e){l&1&&u(0,"it-form-input-example")(1,"it-source-display",0)(2,"it-form-input-number-example")(3,"it-source-display",1)(4,"it-form-input-calendar-example")(5,"it-source-display",2)(6,"it-form-input-icon-example")(7,"it-source-display",3)(8,"it-template-driven-validation-example")(9,"it-source-display",4)(10,"it-model-driven-validation-example")(11,"it-source-display",5)},dependencies:[pe,ge,be,fe,he,ye,Ce],encapsulation:2});let a=n;return a})();var _e=(()=>{let n=class n{constructor(){this.component=se.components.find(s=>s.name==="ItInputComponent")}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=f({type:n,selectors:[["it-form-input-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(l,e){l&1&&(o(0,"h1",0),m(1,"Form Input"),t(),o(2,"p",1),m(3,"Il componente Form Input utilizzabile in un form"),t(),u(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),u(7,"it-form-input-examples"),t(),o(8,"it-tab-item",4),u(9,"it-api-parameters",5),t()()),l&2&&(r(4),b("innerHTML",e.component.description,j),r(5),b("component",e.component))},dependencies:[ue,le,ae,Me],encapsulation:2});let a=n;return a})();var Ge=[{path:"",component:_e}],xe=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=P({type:n}),n.\u0275inj=L({imports:[G.forChild(Ge),G]});let a=n;return a})();var Fn=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=P({type:n}),n.\u0275inj=L({imports:[J,ie,ce,xe,oe]});let a=n;return a})();export{Fn as FormInputModule};
