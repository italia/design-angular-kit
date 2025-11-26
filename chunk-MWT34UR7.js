import{a as T,b as I,c as A,d as P}from"./chunk-CQV3UQHT.js";import{Sa as b,b as L,c as x,d as E,la as z,ma as M}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as w}from"./chunk-DVW5EFKD.js";import{m as C}from"./chunk-I647ZKKI.js";import{Hb as p,Ib as a,Jb as o,Kb as l,Wa as s,Y as g,aa as y,cc as r,ec as f,fb as m,gb as d,rc as h,sc as v}from"./chunk-H5YVEJFN.js";import{a as S}from"./chunk-TMEVGU2Q.js";var D=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-example"]],standalone:!1,decls:9,vars:3,consts:[["href","https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione"],[1,"bd-example"],[1,"mt-5"]],template:function(n,c){n&1&&(a(0,"p"),r(1," Per configurzione predefinit\xE0 verranno mostrate le lingue disponibili configurate tramite "),a(2,"a",0),r(3,"ngx-translate"),o()(),a(4,"div",1),l(5,"it-language-switcher"),a(6,"p",2),r(7),h(8,"translate"),o()()),n&2&&(s(7),f("Risultato: ",v(8,1,"it.utils.select-language")))},dependencies:[b,x],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.translateService=y(L),this.availableLanguages=this.translateService.getLangs().map(i=>S(S({code:i,label:i},i==="it"&&{label:"Italiano"}),i==="en"&&{label:"English"}))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-custom-example"]],standalone:!1,decls:10,vars:5,consts:[[3,"innerText"],[1,"bd-example"],[3,"availableLanguages"],[1,"mt-5"]],template:function(n,c){n&1&&(a(0,"h3"),r(1,"Personalizzazione"),o(),a(2,"p"),r(3,"Puoi personalizzare le label delle lingue, passando un "),l(4,"code",0),o(),a(5,"div",1),l(6,"it-language-switcher",2),a(7,"p",3),r(8),h(9,"translate"),o()()),n&2&&(s(4),p("innerText","Array<AvailableLanguage>"),s(2),p("availableLanguages",c.availableLanguages),s(2),f("Risultato: ",v(9,3,"it.utils.select-language")))},dependencies:[b,x],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{constructor(){this.typescriptAppModule=`export class AppModule {
  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['es']);
  }
}`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-examples"]],standalone:!1,decls:10,vars:1,consts:[["html",`<p>
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
  standalone: false,
})
export class LanguageSwitcherExampleComponent {}`],[1,"my-5"],[1,"text-muted"],[3,"typescript"],["html",`<h3>Personalizzazione</h3>
<p>Puoi personalizzare le label delle lingue, passando un <code [innerText]="'Array<AvailableLanguage>'"></code></p>

<div class="bd-example">
  <it-language-switcher [availableLanguages]="availableLanguages"></it-language-switcher>

  <p class="mt-5">Risultato: /{/{ 'it.utils.select-language' | translate /}/}</p>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { AvailableLanguage } from 'design-angular-kit/interfaces/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'it-language-switcher-custom-example',
  templateUrl: './language-switcher-custom-example.component.html',
  standalone: false,
})
export class LanguageSwitcherCustomExampleComponent {
  private readonly translateService = inject(TranslateService);

  availableLanguages?: Array<AvailableLanguage>;

  constructor() {
    this.availableLanguages = this.translateService.getLangs().map(lang => ({
      code: lang,
      label: lang,
      ...(lang === 'it' && { label: 'Italiano' }),
      ...(lang === 'en' && { label: 'English' }),
    }));
  }
}`]],template:function(n,c){n&1&&(l(0,"it-language-switcher-example")(1,"it-source-display",0),a(2,"div",1)(3,"p"),r(4,"Puoi aggiungere altre lingue aggiungendo nel tuo "),a(5,"span",2),r(6,"app.module.ts"),o()(),l(7,"it-source-display",3),o(),l(8,"it-language-switcher-custom-example")(9,"it-source-display",4)),n&2&&(s(7),p("typescript",c.typescriptAppModule))},dependencies:[T,D,j],encapsulation:2});let t=e;return t})();var N=(()=>{let e=class e{constructor(){this.component=I.components.find(i=>i.name==="ItLanguageSwitcherComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["it-language-switcher-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,c){n&1&&(a(0,"h1",0),r(1,"Language Switcher"),o(),a(2,"p",1),r(3,"Per cambiare facilmente la lingua del tuo sito web"),o(),a(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-language-switcher-examples"),o(),a(7,"it-tab-item",3)(8,"h3"),r(9,"LanguageSwitcherComponent"),o(),l(10,"it-api-parameters",4),o()()),n&2&&(s(10),p("component",c.component))},dependencies:[A,M,z,F],encapsulation:2});let t=e;return t})();var H=[{path:"",component:N}],R=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=g({imports:[w.forChild(H),w]});let t=e;return t})();var de=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=g({imports:[C,P,E,R]});let t=e;return t})();export{de as LanguageSwitcherModule};
