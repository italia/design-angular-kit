import { NgModule } from '@angular/core';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TransferIndexComponent],
  imports: [TransferRoutingModule, SharedModule],
})
export class TransferModule {}
