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
  OnInit,
  OnDestroy,
  OnChanges,
  Injector,
  Renderer2,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  NgZone,
  Inject,
  ApplicationRef,
  ChangeDetectorRef,
} from '@angular/core';


import { ItTooltipConfig } from './tooltip.config';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

/**
 * La direttiva si basa ed estende le funzionalità di `NgbTooltip` della libreria ng-bootstrap: https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover
 */
@Directive({
  selector: '[itTooltip]', // tslint:disable-line
  exportAs: 'itTooltip'
})
export class ItTooltip extends NgbTooltip implements OnInit, OnDestroy, OnChanges {
  /**
   * Il valore stringa o un `TemplateRef` per il contenuto da mostrare nel tooltip.
   *
   * Se il titolo ed il contenuto sono falsy, il tooltip non verrà mostrato.
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
