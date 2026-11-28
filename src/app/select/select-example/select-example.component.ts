import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
  standalone: false,
})
export class SelectExampleComponent {
  selectedValue: number = 0;
  selectOptions: Array<SelectControlOption> = [
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];
}
