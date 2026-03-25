import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DividerRoutingModule } from './divider-routing.module';
import { DividerIndexComponent } from './divider-index/divider-index.component';
import { DividerExampleComponent } from './divider-example/divider-example.component';
import { DividerExamplesComponent } from './divider-examples/divider-examples.component';

@NgModule({
  imports: [CommonModule, SharedModule, DividerRoutingModule],
  declarations: [DividerIndexComponent, DividerExampleComponent, DividerExamplesComponent],
})
export class DividerModule {}
