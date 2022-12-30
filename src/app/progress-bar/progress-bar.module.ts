import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarExampleComponent } from './progress-bar-example/progress-bar-example.component';
import { ProgressBarExamplesComponent } from './progress-bar-examples/progress-bar-examples.component';
import { ProgressBarIndexComponent } from './progress-bar-index/progress-bar-index.component';
import { ProgressBarLabelComponent } from './progress-bar-label/progress-bar-label.component';
import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate/progress-bar-indeterminate.component';
import { ProgressBarBgComponent } from './progress-bar-bg/progress-bar-bg.component';
import { ProgressBarButtonComponent } from './progress-bar-button/progress-bar-button.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProgressBarRoutingModule
  ],
  declarations: [
    ProgressBarExampleComponent, ProgressBarExamplesComponent, ProgressBarIndexComponent,
    ProgressBarLabelComponent, ProgressBarIndeterminateComponent, ProgressBarBgComponent,
    ProgressBarButtonComponent
  ]
})
export class ProgressBarModule { }
