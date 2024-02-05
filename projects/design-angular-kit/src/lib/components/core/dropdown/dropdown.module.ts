import { NgModule } from '@angular/core';
import { ItDropdownComponent } from './dropdown/dropdown.component';
import { ItDropdownItemComponent } from './dropdown-item/dropdown-item.component';

const dropdownComponents = [ItDropdownComponent, ItDropdownItemComponent];

@NgModule({
  imports: dropdownComponents,
  exports: dropdownComponents,
})
export class ItDropdownModule {}
