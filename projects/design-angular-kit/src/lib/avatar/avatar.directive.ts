import { ColorsEnum } from './../enums/colors.enums';
import { SizesEnum } from './../enums/sizes.enum';
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[itAvatar]',
  exportAs: 'itAvatar'
})
export class ItAvatarDirective {
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
  get color(): string {
    return this._color
  }
  set color(value: string) {
    if (ColorsEnum[value]){
      this._color = ColorsEnum[value]
    }else{
      this._color = false
    }
  }
  private _color
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
  get size(): string {
    return this._size
  }
  set size(value: string) {
    if (SizesEnum[value]) {
      this._size = SizesEnum[value]
    } else {
      this._size = undefined
    }
  }

  private _size

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