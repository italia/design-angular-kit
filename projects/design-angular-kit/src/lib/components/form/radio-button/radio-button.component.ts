import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form-component';
import { BooleanInput, isFalseBooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-radio-button[id][label][value]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends AbstractFormComponent<string | number> {

  /**
   * The radio value
   */
  @Input() value?: string | number;

  /**
   * If show radio inline
   * @default false
   */
  @Input() inline: BooleanInput = false;

  /**
   * If is radio group
   * @default false
   */
  @Input() group: BooleanInput = false;

  /**
   * The radio group description
   */
  @Input() groupDescription?: string;

  /**
   * If is radio is checked
   */
  @Input() checked?: BooleanInput;

  get isInline(): boolean {
    return isTrueBooleanInput(this.inline);
  }

  get isGroup(): boolean {
    return isTrueBooleanInput(this.group);
  }

  get name(): string {
    return this._ngControl?.name?.toString() || '';
  }

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value || !this.value || isFalseBooleanInput(this.checked)) {
      return;
    }

    this.writeValue(this.value);
    return this.onChange(this.value);
  }
}
