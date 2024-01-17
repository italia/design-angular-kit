import { InjectionToken } from '@angular/core';
import { DesignAngularKitInit } from './interfaces/design-angular-kit-init';

export const DESIGN_ANGULAR_KIT_CONFIG = new InjectionToken<DesignAngularKitConfig>('DesignAngularKitConfig');

export class DesignAngularKitConfig {

  /**
   * The init config
   * @private
   */
  private readonly initConfig?: DesignAngularKitInit;

  constructor(designAngularKitInit?: DesignAngularKitInit) {
    this.initConfig = designAngularKitInit;
  }

  /**
   * The initial path in the `href` attribute in the `IconComponent` component
   * @default './bootstrap-italia/dist/svg/sprites.svg'
   */
  get iconHref(): string {
    return this.initConfig?.iconHref || './bootstrap-italia/dist/svg/sprites.svg';
  }

}
