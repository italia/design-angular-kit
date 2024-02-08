import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MegamenuIndexComponent } from './megamenu-index/megamenu-index.component';
import { MegamenuExampleComponent } from './megamenu-example/megamenu-example.component';
import { MegamenuExamplesComponent } from './megamenu-examples/megamenu-examples.component';
import { MegamenuRoutingModule } from './megamenu-routing.module';

@NgModule({
  declarations: [MegamenuExampleComponent, MegamenuExamplesComponent, MegamenuIndexComponent],
  imports: [SharedModule, CommonModule, MegamenuRoutingModule],
})
export class MegamenuModule {}
