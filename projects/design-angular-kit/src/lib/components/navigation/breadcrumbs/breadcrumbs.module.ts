import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';


const breadcrumb = [BreadcrumbComponent, BreadcrumbItemComponent];

@NgModule({
  imports: breadcrumb,
  exports: breadcrumb
})
export class BreadcrumbsModule {
}
