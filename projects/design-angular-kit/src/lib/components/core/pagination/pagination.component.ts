import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { LowerCasePipe } from '@angular/common';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItDropdownModule } from '../dropdown/dropdown.module';
import { ItInputComponent } from '../../form/input/input.component';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, LowerCasePipe, ItDropdownModule, ItInputComponent, ReactiveFormsModule],
})
export class ItPaginationComponent implements OnChanges {
  /**
   * Index of page (start 0)
   */
  @Input({ required: true }) currentPage!: number;

  /**
   * Max number of page (counter)
   */
  @Input({ required: true }) pageNumbers!: number;

  /**
   * Number of pages closest to the current one to display
   * @default 5
   */
  @Input() visiblePages: number = 5;

  /**
   * Pagination alignment (justify-content)
   */
  @Input() alignment: 'center' | 'end' | undefined;

  /**
   * Enable/Disable simple mode
   * Pagination in the "Simple mode" version is optimized for mobile devices.
   * @default false - disabled
   */
  @Input({ transform: inputToBoolean }) simpleMode?: boolean;

  /**
   * Enable/Disable text links
   * Chevron icons used as navigation links are replaced by text links such as “previous” and “next”.
   * @default false - disabled
   */
  @Input({ transform: inputToBoolean }) textLinks?: boolean;

  /**
   * Current value of Changer
   * If is set show the Changer
   * @default undefined - hide the Changer
   */
  @Input() currentChanger: number | undefined;

  /**
   * Available Changer values
   * @default [10, 25, 50, 100]
   */
  @Input() changerValues: Array<number> = [10, 25, 50, 100];

  /**
   * Hide/Show "Jump to page" input
   * @default false - hidden
   */
  @Input({ transform: inputToBoolean }) showJumpToPage?: boolean;

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

  constructor() {
    this.jumpToPage.valueChanges
      .pipe(
        debounceTime(300), // Delay filter data after time span has passed without another source emission
        distinctUntilChanged(),
        filter(value => !!value && this.jumpToPage.valid)
      )
      .subscribe(value => {
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
    if (this.simpleMode) {
      return [this.currentPage];
    }

    const length = this.pageNumbers > this.visiblePages ? this.visiblePages : this.pageNumbers;

    const halfVisiblePages = Math.floor(this.visiblePages / 2);
    let start = this.currentPage > halfVisiblePages && this.pageNumbers > this.visiblePages ? this.currentPage - halfVisiblePages + 1 : 1;

    if (this.pageNumbers > this.visiblePages) {
      if (this.currentPage + 1 >= this.pageNumbers) {
        start -= halfVisiblePages;
      } else if (this.currentPage >= this.pageNumbers - halfVisiblePages) {
        start -= this.pageNumbers - (this.currentPage + 1);
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
