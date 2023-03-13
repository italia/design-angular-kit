import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput } from '../../../../utils/boolean-input';

@Component({
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  /**
   * Add 'link-list' class for navigation menù
   */
  @Input() linkList?: BooleanInput;

}
