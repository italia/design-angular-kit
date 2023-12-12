import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertIndexComponent } from './alert-index/alert-index.component';
import { AlertExamplesComponent } from './alert-examples/alert-examples.component';
import { SharedModule } from '../shared/shared.module';
import { AlertColorExampleComponent } from './alert-color-example/alert-color-example.component';
import { AlertAdditionalContentExampleComponent } from './alert-additional-content-example/alert-additional-content-example.component';
import { AlertClosingExampleComponent } from './alert-closing-example/alert-closing-example.component';



@NgModule({
  declarations: [
    AlertIndexComponent,
    AlertExamplesComponent,
    AlertColorExampleComponent,
    AlertAdditionalContentExampleComponent,
    AlertClosingExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlertRoutingModule
  ]
})
export class AlertModule { }
