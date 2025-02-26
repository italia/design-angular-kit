import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() href: any[] | string | null | undefined;

  /**
   * Is an external link (false to not use Angular router link)
   * @default false
   */
  @Input({ transform: inputToBoolean }) externalLink?: boolean;

  /**
   * Is disabled link
   * @default false
   */
  @Input({ transform: inputToBoolean }) disabled?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

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
