import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";
import { ItPopover } from "./popover.directive";

@NgModule({
    declarations: [ItPopover],
    exports: [ItPopover],
    imports: [CommonModule, NgbPopoverModule]
    
})
export class ItPopoverModule {}