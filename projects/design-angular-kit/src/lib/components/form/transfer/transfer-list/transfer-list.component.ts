import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostAttributeToken, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'it-transfer-list',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './transfer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferListComponent<T> {
  @Input()
  items: T[] = [];

  @Output()
  readonly itemsSelectionChange = new EventEmitter<T[]>();

  public title: string = inject(new HostAttributeToken('title'));

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
