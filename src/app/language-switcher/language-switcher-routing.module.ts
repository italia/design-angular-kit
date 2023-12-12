import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSwitcherIndexComponent } from './language-switcher-index/language-switcher-index.component';

const routes: Routes = [
  { path: '', component: LanguageSwitcherIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSwitcherRoutingModule {
}
