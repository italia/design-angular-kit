import { ModuleWithProviders, NgModule } from '@angular/core';
import { DesignAngularKitConfig } from './interfaces/design-angular-kit-config';
import { provideDesignAngularKit } from './provide-design-angular-kit';
import { ItComponentsModule } from './components/components.module';

@NgModule({
  imports: [ItComponentsModule],
  exports: [ItComponentsModule],
})
export class DesignAngularKitModule {
  public static forRoot(config?: DesignAngularKitConfig): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
      providers: [provideDesignAngularKit(config)],
    };
  }

  public static forChild(): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
    };
  }
}
