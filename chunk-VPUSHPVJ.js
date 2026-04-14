import{a as H,b as q,c as J,d as K}from"./chunk-ZWYEEAVU.js";import{P as I,Q as v,R as T,T as y,U as k,V as N,W as w,X as j,Y as B,ba as U,ca as R,da as W,la as P,ma as L,xa as c,y as A}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as O}from"./chunk-F32MIGDQ.js";import{m as D}from"./chunk-66PP3R5H.js";import{Ab as V,Bb as _,Gb as s,Hb as o,Ib as i,Jb as m,Sa as F,Ub as E,V as x,Wa as r,Wb as G,Z as z,fc as a,hc as f,ib as p,jb as S,jc as g,kc as h,lc as C}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var Q=(()=>{class e{constructor(){this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"},{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-disabled-example"]],standalone:!1,decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","disabled-select","label","Etichetta","disabled","true",3,"options"]],template:function(t,n){t&1&&(o(0,"h3"),a(1,"Select disabilitata"),i(),o(2,"div",0)(3,"p",1),m(4,"it-select",2),i()()),t&2&&(r(4),s("options",n.selectOptions))},dependencies:[c],encapsulation:2})}}return e})();var Y=(()=>{class e{constructor(){this.selectedValue="",this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"}],this.selectGroups=[{label:"Gruppo 1",options:[{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"}]},{label:"Gruppo 2",options:[{value:3,text:"Opzione 3"},{value:4,text:"Opzione 4"}]}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-group-example"]],standalone:!1,decls:10,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","group-select","label","Etichetta",3,"ngModelChange","ngModel","groups","options"],[1,"example-selected-value"]],template:function(t,n){t&1&&(o(0,"h3"),a(1,"Select con gruppi"),i(),o(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(d){return h(n.selectedValue,d)||(n.selectedValue=d),d}),i()(),o(5,"h4"),a(6,"Risultato"),i(),o(7,"div",1)(8,"div",3),a(9),i()()()),t&2&&(r(4),g("ngModel",n.selectedValue),s("groups",n.selectGroups)("options",n.selectOptions),r(5),f("Valore selezionato: ",n.selectedValue))},dependencies:[v,y,c],encapsulation:2})}}return e})();var Z=(()=>{class e{constructor(){this.selectedValue=null,this.selectOptions=[{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-example"]],standalone:!1,decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","default-select","label","Etichetta","defaultOption","Seleziona un elemento",3,"ngModelChange","ngModel","options"],[3,"value"],[1,"example-selected-value"]],template:function(t,n){t&1&&(o(0,"h3"),a(1,"Select"),i(),o(2,"div",0)(3,"p",1)(4,"it-select",2),C("ngModelChange",function(d){return h(n.selectedValue,d)||(n.selectedValue=d),d}),o(5,"option",3),a(6,"Opzione 1"),i()()(),o(7,"h4"),a(8,"Risultato"),i(),o(9,"div",1)(10,"div",4),a(11),i()()()),t&2&&(r(4),g("ngModel",n.selectedValue),s("options",n.selectOptions),r(),s("value",1),r(6),f("Valore selezionato: ",n.selectedValue))},dependencies:[j,B,v,y,c],encapsulation:2})}}return e})();function ae(e,me){if(e&1&&(o(0,"div",6),a(1),i()),e&2){let l=G();r(),f("Salvato `",l.savedValue,"`")}}var $=(()=>{class e{constructor(){this._fb=z(U),this.options=[{value:null,text:"Seleziona un elemento",selected:!0}],this.value="",this.savedValue=void 0,this.myForm=this._fb.group({select:[null,I.required]}),Array.from(Array(10).keys()).forEach(l=>{this.options.push({value:l,text:`Opzione ${l.toString()}`})})}save(l){this.savedValue=l.value.select}markAllAsTouched(){this.myForm.markAllAsTouched()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-formgroup-example"]],standalone:!1,decls:11,vars:4,consts:[[1,"bd-example"],[3,"formGroup"],["formControlName","select",3,"options"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"click","disabled"],["itButton","secondary","type","button",3,"click"],[1,"mt-3"]],template:function(t,n){t&1&&(o(0,"h3"),a(1,"Interazione con Select dotato di validazione Model Driven"),i(),o(2,"div",0)(3,"form",1),m(4,"it-select",2),o(5,"div",3)(6,"button",4),E("click",function(){return n.save(n.myForm)}),a(7,"Salva"),i(),o(8,"button",5),E("click",function(){return n.markAllAsTouched()}),a(9,"Valida"),i()(),V(10,ae,2,1,"div",6),i()()),t&2&&(r(3),s("formGroup",n.myForm),r(),s("options",n.options),r(2),s("disabled",!n.myForm.valid),r(4),_(n.savedValue?10:-1))},dependencies:[k,v,T,w,N,A,c],encapsulation:2})}}return e})();var ee=(()=>{class e{constructor(){}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-examples"]],standalone:!1,decls:8,vars:0,consts:[["html",`<h3>Select</h3>
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
}`]],template:function(t,n){t&1&&m(0,"it-select-example")(1,"it-source-display",0)(2,"it-select-disabled-example")(3,"it-source-display",1)(4,"it-select-group-example")(5,"it-source-display",2)(6,"it-select-formgroup-example")(7,"it-source-display",3)},dependencies:[H,Q,Y,Z,$],encapsulation:2})}}return e})();var te=(()=>{class e{constructor(){this.component=q.components.find(l=>l.name==="ItSelectComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["it-select-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,n){t&1&&(o(0,"h1",0),a(1,"Select"),i(),o(2,"p",1),a(3,"Il classico \u201Cmenu a tendina\u201D"),i(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-select-examples"),i(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),i()()),t&2&&(r(4),s("innerHTML",n.component.description,F),r(5),s("component",n.component))},dependencies:[J,L,P,ee],encapsulation:2})}}return e})();var pe=[{path:"",component:te}],ne=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=S({type:e})}static{this.\u0275inj=x({imports:[O.forChild(pe),O]})}}return e})();var Ue=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=S({type:e})}static{this.\u0275inj=x({imports:[D,W,R,K,ne]})}}return e})();export{Ue as SelectModule};
