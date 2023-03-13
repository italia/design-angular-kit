import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent extends AbstractFormComponent<boolean> {

  /**
   * If show checkbox as toggle
   */
  @Input() toggle?: BooleanInput;

  /**
   * If show checkbox inline
   */
  @Input() inline?: BooleanInput;

  /**
   * If is checkbox group
   */
  @Input() group?: BooleanInput;

  /**
   * If checkbox is checked
   */
  @Input() checked?: BooleanInput;

  /**
   * If checkbox is indeterminate
   */
  @Input() indeterminate?: BooleanInput;

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
