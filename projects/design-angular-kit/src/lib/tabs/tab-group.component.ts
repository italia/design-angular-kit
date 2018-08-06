import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { Util } from '../util/util';
import { TabComponent } from './tab.component';

/** Usper generare ID univoci per ogni componente tab */
let nextId = 0;

/** Un change event emesso ai cambi di selezione. */
export class TabChangeEvent {
  /** Indice del tab selezionato. */
  index: number;
  /** Riferimento al tab selezionato. */
  tab: TabComponent;
}

/**
 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */

 /**
 * Un componente tab-group con design bootstrap italia. Supporta tab di base con una label e un contenuto.
 */
@Component({
  selector: 'it-tab-group',
  exportAs: 'itTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements AfterContentInit, AfterContentChecked, OnDestroy {

  @ContentChildren(TabComponent) _tabs: QueryList<TabComponent>;

  /** L'indice del tab che dovrebbe essere selezionato dopo che il contenuto e' stato controllato */
  private _indexToSelect: number | null = 0;

  /** Subscription all'aggiunta e rimozione di tab. */
  private _tabsSubscription = Subscription.EMPTY;

  /** Subscription ai cambiamenti alle label dei tab. */
  private _tabLabelSubscription = Subscription.EMPTY;

  /** l'indice della tab attiva. */
  @Input()
  get selectedIndex(): number | null { return this._selectedIndex; }
  set selectedIndex(value: number | null) {
    this._indexToSelect = Util.coerceNumberProperty(value, null);
  }
  private _selectedIndex: number | null = null;

  /**
   * Se il tab-group ha un tema scuro
   */
  @Input()
  get dark(): boolean { return this._dark; }
  set dark(value) {
    this._dark = Util.coerceBooleanProperty(value);
  }
  private _dark = false;

  /** abilita il supporto al data-binding bidirezionale `[(selectedIndex)]` */
  @Output() readonly selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

  /** emesso quando la selezione del tab cambia. */
  @Output() readonly selectedTabChange: EventEmitter<TabChangeEvent> =
      new EventEmitter<TabChangeEvent>(true);

  private _groupId: number;

  constructor(elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {
    this._groupId = nextId++;
  }

  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked(): void {
    // Non fissare `indexToSelect` immediatamente nel setter perchè può accadere che
    // il numero di tab cambi prima che avvenga la change detection.
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);

    // Se c'è un cambiamento nell'indice selezionato, emetti un change event. Non dovrebbe scattare
    // se l'indice selezionato non è stato inizializzato.
    if (this._selectedIndex !== indexToSelect && this._selectedIndex != null) {
      const tabChangeEvent = this._createChangeEvent(indexToSelect);
      this.selectedTabChange.emit(tabChangeEvent);
      // Emetto questo valore dopo che è partita la change detection
      // dal momento che il contenuto controllato potrebbe contenere questa variabile
      Promise.resolve().then(() => this.selectedIndexChange.emit(indexToSelect));
    }

    // Setta la posizione per ogni tab e opzionalmente una origine sul prossimo tab selezionato.
    // TODO: da controllare
    this._tabs.forEach((tab: TabComponent, index: number) => {
      tab.position = index - indexToSelect;
      tab.isActive = index === indexToSelect;

      // Se c'è già un tab selezionato, setta una origin per il prossimo tab selezionato
      // Se non ne ha già uno assegnato.
      if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });

    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._changeDetectorRef.markForCheck();
    }
  }

  ngAfterContentInit(): void {
    this._subscribeToTabLabels();

    // Sottoscrivi al cambiamento nel numero di tab, così da
    // poter ri-renderizzare il contenuto quando nuove tab vengono aggiunte o rimosse.
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);

      // Mantieni il tab selezionato precedentemente se un nuovo tab è aggiunto o rimosso e non ci sono
      // cambiamenti espliciti che selezionino un tab differente.
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();

        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assegna `_indexToSelect` e `_selectedIndex` in modo da non emettere un change event
            // per evitare al consumer loop infiniti in alcuni casi limite come ad esempio
            // se si aggiunge un tab all'interno dell'evento `selectedIndexChange`.
            this._indexToSelect = this._selectedIndex = i;
            break;
          }
        }
      }

      this._subscribeToTabLabels();
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }

  private _createChangeEvent(index: number): TabChangeEvent {
    const event = new TabChangeEvent;
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }

  /**
   * Sottoscrivi a cambiamenti nelle label dei tab. Necessario perchè l'input per la label è sul TabComponent
   * mentre il data binding è all'interno di TabGroupComponent. Per fare in modo che il binding sia aggiornato
   * bisogna sottoscriversi ai cambiamenti e azionare la change detection in maniera manuale.
   */
  private _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }

    this._tabLabelSubscription = merge(
        ...this._tabs.map(tab => tab._disableChange),
        ...this._tabs.map(tab => tab._labelChange)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  /** fissa l'indice tra 0 e la dimensione dei tab. */
  private _clampTabIndex(index: number | null): number {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }

  /** ritorna un id univoco per ogni label di tab */
  _getTabLabelId(i: number): string {
    return `it-tab-label-${this._groupId}-${i}`;
  }

  /** ritorna un id univoco per ogni elemento di contenuto del tab */
  _getTabContentId(i: number): string {
    return `it-tab-content-${this._groupId}-${i}`;
  }

  // TODO: capire se serve
  /** Handle click events, setting new selected index if appropriate. */
  // _handleClick(tab: MatTab, tabHeader: MatTabHeader, idx: number) {
  //   if (!tab.disabled) {
  //     this.selectedIndex = tabHeader.focusIndex = idx;
  //   }
  // }

  /** restituisce il tabIndex del tab. */
  _getTabIndex(tab: TabComponent, idx: number): number | null {
    if (tab.disabled) {
      return null;
    }
    return this.selectedIndex === idx ? 0 : -1;
  }

}
