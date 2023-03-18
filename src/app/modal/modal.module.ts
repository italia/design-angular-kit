import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalIndexComponent } from './modal-index/modal-index.component';
import { SharedModule } from '../shared/shared.module';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalExamplesComponent } from './modal-examples/modal-examples.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalIconExampleComponent } from './modal-icon-example/modal-icon-example.component';
import { ModalListExampleComponent } from './modal-list-example/modal-list-example.component';
import { ModalPopconfirmExampleComponent } from './modal-popconfirm-example/modal-popconfirm-example.component';
import { ModalScrollExampleComponent } from './modal-scroll-example/modal-scroll-example.component';
import { ModalAlignmentExampleComponent } from './modal-alignment-example/modal-alignment-example.component';
import { ModalSizeExampleComponent } from './modal-size-example/modal-size-example.component';
import { ModalRadioExampleComponent } from './modal-radio-example/modal-radio-example.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalIndexComponent,
    ModalExamplesComponent,
    ModalExampleComponent,
    ModalIconExampleComponent,
    ModalListExampleComponent,
    ModalPopconfirmExampleComponent,
    ModalScrollExampleComponent,
    ModalAlignmentExampleComponent,
    ModalSizeExampleComponent,
    ModalRadioExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModalRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModalModule { }
