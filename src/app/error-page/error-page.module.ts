import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageIndexComponent } from './error-page-index/error-page-index.component';
import { ErrorPageExamplesComponent } from './error-page-examples/error-page-examples.component';
import { ErrorPageRouteExampleComponent } from './error-page-route-example/error-page-route-example.component';
import { ErrorPageComponentExampleComponent } from './error-page-component-example/error-page-component-example.component';



@NgModule({
  declarations: [
    ErrorPageIndexComponent,
    ErrorPageExamplesComponent,
    ErrorPageRouteExampleComponent,
    ErrorPageComponentExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
