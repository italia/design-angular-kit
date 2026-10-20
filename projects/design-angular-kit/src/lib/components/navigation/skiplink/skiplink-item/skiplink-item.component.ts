import { ChangeDetectionStrategy, Component, Input, inject, booleanAttribute } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItLinkComponent } from '../../../core/link/link.component';
import { ItSkiplinkComponent } from '../skiplink/skiplink.component';

@Component({
  selector: 'it-skiplink-item',
  templateUrl: './skiplink-item.component.html',
  exportAs: 'itSkipLinkItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, TranslateModule, ItLinkComponent],
})
export class ItSkiplinkItemComponent {
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
   * @default false
   */
  @Input({ transform: booleanAttribute }) externalLink?: boolean;
  inNav: boolean;

  constructor() {
    const parent = inject(ItSkiplinkComponent, { host: true });

    this.inNav = parent.nav ? true : false;
  }
}
