import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule  } from 'ngx-highlightjs';

import { SourceDisplayComponent } from './source-display/source-display.component';
import { ApiParametersComponent } from './api-parameters/api-parameters.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    DesignAngularKitModule
  ],
  declarations: [
    SourceDisplayComponent,
    ApiParametersComponent
  ],
  exports: [
    SourceDisplayComponent,
    ApiParametersComponent,
    DesignAngularKitModule
  ]
})
export class SharedModule { }