import { NgModule } from "@angular/core";
import { ItIconModule } from "../icon/icon.module";
import { ItButtonDirective } from "./button.directive";

@NgModule({
    declarations: [ItButtonDirective],
    imports: [ItIconModule],
    exports: [ItButtonDirective]
})
export class ItButtonModule {}