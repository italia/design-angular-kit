import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItOption } from "./option.directive";
import { SelectComponent } from "./select.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SelectComponent, ItOption],
    exports: [SelectComponent, ItOption]

}) export class ItSelectModule {}