import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AbstractComponent } from '../../../abstracts/abstract.component';

@Component({
  selector: 'it-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent extends AbstractComponent implements AfterViewInit {

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

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
