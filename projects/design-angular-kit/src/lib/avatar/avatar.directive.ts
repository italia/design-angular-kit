import { SizesEnum } from './../enums/sizes.enum';
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[itAvatar]',
  exportAs: 'itAvatar'
})
export class ItAvatarDirective {
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
  get size():string{
    return this._size
  }
  set size(value:string){
    if(SizesEnum[value]){
      this._size = SizesEnum[value]
    }else{
      this._size = undefined
    }
  }

  private _size

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'avatar'
    
    if (this.size){
      cssClass += ` ${this.size}`
    }
    return cssClass
  }

  
}