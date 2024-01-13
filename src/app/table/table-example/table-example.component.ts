import { Component } from '@angular/core';
import { TableColor } from 'projects/design-angular-kit/src/lib/interfaces/core';
import { ItSortEvent } from 'projects/design-angular-kit/src/lib/interfaces/sortable-table';

@Component({
  selector: 'it-table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent {
  sortData(event: ItSortEvent) {
    console.log(`active: ${event.active}, direction: ${event.direction}`);
    throw new Error('Method not implemented.');
  }

  color?: TableColor;

}
