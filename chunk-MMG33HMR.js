import{a as pe,b as de,c as se,d as ue}from"./chunk-CJGNGVIB.js";import{$,Da as me,P as N,Q as _,R as z,S as K,T as I,U as B,V as Q,W as X,Z as A,_ as Z,aa as ee,ba as ne,ca as te,da as ie,ea as F,fa as y,h as J,la as oe,ma as ae,sa as le,ta as re,ua as q,y as w}from"./chunk-HN3BY7NK.js";import"./chunk-MLMGL4QO.js";import{h as R}from"./chunk-A2FNTR3N.js";import{m as H}from"./chunk-3O7E6U5R.js";import{Bb as b,Cb as f,Hb as g,Ib as i,Jb as n,Kb as d,Ob as j,Pb as Y,Rb as S,Ta as O,V as k,Vb as T,Xa as l,Xb as h,Z as G,ca as M,cc as D,da as x,gc as m,ic as P,jb as v,kb as L,kc as s,lc as u,mc as c}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";function Ee(o,C){if(o&1){let a=S();i(0,"it-input",22),c("ngModelChange",function(e){M(a);let p=h();return u(p.value,e)||(p.value=e),x(e)}),n()}if(o&2){let a=h();g("label",a.label)("placeholder",a.placeholder)("disabled",a.disabled)("readonly",a.readOnly)("type",a.type!=="password"?a.type:"text"),s("ngModel",a.value),g("description",a.note)}}function Ie(o,C){if(o&1){let a=S();i(0,"it-password-input",23),c("ngModelChange",function(e){M(a);let p=h();return u(p.value,e)||(p.value=e),x(e)}),n()}if(o&2){let a=h();g("label",a.label)("placeholder",a.placeholder)("disabled",a.disabled),s("ngModel",a.value),g("validationMode",!1)}}var ce=(()=>{class o{constructor(){this.i=0,this.readOnly=!1,this.disabled=!1,this.type="text",this.icon="pencil",this.value="myNgModel",this.hasPlaceholder=!0,this.hasLabel=!0,this.hasNote=!1}get placeholder(){return this.hasPlaceholder?"Testo di esempio":""}get label(){return this.hasLabel?"Label dell'input":""}get note(){return this.hasNote?"non condivideremo mai i tuoi dati":""}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-example"]],standalone:!1,decls:36,vars:16,consts:[[1,"bd-example"],[1,"row"],[1,"col-8"],[3,"label","placeholder","disabled","readonly","type","ngModel","description"],["showStrengthMeter","true",3,"label","placeholder","disabled","ngModel","validationMode"],[1,"form-check","col-6"],[1,"col-4"],["label","Disabled",3,"ngModelChange","ngModel"],["label","Readonly",3,"ngModelChange","ngModel"],["label","Label",3,"ngModelChange","ngModel"],[1,"col-auto"],["label","Placeholder",3,"ngModelChange","ngModel"],["label","Note",3,"ngModelChange","ngModel"],["name","text","value","text","label","text",3,"ngModelChange","ngModel"],["name","number","value","number","label","number",3,"ngModelChange","ngModel"],["name","email","value","email","label","email",3,"ngModelChange","ngModel"],["name","password","value","password","label","password",3,"ngModelChange","ngModel"],["name","time","value","time","label","time",3,"ngModelChange","ngModel"],["name","date","value","date","label","date",3,"ngModelChange","ngModel"],["name","tel","value","tel","label","tel",3,"ngModelChange","ngModel"],["name","color","value","color","label","color",3,"ngModelChange","ngModel"],["name","url","value","url","label","url",3,"ngModelChange","ngModel"],[3,"ngModelChange","label","placeholder","disabled","readonly","type","ngModel","description"],["showStrengthMeter","true",3,"ngModelChange","label","placeholder","disabled","ngModel","validationMode"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Interazione con Form Input"),n(),i(2,"p"),m(3,"Elementi e stili per la creazione di input accessibili e responsivi."),n(),i(4,"div",0)(5,"div",1)(6,"div",2),b(7,Ee,1,7,"it-input",3),b(8,Ie,1,5,"it-password-input",4),n()(),i(9,"div",1)(10,"div",5)(11,"h5"),m(12,"Opzioni"),n(),i(13,"div",1)(14,"div",6)(15,"it-checkbox",7),c("ngModelChange",function(t){return u(e.disabled,t)||(e.disabled=t),t}),n(),i(16,"it-checkbox",8),c("ngModelChange",function(t){return u(e.readOnly,t)||(e.readOnly=t),t}),n(),i(17,"it-checkbox",9),c("ngModelChange",function(t){return u(e.hasLabel,t)||(e.hasLabel=t),t}),n()(),i(18,"div",10)(19,"it-checkbox",11),c("ngModelChange",function(t){return u(e.hasPlaceholder,t)||(e.hasPlaceholder=t),t}),n(),i(20,"it-checkbox",12),c("ngModelChange",function(t){return u(e.hasNote,t)||(e.hasNote=t),t}),n()()()(),i(21,"div",5)(22,"h5"),m(23,"Tipo Input"),n(),i(24,"div",1)(25,"div",6)(26,"it-radio-button",13),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(27,"it-radio-button",14),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(28,"it-radio-button",15),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(29,"it-radio-button",16),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n()(),i(30,"div",10)(31,"it-radio-button",17),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(32,"it-radio-button",18),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(33,"it-radio-button",19),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(34,"it-radio-button",20),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n(),i(35,"it-radio-button",21),c("ngModelChange",function(t){return u(e.type,t)||(e.type=t),t}),n()()()()()()),r&2&&(l(7),f(e.type!=="password"?7:-1),l(),f(e.type==="password"?8:-1),l(7),s("ngModel",e.disabled),l(),s("ngModel",e.readOnly),l(),s("ngModel",e.hasLabel),l(2),s("ngModel",e.hasPlaceholder),l(),s("ngModel",e.hasNote),l(6),s("ngModel",e.type),l(),s("ngModel",e.type),l(),s("ngModel",e.type),l(),s("ngModel",e.type),l(2),s("ngModel",e.type),l(),s("ngModel",e.type),l(),s("ngModel",e.type),l(),s("ngModel",e.type),l(),s("ngModel",e.type))},dependencies:[_,I,le,y,re,q],encapsulation:2,changeDetection:0})}}return o})();function we(o,C){if(o&1&&d(0,"it-icon",4),o&2){let a=h();g("name",a.icon)}}function Fe(o,C){if(o&1&&d(0,"it-icon",5),o&2){let a=h();g("name",a.icon)}}function Ve(o,C){if(o&1&&d(0,"it-icon",4),o&2){let a=h();g("name",a.icon)}}var ve=(()=>{class o{constructor(){this.i=0,this.type="text",this.icon="pencil",this.value="",this.label="Etichetta di esempio"}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-icon-example"]],standalone:!1,decls:20,vars:11,consts:[[1,"bd-example"],[1,"row"],[1,"col-5"],[3,"label"],["size","sm","color","primary","prependText","",3,"name"],["size","sm","color","primary","appendText","",3,"name"],["itButton","primary","append",""],[1,"form-check","col-auto","offset-1"],["name","none","label","Nessuna",3,"ngModelChange","ngModel","value"],["name","it-pencil","value","pencil","label","it-pencil",3,"ngModelChange","ngModel"],["name","it-link","value","link","label","it-link",3,"ngModelChange","ngModel"],["name","it-star-outline","value","star-outline","label","it-star-outline",3,"ngModelChange","ngModel"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Input con icona o pulsanti"),n(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-input",3),b(6,we,1,1,"it-icon",4),n(),i(7,"it-input",3),b(8,Fe,1,1,"it-icon",5),n(),i(9,"it-input",3),b(10,Ve,1,1,"it-icon",4),i(11,"button",6),m(12,"Invia"),n()()(),i(13,"div",7)(14,"h5"),m(15,"Icona"),n(),i(16,"it-radio-button",8),c("ngModelChange",function(t){return u(e.icon,t)||(e.icon=t),t}),n(),i(17,"it-radio-button",9),c("ngModelChange",function(t){return u(e.icon,t)||(e.icon=t),t}),n(),i(18,"it-radio-button",10),c("ngModelChange",function(t){return u(e.icon,t)||(e.icon=t),t}),n(),i(19,"it-radio-button",11),c("ngModelChange",function(t){return u(e.icon,t)||(e.icon=t),t}),n()()()()),r&2&&(l(5),g("label",e.label),l(),f(e.icon?6:-1),l(),g("label",e.label),l(),f(e.icon?8:-1),l(),g("label",e.label),l(),f(e.icon?10:-1),l(6),s("ngModel",e.icon),g("value",void 0),l(),s("ngModel",e.icon),l(),s("ngModel",e.icon),l(),s("ngModel",e.icon))},dependencies:[_,I,w,y,q,J],encapsulation:2})}}return o})();function De(o,C){if(o&1&&(i(0,"div"),m(1),n()),o&2){let a=h();l(),P("Salvato `",a.savedValue,"`")}}var be=(()=>{class o{constructor(){this.value="",this.savedValue=void 0}save(a){this.savedValue=a.value.myInput}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-template-driven-validation-example"]],standalone:!1,decls:9,vars:3,consts:[["myForm","ngForm"],[1,"bd-example"],["name","myInput","minlength","3","maxlength","10","pattern","[ab]+","required","",3,"ngModelChange","ngModel"],["itButton","primary",3,"click","disabled"]],template:function(r,e){if(r&1){let p=S();i(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Template Driven"),n(),i(2,"div",1)(3,"form",null,0)(5,"it-input",2),c("ngModelChange",function(V){return M(p),u(e.value,V)||(e.value=V),x(V)}),n(),i(6,"button",3),T("click",function(){M(p);let V=D(4);return x(e.save(V))}),m(7,"Salva"),n(),b(8,De,2,1,"div"),n()()}if(r&2){let p=D(4);l(5),s("ngModel",e.value),l(),g("disabled",!p.valid),l(2),f(e.savedValue?8:-1)}},dependencies:[B,_,z,A,Z,$,ee,I,K,w,y],encapsulation:2})}}return o})();function We(o,C){o&1&&(i(0,"div"),m(1,"Il campo \xE8 obbligatorio"),n())}function ke(o,C){o&1&&(i(0,"div"),m(1,"Deve essere almeno di lunghezza 3"),n())}function Le(o,C){o&1&&(i(0,"div"),m(1,"Deve essere massimo di lunghezza 10"),n())}function Pe(o,C){o&1&&(i(0,"div"),m(1,"Non corrisponde al pattern [ab]+"),n())}function ze(o,C){if(o&1&&(i(0,"div"),m(1),n()),o&2){let a=h();l(),P("Salvato `",a.savedValue,"`")}}var fe=(()=>{class o{constructor(){this._fb=G(ne),this.regions=[],this.value="",this.savedValue=void 0,this.regions=["Abruzzo","Basilicata","Calabria","Campania","Emilia Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d'Aosta","Veneto"];let a=[N.required,N.minLength(3),N.maxLength(10),N.pattern("[ab]+")];this.myForm=this._fb.group({taxCode:[null,F.taxCode],vat:[null,F.vatNumber],cap:[null,F.cap],email:[null],url:[null],phone:[null],region:[null,F.includes(this.regions)],iban:[null,F.iban],myInput:["",a]})}save(a){this.savedValue=a.value.myInput}markAllAsTouched(){this.myForm.markAllAsTouched()}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-model-driven-validation-example"]],standalone:!1,decls:38,vars:8,consts:[["myInput",""],[1,"bd-example"],[3,"formGroup"],[1,"row"],[1,"col-6"],["label","Custom","formControlName","myInput"],["error",""],["label","Codice fiscale","formControlName","taxCode","required",""],[1,"col-4"],["label","IBAN","formControlName","iban"],["label","Partita IVA","formControlName","vat","required",""],["label","Cap","formControlName","cap","required",""],["type","email","label","Email","formControlName","email","required",""],["type","url","label","Url","formControlName","url","required",""],["type","tel","label","Telefono","formControlName","phone","required",""],["label","Regione","formControlName","region","required","",3,"source"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"]],template:function(r,e){if(r&1){let p=S();i(0,"h3"),m(1,"Interazione con Form Input dotato di validazione Model Driven"),n(),i(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"it-input",5,0),j(8,6),b(9,We,2,0,"div"),b(10,ke,2,0,"div"),b(11,Le,2,0,"div"),b(12,Pe,2,0,"div"),Y(),n()(),i(13,"div",4),d(14,"it-input",7),n()(),i(15,"div",3)(16,"div",8),d(17,"it-input",9),n(),i(18,"div",8),d(19,"it-input",10),n(),i(20,"div",8),d(21,"it-input",11),n()(),i(22,"div",3)(23,"div",8),d(24,"it-input",12),n(),i(25,"div",8),d(26,"it-input",13),n(),i(27,"div",8),d(28,"it-input",14),n()(),i(29,"div",3)(30,"div",8),d(31,"it-autocomplete",15),n()(),i(32,"div",16)(33,"button",17),T("click",function(){return M(p),x(e.save(e.myForm))}),m(34,"Salva"),n(),i(35,"button",18),T("click",function(){return M(p),x(e.markAllAsTouched())}),m(36,"Valida"),n()(),b(37,ze,2,1,"div"),n()()}if(r&2){let p=D(7);l(3),g("formGroup",e.myForm),l(6),f(p.hasError("required")?9:-1),l(),f(p.hasError("minlength")?10:-1),l(),f(p.hasError("maxlength")?11:-1),l(),f(p.hasError("pattern")?12:-1),l(19),g("source",e.regions),l(2),g("disabled",!e.myForm.valid),l(4),f(e.savedValue?37:-1)}},dependencies:[B,_,z,A,w,me,y,X,Q],encapsulation:2})}}return o})();var he=(()=>{class o{constructor(){this.adaptiveInputValue=99999}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-number-example"]],standalone:!1,decls:23,vars:4,consts:[[1,"bd-example"],[1,"mb-5"],["type","number","label","Min, Max & Step",3,"min","max","step"],["type","number","label","Currency","currency","true","symbol","$"],["type","number","label","Percentage","percentage","true","symbol","%"],["type","number","label","Adattivo","adaptive","true",3,"ngModelChange","ngModel"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Input Numerico"),n(),i(2,"div",0)(3,"h5"),m(4,"Limiti e Step"),n(),i(5,"p",1),m(6,' Aggiungendo le propriet\xE0 "min", "max" e "step" all\u2019input \xE8 possibile limitare il valore minimo e massimo del campo e decidere di quanto varier\xE0 a ogni click sui pulsanti. '),n(),d(7,"it-input",2),i(8,"h5"),m(9,"Valuta"),n(),i(10,"p",1),m(11,'Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\xE0 "currency"'),n(),d(12,"it-input",3),i(13,"h5"),m(14,"Percentuale"),n(),i(15,"p",1),m(16,'Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\xE0 "percentage"'),n(),d(17,"it-input",4),i(18,"h5"),m(19,"Ridimensionamento"),n(),i(20,"p",1),m(21,' \xC8 possibile far s\xEC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la propriet\xE0 "adaptive" '),n(),i(22,"it-input",5),c("ngModelChange",function(t){return u(e.adaptiveInputValue,t)||(e.adaptiveInputValue=t),t}),n()()),r&2&&(l(7),g("min",10)("max",100)("step",5),l(15),s("ngModel",e.adaptiveInputValue))},dependencies:[_,I,y],encapsulation:2})}}return o})();var ye=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-calendar-example"]],standalone:!1,decls:17,vars:0,consts:[[1,"bd-example"],[1,"mb-5"],["type","date","label","Datepicker"],["type","date","label","Min, Max","minDate","2020-05-07","maxDate","2025-05-07"]],template:function(r,e){r&1&&(i(0,"h3"),m(1,"Input Calendario"),n(),i(2,"p")(3,"strong"),m(4,"Attenzione:"),n(),m(5," i valori delle date devono essere in formato YYYY-MM-DD."),n(),i(6,"div",0)(7,"h5"),m(8,"Datepicker"),n(),i(9,"p",1),m(10,"Clicca sull\u2019icona a destra per visualizzare il datepicker."),n(),d(11,"it-input",2),i(12,"h5"),m(13,"Limiti"),n(),i(14,"p",1),m(15,`Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo`),n(),d(16,"it-input",3),n())},dependencies:[y],encapsulation:2})}}return o})();var Ce=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-examples"]],standalone:!1,decls:12,vars:0,consts:[["html",`<h3>Interazione con Form Input</h3>
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
}`]],template:function(r,e){r&1&&d(0,"it-form-input-example")(1,"it-source-display",0)(2,"it-form-input-number-example")(3,"it-source-display",1)(4,"it-form-input-calendar-example")(5,"it-source-display",2)(6,"it-form-input-icon-example")(7,"it-source-display",3)(8,"it-template-driven-validation-example")(9,"it-source-display",4)(10,"it-model-driven-validation-example")(11,"it-source-display",5)},dependencies:[pe,ce,ve,be,fe,he,ye],encapsulation:2})}}return o})();var _e=(()=>{class o{constructor(){this.component=de.components.find(a=>a.name==="ItInputComponent")}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["it-form-input-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,e){r&1&&(i(0,"h1",0),m(1,"Form Input"),n(),i(2,"p",1),m(3,"Il componente Form Input utilizzabile in un form"),n(),d(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),d(7,"it-form-input-examples"),n(),i(8,"it-tab-item",4),d(9,"it-api-parameters",5),n()()),r&2&&(l(4),g("innerHTML",e.component.description,O),l(5),g("component",e.component))},dependencies:[se,ae,oe,Ce],encapsulation:2})}}return o})();var Re=[{path:"",component:_e}],Me=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=L({type:o})}static{this.\u0275inj=k({imports:[R.forChild(Re),R]})}}return o})();var wn=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=L({type:o})}static{this.\u0275inj=k({imports:[H,te,ue,Me,ie]})}}return o})();export{wn as FormInputModule};
