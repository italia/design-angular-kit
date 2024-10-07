import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavscrollDefaultExampleComponent } from './navscroll-default-example/navscroll-default-example.component';
import { NavscrollExamplesComponent } from './navscroll-examples/navscroll-examples.component';
import { NavscrollIndexComponent } from './navscroll-index/navscroll-index.component';
import { NavscrollRoutingModule } from './navscroll-routing.module';

@NgModule({
  imports: [NavscrollRoutingModule, SharedModule],
  declarations: [NavscrollIndexComponent, NavscrollExamplesComponent, NavscrollDefaultExampleComponent],
})
export class NavscrollModule {}
