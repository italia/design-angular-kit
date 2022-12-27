import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbExampleComponent } from './breadcrumb-example/breadcrumb-example.component';
import { BreadcrumbExamplesComponent } from './breadcrumb-examples/breadcrumb-examples.component';
import { BreadcrumbIndexComponent } from './breadcrumb-index/breadcrumb-index.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BreadcrumbRoutingModule
  ],
  declarations: [BreadcrumbExampleComponent, BreadcrumbExamplesComponent, BreadcrumbIndexComponent]
})
export class BreadcrumbModule { }
