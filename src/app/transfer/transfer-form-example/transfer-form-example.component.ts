import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-form-example',
  templateUrl: './transfer-form-example.component.html',
})
export class TransferFormExampleComponent {
  readonly sourceItems: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly targetItems: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  transferModel = this.targetItems;

  readonly formGroup = inject(FormBuilder).group({
    transfer: [this.targetItems],
  });
}
