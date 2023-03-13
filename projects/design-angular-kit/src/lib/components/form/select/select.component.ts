import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { SelectControlGroup, SelectControlOption } from '../../../interfaces/form';

@Component({
  selector: 'it-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractFormComponent {

  /**
   * The select options
   */
  @Input() options?: Array<SelectControlOption>;

  /**
   * The select group options
   */
  @Input() groups?: Array<SelectControlGroup>;

  /**
   * The select description
   */
  @Input() description?: string;

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value) {
      return;
    }
    const selectedOption = this.options?.find(this.optionIsSelected);
    if (selectedOption) {
      this.writeValue(selectedOption.value);
      return this.onChange(selectedOption.value);
    }

    const selectedGroupOption = this.groups?.flatMap(g => g.options).find(this.optionIsSelected);
    if (selectedGroupOption) {
      this.writeValue(selectedGroupOption.value);
      this.onChange(selectedGroupOption.value);
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
