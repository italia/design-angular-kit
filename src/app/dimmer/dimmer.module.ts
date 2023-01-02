import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DimmerIndexComponent } from './dimmer-index/dimmer-index.component';
import { DimmerRoutingModule } from './dimmer-routing.module';
import { DimmerExamplesComponent } from './dimmer-examples/dimmer-examples.component';
import { DimmerExampleComponent } from './dimmer-example/dimmer-example.component';
import { DimmerPrimaryComponent } from './dimmer-primary/dimmer-primary.component';
import { DimmerWithButtonsComponent } from './dimmer-with-buttons/dimmer-with-buttons.component';
import { DimmerPrimaryOneButtonComponent } from './dimmer-primary-one-button/dimmer-primary-one-button.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DimmerRoutingModule
  ],
  declarations: [
    DimmerIndexComponent,
    DimmerExamplesComponent,
    DimmerExampleComponent,
    DimmerPrimaryComponent,
    DimmerWithButtonsComponent,
    DimmerPrimaryOneButtonComponent
  ]
})
export class DimmerModule { }
