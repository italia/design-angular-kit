import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { BooleanInput, isFalseBooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-radio-button[value]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent extends AbstractFormComponent<string | number | undefined> {

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
    let name = '';
    if (this._ngControl) {
      name = this._ngControl.name?.toString() || '';

      // Retrieve parent name, prevent duplicate name inside FormArray or nested FormGroup
      let control = this._ngControl.control?.parent;
      while (control?.parent) {
        const controls: { [key: string]: any } = control?.parent?.controls || {};
        const parentName = Object.keys(controls).find(name => control === controls[name]) || null;
        if (!parentName) {
          break;
        }
        name = `${parentName}.${name}`; // parent.0.radioName
        control = control.parent;
      }
    }

    return name;
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
