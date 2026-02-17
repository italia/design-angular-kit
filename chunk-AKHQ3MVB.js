import{a as z,b as I,c as T,d as A}from"./chunk-CJGNGVIB.js";import{Sa as v,b,c as x,d as y,la as E,ma as M}from"./chunk-HN3BY7NK.js";import"./chunk-MLMGL4QO.js";import{h as w}from"./chunk-A2FNTR3N.js";import{m as L}from"./chunk-3O7E6U5R.js";import{Hb as m,Ib as n,Jb as i,Kb as r,V as g,Xa as l,Z as C,gc as o,ic as d,jb as s,kb as u,vc as f,wc as h}from"./chunk-6HYXSLXH.js";import{a as S}from"./chunk-GAL4ENT6.js";var P=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-language-switcher-example"]],standalone:!1,decls:9,vars:3,consts:[["href","https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione"],[1,"bd-example"],[1,"mt-5"]],template:function(t,p){t&1&&(n(0,"p"),o(1," Per configurzione predefinit\xE0 verranno mostrate le lingue disponibili configurate tramite "),n(2,"a",0),o(3,"ngx-translate"),i()(),n(4,"div",1),r(5,"it-language-switcher"),n(6,"p",2),o(7),f(8,"translate"),i()()),t&2&&(l(7),d("Risultato: ",h(8,1,"it.utils.select-language")))},dependencies:[v,x],encapsulation:2})}}return e})();var D=(()=>{class e{constructor(){this.translateService=C(b),this.availableLanguages=this.translateService.getLangs().map(a=>S(S({code:a,label:a},a==="it"&&{label:"Italiano"}),a==="en"&&{label:"English"}))}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-language-switcher-custom-example"]],standalone:!1,decls:10,vars:5,consts:[[3,"innerText"],[1,"bd-example"],[3,"availableLanguages"],[1,"mt-5"]],template:function(t,p){t&1&&(n(0,"h3"),o(1,"Personalizzazione"),i(),n(2,"p"),o(3,"Puoi personalizzare le label delle lingue, passando un "),r(4,"code",0),i(),n(5,"div",1),r(6,"it-language-switcher",2),n(7,"p",3),o(8),f(9,"translate"),i()()),t&2&&(l(4),m("innerText","Array<AvailableLanguage>"),l(2),m("availableLanguages",p.availableLanguages),l(2),d("Risultato: ",h(9,3,"it.utils.select-language")))},dependencies:[v,x],encapsulation:2})}}return e})();var j=(()=>{class e{constructor(){this.typescriptAppModule=`export class AppModule {
  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['es']);
  }
}`}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-language-switcher-examples"]],standalone:!1,decls:10,vars:1,consts:[["html",`<p>
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
}`]],template:function(t,p){t&1&&(r(0,"it-language-switcher-example")(1,"it-source-display",0),n(2,"div",1)(3,"p"),o(4,"Puoi aggiungere altre lingue aggiungendo nel tuo "),n(5,"span",2),o(6,"app.module.ts"),i()(),r(7,"it-source-display",3),i(),r(8,"it-language-switcher-custom-example")(9,"it-source-display",4)),t&2&&(l(7),m("typescript",p.typescriptAppModule))},dependencies:[z,P,D],encapsulation:2})}}return e})();var R=(()=>{class e{constructor(){this.component=I.components.find(a=>a.name==="ItLanguageSwitcherComponent")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["it-language-switcher-index"]],standalone:!1,decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,p){t&1&&(n(0,"h1",0),o(1,"Language Switcher"),i(),n(2,"p",1),o(3,"Per cambiare facilmente la lingua del tuo sito web"),i(),n(4,"it-tab-container")(5,"it-tab-item",2),r(6,"it-language-switcher-examples"),i(),n(7,"it-tab-item",3)(8,"h3"),o(9,"LanguageSwitcherComponent"),i(),r(10,"it-api-parameters",4),i()()),t&2&&(l(10),m("component",p.component))},dependencies:[T,M,E,j],encapsulation:2})}}return e})();var G=[{path:"",component:R}],F=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[w.forChild(G),w]})}}return e})();var ue=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=g({imports:[L,A,y,F]})}}return e})();export{ue as LanguageSwitcherModule};
