/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
import { Placement } from './positioning';

@Component({
  selector: 'it-popover-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  @Input() placement: Placement = 'right';
  @Input() title: string;

  @Input() @HostBinding('id') id: string;
  @Input() @HostBinding('hidden') hidden = false;

  @HostBinding('attr.role') role = 'tooltip';
  @HostBinding('class') get myCssClass(): string {
    return 'popover bs-popover-' + this.placement.split('-')[0] + ' bs-popover-' + this.placement;
  }

  constructor(private _element: ElementRef<HTMLElement>, private _renderer: Renderer2) {}

  applyPlacement(_placement: Placement) {
    // Rimuovi le classi della posizione precedente
    this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
    this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());

    // Imposta la nuova posizione
    this.placement = _placement;

    // Applica le classi della nuova posizione
    this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
    this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
  }
}
