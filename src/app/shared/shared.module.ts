import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { SourceDisplayComponent } from './source-display/source-display.component';
import { ApiParametersComponent } from './api-parameters/api-parameters.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule.forRoot({ theme: 'agate'})
  ],
  declarations: [
    SourceDisplayComponent,
    ApiParametersComponent
  ],
  exports: [
    SourceDisplayComponent,
    ApiParametersComponent
  ]
})
export class SharedModule { }
