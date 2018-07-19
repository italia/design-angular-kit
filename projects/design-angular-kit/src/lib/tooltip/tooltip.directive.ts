/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  Injector,
  Renderer2,
  ComponentRef,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone,
  SimpleChanges,
  HostListener,
} from '@angular/core';

import { listenToTriggers } from './triggers';
import { positionElements, Placement, PlacementArray } from './positioning';
import { PopupService } from './popup';
import { TooltipConfig } from './tooltip.config';
import { TooltipComponent } from './tooltip.component';
import { Subscription } from 'rxjs';

const TRIGGER = 'hover';

let identifier = 0;

/**
 * Una direttiva per la creazione di un tooltip.
 */
@Directive({
  selector: '[it-tooltip]', // tslint:disable-line
  exportAs: 'it-tooltip',
  providers: [TooltipConfig]
})
export class TooltipDirective implements OnInit, OnDestroy, OnChanges {
  /**
   * Contenuto da mostrare nel tooltip. In assenza di contenuto, il tooltip non si aprirà.
   */
  @Input('it-tooltip')
  get itTooltip(): string | TemplateRef<any> { return this._itTooltip; }
  set itTooltip(value: string | TemplateRef<any>) { this._itTooltip = value; }
  private _itTooltip: string | TemplateRef<any>;

  /**
   * Il collocamento accettato dal tooltip:
   *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
   *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
   * ed array dei valori soprariportati.
   */
  @Input()
  get placement(): PlacementArray { return this._placement; }
  set placement(value: PlacementArray) { this._placement = value; }
  private _placement: PlacementArray;

  /**
   * Un selettore che specifica l'elemento in cui il tooltip dovrebbe essere aggiunto.
   * Attualmente supporta solo "body".
   */
  @Input()
  get container(): string { return this._container; }
  set container(value: string) { this._container = value; }
  private _container: string;

  /**
   * Evento da emettere quando il tooltip sta per essere mostrato
   */
  @Output('show')
  get showEvent(): EventEmitter<TooltipDirective> { return this._showEvent; }
  set showEvent(value: EventEmitter<TooltipDirective>) { this._showEvent = value; }
  private _showEvent = new EventEmitter<TooltipDirective>();

  /**
   * Evento da emettere quando il tooltip è mostrato
   */
  @Output('shown')
  get shownEvent(): EventEmitter<TooltipDirective> { return this._shownEvent; }
  set shownEvent(value: EventEmitter<TooltipDirective>) { this._shownEvent = value; }
  private _shownEvent = new EventEmitter<TooltipDirective>();

  /**
   * Evento da emettere quando il tooltip viene inserito nel DOM
   */
  @Output('inserted')
  get insertedEvent(): EventEmitter<TooltipDirective> { return this._insertedEvent; }
  set insertedEvent(value: EventEmitter<TooltipDirective>) { this._insertedEvent = value; }
  private _insertedEvent = new EventEmitter<TooltipDirective>();

  /**
   * Evento da emettere quando il tooltip sta per essere nascosto
   */
  @Output('hide')
  get hideEvent(): EventEmitter<TooltipDirective> { return this._hideEvent; }
  set hideEvent(value: EventEmitter<TooltipDirective>) { this._hideEvent = value; }
  private _hideEvent = new EventEmitter<TooltipDirective>();

  /**
   * Evento da emettere quando il tooltip è nascosto
   */
  @Output('hidden')
  get hiddenEvent(): EventEmitter<TooltipDirective> { return this._hiddenEvent; }
  set hiddenEvent(value: EventEmitter<TooltipDirective>) { this._hiddenEvent = value; }
  private _hiddenEvent = new EventEmitter<TooltipDirective>();

  /**
   * Un flag utilizzato per indicare se un tooltip è disabilitato, così da non doverlo mostrare.
   */
  @Input('disabled')
  get disableTooltip(): boolean { return this._disableTooltip; }
  set disableTooltip(value: boolean) { this._disableTooltip = value != null && `${value}` !== 'false'; }
  private _disableTooltip = false;

  private _itTooltipWindowId = `it-tooltip-${identifier++}`;
  private _popupService: PopupService<TooltipComponent>;
  private _windowRef: ComponentRef<TooltipComponent>;
  private _unregisterListenersFn;
  private _zoneSubscription: Subscription;
  private _isDisabled(): boolean {
    if (this.disableTooltip) {
      return true;
    }
    if (!this.itTooltip) {
      return true;
    }
    return false;
  }

