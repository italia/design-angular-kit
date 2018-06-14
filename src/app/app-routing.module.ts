import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'checkbox', pathMatch: 'full' },
  { path: 'checkbox', loadChildren: 'src/app/checkbox/checkbox.module#CheckboxModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
