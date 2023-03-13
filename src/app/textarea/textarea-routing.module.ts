import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextareaIndexComponent } from './textarea-index/textarea-index.component';

const routes: Routes = [
  { path: '', component: TextareaIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextareaRoutingModule {
}
