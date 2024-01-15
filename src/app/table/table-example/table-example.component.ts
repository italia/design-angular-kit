import { Component } from '@angular/core';
import { TableColor } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent {

  color?: TableColor;

}
