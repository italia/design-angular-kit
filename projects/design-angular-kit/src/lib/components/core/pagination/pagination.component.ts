import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'it-pagination[currentPage][pageNumbers]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  /**
   * Index of page (start 0)
   */
  @Input() currentPage!: number;

  /**
   * Max number of page (counter)
   */
  @Input() pageNumbers!: number;

  /**
   * Pagination alignment (justify-content)
   */
  @Input() alignment?: 'center' | 'end';

  /**
   * Fired when page is changed
   */
  @Output() newPageEvent = new EventEmitter<number>();

  /**
   * Create array to generate pagination of 5 element
   */
  get pages(): Array<number> {
    const length = this.pageNumbers > 5 ? 5 : this.pageNumbers;
    let start = (this.currentPage > 1 && this.pageNumbers > 5) ? this.currentPage - 1 : 1;

    if (this.pageNumbers > 5) {
      if ((this.currentPage + 1) >= this.pageNumbers) {
        start -= 2;
      } else if (this.currentPage >= (this.pageNumbers - 2)) {
        start -= (this.pageNumbers - (this.currentPage + 1));
      }
    }

    return Array.from({ length }, (_, i) => i + start);
  }

  /**
   * On click page change
   * @param newPage the new page of table
   */
  pageChange(newPage: number): void {
    this.newPageEvent.emit(newPage - 1); // emit new page
  }

}
