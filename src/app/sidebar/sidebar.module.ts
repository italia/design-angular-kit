import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarIndexComponent } from './sidebar-index/sidebar-index.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { SidebarExamplesComponent } from './sidebar-examples/sidebar-examples.component';
import { SidebarLeftLineExampleComponent } from './sidebar-left-line-example/sidebar-left-line-example.component';
import { SidebarRightLineExampleComponent } from './sidebar-right-line-example/sidebar-right-line-example.component';
import { SidebarNestedExampleComponent } from './sidebar-nested-example/sidebar-nested-example.component';
import { SidebarIconExampleComponent } from './sidebar-icon-example/sidebar-icon-example.component';
import { SidebarDarkExampleComponent } from './sidebar-dark-example/sidebar-dark-example.component';

@NgModule({
  declarations: [
    SidebarIndexComponent,
    SidebarExamplesComponent,
    SidebarExampleComponent,
    SidebarIconExampleComponent,
    SidebarLeftLineExampleComponent,
    SidebarRightLineExampleComponent,
    SidebarNestedExampleComponent,
    SidebarDarkExampleComponent,
  ],
  imports: [CommonModule, SidebarRoutingModule, SharedModule],
})
export class SidebarModule {}
