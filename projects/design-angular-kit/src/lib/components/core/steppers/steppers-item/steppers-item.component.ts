import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  standalone: true,
  selector: 'it-steppers-item[label]',
  templateUrl: './steppers-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ItSteppersItemComponent extends ItAbstractComponent {

  /**
   * The labels present in the header steps
   */
  @Input() label!: string;

  /**
   * The labels present in the header steps can be preceded by an icon.
   */
  @Input() icon: IconName | undefined;

  /**
   * The content of step
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
