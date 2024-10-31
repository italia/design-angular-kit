import{a as q,b as J,c as K,d as Q}from"./chunk-XPAZYYAC.js";import{K as k,L as x,M as N,O as b,P as w,Q as _,R as j,S as B,T as U,Y as W,Z as P,_ as R,ga as L,ha as H,sa as d,t as T}from"./chunk-EZQPAPWN.js";import"./chunk-XZP45KYQ.js";import{o as z}from"./chunk-NU7RFJ6M.js";import{$b as y,Cb as i,Db as l,Eb as c,Kb as O,Lb as A,Qc as G,Ua as F,Wb as a,Wc as D,Y as g,Yb as v,Za as s,_a as V,_b as S,ac as C,fa as m,ga as h,ob as I,qb as p}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var X=(()=>{let e=class e{constructor(){this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"},{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-disabled-example"]],decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","disabled-select","label","Etichetta","disabled","true",3,"options"]],template:function(t,o){t&1&&(i(0,"h3"),a(1,"Select disabilitata"),l(),i(2,"div",0)(3,"p",1),c(4,"it-select",2),l()()),t&2&&(s(4),p("options",o.selectOptions))},dependencies:[d]});let n=e;return n})();var Z=(()=>{let e=class e{constructor(){this.selectedValue="",this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"}],this.selectGroups=[{label:"Gruppo 1",options:[{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"}]},{label:"Gruppo 2",options:[{value:3,text:"Opzione 3"},{value:4,text:"Opzione 4"}]}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-group-example"]],decls:10,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","group-select","label","Etichetta",3,"ngModelChange","ngModel","groups","options"],[1,"example-selected-value"]],template:function(t,o){t&1&&(i(0,"h3"),a(1,"Select con gruppi"),l(),i(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(u){return y(o.selectedValue,u)||(o.selectedValue=u),u}),l()(),i(5,"h4"),a(6,"Risultato"),l(),i(7,"div",1)(8,"div",3),a(9),l()()()),t&2&&(s(4),S("ngModel",o.selectedValue),p("groups",o.selectGroups)("options",o.selectOptions),s(5),v("Valore selezionato: ",o.selectedValue,""))},dependencies:[x,b,d]});let n=e;return n})();var $=(()=>{let e=class e{constructor(){this.selectedValue=null,this.selectOptions=[{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-example"]],decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","default-select","label","Etichetta","defaultOption","Seleziona un elemento",3,"ngModelChange","ngModel","options"],[3,"value"],[1,"example-selected-value"]],template:function(t,o){t&1&&(i(0,"h3"),a(1,"Select"),l(),i(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(u){return y(o.selectedValue,u)||(o.selectedValue=u),u}),i(5,"option",3),a(6,"Opzione 1"),l()()(),i(7,"h4"),a(8,"Risultato"),l(),i(9,"div",1)(10,"div",4),a(11),l()()()),t&2&&(s(4),S("ngModel",o.selectedValue),p("options",o.selectOptions),s(),p("value",1),s(6),v("Valore selezionato: ",o.selectedValue,""))},dependencies:[B,U,x,b,d]});let n=e;return n})();function se(n,e){if(n&1&&(i(0,"div",7),a(1),l()),n&2){let ie=A();s(),v("Salvato `",ie.savedValue,"`")}}var ee=(()=>{let e=class e{constructor(r){this._fb=r,this.options=[{value:null,text:"Seleziona un elemento",selected:!0}],this.value="",this.savedValue=void 0,this.myForm=this._fb.group({select:[null,k.required]}),Array.from(Array(10).keys()).forEach(t=>{this.options.push({value:t,text:`Opzione ${t.toString()}`})})}save(r){this.savedValue=r.value.select}markAllAsTouched(){this.myForm.markAllAsTouched()}};e.\u0275fac=function(t){return new(t||e)(V(W))},e.\u0275cmp=m({type:e,selectors:[["it-select-formgroup-example"]],decls:11,vars:4,consts:[[1,"bd-example"],[3,"formGroup"],["formControlName","select",3,"options"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"],["class","mt-3",4,"ngIf"],[1,"mt-3"]],template:function(t,o){t&1&&(i(0,"h3"),a(1,"Interazione con Select dotato di validazione Model Driven"),l(),i(2,"div",0)(3,"form",1),c(4,"it-select",2),i(5,"div",3)(6,"button",4),O("click",function(){return o.save(o.myForm)}),a(7,"Salva"),l(),i(8,"button",5),O("click",function(){return o.markAllAsTouched()}),a(9,"Valida"),l()(),I(10,se,2,1,"div",6),l()()),t&2&&(s(3),p("formGroup",o.myForm),s(),p("options",o.options),s(2),p("disabled",!o.myForm.valid),s(4),p("ngIf",o.savedValue))},dependencies:[G,w,x,N,_,j,T,d],encapsulation:2});let n=e;return n})();var te=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-examples"]],decls:8,vars:0,consts:[["html",`<h3>Select</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select
      id="default-select"
      label="Etichetta"
      [(ngModel)]="selectedValue"
      [options]="selectOptions"
      defaultOption="Seleziona un elemento">
      <!--Puoi inserire gli option da html o dall'attributo options-->
      <option [value]="1">Opzione 1</option>
    </it-select>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <div class="example-selected-value">Valore selezionato: /{/{ selectedValue /}/}</div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
})
export class SelectExampleComponent {
  selectedValue: number = null;
  selectOptions: Array<SelectControlOption> = [
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];
}`],["html",`<h3>Select disabilitata</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select id="disabled-select" label="Etichetta" disabled="true" [options]="selectOptions"> </it-select>
  </p>
