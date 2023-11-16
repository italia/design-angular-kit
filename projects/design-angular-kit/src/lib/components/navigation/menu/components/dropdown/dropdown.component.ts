import { Component, Input } from '@angular/core';
import { ItMenuDropdown } from '../../menu.interface';

@Component({
	selector: 'it-menu-dropdown',
	templateUrl: 'dropdown.component.html'
})

export class ItMenuDropdownComponent {

	@Input({ required: true }) dropdown: ItMenuDropdown | undefined;
}
