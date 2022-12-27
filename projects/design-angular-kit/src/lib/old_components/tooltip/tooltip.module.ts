import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { ItTooltip } from "./tooltip.directive";

@NgModule({
    declarations: [ItTooltip],
    exports: [ItTooltip],
    imports: [CommonModule, NgbTooltipModule]
})
export class ItTooltipModule {}