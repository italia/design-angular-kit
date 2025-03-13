import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchIndexComponent } from './search-index/search-index.component';

const routes: Routes = [{ path: '', component: SearchIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
