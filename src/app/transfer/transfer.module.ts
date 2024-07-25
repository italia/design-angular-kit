import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TransferDefaultExampleComponent } from './transfer-default-example/transfer-default-example.component';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';
import { TransferRoutingModule } from './transfer-routing.module';

@NgModule({
  declarations: [TransferIndexComponent, TransferDefaultExampleComponent],
  imports: [TransferRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class TransferModule {}
