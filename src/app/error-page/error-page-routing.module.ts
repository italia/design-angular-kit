import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageIndexComponent } from './error-page-index/error-page-index.component';

const routes: Routes = [
  { path: '', component: ErrorPageIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule {
}
