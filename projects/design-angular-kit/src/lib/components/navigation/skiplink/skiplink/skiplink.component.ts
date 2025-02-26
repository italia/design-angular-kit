import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../../utils/coercion';
import { ItLinkComponent } from '../../../core/link/link.component';

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
   * Aria label for `nav` mode
   * @default 'Scorciatoie di navigazione'
   */
  @Input() ariaLabel: string = 'Scorciatoie di navigazione';

  /**
   * If `true` nav mode is enabled
   * @default false
   */
  @Input({ transform: inputToBoolean }) nav?: boolean;
}
