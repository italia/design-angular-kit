import { Component } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-default-example',
  templateUrl: './transfer-default-example.component.html',
})
export class TransferDefaultExampleComponent {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transferChangesHandler(_: TransferItem<number>[]) {
    // handle changing data
  }
}
