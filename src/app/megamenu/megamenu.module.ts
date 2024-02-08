import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MegamenuIndexComponent } from './megamenu-index/megamenu-index.component';
import { MegamenuExampleComponent } from './megamenu-example/megamenu-example.component';
import { MegamenuExamplesComponent } from './megamenu-examples/megamenu-examples.component';
import { MegamenuCtaRightComponent } from './megamenu-cta-right/megamenu-cta-right.component';
import { MegamenuCtaBottomComponent } from './megamenu-cta-bottom/megamenu-cta-bottom.component';
import { MegamenuRoutingModule } from './megamenu-routing.module';

@NgModule({
  declarations: [
    MegamenuExampleComponent,
    MegamenuExamplesComponent,
    MegamenuIndexComponent,
    MegamenuCtaRightComponent,
    MegamenuCtaBottomComponent,
  ],
  imports: [SharedModule, CommonModule, MegamenuRoutingModule],
})
export class MegamenuModule {}
