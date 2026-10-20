import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, booleanAttribute } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItLinkComponent } from '../../../core/link/link.component';

@Component({
  selector: 'it-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItBreadcrumbItemComponent extends ItLinkComponent {
  /**
   * Is active breadcrumb item
   * @default false
   */
  @Input({ transform: booleanAttribute }) active?: boolean;

  /**
   * The name of icon to show
   */
  @Input() iconName: IconName | undefined;

  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
