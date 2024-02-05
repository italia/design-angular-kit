import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'it-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItTextareaComponent extends ItAbstractFormComponent<string | null | undefined> {
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
  @Input() description: string | undefined;

  /**
   * To prevent modification of the contained value.
   * - <b>plaintext</b>: Readonly field in the form stylized as plain text
   * @default undefined
   */
  @Input() readonly: boolean | 'plaintext' | undefined;

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('maxlength')) {
      const error = this.getError('maxlength');
      return this._translateService.get('it.errors.max-length-invalid', { max: error.requiredLength });
    }
    if (this.hasError('pattern')) {
      const error = this.getError('pattern');
      return this._translateService.get('it.errors.pattern-invalid', { pattern: error.requiredPattern });
    }

    return super.invalidMessage;
  }

  /**
   * Check is readonly field
   */
  protected get isReadonly(): boolean {
    return this.readonly === 'plaintext' || !!this.readonly;
  }
}
