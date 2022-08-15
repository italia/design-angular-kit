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
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
  
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
@Directive({selector: '[itPopover]', exportAs: 'itPopover'})
export class ItPopover extends NgbPopover implements OnInit, OnDestroy, OnChanges {
 
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the popover.
   *
   * If the title and the content are falsy, the popover won't open.
   */
  @Input() itPopover:  string | TemplateRef<any>| null | undefined;

  constructor(
      _elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector,
      viewContainerRef: ViewContainerRef, config: NgbPopoverConfig, _ngZone: NgZone,
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