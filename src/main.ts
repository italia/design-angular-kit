import { ApplicationRef, enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function bootstrap() {
  const { injector } = await platformBrowserDynamic().bootstrapModule(AppModule);

  if (isDevMode()) {
    const { enableDebugTools } = await import('@angular/platform-browser');
    const { components } = injector.get(ApplicationRef);
    enableDebugTools(components[0]);
  }
}

bootstrap();
