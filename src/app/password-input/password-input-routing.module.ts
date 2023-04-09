import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordInputIndexComponent } from './password-input-index/password-input-index.component';

const routes: Routes = [
  { path: '', component: PasswordInputIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordInputRoutingModule {
}
