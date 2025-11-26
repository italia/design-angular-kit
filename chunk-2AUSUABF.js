import{a as K,b as X,c as Y,d as Z}from"./chunk-CQV3UQHT.js";import{Q as E,R as A,T as S,U as P,V as U,W as j,ba as O,ca as H,da as V,la as Q,ma as q,sa as J,ua as y}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as F}from"./chunk-DVW5EFKD.js";import{m as D}from"./chunk-I647ZKKI.js";import{Eb as B,Fb as G,Gb as L,Hb as f,Ib as n,Jb as o,Kb as g,Lb as _,Mb as k,Ob as T,Sa as W,Tb as N,Wa as d,Y as v,aa as w,cc as l,dc as R,ec as M,fb as u,ga as I,gb as x,gc as s,ha as z,hc as p,ic as c}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";function le(a,e){if(a&1){let h=T();n(0,"it-radio-button",15),c("ngModelChange",function(i){I(h);let t=N();return p(t.selectedColor,i)||(t.selectedColor=i),z(i)}),o()}if(a&2){let h=e.$implicit,m=e.$index,i=N();f("id","color-"+m),s("ngModel",i.selectedColor),f("disabled",i.disabled)("value",h)("label",h)}}var $=(()=>{let e=class e{constructor(){this._fb=w(O),this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-example"]],standalone:!1,decls:52,vars:7,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModelChange","ngModel"],[3,"id","ngModel","disabled","value","label"],[1,"example-selected-value"],["name","radio-link","value","bootstrap-italia",3,"ngModelChange","ngModel"],["label",""],["href","https://italia.github.io/bootstrap-italia/"],["name","radio-link","value","radio-button",3,"ngModelChange","ngModel"],["href","https://italia.github.io/bootstrap-italia/docs/form/radio-button/"],[3,"formGroup"],["formControlName","gender","value","MALE","label","Maschio"],["formControlName","gender","value","FEMALE","label","Femmina"],["formControlName","gender","value","OTHERS","label","Altro"],["formControlName","gender","value","UNDEFINED","label","Preferisco non dirlo"],[3,"ngModelChange","id","ngModel","disabled","value","label"]],template:function(i,t){i&1&&(n(0,"h3"),l(1,"Configurazione Radio button"),o(),n(2,"div",0)(3,"p",1)(4,"it-checkbox",2),c("ngModelChange",function(r){return p(t.disabled,r)||(t.disabled=r),r}),o()(),n(5,"h4"),l(6,"Risultato"),o(),n(7,"div",1)(8,"fieldset")(9,"legend"),l(10,"Seleziona il tuo colore preferito"),o(),G(11,le,1,5,"it-radio-button",3,B),o(),n(13,"div",4),l(14),o()()(),n(15,"div",0)(16,"h4"),l(17,"Radio con link"),o(),n(18,"fieldset")(19,"legend"),l(20,"Gruppo di radio"),o(),n(21,"it-radio-button",5),c("ngModelChange",function(r){return p(t.link,r)||(t.link=r),r}),_(22,6),l(23,"Label con "),n(24,"a",7),l(25,"link"),o(),k(),o(),n(26,"it-radio-button",8),c("ngModelChange",function(r){return p(t.link,r)||(t.link=r),r}),_(27,6),l(28,"Altra label con "),n(29,"a",9),l(30,"link"),o(),k(),o()(),n(31,"div",4),l(32," Link selezionato: "),n(33,"strong"),l(34),o()()(),n(35,"div",0)(36,"h4"),l(37,"Radio in Reactive Form"),o(),n(38,"p"),l(39,"Qual \xE8 il tuo sesso?"),o(),n(40,"form",10)(41,"fieldset")(42,"legend"),l(43,"Gruppo di radio"),o(),g(44,"it-radio-button",11)(45,"it-radio-button",12)(46,"it-radio-button",13)(47,"it-radio-button",14),o()(),n(48,"div",4),l(49," Sesso selezionato: "),n(50,"strong"),l(51),o()()()),i&2&&(d(4),s("ngModel",t.disabled),d(7),L(t.colors),d(3),M("Colore selezionato: ",t.selectedColor),d(7),s("ngModel",t.link),d(5),s("ngModel",t.link),d(8),R(t.link),d(6),f("formGroup",t.genderFormGroup),d(11),R(t.genderFormGroup.value.gender))},dependencies:[P,E,A,U,j,S,J,y],encapsulation:2});let a=e;return a})();var ee=(()=>{let e=class e{constructor(){this.selectedNation="Italia"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-checked-example"]],standalone:!1,decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"ngModelChange","ngModel"],["name","nation","value","Italia","label","Italia",3,"ngModelChange","ngModel"],["name","nation","value","Spagna","label","Spagna",3,"ngModelChange","ngModel"],[1,"example-selected-value"]],template:function(i,t){i&1&&(n(0,"h3"),l(1,"Radio checked"),o(),n(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),l(6,"Seleziona la nazionalit\xE0"),o(),n(7,"it-radio-button",2),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o(),n(8,"it-radio-button",3),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o(),n(9,"it-radio-button",4),c("ngModelChange",function(r){return p(t.selectedNation,r)||(t.selectedNation=r),r}),o()()(),n(10,"div",5),l(11),o()()),i&2&&(d(7),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(),s("ngModel",t.selectedNation),d(2),M("Nazione selezionata: ",t.selectedNation))},dependencies:[E,S,y],encapsulation:2});let a=e;return a})();var te=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Configurazione Radio button</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <fieldset>
      <legend>Seleziona il tuo colore preferito</legend>
      @for (color of colors; track color; let i = $index) {
        <it-radio-button
          [id]="'color-' + i"
          [(ngModel)]="selectedColor"
          [disabled]="disabled"
          [value]="color"
          [label]="color"></it-radio-button>
      }
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
</div>`,"typescript",`import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss'],
  standalone: false,
})
export class RadioExampleComponent implements OnInit {
  private _fb = inject(FormBuilder);

  colors = ['Rosso', 'Blu', 'Giallo'];

  selectedColor = 'Blu';

  disabled = false;

  link?: string;

  genderFormGroup: FormGroup;

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
  standalone: false,
})
export class RadioCheckedExampleComponent {
  selectedNation = 'Italia';
}`]],template:function(i,t){i&1&&g(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[K,$,ee],encapsulation:2});let a=e;return a})();var ne=(()=>{let e=class e{constructor(){this.component=X.components.find(m=>m.name==="ItRadioButtonComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["it-radio-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,t){i&1&&(n(0,"h1",0),l(1,"Radio Button"),o(),n(2,"p",1),l(3,"Il componente Radio Button utilizzabile in un form"),o(),g(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),g(7,"it-radio-examples"),o(),n(8,"it-tab-item",4),g(9,"it-api-parameters",5),o()()),i&2&&(d(4),f("innerHTML",t.component.description,W),d(5),f("component",t.component))},dependencies:[Y,q,Q,te],encapsulation:2});let a=e;return a})();var se=[{path:"",component:ne}],oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[F.forChild(se),F]});let a=e;return a})();var Le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[D,V,H,Z,oe]});let a=e;return a})();export{Le as RadioModule};
