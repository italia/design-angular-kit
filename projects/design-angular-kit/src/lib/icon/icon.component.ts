import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconBackgroundColorEnum, IconColorEnum, IconSizeEnum} from '../enums/icons.enum';
import { HorizontalAlign, VerticalAlign, VERTICAL_ALIGN } from '../models/Alignment';

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

  /**
   * Allineamento orizzontale dell'icona rispetto al contenitor: 'left' | 'right'
   */
  @Input() position: HorizontalAlign = HorizontalAlign.right;

  private _verticalAlign: VerticalAlign =  VerticalAlign.middle;

  /**
   * Allineamento verticale dell'icona rispetto al contenitore: 'top' | 'middle' | 'bottom'
   */
  get verticalAlign() {
    return this._verticalAlign;
  }

  @Input() set verticalAlign(value: any) {
    if (VERTICAL_ALIGN.is(value)) {
      this._verticalAlign = value as VerticalAlign;
    } else {
      this._verticalAlign = VerticalAlign.middle;
    }
  }

  svgPath: string = null;

}
