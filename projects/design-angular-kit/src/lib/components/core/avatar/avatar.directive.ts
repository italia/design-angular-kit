import { ColorsEnum } from '../../../enums/colors.enums';
import { SizesEnum } from '../../../enums/sizes.enum';
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[itAvatar]',
  exportAs: 'itAvatar'
})
export class AvatarDirective {
  /**
   * Indica il colore dell'avatar. Può assumere i valori:
   * <ul>
   * <li> primary
   * <li> secondary
   * <li> green
   * <li> orange
   * <li> red
   * </ul>
   */
  @Input()
  get color(): string | undefined {
    return this._color
  }
  set color(value: string | undefined) {
    const colorsKey = value as keyof typeof ColorsEnum;
    if (ColorsEnum[colorsKey]){
      this._color = ColorsEnum[colorsKey] 
    }else{
      this._color = undefined;
    }
  }
  private _color?: ColorsEnum;
  /**
   * Indica la grandezza dell'avatar. Può assumere i valori:
   * <ul>
   * <li> xs
   * <li> sm
   * <li> lg
   * <li> xl
   * <li> xxl
   * </ul>
   */
  @Input()
  get size(): SizesEnum | undefined {
    return this._size
  }
  set size(value: string | undefined) {
    const sizesKey = value as keyof typeof SizesEnum;
    if (SizesEnum[sizesKey]) {
      this._size = SizesEnum[sizesKey];
    } 
    else {
      this._size = undefined
    }
  }

  private _size?: SizesEnum;

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'avatar'

    if (this.size) {
      cssClass += ` ${this.size}`
    }

    if (this.color) {
      cssClass += ` avatar-${this.color}`
    }

    return cssClass
  }


}
