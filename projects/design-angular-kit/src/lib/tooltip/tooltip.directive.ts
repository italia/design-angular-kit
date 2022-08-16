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
  Inject,
  ApplicationRef,
  ChangeDetectorRef,
} from '@angular/core';


import { ItTooltipConfig } from './tooltip.config';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

/**
 * Una direttiva per la creazione di un tooltip.
 */
@Directive({
  selector: '[itTooltip]', // tslint:disable-line
  exportAs: 'itTooltip'
})
export class ItTooltip extends NgbTooltip implements OnInit, OnDestroy, OnChanges {
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the popover.
   *
   * If the title and the content are falsy, the popover won't open.
   */
   @Input() itTooltip:  string | TemplateRef<any>| null | undefined;

   constructor(
       _elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector,
       viewContainerRef: ViewContainerRef, config: ItTooltipConfig, _ngZone: NgZone,
       @Inject(DOCUMENT) _document: any, _changeDetector: ChangeDetectorRef,
       applicationRef: ApplicationRef) {
         super(_elementRef, _renderer, injector, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef);
   }
 
   ngOnInit(): void {
       super.ngOnInit();
       super.ngbTooltip = this.itTooltip;
       this.tooltipClass = 'it-tooltip-window';
   }
 
   ngOnDestroy(): void {
     super.ngOnDestroy();
   }
}
