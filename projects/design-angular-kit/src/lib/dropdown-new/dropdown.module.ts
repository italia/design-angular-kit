import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ItDropdown, ItDropdownAnchor, ItDropdownItem, ItDropdownMenu, ItDropdownToggle, ItNavbar } from "./dropdown.directive";

@NgModule({
    declarations: [ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem],
    imports: [CommonModule, NgbDropdownModule],
    exports: [ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem]
})
export class ItDropdownModule {}