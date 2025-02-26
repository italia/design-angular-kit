import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItMarkMatchingTextPipe } from '../../../pipes/mark-matching-text.pipe';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AutocompleteItem } from '../../../interfaces/form';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-autocomplete',
  templateUrl: './autocomplete.component.html',
  imports: [AsyncPipe, ItIconComponent, ItMarkMatchingTextPipe, NgTemplateOutlet, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItAutocompleteComponent extends ItAbstractFormComponent<string | null | undefined> implements OnInit {
  /**
   * Indicates the list of searchable elements on which to base the input autocomplete system
   * If you need to retrieve items via API, can pass a function of Observable
   * @default undefined
   */
  @Input({ required: true }) autocompleteData!: Array<AutocompleteItem> | ((search?: string | null) => Observable<Array<AutocompleteItem>>);

  /**
   * To get a large version of Autocomplete
   */
  @Input({ transform: inputToBoolean }) big?: boolean;

  /**
   * Time span [ms] has passed without another source emission, to delay data filtering.
   * Useful when the user is typing multiple letters
   * @default 300 [ms]
   */
  @Input() debounceTime = 300;

  /**
   * The input placeholder
   */
  @Input() placeholder = '';

  /**
   * The input label even get labelWaria icon
   */
  @Input() labelWaria: string | undefined = undefined;

  /**
   * Show the label
   */
  @Input({ transform: inputToBoolean }) forceShowLabel: boolean = true;

  /**
   * Fired when the Autocomplete Item has been selected
   */
  @Output() autocompleteSelectedEvent: EventEmitter<AutocompleteItem> = new EventEmitter();

  protected showAutocompletion = false;

  /** Observable da cui vengono emessi i risultati dell'auto completamento */
  protected autocompleteResults$: Observable<{
    searchedValue: string | undefined | null;
    relatedEntries: Array<AutocompleteItem>;
  }> = new Observable();

  override ngOnInit() {
    super.ngOnInit();
    this.autocompleteResults$ = this.getAutocompleteResults$();
  }

  /**
   * Create the autocomplete list
   */
  private getAutocompleteResults$(): Observable<{
    searchedValue: string | null | undefined;
    relatedEntries: Array<AutocompleteItem>;
  }> {
    return this.control.valueChanges.pipe(
      debounceTime(this.debounceTime), // Delay filter data after time span has passed without another source emission, useful when the user is typing multiple letters
      distinctUntilChanged(), // Only if searchValue is distinct in comparison to the last value
      switchMap(searchedValue => {
        if (!this.autocompleteData) {
          return of({
            searchedValue,
            relatedEntries: <Array<AutocompleteItem>>[],
          });
        }

        const autoCompleteData$ = Array.isArray(this.autocompleteData) ? of(this.autocompleteData) : this.autocompleteData(searchedValue);
        return autoCompleteData$.pipe(
          map(autocompleteData => {
            if (!searchedValue || typeof searchedValue === 'number') {
              return { searchedValue, relatedEntries: [] };
            }

            const lowercaseValue = searchedValue.toLowerCase();
            const relatedEntries = autocompleteData.filter(item => item.value?.toLowerCase().includes(lowercaseValue));

            return { searchedValue, relatedEntries };
          })
        );
      })
    );
  }

  protected onEntryClick(entry: AutocompleteItem, event: Event) {
    // Se non è stato definito un link associato all'elemento dell'autocomplete, probabilmente il desiderata
    // non è effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
    if (!entry.link) {
      event.preventDefault();
    }

    this.autocompleteSelectedEvent.next(entry);
    this.control.setValue(entry.value);
    this.showAutocompletion = false;
  }

  protected autocompleteItemTrackByValueFn(index: number, item: AutocompleteItem) {
    return item.value;
  }

  protected onKeyDown() {
    this.showAutocompletion = true;
  }

  protected get isActiveLabel(): boolean {
    const value = this.control.value;
    return this.forceShowLabel && (!!value || !!this.placeholder);
  }
}
