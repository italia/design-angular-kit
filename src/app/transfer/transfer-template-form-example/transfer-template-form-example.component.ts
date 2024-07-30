import { Component } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-template-form-example',
  templateUrl: './transfer-template-form-example.component.html',
})
export class TransferTemplateFormExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  transferModel = this.selected;
}
