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
  @Input() defaultValue: string | null = '';

  /**
   * Function to set assistive hint label. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() assistiveHintLabel: () => string = () =>
    'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento';

  /**
   * Function to set label in case of no result. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() noResultsLabel: () => string = () => 'Nessun risultato trovato';

  /**
   * Function to set label that alerts you that query's too short. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() statusQueryTooShortLabel: (minQueryLength: number) => string = minQueryLength =>
    `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`;

  /**
   * Function to set no results label. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() statusNoResultsLabel: () => string = () => 'Nessun risultato di ricerca';

  /**
   * Function to set selected option label. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() statusSelectedOptionLabel: (selectedOption: string, length: number, index: number) => string = (selectedOption, length, index) =>
    `${selectedOption} ${index + 1} di ${length} è sottolineato`;

  /**
   * Function to set status results label. For more information https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization
   */
  @Input() statusResultsLabel: (length: number, contentSelectedOption: string) => string = (length, contentSelectedOption) => {
    const words = {
      result: length === 1 ? 'risultato' : 'risultati',
      is: length === 1 ? 'è' : 'sono',
      available: length === 1 ? 'disponibile' : 'disponibili',
    };

    return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;
  };

  /**
   * Fired when value changes
   */
  @Output() selected = new EventEmitter();

  @ViewChild('selectAutocomplete') private selectAutocompleteEl?: ElementRef<HTMLButtonElement>;

  private selectAutocomplete?: SelectAutocomplete;

  private value: string | undefined = '';
  private _interval: any = 0;
  private _inputEl: HTMLElement | null = null;

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
        clearInterval(this._interval);
        this._initInputEl();
      }
    }, 500);
  }

  private _setAndCheck(value: string) {
    this.value = value == '' ? undefined : value;
    if (this.control.touched) {
      this.writeValue(this.value);
      this.onChange(this.value);
    }
    if (this.isValid == false && this.isInvalid == false) {
      this._inputEl?.classList.remove('just-validate-success-field');
      this._inputEl?.classList.remove('is-invalid');
    } else if (this.isValid == true) {
      this._inputEl?.classList.add('just-validate-success-field');
      this._inputEl?.classList.remove('is-invalid');
    } else if (this.isInvalid == true) {
      this._inputEl?.classList.add('is-invalid');
      this._inputEl?.classList.remove('just-validate-success-field');
    }
  }

  private _initInputEl() {
    if (this._inputEl) {
      this._inputEl.onfocus = (ev: Event) => this._setAndCheck((ev.target as HTMLInputElement).value);
      this._inputEl.onblur = (ev: Event) => this._setAndCheck((ev.target as HTMLInputElement).value);
      this._inputEl.oninput = (ev: Event) => {
        this.markAsTouched();
        this._setAndCheck((ev.target as HTMLInputElement).value);
      };
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
        tAssistiveHint: this.assistiveHintLabel,
        tNoResults: this.noResultsLabel,
        tStatusQueryTooShort: this.statusQueryTooShortLabel,
        tStatusNoResults: this.statusNoResultsLabel,
        tStatusSelectedOption: this.statusSelectedOptionLabel,
        tStatusResults: this.statusResultsLabel,
        onConfirm: (selectedElement: string) => {
          this.markAsTouched();
          this._setAndCheck(selectedElement);
          this.selected.emit(selectedElement);
        },
      });
      this._findInput();
    }
  }
}
