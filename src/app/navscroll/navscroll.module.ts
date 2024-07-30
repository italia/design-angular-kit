import { NgModule } from '@angular/core';
import { NavscrollIndexComponent } from './navscroll-index/navscroll-index.component';
import { NavscrollRoutingModule } from './navscroll-routing.module';

@NgModule({
  imports: [NavscrollRoutingModule],
  declarations: [NavscrollIndexComponent],
})
export class NavscrollModule {}
