import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DropdownExampleComponent } from './dropdown-example/dropdown-example.component';
import { DropdownExamplesComponent } from './dropdown-examples/dropdown-examples.component';
import { DropdownHostAttributeComponent } from './dropdown-host-attribute/dropdown-host-attribute.component';
import { DropdownIndexComponent } from './dropdown-index/dropdown-index.component';
import { DropdownLinkExampleComponent } from './dropdown-link-example/dropdown-link-example.component';
import { DropdownRoutingModule } from './dropdown-routing.module';

@NgModule({
  imports: [CommonModule, DropdownRoutingModule, SharedModule, FormsModule],
  declarations: [
    DropdownExampleComponent,
    DropdownExamplesComponent,
    DropdownIndexComponent,
    DropdownLinkExampleComponent,
    DropdownHostAttributeComponent,
  ],
})
export class DropdownModule {}
