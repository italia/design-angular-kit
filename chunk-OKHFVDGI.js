import{a as V,b as B,c as D,d as j}from"./chunk-ZWYEEAVU.js";import{Q as d,R as h,T as b,U as g,V as x,W as v,Z as y,ba as I,ca as S,da as E,ea as N,la as F,ma as G,ta as u}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as M}from"./chunk-F32MIGDQ.js";import{m as P}from"./chunk-66PP3R5H.js";import{Gb as a,Hb as r,Ib as n,Jb as s,V as f,Wa as i,Z as w,fc as l,ib as m,jb as C}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var R=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-password-input-example"]],standalone:!1,decls:4,vars:4,consts:[[1,"bd-example"],["label","Password con label","validationMode","false",3,"ngModel"],["label","Password con label e testo di aiuto","validationMode","false",3,"description","ngModel"],["label","Password con strength meter","showStrengthMeter","true","validationMode","false",3,"ngModel"]],template:function(o,p){o&1&&(r(0,"div",0),s(1,"it-password-input",1)(2,"it-password-input",2)(3,"it-password-input",3),n()),o&2&&(i(),a("ngModel",p.password),i(),a("description",!0)("ngModel",p.passwordText),i(),a("ngModel",p.passwordStrengthMeter))},dependencies:[u,d,b],encapsulation:2})}}return e})();var q=(()=>{class e{constructor(){this.formBuilder=w(I),this.formGroup=this.formBuilder.group({password:[null],confirmPassword:[null]},{validators:t=>N.passwordMatch(t)})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-password-input-confirm-example"]],standalone:!1,decls:6,vars:2,consts:[[1,"bd-example"],[3,"formGroup"],["label","Password","formControlName","password"],["label","Conferma password","formControlName","confirmPassword",3,"confirmPasswordField"]],template:function(o,p){o&1&&(r(0,"h3"),l(1,"Conferma password"),n(),r(2,"div",0)(3,"form",1),s(4,"it-password-input",2)(5,"it-password-input",3),n()()),o&2&&(i(3),a("formGroup",p.formGroup),i(2),a("confirmPasswordField",!0))},dependencies:[u,g,d,h,v,x],encapsulation:2})}}return e})();var L=(()=>{class e{constructor(){this.formBuilder=w(I),this.formGroup=this.formBuilder.group({password:[null],passwordCustom:[null],passwordStrengthMeter:[null]})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-password-input-validation-example"]],standalone:!1,decls:7,vars:7,consts:[[1,"bd-example"],[3,"formGroup"],["label","Validazione default","formControlName","password"],["label","Validazione custom","description","Inserisci almeno 8 caratteri e una lettera maiuscola","formControlName","passwordCustom",3,"minLength","required","useNumber","useCapitalCase","useSmallCase","useSpecialCharacters"],["label","Validazione default con strength meter","showStrengthMeter","true","formControlName","passwordStrengthMeter"]],template:function(o,p){o&1&&(r(0,"h3"),l(1,"Validazione"),n(),r(2,"div",0)(3,"form",1),s(4,"it-password-input",2)(5,"it-password-input",3)(6,"it-password-input",4),n()()),o&2&&(i(3),a("formGroup",p.formGroup),i(2),a("minLength",8)("required",!1)("useNumber",!1)("useCapitalCase",!0)("useSmallCase",!0)("useSpecialCharacters",!1))},dependencies:[u,g,d,h,y,v,x],encapsulation:2})}}return e})();var U=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-password-input-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<div class="bd-example">
  <it-password-input label="Password con label" validationMode="false" [ngModel]="password"></it-password-input>

  <it-password-input
    label="Password con label e testo di aiuto"
    [description]="true"
    validationMode="false"
    [ngModel]="passwordText"></it-password-input>

  <it-password-input
    label="Password con strength meter"
    showStrengthMeter="true"
    validationMode="false"
    [ngModel]="passwordStrengthMeter"></it-password-input>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-password-input-example',
  templateUrl: './password-input-example.component.html',
  standalone: false,
})
export class PasswordInputExampleComponent {
  password?: string;
  passwordText?: string;
  passwordStrengthMeter?: string;
}`],["html",`<h3>Validazione</h3>
<div class="bd-example">
  <form [formGroup]="formGroup">
    <it-password-input label="Validazione default" formControlName="password"></it-password-input>

    <it-password-input
      label="Validazione custom"
      [minLength]="8"
      [required]="false"
      [useNumber]="false"
      [useCapitalCase]="true"
      [useSmallCase]="true"
      [useSpecialCharacters]="false"
      description="Inserisci almeno 8 caratteri e una lettera maiuscola"
      formControlName="passwordCustom"></it-password-input>

    <it-password-input
      label="Validazione default con strength meter"
      showStrengthMeter="true"
      formControlName="passwordStrengthMeter"></it-password-input>
  </form>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-password-input-validation-example',
  templateUrl: './password-input-validation-example.component.html',
  standalone: false,
})
export class PasswordInputValidationExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      password: [null],
      passwordCustom: [null],
      passwordStrengthMeter: [null],
    });
  }
}`],["html",`<h3>Conferma password</h3>
<div class="bd-example">
  <form [formGroup]="formGroup">
    <it-password-input label="Password" formControlName="password"></it-password-input>

    <it-password-input label="Conferma password" [confirmPasswordField]="true" formControlName="confirmPassword"></it-password-input>
  </form>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-password-input-confirm-example',
  templateUrl: './password-input-confirm-example.component.html',
  standalone: false,
})
export class PasswordInputConfirmExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group(
      {
        password: [null],
        confirmPassword: [null],
      },
      {
        validators: control => ItValidators.passwordMatch(control),
      }
    );
  }
}`]],template:function(o,p){o&1&&s(0,"it-password-input-example")(1,"it-source-display",0)(2,"it-password-input-validation-example")(3,"it-source-display",1)(4,"it-password-input-confirm-example")(5,"it-source-display",2)},dependencies:[V,R,q,L],encapsulation:2})}}return e})();var A=(()=>{class e{constructor(){this.component=B.components.find(t=>t.name==="ItPasswordInputComponent")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["it-password-input-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,p){o&1&&(r(0,"h1",0),l(1,"Input password"),n(),r(2,"p",1),l(3,` Per rendere pi\xF9 semplice l\u2019inserimento della password, l\u2019elemento \xE8 stato dotato di un visualizzatore dei caratteri digitati.
`),n(),r(4,"it-tab-container")(5,"it-tab-item",2),s(6,"it-password-input-examples"),n(),r(7,"it-tab-item",3)(8,"h3"),l(9,"PasswordInputComponent"),n(),s(10,"it-api-parameters",4),n()()),o&2&&(i(10),a("component",p.component))},dependencies:[D,G,F,U],encapsulation:2})}}return e})();var Q=[{path:"",component:A}],k=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=f({imports:[M.forChild(Q),M]})}}return e})();var be=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=f({imports:[P,j,k,E,S]})}}return e})();export{be as PasswordInputModule};
