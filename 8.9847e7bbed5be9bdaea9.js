(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7L87":function(l,n,t){"use strict";var e=t("7TIR"),a=t("s7rJ").keyof({lg:null,sm:null,xs:null}),u=t("nEsh");t.d(n,"a",function(){return o});var i=0,o=function(){function l(){this.id="button-"+i++,this._disabled=!1,this._outline=!1,this._block=!1}return Object.defineProperty(l.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this._disabled=u.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"outline",{get:function(){return this._outline},set:function(l){this._outline=u.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"block",{get:function(){return this._block},set:function(l){this._block=u.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"color",{get:function(){return this._color},set:function(l){this._color=e.b.is(l)?l:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"size",{get:function(){return this._size},set:function(l){this._size=a.is(l)?l:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"buttonClass",{get:function(){var l="btn";return this.color&&(l+=this.outline?" btn-outline-"+this.color:" btn-"+this.color),this.size&&(l+=" btn-"+this.size),this.block&&(l+=" btn-block"),this.disabled&&(l+=" disabled"),l},enumerable:!0,configurable:!0}),l}()},A82G:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("CcnG"),a=0,u=function(){function l(l){this._changeDetectorRef=l,this._checked=!1,this._disabled=!1,this.change=new e.m,this.inputId="checkbox-"+a++,this._onTouched=function(){},this._controlValueAccessorChangeFn=function(){}}return Object.defineProperty(l.prototype,"checked",{get:function(){return this._checked},set:function(l){l!==this.checked&&(this._checked=l,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"disabled",{get:function(){return this._disabled},set:function(l){l!==this.disabled&&(this._disabled=l,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),l.prototype.writeValue=function(l){this.checked=!!l},l.prototype.registerOnChange=function(l){this._controlValueAccessorChangeFn=l},l.prototype.registerOnTouched=function(l){this._onTouched=l},l.prototype.handleChange=function(l){l.stopPropagation(),this.disabled||(this._toggle(),this._emitChangeEvent())},l.prototype._toggle=function(){this.checked=!this.checked},l.prototype._emitChangeEvent=function(){var l=new function(){};l.source=this,l.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(l)},l}()},I2vm:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("K9Ia"),a=t("nEsh"),u=function(){function l(){this.label="",this._disabled=!1,this.icon=null,this._labelChange=new e.a,this._disableChange=new e.a,this.position=null,this.isActive=!1}return Object.defineProperty(l.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this._disabled=a.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this._disableChange.complete(),this._labelChange.complete()},l.prototype.ngOnChanges=function(l){(l.hasOwnProperty("label")||l.hasOwnProperty("ariaLabel")||l.hasOwnProperty("ariaLabelledby"))&&this._labelChange.next(),l.hasOwnProperty("disabled")&&this._disableChange.next()},l}()},nEsh:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l.coerceBooleanProperty=function(l){return null!=l&&""+l!="false"},l.coerceNumberProperty=function(n,t){return void 0===t&&(t=0),l._isNumberValue(n)?Number(n):t},l._isNumberValue=function(l){return!isNaN(parseFloat(l))&&!isNaN(Number(l))},l}()},pKkm:function(l,n,t){"use strict";t.d(n,"a",function(){return s});var e=t("CcnG"),a=t("pugT"),u=t("p0ib"),i=t("nEsh"),o=(t("I2vm"),0),s=function(){function l(l){this._changeDetectorRef=l,this._indexToSelect=0,this._tabsSubscription=a.a.EMPTY,this._tabLabelSubscription=a.a.EMPTY,this._isPill=!1,this._selectedIndex=null,this._dark=!1,this.selectedIndexChange=new e.m,this.selectedTabChange=new e.m(!0),this._groupId=o++}return Object.defineProperty(l.prototype,"pill",{get:function(){return this._isPill},set:function(l){this._isPill=i.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(l){this._indexToSelect=i.a.coerceNumberProperty(l,null)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"dark",{get:function(){return this._dark},set:function(l){this._dark=i.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),l.prototype.ngAfterContentChecked=function(){this.changeTab(this._indexToSelect)},l.prototype.changeTab=function(l){var n=this,t=this._indexToSelect=this._clampTabIndex(l);if(!(this._tabs&&this._tabs.length>0&&this._tabs.toArray()[t].disabled)){if(this._selectedIndex!==t&&null!=this._selectedIndex){var e=this._createChangeEvent(t);this.selectedTabChange.emit(e),Promise.resolve().then(function(){return n.selectedIndexChange.emit(t)})}this._tabs.forEach(function(l,n){l.position=n-t,l.isActive=n===t}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}},l.prototype.ngAfterContentInit=function(){var l=this;this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(function(){if(l._clampTabIndex(l._indexToSelect)===l._selectedIndex)for(var n=l._tabs.toArray(),t=0;t<n.length;t++)if(n[t].isActive){l._indexToSelect=l._selectedIndex=t;break}l._subscribeToTabLabels(),l._changeDetectorRef.markForCheck()})},l.prototype.ngOnDestroy=function(){this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()},l.prototype._createChangeEvent=function(l){var n=new function(){};return n.index=l,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[l]),n},l.prototype._subscribeToTabLabels=function(){var l=this;this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=u.a.apply(void 0,this._tabs.map(function(l){return l._disableChange}).concat(this._tabs.map(function(l){return l._labelChange}))).subscribe(function(){l._changeDetectorRef.markForCheck()})},l.prototype._clampTabIndex=function(l){return Math.min(this._tabs.length-1,Math.max(l||0,0))},l.prototype._getTabLabelId=function(l){return"it-tab-label-"+this._groupId+"-"+l},l.prototype._getTabContentId=function(l){return"it-tab-content-"+this._groupId+"-"+l},l.prototype._getTabIndex=function(l,n){return l.disabled?null:this.selectedIndex===n?0:-1},l.prototype._handleClick=function(l,n){l.preventDefault(),this.changeTab(n)},l}()},pZl2:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=function(){},u=t("M6iX"),i=t("5rr3"),o=t("pMnS"),s=t("Ip0R"),c=t("I2vm"),r=e.La({encapsulation:2,styles:[[""]],data:{}});function b(l){return e.eb(0,[e.Wa(null,0),(l()(),e.Ea(0,null,null,0))],null,null)}function d(l){return e.eb(2,[e.bb(402653184,1,{_implicitContent:0}),(l()(),e.Ea(0,[[1,2]],null,0,null,b))],null,null)}var p=t("Xhfm"),h=t("A82G"),g=t("gIcY"),m=t("pKkm"),f=e.La({encapsulation:2,styles:[[""]],data:{}});function v(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,1,"i",[["class","it-ico-lg d-block text-center"]],null,null,null,null,null)),e.Ma(1,278528,null,0,s.h,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(l,n){l(n,1,0,"it-ico-lg d-block text-center",n.parent.context.$implicit.icon)},null)}function x(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,5,"a",[["href","#"],["role","tab"]],[[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[8,"id",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component._handleClick(t,l.context.index)&&e),e},null,null)),e.Ma(2,278528,null,0,s.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.Za(3,{"nav-link":0,active:1,disabled:2}),(l()(),e.Ea(16777216,null,null,1,null,v)),e.Ma(5,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.db(6,null,[" "," "]))],function(l,n){l(n,2,0,l(n,3,0,!0,n.component.selectedIndex==n.context.index,n.context.$implicit.disabled)),l(n,5,0,n.context.$implicit.icon)},function(l,n){var t=n.component;l(n,1,0,t._getTabContentId(n.context.index),t.selectedIndex==n.context.index,n.context.$implicit.ariaLabel||null,!n.context.$implicit.ariaLabel&&n.context.$implicit.ariaLabelledby?n.context.$implicit.ariaLabelledby:null,t._getTabLabelId(n.context.index)),l(n,6,0,n.context.$implicit.label)})}function C(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function y(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e.Na(1,0,null,null,4,"div",[["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0]],null,null,null,null)),e.Ma(2,278528,null,0,s.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.Za(3,{"tab-pane p-3":0,"show active":1}),(l()(),e.Ea(16777216,null,null,1,null,C)),e.Ma(5,540672,null,0,s.n,[e.M],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(l,n){l(n,2,0,l(n,3,0,!0,n.component.selectedIndex==n.context.index)),l(n,5,0,n.context.$implicit._implicitContent)},function(l,n){var t=n.component;l(n,1,0,t._getTabContentId(n.context.index),t._getTabLabelId(n.context.index))})}function _(l){return e.eb(2,[(l()(),e.Na(0,0,null,null,4,"ul",[["class","nav"],["role","tablist"]],null,null,null,null,null)),e.Ma(1,278528,null,0,s.h,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Za(2,{"nav-dark":0,"nav-tabs":1,"nav-pills mb-3":2}),(l()(),e.Ea(16777216,null,null,1,null,x)),e.Ma(4,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Na(5,0,null,null,2,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),e.Ea(16777216,null,null,1,null,y)),e.Ma(7,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,"nav",l(n,2,0,t.dark,!t.pill,t.pill)),l(n,4,0,t._tabs),l(n,7,0,t._tabs)},null)}var N=t("qh0z"),k=function(){this.isDarkTheme=!1,this.isDisabled=!1,this.isPill=!1,this.tabs=[{label:"tab1",content:"content1",icon:"it-file"},{label:"tab2",content:"content2",icon:"it-calendar"},{label:"tab3",content:"content3",icon:"it-comment"}]},T=e.La({encapsulation:0,styles:[[""]],data:{}});function M(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,2,"it-tab",[],null,null,null,d,r)),e.Ma(1,704512,[[1,4]],0,c.a,[],{label:[0,"label"],icon:[1,"icon"]},null),(l()(),e.db(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.label,n.context.$implicit.icon)},function(l,n){l(n,2,0,n.context.$implicit.content)})}function I(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,24,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,23,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Configurazione tabs"])),(l()(),e.Na(4,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(l()(),e.Na(5,0,null,null,5,"it-checkbox",[["label","Tema scuro"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.isDarkTheme=t)&&e),e},p.b,p.a)),e.Ma(6,49152,null,0,h.a,[e.h],{label:[0,"label"]},null),e.ab(1024,null,g.g,function(l){return[l]},[h.a]),e.Ma(8,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.ab(2048,null,g.h,null,[g.j]),e.Ma(10,16384,null,0,g.i,[[4,g.h]],null,null),(l()(),e.Na(11,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(l()(),e.Na(12,0,null,null,5,"it-checkbox",[["label","Disabilita tab custom"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.isDisabled=t)&&e),e},p.b,p.a)),e.Ma(13,49152,null,0,h.a,[e.h],{label:[0,"label"]},null),e.ab(1024,null,g.g,function(l){return[l]},[h.a]),e.Ma(15,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.ab(2048,null,g.h,null,[g.j]),e.Ma(17,16384,null,0,g.i,[[4,g.h]],null,null),(l()(),e.Na(18,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(l()(),e.Na(19,0,null,null,5,"it-checkbox",[["label","Navigazione con pill"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.isPill=t)&&e),e},p.b,p.a)),e.Ma(20,49152,null,0,h.a,[e.h],{label:[0,"label"]},null),e.ab(1024,null,g.g,function(l){return[l]},[h.a]),e.Ma(22,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.ab(2048,null,g.h,null,[g.j]),e.Ma(24,16384,null,0,g.i,[[4,g.h]],null,null),(l()(),e.Na(25,0,null,null,16,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(l()(),e.Na(26,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Na(27,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Risultato tabs"])),(l()(),e.Na(29,0,null,null,12,"it-tab-group",[],null,null,null,_,f)),e.Ma(30,3325952,null,1,m.a,[e.h],{pill:[0,"pill"],dark:[1,"dark"]},null),e.bb(603979776,1,{_tabs:1}),(l()(),e.Ea(16777216,null,null,1,null,M)),e.Ma(33,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Na(34,0,null,null,7,"it-tab",[["icon","it-settings"],["label","custom"]],null,null,null,d,r)),e.Ma(35,704512,[[1,4]],0,c.a,[],{label:[0,"label"],disabled:[1,"disabled"],icon:[2,"icon"]},null),(l()(),e.Na(36,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Titolo"])),(l()(),e.Na(38,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Contenuto complesso "])),(l()(),e.Na(40,0,null,null,1,"span",[["it-badge","badge"]],[[8,"innerText",0],[8,"className",0]],null,null,null,null)),e.Ma(41,16384,null,0,N.a,[e.k],{badgeText:[0,"badgeText"]},null)],function(l,n){var t=n.component;l(n,6,0,"Tema scuro"),l(n,8,0,t.isDarkTheme),l(n,13,0,"Disabilita tab custom"),l(n,15,0,t.isDisabled),l(n,20,0,"Navigazione con pill"),l(n,22,0,t.isPill),l(n,30,0,t.isPill,t.isDarkTheme),l(n,33,0,t.tabs),l(n,35,0,"custom",t.isDisabled,"it-settings"),l(n,41,0,"badge")},function(l,n){l(n,5,0,e.Xa(n,10).ngClassUntouched,e.Xa(n,10).ngClassTouched,e.Xa(n,10).ngClassPristine,e.Xa(n,10).ngClassDirty,e.Xa(n,10).ngClassValid,e.Xa(n,10).ngClassInvalid,e.Xa(n,10).ngClassPending),l(n,12,0,e.Xa(n,17).ngClassUntouched,e.Xa(n,17).ngClassTouched,e.Xa(n,17).ngClassPristine,e.Xa(n,17).ngClassDirty,e.Xa(n,17).ngClassValid,e.Xa(n,17).ngClassInvalid,e.Xa(n,17).ngClassPending),l(n,19,0,e.Xa(n,24).ngClassUntouched,e.Xa(n,24).ngClassTouched,e.Xa(n,24).ngClassPristine,e.Xa(n,24).ngClassDirty,e.Xa(n,24).ngClassValid,e.Xa(n,24).ngClassInvalid,e.Xa(n,24).ngClassPending),l(n,40,0,e.Xa(n,41).badgeText,e.Xa(n,41).hostClasses)})}var P=t("xh2N"),X=t("HiJM"),A=t("l86Q"),D=t("7L87"),O=function(){function l(){this.tabs=["Primo","Secondo","Terzo"],this.selected=new g.d(0),this.selectAfterAdding=!1}return l.prototype.addTab=function(l){this.tabs.push("Nuovo"),l&&this.selected.setValue(this.tabs.length-1)},l.prototype.removeTab=function(l){this.tabs.splice(l,1)},l}(),w=e.La({encapsulation:0,styles:[[""]],data:{}});function V(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,5,"it-tab",[],null,null,null,d,r)),e.Ma(1,704512,[[1,4]],0,c.a,[],{label:[0,"label"]},null),(l()(),e.db(2,0,[" contenuto del "," tab "])),(l()(),e.Na(3,0,null,0,2,"it-button",[["color","primary"],["mat-raised-button",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.removeTab(l.context.index)&&e),e},A.b,A.a)),e.Ma(4,49152,null,0,D.a,[],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),e.db(-1,0,[" Cancella tab "]))],function(l,n){var t=n.component;l(n,1,0,n.context.$implicit),l(n,4,0,1===t.tabs.length,"primary")},function(l,n){l(n,2,0,n.context.$implicit)})}function j(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,23,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,22,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Configurazione tabs"])),(l()(),e.Na(4,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Na(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.db(-1,null,[" indice del tab selezionato: "])),(l()(),e.Na(7,0,null,null,6,"input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Xa(l,8)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Xa(l,8).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Xa(l,8)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Xa(l,8)._compositionEnd(t.target.value)&&a),"change"===n&&(a=!1!==e.Xa(l,9).onChange(t.target.value)&&a),"input"===n&&(a=!1!==e.Xa(l,9).onChange(t.target.value)&&a),"blur"===n&&(a=!1!==e.Xa(l,9).onTouched()&&a),a},null,null)),e.Ma(8,16384,null,0,g.b,[e.B,e.k,[2,g.a]],null,null),e.Ma(9,16384,null,0,g.m,[e.B,e.k],null,null),e.ab(1024,null,g.g,function(l,n){return[l,n]},[g.b,g.m]),e.Ma(11,540672,null,0,g.e,[[8,null],[8,null],[6,g.g],[2,g.o]],{form:[0,"form"]},null),e.ab(2048,null,g.h,null,[g.e]),e.Ma(13,16384,null,0,g.i,[[4,g.h]],null,null),(l()(),e.Na(14,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),e.Na(15,0,null,null,2,"it-button",[["color","primary"]],null,[[null,"click"]],function(l,n,t){var e=!0,a=l.component;return"click"===n&&(e=!1!==a.addTab(a.selectAfterAdding)&&e),e},A.b,A.a)),e.Ma(16,49152,null,0,D.a,[],{color:[0,"color"]},null),(l()(),e.db(-1,0,[" Aggiungi un nuovo tab "])),(l()(),e.Na(18,0,null,null,5,"it-checkbox",[["label","Seleziona il tab dopo averlo aggiunto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.selectAfterAdding=t)&&e),e},p.b,p.a)),e.Ma(19,49152,null,0,h.a,[e.h],{label:[0,"label"]},null),e.ab(1024,null,g.g,function(l){return[l]},[h.a]),e.Ma(21,671744,null,0,g.j,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.ab(2048,null,g.h,null,[g.j]),e.Ma(23,16384,null,0,g.i,[[4,g.h]],null,null),(l()(),e.Na(24,0,null,null,8,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(l()(),e.Na(25,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Na(26,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Risultato tabs"])),(l()(),e.Na(28,0,null,null,4,"it-tab-group",[["class","dynamic-tab-group"]],null,[[null,"selectedIndexChange"]],function(l,n,t){var e=!0;return"selectedIndexChange"===n&&(e=!1!==l.component.selected.setValue(t)&&e),e},_,f)),e.Ma(29,3325952,null,1,m.a,[e.h],{selectedIndex:[0,"selectedIndex"]},{selectedIndexChange:"selectedIndexChange"}),e.bb(603979776,1,{_tabs:1}),(l()(),e.Ea(16777216,null,null,1,null,V)),e.Ma(32,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,11,0,t.selected),l(n,16,0,"primary"),l(n,19,0,"Seleziona il tab dopo averlo aggiunto"),l(n,21,0,t.selectAfterAdding),l(n,29,0,t.selected.value),l(n,32,0,t.tabs)},function(l,n){l(n,7,0,e.Xa(n,13).ngClassUntouched,e.Xa(n,13).ngClassTouched,e.Xa(n,13).ngClassPristine,e.Xa(n,13).ngClassDirty,e.Xa(n,13).ngClassValid,e.Xa(n,13).ngClassInvalid,e.Xa(n,13).ngClassPending),l(n,18,0,e.Xa(n,23).ngClassUntouched,e.Xa(n,23).ngClassTouched,e.Xa(n,23).ngClassPristine,e.Xa(n,23).ngClassDirty,e.Xa(n,23).ngClassValid,e.Xa(n,23).ngClassInvalid,e.Xa(n,23).ngClassPending)})}var E=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),L=e.La({encapsulation:0,styles:[[""]],data:{}});function F(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,1,"it-tabs-example",[],null,null,null,I,T)),e.Ma(1,49152,null,0,k,[],null,null),(l()(),e.Na(2,0,null,null,1,"it-source-display",[["html",'\n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione tabs</h4>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isPill" label="Navigazione con pill"></it-checkbox>\n    </p>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato tabs</h4>\n    <it-tab-group [dark]="isDarkTheme" [pill]="isPill">\n      <it-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon">\n        /{/{tab.content/}/}\n      </it-tab>\n      <it-tab label="custom" [disabled]="isDisabled" icon="it-settings">\n        <h4>Titolo</h4>\n        <p>Contenuto complesso <span it-badge="badge"></span></p>\n      </it-tab>\n    </it-tab-group>\n  </div>\n</div>\n\n'],["typescript","\n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tabs-example',\n  templateUrl: './tabs-example.component.html',\n  styleUrls: ['./tabs-example.component.scss']\n})\nexport class TabsExampleComponent {\n\n  isDarkTheme = false;\n\n  isDisabled = false;\n\n  isPill = false;\n\n  tabs = [\n    {\n      label: 'tab1',\n      content: 'content1',\n      icon: 'it-file'\n    },\n    {\n      label: 'tab2',\n      content: 'content2',\n      icon: 'it-calendar'\n    },\n    {\n      label: 'tab3',\n      content: 'content3',\n      icon: 'it-comment'\n    }\n  ];\n}\n\n"]],null,null,null,P.b,P.a)),e.Ma(3,114688,null,0,X.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null),(l()(),e.Na(4,0,null,null,1,"it-tabs-dynamic-example",[],null,null,null,j,w)),e.Ma(5,49152,null,0,O,[],null,null),(l()(),e.Na(6,0,null,null,1,"it-source-display",[["html",'\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Configurazione tabs</h4>\n      <div class="form-group">\n        <span> indice del tab selezionato: </span>\n        <input type="number" [formControl]="selected">\n      </div>\n      <div>\n        <it-button color="primary" (click)="addTab(selectAfterAdding)">\n          Aggiungi un nuovo tab\n        </it-button>\n        <it-checkbox [(ngModel)]="selectAfterAdding" label="Seleziona il tab dopo averlo aggiunto"></it-checkbox>\n      </div>\n    </div>\n  </div>\n\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Risultato tabs</h4>\n      <it-tab-group [selectedIndex]="selected.value"\n                    (selectedIndexChange)="selected.setValue($event)"\n                    class="dynamic-tab-group">\n        <it-tab *ngFor="let tab of tabs; let index = index" [label]="tab">\n          contenuto del /{/{tab/}/} tab\n\n          <it-button mat-raised-button\n                  color="primary"\n                  [disabled]="tabs.length === 1"\n                  (click)="removeTab(index)">\n            Cancella tab\n          </it-button>\n        </it-tab>\n      </it-tab-group>\n    </div>\n  </div>\n\n'],["typescript","\n  import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'it-tabs-dynamic-example',\n  templateUrl: './tabs-dynamic-example.component.html',\n  styleUrls: ['./tabs-dynamic-example.component.scss']\n})\nexport class TabsDynamicExampleComponent {\n\n  tabs = ['Primo', 'Secondo', 'Terzo'];\n  selected = new FormControl(0);\n  selectAfterAdding = false;\n\n  addTab(selectAfterAdding: boolean) {\n    this.tabs.push('Nuovo');\n\n    if (selectAfterAdding) {\n      this.selected.setValue(this.tabs.length - 1);\n    }\n  }\n\n  removeTab(index: number) {\n    this.tabs.splice(index, 1);\n  }\n}\n\n"]],null,null,null,P.b,P.a)),e.Ma(7,114688,null,0,X.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null)],function(l,n){l(n,3,0,'\n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione tabs</h4>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isPill" label="Navigazione con pill"></it-checkbox>\n    </p>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato tabs</h4>\n    <it-tab-group [dark]="isDarkTheme" [pill]="isPill">\n      <it-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon">\n        /{/{tab.content/}/}\n      </it-tab>\n      <it-tab label="custom" [disabled]="isDisabled" icon="it-settings">\n        <h4>Titolo</h4>\n        <p>Contenuto complesso <span it-badge="badge"></span></p>\n      </it-tab>\n    </it-tab-group>\n  </div>\n</div>\n\n',"\n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tabs-example',\n  templateUrl: './tabs-example.component.html',\n  styleUrls: ['./tabs-example.component.scss']\n})\nexport class TabsExampleComponent {\n\n  isDarkTheme = false;\n\n  isDisabled = false;\n\n  isPill = false;\n\n  tabs = [\n    {\n      label: 'tab1',\n      content: 'content1',\n      icon: 'it-file'\n    },\n    {\n      label: 'tab2',\n      content: 'content2',\n      icon: 'it-calendar'\n    },\n    {\n      label: 'tab3',\n      content: 'content3',\n      icon: 'it-comment'\n    }\n  ];\n}\n\n"),l(n,7,0,'\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Configurazione tabs</h4>\n      <div class="form-group">\n        <span> indice del tab selezionato: </span>\n        <input type="number" [formControl]="selected">\n      </div>\n      <div>\n        <it-button color="primary" (click)="addTab(selectAfterAdding)">\n          Aggiungi un nuovo tab\n        </it-button>\n        <it-checkbox [(ngModel)]="selectAfterAdding" label="Seleziona il tab dopo averlo aggiunto"></it-checkbox>\n      </div>\n    </div>\n  </div>\n\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Risultato tabs</h4>\n      <it-tab-group [selectedIndex]="selected.value"\n                    (selectedIndexChange)="selected.setValue($event)"\n                    class="dynamic-tab-group">\n        <it-tab *ngFor="let tab of tabs; let index = index" [label]="tab">\n          contenuto del /{/{tab/}/} tab\n\n          <it-button mat-raised-button\n                  color="primary"\n                  [disabled]="tabs.length === 1"\n                  (click)="removeTab(index)">\n            Cancella tab\n          </it-button>\n        </it-tab>\n      </it-tab-group>\n    </div>\n  </div>\n\n',"\n  import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'it-tabs-dynamic-example',\n  templateUrl: './tabs-dynamic-example.component.html',\n  styleUrls: ['./tabs-dynamic-example.component.scss']\n})\nexport class TabsDynamicExampleComponent {\n\n  tabs = ['Primo', 'Secondo', 'Terzo'];\n  selected = new FormControl(0);\n  selectAfterAdding = false;\n\n  addTab(selectAfterAdding: boolean) {\n    this.tabs.push('Nuovo');\n\n    if (selectAfterAdding) {\n      this.selected.setValue(this.tabs.length - 1);\n    }\n  }\n\n  removeTab(index: number) {\n    this.tabs.splice(index, 1);\n  }\n}\n\n")},null)}var z=t("dxD6"),S=function(){return function(){this.tabGroupComponent=z.a.find(function(l){return"TabGroupComponent"===l.name}),this.tabComponent=z.a.find(function(l){return"TabComponent"===l.name})}}(),$=e.La({encapsulation:0,styles:[[""]],data:{}});function R(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,13,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),e.Na(2,0,null,null,12,"tbody",[],null,null,null,null,null)),(l()(),e.Na(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.Na(4,0,null,null,2,"td",[["style","width: 20%"]],null,null,null,null,null)),(l()(),e.Na(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.db(6,null,["",""])),(l()(),e.Na(7,0,null,null,5,"td",[["style","width: 80%"]],null,null,null,null,null)),(l()(),e.Na(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Na(9,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tipo: "])),(l()(),e.Na(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.db(12,null,["",""])),(l()(),e.Na(13,0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),e.Na(14,0,null,null,0,"td",[["class","col-md-2"],["colspan","2"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,6,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.type),l(n,14,0,n.context.$implicit.description)})}function B(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Input"])),(l()(),e.Ea(16777216,null,null,1,null,R)),e.Ma(4,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.tabGroupComponent.inputsClass)},null)}function J(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Output"]))],null,null)}function G(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,13,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),e.Na(2,0,null,null,12,"tbody",[],null,null,null,null,null)),(l()(),e.Na(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.Na(4,0,null,null,2,"td",[["style","width: 20%"]],null,null,null,null,null)),(l()(),e.Na(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.db(6,null,["",""])),(l()(),e.Na(7,0,null,null,5,"td",[["style","width: 80%"]],null,null,null,null,null)),(l()(),e.Na(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Na(9,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tipo: "])),(l()(),e.Na(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.db(12,null,["",""])),(l()(),e.Na(13,0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),e.Na(14,0,null,null,0,"td",[["class","col-md-2"],["colspan","2"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,6,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.type),l(n,14,0,n.context.$implicit.description)})}function U(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Input"])),(l()(),e.Ea(16777216,null,null,1,null,G)),e.Ma(4,278528,null,0,s.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.tabComponent.inputsClass)},null)}function q(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Output"]))],null,null)}function H(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tabs"])),(l()(),e.Na(2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Il componente Tabs"])),(l()(),e.Na(4,0,null,null,9,"ul",[["class","nav nav-tabs"],["id","tabs-tab"],["role","tablist"]],null,null,null,null,null)),(l()(),e.Na(5,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.Na(6,0,null,null,1,"a",[["aria-controls","tabs-description-tab-content"],["aria-selected","true"],["class","nav-link active"],["data-toggle","tab"],["href","#tabs-description-tab-content"],["id","tabs-description-tab"],["role","tab"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Descrizione"])),(l()(),e.Na(8,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.Na(9,0,null,null,1,"a",[["aria-controls","tabs-api-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#tabs-api-tab-content"],["id","tabs-api-tab"],["role","tab"]],null,null,null,null,null)),(l()(),e.db(-1,null,["API"])),(l()(),e.Na(11,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e.Na(12,0,null,null,1,"a",[["aria-controls","tabs-examples-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#tabs-examples-tab-content"],["id","tabs-examples-tab"],["role","tab"]],null,null,null,null,null)),(l()(),e.db(-1,null,["Esempi"])),(l()(),e.Na(14,0,null,null,23,"div",[["class","tab-content"],["id","tabs-content-tab"]],null,null,null,null,null)),(l()(),e.Na(15,0,null,null,6,"div",[["aria-labelledby","tabs-description-tab-content"],["class","tab-pane p-3 fade show active"],["id","tabs-description-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e.Na(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tab Group"])),(l()(),e.Na(18,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.Na(19,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tab"])),(l()(),e.Na(21,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.Na(22,0,null,null,12,"div",[["aria-labelledby","tabs-api-tab-content"],["class","tab-pane p-3 fade"],["id","tabs-api-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e.Na(23,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tab Group"])),(l()(),e.Ea(16777216,null,null,1,null,B)),e.Ma(26,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Ea(16777216,null,null,1,null,J)),e.Ma(28,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(29,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.db(-1,null,["Tab"])),(l()(),e.Ea(16777216,null,null,1,null,U)),e.Ma(32,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Ea(16777216,null,null,1,null,q)),e.Ma(34,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(35,0,null,null,2,"div",[["aria-labelledby","tabs-examples-tab-content"],["class","tab-pane p-3 fade"],["id","tabs-examples-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),e.Na(36,0,null,null,1,"it-tabs-examples",[],null,null,null,F,L)),e.Ma(37,114688,null,0,E,[],null,null)],function(l,n){var t=n.component;l(n,26,0,t.tabGroupComponent.inputsClass.length>0),l(n,28,0,t.tabGroupComponent.outputsClass.length>0),l(n,32,0,t.tabComponent.inputsClass.length>0),l(n,34,0,t.tabComponent.outputsClass.length>0),l(n,37,0)},function(l,n){var t=n.component;l(n,18,0,t.tabGroupComponent.description),l(n,21,0,t.tabComponent.description)})}var Z=e.Ja("it-tabs-index",S,function(l){return e.eb(0,[(l()(),e.Na(0,0,null,null,1,"it-tabs-index",[],null,null,null,H,$)),e.Ma(1,49152,null,0,S,[],null,null)],null,null)},{},{},[]),K=t("OQP5"),Y=t("RyqK"),Q=t("PCNd"),W=t("ZYCi"),ll=function(){};t.d(n,"TabsModuleNgFactory",function(){return nl});var nl=e.Ka(a,[],function(l){return e.Ua([e.Va(512,e.j,e.Z,[[8,[u.a,i.a,o.a,Z]],[3,e.j],e.v]),e.Va(4608,s.l,s.k,[e.s,[2,s.t]]),e.Va(4608,g.n,g.n,[]),e.Va(4608,g.c,g.c,[]),e.Va(5120,K.b,K.d,[K.e]),e.Va(1073742336,s.b,s.b,[]),e.Va(1073742336,g.l,g.l,[]),e.Va(1073742336,g.f,g.f,[]),e.Va(1073742336,g.k,g.k,[]),e.Va(1073742336,Y.a,Y.a,[]),e.Va(1073742336,K.c,K.c,[]),e.Va(1073742336,Q.a,Q.a,[]),e.Va(1073742336,W.n,W.n,[[2,W.t],[2,W.k]]),e.Va(1073742336,ll,ll,[]),e.Va(1073742336,a,a,[]),e.Va(256,K.e,{theme:"agate"},[]),e.Va(1024,W.i,function(){return[[{path:"",component:S}]]},[])])})},qh0z:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("7TIR"),a=t("nEsh"),u=function(){function l(l){this.el=l,this._badgeColor=e.a.LIGHT,this._badgeText="",this._isPill=!1}return Object.defineProperty(l.prototype,"badgeColor",{get:function(){return this._badgeColor},set:function(l){this._badgeColor=e.b.is(l)?l:e.a.LIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"badgeText",{get:function(){return this._badgeText},set:function(l){this._badgeText=l||""},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isPill",{get:function(){return this._isPill},set:function(l){this._isPill=a.a.coerceBooleanProperty(l)},enumerable:!0,configurable:!0}),l.prototype.getBadgeColorClassName=function(){return"badge-"+this._badgeColor},Object.defineProperty(l.prototype,"hostClasses",{get:function(){return["badge",this.getBadgeColorClassName(),this.isPill?"badge-pill":""].join(" ")},enumerable:!0,configurable:!0}),l}()}}]);