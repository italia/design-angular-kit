import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-table-of-content-item',
  templateUrl: './table-of-content-item.component.html',
  styleUrls: ['./table-of-content-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TableOfContentItemComponent {
  @Input() tocItem: any;

  constructor() {}
}
