import{a as S,b as P,c as h,d as z}from"./chunk-FNEUKG6X.js";import{Ma as b,ga as x,ha as y,t as C}from"./chunk-MCPDQGAC.js";import"./chunk-XZP45KYQ.js";import{m as E,o as g}from"./chunk-53YMBHPH.js";import{Cb as o,Db as t,Eb as a,Wb as i,Wc as v,Y as u,Za as m,fa as d,ga as f,qb as p}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var I=(()=>{let e=class e{constructor(){this.notFound=`import {ItErrorPageComponent} from 'design-angular-kit';

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
]`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["it-error-page-route-example"]],decls:28,vars:4,consts:[[1,"bd-example"],[1,"d-flex","justify-content-between","mb-3"],["itButton","primary","size","sm","routerLink","/error/not-found"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-3"],["itButton","primary","size","sm","routerLink","/error/forbidden"],["itButton","primary","size","sm","routerLink","/error/server-error"],[1,"mt-5"],[1,"mb-3"]],template:function(n,l){n&1&&(o(0,"h3"),i(1,"Router Module"),t(),o(2,"p"),i(3,"Puoi utilizzare la pagina d'errore direttamente sul tuo RouterModule (ad esempio app-routing.module.ts)"),t(),o(4,"div",0)(5,"div",1)(6,"h4"),i(7,"404 - Not Found"),t(),o(8,"a",2),i(9,"Prova"),t()(),a(10,"it-source-display",3),o(11,"div",4)(12,"h4"),i(13,"403 - Forbidden"),t(),o(14,"a",5),i(15,"Prova"),t()(),a(16,"it-source-display",3),o(17,"div",4)(18,"h4"),i(19,"500 - Internal Server Error"),t(),o(20,"a",6),i(21,"Prova"),t()(),a(22,"it-source-display",3),o(23,"h4",7),i(24,"Personalizzato"),t(),o(25,"p",8),i(26,"Puoi passare nella route gli attributi per personalizzare la pagina"),t(),a(27,"it-source-display",3),t()),n&2&&(m(10),p("typescript",l.notFound),m(6),p("typescript",l.forbidden),m(6),p("typescript",l.internalServerError),m(5),p("typescript",l.custom))},dependencies:[h,C,E],encapsulation:2});let r=e;return r})();var w=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["it-error-page-component-example"]],decls:27,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col-6"],[3,"errorCode"],[1,"row","mt-5"],["showBackButton","true","showHomeButton","false","showErrorCode","true","errorTitle","Servizio non disponibile","errorDescription","Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile",3,"errorCode"]],template:function(n,l){n&1&&(o(0,"h3"),i(1,"Componente"),t(),o(2,"p"),i(3,"Puoi utilizzare la pagina d'errore come un classico componente"),t(),o(4,"div",0)(5,"div",1)(6,"div",2)(7,"h4"),i(8,"404 - Not Found"),t(),a(9,"hr")(10,"it-error-page",3),t(),o(11,"div",2)(12,"h4"),i(13,"403 - Forbidden"),t(),a(14,"hr")(15,"it-error-page",3),t()(),o(16,"div",4)(17,"div",2)(18,"h4"),i(19,"500 - Internal Server Error"),t(),a(20,"hr")(21,"it-error-page",3),t(),o(22,"div",2)(23,"h4"),i(24,"Personalizzato"),t(),a(25,"hr")(26,"it-error-page",5),t()()()),n&2&&(m(10),p("errorCode",404),m(5),p("errorCode",403),m(6),p("errorCode",500),m(5),p("errorCode",503))},dependencies:[b],encapsulation:2});let r=e;return r})();var M=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["it-error-page-examples"]],decls:3,vars:0,consts:[["html",`<h3>Componente</h3>
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
})
export class ErrorPageComponentExampleComponent {}`]],template:function(n,l){n&1&&a(0,"it-error-page-route-example")(1,"it-error-page-component-example")(2,"it-source-display",0)},dependencies:[h,I,w],encapsulation:2});let r=e;return r})();var D=(()=>{let e=class e{constructor(){this.component=S.components.find(s=>s.name==="ItErrorPageComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["it-error-page-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,l){n&1&&(o(0,"h1",0),i(1,"Error page"),t(),o(2,"p",1),i(3,"Una semplice pagina di errore basata sullo status code della richiesta"),t(),o(4,"it-tab-container")(5,"it-tab-item",2),a(6,"it-error-page-examples"),t(),o(7,"it-tab-item",3)(8,"h3"),i(9,"ItErrorPageComponent"),t(),a(10,"it-api-parameters",4),t()()),n&2&&(m(10),p("component",l.component))},dependencies:[P,y,x,M],encapsulation:2});let r=e;return r})();var N=[{path:"",component:D}],F=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[g.forChild(N),g]});let r=e;return r})();var ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[v,z,F]});let r=e;return r})();export{ne as ErrorPageModule};
