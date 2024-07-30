import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostAttributeToken, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, distinctUntilChanged, map, shareReplay, skip, startWith, tap } from 'rxjs';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { TransferStore } from '../store/transfer.store';

import { SourceType, TransferItem } from '../transfer.model';

interface SelectableTransferItem<T> extends TransferItem<T> {
  selected: boolean;
}

@Component({
  selector: 'it-transfer-list',
  standalone: true,
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './transfer-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferListComponent<T> extends ItAbstractComponent {
  /**
   * Widget title
   */
  readonly title = inject(new HostAttributeToken('title'), { optional: true });

  readonly sourceType = inject(new HostAttributeToken('sourceType'), { optional: true }) as SourceType;

  private readonly items = this.store.selectItems(this.sourceType).pipe(distinctUntilChanged(), shareReplay());
  private readonly selected = this.store.selectSelectedItems(this.sourceType).pipe(distinctUntilChanged(), shareReplay());

  readonly numberOfItems$ = this.items.pipe(
    map(items => ({ length: items.length })),
    startWith({ length: 0 })
  );
  readonly selectAllDisabled = this.items.pipe(map(items => items.length === 0));
  /**
   * Items of the list
   * @default []
   */
  readonly items$ = combineLatest([this.items, this.selected]).pipe(
    map(([items, selected]) =>
      items.map(item => {
        (item as SelectableTransferItem<T>).selected = selected.has(item);
        return item as SelectableTransferItem<T>;
      })
    )
  );

  @ViewChild('selectAllCheckbox')
  selectAllCheckboxRef!: ElementRef<HTMLInputElement>;

  readonly instanceId = this.getInstanceId();

  constructor(private readonly store: TransferStore<T>) {
    super();
    this.onItemsUpdate();
  }
  /**
   * Checkbox selection click handler
   */
  checkboxSelectionHandler(item: TransferItem<T>) {
    this.store.checkboxSelection(item, this.sourceType);
  }
  /**
   * Checkbox select all selection handler
   */
  checkboxSelectAllHandler(event: Event) {
    const checked = ((event as PointerEvent).target as HTMLInputElement).checked;
    this.store.selectAllSelection(checked, this.sourceType);
  }

  /**
   * Items update subscription
   */
  private onItemsUpdate() {
    this.items
      .pipe(
        takeUntilDestroyed(),
        skip(1),
        tap(() => {
          if (this.selectAllCheckboxRef) {
            this.selectAllCheckboxRef.nativeElement.checked = false;
          }
        })
      )
      .subscribe();
  }

  private getInstanceId() {
    return Math.floor(Math.random() * 100000000).toString();
  }
}
