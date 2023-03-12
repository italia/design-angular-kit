import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-changer-example',
  templateUrl: './pagination-changer-example.component.html'
})
export class PaginationChangerExampleComponent {
  currentPage: number = 25;

  changerValue: number = 10;

  /**
   * By default, the values are [10, 25, 50, 100]
   */
  changerValues: Array<number> = [10, 25, 50, 100, 250];

  pageChange(page: number): void {
    this.currentPage = page;
  }

  changerEvent(value: number): void {
    this.changerValue = value;
  }
}
