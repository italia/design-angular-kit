import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';
import { ItLinkComponent } from 'projects/design-angular-kit/src/public_api';

@Component({
  standalone: true,
  selector: 'it-skiplink',
  templateUrl: './skiplink.component.html',
  exportAs: 'itSkipLink',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, TranslateModule, ItLinkComponent],
})
export class ItSkiplinkComponent {
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
}
