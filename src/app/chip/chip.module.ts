import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ChipIndexComponent } from './chip-index/chip-index.component';
import { ChipRoutingModule } from './chip-routing.module';
import { ChipsExamplesComponent } from './chips-examples/chips-examples.component';
import { ChipsColorsComponent } from './chips-colors/chips-colors.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChipRoutingModule
  ],
  declarations: [
    ChipIndexComponent,
    ChipsExamplesComponent,
    ChipsColorsComponent
  ]
})
export class ChipModule { }
