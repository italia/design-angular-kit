import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxExampleComponent } from './checkbox-example.component';
import { CheckboxIndexComponent } from './checkbox-index/checkbox-index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    CheckboxRoutingModule
  ],
  declarations: [CheckboxExampleComponent, CheckboxIndexComponent]
})
export class CheckboxModule { }
