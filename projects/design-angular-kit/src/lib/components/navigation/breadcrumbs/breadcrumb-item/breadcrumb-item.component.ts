import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { IconName } from '../../../../interfaces/icon';
import { LinkComponent } from '../../../core/link/link.component';

@Component({
  standalone: true,
  selector: 'it-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class BreadcrumbItemComponent extends LinkComponent {

  /**
   * Is active breadcrumb item
   */
  @Input() active: BooleanInput | undefined;

  /**
   * The name of icon to show
   */
  @Input() iconName: IconName | undefined;

  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;

  public get isActive(): boolean {
    return isTrueBooleanInput(this.active);
  }

}
