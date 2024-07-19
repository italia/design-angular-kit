import { NgModule } from '@angular/core';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';

@NgModule({
  declarations: [TransferIndexComponent],
  imports: [TransferRoutingModule],
})
export class TransferModule {}
