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

@NgModule({
  declarations: [
    ListIndexComponent,
    ListExampleComponent,
    ListExamplesComponent,
    ListLinkComponent,
    ListAvatarComponent,
    ListImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule { }
