import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderExamplesComponent } from './header-examples/header-examples.component';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { HeaderIndexComponent } from './header-index/header-index.component';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  declarations: [
    HeaderExamplesComponent,
    HeaderExampleComponent,
    HeaderIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
