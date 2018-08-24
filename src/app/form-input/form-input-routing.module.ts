import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInputIndexComponent } from './form-input-index/form-input-index.component';

const routes: Routes = [
  { path: '', component: FormInputIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInputRoutingModule { }
