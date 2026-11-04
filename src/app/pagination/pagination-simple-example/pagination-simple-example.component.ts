import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-simple-example',
  templateUrl: './pagination-simple-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationSimpleExampleComponent {
  currentPage: number = 0;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}
