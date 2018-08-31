import { Directive, Output, EventEmitter, HostBinding} from '@angular/core';

/**
 * Per ottimizzare l’ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili
 * (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[it-collapse]',
  exportAs: 'it-collapse'
})
export class CollapseDirective {

  private _isDisposed = false;
  private _isShown = false;

  /**
   * Evento da emettere quando il collapse sta per essere mostrato
   */
  @Output('show')
  get showEvent(): EventEmitter<void> { return this._showEvent; }
  set showEvent(value: EventEmitter<void>) { this._showEvent = value; }
  private _showEvent = new EventEmitter<void>();

  /**
   * Evento da emettere quando il collapse è mostrato
   */
  @Output('shown')
  get shownEvent(): EventEmitter<void> { return this._shownEvent; }
  set shownEvent(value: EventEmitter<void>) { this._shownEvent = value; }
  private _shownEvent = new EventEmitter<void>();

  /**
   * Evento da emettere quando il collapse sta per essere nascosto
   */
  @Output('hide')
  get hideEvent(): EventEmitter<void> { return this._hideEvent; }
  set hideEvent(value: EventEmitter<void>) { this._hideEvent = value; }
  private _hideEvent = new EventEmitter<void>();

  /**
   * Evento da emettere quando il collapse è nascosto
   */
  @Output('hidden')
  get hiddenEvent(): EventEmitter<void> { return this._hiddenEvent; }
  set hiddenEvent(value: EventEmitter<void>) { this._hiddenEvent = value; }
  private _hiddenEvent = new EventEmitter<void>();

  @HostBinding('class')
  get cssClass() {
    let cssClass = 'collapse';
    if (this.isShown()) {
      cssClass += ' show';
    }
    return cssClass;
  }

  show() {
    this._isShown = true;
  }

  hide() {
    if (!this._isDisposed) {
      this._isShown = false;
    }
  }

  toggle() {
    if (!this.isShown()) {
      this.show();
    } else {
      this.hide();
    }
  }

  dispose() {
    this._isDisposed = true;
  }

  isShown() {
    return this._isShown;
  }
}
