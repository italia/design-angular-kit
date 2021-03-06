import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxExamplesComponent } from './checkbox-examples/checkbox-examples.component';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { CheckboxIndexComponent } from './checkbox-index/checkbox-index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    CheckboxRoutingModule
  ],
  declarations: [CheckboxExampleComponent, CheckboxExamplesComponent, CheckboxIndexComponent]
})
export class CheckboxModule { }
