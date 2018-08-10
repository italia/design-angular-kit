import {
  Component,
  OnDestroy,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { Util } from '../util/util';

/**
 * Un componente tab con design bootstrap italia. Indica la singola tab di un insieme di tab.
 * Utilizzabile con il tag `<it-tab>` all'interno di un tag `<it-tab-group>`.
 */
@Component({
  selector: 'it-tab',
  exportAs: 'itTab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent implements OnChanges, OnDestroy {

  /** Testo della tab. */
  @Input() label: string = ''; // tslint:disable-line

  /** Aria label del tab. */
  @Input('aria-label') ariaLabel: string; // tslint:disable-line

  /**
   * Riferimento all'elemento dal quale il tab è etichettato.
   * Viene azzerto se `aria-label` è impostato.
   */
  @Input('aria-labelledby') ariaLabelledby: string; // tslint:disable-line

  /** Se la tab è disabilitata. */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value) {
    this._disabled = Util.coerceBooleanProperty(value);
  }
  private _disabled = false;

  /**
   * La stringa rappresentante l'icona da utilizzare nel titolo della tab. Es. `it-file`
   */
  @Input() icon: string | null = null;

  /** Emette un evento ogni volta che la label cambia. */
  readonly _labelChange = new Subject<void>();

  /** Emette un evento ogni volta che l'attributo disabled cambia */
  readonly _disableChange = new Subject<void>();

  /**
   * La posizione relativa della tab dove 0 rappresenta il centro, i negativi sono a sinistra
   * e i positivi sono a destra.
   */
  position: number | null = null;

  /**
   * Se il tab è attivo.
   */
  isActive = false;

  @ViewChild(TemplateRef) _implicitContent: TemplateRef<any>;

  ngOnDestroy(): void {
    this._disableChange.complete();
    this._labelChange.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('label')
        || changes.hasOwnProperty('ariaLabel')
        || changes.hasOwnProperty('ariaLabelledby')) {
      this._labelChange.next();
    }

    if (changes.hasOwnProperty('disabled')) {
      this._disableChange.next();
    }
  }

}
