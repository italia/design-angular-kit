import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbPopoverConfig, NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";
import { ItPopoverConfig } from "./popover.config";
import { ItPopover } from "./popover.directive";

@NgModule({
    declarations: [ItPopover],
    exports: [ItPopover],
    imports: [CommonModule, NgbPopoverModule],
    providers: [{provide: NgbPopoverConfig, useClass: ItPopoverConfig}]
    
})
export class ItPopoverModule {}