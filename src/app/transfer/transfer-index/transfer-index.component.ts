import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-transfer-index',
  templateUrl: './transfer-index.component.html',
})
export class TransferIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItTransferComponent');
  }
}
