# Contribuire a Design Angular Kit

Prenditi un momento per leggere questo documento così da rendere il processo semplice e consistente con quello utilizzato
dal resto della comunità degli sviluppatori.

## Creare una issue

L'[issue tracker](https://github.com/italia/design-angular-kit/issues) è il posto giusto dove inserire segnalazioni di bug,
richieste di nuove funzionalità e creazione di pull request, nel rispetto di queste condizioni:

- Per favore, **non** usare l'issue tracker per richieste di supporto personali.
  [Slack di Developers Italia](https://slack.developers.italia.it/) o Stack Overflow sono i posti giusti a cui fare riferimento, dove sarà anche più facile troverete risposte immediate.

- Allo stesso modo, per favore **non** provocare gli altri o "trollare" nei commenti alle issue.
  Mantenere la discussione pertinente e rispettare le opinioni di tutti. Per confronti o questioni più articolate,
  è sempre auspicabile usare [Slack di Developers Italia](https://slack.developers.italia.it/) o il [Forum di Developers Italia](https://forum.italia.it/).
  
- Rispettare le indicazioni che trovate di seguito per l'utilizzo di label, la segnalazione di bug, e la creazione di pull request.

## Lavorazione di una issue

Per prendere in carico una issue, è necessario effettuare il fork del repository sul proprio account, secondo normale flusso GitHub.

Nel caso di contributor con accesso in scrittura al repository, è consigliabile creare un branch nominato in questo modo: `feature/##-descrizione-issue`, dove `##` è il numero di issue lavorata.

Al termine della lavorazione, per proporre il proprio codice per l'approvazione, è sufficiente aprire una Pull Request ([qui](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) le istruzioni nel caso di fork), assicurandosi di rispettare la checklist descritta nel [template preimpostato](https://github.com/italia/bootstrap-italia/blob/master/.github/PULL_REQUEST_TEMPLATE.md).

### Struttura del progetto

- Libreria: [/projects/design-angular-kit](/projects/design-angular-kit)
- Documentazione: [/src](/src)

### Convenzione dei messaggi nei commit

**design-angular-kit** usa i messaggi di commit per determinare il tipo di cambiamento nella codebase. 
Seguendo una convenzione per i messaggi di commit è possibile determinare automaticamente il prossimo numero di [versione semantica](https://semver.org/), generare un changelog e pubblicare la release.

Il progetto verificherà i tuoi messaggi di commit, che verranno rifiutati se non utilizzerai la convenzione descritta dai [Commit Convenzionali](https://www.conventionalcommits.org/en/v1.0.0/).

Si raccomanda di utilizzare i **tipi** nel seguente modo:

#### Tipi riservati alla libreria

Di seguito i tipi da utilizzare **esclusivamente** quando viene effettuata una modifica nella [libreria](/projects/design-angular-kit)

- **fix**: è stato eseguito un fix 
- **feat**: è stata aggiunta una nuova funzionalità
- **BREAKING CHANGE**: utilizzare il piè di pagina `BREAKING CHANGE` solo se sono state eseguite modifiche che non sono retro-compatibili con la versione precedente.

**IMPORTANTE**: non utilizzare questi tipi se si effettua una modifica alla [documentazione](/src) poiché non è necessario incrementare il versioning del progetto.

#### Alti tipi

- **docs**: cambia solo la documentazione (**commenti** sulla [libreria](/projects/design-angular-kit) o **modifiche** al codice della [documentazione](/src))
  - Esempio: `docs(fix): fixed button example` 
- **build**: modifiche che influiscono sul sistema di compilazione o sulle dipendenze esterne (ambito di esempio:
  gulp, broccoli, npm)
- **ci**: modifiche nei file e negli script di configurazione CI (esempi di ambito: Travis, Circle, BrowserStack,
  SauceLabs, GitHub)
- **perf**: una modifica al codice che migliora le prestazioni
- **refactor**: una modifica al codice che non risolve un bug né aggiunge una funzionalità
- **style**: modifiche che non influiscono sul significato del codice (spazi bianchi, formattazione, punto e virgola
  mancanti, ecc.)
- **test**: aggiunta di test mancanti o correzione di test esistenti
- **chore**: altri cambiamenti che non modificano file src o test
- **revert**: revert di un commit precedente

#### Strumenti utili 

Di seguito gli strumenti che possono essere usati per aiutare i contributor e ottenere messaggi di commit validi:

- CLI:
  - [commitizen](https://github.com/commitizen/cz-cli) 
  - [semantic-git-commit-cli](https://github.com/JPeer264/node-semantic-git-commit-cli)
- Visual Studio Code:
  - [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- WebStorm/IntelliJ IDEA:
  - [Conventional Commit](https://plugins.jetbrains.com/plugin/13389-conventional-commit)
  - [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template)

### Codice pulito

Scrivere codice pulito ci permettere di individuare ed evitare più facilmente gli errori.

Per fare ciò nel progetto è configurato [Angular ESLint](https://github.com/angular-eslint/angular-eslint) e [prettier](https://github.com/prettier/prettier) che ti aiuteranno a scrivere un codice pulito e affidabile. 

In particolare il tuo commit verrà rifiutato se i file in stage non rispettano le regole `eslint` e `prettier` configurate nel progetto.

#### Strumenti utili

Di seguito gli strumenti che possono essere usati per aiutare i contributor a rispettare le regole di stile imposte nel progetto:

- CLI:
  - `npm run lint`
  - `npm run lint:fix` (Verrà eseguito automaticamente in fase di pre-commit)
  - `npm run lint:format` (Verrà eseguito automaticamente in fase di pre-commit)
- Visual Studio Code:
  - Vai nelle impostazioni (<kbd>CTRL</kbd> + <kbd>,</kbd>)
  
  - EsLint:
    - Nella barra di ricerca in alto, digita `editor.codeActionsOnSave`
    - Fai clic su `Modifica in settings.json`. Questo aprirà il tuo settings.jsonfile VSCode e aggiungi

      ```json
      {
        "editor.codeActionsOnSave": { "source.fixAll.eslint": true},
        "eslint.alwaysShowStatus": true
      } 
      ```
    - Salva

  - Prettier:
    - Cerca nelle impostazioni `Editor: Format on Save` e metti la spunta nell'opzione
    - Prova a formattare un file: Tasto destro => Formatta documento. Ti verrà chiesto quale formatter usare, scegli
      prettier.
- WebStorm/IntelliJ IDEA:
  - settings > languages & frameworks > javascript > code quality tools > eslint
    - Imposta su `Manual ESLint configuration` e metti il check su `Run eslint --fix on save`

  - settings > languages & frameworks > javascript > prettier
    - Imposta su `Manual Prettier configuration` e metti il check su `Run on save`

## Issue e label

Il repository di Design Angular Kit usa alcune label per identificare le issue (criticità):

- `accessibility` - Criticità riguardanti accessibilità.
- `bug` - Segnalazione di malfunzionamenti nel codice o problemi tecnici con i tool di compilazione.
- `design` - Criticità riguardanti il design dei componenti e la loro conformità alle [linee guida di design per i servizi web delle Pubbliche Amministrazioni](https://design-italia.readthedocs.io/it/stable/index.html).
- `docs` - Criticità riguardanti la documentazione dei componenti.
- `duplicate` - Criticità o pull request duplicata.
- `enhancement` - Criticità che possono riguardare nuovi componenti o nuove funzionalità.
- `good first issue` - Criticità particolarmente semplici da prendere in carico per chi non ha conoscenza approfondita del progetto.
- `help wanted` - Criticità pronte per ricevere contributi da parte della comunità e di nuovi aspiranti sviluppatori.
- `invalid` - Criticità considerata invalida.
- `question` - Indica una criticità o pull request per la quale si ha bisogno di maggiori informazioni.
- `wontfix` - Indica che la criticità o la pull request viene chiusa senza alcun lavoro aggiuntivo.

## Licenza

Contribuendo al codice o alla documentazione accetti di rilasciare il tuo codice secondo la licenza open source già presente nel repository.
