import{a as k,b as F,c as V,d as q}from"./chunk-CQV3UQHT.js";import{i as c,la as Q,ma as z,y as M}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as b}from"./chunk-DVW5EFKD.js";import{m as D}from"./chunk-I647ZKKI.js";import{Hb as E,Ib as n,Jb as i,Kb as m,Lb as A,Mb as w,Ob as T,Sa as y,Sb as C,Wa as p,Y as u,_b as I,cc as t,ec as h,fb as s,ga as f,gb as x,ha as v}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var L=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["it-alert-color-example"]],standalone:!1,decls:36,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","primary"],["color","success"],["color","warning"],["color","danger"],[1,"mt-5"],["href","#",1,"alert-link"]],template:function(r,a){r&1&&(n(0,"h3"),t(1,"Esempi"),i(),n(2,"div",0)(3,"div",1)(4,"it-alert",2),t(5,' Questo \xE8 un alert di tipo "'),n(6,"b"),t(7,"primary"),i(),t(8,'". '),i(),n(9,"it-alert"),t(10,' Questo \xE8 un alert di tipo "'),n(11,"b"),t(12,"info"),i(),t(13,'". '),i(),n(14,"it-alert",3),t(15,' Questo \xE8 un alert di tipo "'),n(16,"b"),t(17,"success"),i(),t(18,'". '),i(),n(19,"it-alert",4),t(20,' Questo \xE8 un alert di tipo "'),n(21,"b"),t(22,"warning"),i(),t(23,'". '),i(),n(24,"it-alert",5),t(25,' Questo \xE8 un alert di tipo "'),n(26,"b"),t(27,"danger"),i(),t(28,'". '),i(),n(29,"h3",6),t(30,"Link evidenziato"),i(),n(31,"it-alert",5),t(32," Questo \xE8 un alert con un esempio di "),n(33,"a",7),t(34,"link"),i(),t(35," evidenziato. "),i()()())},dependencies:[c],encapsulation:2});let o=e;return o})();var N=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["it-alert-additional-content-example"]],standalone:!1,decls:12,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","success"],["heading",""],[1,"mb-0"]],template:function(r,a){r&1&&(n(0,"h3"),t(1,"Contenuto aggiuntivo"),i(),n(2,"div",0)(3,"div",1)(4,"it-alert",2),A(5,3),t(6,"Avviso di successo!"),w(),n(7,"p"),t(8," Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xE0 pi\xF9 lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto. "),i(),m(9,"hr"),n(10,"p",4),t(11,"Quando necessario, assicurarti di inserire le utilit\xE0 di margine per mantenere gli spazi equilibrati."),i()()()())},dependencies:[c],encapsulation:2});let o=e;return o})();var O=(()=>{let e=class e{onClose(){this.closeTime=new Date().toISOString()}onClosed(){this.closedTime=new Date().toISOString()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["it-alert-closing-example"]],standalone:!1,decls:22,vars:2,consts:[["alert","itAlert"],[1,"bd-example"],[1,"example-section"],["color","warning","dismissible","true",3,"closeEvent","closedEvent"],[1,"my-4"],["color","warning"],["itButton","primary","type","button",3,"click"]],template:function(r,a){if(r&1){let g=T();n(0,"h3"),t(1,"Chiusura"),i(),n(2,"div",1)(3,"div",2)(4,"it-alert",3),C("closeEvent",function(){return f(g),v(a.onClose())})("closedEvent",function(){return f(g),v(a.onClosed())}),n(5,"strong"),t(6,"Attenzione"),i(),t(7," Alcuni campi inseriti sono da controllare. "),i(),n(8,"div",4)(9,"div"),t(10),i(),n(11,"div"),t(12),i()(),n(13,"h3"),t(14,"Chiusura manuale"),i(),n(15,"it-alert",5,0)(17,"strong"),t(18,"Attenzione"),i(),t(19," Alcuni campi inseriti sono da controllare. "),i(),n(20,"button",6),C("click",function(){f(g);let U=I(16);return v(U.close())}),t(21,"Chiudi alert"),i()()()}r&2&&(p(10),h("Emissione dell'evento close = ",a.closeTime),p(2),h("Emissione dell'evento closed = ",a.closedTime))},dependencies:[c,M],encapsulation:2});let o=e;return o})();var B=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["it-alert-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Esempi</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="primary"> Questo \xE8 un alert di tipo "<b>primary</b>". </it-alert>

    <it-alert> Questo \xE8 un alert di tipo "<b>info</b>". </it-alert>

    <it-alert color="success"> Questo \xE8 un alert di tipo "<b>success</b>". </it-alert>

    <it-alert color="warning"> Questo \xE8 un alert di tipo "<b>warning</b>". </it-alert>

    <it-alert color="danger"> Questo \xE8 un alert di tipo "<b>danger</b>". </it-alert>

    <h3 class="mt-5">Link evidenziato</h3>

    <it-alert color="danger"> Questo \xE8 un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato. </it-alert>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-alert-color-example',
  templateUrl: './alert-color-example.component.html',
  standalone: false,
})
export class AlertColorExampleComponent {}`],["html",`<h3>Contenuto aggiuntivo</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="success">
      <ng-container heading>Avviso di successo!</ng-container>

      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xE0 pi\xF9 lungo in modo da poter vedere come
        funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p class="mb-0">Quando necessario, assicurarti di inserire le utilit\xE0 di margine per mantenere gli spazi equilibrati.</p>
    </it-alert>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-alert-additional-content-example',
  templateUrl: './alert-additional-content-example.component.html',
  standalone: false,
})
export class AlertAdditionalContentExampleComponent {}`],["html",`<h3>Chiusura</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="warning" dismissible="true" (closeEvent)="onClose()" (closedEvent)="onClosed()">
      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    </it-alert>

    <div class="my-4">
      <div>Emissione dell'evento close = /{/{ closeTime /}/}</div>

      <div>Emissione dell'evento closed = /{/{ closedTime /}/}</div>
    </div>

    <h3>Chiusura manuale</h3>

    <it-alert color="warning" #alert="itAlert"> <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare. </it-alert>

    <button itButton="primary" type="button" (click)="alert.close()">Chiudi alert</button>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-alert-closing-example',
  templateUrl: './alert-closing-example.component.html',
  standalone: false,
})
export class AlertClosingExampleComponent {
  closeTime?: string;
  closedTime?: string;

