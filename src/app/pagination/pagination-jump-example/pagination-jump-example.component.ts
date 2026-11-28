import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-jump-example',
  templateUrl: './pagination-jump-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationJumpExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}
