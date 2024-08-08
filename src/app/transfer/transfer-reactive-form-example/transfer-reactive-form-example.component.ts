import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-reactive-form-example',
  templateUrl: './transfer-reactive-form-example.component.html',
})
export class TransferReactiveFormExampleComponent {
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

  readonly formGroup = inject(FormBuilder).group({
    transfer: [this.selected],
  });
}
