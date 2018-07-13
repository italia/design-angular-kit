import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { RadioRoutingModule } from './radio-routing.module';
import { RadioIndexComponent } from './radio-index/radio-index.component';
import { RadioExampleComponent } from './radio-example/radio-example.component';
import { RadioExamplesComponent } from './radio-examples/radio-examples.component';
import { RadioCheckedExampleComponent } from './radio-checked-example/radio-checked-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    RadioRoutingModule
  ],
  declarations: [RadioIndexComponent, RadioExampleComponent, RadioExamplesComponent, RadioCheckedExampleComponent]
})
export class RadioModule { }
