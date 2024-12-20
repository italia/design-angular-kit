import{a as C,b as f,c as g,d as L}from"./chunk-XXISVWHV.js";import{ga as D,ha as S,la as M}from"./chunk-45V3EX6C.js";import"./chunk-XZP45KYQ.js";import{o as I}from"./chunk-NU7RFJ6M.js";import{Cb as o,Db as a,Eb as m,Ua as T,Wb as p,Wc as O,Y as c,Za as d,fa as l,ga as u,qb as s}from"./chunk-FAPGHTH4.js";import"./chunk-PAGS527E.js";var R=(()=>{let e=class e{constructor(){this.timelineElements=[{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"MAGGIO 2024",type:"evidence"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,4,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"GIUGNO 2024",type:"evidence"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"LUGLIO 2024",type:"evidence"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,6,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"AGOSTO 2024",type:"now"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"SETTEMBRE 2024"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,8,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"OTTOBRE 2024"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"NOVEMBRE 2024"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,10,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"DICEMBRE 2024"}}],this.defaultDateFormat="dd/MM/yyyy"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["it-timeline-default-example"]],decls:5,vars:2,consts:[[1,"bd-example"],[1,"example-section"],[3,"timelineElements","dateFormat"]],template:function(i,r){i&1&&(o(0,"h3"),p(1,"Esempi"),a(),o(2,"div",0)(3,"div",1),m(4,"it-timeline",2),a()()),i&2&&(d(4),s("timelineElements",r.timelineElements)("dateFormat",r.defaultDateFormat))},dependencies:[M],encapsulation:2});let t=e;return t})();var x=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["it-timeline-examples"]],decls:2,vars:0,consts:[["html",`<h3>Esempi</h3>

<div class="bd-example">
  <div class="example-section">
    <it-timeline [timelineElements]="timelineElements" [dateFormat]="defaultDateFormat" />
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { TimelineElement } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-timeline-default-example',
  templateUrl: './timeline-default-example.component.html',
})
export class TimelineDefaultExampleComponent {
  timelineElements: TimelineElement[] = [
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'MAGGIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 4, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'GIUGNO 2024',
        type: 'evidence',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'LUGLIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 6, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'AGOSTO 2024',
        type: 'now',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'SETTEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 8, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'OTTOBRE 2024',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'NOVEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 10, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'DICEMBRE 2024',
      },
    },
  ];
  defaultDateFormat: string = 'dd/MM/yyyy';
}`]],template:function(i,r){i&1&&m(0,"it-timeline-default-example")(1,"it-source-display",0)},dependencies:[g,R],encapsulation:2});let t=e;return t})();var P=(()=>{let e=class e{constructor(){this.component=C.components.find(n=>n.name==="ItTimelineComponent")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["it-timeline-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(i,r){i&1&&(o(0,"h1",0),p(1,"Timeline"),a(),o(2,"p",1),p(3,"Componente per la visualizzazione cronologica di eventi."),a(),m(4,"div",2),o(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-timeline-examples"),a(),o(8,"it-tab-item",4),m(9,"it-api-parameters",5),a()()),i&2&&(d(4),s("innerHTML",r.component.description,T),d(5),s("component",r.component))},dependencies:[f,S,D,x],encapsulation:2});let t=e;return t})();var v=[{path:"",component:P}],U=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[I.forChild(v),I]});let t=e;return t})();var Z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[O,L,U]});let t=e;return t})();export{Z as TimelineModule};
