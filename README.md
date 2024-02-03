<h1 align="center">Design Angular Kit</h1>

<p align="center">
  <img src=".github/angular_design_kit.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Design Angular Kit è un toolkit basato su Bootstrap Italia 
    <br> per la creazione di applicazioni web sviluppate con Angular.</i>
  <br>
</p>

<p align="center">
  <a href="https://italia.github.io/design-angular-kit"><strong>italia.github.io/design-angular-kit</strong></a>
  <br>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/design-angular-kit"><img src="https://img.shields.io/npm/v/design-angular-kit/prerelease.svg" alt="NPM"></a>
    <a href="https://www.npmjs.com/package/design-angular-kit"><img src="https://img.shields.io/npm/v/design-angular-kit/unstable.svg" alt="NPM"></a>
</p>

<p align="center">
    <a href="https://github.com/italia/design-angular-kit/actions"><img src="https://github.com/italia/design-angular-kit/actions/workflows/publish-release.yml/badge.svg" alt="Build"></a>
    <a href="https://codecov.io/gh/italia/design-angular-kit"><img src="https://codecov.io/gh/italia/design-angular-kit/branch/main/graph/badge.svg?token=0Ud6YSFi0r" alt="codecov"></a>
    <a href="https://github.com/italia/design-angular-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/italia/design-angular-kit.svg" alt="License"></a>
    <a href="https://github.com/italia/design-angular-kit/issues"><img src="https://img.shields.io/github/issues/italia/design-angular-kit.svg" alt="GitHub issues"></a>
</p>

<p align="center">
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release" alt="semantic-release: angular" /></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=Prettier" alt="code style: prettier" /></a>
  <a href="https://github.com/eslint/eslint"><img src="https://img.shields.io/badge/formatter-angular--eslint-4B32C3?logo=eslint" alt="formatter: angular-eslint" /></a>
</p>

<p align="center">
  <a href="https://developersitalia.slack.com/messages/C04H3C19D52/"><img src="https://img.shields.io/badge/Slack%20channel-%23design--dev--angular-blue.svg" alt="Join the #design-dev-angular channel" /></a>
  <a href="https://slack.developers.italia.it/"><img src="https://slack.developers.italia.it/badge.svg" alt="Get invited" /></a></p>

_⚠️ Attenzione: questo codice è ancora in fase di sviluppo e non è pronto per essere utilizzato! Stiamo lavorando all'aggiornamento per portare il kit alla versione 1.0.0, commenti e contributi di tutta la community sono più che benvenuti! Se si necessita della vecchia versione il codice e la sua documentazione possono essere reperiti [qua](https://github.com/italia/design-angular-kit/tree/0.x)._

## Verso la versione 1.0.0 📣 

