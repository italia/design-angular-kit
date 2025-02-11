import{a as x,b as O,c as B,d as R}from"./chunk-ZDM52FTL.js";import{G as I,H as S,I as N,J as D,L as w,O as E,Z as z,aa as T,ga as j,ha as F,na as W,pa as P,t as _}from"./chunk-TYHSE32C.js";import"./chunk-XZP45KYQ.js";import{o as k}from"./chunk-53YMBHPH.js";import{$b as c,Cb as e,Db as n,Eb as g,Kb as h,Wb as r,Wc as L,Y as C,Za as a,_a as b,_b as p,ac as f,fa as y,ga as M,qb as s}from"./chunk-Y6EHUKAP.js";import"./chunk-JNJ3D7EP.js";var H=(()=>{let o=class o{get NotificationPosition(){return S}get NotificationType(){return I}constructor(u){this.notificationService=u,this.withText=!0,this.type=I.Standard,this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}showNotification(){this.notificationService.addNotification({type:this.type,title:"Titolo Notifica",message:this.withText&&this.text,dismissible:this.dismissible&&this.dismissible==="true",position:this.position,duration:this.duration})}};o.\u0275fac=function(d){return new(d||o)(b(N))},o.\u0275cmp=y({type:o,selectors:[["it-notifications-example"]],decls:35,vars:27,consts:[[1,"bd-example"],["itButton","primary","size","sm",3,"click"],[1,"row","mt-4"],[1,"form-check","col-3"],["label","Con testo",3,"ngModelChange","ngModel"],["name","notification-dismissible","label","Eliminabile default",3,"ngModelChange","value","ngModel"],["name","notification-dismissible","value","true","label","Eliminabile",3,"ngModelChange","ngModel"],["name","notification-dismissible","value","false","label","Non eliminabile",3,"ngModelChange","ngModel"],["name","notification-type","label","Standard",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Successo",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Errore",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Precauzione",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Info",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Default",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Top",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Bottom",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Left",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Right",3,"ngModelChange","value","ngModel"],["type","number","placeholder","Default",3,"ngModelChange","min","ngModel"]],template:function(d,i){d&1&&(e(0,"h3"),r(1,"Notifica con opzioni custom"),n(),e(2,"div",0)(3,"button",1),h("click",function(){return i.showNotification()}),r(4,"Notifica"),n(),e(5,"div",2)(6,"div",3)(7,"h5"),r(8,"Opzioni"),n(),e(9,"it-checkbox",4),f("ngModelChange",function(t){return c(i.withText,t)||(i.withText=t),t}),n(),e(10,"it-radio-button",5),f("ngModelChange",function(t){return c(i.dismissible,t)||(i.dismissible=t),t}),n(),e(11,"it-radio-button",6),f("ngModelChange",function(t){return c(i.dismissible,t)||(i.dismissible=t),t}),n(),e(12,"it-radio-button",7),f("ngModelChange",function(t){return c(i.dismissible,t)||(i.dismissible=t),t}),n()(),e(13,"div",3)(14,"h5"),r(15,"Tipo"),n(),e(16,"it-radio-button",8),f("ngModelChange",function(t){return c(i.type,t)||(i.type=t),t}),n(),e(17,"it-radio-button",9),f("ngModelChange",function(t){return c(i.type,t)||(i.type=t),t}),n(),e(18,"it-radio-button",10),f("ngModelChange",function(t){return c(i.type,t)||(i.type=t),t}),n(),e(19,"it-radio-button",11),f("ngModelChange",function(t){return c(i.type,t)||(i.type=t),t}),n(),e(20,"it-radio-button",12),f("ngModelChange",function(t){return c(i.type,t)||(i.type=t),t}),n()(),e(21,"div",3)(22,"h5"),r(23,"Posizione"),n(),e(24,"it-radio-button",13),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(25,"it-radio-button",14),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(26,"it-radio-button",15),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(27,"it-radio-button",16),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(28,"it-radio-button",17),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n()(),e(29,"div",3)(30,"h5"),r(31,"Durata "),e(32,"small"),r(33,"(ms)"),n()(),e(34,"it-input",18),f("ngModelChange",function(t){return c(i.duration,t)||(i.duration=t),t}),n()()()()),d&2&&(a(9),p("ngModel",i.withText),a(),s("value",void 0),p("ngModel",i.dismissible),a(),p("ngModel",i.dismissible),a(),p("ngModel",i.dismissible),a(4),s("value",i.NotificationType.Standard),p("ngModel",i.type),a(),s("value",i.NotificationType.Success),p("ngModel",i.type),a(),s("value",i.NotificationType.Error),p("ngModel",i.type),a(),s("value",i.NotificationType.Warning),p("ngModel",i.type),a(),s("value",i.NotificationType.Info),p("ngModel",i.type),a(4),s("value",void 0),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Top),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Bottom),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Left),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Right),p("ngModel",i.position),a(6),s("min",1e3),p("ngModel",i.duration))},dependencies:[_,W,T,P,w,E],encapsulation:2});let m=o;return m})();var Y=(()=>{let o=class o{get NotificationPosition(){return S}constructor(u){this.notificationService=u,this.duration=8e3,this.isDismissible=!0,this.notificationServiceExample=`constructor(
  private readonly notificationService: ItNotificationService
) {}

standardNotification(): void {
  this.notificationService.standard(
    'Notifica Standard', // Titolo
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...' // Messaggio
  );
}`,this.exampleOptionsHtml=`<it-notifications [duration]="duration >= 1000 ? duration : undefined"
                  [position]="position"
                  [dismissible]="isDismissible"></it-notifications>`,this.exampleOptionsTs=`duration = 8000;
isDismissible = true;
position?: NotificationPosition;
`}standardNotification(){this.notificationService.standard("Notifica Standard","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...")}};o.\u0275fac=function(d){return new(d||o)(b(N))},o.\u0275cmp=y({type:o,selectors:[["it-notifications-setup"]],decls:40,vars:20,consts:[[3,"duration","position","dismissible"],[1,"bd-example","mb-4"],[1,"text-muted","fw-bold"],[3,"html"],[1,"mt-5"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-4"],["itButton","primary","size","sm",3,"click"],[3,"html","typescript"],[1,"row","mt-4","mx-1"],[1,"form-check","col-4"],["label","Eliminabile",3,"ngModelChange","ngModel"],["name","notification-setup-position","label","Default",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Top",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Bottom",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Left",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Right",3,"ngModelChange","value","ngModel"],["type","number","placeholder","Default",3,"ngModelChange","min","ngModel"]],template:function(d,i){d&1&&(e(0,"h3"),r(1,"Setup notifiche"),n(),g(2,"it-notifications",0),e(3,"div",1)(4,"p"),r(5,"Importa il componente notifiche nel tuo "),e(6,"em",2),r(7,"app.component.html"),n()(),g(8,"it-source-display",3),e(9,"p",4),r(10,"Usa il "),e(11,"em",2),r(12,"ItNotificationService"),n(),r(13," per mostrare una nuova notifica"),n(),g(14,"it-source-display",5),e(15,"div",6)(16,"h4"),r(17,"Opzioni usate di default per tutte le notifiche"),n(),e(18,"button",7),h("click",function(){return i.standardNotification()}),r(19,"Prova"),n()(),g(20,"it-source-display",8),e(21,"div",9)(22,"div",10)(23,"h5"),r(24,"Opzioni"),n(),e(25,"it-checkbox",11),f("ngModelChange",function(t){return c(i.isDismissible,t)||(i.isDismissible=t),t}),n()(),e(26,"div",10)(27,"h5"),r(28,"Posizione"),n(),e(29,"it-radio-button",12),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(30,"it-radio-button",13),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(31,"it-radio-button",14),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(32,"it-radio-button",15),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n(),e(33,"it-radio-button",16),f("ngModelChange",function(t){return c(i.position,t)||(i.position=t),t}),n()(),e(34,"div",10)(35,"h5"),r(36,"Durata "),e(37,"small"),r(38,"(ms)"),n()(),e(39,"it-input",17),f("ngModelChange",function(t){return c(i.duration,t)||(i.duration=t),t}),n()()()()),d&2&&(a(2),s("duration",i.duration>=1e3?i.duration:void 0)("position",i.position)("dismissible",i.isDismissible),a(6),s("html","<it-notifications></it-notifications>"),a(6),s("typescript",i.notificationServiceExample),a(6),s("html",i.exampleOptionsHtml)("typescript",i.exampleOptionsTs),a(5),p("ngModel",i.isDismissible),a(4),s("value",void 0),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Top),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Bottom),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Left),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Right),p("ngModel",i.position),a(6),s("min",1e3),p("ngModel",i.duration))},dependencies:[B,_,D,W,T,P,w,E],encapsulation:2});let m=o;return m})();var q=(()=>{let o=class o{constructor(u){this.notificationService=u,this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}standardNotification(){this.notificationService.standard("Notifica Standard",this.text)}successNotification(){this.notificationService.success("Notifica Successo",this.text)}errorNotification(){this.notificationService.error("Notifica Errore",this.text)}warningNotification(){this.notificationService.warning("Notifica Precauzione",this.text)}infoNotification(){this.notificationService.info("Notifica Info",this.text)}};o.\u0275fac=function(d){return new(d||o)(b(N))},o.\u0275cmp=y({type:o,selectors:[["it-notifications-example-type"]],decls:14,vars:1,consts:[[1,"bd-example"],[1,"d-flex","mb-2"],["size","sm",1,"btn-me",3,"click","itButton"],["itButton","success","size","sm",1,"btn-me",3,"click"],["itButton","danger","size","sm",1,"btn-me",3,"click"],["itButton","warning","size","sm",1,"btn-me",3,"click"],["itButton","info","size","sm",1,"btn-me",3,"click"]],template:function(d,i){d&1&&(e(0,"h3"),r(1,"Tipi di notifica"),n(),e(2,"div",0)(3,"div",1)(4,"button",2),h("click",function(){return i.standardNotification()}),r(5,"Notifica Standard"),n(),e(6,"button",3),h("click",function(){return i.successNotification()}),r(7,"Notifica Successo"),n(),e(8,"button",4),h("click",function(){return i.errorNotification()}),r(9,"Notifica Errore"),n(),e(10,"button",5),h("click",function(){return i.warningNotification()}),r(11,"Notifica Precauzione"),n(),e(12,"button",6),h("click",function(){return i.infoNotification()}),r(13,"Notifica Info"),n()()()),d&2&&(a(4),s("itButton",void 0))},dependencies:[_],encapsulation:2});let m=o;return m})();var G=(()=>{let o=class o{};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=y({type:o,selectors:[["it-notifications-examples"]],decls:5,vars:0,consts:[["html",`<h3>Tipi di notifica</h3>

<div class="bd-example">
  <div class="d-flex mb-2">
    <button class="btn-me" [itButton]="undefined" size="sm" (click)="standardNotification()">Notifica Standard</button>
    <button class="btn-me" itButton="success" size="sm" (click)="successNotification()">Notifica Successo</button>
    <button class="btn-me" itButton="danger" size="sm" (click)="errorNotification()">Notifica Errore</button>
    <button class="btn-me" itButton="warning" size="sm" (click)="warningNotification()">Notifica Precauzione</button>
    <button class="btn-me" itButton="info" size="sm" (click)="infoNotification()">Notifica Info</button>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';

@Component({
  selector: 'it-notifications-example-type',
  templateUrl: './notifications-example-type.component.html',
})
export class NotificationsExampleTypeComponent {
  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  constructor(private readonly notificationService: ItNotificationService) {}

  standardNotification(): void {
    this.notificationService.standard('Notifica Standard', this.text);
  }

  successNotification(): void {
    this.notificationService.success('Notifica Successo', this.text);
  }

  errorNotification(): void {
    this.notificationService.error('Notifica Errore', this.text);
  }

  warningNotification(): void {
    this.notificationService.warning('Notifica Precauzione', this.text);
  }

  infoNotification(): void {
    this.notificationService.info('Notifica Info', this.text);
  }
}`],["html",`<h3>Notifica con opzioni custom</h3>

<div class="bd-example">
  <button itButton="primary" size="sm" (click)="showNotification()">Notifica</button>

  <div class="row mt-4">
    <div class="form-check col-3">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="withText" label="Con testo"></it-checkbox>
      <it-radio-button
        name="notification-dismissible"
        [value]="undefined"
        label="Eliminabile default"
        [(ngModel)]="dismissible"></it-radio-button>
      <it-radio-button name="notification-dismissible" value="true" label="Eliminabile" [(ngModel)]="dismissible"></it-radio-button>
      <it-radio-button name="notification-dismissible" value="false" label="Non eliminabile" [(ngModel)]="dismissible"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Tipo</h5>
      <it-radio-button name="notification-type" [value]="NotificationType.Standard" label="Standard" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Success" label="Successo" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Error" label="Errore" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Warning" label="Precauzione" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Info" label="Info" [(ngModel)]="type"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Posizione</h5>
      <it-radio-button name="notification-position" [value]="undefined" label="Default" [(ngModel)]="position"></it-radio-button>
      <it-radio-button name="notification-position" [value]="NotificationPosition.Top" label="Top" [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Bottom"
        label="Bottom"
        [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Left"
        label="Left"
        [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Right"
        label="Right"
        [(ngModel)]="position"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Durata <small>(ms)</small></h5>
      <it-input type="number" [min]="1000" placeholder="Default" [(ngModel)]="duration"></it-input>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';
import { NotificationPosition, NotificationType } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-notifications-example',
  templateUrl: './notifications-example.component.html',
})
export class NotificationsExampleComponent {
  withText = true;
  type: NotificationType = NotificationType.Standard;
  duration?: number;
  dismissible?: 'true' | 'false';
  position?: NotificationPosition;

  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }
  get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  constructor(private readonly notificationService: ItNotificationService) {}

  showNotification(): void {
    this.notificationService.addNotification({
      type: this.type,
      title: 'Titolo Notifica',
      message: this.withText && this.text,
      dismissible: this.dismissible && this.dismissible === 'true',
      position: this.position,
      duration: this.duration,
    });

    // You can also use helper methods \`standard\`, \`success\`, \`error\`, \`warning\`, \`info\`
    // this.notificationService.success(
    //   'Titolo Notifica',
    //   this.withText && this.text,
    //   this.dismissible,
    //   this.duration,
    //   this.position
    // );
  }
}`]],template:function(d,i){d&1&&g(0,"it-notifications-setup")(1,"it-notifications-example-type")(2,"it-source-display",0)(3,"it-notifications-example")(4,"it-source-display",1)},dependencies:[B,H,Y,q],encapsulation:2});let m=o;return m})();var J=(()=>{let o=class o{constructor(){this.component=x.components.find(u=>u.name==="ItNotificationsComponent"),this.service=x.injectables.find(u=>u.name==="ItNotificationService")}};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=y({type:o,selectors:[["it-notifications-index"]],decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"],[3,"service"]],template:function(d,i){d&1&&(e(0,"h1",0),r(1,"Notifiche"),n(),e(2,"p",1),r(3,"Per attirare l\u2019attenzione su brevi messaggi di stato."),n(),e(4,"it-tab-container")(5,"it-tab-item",2),g(6,"it-notifications-examples"),n(),e(7,"it-tab-item",3)(8,"h3"),r(9,"NotificationComponent"),n(),g(10,"it-api-parameters",4),e(11,"h3"),r(12,"NotificationService"),n(),g(13,"it-api-parameters",5),n()()),d&2&&(a(10),s("component",i.component),a(3),s("service",i.service))},dependencies:[O,F,j,G],encapsulation:2});let m=o;return m})();var oi=[{path:"",component:J}],K=(()=>{let o=class o{};o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=M({type:o}),o.\u0275inj=C({imports:[k.forChild(oi),k]});let m=o;return m})();var Bi=(()=>{let o=class o{};o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=M({type:o}),o.\u0275inj=C({imports:[L,R,K,z]});let m=o;return m})();export{Bi as NotificationsModule};
