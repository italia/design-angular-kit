import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { SourceDisplayComponent } from './source-display/source-display.component';
import { ApiParametersComponent } from './api-parameters/api-parameters.component';
import { ItComponentsModule } from 'design-angular-kit/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    ItComponentsModule
  ],
  declarations: [
    SourceDisplayComponent,
    ApiParametersComponent
  ],
  exports: [
    SourceDisplayComponent,
    ApiParametersComponent,
    ItComponentsModule
  ]
})
export class SharedModule {
}
