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
    <a href="https://www.npmjs.com/package/design-angular-kit"><img src="https://img.shields.io/npm/v/design-angular-kit.svg?logo=npm" alt="NPM"></a>
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

_Read this in other languages: [English 🇬🇧](README.EN.md)._

_⚠️ Se si necessita della vecchia versione il codice e la sua documentazione possono essere reperiti [qua](https://github.com/italia/design-angular-kit/tree/0.x)._

**Commenti e contributi di tutta la community sono più che benvenuti!** 🎉

## Intro

**Design Angular kit** è un set di componenti Angular che implementa [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) e gli stili presenti su [Design UI Kit](https://github.com/italia/design-ui-kit).
La versione pubblica della documentazione della libreria è disponibile [qui](https://italia.github.io/design-angular-kit) per l'ultima release stabile pubblicata, mentre [qui](https://design-angular-kit.vercel.app/) per la versione di sviluppo relativa al branch `main`.
Per giocare con la libreria è disponibile il [Playground Angular Kit](https://github.com/italia/design-angular-kit-playground).

## Indice

- [Come usare il kit](#come-usare-il-kit)
- [Come contribuire](#come-contribuire-)
- [Come contribuire con il codice](#come-contribuire-con-il-codice)
- [Link utili](#link-utili)

## Come usare il kit

Design Angular Kit è disponibile su NPM, per installarlo su una applicazione esistente sulla quale provare la libreria esegui il comando

```sh
npm install design-angular-kit --save
```

Scegli la versione corrispondente alla tua versione Angular:

| Angular | design-angular-kit |
| ------- | ------------------ |
| 18+     | v1.1.0 +           |
| 17+     | v1.0.0 +           |

In alternativa, puoi lanciar il comando

```sh
ng add design-angular-kit --project <projectName>
```

Eseguirà in serie:

- scelta della corretta versione da installare
- installazione della dipendenza
- aggiunta della dipendenza al package.json
- configurazione dell'applicazione

Le istruzioni del paragrafo successivo, **Configurazione**, verranno eseguite automaticamente, eccetto per la personalizzazione della configurazione di _i18n_.

## Configurazione

### Configurazione app

La libreria `design-angular-kit` può essere utilizzata con i componenti _standalone_ o con l'applicazione che utilizza i moduli. Segui la sezione di
configurazione che corrisponde alla tua applicazione.

#### Applicazione standalone

Utilizza la funzione `provideDesignAngularKit` nella configurazione dell'applicazione `ApplicationConfig` per
poter inizializzare le funzionalità della libreria.

```typescript
import { provideDesignAngularKit } from 'design-angular-kit';

export const appConfig: ApplicationConfig = {
  providers: [...provideDesignAngularKit()],
};
```

#### Applicazione modulare

È necessario importare `DesignAngularKitModule` all'interno del modulo principale dell'applicazione (solitamente denominato **AppModule**)
utilizzando il metodo `forRoot` per poter inizializzare le funzionalità della libreria e **importare tutti i componenti**.

```typescript
import { DesignAngularKitModule } from 'design-angular-kit';

@NgModule({
  imports: [...DesignAngularKitModule.forRoot()],
})
export class AppModule {}
```

Utilizza il metodo `forChild` durante l'importazione del modulo `DesignAngularKitModule` in altri moduli dell'applicazione per **importare tutti i componenti** della libreria.

```typescript
import { DesignAngularKitModule } from 'design-angular-kit';

@NgModule({
  imports: [...DesignAngularKitModule.forChild()],
  exports: [DesignAngularKitModule],
})
export class SharedModule {}
```

#### Applicazione ibrida

Se nella tua applicazione è presente il modulo **AppModule** ma vuoi utilizzare i nostri **componenti con la configurazione _standalone_**,
utilizza la funzione `provideDesignAngularKit` all'interno del modulo principale dell'applicazione per poter inizializzare le funzionalità della libreria.

```typescript
import { provideDesignAngularKit } from 'design-angular-kit';

@NgModule({
  imports: [],
  providers: [provideDesignAngularKit()],
})
export class AppModule {}
```

#### Parametri di configurazione

Sia per la funzione `provideDesignAngularKit` che per il modulo `DesignAngularKitModule.forRoot()` è possibile utilizzare una configurazione iniziale [`DesignAngularKitConfig`](/projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts).

```typescript
import { provideDesignAngularKit, DesignAngularKitModule, DesignAngularKitConfig } from 'design-angular-kit';

// Puoi aggiungere alla libreria una configurazione iniziale
const initConfig: DesignAngularKitConfig | undefined = {
  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  assetBasePath: string | undefined,

  /**
   * Load the <a href="https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/#fonts">bootstrap-italia fonts</a>
   * @default true
   */
  loadFont: boolean | undefined,

  ...
};

provideDesignAngularKit(initConfig)

DesignAngularKitModule.forRoot(initConfig)
```

### Importazione stili bootstrap-italia

Configura gli stili richiesti nel file `styles.scss`. Importa la libreria SCSS come mostrato nell'esempio qui sotto.

```scss
// Importazione libreria SCSS di bootstrap-italia
@import 'bootstrap-italia/src/scss/bootstrap-italia';
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

```json
{
 "assets": [
    ...
    {
      "glob": "**/*",
      "input": "./node_modules/bootstrap-italia/",
      "output": "/bootstrap-italia/"
    }
  ]
}
```

### Supporto i18n (localizzazione)

La libreria usa [ngx-translate](https://github.com/ngx-translate/core) per aggiungere le localizazioni i18n.

Modifica il tuo `angular.json` aggiungendo:

```json
{
  "assets": [
    ...
    {
      "glob": "**/*",
      "input": "./node_modules/design-angular-kit/assets/i18n",
      "output": "/bootstrap-italia/i18n/"
    }
  ]
}
```

Puoi utilizzare le label localizzate della libreria `design-angular-kit` nella tua applicazione, ad esempio `{{'it.errors.required-field' | translate}}`. [Vedi le nostre label](projects/design-angular-kit/assets/i18n/it.json)

#### Localizzazione esistente

Se utilizzi già i file di localizzazione nella tua app, puoi utilizzare la libreria [ngx-translate-multi-http-loader](https://www.npmjs.com/package/ngx-translate-multi-http-loader)
per caricare sia i file di localizzazione dell'app che quelli della libreria `design-angular-kit`

**Utilizzando la funzione `provideDesignAngularKit`:**

```typescript
import { HttpBackend } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { provideDesignAngularKit } from 'design-angular-kit';

provideDesignAngularKit({
  translateLoader: (itPrefix: string, itSuffix: string) => ({
    provide: TranslateLoader,
    useFactory: (http: HttpBackend) =>
      new MultiTranslateHttpLoader(http, [
        { prefix: itPrefix, suffix: itSuffix }, // Load library translations first, so you can edit the keys in your localization file
        { prefix: './assets/i18n/' }, // Your i18n location
      ]),
    deps: [HttpBackend],
  }),
});
```

**Utilizzando il modulo `DesignAngularKitModule`:**

```typescript
import { HttpBackend } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { DesignAngularKitModule } from 'design-angular-kit';

DesignAngularKitModule.forRoot({
  translateLoader: (itPrefix: string, itSuffix: string) => ({
    provide: TranslateLoader,
    useFactory: (http: HttpBackend) =>
      new MultiTranslateHttpLoader(http, [
        { prefix: itPrefix, suffix: itSuffix }, // Load library translations first, so you can edit the keys in your localization file
        { prefix: './assets/i18n/' }, // Your i18n location
      ]),
    deps: [HttpBackend],
  }),
});
```

#### Personalizzazione della localizzazione

Se vuoi personalizzare le nostre label:

- Non includere il supporto i18n nel tuo `angular.json`
  - Crea i tuoi file di localizzazione personalizzati nella tua cartella `assets/bootstrap-italia/i18n/` (crea il percorso se non esiste)
  - Il json deve avere [questo formato](projects/design-angular-kit/assets/i18n/it.json).
  - Aggiungi nella configurazione iniziale della libreria il `translateLoader` custom, sostituendo la stringa `assets/bootstrap-italia/i18n/` all'attributo `itPrefix`
- Oppure, aggiungi le localizzazioni nei tuoi file json, sovrascrivendo le [chiavi del json della libreria](projects/design-angular-kit/assets/i18n/it.json).

### Utilizzo

Utilizzando il modulo `DesignAngularKitModule` tutti i componenti della libreria verranno importati nell'applicazione.

In alternativa, poiché tutti i nostri componenti e direttive sono _standalone_, puoi importare solo i componenti/moduli di cui hai bisogno, ad es. Alert, Paginazione e Breadcrumb.

```typescript
import { ItAlertComponent, ItPaginationComponent, ItBreadcrumbsModule } from 'design-angular-kit';

@NgModule({
  imports: [
    ItAlertComponent,
    ItPaginationComponent,
    ItBreadcrumbsModule, // Include ItBreadcrumbComponent e ItBreadcrumbItemComponent
  ],
})
export class YourAppModule {}
```

```typescript
import { ItAlertComponent, ItPaginationComponent, ItBreadcrumbsModule } from 'design-angular-kit';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItAlertComponent, ItPaginationComponent, ItBreadcrumbsModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {}
```

## Come contribuire 💙

👉🏻 È possibile contribuire alla libreria in vari modi:

- Con il proprio codice, prendendo in carico una issue tra quelle aperte e non già assegnate tra [le issue](https://github.com/italia/design-angular-kit/issues) di Angular Kit (è sufficiente anche un commento sulla issue per notificare la volontà di presa in carico).
- Attraverso la segnalazione di bug o miglioramenti al [repository ufficiale](https://github.com/italia/design-angular-kit/) di Angular Kit.
- Scrivendoci sul [canale dedicato](https://developersitalia.slack.com/messages/C04H3C19D52/) di Slack.

## Come contribuire con il codice

Vorresti dare una mano su Design Angular Kit? **Sei nel posto giusto!**

Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza sulle
[linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
e fai riferimento alle [indicazioni su come contribuire a Design Angular Kit](https://github.com/italia/design-angular-kit/blob/main/CONTRIBUTING.md).

### Impostare l'ambiente locale

I requisiti minimi del tuo ambiente locale devono essere:

- NodeJS (>= 20)

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

### Impostare l'ambiente locale con Devcontainer

I requisiti minimi del tuo ambiente locale per lavorare con i Devcontainer devono essere:

- Visual Studio Code
- Docker
- git

Avvia Visual Studio Code e installa l'estensione Dev Containers di Microsoft (ms-vscode-remote.remote-containers).

A questo punto, è necessario impostare seguire i seguenti step:

1. Clonare il progetto

```
git clone https://github.com/italia/design-angular-kit.git
```

2. Aprire la cartella di progetto con Visual Studio Code

3. Al caricamento, Visual Studio Code riconoscerà la presenta della configurazione di un Devcontainer. Aprire il progetto con il devcontainer. Altre info [qui](https://code.visualstudio.com/docs/devcontainers/create-dev-container).

4. Visual Studio Code effettuerà il setup del container, andando ad installare la corretta versione di NodeJs, di npm e delle estensioni dell'IDE. Le dipendenze di progetto saranno installate nel processo di creazione del container. L'ambiente di sviuppo sarà pronto a setup ultimato.

5. Lanciare l'applicazione in locale

```
npm run start
```

6. Per eseguire i test di unità eseguire il comando

```
npm run test
```

## Link utili

- [Playground Angular Kit](https://github.com/italia/design-angular-kit-playground)
- [Preview di Vercel (aggiornata ad ogni commit)](https://design-angular-kit.vercel.app/)

### Dalla community

- [Video Commit University: Sviluppare da zero una Angular Web App per la PA](https://www.youtube.com/watch?v=gH-0P36E5jk&t=385s) ([slide](https://www.slideshare.net/commitsoftware/sviluppare-da-zero-una-angular-web-app-per-la-pa))
- [Video Meetup Angular Roma: Angular, Bootstrap Italia e non solo..](https://www.youtube.com/live/asGk-mYU-zM?feature=share)

## Contributor della libreria

Un grazie speciale a chi ha reso possibile lo sviluppo di questa libreria

| [![Antonino Bonanno](https://github.com/AntoninoBonanno.png?size=100)](https://github.com/AntoninoBonanno) | [![Cristian Borelli](https://github.com/cri99.png?size=100)](https://github.com/cri99) | [![Alessio Napolitano](https://github.com/alenap93.png?size=100)](https://github.com/alenap93) |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Antonino Bonanno                                                                                           | Cristian Borelli                                                                       | Alessio Napolitano                                                                             |

e grazie in particolare al team di [NetService](https://www.net-serv.it/):

<a href="https://www.net-serv.it/"><img src="https://www.net-serv.it/css/internet/agid/images/svg/logo-netservicesrl.svg" alt="NetService logo" width="300"></a>

---

Tutti i contributor (_made with [contributors-img](https://contrib.rocks)_)

<a href = "https://github.com/italia/design-angular-kit/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=italia/design-angular-kit"/>
</a>
