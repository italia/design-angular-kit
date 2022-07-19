import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconBackgroundColorEnum, IconColorEnum, IconSizeEnum} from '../enums/icons.enum';
import { IconPosition, ICON_POSITIONS } from '../models/IconPosition';

@Component({
  selector: 'it-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  private static readonly ICON_BASE_URL = 'bootstrap-italia/dist/svg/sprite.svg#';

  constructor() { }

  @Input() set icon(newIcon: string) {
    this.svgPath = newIcon ? IconComponent.ICON_BASE_URL + newIcon : null;
  }

  @Input() wai = 'wai';

  @Input() size: IconSizeEnum = IconSizeEnum.sm;
  @Input() color: IconColorEnum = IconColorEnum.primary;
  @Input() bgColor: IconBackgroundColorEnum = null;

  @Input() padded = false;
  @Input() expand = false;

  @Input() position = ICON_POSITIONS.RIGHT;

  svgPath: string = null;

}
