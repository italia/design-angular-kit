import { Component, OnInit } from '@angular/core';
import { finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'it-table-paginated',
  templateUrl: './table-paginated.component.html'
})
export class TablePaginatedComponent implements OnInit {
  isLoading: boolean = false;
  currentPage: number = 0;
  pageOffset: number = 10;
  totalPages: number = 0;

  list: Array<any> = [];

  ngOnInit(): void {
    this.getPage();
  }

  /**
   * Retrieve the page list
   * @param page page to show
   */
  getPage(page: number = 0): void {
    this.isLoading = true;
    this.fakeServer(page, this.pageOffset).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(data => {
      this.list = data.list;
      this.currentPage = page;
      this.totalPages = Math.ceil(data.totalItemsCount / this.pageOffset);
    });
  }

  changerEvent(value: number): void {
    this.pageOffset = value;
    this.getPage();
  }


  private pages: Array<Array<string>> = [
    ['Antonino', 'Francesco', 'Giovanni'],
    ['Linda', 'Riccardo', 'Marco'],
    ['Daniel', 'Gioele', 'Giulio'],
    ['Diego', 'Andrea', 'Lorenzo'],
    ['Giorgio', 'Manuel', 'Luca']
  ];

  private fakeServer(page: number, pageOffset: number): Observable<{ list: Array<string>, totalItemsCount: number }> {
    const pageLength = Math.round(pageOffset / this.pages[0].length);
    const list = Array.from({length: pageLength}).flatMap(() => this.pages[page]);
    return of({
      list,
      totalItemsCount: this.pages.length * list.length
    });
  }
}
