import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { ButtonExamplesComponent } from './button-examples/button-examples.component';
import { ButtonIndexComponent } from './button-index/button-index.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonExampleColorComponent } from './button-example-color/button-example-color.component';
import { ButtonExampleSizeComponent } from './button-example-size/button-example-size.component';
import { ButtonExampleInteractiveComponent } from './button-example-interactive/button-example-interactive.component';
import { ButtonExampleIconComponent } from './button-example-icon/button-example-icon.component';
import { ButtonExampleColorDarkComponent } from './button-example-color-dark/button-example-color-dark.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ButtonRoutingModule],
  declarations: [
    ButtonExamplesComponent,
    ButtonIndexComponent,
    ButtonExampleIconComponent,
    ButtonExampleColorDarkComponent,
    ButtonExampleComponent,
    ButtonExampleColorComponent,
    ButtonExampleSizeComponent,
    ButtonExampleInteractiveComponent,
  ],
})
export class ButtonModule {}
