import { Component } from '@angular/core';
import { TableColor } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';
import { Sort } from 'projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive';


@Component({
  selector: 'it-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent {
  sortData(event: Sort) {
    console.log(`active: ${event.active}, direction: ${event.direction}`);
    throw new Error('Method not implemented.');
  }

  color?: TableColor;

}
