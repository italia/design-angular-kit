import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostAttributeToken, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map, shareReplay, skip, startWith, tap } from 'rxjs';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { TransferStore } from '../store/transfer.store';

import { SourceType, TransferItem } from '../transfer.model';

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
   * @default false
   */
  readonly title: string = inject(new HostAttributeToken('title'));

  readonly sourceType = inject(new HostAttributeToken('sourceType')) as SourceType;

  private readonly items = this.store.selectItems(this.sourceType).pipe(distinctUntilChanged(), shareReplay());

  readonly numberOfItems$ = this.items.pipe(
    map(items => ({ length: items.length })),
    startWith({ length: 0 })
  );
  /**
   * Items of the list
   * @default []
   */
  readonly items$ = this.items.pipe(
    map(items =>
      items.map(item => {
        return item;
      })
    )
  );

  @ViewChild('selectAllCheckbox')
  selectAllCheckboxRef: ElementRef<HTMLInputElement>;
  /**
   * Selected items
   */
  readonly selected$ = this.store.selectSelectedItems(this.sourceType);

  /**
   * Selected items binded with the view
   */
  selected = new Set<TransferItem<T>>();

  readonly instanceId = this.getInstanceId();

  constructor(private readonly store: TransferStore<T>) {
    super();
    this.onItemsUpdate();
    this.onSelectionUpdate();
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
  checkboxSelectAllHandler(checked: boolean) {
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
  /**
   * Selection update subscription
   */
  private onSelectionUpdate() {
    this.selected$
      .pipe(
        takeUntilDestroyed(),
        tap(selected => {
          this.selected = selected;
        })
      )
      .subscribe();
  }

  private getInstanceId() {
    return Math.floor(Math.random() * 100000000).toString();
  }
}