  constructor(
      private _elementRef: ElementRef<HTMLElement>,
      private _renderer: Renderer2,
      injector: Injector,
      componentFactoryResolver: ComponentFactoryResolver,
      viewContainerRef: ViewContainerRef,
      config: TooltipConfig,
      ngZone: NgZone
  ) {
    this.placement = config.placement;
    this.container = config.container;
    this.disableTooltip = config.disableTooltip;
    this._popupService = new PopupService<TooltipComponent>(
      TooltipComponent, injector, viewContainerRef, _renderer, componentFactoryResolver);

    this._zoneSubscription = ngZone.onStable.subscribe(() => {
      if (this._windowRef) {
        this._windowRef.instance.applyPlacement(
          positionElements(
            this._elementRef.nativeElement, this._windowRef.location.nativeElement,
            this.placement, this.container === 'body'
          )
        );
      }
    });
  }

  /**
   * Apre il tooltip di un elemento. È considerato un azionamento "manuale" del tooltip.
   * Il context è un valore opzionale da iniettare nel template del tooltip quando esso viene creato.
   */
  show(context?: any) {
    if (!this._isDisabled()) {
      // Scatena l'evento per segnalare l'inizio del processo per visualizzare il tooltip
      this.showEvent.emit(this);

      if (!this._windowRef) {
        this._windowRef = this._popupService.open(this.itTooltip, context);

        const tooltipComponent = this._windowRef.instance;
        tooltipComponent.id = this._itTooltipWindowId;

        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._itTooltipWindowId);

        if (this.container === 'body') {
          window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
        }

        this._windowRef.changeDetectorRef.detectChanges();
        this._windowRef.changeDetectorRef.markForCheck();

        // Posiziona il tooltip attorno all'elemento
        tooltipComponent.applyPlacement(
          positionElements(
            this._elementRef.nativeElement, this._windowRef.location.nativeElement,
            this.placement, this.container === 'body'
          )
        );

        // Scatena l'evento per segnalare l'inserimento nel DOM
        this.insertedEvent.emit(this);
      } else {
        const tooltipComponent = this._windowRef.instance;
        tooltipComponent.hidden = false;
      }

      // Scatena l'evento per segnalare che il tooltip è stato visualizzato
      this.shownEvent.emit(this);
    }
  }

  /**
   * Chiude il tooltip di un elemento. È considerato un azionamento "manuale" del tooltip.
   */
  hide() {
    // Scatena l'evento per segnalare l'inizio del processo per nascondere il tooltip
    this.hideEvent.emit(this);
    if (this._windowRef) {
      const tooltipComponent = this._windowRef.instance;
      tooltipComponent.hidden = true;

      // Scatena l'evento per segnalare che il tooltip è stato nascosto
      this.hiddenEvent.emit(this);
    }
  }

  /**
   * Apre/chiude il un tooltip di un elemento. È considerato un azionamento "manuale" del tooltip.
   */
  toggle() {
    if (this._windowRef) {
      if (this._windowRef.instance.hidden) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.show();
    }
  }

  /**
   * Nasconde e distrugge il tooltip di un elemento.
   */
  dispose() {
    const isShown = this._windowRef ? !this._windowRef.instance.hidden : false;
    if (isShown) {
      this.hide();
    }

    if (this._windowRef) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      this._popupService.close();
      this._windowRef = null;
    }
  }

  /**
   * Fornisce al tooltip di un elemento la possibilità di essere mostrato.
   */
  enable() {
    if (this._isDisabled()) {
      this.disableTooltip = false;
    }
  }

  /**
   * Rimuove la capacità di mostrare il tooltip di un elemento.
   */
  disable() {
    if (!this._isDisabled()) {
      this.disableTooltip = true;
    }
  }

  /**
   * Attiva/disattiva la possibilità che il tooltip di un elemento sia mostrato o nascosto.
   */
  toggleEnabled() {
    if (this._isDisabled()) {
      this.enable();
    } else {
      this.disable();
    }
  }

  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(
      this._renderer, this._elementRef.nativeElement, TRIGGER,
      this.show.bind(this), this.hide.bind(this), this.toggle.bind(this)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    // Chiude il tooltip se il contenuto risulta vuoto, o se disableTooltip è impostato a vero
    if ((changes['itTooltip'] || changes['disableTooltip']) && this._isDisabled()) {
      this.hide();
    } else if (changes['placement']) {
      if (this._windowRef) {
        this._windowRef.instance.applyPlacement(
          positionElements(
            this._elementRef.nativeElement, this._windowRef.location.nativeElement,
            this.placement, this.container === 'body'
          )
        );
      }
    } else if (changes['container']) {
      const isShown = this._windowRef ? !this._windowRef.instance.hidden : false;
      this.dispose();
      if (isShown) {
        this.show();
      }
    }
  }

  ngOnDestroy() {
    this.dispose();
    this._unregisterListenersFn();
    this._zoneSubscription.unsubscribe();
  }

  @HostListener('focus')
  protected handleFocus() {
    this.show();
  }

  @HostListener('blur')
  protected handleBlur() {
    this.hide();
  }
}
