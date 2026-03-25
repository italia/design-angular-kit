import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'it-pagination-ngmodel-example',
  templateUrl: './pagination-ngmodel-example.component.html',
})
export class PaginationNgmodelExampleComponent {
  currentPage = 1;
  pageControl = new FormControl(1);
}
