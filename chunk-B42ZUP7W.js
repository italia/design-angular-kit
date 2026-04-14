import{a as P,b as k,c as R,d as F}from"./chunk-ZWYEEAVU.js";import{L as B,M as S,N as _,O as L,Q as v,T as w,ca as D,fa as E,la as z,ma as j,sa as T,ua as W,y as b}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as x}from"./chunk-F32MIGDQ.js";import{m as I}from"./chunk-66PP3R5H.js";import{Gb as s,Hb as e,Ib as n,Jb as u,Ub as y,V as C,Wa as a,Z as h,fc as r,ib as g,jb as M,jc as p,kc as d,lc as c}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var U=(()=>{class o{constructor(){this.notificationService=h(_),this.withText=!0,this.type=B.Standard,this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}get NotificationPosition(){return S}get NotificationType(){return B}showNotification(){this.notificationService.addNotification({type:this.type,title:"Titolo Notifica",message:this.withText&&this.text,dismissible:this.dismissible&&this.dismissible==="true",position:this.position,duration:this.duration})}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=g({type:o,selectors:[["it-notifications-example"]],standalone:!1,decls:35,vars:27,consts:[[1,"bd-example"],["itButton","primary","size","sm",3,"click"],[1,"row","mt-4"],[1,"form-check","col-3"],["label","Con testo",3,"ngModelChange","ngModel"],["name","notification-dismissible","label","Eliminabile default",3,"ngModelChange","value","ngModel"],["name","notification-dismissible","value","true","label","Eliminabile",3,"ngModelChange","ngModel"],["name","notification-dismissible","value","false","label","Non eliminabile",3,"ngModelChange","ngModel"],["name","notification-type","label","Standard",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Successo",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Errore",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Precauzione",3,"ngModelChange","value","ngModel"],["name","notification-type","label","Info",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Default",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Top",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Bottom",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Left",3,"ngModelChange","value","ngModel"],["name","notification-position","label","Right",3,"ngModelChange","value","ngModel"],["type","number","placeholder","Default",3,"ngModelChange","min","ngModel"]],template:function(m,i){m&1&&(e(0,"h3"),r(1,"Notifica con opzioni custom"),n(),e(2,"div",0)(3,"button",1),y("click",function(){return i.showNotification()}),r(4,"Notifica"),n(),e(5,"div",2)(6,"div",3)(7,"h5"),r(8,"Opzioni"),n(),e(9,"it-checkbox",4),c("ngModelChange",function(t){return d(i.withText,t)||(i.withText=t),t}),n(),e(10,"it-radio-button",5),c("ngModelChange",function(t){return d(i.dismissible,t)||(i.dismissible=t),t}),n(),e(11,"it-radio-button",6),c("ngModelChange",function(t){return d(i.dismissible,t)||(i.dismissible=t),t}),n(),e(12,"it-radio-button",7),c("ngModelChange",function(t){return d(i.dismissible,t)||(i.dismissible=t),t}),n()(),e(13,"div",3)(14,"h5"),r(15,"Tipo"),n(),e(16,"it-radio-button",8),c("ngModelChange",function(t){return d(i.type,t)||(i.type=t),t}),n(),e(17,"it-radio-button",9),c("ngModelChange",function(t){return d(i.type,t)||(i.type=t),t}),n(),e(18,"it-radio-button",10),c("ngModelChange",function(t){return d(i.type,t)||(i.type=t),t}),n(),e(19,"it-radio-button",11),c("ngModelChange",function(t){return d(i.type,t)||(i.type=t),t}),n(),e(20,"it-radio-button",12),c("ngModelChange",function(t){return d(i.type,t)||(i.type=t),t}),n()(),e(21,"div",3)(22,"h5"),r(23,"Posizione"),n(),e(24,"it-radio-button",13),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(25,"it-radio-button",14),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(26,"it-radio-button",15),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(27,"it-radio-button",16),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(28,"it-radio-button",17),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n()(),e(29,"div",3)(30,"h5"),r(31,"Durata "),e(32,"small"),r(33,"(ms)"),n()(),e(34,"it-input",18),c("ngModelChange",function(t){return d(i.duration,t)||(i.duration=t),t}),n()()()()),m&2&&(a(9),p("ngModel",i.withText),a(),s("value",void 0),p("ngModel",i.dismissible),a(),p("ngModel",i.dismissible),a(),p("ngModel",i.dismissible),a(4),s("value",i.NotificationType.Standard),p("ngModel",i.type),a(),s("value",i.NotificationType.Success),p("ngModel",i.type),a(),s("value",i.NotificationType.Error),p("ngModel",i.type),a(),s("value",i.NotificationType.Warning),p("ngModel",i.type),a(),s("value",i.NotificationType.Info),p("ngModel",i.type),a(4),s("value",void 0),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Top),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Bottom),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Left),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Right),p("ngModel",i.position),a(6),s("min",1e3),p("ngModel",i.duration))},dependencies:[b,T,E,W,v,w],encapsulation:2})}}return o})();var A=(()=>{class o{constructor(){this.notificationService=h(_),this.duration=8e3,this.isDismissible=!0,this.notificationServiceExample=`constructor(
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
`}get NotificationPosition(){return S}standardNotification(){this.notificationService.standard("Notifica Standard","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...")}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=g({type:o,selectors:[["it-notifications-setup"]],standalone:!1,decls:40,vars:20,consts:[[3,"duration","position","dismissible"],[1,"bd-example","mb-4"],[1,"text-muted","fw-bold"],[3,"html"],[1,"mt-5"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-4"],["itButton","primary","size","sm",3,"click"],[3,"html","typescript"],[1,"row","mt-4","mx-1"],[1,"form-check","col-4"],["label","Eliminabile",3,"ngModelChange","ngModel"],["name","notification-setup-position","label","Default",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Top",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Bottom",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Left",3,"ngModelChange","value","ngModel"],["name","notification-setup-position","label","Right",3,"ngModelChange","value","ngModel"],["type","number","placeholder","Default",3,"ngModelChange","min","ngModel"]],template:function(m,i){m&1&&(e(0,"h3"),r(1,"Setup notifiche"),n(),u(2,"it-notifications",0),e(3,"div",1)(4,"p"),r(5,"Importa il componente notifiche nel tuo "),e(6,"em",2),r(7,"app.component.html"),n()(),u(8,"it-source-display",3),e(9,"p",4),r(10,"Usa il "),e(11,"em",2),r(12,"ItNotificationService"),n(),r(13," per mostrare una nuova notifica"),n(),u(14,"it-source-display",5),e(15,"div",6)(16,"h4"),r(17,"Opzioni usate di default per tutte le notifiche"),n(),e(18,"button",7),y("click",function(){return i.standardNotification()}),r(19,"Prova"),n()(),u(20,"it-source-display",8),e(21,"div",9)(22,"div",10)(23,"h5"),r(24,"Opzioni"),n(),e(25,"it-checkbox",11),c("ngModelChange",function(t){return d(i.isDismissible,t)||(i.isDismissible=t),t}),n()(),e(26,"div",10)(27,"h5"),r(28,"Posizione"),n(),e(29,"it-radio-button",12),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(30,"it-radio-button",13),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(31,"it-radio-button",14),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(32,"it-radio-button",15),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n(),e(33,"it-radio-button",16),c("ngModelChange",function(t){return d(i.position,t)||(i.position=t),t}),n()(),e(34,"div",10)(35,"h5"),r(36,"Durata "),e(37,"small"),r(38,"(ms)"),n()(),e(39,"it-input",17),c("ngModelChange",function(t){return d(i.duration,t)||(i.duration=t),t}),n()()()()),m&2&&(a(2),s("duration",i.duration>=1e3?i.duration:void 0)("position",i.position)("dismissible",i.isDismissible),a(6),s("html","<it-notifications></it-notifications>"),a(6),s("typescript",i.notificationServiceExample),a(6),s("html",i.exampleOptionsHtml)("typescript",i.exampleOptionsTs),a(5),p("ngModel",i.isDismissible),a(4),s("value",void 0),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Top),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Bottom),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Left),p("ngModel",i.position),a(),s("value",i.NotificationPosition.Right),p("ngModel",i.position),a(6),s("min",1e3),p("ngModel",i.duration))},dependencies:[P,b,L,T,E,W,v,w],encapsulation:2})}}return o})();var H=(()=>{class o{constructor(){this.notificationService=h(_),this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}standardNotification(){this.notificationService.standard("Notifica Standard",this.text)}successNotification(){this.notificationService.success("Notifica Successo",this.text)}errorNotification(){this.notificationService.error("Notifica Errore",this.text)}warningNotification(){this.notificationService.warning("Notifica Precauzione",this.text)}infoNotification(){this.notificationService.info("Notifica Info",this.text)}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=g({type:o,selectors:[["it-notifications-example-type"]],standalone:!1,decls:14,vars:1,consts:[[1,"bd-example"],[1,"d-flex","mb-2"],["size","sm",1,"btn-me",3,"click","itButton"],["itButton","success","size","sm",1,"btn-me",3,"click"],["itButton","danger","size","sm",1,"btn-me",3,"click"],["itButton","warning","size","sm",1,"btn-me",3,"click"],["itButton","info","size","sm",1,"btn-me",3,"click"]],template:function(m,i){m&1&&(e(0,"h3"),r(1,"Tipi di notifica"),n(),e(2,"div",0)(3,"div",1)(4,"button",2),y("click",function(){return i.standardNotification()}),r(5,"Notifica Standard"),n(),e(6,"button",3),y("click",function(){return i.successNotification()}),r(7,"Notifica Successo"),n(),e(8,"button",4),y("click",function(){return i.errorNotification()}),r(9,"Notifica Errore"),n(),e(10,"button",5),y("click",function(){return i.warningNotification()}),r(11,"Notifica Precauzione"),n(),e(12,"button",6),y("click",function(){return i.infoNotification()}),r(13,"Notifica Info"),n()()()),m&2&&(a(4),s("itButton",void 0))},dependencies:[b],encapsulation:2})}}return o})();var Y=(()=>{class o{static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=g({type:o,selectors:[["it-notifications-examples"]],standalone:!1,decls:5,vars:0,consts:[["html",`<h3>Tipi di notifica</h3>

<div class="bd-example">
  <div class="d-flex mb-2">
    <button class="btn-me" [itButton]="undefined" size="sm" (click)="standardNotification()">Notifica Standard</button>
    <button class="btn-me" itButton="success" size="sm" (click)="successNotification()">Notifica Successo</button>
    <button class="btn-me" itButton="danger" size="sm" (click)="errorNotification()">Notifica Errore</button>
    <button class="btn-me" itButton="warning" size="sm" (click)="warningNotification()">Notifica Precauzione</button>
    <button class="btn-me" itButton="info" size="sm" (click)="infoNotification()">Notifica Info</button>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';

@Component({
  selector: 'it-notifications-example-type',
  templateUrl: './notifications-example-type.component.html',
  standalone: false,
})
export class NotificationsExampleTypeComponent {
  private readonly notificationService = inject(ItNotificationService);

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

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
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';
import { NotificationPosition, NotificationType } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-notifications-example',
  templateUrl: './notifications-example.component.html',
  standalone: false,
})
export class NotificationsExampleComponent {
  private readonly notificationService = inject(ItNotificationService);

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
}`]],template:function(m,i){m&1&&u(0,"it-notifications-setup")(1,"it-notifications-example-type")(2,"it-source-display",0)(3,"it-notifications-example")(4,"it-source-display",1)},dependencies:[P,U,A,H],encapsulation:2})}}return o})();var q=(()=>{class o{constructor(){this.component=k.components.find(f=>f.name==="ItNotificationsComponent"),this.service=k.injectables.find(f=>f.name==="ItNotificationService")}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=g({type:o,selectors:[["it-notifications-index"]],standalone:!1,decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"],[3,"service"]],template:function(m,i){m&1&&(e(0,"h1",0),r(1,"Notifiche"),n(),e(2,"p",1),r(3,"Per attirare l\u2019attenzione su brevi messaggi di stato."),n(),e(4,"it-tab-container")(5,"it-tab-item",2),u(6,"it-notifications-examples"),n(),e(7,"it-tab-item",3)(8,"h3"),r(9,"NotificationComponent"),n(),u(10,"it-api-parameters",4),e(11,"h3"),r(12,"NotificationService"),n(),u(13,"it-api-parameters",5),n()()),m&2&&(a(10),s("component",i.component),a(3),s("service",i.service))},dependencies:[R,j,z,Y],encapsulation:2})}}return o})();var ei=[{path:"",component:q}],G=(()=>{class o{static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275mod=M({type:o})}static{this.\u0275inj=C({imports:[x.forChild(ei),x]})}}return o})();var ji=(()=>{class o{static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275mod=M({type:o})}static{this.\u0275inj=C({imports:[I,F,G,D]})}}return o})();export{ji as NotificationsModule};