Sono partite le lavorazioni per l'aggiornamento del kit Angular a Bootstrap Italia 2 (basato su Bootstrap 5). 
Sul branch `main` potete trovare il codice dei lavori in corso e nella [milestone Version 1.0.0](https://github.com/italia/design-angular-kit/milestone/3) un piano preliminare delle attività. La vecchia versione è da considerarsi deprecata.

👉🏻 È possibile contribuire a questa nuova versione in vari modi:

*   Con il proprio codice, prendendo in carico una issue tra quelle aperte e non già assegnate tra [le issue](https://github.com/italia/design-angular-kit/issues) di Angular Kit (è sufficiente anche un commento sulla issue per notificare la volontà di presa in carico).
*   Attraverso la segnalazione di bug o miglioramenti al [repository ufficiale](https://github.com/italia/design-angular-kit/) di Angular Kit.
*   Scrivendoci sul [canale dedicato](https://developersitalia.slack.com/messages/C04H3C19D52/) di Slack.

**Commenti e contributi di tutta la community sono più che benvenuti!** 🎉

## Link utili
- [Video Commit University: Sviluppare da zero una Angular Web App per la PA](https://www.youtube.com/watch?v=gH-0P36E5jk&t=385s) ([slide](https://www.slideshare.net/commitsoftware/sviluppare-da-zero-una-angular-web-app-per-la-pa))
- [Video Meetup Angular Roma: Angular, Bootstrap Italia e non solo..](https://www.youtube.com/live/asGk-mYU-zM?feature=share)
- [Demo Design Angular Kit](https://github.com/cri99/demo-design-angular-kit)
- [Preview di Vercel (aggiornata ad ogni commit)](https://design-angular-kit.vercel.app/)
- [Discussione sulla nuova release](https://github.com/italia/design-angular-kit/discussions/127)
- [Milestone 1.0.0](https://github.com/italia/design-angular-kit/milestone/3)

## Installazione

Design Angular Kit è disponibile su NPM, per installarlo su una applicazione esistente sulla quale provare la libreria (attualmente non stabile) esegui il comando

```
npm install design-angular-kit@prerelease --save
```

Scegli la versione corrispondente alla tua versione Angular:

| Angular | design-angular-kit    |
|---------|-----------------------|
| 17+     | v1.0.0-prerelease.2 + |
| 16+     | v1.0.0-17 +           |
| 15+     | v1.0.0-2 +            |

## Come iniziare

Procedi a registrare `DesignAngularKitModule` nel tuo **app.module.ts**.

```typescript
import {DesignAngularKitModule, ItComponentsModule} from 'design-angular-kit';

@NgModule({
  imports: [
    ...
    DesignAngularKitModule,
    ItComponentsModule // importa tutti i componenti della libreria
  ]
})
```
<details>
  <summary>Configurazione custom della libreria</summary>

  ```typescript
  import {DesignAngularKitModule, DesignAngularKitInit} from 'design-angular-kit';
  
  // Puoi aggiungere alla libreria una configurazione iniziale
  const initConfig: DesignAngularKitInit | undefined = {
    /**
     * The initial path in the `href` attribute in the `IconComponent` component
     * @default './bootstrap-italia/dist/svg/sprites.svg'
     */
    iconHref: string | undefined,
  };
  
  @NgModule({
    imports: [
      ...
      DesignAngularKitModule.forRoot(initConfig)
    ]
  })
  ```
</details>

Usa `ItComponentsModule` per importare tutti i componenti della libreria, in alternativa puoi importare solo i componenti/moduli di cui hai bisogno, ad es. Alert, Paginazione e Breadcrumb.

```typescript
import {ItAlertComponent, ItPaginationComponent, ItBreadcrumbsModule} from 'design-angular-kit';

@NgModule({
  imports: [
    ItAlertComponent, 
    ItPaginationComponent, 
    ItBreadcrumbsModule // Include ItBreadcrumbComponent e ItBreadcrumbItemComponent 
  ],
})
export class YourAppModule {
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItAlertComponent],
  templateUrl: './product.component.html'
})
export class ProductComponent {
}
```

### Importazione stili bootstrap-italia
Configura gli stili richiesti nel file `styles.scss`. Importa la libreria SCSS come mostrato nell'esempio qui sotto.

```scss
// Importazione libreria SCSS di bootstrap-italia
@import "bootstrap-italia/src/scss/bootstrap-italia";
```

<details>
  <summary>Come personalizzare e sovrascrivere le variabili di default della libreria (es. colori, font-family, misure, ecc.)</summary>

Bootstrap Italia eredita ed estende tutte le variabili di default di Bootstrap, sovrascrivendo 
alcuni valori in fase di compilazione e impostandone di nuovi all’occorenza. Un esempio fra tutti è 
il valore del colore $primary che in Bootstrap Italia è rappresentato dal colore blu #0066CC,
tipico della libreria.

L’utilizzo del blu #0066CC dovrebbe però essere riservato alle amministrazioni centrali dello
Stato, e quindi ci si può trovare nella condizione di dover personalizzare i valori delle variabili
colore di Bootstrap Italia, impostando nuovi valori per le proprie necessità.


Questo colore e le altre tonalità vengono generate a partire dalla terna HSB, pertanto occorre modificare le variabili primary-h, primary-s e primary-b.
Per avere la corrispondenza tra valore esadecimale del colore e HSB si può utilizzare il portale rgb.to, ad esempio https://rgb.to/0066CC.

Di seguito un esempio di file `styles.scss` con la personalizzazione dei colori.
Le personalizzazioni delle variabili devono sempre essere effettuate prima dell'importazione del file `bootstrap-italia.scss`

```scss
// modifica completa del template: è possibile ricompilare la libreria modificando alcune variabili SCSS

// Per l'override del colore $primary della palette in formato HSB (colore #FF3333 https://rgb.to/ff3333):
$primary-h: 0;
$primary-s: 80;
$primary-b: 100;

// Per l'override della famiglia di caratteri
$font-family-serif: 'Custom Font', Georgia, serif;
$font-family-sans-serif: 'Custom Font', Arial, Helvetica, sans-serif;
$font-family-monospace: 'Custom Font', 'Courier New', Courier, monospace;

// Importazione libreria SCSS di bootstrap-italia
@import 'bootstrap-italia/src/scss/bootstrap-italia';
```
</details>

### Supporto icone e assets

Per aggiungere il supporto icone/assets, modifica il tuo `angular.json` aggiungendo:

```
 "assets": [
    ...
    {
      "glob": "**/*",
      "input": "./node_modules/bootstrap-italia/",
      "output": "/bootstrap-italia/"
    }
  ]
 ```

### Supporto i18n (localizzazione)

La libreria usa [ngx-translate](https://github.com/ngx-translate/core) per aggiungere le localizazioni i18n.

Modifica il tuo `angular.json` aggiungendo:

```
 "assets": [
    ...
    {
      "glob": "**/*",
      "input": "./node_modules/design-angular-kit/assets/i18n",
      "output": "/bootstrap-italia/i18n/"
    }
  ]
 ```

#### Localizzazione esistente

Se utilizzi già i file di localizzazione nella tua app, puoi utilizzare la libreria [ngx-translate-multi-http-loader](https://www.npmjs.com/package/ngx-translate-multi-http-loader)
per caricare i file di localizzazione dell'app e di `design-angular-kit`

Modifica nel tuo `app.module.ts`:

```typescript
@NgModule({
  imports: [
    ...
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) => new MultiTranslateHttpLoader(http, [
          './bootstrap-italia/i18n/', // Load library translations first, so you can edit the keys in your localization file
          './assets/i18n/' // Your i18n location
        ]),
        deps: [HttpBackend]
      },      
      defaultLanguage: 'it'
    }),
    DesignAngularKitModule
  ]
})
```

Se vuoi personalizzare le nostre label puoi aggiungere le localizzazioni nei tuoi file json, sovrascrivendo le [chiavi del json della libreria](projects/design-angular-kit/assets/i18n/it.json).

Puoi utilizzare le label localizzate di `design-angular-kit` nella tua applicazione, ad esempio `{{'it.errors.required-field' | translate}}`. [Vedi le nostre label](projects/design-angular-kit/assets/i18n/it.json)

#### Localizzazione non esistente

Se non utilizzi i file di localizzazione nella tua app, devi aggiungere il provider `TranslateStore` nel tuo `app.module.ts`:

```typescript
@NgModule({
  imports: [
    ...
    DesignAngularKitModule,
  ],
  providers: [
    TranslateStore
  ],
})
```

Se vuoi personalizzare le nostre label:  
- Non includere il supporto i18n nel tuo `angular.json` ma crea i tuoi file di localizzazione personalizzati nella tua cartella `assets/bootstrap-italia/i18n/` (crea il percorso se non esiste). 
- Il json deve avere [questo formato](projects/design-angular-kit/assets/i18n/it.json).

### Supporto animazione

La libreria usa BrowserAnimationsModule per gestire alcune animazioni.

Per abilitarle, bisogna aggiungere al tuo `app.module.ts` il modulo :

```typescript
imports: [
  ...
  BrowserAnimationsModule
]
```

## Segnalazione bug e richieste di aiuto

Vuoi segnalare un bug o fare una richiesta?

Prima di tutto assicurati che sia un problema relativo al tema Design Angular Kit e non alla libreria Bootstrap Italia da cui deriva 
(in tal caso puoi fare riferimento al [repository di Bootstrap Italia](https://github.com/italia/bootstrap-italia)), poi
dai un'occhiata a come [creare una issue](https://github.com/italia/design-angular-kit/blob/main/CONTRIBUTING.md#creare-una-issue).

## Come contribuire

Vorresti dare una mano su Design Angular Kit? **Sei nel posto giusto!**
 
Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza sulle
[linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
e fai riferimento alle [indicazioni su come contribuire a Design Angular Kit](https://github.com/italia/design-angular-kit/blob/main/CONTRIBUTING.md).

A questo punto, è necessario impostare il tuo ambiente locale per la compilazione dei file sorgente e la generazione
della documentazione:

1. Clonare il progetto

```
git clone https://github.com/italia/design-angular-kit.git
```

2. Nella cartella di progetto installare le dipendenze

```
npm i
```

3. Lanciare l'applicazione in locale

```
npm run start
```

4. Per eseguire i test di unità eseguire il comando

```
npm run test
```

# Contributor della libreria

Un grazie speciale a chi ha reso possibile lo sviluppo di questa nuova versione!

[![Cristian Borelli](https://github.com/cri99.png?size=100)](https://github.com/cri99) | [![Antonino Bonanno](https://github.com/AntoninoBonanno.png?size=100)](https://github.com/AntoninoBonanno) | [![NetService](https://www.net-serv.it/css/internet/agid/images/svg/logo-netservicesrl.svg)](https://www.net-serv.it/) | [![Alessio Napolitano](https://github.com/alenap93.png?size=100)](https://github.com/alenap93) |
--- | --- | --- | --- |
Cristian Borelli | Antonino Bonanno | NetService | Alessio Napolitano |

---

Tutti i contributor (*made with [contributors-img](https://contrib.rocks)*)

<a href = "https://github.com/italia/design-angular-kit/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=italia/design-angular-kit"/>
</a>
