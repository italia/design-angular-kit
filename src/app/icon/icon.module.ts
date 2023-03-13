import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconIndexComponent } from './icon-index/icon-index.component';
import { SharedModule } from '../shared/shared.module';
import { IconRoutingModule } from './icon-routing.module';
import { IconExamplesComponent } from './icon-examples/icon-examples.component';
import { IconExampleComponent } from './icon-example/icon-example.component';
import { FormsModule } from '@angular/forms';
import { IconSizeExampleComponent } from './icon-size-example/icon-size-example.component';
import { IconListExampleComponent } from './icon-list-example/icon-list-example.component';
import { IconColorExampleComponent } from './icon-color-example/icon-color-example.component';
import { IconAlignmentExampleComponent } from './icon-alignment-example/icon-alignment-example.component';



@NgModule({
  declarations: [
    IconIndexComponent,
    IconExamplesComponent,
    IconExampleComponent,
    IconSizeExampleComponent,
    IconListExampleComponent,
    IconColorExampleComponent,
    IconAlignmentExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconRoutingModule,
    FormsModule
  ]
})
export class IconModule { }
