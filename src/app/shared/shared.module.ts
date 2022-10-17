import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule  } from 'ngx-highlightjs';

import { SourceDisplayComponent } from './source-display/source-display.component';
import { ApiParametersComponent } from './api-parameters/api-parameters.component';
import { TabsModule } from '../tabs/tabs.module';
import { ItTabsModule } from 'projects/design-angular-kit/src/lib/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,
    ItTabsModule
  ],
  declarations: [
    SourceDisplayComponent,
    ApiParametersComponent
  ],
  exports: [
    SourceDisplayComponent,
    ApiParametersComponent,
    ItTabsModule
  ]
})
export class SharedModule { }
