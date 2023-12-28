import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgTemplateOutlet]
})
export class ItListComponent {

  /**
   * Add 'link-list' class for navigation menu
   */
  @Input() linkList: BooleanInput | undefined;

  /**
   * Add 'link-sublist' class for navigation menu
   */
  @Input() linkSubList: BooleanInput | undefined;

  /**
   * Add 'multiline' class for wrapper
   */
  @Input() multiline: BooleanInput | undefined;


  protected get isLinkList(): boolean {
    return isTrueBooleanInput(this.linkList);
  }

  protected get isMultiline(): boolean {
    return isTrueBooleanInput(this.multiline);
  }

  protected get isLinkSubList(): boolean {
    return isTrueBooleanInput(this.linkSubList);
  }
}
