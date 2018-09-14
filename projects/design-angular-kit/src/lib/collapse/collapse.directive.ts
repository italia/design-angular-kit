import { Directive, Output, EventEmitter, HostBinding, Input} from '@angular/core';

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

  /**
   * La direttiva di collapse che opzionalmente contiene il predicato che ne stabilisce
   * che sarà avvalorato a true quando il collapse è espanso, a false altrimenti
   */
  @Input('it-collapse')
  get itCollapse(): boolean { return this._isShown; }
  set itCollapse(value: boolean) { this._isShown = value != null && `${value}` === 'true'; }
  private _isShown = false;

  /**
   * Evento da emettere quando il collapse sta per essere mostrato
   */
  @Output('show')
  get showEvent(): EventEmitter<CollapseDirective> { return this._showEvent; }
  set showEvent(value: EventEmitter<CollapseDirective>) { this._showEvent = value; }
  private _showEvent = new EventEmitter<CollapseDirective>();

  /**
   * Evento da emettere quando il collapse è mostrato
   */
  @Output('shown')
  get shownEvent(): EventEmitter<CollapseDirective> { return this._shownEvent; }
  set shownEvent(value: EventEmitter<CollapseDirective>) { this._shownEvent = value; }
  private _shownEvent = new EventEmitter<CollapseDirective>();

  /**
   * Evento da emettere quando il collapse sta per essere nascosto
   */
  @Output('hide')
  get hideEvent(): EventEmitter<CollapseDirective> { return this._hideEvent; }
  set hideEvent(value: EventEmitter<CollapseDirective>) { this._hideEvent = value; }
  private _hideEvent = new EventEmitter<CollapseDirective>();

  /**
   * Evento da emettere quando il collapse è nascosto
   */
  @Output('hidden')
  get hiddenEvent(): EventEmitter<CollapseDirective> { return this._hiddenEvent; }
  set hiddenEvent(value: EventEmitter<CollapseDirective>) { this._hiddenEvent = value; }
  private _hiddenEvent = new EventEmitter<CollapseDirective>();

  @HostBinding('class')
  get cssClass() {
    let cssClass = 'collapse';
    if (this.isShown()) {
      cssClass += ' show';
    }
    return cssClass;
  }

  show() {
    this.showEvent.emit(this);
    this._isShown = true;
    this.shownEvent.emit(this);
  }

  hide() {
    this.hideEvent.emit(this);
    if (!this._isDisposed) {
      this._isShown = false;
      this.hiddenEvent.emit(this);
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
