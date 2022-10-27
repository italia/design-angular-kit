import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { ItUtilsModule } from "../util/utils.module";
import { ItCollapseGroupComponent } from "./collapse-group.component";
import { ItCollapseItemComponent } from "./collapse-item.component";
import { ItCollapseDirective } from "./collapse.directive";

@NgModule({
    imports: [CommonModule, NgbCollapseModule, ItUtilsModule],
    declarations: [ItCollapseDirective, ItCollapseItemComponent, ItCollapseGroupComponent],
    exports: [ItCollapseDirective, ItCollapseItemComponent, ItCollapseGroupComponent],
})
export class ItCollapseModule {}