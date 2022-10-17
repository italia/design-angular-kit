import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ItTabGroupComponent } from "./tab-group.component";
import { ItTabComponent } from "./tab.component";

@NgModule({
    declarations: [ItTabComponent, ItTabGroupComponent],
    exports: [ItTabComponent, ItTabGroupComponent],
    imports: [CommonModule]
})
export class ItTabsModule {}