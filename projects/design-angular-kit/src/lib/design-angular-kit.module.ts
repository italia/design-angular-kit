import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, PopoverDirective, PopoverComponent],
  exports: [CheckboxComponent, PopoverDirective],
  entryComponents: [PopoverComponent]
})
export class DesignAngularKitModule { }
