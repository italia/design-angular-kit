import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'it-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, RouterLink, NgTemplateOutlet]
})
export class ItLinkComponent extends ItAbstractComponent implements AfterViewInit, OnChanges {

  /**
   * The router link action
   *
   * Commands to pass to Router#createUrlTree.
   * - array: commands to pass to Router#createUrlTree.
   * - string: shorthand for array of commands with just the string, i.e. ['/route']
   * - null|undefined: Disables the link by removing the href
   */
  @Input() href: any[] | string | null | undefined;

  /**
   * Is an external link (false to not use Angular router link)
   */
  @Input() externalLink: BooleanInput | undefined;

  /**
   * Is disabled link
   */
  @Input() disabled: BooleanInput | undefined;

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

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes['class']) {
      this._changeDetectorRef.markForCheck();
    }
  }
}
