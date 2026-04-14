import{a as S,b as C,c as f,d as g}from"./chunk-ZWYEEAVU.js";import{la as O,ma as D,qa as M}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as E}from"./chunk-F32MIGDQ.js";import{m as I}from"./chunk-66PP3R5H.js";import{Gb as d,Hb as n,Ib as o,Jb as a,Sa as T,V as p,Wa as r,fc as s,ib as l,jb as c}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var L=(()=>{class e{constructor(){this.timelineElements=[{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"MAGGIO 2024",type:"evidence"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,4,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"GIUGNO 2024",type:"evidence"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"LUGLIO 2024",type:"evidence"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,6,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"AGOSTO 2024",type:"now"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"SETTEMBRE 2024"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,8,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"OTTOBRE 2024"}},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",signature:"di Federico De Paolis",pin:{text:"NOVEMBRE 2024"},category:{title:"Categoria",link:"#"},eventDate:new Date(2024,10,10)},{title:"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",pin:{text:"DICEMBRE 2024"}}],this.defaultDateFormat="dd/MM/yyyy"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-timeline-default-example"]],standalone:!1,decls:5,vars:2,consts:[[1,"bd-example"],[1,"example-section"],[3,"timelineElements","dateFormat"]],template:function(t,m){t&1&&(n(0,"h3"),s(1,"Esempi"),o(),n(2,"div",0)(3,"div",1),a(4,"it-timeline",2),o()()),t&2&&(r(4),d("timelineElements",m.timelineElements)("dateFormat",m.defaultDateFormat))},dependencies:[M],encapsulation:2})}}return e})();var R=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-timeline-examples"]],standalone:!1,decls:2,vars:0,consts:[["html",`<h3>Esempi</h3>

<div class="bd-example">
  <div class="example-section">
    <it-timeline [timelineElements]="timelineElements" [dateFormat]="defaultDateFormat" />
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { TimelineElement } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-timeline-default-example',
  templateUrl: './timeline-default-example.component.html',
  standalone: false,
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
}`]],template:function(t,m){t&1&&a(0,"it-timeline-default-example")(1,"it-source-display",0)},dependencies:[S,L],encapsulation:2})}}return e})();var x=(()=>{class e{constructor(){this.component=C.components.find(i=>i.name==="ItTimelineComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-timeline-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,m){t&1&&(n(0,"h1",0),s(1,"Timeline"),o(),n(2,"p",1),s(3,"Componente per la visualizzazione cronologica di eventi."),o(),a(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),a(7,"it-timeline-examples"),o(),n(8,"it-tab-item",4),a(9,"it-api-parameters",5),o()()),t&2&&(r(4),d("innerHTML",m.component.description,T),r(5),d("component",m.component))},dependencies:[f,D,O,R],encapsulation:2})}}return e})();var N=[{path:"",component:x}],P=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=p({imports:[E.forChild(N),E]})}}return e})();var Y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=p({imports:[I,g,P]})}}return e})();export{Y as TimelineModule};
