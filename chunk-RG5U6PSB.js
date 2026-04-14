import{a as _,b as Q,c as z,d as k}from"./chunk-ZWYEEAVU.js";import{i as p,la as I,ma as D,y as T}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as C}from"./chunk-F32MIGDQ.js";import{m as M}from"./chunk-66PP3R5H.js";import{Gb as f,Hb as n,Ib as i,Jb as s,Nb as b,Ob as S,Qb as y,Sa as A,Ub as x,V as c,Wa as m,bc as w,ca as g,da as h,fc as e,hc as v,ib as a,jb as u}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var q=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["it-alert-color-example"]],standalone:!1,decls:36,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","primary"],["color","success"],["color","warning"],["color","danger"],[1,"mt-5"],["href","#",1,"alert-link"]],template:function(o,r){o&1&&(n(0,"h3"),e(1,"Esempi"),i(),n(2,"div",0)(3,"div",1)(4,"it-alert",2),e(5,' Questo \xE8 un alert di tipo "'),n(6,"b"),e(7,"primary"),i(),e(8,'". '),i(),n(9,"it-alert"),e(10,' Questo \xE8 un alert di tipo "'),n(11,"b"),e(12,"info"),i(),e(13,'". '),i(),n(14,"it-alert",3),e(15,' Questo \xE8 un alert di tipo "'),n(16,"b"),e(17,"success"),i(),e(18,'". '),i(),n(19,"it-alert",4),e(20,' Questo \xE8 un alert di tipo "'),n(21,"b"),e(22,"warning"),i(),e(23,'". '),i(),n(24,"it-alert",5),e(25,' Questo \xE8 un alert di tipo "'),n(26,"b"),e(27,"danger"),i(),e(28,'". '),i(),n(29,"h3",6),e(30,"Link evidenziato"),i(),n(31,"it-alert",5),e(32," Questo \xE8 un alert con un esempio di "),n(33,"a",7),e(34,"link"),i(),e(35," evidenziato. "),i()()())},dependencies:[p],encapsulation:2})}}return t})();var j=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["it-alert-additional-content-example"]],standalone:!1,decls:12,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","success"],["heading",""],[1,"mb-0"]],template:function(o,r){o&1&&(n(0,"h3"),e(1,"Contenuto aggiuntivo"),i(),n(2,"div",0)(3,"div",1)(4,"it-alert",2),b(5,3),e(6,"Avviso di successo!"),S(),n(7,"p"),e(8," Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xE0 pi\xF9 lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto. "),i(),s(9,"hr"),n(10,"p",4),e(11,"Quando necessario, assicurarti di inserire le utilit\xE0 di margine per mantenere gli spazi equilibrati."),i()()()())},dependencies:[p],encapsulation:2})}}return t})();var L=(()=>{class t{onClose(){this.closeTime=new Date().toISOString()}onClosed(){this.closedTime=new Date().toISOString()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["it-alert-closing-example"]],standalone:!1,decls:22,vars:2,consts:[["alert","itAlert"],[1,"bd-example"],[1,"example-section"],["color","warning","dismissible","true",3,"closeEvent","closedEvent"],[1,"my-4"],["color","warning"],["itButton","primary","type","button",3,"click"]],template:function(o,r){if(o&1){let H=y();n(0,"h3"),e(1,"Chiusura"),i(),n(2,"div",1)(3,"div",2)(4,"it-alert",3),x("closeEvent",function(){return r.onClose()})("closedEvent",function(){return r.onClosed()}),n(5,"strong"),e(6,"Attenzione"),i(),e(7," Alcuni campi inseriti sono da controllare. "),i(),n(8,"div",4)(9,"div"),e(10),i(),n(11,"div"),e(12),i()(),n(13,"h3"),e(14,"Chiusura manuale"),i(),n(15,"it-alert",5,0)(17,"strong"),e(18,"Attenzione"),i(),e(19," Alcuni campi inseriti sono da controllare. "),i(),n(20,"button",6),x("click",function(){g(H);let P=w(16);return h(P.close())}),e(21,"Chiudi alert"),i()()()}o&2&&(m(10),v("Emissione dell'evento close = ",r.closeTime),m(2),v("Emissione dell'evento closed = ",r.closedTime))},dependencies:[p,T],encapsulation:2})}}return t})();var N=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["it-alert-examples"]],standalone:!1,decls:6,vars:0,consts:[["html",`<h3>Esempi</h3>

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
}`]],template:function(o,r){o&1&&s(0,"it-alert-color-example")(1,"it-source-display",0)(2,"it-alert-additional-content-example")(3,"it-source-display",1)(4,"it-alert-closing-example")(5,"it-source-display",2)},dependencies:[_,q,j,L],encapsulation:2})}}return t})();var O=(()=>{class t{constructor(){this.component=Q.components.find(l=>l.name==="ItAlertComponent")}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["it-alert-index"]],standalone:!1,decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,r){o&1&&(n(0,"h1",0),e(1,"Alert"),i(),n(2,"p",1),e(3,"Puoi fornire dei feedback all\u2019utente tramite messaggi di avviso."),i(),s(4,"div",2),n(5,"it-tab-container")(6,"it-tab-item",3),s(7,"it-alert-examples"),i(),n(8,"it-tab-item",4),s(9,"it-api-parameters",5),i()()),o&2&&(m(4),f("innerHTML",r.component.description,A),m(5),f("component",r.component))},dependencies:[z,D,I,N],encapsulation:2})}}return t})();var J=[{path:"",component:O}],B=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=u({type:t})}static{this.\u0275inj=c({imports:[C.forChild(J),C]})}}return t})();var Ce=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=u({type:t})}static{this.\u0275inj=c({imports:[M,k,B]})}}return t})();export{Ce as AlertModule};
