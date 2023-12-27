import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIndexComponent } from './list-index/list-index.component';
import { ListExampleComponent } from './list-example/list-example.component';
import { ListExamplesComponent } from './list-examples/list-examples.component';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ListLinkComponent } from './list-link/list-link.component';
import { ListAvatarComponent } from './list-avatar/list-avatar.component';
import { ListImageComponent } from './list-image/list-image.component';
import { ListArrowComponent } from './list-arrow/list-arrow.component';
import { ListMultipleComponent } from './list-multiple/list-multiple.component';
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule { }
