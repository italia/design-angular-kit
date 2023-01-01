import {AfterViewInit, Component, ElementRef, Input, Renderer2} from "@angular/core";

@Component({template: ''})
export class AbstractComponent implements AfterViewInit {

  /**
   * The element ID
   */
  @Input() id?: string;

  constructor(
    protected readonly _renderer: Renderer2,
    protected readonly _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'id');
  }

}
