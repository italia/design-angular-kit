import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-simple-example',
  templateUrl: './pagination-simple-example.component.html',
  standalone: false,
})
export class PaginationSimpleExampleComponent {
  currentPage: number = 0;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}
