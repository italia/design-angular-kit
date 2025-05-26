import{a as J,b as K,c as X,d as Y}from"./chunk-VOECI7NO.js";import{R as E,S as D,U as S,V as A,W as P,X as U,ca as O,da as j,ea as H,ma as V,na as Q,ta as q,va as y}from"./chunk-AH6A2KSZ.js";import"./chunk-XZP45KYQ.js";import{h as F}from"./chunk-BTXKVGUM.js";import"./chunk-WH5OHNTV.js";import{$a as d,Eb as n,Fb as o,Gb as f,Hb as _,Ib as N,Kb as B,Nb as k,Wa as z,Yb as l,Z as v,Zb as R,Zc as L,_b as M,ab as W,ac as s,bc as p,cc as c,ed as T,ga as u,ha as x,qb as G,ra as w,sa as I,sb as g}from"./chunk-E5TMX6OZ.js";import"./chunk-JNJ3D7EP.js";function ae(a,e){if(a&1){let C=B();n(0,"it-radio-button",15),c("ngModelChange",function(i){w(C);let t=k();return p(t.selectedColor,i)||(t.selectedColor=i),I(i)}),o()}if(a&2){let C=e.$implicit,m=e.index,i=k();g("id","color-"+m),s("ngModel",i.selectedColor),g("disabled",i.disabled)("value",C)("label",C)}}var Z=(()=>{let e=class e{constructor(m){this._fb=m,this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}};e.\u0275fac=function(i){return new(i||e)(W(O))},e.\u0275cmp=u({type:e,selectors:[["it-radio-example"]],decls:51,vars:8,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModelChange","ngModel"],[3,"id","ngModel","disabled","value","label","ngModelChange",4,"ngFor","ngForOf"],[1,"example-selected-value"],["name","radio-link","value","bootstrap-italia",3,"ngModelChange","ngModel"],["label",""],["href","https://italia.github.io/bootstrap-italia/"],["name","radio-link","value","radio-button",3,"ngModelChange","ngModel"],["href","https://italia.github.io/bootstrap-italia/docs/form/radio-button/"],[3,"formGroup"],["formControlName","gender","value","MALE","label","Maschio"],["formControlName","gender","value","FEMALE","label","Femmina"],["formControlName","gender","value","OTHERS","label","Altro"],["formControlName","gender","value","UNDEFINED","label","Preferisco non dirlo"],[3,"ngModelChange","id","ngModel","disabled","value","label"]],template:function(i,t){i&1&&(n(0,"h3"),l(1,"Configurazione Radio button"),o(),n(2,"div",0)(3,"p",1)(4,"it-checkbox",2),c("ngModelChange",function(r){return p(t.disabled,r)||(t.disabled=r),r}),o()(),n(5,"h4"),l(6,"Risultato"),o(),n(7,"div",1)(8,"fieldset")(9,"legend"),l(10,"Seleziona il tuo colore preferito"),o(),G(11,ae,1,5,"it-radio-button",3),o(),n(12,"div",4),l(13),o()()(),n(14,"div",0)(15,"h4"),l(16,"Radio con link"),o(),n(17,"fieldset")(18,"legend"),l(19,"Gruppo di radio"),o(),n(20,"it-radio-button",5),c("ngModelChange",function(r){return p(t.link,r)||(t.link=r),r}),_(21,6),l(22,"Label con "),n(23,"a",7),l(24,"link"),o(),N(),o(),n(25,"it-radio-button",8),c("ngModelChange",function(r){return p(t.link,r)||(t.link=r),r}),_(26,6),l(27,"Altra label con "),n(28,"a",9),l(29,"link"),o(),N(),o()(),n(30,"div",4),l(31," Link selezionato: "),n(32,"strong"),l(33),o()()(),n(34,"div",0)(35,"h4"),l(36,"Radio in Reactive Form"),o(),n(37,"p"),l(38,"Qual \xE8 il tuo sesso?"),o(),n(39,"form",10)(40,"fieldset")(41,"legend"),l(42,"Gruppo di radio"),o(),f(43,"it-radio-button",11)(44,"it-radio-button",12)(45,"it-radio-button",13)(46,"it-radio-button",14),o()(),n(47,"div",4),l(48," Sesso selezionato: "),n(49,"strong"),l(50),o()()()),i&2&&(d(4),s("ngModel",t.disabled),d(7),g("ngForOf",t.colors),d(2),M("Colore selezionato: ",t.selectedColor,""),d(7),s("ngModel",t.link),d(5),s("ngModel",t.link),d(8),R(t.link),d(6),g("formGroup",t.genderFormGroup),d(11),R(t.genderFormGroup.value.gender))},dependencies:[L,A,E,D,P,U,S,q,y]});let a=e;return a})();var $=(()=>{let e=class e{constructor(){this.selectedNation="Italia"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-checked-example"]],decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"ngModelChange","ngModel"],["name","nation","value","Italia","label","Italia",3,"ngModelChange","ngModel"],["name","nation","value","Spagna","label","Spagna",3,"ngModelChange","ngModel"],[1,"example-selected-value"]],template:function(i,t){i&1&&(n(0,"h3"),l(1,"Radio checked"),o(),n(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),l(6,"Seleziona la nazionalit\xE0"),o(),n(7,"it-radio-button",2),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o(),n(8,"it-radio-button",3),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o(),n(9,"it-radio-button",4),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o()()(),n(10,"div",5),l(11),o()()),i&2&&(d(7),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(2),M("Nazione selezionata: ",t.selectedNation,""))},dependencies:[E,S,y]});let a=e;return a})();var ee=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-examples"]],decls:4,vars:0,consts:[["html",`<h3>Configurazione Radio button</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <fieldset>
      <legend>Seleziona il tuo colore preferito</legend>
      <it-radio-button
        *ngFor="let color of colors; let i = index"
        [id]="'color-' + i"
        [(ngModel)]="selectedColor"
        [disabled]="disabled"
        [value]="color"
        [label]="color"></it-radio-button>
    </fieldset>
    <div class="example-selected-value">Colore selezionato: /{/{ selectedColor /}/}</div>
  </div>
</div>

<div class="bd-example">
  <h4>Radio con link</h4>
  <fieldset>
    <legend>Gruppo di radio</legend>
    <it-radio-button [(ngModel)]="link" name="radio-link" value="bootstrap-italia">
      <ng-container label>Label con <a href="https://italia.github.io/bootstrap-italia/">link</a></ng-container>
    </it-radio-button>
    <it-radio-button [(ngModel)]="link" name="radio-link" value="radio-button">
      <ng-container label
        >Altra label con <a href="https://italia.github.io/bootstrap-italia/docs/form/radio-button/">link</a></ng-container
      >
    </it-radio-button>
  </fieldset>

  <div class="example-selected-value">
    Link selezionato: <strong>/{/{ link /}/}</strong>
  </div>
</div>

<div class="bd-example">
  <h4>Radio in Reactive Form</h4>
  <p>Qual \xE8 il tuo sesso?</p>
  <form [formGroup]="genderFormGroup">
    <fieldset>
      <legend>Gruppo di radio</legend>
      <it-radio-button formControlName="gender" value="MALE" label="Maschio"></it-radio-button>
      <it-radio-button formControlName="gender" value="FEMALE" label="Femmina"></it-radio-button>
      <it-radio-button formControlName="gender" value="OTHERS" label="Altro"></it-radio-button>
      <it-radio-button formControlName="gender" value="UNDEFINED" label="Preferisco non dirlo"></it-radio-button>
    </fieldset>
  </form>

  <div class="example-selected-value">
    Sesso selezionato: <strong>/{/{ genderFormGroup.value.gender /}/}</strong>
  </div>
</div>`,"typescript",`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss'],
})
export class RadioExampleComponent implements OnInit {
  colors = ['Rosso', 'Blu', 'Giallo'];

  selectedColor = 'Blu';

  disabled = false;

  link?: string;

  genderFormGroup: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.genderFormGroup = this._fb.group({
      gender: ['MALE'],
    });
  }
}`],["html",`<h3>Radio checked</h3>
<div class="bd-example">
  <div class="example-section">
    <fieldset>
      <legend>Seleziona la nazionalit\xE0</legend>
      <it-radio-button name="nation" value="USA" label="USA" [(ngModel)]="selectedNation"></it-radio-button>

      <it-radio-button name="nation" value="Italia" label="Italia" [(ngModel)]="selectedNation"></it-radio-button>

      <it-radio-button name="nation" value="Spagna" label="Spagna" [(ngModel)]="selectedNation"></it-radio-button>
    </fieldset>
  </div>
  <div class="example-selected-value">Nazione selezionata: /{/{ selectedNation /}/}</div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-radio-checked-example',
  templateUrl: './radio-checked-example.component.html',
  styleUrls: ['./radio-checked-example.component.scss'],
})
export class RadioCheckedExampleComponent {
  selectedNation = 'Italia';
}`]],template:function(i,t){i&1&&f(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[X,Z,$]});let a=e;return a})();var te=(()=>{let e=class e{constructor(){this.component=J.components.find(m=>m.name==="ItRadioButtonComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,t){i&1&&(n(0,"h1",0),l(1,"Radio Button"),o(),n(2,"p",1),l(3,"Il componente Radio Button utilizzabile in un form"),o(),f(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),f(7,"it-radio-examples"),o(),n(8,"it-tab-item",4),f(9,"it-api-parameters",5),o()()),i&2&&(d(4),g("innerHTML",t.component.description,z),d(5),g("component",t.component))},dependencies:[K,Q,V,ee]});let a=e;return a})();var me=[{path:"",component:te}],ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[F.forChild(me),F]});let a=e;return a})();var We=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[T,H,j,Y,ne]});let a=e;return a})();export{We as RadioModule};
