import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ItIconModule } from "../icon/icon.module";
import { DropdownDividerComponent } from "./dropdown-divider.component";
import { DropdownHeaderComponent } from "./dropdown-header.component";
import { DropdownItemComponent } from "./dropdown-item.component";
import { DropdownComponent } from "./dropdown.component";
import { ItDropdown, ItDropdownAnchor, ItDropdownItem, ItDropdownMenu, ItDropdownToggle, ItNavbar } from "./dropdown.directive";

@NgModule({
    declarations: [DropdownComponent, DropdownDividerComponent, DropdownItemComponent, DropdownHeaderComponent, ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem],
    imports: [CommonModule, NgbDropdownModule, ItIconModule],
    exports: [DropdownComponent, DropdownDividerComponent, DropdownItemComponent, DropdownHeaderComponent, ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem]
})
export class ItDropdownModule {}