import { Component } from '@angular/core';
import TableOfContent from '../../assets/table-of-content.json';

@Component({
  selector: 'it-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss'],
  standalone: false,
})
export class TableOfContentComponent {
  tableOfContent = (<any>TableOfContent).tableOfContent;

  public toggle(event, tocItem) {
    this.tableOfContent = this.tableOfContent.map(item => {
      const newTocItem = item;
      if (item.label === tocItem.label) {
        newTocItem.active = true;
        if (newTocItem.links.length > 0) {
          newTocItem.links[0].active = true;
        }
      } else {
        newTocItem.active = false;
      }
      return newTocItem;
    });
  }
}
