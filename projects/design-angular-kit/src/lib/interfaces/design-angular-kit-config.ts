import { InjectionToken, Provider } from '@angular/core';

/**
 * The bootstrap-italia asset folder path
 * @default ./bootstrap-italia
 */
export const IT_ASSET_BASE_PATH = new InjectionToken<string>('it-asset-base-path');

export interface DesignAngularKitConfig {
  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  assetBasePath?: string;

  /**
   * Load the <a href="https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/#fonts">bootstrap-italia fonts</a>
   * @default true
   */
  loadFont?: boolean;

  /**
   * The TranslateModule loader
   * @param itPrefix the design-angular-kit i18n path
   * @param itSuffix the design-angular-kit i18n suffix
   * @default
   * {
   *   provide: TranslateLoader,
   *   useFactory: (http: HttpClient) => new TranslateHttpLoader(http, `${assetBasePath}/i18n/`, `.json?v${version}`),
   *   deps: [HttpClient],
   * }
   */
  translateLoader?: (itPrefix: string, itSuffix: string) => Provider;
}
