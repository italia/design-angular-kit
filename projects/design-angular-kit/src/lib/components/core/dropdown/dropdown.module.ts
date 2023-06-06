import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

const dropdownComponents = [DropdownComponent, DropdownItemComponent];

@NgModule({
  imports: dropdownComponents,
  exports: dropdownComponents
})
export class DropdownModule { }
