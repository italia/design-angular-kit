import{a as S,b as T,c as C,d as N}from"./chunk-ZWYEEAVU.js";import{la as x,ma as v}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{f as z,h as f}from"./chunk-F32MIGDQ.js";import"./chunk-66PP3R5H.js";import{Gb as d,Hb as o,Ib as n,Jb as s,Sa as u,V as r,Wa as c,fc as l,ib as a,jb as m}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["it-navscroll-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",'<it-navscroll [header]="header" [items]="items"></it-navscroll>',"typescript",`import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-default-example',
  templateUrl: './navscroll-default-example.component.html',
  standalone: false,
})
export class NavscrollDefaultExampleComponent {
  readonly header = 'Default example';
  readonly items = [
    {
      title: 'Prima Sezione',
      html: '<b>Testo prima sezione</b>',
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
      html: '<b>Testo prima sezione</b>',
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
}`]],template:function(t,p){t&1&&(o(0,"h3"),l(1,"Esempio di default"),n(),s(2,"it-source-display",0),o(3,"h3"),l(4,"Esempio con template personalizzato"),n(),s(5,"it-source-display",1))},dependencies:[S],encapsulation:2})}}return e})();var g=(()=>{class e{constructor(){this.component=T.components.find(i=>i.name==="ItNavscrollComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["it-navscroll-index"]],standalone:!1,decls:13,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["routerLink","/esempi/navscroll"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,p){t&1&&(o(0,"h1",0),l(1,"Navscroll"),n(),o(2,"p",1),l(3,"Componente che presenta liste di link con ancore a sezioni della pagina in cui \xE8 contenuto."),n(),s(4,"div",2),o(5,"p")(6,"a",3),l(7,"Esempio funzionante "),n()(),o(8,"it-tab-container")(9,"it-tab-item",4),s(10,"it-navscroll-examples"),n(),o(11,"it-tab-item",5),s(12,"it-api-parameters",6),n()()),t&2&&(c(4),d("innerHTML",p.component.description,u),c(8),d("component",p.component))},dependencies:[z,C,v,x,y],encapsulation:2})}}return e})();var M=[{path:"",component:g}],E=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=m({type:e})}static{this.\u0275inj=r({imports:[f.forChild(M),f]})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=m({type:e})}static{this.\u0275inj=r({imports:[E,N]})}}return e})();export{V as NavscrollModule};
