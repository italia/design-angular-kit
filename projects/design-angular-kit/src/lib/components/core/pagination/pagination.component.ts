import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'it-pagination[currentPage][pageNumbers]',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges {

  /**
   * Index of page (start 0)
   */
  @Input() currentPage!: number;

  /**
   * Max number of page (counter)
   */
  @Input() pageNumbers!: number;

  /**
   * Number of pages closest to the current one to display
   * @default 5
   */
  @Input() visiblePages: number = 5;

  /**
   * Pagination alignment (justify-content)
   */
  @Input() alignment?: 'center' | 'end';

  /**
   * Enable/Disable simple mode
   * Pagination in the "Simple mode" version is optimized for mobile devices.
   * @default undefined - disabled
   */
  @Input() simpleMode?: BooleanInput;

  /**
   * Enable/Disable text links
   * Chevron icons used as navigation links are replaced by text links such as “previous” and “next”.
   * @default undefined - disabled
   */
  @Input() textLinks?: BooleanInput;

  /**
   * Current value of Changer
   * If is set show the Changer
   * @default undefined - hide the Changer
   */
  @Input() currentChanger?: number;

  /**
   * Available Changer values
   * @default [10, 25, 50, 100]
   */
  @Input() changerValues: Array<number> = [10, 25, 50, 100];

  /**
   * Hide/Show "Jump to page" input
   * @default undefined - hidden
   */
  @Input() showJumpToPage?: BooleanInput;

  /**
   * Fired when page is changed. Emit the new index of page
   */
  @Output() pageEvent = new EventEmitter<number>();

  /**
   * Fired when changer is changed. Emit the new changer value
   */
  @Output() changerEvent = new EventEmitter<number>();

  /**
   * The pages
   * @protected
   */
  protected pages: Array<number> = [];

  /**
   * Jump to page input
   * @protected
   */
  protected jumpToPage: FormControl<number | null> = new FormControl<number | null>(null);

  get isSimpleMode(): boolean {
    return isTrueBooleanInput(this.simpleMode);
  }

  get isTextLinks(): boolean {
    return isTrueBooleanInput(this.textLinks);
  }

  get isShowJumpToPage(): boolean {
    return isTrueBooleanInput(this.showJumpToPage);
  }

  constructor() {
    this.jumpToPage.valueChanges.pipe(
      debounceTime(300), // Delay filter data after time span has passed without another source emission
      distinctUntilChanged(),
      filter(value => !!value && this.jumpToPage.valid)
    ).subscribe(value => {
      this.pageEvent.emit(value! - 1);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = this.calculatePages();
    if (changes['currentPage']) {
      this.jumpToPage.setValue(null, { emitEvent: false });
    }
  }

  /**
   * Create array to generate pagination of `visiblePages` element
   */
  private calculatePages(): Array<number> {
    if (this.isSimpleMode) {
      return [this.currentPage];
    }

    const length = this.pageNumbers > this.visiblePages ? this.visiblePages : this.pageNumbers;

    const halfVisiblePages = Math.floor(this.visiblePages / 2);
    let start = (this.currentPage > halfVisiblePages && this.pageNumbers > this.visiblePages) ?
      this.currentPage - halfVisiblePages + 1 : 1;

    if (this.pageNumbers > this.visiblePages) {
      if ((this.currentPage + 1) >= this.pageNumbers) {
        start -= halfVisiblePages;
      } else if (this.currentPage >= (this.pageNumbers - halfVisiblePages)) {
        start -= (this.pageNumbers - (this.currentPage + 1));
      }
    }

    return Array.from({ length }, (_, i) => i + start);
  }

  /**
   * On click page change
   * @param event click event
   * @param newPage the new page of table
   */
  protected pageChange(event: Event, newPage: number): void {
    event.preventDefault();
    this.pageEvent.emit(newPage - 1); // emit new page index
  }

  /**
   * On click changer
   * @param event click event
   * @param value the new changer value
   */
  protected changerChange(event: Event, value: number): void {
    event.preventDefault();
    this.changerEvent.emit(value); // emit new changer value
  }

}
