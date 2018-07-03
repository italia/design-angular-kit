import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ProgressBarComponent],
  exports: [CheckboxComponent, ProgressBarComponent]
})
export class DesignAngularKitModule { }
