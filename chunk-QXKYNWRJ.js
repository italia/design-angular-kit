import{a as q,b as J,c as K,d as Q}from"./chunk-CQV3UQHT.js";import{P as I,Q as x,R as N,T as b,U as w,V as _,W as j,X as B,Y as U,ba as W,ca as P,da as R,la as L,ma as H,xa as d,y as k}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as z}from"./chunk-DVW5EFKD.js";import{m as T}from"./chunk-I647ZKKI.js";import{Bb as A,Cb as G,Hb as p,Ib as i,Jb as l,Kb as c,Sa as V,Sb as O,Tb as D,Wa as s,Y as h,aa as F,cc as r,ec as v,fb as m,gb as g,gc as S,hc as y,ic as C}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var X=(()=>{let e=class e{constructor(){this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"},{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-disabled-example"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","disabled-select","label","Etichetta","disabled","true",3,"options"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Select disabilitata"),l(),i(2,"div",0)(3,"p",1),c(4,"it-select",2),l()()),n&2&&(s(4),p("options",o.selectOptions))},dependencies:[d],encapsulation:2});let t=e;return t})();var Z=(()=>{let e=class e{constructor(){this.selectedValue="",this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"}],this.selectGroups=[{label:"Gruppo 1",options:[{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"}]},{label:"Gruppo 2",options:[{value:3,text:"Opzione 3"},{value:4,text:"Opzione 4"}]}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-group-example"]],standalone:!1,decls:10,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","group-select","label","Etichetta",3,"ngModelChange","ngModel","groups","options"],[1,"example-selected-value"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Select con gruppi"),l(),i(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(u){return y(o.selectedValue,u)||(o.selectedValue=u),u}),l()(),i(5,"h4"),r(6,"Risultato"),l(),i(7,"div",1)(8,"div",3),r(9),l()()()),n&2&&(s(4),S("ngModel",o.selectedValue),p("groups",o.selectGroups)("options",o.selectOptions),s(5),v("Valore selezionato: ",o.selectedValue))},dependencies:[x,b,d],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.selectedValue=null,this.selectOptions=[{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-example"]],standalone:!1,decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","default-select","label","Etichetta","defaultOption","Seleziona un elemento",3,"ngModelChange","ngModel","options"],[3,"value"],[1,"example-selected-value"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Select"),l(),i(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(u){return y(o.selectedValue,u)||(o.selectedValue=u),u}),i(5,"option",3),r(6,"Opzione 1"),l()()(),i(7,"h4"),r(8,"Risultato"),l(),i(9,"div",1)(10,"div",4),r(11),l()()()),n&2&&(s(4),S("ngModel",o.selectedValue),p("options",o.selectOptions),s(),p("value",1),s(6),v("Valore selezionato: ",o.selectedValue))},dependencies:[B,U,x,b,d],encapsulation:2});let t=e;return t})();function se(t,e){if(t&1&&(i(0,"div",6),r(1),l()),t&2){let ie=D();s(),v("Salvato `",ie.savedValue,"`")}}var ee=(()=>{let e=class e{constructor(){this._fb=F(W),this.options=[{value:null,text:"Seleziona un elemento",selected:!0}],this.value="",this.savedValue=void 0,this.myForm=this._fb.group({select:[null,I.required]}),Array.from(Array(10).keys()).forEach(a=>{this.options.push({value:a,text:`Opzione ${a.toString()}`})})}save(a){this.savedValue=a.value.select}markAllAsTouched(){this.myForm.markAllAsTouched()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-formgroup-example"]],standalone:!1,decls:11,vars:4,consts:[[1,"bd-example"],[3,"formGroup"],["formControlName","select",3,"options"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"],[1,"mt-3"]],template:function(n,o){n&1&&(i(0,"h3"),r(1,"Interazione con Select dotato di validazione Model Driven"),l(),i(2,"div",0)(3,"form",1),c(4,"it-select",2),i(5,"div",3)(6,"button",4),O("click",function(){return o.save(o.myForm)}),r(7,"Salva"),l(),i(8,"button",5),O("click",function(){return o.markAllAsTouched()}),r(9,"Valida"),l()(),A(10,se,2,1,"div",6),l()()),n&2&&(s(3),p("formGroup",o.myForm),s(),p("options",o.options),s(2),p("disabled",!o.myForm.valid),s(4),G(o.savedValue?10:-1))},dependencies:[w,x,N,_,j,k,d],encapsulation:2});let t=e;return t})();var te=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-examples"]],standalone:!1,decls:8,vars:0,consts:[["html",`<h3>Select</h3>
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
  standalone: false,
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
  standalone: false,
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
  standalone: false,
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

    @if (savedValue) {
      <div class="mt-3">Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectControlOption } from 'design-angular-kit/interfaces/form';

@Component({
  selector: 'it-select-formgroup-example',
  templateUrl: './select-formgroup-example.component.html',
  standalone: false,
})
export class SelectFormgroupExampleComponent {
  private _fb = inject(FormBuilder);

  myForm: FormGroup;

  options: Array<SelectControlOption> = [{ value: null, text: 'Seleziona un elemento', selected: true }];

  constructor() {
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
}`]],template:function(n,o){n&1&&c(0,"it-select-example")(1,"it-source-display",0)(2,"it-select-disabled-example")(3,"it-source-display",1)(4,"it-select-group-example")(5,"it-source-display",2)(6,"it-select-formgroup-example")(7,"it-source-display",3)},dependencies:[q,X,Z,$,ee],encapsulation:2});let t=e;return t})();var ne=(()=>{let e=class e{constructor(){this.component=J.components.find(a=>a.name==="ItSelectComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-select-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,o){n&1&&(i(0,"h1",0),r(1,"Select"),l(),i(2,"p",1),r(3,"Il classico \u201Cmenu a tendina\u201D"),l(),c(4,"div",2),i(5,"it-tab-container")(6,"it-tab-item",3),c(7,"it-select-examples"),l(),i(8,"it-tab-item",4),c(9,"it-api-parameters",5),l()()),n&2&&(s(4),p("innerHTML",o.component.description,V),s(5),p("component",o.component))},dependencies:[K,H,L,te],encapsulation:2});let t=e;return t})();var ce=[{path:"",component:ne}],oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[z.forChild(ce),z]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[T,R,P,Q,oe]});let t=e;return t})();export{We as SelectModule};
