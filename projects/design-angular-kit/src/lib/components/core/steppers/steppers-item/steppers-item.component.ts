import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { AbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  selector: 'it-steppers-item[label]',
  templateUrl: './steppers-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SteppersItemComponent extends AbstractComponent {

  /**
   * The labels present in the header steps
   */
  @Input() label!: string;

  /**
   * The labels present in the header steps can be preceded by an icon.
   */
  @Input() icon?: IconName;

  /**
   * The content of step
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
