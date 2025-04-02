import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteIndexComponent } from './autocomplete-index/autocomplete-index.component';

const routes: Routes = [{ path: '', component: AutocompleteIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocompleteRoutingModule {}
