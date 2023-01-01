import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements AfterViewInit {

  /**
   * The router link action
   *
   * Commands to pass to Router#createUrlTree.
   * - array: commands to pass to Router#createUrlTree.
   * - string: shorthand for array of commands with just the string, i.e. ['/route']
   * - null|undefined: Disables the link by removing the href
   */
  @Input() href?: any[] | string | null;

  /**
   * Is an external link (false to not use Angular router link)
   */
  @Input() externalLink?: BooleanInput;

  /**
   * Is disabled link
   */
  @Input() disabled?: BooleanInput;

  /**
   * Custom class
   */
  @Input() class: string = '';

  get isExternalLink(): boolean {
    return isTrueBooleanInput(this.externalLink);
  }

  get isDisabled(): boolean {
    return isTrueBooleanInput(this.disabled);
  }

  constructor(
    protected readonly _renderer: Renderer2,
    protected readonly _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
