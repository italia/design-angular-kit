import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListExampleComponent } from './list-example/list-example.component';
import { ListExamplesComponent } from './list-examples/list-examples.component';
import { ListIndexComponent } from './list-index/list-index.component';
import { ListRoutingModule } from './list-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ListArrowComponent } from './list-arrow/list-arrow.component';
import { ListAvatarComponent } from './list-avatar/list-avatar.component';
import { ListCollassibleComponent } from './list-collassible/list-collassible.component';
import { ListHostAttributeComponent } from './list-host-attribute/list-host-attribute.component';
import { ListImageComponent } from './list-image/list-image.component';
import { ListLinkIconsComponent } from './list-link-icons/list-link-icons.component';
import { ListLinkMultilineComponent } from './list-link-multiline/list-link-multiline.component';
import { ListLinkComponent } from './list-link/list-link.component';
import { ListMultipleComponent } from './list-multiple/list-multiple.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { ListToggleCheckboxComponent } from './list-toggle-checkbox/list-toggle-checkbox.component';

@NgModule({
  declarations: [
    ListIndexComponent,
    ListExampleComponent,
    ListExamplesComponent,
    ListLinkComponent,
    ListAvatarComponent,
    ListImageComponent,
    ListArrowComponent,
    ListMultipleComponent,
    ListToggleCheckboxComponent,
    ListCollassibleComponent,
    ListLinkIconsComponent,
    ListLinkMultilineComponent,
    ListHostAttributeComponent,
    ListPaginationComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, ListRoutingModule],
})
export class ListModule {}
