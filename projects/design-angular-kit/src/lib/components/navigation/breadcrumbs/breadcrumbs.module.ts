import { NgModule } from '@angular/core';
import { ItBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ItBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';


const breadcrumb = [ItBreadcrumbComponent, ItBreadcrumbItemComponent];

@NgModule({
  imports: breadcrumb,
  exports: breadcrumb
})
export class ItBreadcrumbsModule {
}
