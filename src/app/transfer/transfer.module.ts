import { NgModule } from '@angular/core';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';
import { SharedModule } from '../shared/shared.module';
import { TransferDefaultExampleComponent } from './transfer-default-example/transfer-default-example.component';

@NgModule({
  declarations: [TransferIndexComponent, TransferDefaultExampleComponent],
  imports: [TransferRoutingModule, SharedModule],
})
export class TransferModule {}
