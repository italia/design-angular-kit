[![NPM](https://img.shields.io/npm/v/design-angular-kit/unstable.svg)](https://www.npmjs.com/package/design-angular-kit)
[![Build](https://github.com/italia/design-angular-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/italia/design-angular-kit/actions)
[![codecov](https://codecov.io/gh/italia/design-angular-kit/branch/main/graph/badge.svg?token=0Ud6YSFi0r)](https://codecov.io/gh/italia/design-angular-kit)
[![License](https://img.shields.io/github/license/italia/design-angular-kit.svg)](https://github.com/italia/design-angular-kit/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/italia/design-angular-kit.svg)](https://github.com/italia/design-angular-kit/issues)
[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)

# Design Angular Kit

Design Angular Kit è un toolkit basato su Bootstrap Italia per la creazione di applicazioni web sviluppate con Angular.

_⚠️ Attenzione: questo codice è ancora in fase di sviluppo e non è pronto per essere utilizzato! Stiamo lavorando all'aggiornamento per portare il kit alla versione 1.0.0, commenti e contributi di tutta la community sono più che benvenuti! Se si necessita della vecchia versione il codice e la sua documentazione possono essere reperiti [qua](https://github.com/italia/design-angular-kit/tree/0.x)._

## Verso la versione 1.0.0 📣 

Sono partite le lavorazioni per l'aggiornamento del kit Angular a Bootstrap Italia 2 (basato su Bootstrap 5). 
Sul branch `main` potete trovare il codice dei lavori in corso e nella [issue di riferimento](https://github.com/italia/design-angular-kit/issues/126) un piano preliminare delle attività, consolidato nella [milestone Version 1.0.0](https://github.com/italia/design-angular-kit/milestone/3). La vecchia versione è da considerarsi deprecata.
**Commenti e contributi di tutta la community sono più che benvenuti!** 🎉

#### Link veloci
[Preview di Vercel (aggiornata ad ogni commit)](https://design-angular-kit.vercel.app/) |
[Discussione sulla nuova release](https://github.com/italia/design-angular-kit/discussions/127) |
[Milestone 1.0.0](https://github.com/italia/design-angular-kit/milestone/3)

## Come iniziare

Design Angular Kit è disponibile su NPM, per installarlo su una applicazione esistente sulla quale provare la libreria (attualmente non stabile) esegui il comando

```
npm install design-angular-kit@unstable --save
```

#### Importazione stili bootstrap-italia
Configura gli stili richiesti nel file `styles.scss`. Importa la libreria SCSS come mostrato nell'esempio qui sotto.

```scss
// Importazione libreria SCSS di bootstrap-italia
@import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';

```

#### Come personalizzare e sovrascrivere le variabili di default della libreria (es. colori, font-family, misure, ecc.)

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
@import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
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
