import { NgModule } from '@angular/core';
import { ItDividerComponent } from '../divider/divider.component';
import { ItDropdownComponent } from './dropdown/dropdown.component';
import { ItDropdownItemComponent } from './dropdown-item/dropdown-item.component';

const dropdownComponents = [ItDropdownComponent, ItDropdownItemComponent, ItDividerComponent];

@NgModule({
  imports: dropdownComponents,
  exports: dropdownComponents,
})
export class ItDropdownModule {}
