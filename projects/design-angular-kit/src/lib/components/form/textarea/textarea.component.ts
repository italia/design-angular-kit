import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'it-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends AbstractFormComponent<string> {

  /**
   * Textarea Rows
   * @default 3
   */
  @Input() rows?: number = 3;

  /**
   * The textarea placeholder
   */
  @Input() placeholder: string = '';

  /**
   * The input description
   */
  @Input() description?: string;

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.control.hasError('maxlength')) {
      const error = this.getError('maxlength');
      return this._translateService.get('it.errors.max-length-invalid', { max: error.requiredLength });
    }
    if (this.control.hasError('pattern')) {
      const error = this.getError('pattern');
      return this._translateService.get('it.errors.pattern-invalid', { pattern: error.requiredPattern });
    }

    return super.invalidMessage;
  }
}
