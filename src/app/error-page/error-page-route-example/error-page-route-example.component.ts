import { Component } from '@angular/core';

@Component({
  selector: 'it-error-page-route-example',
  templateUrl: './error-page-route-example.component.html',
})
export class ErrorPageRouteExampleComponent {
  readonly notFound =
    "import {ItErrorPageComponent} from 'design-angular-kit';\n\n" +
    'const routes: Routes = [\n' +
    "   { path: 'error/not-found', component: ItErrorPageComponent, data: { errorCode: 404 } },\n" +
    "   { path: '**', redirectTo: 'error/not-found'  }\n" +
    ']';

  readonly forbidden =
    "import {ItErrorPageComponent} from 'design-angular-kit';\n\n" +
    'const routes: Routes = [\n' +
    "   { path: 'error/forbidden', component: ItErrorPageComponent, data: { errorCode: 403 } },\n" +
    ']';

  readonly internalServerError =
    "import {ItErrorPageComponent} from 'design-angular-kit';\n\n" +
    'const routes: Routes = [\n' +
    "   { path: 'error/server-error', component: ItErrorPageComponent, data: { errorCode: 500 } },\n" +
    ']';

  readonly custom =
    "import {ItErrorPageComponent} from 'design-angular-kit';\n\n" +
    'const routes: Routes = [\n' +
    '   { \n' +
    "     path: 'error/custom', \n" +
    '     component: ItErrorPageComponent,\n' +
    '     data: {\n' +
    '       errorCode: 503, // Opzionale \n' +
    '       showErrorCode: true, // Opzionale (utile per gli errori 404, 403, 500) \n' +
    '       errorTitle: "Servizio non disponibile", // Opzionale (puoi usare anche chiavi i18n) \n' +
    '       errorDescription: "Mi dispiace, momentaneamente questa risorsa non è disponibile", // Opzionale (puoi usare anche chiavi i18n) \n' +
    '       showBackButton: true, // Opzionale \n' +
    '       showHomeButton: false, // Opzionale \n' +
    '     } \n' +
    '   }\n' +
    ']';
}
