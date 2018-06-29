import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { ToggleRoutingModule } from './toggle-routing.module';
import { ToggleExampleComponent } from './toggle-example/toggle-example.component';
import { ToggleExamplesComponent } from './toggle-examples/toggle-examples.component';
import { ToggleIndexComponent } from './toggle-index/toggle-index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    ToggleRoutingModule
  ],
  declarations: [ToggleExampleComponent, ToggleExamplesComponent, ToggleIndexComponent]
})
export class ToggleModule { }
