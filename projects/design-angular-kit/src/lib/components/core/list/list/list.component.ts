import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';

@Component({
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  /**
   * Add 'link-list' class for navigation menu
   */
  @Input() protected linkList?: BooleanInput;


  protected get isLinkList(): boolean {
    return isTrueBooleanInput(this.linkList);
  }
}
