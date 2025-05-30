import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItMarkMatchingTextPipe } from '../../../pipes/mark-matching-text.pipe';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { SearchItem } from '../../../interfaces/form';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-search',
  templateUrl: './search.component.html',
  imports: [AsyncPipe, ItIconComponent, ItMarkMatchingTextPipe, NgTemplateOutlet, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSearchComponent extends ItAbstractFormComponent<string | null | undefined> implements OnInit {
  /**
   * Indicates the list of searchable elements on which to base the input search system
   * If you need to retrieve items via API, can pass a function of Observable
   * @default undefined
   */
  @Input({ required: true }) searchData!: Array<SearchItem> | ((search?: string | null) => Observable<Array<SearchItem>>);

  /**
   * To get a large version of Search
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
   * Fired when the Search Item has been selected
   */
  @Output() searchSelectedEvent: EventEmitter<SearchItem> = new EventEmitter();

  protected showAutocompletion = false;

  /** Observable da cui vengono emessi i risultati dell'auto completamento */
  protected searchResults$: Observable<{
    searchedValue: string | undefined | null;
    relatedEntries: Array<SearchItem>;
  }> = new Observable();

  override ngOnInit() {
    super.ngOnInit();
    this.searchResults$ = this.getSearchResults$();
  }

  /**
   * Create the search list
   */
  private getSearchResults$(): Observable<{
    searchedValue: string | null | undefined;
    relatedEntries: Array<SearchItem>;
  }> {
    return this.control.valueChanges.pipe(
      debounceTime(this.debounceTime), // Delay filter data after time span has passed without another source emission, useful when the user is typing multiple letters
      distinctUntilChanged(), // Only if searchValue is distinct in comparison to the last value
      switchMap(searchedValue => {
        if (!this.searchData) {
          return of({
            searchedValue,
            relatedEntries: <Array<SearchItem>>[],
          });
        }

        const autoCompleteData$ = Array.isArray(this.searchData) ? of(this.searchData) : this.searchData(searchedValue);
        return autoCompleteData$.pipe(
          map(searchData => {
            if (!searchedValue || typeof searchedValue === 'number') {
              return { searchedValue, relatedEntries: [] };
            }

            const lowercaseValue = searchedValue.toLowerCase();
            const relatedEntries = searchData.filter(item => item.value?.toLowerCase().includes(lowercaseValue));

            return { searchedValue, relatedEntries };
          })
        );
      })
    );
  }

  protected onEntryClick(entry: SearchItem, event: Event) {
    // Se non è stato definito un link associato all'elemento dell'search, probabilmente il desiderata
    // non è effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
    if (!entry.link) {
      event.preventDefault();
    }

    this.searchSelectedEvent.next(entry);
    this.control.setValue(entry.value);
    this.showAutocompletion = false;
  }

  protected searchItemTrackByValueFn(index: number, item: SearchItem) {
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
