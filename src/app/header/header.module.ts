import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderIndexComponent } from './header-index/header-index.component';
import {SharedModule} from "../shared/shared.module";
import {HeaderRoutingModule} from "./header-routing.module";
import { HeaderSlimComponent } from './header-slim/header-slim.component';
import { HeaderExamplesComponent } from './header-examples/header-examples.component';
import { HeaderCentralComponent } from './header-central/header-central.component';
import {HeaderCompleteComponent} from "./header-complete/header-complete.component";


@NgModule({
  declarations: [
    HeaderIndexComponent,
    HeaderSlimComponent,
    HeaderExamplesComponent,
    HeaderCentralComponent,
    HeaderCompleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
