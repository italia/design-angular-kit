import { EventEmitter, ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'it-transfer-list',
  standalone: true,
  imports: [],
  templateUrl: './transfer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferListComponent<T> {
  @Input()
  items: T[] = [];

  @Output()
  readonly itemsSelectionChange = new EventEmitter<T[]>();

  private readonly selected = new Set<T>();

  checkboxSelectionHandler(item: T, index: number) {
    console.log(index);
    if (this.selected.has(item)) {
      this.selected.delete(item);
    } else {
      this.selected.add(item);
    }

    this.itemsSelectionChange.emit(Array.from(this.selected));
  }

  checkboxSelectAllHandler(checked: boolean) {
    // const target = event.target as EventTarget;
    console.log(checked);
    if (checked) {
      this.items.forEach(item => this.selected.add(item));
    } else {
      this.selected.clear();
    }

    this.itemsSelectionChange.emit(Array.from(this.selected));
  }
}
