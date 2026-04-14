import{a as f,b as P,c as b,d as S}from"./chunk-ZWYEEAVU.js";import{Ra as y,la as v,ma as x,y as C}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{f as h,h as g}from"./chunk-F32MIGDQ.js";import{m as E}from"./chunk-66PP3R5H.js";import{Gb as m,Hb as r,Ib as t,Jb as i,V as c,Wa as a,fc as n,ib as l,jb as u}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class e{constructor(){this.notFound=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/not-found', component: ItErrorPageComponent, data: { errorCode: 404 } },
   { path: '**', redirectTo: 'error/not-found'  }
]`,this.forbidden=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/forbidden', component: ItErrorPageComponent, data: { errorCode: 403 } },
]`,this.internalServerError=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/server-error', component: ItErrorPageComponent, data: { errorCode: 500 } },
]`,this.custom=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { 
     path: 'error/custom', 
     component: ItErrorPageComponent,
     data: {
       errorCode: 503, // Opzionale 
       showErrorCode: true, // Opzionale (utile per gli errori 404, 403, 500) 
       errorTitle: "Servizio non disponibile", // Opzionale (puoi usare anche chiavi i18n) 
       errorDescription: "Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile", // Opzionale (puoi usare anche chiavi i18n) 
       showBackButton: true, // Opzionale 
       showHomeButton: false, // Opzionale 
     } 
   }
]`}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-error-page-route-example"]],standalone:!1,decls:28,vars:4,consts:[[1,"bd-example"],[1,"d-flex","justify-content-between","mb-3"],["itButton","primary","size","sm","routerLink","/error/not-found"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-3"],["itButton","primary","size","sm","routerLink","/error/forbidden"],["itButton","primary","size","sm","routerLink","/error/server-error"],[1,"mt-5"],[1,"mb-3"]],template:function(o,s){o&1&&(r(0,"h3"),n(1,"Router Module"),t(),r(2,"p"),n(3,"Puoi utilizzare la pagina d'errore direttamente sul tuo RouterModule (ad esempio app-routing.module.ts)"),t(),r(4,"div",0)(5,"div",1)(6,"h4"),n(7,"404 - Not Found"),t(),r(8,"a",2),n(9,"Prova"),t()(),i(10,"it-source-display",3),r(11,"div",4)(12,"h4"),n(13,"403 - Forbidden"),t(),r(14,"a",5),n(15,"Prova"),t()(),i(16,"it-source-display",3),r(17,"div",4)(18,"h4"),n(19,"500 - Internal Server Error"),t(),r(20,"a",6),n(21,"Prova"),t()(),i(22,"it-source-display",3),r(23,"h4",7),n(24,"Personalizzato"),t(),r(25,"p",8),n(26,"Puoi passare nella route gli attributi per personalizzare la pagina"),t(),i(27,"it-source-display",3),t()),o&2&&(a(10),m("typescript",s.notFound),a(6),m("typescript",s.forbidden),a(6),m("typescript",s.internalServerError),a(5),m("typescript",s.custom))},dependencies:[f,C,h],encapsulation:2})}}return e})();var I=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-error-page-component-example"]],standalone:!1,decls:27,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col-6"],[3,"errorCode"],[1,"row","mt-5"],["showBackButton","true","showHomeButton","false","showErrorCode","true","errorTitle","Servizio non disponibile","errorDescription","Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile",3,"errorCode"]],template:function(o,s){o&1&&(r(0,"h3"),n(1,"Componente"),t(),r(2,"p"),n(3,"Puoi utilizzare la pagina d'errore come un classico componente"),t(),r(4,"div",0)(5,"div",1)(6,"div",2)(7,"h4"),n(8,"404 - Not Found"),t(),i(9,"hr")(10,"it-error-page",3),t(),r(11,"div",2)(12,"h4"),n(13,"403 - Forbidden"),t(),i(14,"hr")(15,"it-error-page",3),t()(),r(16,"div",4)(17,"div",2)(18,"h4"),n(19,"500 - Internal Server Error"),t(),i(20,"hr")(21,"it-error-page",3),t(),r(22,"div",2)(23,"h4"),n(24,"Personalizzato"),t(),i(25,"hr")(26,"it-error-page",5),t()()()),o&2&&(a(10),m("errorCode",404),a(5),m("errorCode",403),a(6),m("errorCode",500),a(5),m("errorCode",503))},dependencies:[y],encapsulation:2})}}return e})();var M=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-error-page-examples"]],standalone:!1,decls:3,vars:0,consts:[["html",`<h3>Componente</h3>
<p>Puoi utilizzare la pagina d'errore come un classico componente</p>

<div class="bd-example">
  <div class="row">
    <div class="col-6">
      <h4>404 - Not Found</h4>
      <hr />
      <it-error-page [errorCode]="404"></it-error-page>
    </div>

    <div class="col-6">
      <h4>403 - Forbidden</h4>
      <hr />
      <it-error-page [errorCode]="403"></it-error-page>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-6">
      <h4>500 - Internal Server Error</h4>
      <hr />
      <it-error-page [errorCode]="500"></it-error-page>
    </div>

    <div class="col-6">
      <h4>Personalizzato</h4>
      <hr />
      <it-error-page
        showBackButton="true"
        showHomeButton="false"
        [errorCode]="503"
        showErrorCode="true"
        errorTitle="Servizio non disponibile"
        errorDescription="Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile"></it-error-page>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-error-page-component-example',
  templateUrl: './error-page-component-example.component.html',
  standalone: false,
})
export class ErrorPageComponentExampleComponent {}`]],template:function(o,s){o&1&&i(0,"it-error-page-route-example")(1,"it-error-page-component-example")(2,"it-source-display",0)},dependencies:[f,z,I],encapsulation:2})}}return e})();var w=(()=>{class e{constructor(){this.component=P.components.find(p=>p.name==="ItErrorPageComponent")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=l({type:e,selectors:[["it-error-page-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,s){o&1&&(r(0,"h1",0),n(1,"Error page"),t(),r(2,"p",1),n(3,"Una semplice pagina di errore basata sullo status code della richiesta"),t(),r(4,"it-tab-container")(5,"it-tab-item",2),i(6,"it-error-page-examples"),t(),r(7,"it-tab-item",3)(8,"h3"),n(9,"ItErrorPageComponent"),t(),i(10,"it-api-parameters",4),t()()),o&2&&(a(10),m("component",s.component))},dependencies:[b,x,v,M],encapsulation:2})}}return e})();var T=[{path:"",component:w}],D=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[g.forChild(T),g]})}}return e})();var oe=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[E,S,D]})}}return e})();export{oe as ErrorPageModule};
