import{a as M,b as T,c as A,d as P}from"./chunk-VOECI7NO.js";import{Ta as b,b as L,c as x,d as E,ma as z,na as I}from"./chunk-AH6A2KSZ.js";import"./chunk-XZP45KYQ.js";import{h as w}from"./chunk-BTXKVGUM.js";import"./chunk-WH5OHNTV.js";import{$a as s,Eb as i,Fb as a,Gb as l,Yb as o,Z as g,_b as f,ab as y,ed as C,ga as m,ha as d,jc as h,kc as v,sb as p}from"./chunk-E5TMX6OZ.js";import{a as S}from"./chunk-JNJ3D7EP.js";var D=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-example"]],decls:9,vars:3,consts:[["href","https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione"],[1,"bd-example"],[1,"mt-5"]],template:function(t,c){t&1&&(i(0,"p"),o(1," Per configurzione predefinit\xE0 verranno mostrate le lingue disponibili configurate tramite "),i(2,"a",0),o(3,"ngx-translate"),a()(),i(4,"div",1),l(5,"it-language-switcher"),i(6,"p",2),o(7),h(8,"translate"),a()()),t&2&&(s(7),f("Risultato: ",v(8,1,"it.utils.select-language"),""))},dependencies:[b,x],encapsulation:2});let n=e;return n})();var F=(()=>{let e=class e{constructor(r){this.translateService=r,this.availableLanguages=this.translateService.getLangs().map(t=>S(S({code:t,label:t},t==="it"&&{label:"Italiano"}),t==="en"&&{label:"English"}))}};e.\u0275fac=function(t){return new(t||e)(y(L))},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-custom-example"]],decls:10,vars:5,consts:[[3,"innerText"],[1,"bd-example"],[3,"availableLanguages"],[1,"mt-5"]],template:function(t,c){t&1&&(i(0,"h3"),o(1,"Personalizzazione"),a(),i(2,"p"),o(3,"Puoi personalizzare le label delle lingue, passando un "),l(4,"code",0),a(),i(5,"div",1),l(6,"it-language-switcher",2),i(7,"p",3),o(8),h(9,"translate"),a()()),t&2&&(s(4),p("innerText","Array<AvailableLanguage>"),s(2),p("availableLanguages",c.availableLanguages),s(2),f("Risultato: ",v(9,3,"it.utils.select-language"),""))},dependencies:[b,x],encapsulation:2});let n=e;return n})();var j=(()=>{let e=class e{constructor(){this.typescriptAppModule=`export class AppModule {
  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['es']);
  }
}`}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-examples"]],decls:10,vars:1,consts:[["html",`<p>
  Per configurzione predefinit\xE0 verranno mostrate le lingue disponibili configurate tramite
  <a href="https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione">ngx-translate</a>
</p>

<div class="bd-example">
  <it-language-switcher></it-language-switcher>

  <p class="mt-5">Risultato: /{/{ 'it.utils.select-language' | translate /}/}</p>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-language-switcher-example',
  templateUrl: './language-switcher-example.component.html',
})
export class LanguageSwitcherExampleComponent {}`],[1,"my-5"],[1,"text-muted"],[3,"typescript"],["html",`<h3>Personalizzazione</h3>
<p>Puoi personalizzare le label delle lingue, passando un <code [innerText]="'Array<AvailableLanguage>'"></code></p>

<div class="bd-example">
  <it-language-switcher [availableLanguages]="availableLanguages"></it-language-switcher>

  <p class="mt-5">Risultato: /{/{ 'it.utils.select-language' | translate /}/}</p>
</div>`,"typescript",`import { Component } from '@angular/core';
import { AvailableLanguage } from 'design-angular-kit/interfaces/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'it-language-switcher-custom-example',
  templateUrl: './language-switcher-custom-example.component.html',
})
export class LanguageSwitcherCustomExampleComponent {
  availableLanguages?: Array<AvailableLanguage>;

  constructor(private readonly translateService: TranslateService) {
    this.availableLanguages = this.translateService.getLangs().map(lang => ({
      code: lang,
      label: lang,
      ...(lang === 'it' && { label: 'Italiano' }),
      ...(lang === 'en' && { label: 'English' }),
    }));
  }
}`]],template:function(t,c){t&1&&(l(0,"it-language-switcher-example")(1,"it-source-display",0),i(2,"div",1)(3,"p"),o(4,"Puoi aggiungere altre lingue aggiungendo nel tuo "),i(5,"span",2),o(6,"app.module.ts"),a()(),l(7,"it-source-display",3),a(),l(8,"it-language-switcher-custom-example")(9,"it-source-display",4)),t&2&&(s(7),p("typescript",c.typescriptAppModule))},dependencies:[A,D,F],encapsulation:2});let n=e;return n})();var N=(()=>{let e=class e{constructor(){this.component=M.components.find(r=>r.name==="ItLanguageSwitcherComponent")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,c){t&1&&(i(0,"h1",0),o(1,"Language Switcher"),a(),i(2,"p",1),o(3,"Per cambiare facilmente la lingua del tuo sito web"),a(),i(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-language-switcher-examples"),a(),i(7,"it-tab-item",3)(8,"h3"),o(9,"LanguageSwitcherComponent"),a(),l(10,"it-api-parameters",4),a()()),t&2&&(s(10),p("component",c.component))},dependencies:[T,I,z,j],encapsulation:2});let n=e;return n})();var H=[{path:"",component:N}],R=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d({type:e}),e.\u0275inj=g({imports:[w.forChild(H),w]});let n=e;return n})();var ce=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d({type:e}),e.\u0275inj=g({imports:[C,P,E,R]});let n=e;return n})();export{ce as LanguageSwitcherModule};
