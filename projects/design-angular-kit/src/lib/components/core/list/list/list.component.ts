import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';

@Component({
  standalone: true,
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ItListComponent {

  /**
   * Add 'link-list' class for navigation menu
   */
  @Input() linkList: BooleanInput | undefined;


  protected get isLinkList(): boolean {
    return isTrueBooleanInput(this.linkList);
  }
}
