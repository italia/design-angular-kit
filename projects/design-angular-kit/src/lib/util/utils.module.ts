import { NgModule } from "@angular/core";
import { FocusMouseDirective } from "./focus-mouse.directive";


@NgModule({
    declarations: [FocusMouseDirective],
    exports: [FocusMouseDirective]
})
export class ItUtilsModule {}