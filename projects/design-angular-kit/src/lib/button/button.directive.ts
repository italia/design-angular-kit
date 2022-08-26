import { ContentChildren, Directive, HostBinding, HostListener, Input, QueryList } from '@angular/core';
import { ThemeColor } from '../models/ThemeColor';
import { ButtonSize } from '../models/ButtonSize';
import { Util } from '../util/util';
import { IconComponent } from '../icon/icon.component';
import { IconColorEnum } from '../enums/icons.enum';


/**
 * Un bottone con design bootstrap italia. Supporta tutte le funzionalità di un bottone HTML5.
 */
@Directive({
  selector: '[itButton]',
  exportAs: 'itButton'
})
export class ItButtonDirective {

  @Input('itButton')
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    } else {
      this._color = IconColorEnum.primary;
    }
  }
  private _color;

  /**
   * Stabilisce il colore del pulsante a seconda delle classi di bootstrap.
   * Può avere valori:
   * <ul>
   * <li> primary
   * <li> secondary
   * <li> danger
   * <li> warning
   * <li> info
   * <li> success
   * <li> light
   * <li> dark
   * </ul>
   */
  get color(): any {
    return this._color;
  }

  private _onFocus = false;

  /**
   * Se presente, il pulsante avrà un effetto di trasparenza e non reagirà al click
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) { this._disabled = Util.coerceBooleanProperty(value); }
  private _disabled = false;

  @HostListener('focus')
  onFocus() {
    this._onFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this._onFocus = false;
  }

  @ContentChildren(IconComponent) iconComponents: QueryList<IconComponent>;

  /**
   * Stabilisce se lo stile del pulsante avrà un contorno.
   * Accetta una espressione booleana o può essere usato come attributo senza valore.
   * Deve funzionare solo in congiunzione con un colore definito, altrimenti l'attributo viene ignorato.
   */
  @Input()
  get outline(): boolean { return this._outline; }
  set outline(value: boolean) { this._outline = Util.coerceBooleanProperty(value); }
  private _outline = false;

  /**
   * Indica se il pulsante occupa tutta l'ampiezza a sua disposizione.
   */
  @Input()
  get block(): boolean { return this._block; }
  set block(value: boolean) { this._block = Util.coerceBooleanProperty(value); }
  private _block = false;



  

  /**
   * Indica la grandezza del pulsante. Può assumere i valori:
   * <ul>
   * <li> lg
   * <li> sm
   * <li> xs
   * </ul>
   */
  @Input()
  get size(): any {
    return this._size;
  }
  set size(value: any) {
    if (ButtonSize.is(value)) {
      this._size = value;
    } else {
      this._size = undefined;
    }
  }
  private _size;
  
  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'btn';

    if (this.color) {
      if (this.outline) {
        cssClass += ` btn-outline-${this.color}`;
      } else {
        cssClass += ` btn-${this.color}`;
      }
    }

    if (this.size) {
      cssClass += ` btn-${this.size}`;
    }

    if (this.block) {
      cssClass += ' btn-block';
    }

    if (this.disabled) {
      cssClass += ' disabled';
    }

    if(this._onFocus) {
      cssClass += ' focus--mouse';
    }

    if(this.iconComponents?.length) {
      cssClass += ' btn-icon'
    }

    return cssClass;
  }


}
