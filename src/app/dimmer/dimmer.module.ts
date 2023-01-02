import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DimmerIndexComponent } from './dimmer-index/dimmer-index.component';
import { DimmerRoutingModule } from './dimmer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DimmerRoutingModule
  ],
  declarations: [
    DimmerIndexComponent
  ]
})
export class DimmerModule { }
