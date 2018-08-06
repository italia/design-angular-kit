import {
  Component,
  OnDestroy,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewContainerRef,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { Util } from '../util/util';

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
  @Input() label = '';

  /** aria label del tab. */
  @Input('aria-label') ariaLabel: string; // tslint:disable-line

  /** Se la tab è disabilitata. */
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) {
    this._disabled = Util.coerceBooleanProperty(value);
  }
  private _disabled = false;

  /** Emette un evento ogni volta che la label cambia. */
  readonly _labelChange = new Subject<void>();

  /** Emette un evento ogni volta che l'attributo disabled cambia */
  readonly _disableChange = new Subject<void>();

  /**
   * la posizione relativa della tab dove 0 rappresenta il centro, i negativi sono a sinistra
   * e i positivi sono a destra.
   */
  position: number | null = null;

  /**
   * La posizione relativa iniziale del tab se è stato creato e selezionato dopo che era stato
   * già selezionato un tab. Fornisce un contesto della posizione in cui dovrebbe essere originato un tab.
   */
  origin: number | null = null;

  /**
   * Se il tab è attivo.
   */
  isActive = false;

  @ViewChild(TemplateRef) _implicitContent: TemplateRef<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnDestroy(): void {
    this._disableChange.complete();
    this._labelChange.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('label')) {
      this._labelChange.next();
    }

    if (changes.hasOwnProperty('disabled')) {
      this._disableChange.next();
    }
  }

}
