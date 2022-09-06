import { NgModule } from "@angular/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ItDropdown, ItDropdownAnchor, ItDropdownMenu, ItDropdownToggle, ItNavbar } from "./dropdown.directive";

@NgModule({
    declarations: [ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle],
    imports: [NgbDropdownModule],
    exports: [ItDropdown, ItNavbar, ItDropdownMenu, ItDropdownAnchor, ItDropdownToggle]
})
export class ItDropdownModule {}