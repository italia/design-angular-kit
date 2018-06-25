import { Component, OnInit } from '@angular/core';
import { TableOfContentService } from '../table-of-content.service';

@Component({
  selector: 'it-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss']
})
export class TableOfContentComponent implements OnInit {

  constructor(private tocService: TableOfContentService) { }

  public tableOfContent;

  ngOnInit() {
    this.getTableOfContent();
  }

  getTableOfContent(): void {
    this.tableOfContent = this.tocService.getTableOfContent();
  }

  public toggle(event, tocItem) {
    this.tableOfContent = this.tableOfContent.map((item) => {
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
