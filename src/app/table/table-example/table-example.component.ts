import { Component } from '@angular/core';
import { TableColor } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent {

  color?: TableColor;

}
