import{a as v,b as C,c as y,d as g}from"./chunk-XPAZYYAC.js";import{ga as S,ha as T}from"./chunk-EZQPAPWN.js";import"./chunk-XZP45KYQ.js";import{m as u,o as f}from"./chunk-NU7RFJ6M.js";import{Cb as o,Db as i,Eb as l,Ua as x,Wb as r,Y as a,Za as d,fa as m,ga as p,qb as h}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var E=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-navscroll-examples"]],decls:6,vars:0,consts:[["html",'<it-navscroll [header]="header" [items]="items"></it-navscroll>',"typescript",`import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-default-example',
  templateUrl: './navscroll-default-example.component.html',
})
export class NavscrollDefaultExampleComponent {
  readonly header = 'Default example';
  readonly items = [
    {
      title: 'Prima Sezione',
      text: 'Testo prima sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          href: '#',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1',
              href: '#',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1',
                  href: '#',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2',
              href: '#',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          href: '#',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          href: '#',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}`],["html",`<ng-template #contentTemplate>
  <h1>This is a custom template</h1>
  <p>All the paragraphs will be displayed here</p>
</ng-template>

<it-navscroll [header]="header" [items]="items" [pageSectionsTemplate]="contentTemplate"></it-navscroll>`,"typescript",`import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-custom-template-example',
  templateUrl: './navscroll-custom-template-example.component.html',
})
export class NavscrollCustomTemplateExampleComponent {
  readonly header = 'Custom template example';
  readonly items = [
    {
      title: 'Prima Sezione',
      text: 'Testo prima sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          href: '#',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1',
              href: '#',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1',
                  href: '#',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2',
              href: '#',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          href: '#',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          href: '#',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}`]],template:function(n,c){n&1&&(o(0,"h3"),r(1,"Esempio di default"),i(),l(2,"it-source-display",0),o(3,"h3"),r(4,"Esempio con template personalizzato"),i(),l(5,"it-source-display",1))},dependencies:[y]});let t=e;return t})();var N=(()=>{let e=class e{constructor(){this.component=v.components.find(s=>s.name==="ItNavscrollComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-navscroll-index"]],decls:13,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["routerLink","/esempi/navscroll"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,c){n&1&&(o(0,"h1",0),r(1,"Navscroll"),i(),o(2,"p",1),r(3,"Componente che presenta liste di link con ancore a sezioni della pagina in cui \xE8 contenuto."),i(),l(4,"div",2),o(5,"p")(6,"a",3),r(7,"Esempio funzionante "),i()(),o(8,"it-tab-container")(9,"it-tab-item",4),l(10,"it-navscroll-examples"),i(),o(11,"it-tab-item",5),l(12,"it-api-parameters",6),i()()),n&2&&(d(4),h("innerHTML",c.component.description,x),d(8),h("component",c.component))},dependencies:[u,C,T,S,E],encapsulation:2});let t=e;return t})();var D=[{path:"",component:N}],I=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=a({imports:[f.forChild(D),f]});let t=e;return t})();var W=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=a({imports:[I,g]});let t=e;return t})();export{W as NavscrollModule};
