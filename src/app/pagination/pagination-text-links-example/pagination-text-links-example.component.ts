import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-text-links-example',
  templateUrl: './pagination-text-links-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationTextLinksExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}
