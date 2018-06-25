import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { SourceDisplayComponent } from './source-display/source-display.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule.forRoot({ theme: 'agate'})
  ],
  declarations: [
    SourceDisplayComponent
  ],
  exports: [
    SourceDisplayComponent
  ]
})
export class SharedModule { }
