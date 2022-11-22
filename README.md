[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![License](https://img.shields.io/github/license/italia/design-angular-kit.svg)](https://github.com/italia/design-angular-kit/blob/master/LICENSE)

# Design Angular Kit (versione 0.x)

Design Angular Kit è un toolkit basato su Bootstrap Italia per la creazione di applicazioni web sviluppate con Angular.

_⚠️ Attenzione: questo codice presente nel branch 0.x è deprecato e contiene il vecchio codice di Design Angular kit e la relativa documentazione_

## Come iniziare

Design Angular Kit è disponibile su NPM, se hai una applicazione esistente esegui il comando seguente per scaricarlo nel tuo progetto.
```
npm install design-angular-kit --save
```

#### Integrazione con Angular CLI
Configura gli stili richiesti nella sezione `styles`, come mostrato nell'esempio qui sotto.
```
"styles": [
  "node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css",
  "node_modules/bootstrap-italia/dist/css/italia-icon-font.css"
  //...
],
```

## Segnalazione bug e richieste di aiuto

Vuoi segnalare un bug o fare una richiesta?

Prima di tutto assicurati che sia un problema relativo al tema Design Angular Kit e non alla libreria Bootstrap Italia da cui deriva 
(in tal caso puoi fare riferimento al [repository di Bootstrap Italia](https://github.com/italia/bootstrap-italia)), poi
dai un'occhiata a come [creare una issue](https://github.com/italia/design-angular-kit/blob/master/CONTRIBUTING.md#creare-una-issue).

## Come contribuire

Vorresti dare una mano su Design Angular Kit? **Sei nel posto giusto!**
 
Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza sulle
[linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
e fai riferimento alle [indicazioni su come contribuire a Design Angular Kit](https://github.com/italia/design-angular-kit/blob/master/CONTRIBUTING.md).

A questo punto, è necessario impostare il tuo ambiente locale per la compilazione dei file sorgente e la generazione
della documentazione:

1. Clonare il progetto

```
git clone https://github.com/italia/design-angular-kit.git
git checkout 0.x
```

2. Installare [Node.js](https://nodejs.org) e [Yarn](https://yarnpkg.com)

3. Nella cartella di progetto installare le dipendenze con il tool Yarn

```
yarn
```

4. Lanciare l'applicazione in locale

```
yarn start
```

5. Per eseguire i test di unità eseguire il comando

```
yarn test
```

6. Per eseguire i test end to end eseguire il comando

```
yarn run e2e
```
