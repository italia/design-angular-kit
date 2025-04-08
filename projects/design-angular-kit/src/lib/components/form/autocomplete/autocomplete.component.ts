import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAutocomplete } from 'bootstrap-italia';

type functionSource = (query: string, populateResults: (results: string[]) => void) => void;

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
   * Autocomplete elements.
   * @default []
   */
  @Input() source: string[] | functionSource = [];

  /**
   * Autocomplete if required.
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Input field name
   */
  @Input() name: string | undefined;

  /**
   * The input description
   */
  @Input() description: string | undefined;

  /**
   * Prevents suggestions from appearing if fewer than N characters are typed
   * @default 0
   */
  @Input() minLength: number = 0;

  /**
   * Default value
   */
  @Input() defaultValue: string | undefined;

  /**
   * Fired when value changes
   */
  @Output() selected = new EventEmitter();

  @ViewChild('selectAutocomplete') private selectAutocompleteEl?: ElementRef<HTMLButtonElement>;

  private selectAutocomplete?: SelectAutocomplete;

  private value: string | undefined;
  private _interval: NodeJS.Timeout;
  private _inputEl: HTMLElement;

  override ngOnInit() {
    super.ngOnInit();
    if (!this.control.value && !!this.value) {
      this.writeValue(this.value);
      this.onChange(this.value);
    }
  }

  clear() {
    (this._inputEl as HTMLInputElement).value = '';
  }

  _findInput() {
    this._interval = setInterval(() => {
      this._inputEl = document.getElementById(this.id);
      if (this._inputEl) {
        this._inputEl.ATTRIBUTE_NODE;
        clearInterval(this._interval);
        this._initInputEl();
      }
    }, 500);
  }

  private _setAndCheck(value: string) {
    this.value = value == '' ? null : value;
    this.markAsTouched();
    this.writeValue(this.value);
    this.onChange(this.value);
    this._checkValidityClasses();
  }

  private _initInputEl() {
    this._inputEl.onfocus = (ev: Event) => this._setAndCheck((ev.target as HTMLInputElement).value);
    this._inputEl.onblur = (ev: Event) => this._setAndCheck((ev.target as HTMLInputElement).value);
    this._inputEl.oninput = (ev: Event) => this._setAndCheck((ev.target as HTMLInputElement).value);
  }

  private _checkValidityClasses() {
    if (this.isValid == false && this.isInvalid == false) {
      this._inputEl.classList.remove('just-validate-success-field');
      this._inputEl.classList.remove('is-invalid');
    } else if (this.isValid == true) {
      this._inputEl.classList.add('just-validate-success-field');
      this._inputEl.classList.remove('is-invalid');
    } else if (this.isInvalid == true) {
      this._inputEl.classList.add('is-invalid');
      this._inputEl.classList.remove('just-validate-success-field');
    }
  }

  override ngAfterViewInit() {
    if (this.selectAutocompleteEl) {
      super.ngAfterViewInit();
      const element = this.selectAutocompleteEl.nativeElement;
      this.selectAutocomplete = new SelectAutocomplete(element, {
        id: this.id,
        name: this.name || this.id,
        source: this.source,
        required: this.required,
        minLength: this.minLength,
        defaultValue: this.defaultValue,
        onConfirm: selectedElement => {
          this._setAndCheck(selectedElement);
          this.selected.emit(selectedElement);
        },
      });
      this._findInput();
    }
  }
}
