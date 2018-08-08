import {
  Component, Input, ContentChildren, QueryList, forwardRef,
  AfterContentInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import { Util } from '../util/util';
import { Subscription } from 'rxjs';

let identifier = 0;

/**
 * Una componente che indica la posizione della pagina corrente all’interno di una gerarchia di navigazione
 */
@Component({
  selector: 'it-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements AfterContentInit, OnChanges, OnDestroy {
  id = `it-breadcrumb-${identifier++}`;

  /**
   * Indica che il breadcrumb utilizza il tema di colorazione scura.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get dark(): boolean { return this._dark; }
  set dark(value: boolean) { this._dark = Util.coerceBooleanProperty(value); }
  private _dark = false;

  /**
   * Il carattere che verrà usato come separatore tra gli elementi del breadcrumb
   */
  @Input()
  get separator(): string { return this._separator; }
  set separator(value: string) { this._separator = value; }
  private _separator = '/';

  @ContentChildren(forwardRef(() => BreadcrumbItemComponent), { descendants: true })
  private _items: QueryList<BreadcrumbItemComponent>;

  get breadcrumbClass() {
    return 'breadcrumb' + (this._dark ? ' dark' : '');
  }

  private _subscription = Subscription.EMPTY;

  ngAfterContentInit() {
    this._reloadBreadcrumbs(this._items);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['separator']) {
      if (!changes['separator'].firstChange) {
        this._reloadBreadcrumbs(this._items);
      }
    }
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  private _reloadBreadcrumbs(currentItems: QueryList<BreadcrumbItemComponent>) {
    currentItems.forEach(item => {
      item.separator = this.separator;
      item.isLast = (item === currentItems.last);
    });

    this._subscribeToChanges();
  }


  private _subscribeToChanges() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }

    this._subscription = this._items.changes.subscribe(items => {
      this._reloadBreadcrumbs(items);
    });
  }

}
