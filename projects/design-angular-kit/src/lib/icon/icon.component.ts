import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {IconBackgroundColorEnum, IconColorEnum, IconSizeEnum} from '../enums/icons.enum';
import { HorizontalAlign, VerticalAlign, VERTICAL_ALIGN } from '../models/Alignment';

@Component({
  selector: 'it-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent  {

  private static readonly ICON_BASE_URL = 'bootstrap-italia/dist/svg/sprites.svg#';

  constructor(private _cdr: ChangeDetectorRef) { }

  changeColor(color: IconColorEnum) {
    if(this.color !== color) {
      this.color = color;
      this._cdr.markForCheck();
    }
  }

  /** 
   * Indica se l'icona debba essere cerchiata
   * @default false
   */
  @Input() rounded: boolean = false;

  /**
   * (Opzionale) Se l'icona è `rounded`, indica il colore di sfondo
   */
  @Input() roundedColor: IconColorEnum = null;

  get roundedColorClass(): string {
    return this.roundedColor ? ' rounded-' + this.roundedColor : '';
  }

  /** Codice dell'icona. 
   * Per un elenco delle icone disponibili guardare qui: https://italia.github.io/bootstrap-italia/docs/utilities/icone/ */
  @Input() set icon(newIcon: string) {
    if(newIcon) {
      this.svgPath = IconComponent.ICON_BASE_URL + newIcon;
      this.iconName = newIcon;
    } else {
      this.svgPath = null;
    }
  }

  protected iconName: string = '';

  /**
   * (Opzionale) Dimensioni dell'icona.
   */
  @Input() size: IconSizeEnum = IconSizeEnum.default;

  /**
   * Colore dell'icona
   * @default primary
   */
  @Input() color: IconColorEnum = IconColorEnum.primary;

  /**
   * (Opzionale) Colore di sfondo dell'icona
   */
  @Input() bgColor: IconBackgroundColorEnum = null;

  /**
   * Indica se applicare un padding proporzionale alla dimensione dell’icona attorno ad essa.
   * @default false
   */
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
