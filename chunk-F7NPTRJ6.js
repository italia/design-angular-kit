import{a as G,b as z,c as O,d as Y}from"./chunk-XTG6MU3L.js";import{T as E,U as j,W as y,X as H,Y as V,Z as Q,ea as q,fa as J,ga as K,k as P,l as U,sa as X,ua as S}from"./chunk-R4LXWPNQ.js";import{l as F}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Ab as T,Db as k,Gc as D,Mc as A,Na as W,Nb as r,Ob as R,Pb as x,Ra as d,Rb as s,Sa as B,Sb as p,Tb as c,U as v,ba as u,ca as M,gb as L,ib as g,la as w,ma as I,ub as o,vb as i,wb as f,xb as _,yb as N}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";function ae(a,e){if(a&1){let C=T();o(0,"it-radio-button",15),c("ngModelChange",function(n){w(C);let t=k();return p(t.selectedColor,n)||(t.selectedColor=n),I(n)}),i()}if(a&2){let C=e.$implicit,m=e.index,n=k();g("id","color-"+m),s("ngModel",n.selectedColor),g("disabled",n.disabled)("value",C)("label",C)}}var Z=(()=>{let e=class e{constructor(m){this._fb=m,this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}};e.\u0275fac=function(n){return new(n||e)(B(q))},e.\u0275cmp=u({type:e,selectors:[["it-radio-example"]],decls:42,vars:8,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModelChange","ngModel"],[3,"id","ngModel","disabled","value","label","ngModelChange",4,"ngFor","ngForOf"],[1,"example-selected-value"],["name","radio-link","value","bootstrap-italia",3,"ngModelChange","ngModel"],["label",""],["href","https://italia.github.io/bootstrap-italia/"],["name","radio-link","value","radio-button",3,"ngModelChange","ngModel"],["href","https://italia.github.io/bootstrap-italia/docs/form/radio-button/"],[3,"formGroup"],["formControlName","gender","value","MALE","label","Maschio"],["formControlName","gender","value","FEMALE","label","Femmina"],["formControlName","gender","value","OTHERS","label","Altro"],["formControlName","gender","value","UNDEFINED","label","Preferisco non dirlo"],[3,"ngModelChange","id","ngModel","disabled","value","label"]],template:function(n,t){n&1&&(o(0,"h3"),r(1,"Configurazione Radio button"),i(),o(2,"div",0)(3,"p",1)(4,"it-checkbox",2),c("ngModelChange",function(l){return p(t.disabled,l)||(t.disabled=l),l}),i()(),o(5,"h4"),r(6,"Risultato"),i(),o(7,"div",1),L(8,ae,1,5,"it-radio-button",3),o(9,"div",4),r(10),i()()(),o(11,"div",0)(12,"h4"),r(13,"Radio con link"),i(),o(14,"it-radio-button",5),c("ngModelChange",function(l){return p(t.link,l)||(t.link=l),l}),_(15,6),r(16,"Label con "),o(17,"a",7),r(18,"link"),i(),N(),i(),o(19,"it-radio-button",8),c("ngModelChange",function(l){return p(t.link,l)||(t.link=l),l}),_(20,6),r(21,"Altra label con "),o(22,"a",9),r(23,"link"),i(),N(),i(),o(24,"div",4),r(25," Link selezionato: "),o(26,"strong"),r(27),i()()(),o(28,"div",0)(29,"h4"),r(30,"Radio in Reactive Form"),i(),o(31,"p"),r(32,"Qual \xE8 il tuo sesso?"),i(),o(33,"form",10),f(34,"it-radio-button",11)(35,"it-radio-button",12)(36,"it-radio-button",13)(37,"it-radio-button",14),i(),o(38,"div",4),r(39," Sesso selezionato: "),o(40,"strong"),r(41),i()()()),n&2&&(d(4),s("ngModel",t.disabled),d(4),g("ngForOf",t.colors),d(2),x("Colore selezionato: ",t.selectedColor,""),d(4),s("ngModel",t.link),d(5),s("ngModel",t.link),d(8),R(t.link),d(6),g("formGroup",t.genderFormGroup),d(8),R(t.genderFormGroup.value.gender))},dependencies:[D,H,E,j,V,Q,y,X,S]});let a=e;return a})();var $=(()=>{let e=class e{constructor(){this.selectedNation="Italia"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-checked-example"]],decls:9,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"ngModelChange","ngModel"],["name","nation","value","Italia","label","Italia",3,"ngModelChange","ngModel"],["name","nation","value","Spagna","label","Spagna",3,"ngModelChange","ngModel"],[1,"example-selected-value"]],template:function(n,t){n&1&&(o(0,"h3"),r(1,"Radio checked"),i(),o(2,"div",0)(3,"div",1)(4,"it-radio-button",2),c("ngModelChange",function(l){return p(t.selectedNation,l)||(t.selectedNation=l),l}),i(),o(5,"it-radio-button",3),c("ngModelChange",function(l){return p(t.selectedNation,l)||(t.selectedNation=l),l}),i(),o(6,"it-radio-button",4),c("ngModelChange",function(l){return p(t.selectedNation,l)||(t.selectedNation=l),l}),i()(),o(7,"div",5),r(8),i()()),n&2&&(d(4),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(2),x("Nazione selezionata: ",t.selectedNation,""))},dependencies:[E,y,S]});let a=e;return a})();var ee=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-examples"]],decls:4,vars:0,consts:[["html",`<h3>Configurazione Radio button</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <it-radio-button
      *ngFor="let color of colors; let i = index"
      [id]="'color-' + i"
      [(ngModel)]="selectedColor"
      [disabled]="disabled"
      [value]="color"
      [label]="color"></it-radio-button>
    <div class="example-selected-value">Colore selezionato: /{/{ selectedColor /}/}</div>
  </div>
</div>

<div class="bd-example">
  <h4>Radio con link</h4>
  <it-radio-button [(ngModel)]="link" name="radio-link" value="bootstrap-italia">
    <ng-container label>Label con <a href="https://italia.github.io/bootstrap-italia/">link</a></ng-container>
  </it-radio-button>
  <it-radio-button [(ngModel)]="link" name="radio-link" value="radio-button">
    <ng-container label>Altra label con <a href="https://italia.github.io/bootstrap-italia/docs/form/radio-button/">link</a></ng-container>
  </it-radio-button>

  <div class="example-selected-value">
    Link selezionato: <strong>/{/{ link /}/}</strong>
  </div>
</div>

<div class="bd-example">
  <h4>Radio in Reactive Form</h4>
  <p>Qual \xE8 il tuo sesso?</p>
  <form [formGroup]="genderFormGroup">
    <it-radio-button formControlName="gender" value="MALE" label="Maschio"></it-radio-button>
    <it-radio-button formControlName="gender" value="FEMALE" label="Femmina"></it-radio-button>
    <it-radio-button formControlName="gender" value="OTHERS" label="Altro"></it-radio-button>
    <it-radio-button formControlName="gender" value="UNDEFINED" label="Preferisco non dirlo"></it-radio-button>
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
    <it-radio-button name="nation" value="USA" label="USA" [(ngModel)]="selectedNation"></it-radio-button>

    <it-radio-button name="nation" value="Italia" label="Italia" [(ngModel)]="selectedNation"></it-radio-button>

    <it-radio-button name="nation" value="Spagna" label="Spagna" [(ngModel)]="selectedNation"></it-radio-button>
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
}`]],template:function(n,t){n&1&&f(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[O,Z,$]});let a=e;return a})();var te=(()=>{let e=class e{constructor(){this.component=G.components.find(m=>m.name==="ItRadioButtonComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,t){n&1&&(o(0,"h1",0),r(1,"Radio Button"),i(),o(2,"p",1),r(3,"Il componente Radio Button utilizzabile in un form"),i(),f(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),f(7,"it-radio-examples"),i(),o(8,"it-tab-item",4),f(9,"it-api-parameters",5),i()()),n&2&&(d(4),g("innerHTML",t.component.description,W),d(5),g("component",t.component))},dependencies:[z,U,P,ee]});let a=e;return a})();var me=[{path:"",component:te}],oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=v({imports:[F.forChild(me),F]});let a=e;return a})();var Be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=v({imports:[A,K,J,Y,oe]});let a=e;return a})();export{Be as RadioModule};
