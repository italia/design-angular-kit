import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAutocomplete } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItAutocompleteComponent extends ItAbstractFormComponent<string | null | undefined> {
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
   * Autocomplete elements.
   * @default []
   */
  @Input() source: string[] = [];

  @ViewChild('selectAutocomplete') private selectAutocompleteEl?: ElementRef<HTMLButtonElement>;

  private selectAutocomplete?: SelectAutocomplete;

  override ngAfterViewInit() {
    if (this.selectAutocompleteEl) {
      super.ngAfterViewInit();
      const element = this.selectAutocompleteEl.nativeElement;
      this.selectAutocomplete = new SelectAutocomplete(element, {
        id: this.id,
        name: this.id,
        source: this.source,
      });
    }
  }

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
