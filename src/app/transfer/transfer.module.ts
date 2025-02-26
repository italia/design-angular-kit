import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TransferDefaultExampleComponent } from './transfer-default-example/transfer-default-example.component';
import { TransferExamplesComponent } from './transfer-examples/transfer-examples.component';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';
import { TransferReactiveFormExampleComponent } from './transfer-reactive-form-example/transfer-reactive-form-example.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferTemplateFormExampleComponent } from './transfer-template-form-example/transfer-template-form-example.component';

@NgModule({
  declarations: [
    TransferIndexComponent,
    TransferDefaultExampleComponent,
    TransferTemplateFormExampleComponent,
    TransferReactiveFormExampleComponent,
    TransferExamplesComponent,
  ],
  imports: [TransferRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class TransferModule {}
