import {
    Directive
  } from '@angular/core';
  
/**
 * La direttiva si basa ed estende le funzionalità di `NgbPopover` della libreria ng-bootstrap: https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover
 */
@Directive({selector: '[itOption]', exportAs: 'itOption'})
export class ItOption { }