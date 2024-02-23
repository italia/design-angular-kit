import { Component } from '@angular/core';

@Component({
  selector: 'it-pagination-example',
  templateUrl: './pagination-example.component.html',
})
export class PaginationExampleComponent {
  leftCurrentPage = 0;
  centerCurrentPage = 25;
  rightCurrentPage = 0;

  leftPageChange(page: number): void {
    this.leftCurrentPage = page;
  }

  centerPageChange(page: number): void {
    this.centerCurrentPage = page;
  }

  rightPageChange(page: number): void {
    this.rightCurrentPage = page;
  }
}
