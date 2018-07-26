import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { ButtonExamplesComponent } from './button-examples/button-examples.component';
import { ButtonIndexComponent } from './button-index/button-index.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { SharedModule } from '../shared/shared.module';
import { ButtonExampleColorComponent } from './button-example-color/button-example-color.component';
import { ButtonExampleSizeComponent } from './button-example-size/button-example-size.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DesignAngularKitModule,
    ButtonRoutingModule
  ],
  declarations: [
    ButtonExamplesComponent, ButtonIndexComponent,
    ButtonExampleComponent, ButtonExampleColorComponent, ButtonExampleSizeComponent
  ]
})
export class ButtonModule { }
