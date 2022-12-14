import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutoCompleteItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectExampleComponent {
  selectValue = 'Value 1';

}
