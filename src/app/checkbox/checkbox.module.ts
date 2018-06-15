import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxIndexComponent } from './checkbox-index/checkbox-index.component';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    CheckboxRoutingModule
  ],
  declarations: [CheckboxExampleComponent, CheckboxIndexComponent]
})
export class CheckboxModule { }
