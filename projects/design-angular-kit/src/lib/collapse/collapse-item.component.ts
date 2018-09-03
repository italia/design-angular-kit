import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CollapseDirective } from './collapse.directive';

let identifier = 0;

@Component({
  selector: 'it-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.css']
})
export class CollapseItemComponent {
  @ViewChild(CollapseDirective) readonly directive: CollapseDirective;

  id = `collapse-item-${identifier++}`;
  headingId = `${this.id}-heading`;

  /**
   * Testo del bottone di apertura/chiusura del collapse item
   */
  @Input()
  get header(): string { return this._header; }
  set header(value: string) { this._header = value; }
  private _header;

  constructor(readonly elementRef: ElementRef) { }
}