</div>`,"typescript",`import { Component } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-disabled-example',
  templateUrl: './select-disabled-example.component.html',
  styleUrls: ['./select-disabled-example.component.scss'],
})
export class SelectDisabledExampleComponent {
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
    {
      value: 1,
      text: 'Opzione 1',
    },
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];

  constructor() {}
}`],["html",`<h3>Select con gruppi</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select id="group-select" label="Etichetta" [(ngModel)]="selectedValue" [groups]="selectGroups" [options]="selectOptions">
    </it-select>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <div class="example-selected-value">Valore selezionato: /{/{ selectedValue /}/}</div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { SelectControlGroup, SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-group-example',
  templateUrl: './select-group-example.component.html',
  styleUrls: ['./select-group-example.component.scss'],
})
export class SelectGroupExampleComponent {
  selectedValue: number | string = '';
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
  ];
  selectGroups: Array<SelectControlGroup> = [
    {
      label: 'Gruppo 1',
      options: [
        {
          value: 1,
          text: 'Opzione 1',
        },
        {
          value: 2,
          text: 'Opzione 2',
        },
      ],
    },
    {
      label: 'Gruppo 2',
      options: [
        {
          value: 3,
          text: 'Opzione 3',
        },
        {
          value: 4,
          text: 'Opzione 4',
        },
      ],
    },
  ];

  constructor() {}
}`],["html",`<h3>Interazione con Select dotato di validazione Model Driven</h3>

<div class="bd-example">
  <form [formGroup]="myForm">
    <it-select [options]="options" formControlName="select"></it-select>

    <div class="d-flex justify-content-between">
      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>
      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>
    </div>

    <div class="mt-3" *ngIf="savedValue">Salvato \`/{/{ savedValue /}/}\`</div>
  </form>
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectControlOption } from 'design-angular-kit/interfaces/form';

@Component({
  selector: 'it-select-formgroup-example',
  templateUrl: './select-formgroup-example.component.html',
})
export class SelectFormgroupExampleComponent {
  myForm: FormGroup;

  options: Array<SelectControlOption> = [{ value: null, text: 'Seleziona un elemento', selected: true }];

  constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.group({
      select: [null, Validators.required],
    });

    Array.from(Array(10).keys()).forEach(number => {
      this.options.push({ value: number, text: \`Opzione \${number.toString()}\` });
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.select;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}`]],template:function(t,o){t&1&&c(0,"it-select-example")(1,"it-source-display",0)(2,"it-select-disabled-example")(3,"it-source-display",1)(4,"it-select-group-example")(5,"it-source-display",2)(6,"it-select-formgroup-example")(7,"it-source-display",3)},dependencies:[K,X,Z,$,ee]});let n=e;return n})();var ne=(()=>{let e=class e{constructor(){this.component=q.components.find(r=>r.name==="ItSelectComponent")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,o){t&1&&(i(0,"h1",0),a(1,"Select"),l(),i(2,"p",1),a(3,"Il classico \u201Cmenu a tendina\u201D"),l(),c(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),c(7,"it-select-examples"),l(),i(8,"it-tab-item",4),c(9,"it-api-parameters",5),l()()),t&2&&(s(4),p("innerHTML",o.component.description,F),s(5),p("component",o.component))},dependencies:[J,H,L,te]});let n=e;return n})();var ce=[{path:"",component:ne}],oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=g({imports:[z.forChild(ce),z]});let n=e;return n})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=g({imports:[D,R,P,Q,oe]});let n=e;return n})();export{Ue as SelectModule};
