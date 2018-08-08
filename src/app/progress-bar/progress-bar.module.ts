import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarExampleComponent } from './progress-bar-example/progress-bar-example.component';
import { ProgressBarExamplesComponent } from './progress-bar-examples/progress-bar-examples.component';
import { ProgressBarIndexComponent } from './progress-bar-index/progress-bar-index.component';
import { ProgressBarLabelComponent } from './progress-bar-label/progress-bar-label.component';
import { ProgressBarHeightComponent } from './progress-bar-height/progress-bar-height.component';
import { ProgressBarBgComponent } from './progress-bar-bg/progress-bar-bg.component';

@NgModule({
  imports: [
    CommonModule,
    DesignAngularKitModule,
    SharedModule,
    ProgressBarRoutingModule
  ],
  declarations: [
    ProgressBarExampleComponent, ProgressBarExamplesComponent, ProgressBarIndexComponent,
    ProgressBarLabelComponent, ProgressBarHeightComponent, ProgressBarBgComponent
  ]
})
export class ProgressBarModule { }
