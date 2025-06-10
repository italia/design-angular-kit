import { ChangeDetectionStrategy, Component, Host, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../../utils/coercion';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() href: any[] | string | null | undefined;

  /**
   * Is an external link (false to not use Angular router link)
   * @default false
   */
  @Input({ transform: inputToBoolean }) externalLink?: boolean;
  inNav: boolean;

  constructor(@Host() parent: ItSkiplinkComponent) {
    this.inNav = parent.nav ? true : false;
  }
}
