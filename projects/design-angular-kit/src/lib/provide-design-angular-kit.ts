import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  importProvidersFrom,
  makeEnvironmentProviders,
  Provider,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { loadFonts } from 'bootstrap-italia';
import { DesignAngularKitConfig, IT_ASSET_BASE_PATH } from './interfaces/design-angular-kit-config';

/**
 * Configures DesignAngularKit library
 * @param config the DesignAngularKit config
 */
export function provideDesignAngularKit(config?: DesignAngularKitConfig): EnvironmentProviders {
  let assetBasePath = './bootstrap-italia';
  if (config?.assetBasePath) {
    assetBasePath = config.assetBasePath.endsWith('/')
      ? config.assetBasePath.substring(0, config.assetBasePath.lastIndexOf('/'))
      : config.assetBasePath;
  }

  const providers: Array<EnvironmentProviders | Provider> = [
    {
      provide: IT_ASSET_BASE_PATH,
      useValue: assetBasePath,
    },
    provideAnimationsAsync(),
    provideHttpClient(),
  ];

  if (config?.loadFont !== false) {
    // Add provider to initialize the bootstrap-italia font
    providers.push(
      provideAppInitializer(() => {
        const initializerFn = (() => {
          return () => {
            loadFonts(`${assetBasePath}/dist/fonts`);
          };
        })();
        return initializerFn();
      })
    );
  }

  // Add provider to initialize the TranslateModule
  const langPrefix = `${assetBasePath}/i18n/`;
  const langSuffix = `.json`; // TODO: add ?v${version} to prevent cache loading on version change
  providers.push(
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: config?.translateLoader?.(langPrefix, langSuffix) ?? {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, langPrefix, langSuffix),
          deps: [HttpClient],
        },
        defaultLanguage: 'it',
        useDefaultLang: true,
      })
    )
  );

  // Add provider to initialize library default languages
  providers.push(
    provideAppInitializer(() => {
      const initializerFn = ((translateService: TranslateService) => {
        return () => {
          translateService.addLangs(['it', 'en']); // Adds 'it' and 'en' as available languages.
        };
      })(inject(TranslateService));
      return initializerFn();
    })
  );

  return makeEnvironmentProviders(providers);
}
