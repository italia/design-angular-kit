import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ItButtonModule } from "../button/button.module";
import { ItIconModule } from "../icon/icon.module";
import { ItUtilsModule } from "../util/utils.module";
import { DropdownDividerComponent } from "./dropdown-divider.component";
import { DropdownItemComponent } from "./dropdown-item.component";
import { DropdownComponent } from "./dropdown.component";
import { ItDropdown, ItDropdownAnchor, ItDropdownItem, ItDropdownMenu, ItDropdownToggle, ItNavbar } from "./dropdown.directive";

@NgModule({
    declarations: [DropdownComponent, DropdownDividerComponent, DropdownItemComponent, ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem],
    imports: [CommonModule, NgbDropdownModule, ItIconModule, ItButtonModule, ItUtilsModule],
    exports: [DropdownComponent, DropdownDividerComponent, DropdownItemComponent, ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle, ItDropdownItem]
})
export class ItDropdownModule {}