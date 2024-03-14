import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItRadioButtonComponent extends ItAbstractFormComponent<string | number | null | undefined> implements OnInit {
  /**
   * The radio value
   */
  @Input({ required: true }) value: string | number | undefined | null;

  /**
   * If show radio inline
   * @default false
   */
  @Input({ transform: inputToBoolean }) inline?: boolean;

  /**
   * If is radio group
   * @default false
   */
  @Input({ transform: inputToBoolean }) group?: boolean;

  /**
   * If is radio is checked
   * @default false
   */
  @Input({ transform: inputToBoolean }) checked?: boolean;

  /**
   * Set the radio name manually.
   * For example when the radio button name is duplicated inside page
   * @default by default the radio name is calculated from form field name
   */
  @Input() forceRadioName?: string;

  get name(): string {
    if (this.forceRadioName) {
      return this.forceRadioName;
    }

    let name = '';
    if (this._ngControl) {
      name = this._ngControl.name?.toString() || '';

      // Retrieve parent name, prevent duplicate name inside FormArray or nested FormGroup
      let control = this._ngControl.control?.parent;
      while (control?.parent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    if (this.control.value || !this.value || !this.checked) {
      return;
    }

    this.writeValue(this.value);
    return this.onChange(this.value);
  }
}
