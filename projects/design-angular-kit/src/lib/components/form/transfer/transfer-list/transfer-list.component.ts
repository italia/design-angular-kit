import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostAttributeToken,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'it-transfer-list',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './transfer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferListComponent<T> implements OnChanges {
  @Input()
  items: T[] = [];

  @Output()
  readonly itemsSelectionChange = new EventEmitter<T[]>();

  readonly title: string = inject(new HostAttributeToken('title'));

  readonly selected = new Set<T>();

  ngOnChanges(c: SimpleChanges) {
    this.resetSelectedWhenItemsChange(c);
  }

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

  private resetSelectedWhenItemsChange(c: SimpleChanges) {
    if (c.items) {
      this.selected.clear();
    }
  }
}
