import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BreakpointRoutingModule } from './breakpoint-routing.module';
import { BreakpointIndexComponent } from './breakpoint-index/breakpoint-index.component';
import { BreakpointExampleComponent } from './breakpoint-example/breakpoint-example.component';
import { BreakpointExamplesComponent } from './breakpoint-examples/breakpoint-examples.component';

@NgModule({
  imports: [CommonModule, SharedModule, BreakpointRoutingModule],
  declarations: [BreakpointIndexComponent, BreakpointExampleComponent, BreakpointExamplesComponent],
})
export class BreakpointModule {}
