import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-total-number-example',
  templateUrl: './pagination-total-number-example.component.html'
})
export class PaginationTotalNumberExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}
