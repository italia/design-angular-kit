import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule
  ],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule { }
