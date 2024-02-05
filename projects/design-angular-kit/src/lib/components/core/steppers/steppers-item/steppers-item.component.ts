import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  standalone: true,
  selector: 'it-steppers-item',
  templateUrl: './steppers-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItSteppersItemComponent extends ItAbstractComponent {
  /**
   * The labels present in the header steps
   */
  @Input({ required: true }) label!: string;

  /**
   * The labels present in the header steps can be preceded by an icon.
   */
  @Input() icon: IconName | undefined;

  /**
   * The content of step
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
