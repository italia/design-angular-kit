import { Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { SelectControlGroup, SelectControlOption } from '../../../interfaces/form';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'it-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [NgIf, NgForOf, ReactiveFormsModule, AsyncPipe]
})
export class ItSelectComponent extends ItAbstractFormComponent implements OnInit {

  /**
   * The select options
   */
  @Input() options: Array<SelectControlOption> | undefined;

  /**
   * The select group options
   */
  @Input() groups: Array<SelectControlGroup> | undefined;

  /**
   * The select description
   */
  @Input() description?: string;

  /**
   * If set, add a `disabled selected` option with value `null` and as text the value of the attribute
   * @example 'Select an option'
   */
  @Input() defaultOption?: string;

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value) {
      return;
    }
    const selectedOption = this.options?.find(this.optionIsSelected);
    if (selectedOption) {
      this.writeValue(selectedOption.value);
      if (this._ngControl?.control && selectedOption.value !== this._ngControl.control.value) {
        this.onChange(selectedOption.value);
      }
      return;
    }

    const selectedGroupOption = this.groups?.flatMap(g => g.options).find(this.optionIsSelected);
    if (selectedGroupOption) {
      this.writeValue(selectedGroupOption.value);
      if (this._ngControl?.control && selectedGroupOption.value !== this._ngControl.control.value) {
        this.onChange(selectedGroupOption.value);
      }
    }
  }

  /**
   * Check if the option is selected
   * @param option the option
   */
  optionIsSelected(option: SelectControlOption): boolean {
    if (option.selected === true) {
      return true;
    }

    if (typeof option.selected === 'function') {
      return option.selected(this.control.value);
    }

    return false;
  }

  /**
   * Check if the option is disabled
   * @param option the option
   */
  optionIsDisabled(option: SelectControlOption): boolean {
    if (option.disabled === true) {
      return true;
    }

    if (typeof option.disabled === 'function') {
      return option.disabled(this.control.value);
    }

    return false;
  }
}
