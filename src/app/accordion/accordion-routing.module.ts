import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionIndexComponent } from './accordion-index/accordion-index.component';

const routes: Routes = [{ path: '', component: AccordionIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionRoutingModule {}
