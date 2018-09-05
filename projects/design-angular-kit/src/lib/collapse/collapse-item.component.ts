import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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

  /**
   * Evento da emettere quando il collapse sta per essere mostrato
   */
  @Output('show')
  get showEvent(): EventEmitter<CollapseItemComponent> { return this._showEvent; }
  set showEvent(value: EventEmitter<CollapseItemComponent>) { this._showEvent = value; }
  private _showEvent = new EventEmitter<CollapseItemComponent>();

  /**
   * Evento da emettere quando il collapse è mostrato
   */
  @Output('shown')
  get shownEvent(): EventEmitter<CollapseItemComponent> { return this._shownEvent; }
  set shownEvent(value: EventEmitter<CollapseItemComponent>) { this._shownEvent = value; }
  private _shownEvent = new EventEmitter<CollapseItemComponent>();

  /**
   * Evento da emettere quando il collapse sta per essere nascosto
   */
  @Output('hide')
  get hideEvent(): EventEmitter<CollapseItemComponent> { return this._hideEvent; }
  set hideEvent(value: EventEmitter<CollapseItemComponent>) { this._hideEvent = value; }
  private _hideEvent = new EventEmitter<CollapseItemComponent>();

  /**
   * Evento da emettere quando il collapse è nascosto
   */
  @Output('hidden')
  get hiddenEvent(): EventEmitter<CollapseItemComponent> { return this._hiddenEvent; }
  set hiddenEvent(value: EventEmitter<CollapseItemComponent>) { this._hiddenEvent = value; }
  private _hiddenEvent = new EventEmitter<CollapseItemComponent>();

  show() {
    this.showEvent.emit(this);
  }

  hide() {
    this.hideEvent.emit(this);
  }

  shown() {
    this.shownEvent.emit(this);
  }

  hidden() {
    this.hiddenEvent.emit(this);
  }

  constructor(readonly elementRef: ElementRef) { }
}
