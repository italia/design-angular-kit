import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { ButtonExamplesComponent } from './button-examples/button-examples.component';
import { ButtonIndexComponent } from './button-index/button-index.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { SharedModule } from '../shared/shared.module';
import { ButtonExampleColorComponent } from './button-example-color/button-example-color.component';
import { ButtonExampleSizeComponent } from './button-example-size/button-example-size.component';
import { ButtonExampleInteractiveComponent } from './button-example-interactive/button-example-interactive.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DesignAngularKitModule,
    ButtonRoutingModule
  ],
  declarations: [
    ButtonExamplesComponent, ButtonIndexComponent,
    ButtonExampleComponent, ButtonExampleColorComponent, ButtonExampleSizeComponent, ButtonExampleInteractiveComponent
  ]
})
export class ButtonModule { }
