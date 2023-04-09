import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'it-table-of-content-item',
  templateUrl: './table-of-content-item.component.html',
  styleUrls: ['./table-of-content-item.component.scss']
})
export class TableOfContentItemComponent {

  @Input() tocItem: any;

  constructor() { }

}
