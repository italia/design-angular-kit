import { Component } from '@angular/core';

interface PaginatedData {
  currentPage: number;
  pageNumbers: number;
  data: Array<string>;
}

@Component({
  selector: 'it-list-pagination',
  templateUrl: './list-pagination.component.html',
})
export class ListPaginationComponent {
  private pages: Array<Array<string>> = [
    ['Antonino', 'Francesco', 'Giovanni'],
    ['Linda', 'Riccardo', 'Marco'],
    ['Daniel', 'Gioele', 'Giulio'],
    ['Diego', 'Andrea', 'Lorenzo'],
    ['Giorgio', 'Manuel', 'Luca'],
  ];

  protected selectedItem: PaginatedData = {
    currentPage: 0,
    pageNumbers: this.pages.length,
    data: this.pages[0],
  };

  protected onPageChange(page: number): void {
    this.selectedItem = {
      ...this.selectedItem,
      data: this.pages[page],
      currentPage: page,
    };
  }
}