  onClose(): void {
    this.closeTime = new Date().toISOString();
  }

  onClosed(): void {
    this.closedTime = new Date().toISOString();
  }
}`]],template:function(r,a){r&1&&m(0,"it-alert-color-example")(1,"it-source-display",0)(2,"it-alert-additional-content-example")(3,"it-source-display",1)(4,"it-alert-closing-example")(5,"it-source-display",2)},dependencies:[k,L,N,O],encapsulation:2});let o=e;return o})();var H=(()=>{let e=class e{constructor(){this.component=F.components.find(l=>l.name==="ItAlertComponent")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["it-alert-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,a){r&1&&(n(0,"h1",0),t(1,"Alert"),i(),n(2,"p",1),t(3,"Puoi fornire dei feedback all\u2019utente tramite messaggi di avviso."),i(),m(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),m(7,"it-alert-examples"),i(),n(8,"it-tab-item",4),m(9,"it-api-parameters",5),i()()),r&2&&(p(4),E("innerHTML",a.component.description,y),p(5),E("component",a.component))},dependencies:[V,z,Q,B],encapsulation:2});let o=e;return o})();var R=[{path:"",component:H}],P=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=u({imports:[b.forChild(R),b]});let o=e;return o})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=u({imports:[D,q,P]});let o=e;return o})();export{Ee as AlertModule};
