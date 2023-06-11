import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownExampleComponent } from './dropdown-example/dropdown-example.component';
import { DropdownExamplesComponent } from './dropdown-examples/dropdown-examples.component';
import { DropdownIndexComponent } from './dropdown-index/dropdown-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DropdownLinkExampleComponent } from './dropdown-link-example/dropdown-link-example.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DropdownExampleComponent, DropdownExamplesComponent, DropdownIndexComponent, DropdownLinkExampleComponent]
})
export class DropdownModule { }
