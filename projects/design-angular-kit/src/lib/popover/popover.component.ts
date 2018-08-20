/**
 * @license
 * Copyright Angular ng-bootstrap team All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/LICENSE
 */
import {
  Component, ChangeDetectionStrategy,
  ElementRef, Renderer2, Input, HostBinding,
  ChangeDetectorRef, TemplateRef, ViewContainerRef
} from '@angular/core';
import { Placement } from './positioning';
import { ContentRef } from './popup';

@Component({
  selector: 'it-popover-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  @Input() placement: Placement = 'right';

  @Input()
  get title() { return this._title; }
  set title(value: string) {
    this._title = value;
    this._changeDetectorRef.detectChanges();
  }
  private _title: string;

  @Input() @HostBinding('id') id: string;
  @Input() @HostBinding('hidden') hidden = false;

  @HostBinding('attr.role') role = 'tooltip';
  @HostBinding('class') get myCssClass(): string {
    return 'popover bs-popover-' + this.placement.split('-')[0] + ' bs-popover-' + this.placement;
  }

  constructor(
    private _element: ElementRef<HTMLElement>, private _renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef, private _viewContainerRef: ViewContainerRef
  ) {}

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

  setNewContent(content: string | TemplateRef<any>, context?: any) {
    const contentElement = this._element.nativeElement.querySelector('.popover-body');

    let newContent: ContentRef;
    if (!content) {
      newContent = new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      const viewRef = this._viewContainerRef.createEmbeddedView(<TemplateRef<PopoverComponent>>content, context);
      newContent = new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      newContent = new ContentRef([[this._renderer.createText(`${content}`)]]);
    }

    const childNodes = contentElement.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      this._renderer.removeChild(contentElement, childNodes[i]);
    }

    newContent.nodes.forEach(newNode => {
      newNode.forEach(newChild => this._renderer.appendChild(contentElement, newChild));
    });
  }
}
