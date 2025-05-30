import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ReactiveFormsModule, AsyncPipe],
})
export class ItCheckboxComponent extends ItAbstractFormComponent<boolean | null | undefined> implements OnInit, OnChanges {
  /**
   * If show checkbox as toggle
   * @default false
   */
  @Input({ transform: inputToBoolean }) toggle?: boolean;

  /**
   * If show checkbox inline
   * @default false
   */
  @Input({ transform: inputToBoolean }) inline?: boolean;

  /**
   * If is checkbox group
   * @default false
   */
  @Input({ transform: inputToBoolean }) group?: boolean;

  /**
   * If checkbox is checked
   * @default false
   */
  @Input({ transform: inputToBoolean }) checked?: boolean;

  /**
   * If checkbox is indeterminate
   * @default false
   */
  @Input({ transform: inputToBoolean }) indeterminate?: boolean;

  override ngOnInit() {
    super.ngOnInit();
    this.markAsChecked();
  }

  override ngOnChanges(changes: SimpleChanges) {
    if (changes['checked']) {
      this.markAsChecked();
    }
  }

  private markAsChecked(): void {
    if (this.control.value || this.checked === undefined) {
      return;
    }

    const value = this.checked;
    this.writeValue(value);
    return this.onChange(value);
  }
}
