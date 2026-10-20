import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'it-pagination-ngmodel-example',
  templateUrl: './pagination-ngmodel-example.component.html',
})
export class PaginationNgmodelExampleComponent {
  currentPage = 1;
  pageControl = new FormControl(1);
}
