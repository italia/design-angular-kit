import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgTemplateOutlet, ReactiveFormsModule, AsyncPipe]
})
export class CheckboxComponent extends AbstractFormComponent<boolean> implements OnInit {

  /**
   * If show checkbox as toggle
   */
  @Input() toggle: BooleanInput | undefined;

  /**
   * If show checkbox inline
   */
  @Input() inline: BooleanInput | undefined;

  /**
   * If is checkbox group
   */
  @Input() group: BooleanInput | undefined;

  /**
   * If checkbox is checked
   */
  @Input() checked: BooleanInput | undefined;

  /**
   * If checkbox is indeterminate
   */
  @Input() indeterminate: BooleanInput | undefined;

  get isIndeterminate(): boolean {
    return isTrueBooleanInput(this.indeterminate);
  }

  get isGroup(): boolean {
    return isTrueBooleanInput(this.group);
  }

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value || this.checked === undefined) {
      return;
    }

    const value = isTrueBooleanInput(this.checked);
    this.writeValue(value);
    return this.onChange(value);
  }
}
