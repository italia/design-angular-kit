import {
    Directive,
    Input,
    OnInit,
    OnDestroy,
    OnChanges,
    Inject,
    Injector,
    Renderer2,
    ElementRef,
    TemplateRef,
    ViewContainerRef,
    NgZone,
    ChangeDetectorRef,
    ApplicationRef
  } from '@angular/core';
  import {DOCUMENT} from '@angular/common';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { ItPopoverConfig } from './popover.config';
  
/**
 * La direttiva si basa ed estende le funzionalità di `NgbPopover` della libreria ng-bootstrap: https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover
 */
@Directive({selector: '[itPopover]', exportAs: 'itPopover'})
export class ItPopover extends NgbPopover implements OnInit, OnDestroy, OnChanges {
 
   /**
   * Il valore stringa o un `TemplateRef` per il contenuto da mostrare nel popover.
   *
   * Se il titolo ed il contenuto sono falsy, il popover non verrà mostrato.
   */
  @Input() itPopover:  string | TemplateRef<any>| null | undefined;

  constructor(
      _elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector,
      viewContainerRef: ViewContainerRef, config: ItPopoverConfig, _ngZone: NgZone,
      @Inject(DOCUMENT) _document: any, _changeDetector: ChangeDetectorRef,
      applicationRef: ApplicationRef) {
        super(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef);
  }

  ngOnInit(): void {
      super.ngOnInit();
      super.ngbPopover = this.itPopover;
      this.popoverClass = 'it-popover-window';
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}