import { ChangeDetectorRef, ContentChild, ContentChildren, Directive, Host, HostBinding, HostListener, Input, Optional, QueryList } from '@angular/core';
import { ThemeColor } from '../models/ThemeColor';
import { ButtonSize } from '../models/ButtonSize';
import { Util } from '../util/util';
import { IconComponent } from '../icon/icon.component';
import { IconColorEnum } from '../enums/icons.enum';
import { ItDropdownToggle } from '../dropdown/dropdown.directive';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';


/**
 * Un bottone con design bootstrap italia. Supporta tutte le funzionalità di un bottone HTML5.
 */
@Directive({
  selector: '[itButton]',
  exportAs: 'itButton'
})
export class ItButtonDirective {
  private _isDropdownButton: boolean = false;
  constructor(@Optional() @Host() dropdownToggle: ItDropdownToggle, private _cdr: ChangeDetectorRef) {
    this._isDropdownButton = !!dropdownToggle;
  }

  private isLightColor(color: string): boolean {
    return  color === IconColorEnum.light || color === IconColorEnum.info || 
            color === IconColorEnum.white;
  }

  /**
   * (Opzionale) Se presente un'icona associata al bottone, aggiorna automaticamente il suo colore in base al colore del bottone.
   */
  @Input() autoUpdateIconColor = true;

  /**
   * La direttiva che abilita l'elemento come button.
   * Il valore stabilisce il colore del pulsante a seconda delle classi di bootstrap.
   *  Può assumere i valori:
   * ```
   * primary
   * secondary
   * danger
   * warning
   * info
   * success
   * light
   * dark
   * ```
   */
  @Input('itButton')
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    } else {
      this._color = this._isDropdownButton ? "dropdown" : IconColorEnum.primary;
    }
    if(this.autoUpdateIconColor) {
      this.updateButtonIconColor();
    }
  }
  private _color;

  private updateButtonIconColor() {
    this.iconComponents?.forEach(icon => {
      let newIconColor = IconColorEnum.primary;
      if(this._color === "dropdown") {
        newIconColor = IconColorEnum.primary;
      } else if(this.isLightColor(this._color)) {
        newIconColor = IconColorEnum.default;
      } else {
        newIconColor = IconColorEnum.white;
      }
      icon.changeColor(newIconColor);
    });
    
  }

  get color(): any {
    return this._color;
  }


  /**
   * Se presente, il pulsante avrà un effetto di trasparenza e non reagirà al click
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) { this._disabled = Util.coerceBooleanProperty(value); }
  private _disabled = false;

  private _onFocus = false;
  @HostListener('focus')
  onFocus() {
    this._onFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this._onFocus = false;
  }

  @ContentChildren(IconComponent) iconComponents: QueryList<IconComponent>;
  @ContentChild(ProgressBarComponent) progressBar: ProgressBarComponent;

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
   * Indica la grandezza del pulsante.
   * Può assumere i valori:
   * ```
   * lg
   * sm
   * xs
   * ```
   */
  @Input()
  get size(): 'lg' | 'sm' | 'xs' {
    return this._size;
  }
  set size(value: 'lg' | 'sm' | 'xs') {
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

    if(this.iconComponents?.length && !this.progressBar) {
      cssClass += ' btn-icon';
    }

    if(this.progressBar) {
      cssClass += ' btn-progress';
    }

    return cssClass;
  }


}
