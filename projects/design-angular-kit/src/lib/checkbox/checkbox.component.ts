import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorBase } from '../value-accessor-base';

/**
 * The awesome design-angular kit Checkbox
 *
 * Inputs:
 *
 * | Name | Type |
 * | --- | --- |
 * | label | string |
 * | disabled | boolean |
 *
 */
@Component({
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CheckboxComponent, multi: true }]
})
export class CheckboxComponent extends ValueAccessorBase<boolean> {
  /**
   * label accetta una stringa che sarà visualizzata di fianco alla checkbox
   */
  @Input() label: string;

  /**
   * disabled accetta una espressione che valuta ad un valore booleno indicante se la checkbox è disabilitata o meno
   */
  @Input() disabled: boolean;

  public identifier = `checkbox-${identifier++}`;
}

let identifier = 0;
