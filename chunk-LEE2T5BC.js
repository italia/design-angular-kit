import{a as P,b as S,c as G,d as T}from"./chunk-XTG6MU3L.js";import{T as u,U as g,W as E,X as v,Y as x,Z as M,aa as V,ea as b,fa as B,ga as D,ha as z,k as N,l as F,ta as c}from"./chunk-R4LXWPNQ.js";import{l as y}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Mc as I,Nb as d,Ra as a,Sa as h,U as w,ba as l,ca as C,ib as s,ub as i,vb as n,wb as p}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";var L=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-password-input-example"]],decls:4,vars:4,consts:[[1,"bd-example"],["label","Password con label","validationMode","false",3,"ngModel"],["label","Password con label e testo di aiuto","validationMode","false",3,"description","ngModel"],["label","Password con strength meter","showStrengthMeter","true","validationMode","false",3,"ngModel"]],template:function(t,m){t&1&&(i(0,"div",0),p(1,"it-password-input",1)(2,"it-password-input",2)(3,"it-password-input",3),n()),t&2&&(a(),s("ngModel",m.password),a(),s("description",!0)("ngModel",m.passwordText),a(),s("ngModel",m.passwordStrengthMeter))},dependencies:[c,u,E],encapsulation:2});let o=e;return o})();var U=(()=>{let e=class e{constructor(r){this.formBuilder=r,this.formGroup=this.formBuilder.group({password:[null],confirmPassword:[null]},{validators:t=>z.passwordMatch(t)})}};e.\u0275fac=function(t){return new(t||e)(h(b))},e.\u0275cmp=l({type:e,selectors:[["it-password-input-confirm-example"]],decls:6,vars:2,consts:[[1,"bd-example"],[3,"formGroup"],["label","Password","formControlName","password"],["label","Conferma password","formControlName","confirmPassword",3,"confirmPasswordField"]],template:function(t,m){t&1&&(i(0,"h3"),d(1,"Conferma password"),n(),i(2,"div",0)(3,"form",1),p(4,"it-password-input",2)(5,"it-password-input",3),n()()),t&2&&(a(3),s("formGroup",m.formGroup),a(2),s("confirmPasswordField",!0))},dependencies:[c,v,u,g,x,M],encapsulation:2});let o=e;return o})();var A=(()=>{let e=class e{constructor(r){this.formBuilder=r,this.formGroup=this.formBuilder.group({password:[null],passwordCustom:[null],passwordStrengthMeter:[null]})}};e.\u0275fac=function(t){return new(t||e)(h(b))},e.\u0275cmp=l({type:e,selectors:[["it-password-input-validation-example"]],decls:7,vars:7,consts:[[1,"bd-example"],[3,"formGroup"],["label","Validazione default","formControlName","password"],["label","Validazione custom","description","Inserisci almeno 8 caratteri e una lettera maiuscola","formControlName","passwordCustom",3,"minLength","required","useNumber","useCapitalCase","useSmallCase","useSpecialCharacters"],["label","Validazione default con strength meter","showStrengthMeter","true","formControlName","passwordStrengthMeter"]],template:function(t,m){t&1&&(i(0,"h3"),d(1,"Validazione"),n(),i(2,"div",0)(3,"form",1),p(4,"it-password-input",2)(5,"it-password-input",3)(6,"it-password-input",4),n()()),t&2&&(a(3),s("formGroup",m.formGroup),a(2),s("minLength",8)("required",!1)("useNumber",!1)("useCapitalCase",!0)("useSmallCase",!0)("useSpecialCharacters",!1))},dependencies:[c,v,u,g,V,x,M],encapsulation:2});let o=e;return o})();var R=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-password-input-examples"]],decls:6,vars:0,consts:[["html",`<div class="bd-example">
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
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-password-input-validation-example',
  templateUrl: './password-input-validation-example.component.html',
})
export class PasswordInputValidationExampleComponent {
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
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
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-password-input-confirm-example',
  templateUrl: './password-input-confirm-example.component.html',
})
export class PasswordInputConfirmExampleComponent {
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
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
}`]],template:function(t,m){t&1&&p(0,"it-password-input-example")(1,"it-source-display",0)(2,"it-password-input-validation-example")(3,"it-source-display",1)(4,"it-password-input-confirm-example")(5,"it-source-display",2)},dependencies:[G,L,U,A],encapsulation:2});let o=e;return o})();var k=(()=>{let e=class e{constructor(){this.component=P.components.find(r=>r.name==="ItPasswordInputComponent")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["it-password-input-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,m){t&1&&(i(0,"h1",0),d(1,"Input password"),n(),i(2,"p",1),d(3,` Per rendere pi\xF9 semplice l\u2019inserimento della password, l\u2019elemento \xE8 stato dotato di un visualizzatore dei caratteri digitati.
`),n(),i(4,"it-tab-container")(5,"it-tab-item",2),p(6,"it-password-input-examples"),n(),i(7,"it-tab-item",3)(8,"h3"),d(9,"PasswordInputComponent"),n(),p(10,"it-api-parameters",4),n()()),t&2&&(a(10),s("component",m.component))},dependencies:[S,F,N,R],encapsulation:2});let o=e;return o})();var W=[{path:"",component:k}],H=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=w({imports:[y.forChild(W),y]});let o=e;return o})();var ve=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=w({imports:[I,T,H,D,B]});let o=e;return o})();export{ve as PasswordInputModule};
