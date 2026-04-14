import{a as J,b as K,c as X,d as Y}from"./chunk-ZWYEEAVU.js";import{Q as x,R as D,T as M,U as A,V as P,W as U,ba as j,ca as O,da as H,la as V,ma as Q,sa as q,ua as E}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as k}from"./chunk-F32MIGDQ.js";import{m as T}from"./chunk-66PP3R5H.js";import{Db as W,Eb as B,Fb as G,Gb as f,Hb as n,Ib as o,Jb as g,Nb as _,Ob as S,Qb as L,Sa as z,V as C,Wa as r,Wb as y,Z as F,ca as I,da as w,fc as a,gc as R,hc as v,ib as u,jb as h,jc as m,kc as s,lc as p}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";function ae(t,N){if(t&1){let d=L();n(0,"it-radio-button",15),p("ngModelChange",function(e){I(d);let c=y();return s(c.selectedColor,e)||(c.selectedColor=e),w(e)}),o()}if(t&2){let d=N.$implicit,i=N.$index,e=y();f("id","color-"+i),m("ngModel",e.selectedColor),f("disabled",e.disabled)("value",d)("label",d)}}var Z=(()=>{class t{constructor(){this._fb=F(j),this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["it-radio-example"]],standalone:!1,decls:52,vars:7,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModelChange","ngModel"],[3,"id","ngModel","disabled","value","label"],[1,"example-selected-value"],["name","radio-link","value","bootstrap-italia",3,"ngModelChange","ngModel"],["label",""],["href","https://italia.github.io/bootstrap-italia/"],["name","radio-link","value","radio-button",3,"ngModelChange","ngModel"],["href","https://italia.github.io/bootstrap-italia/docs/form/radio-button/"],[3,"formGroup"],["formControlName","gender","value","MALE","label","Maschio"],["formControlName","gender","value","FEMALE","label","Femmina"],["formControlName","gender","value","OTHERS","label","Altro"],["formControlName","gender","value","UNDEFINED","label","Preferisco non dirlo"],[3,"ngModelChange","id","ngModel","disabled","value","label"]],template:function(i,e){i&1&&(n(0,"h3"),a(1,"Configurazione Radio button"),o(),n(2,"div",0)(3,"p",1)(4,"it-checkbox",2),p("ngModelChange",function(l){return s(e.disabled,l)||(e.disabled=l),l}),o()(),n(5,"h4"),a(6,"Risultato"),o(),n(7,"div",1)(8,"fieldset")(9,"legend"),a(10,"Seleziona il tuo colore preferito"),o(),B(11,ae,1,5,"it-radio-button",3,W),o(),n(13,"div",4),a(14),o()()(),n(15,"div",0)(16,"h4"),a(17,"Radio con link"),o(),n(18,"fieldset")(19,"legend"),a(20,"Gruppo di radio"),o(),n(21,"it-radio-button",5),p("ngModelChange",function(l){return s(e.link,l)||(e.link=l),l}),_(22,6),a(23,"Label con "),n(24,"a",7),a(25,"link"),o(),S(),o(),n(26,"it-radio-button",8),p("ngModelChange",function(l){return s(e.link,l)||(e.link=l),l}),_(27,6),a(28,"Altra label con "),n(29,"a",9),a(30,"link"),o(),S(),o()(),n(31,"div",4),a(32," Link selezionato: "),n(33,"strong"),a(34),o()()(),n(35,"div",0)(36,"h4"),a(37,"Radio in Reactive Form"),o(),n(38,"p"),a(39,"Qual \xE8 il tuo sesso?"),o(),n(40,"form",10)(41,"fieldset")(42,"legend"),a(43,"Gruppo di radio"),o(),g(44,"it-radio-button",11)(45,"it-radio-button",12)(46,"it-radio-button",13)(47,"it-radio-button",14),o()(),n(48,"div",4),a(49," Sesso selezionato: "),n(50,"strong"),a(51),o()()()),i&2&&(r(4),m("ngModel",e.disabled),r(7),G(e.colors),r(3),v("Colore selezionato: ",e.selectedColor),r(7),m("ngModel",e.link),r(5),m("ngModel",e.link),r(8),R(e.link),r(6),f("formGroup",e.genderFormGroup),r(11),R(e.genderFormGroup.value.gender))},dependencies:[A,x,D,U,P,M,q,E],encapsulation:2})}}return t})();var $=(()=>{class t{constructor(){this.selectedNation="Italia"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["it-radio-checked-example"]],standalone:!1,decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"ngModelChange","ngModel"],["name","nation","value","Italia","label","Italia",3,"ngModelChange","ngModel"],["name","nation","value","Spagna","label","Spagna",3,"ngModelChange","ngModel"],[1,"example-selected-value"]],template:function(i,e){i&1&&(n(0,"h3"),a(1,"Radio checked"),o(),n(2,"div",0)(3,"div",1)(4,"fieldset")(5,"legend"),a(6,"Seleziona la nazionalit\xE0"),o(),n(7,"it-radio-button",2),p("ngModelChange",function(l){return s(e.selectedNation,l)||(e.selectedNation=l),l}),o(),n(8,"it-radio-button",3),p("ngModelChange",function(l){return s(e.selectedNation,l)||(e.selectedNation=l),l}),o(),n(9,"it-radio-button",4),p("ngModelChange",function(l){return s(e.selectedNation,l)||(e.selectedNation=l),l}),o()()(),n(10,"div",5),a(11),o()()),i&2&&(r(7),m("ngModel",e.selectedNation),r(),m("ngModel",e.selectedNation),r(),m("ngModel",e.selectedNation),r(2),v("Nazione selezionata: ",e.selectedNation))},dependencies:[x,M,E],encapsulation:2})}}return t})();var ee=(()=>{class t{constructor(){}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["it-radio-examples"]],standalone:!1,decls:4,vars:0,consts:[["html",`<h3>Configurazione Radio button</h3>
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
}`]],template:function(i,e){i&1&&g(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[J,Z,$],encapsulation:2})}}return t})();var te=(()=>{class t{constructor(){this.component=K.components.find(d=>d.name==="ItRadioButtonComponent")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["it-radio-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,e){i&1&&(n(0,"h1",0),a(1,"Radio Button"),o(),n(2,"p",1),a(3,"Il componente Radio Button utilizzabile in un form"),o(),g(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),g(7,"it-radio-examples"),o(),n(8,"it-tab-item",4),g(9,"it-api-parameters",5),o()()),i&2&&(r(4),f("innerHTML",e.component.description,z),r(5),f("component",e.component))},dependencies:[X,Q,V,ee],encapsulation:2})}}return t})();var me=[{path:"",component:te}],ne=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=C({imports:[k.forChild(me),k]})}}return t})();var Ge=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=C({imports:[T,H,O,Y,ne]})}}return t})();export{Ge as RadioModule};
