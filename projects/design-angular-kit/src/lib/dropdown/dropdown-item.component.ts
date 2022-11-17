import { Component, Input} from '@angular/core';
import { IconColorEnum } from '../enums/icons.enum';
import { HorizontalAlign, HORIZONTAL_ALIGN } from '../models/Alignment';
import { Util } from '../util/util';

let identifier = 0;

/**
 * Componente usata per visualizzare una voce di menù all'interno di una dropdown
 */
@Component({
  selector: 'it-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent {
  id = `dropdown-item-${identifier++}`;

  /**
   * Il link alla pagina verso cui andare al click sull'elemento del dropdown
   */
  @Input()
  get link(): string { return !this.disabled ? this._link : ''; }
  set link(value: string) { this._link = value; }
  private _link = '';

  /**
   * Se presente indica che l'elemento viene renderizzato come elemento attivo.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get active(): boolean { return this._active; }
  set active(value: boolean) { this._active = Util.coerceBooleanProperty(value); }
  private _active = false;

  /**
   * Se presente indica che l'elemento è disabilitato.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = Util.coerceBooleanProperty(value);
  }
  private _disabled = false;

  /**
   * Se presente indica che il testo dell'elemento viene renderizzato più grande.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get large(): boolean { return this._large; }
  set large(value: boolean) { this._large = Util.coerceBooleanProperty(value); }
  private _large = false;

  /**
   * La classe dell'icona da usare prima o dopo del testo dell'elemento del dropdown
   */
  @Input()
  get icon(): string { return this._icon; }
  set icon(value: string) { this._icon = value; }
  private _icon = undefined;

  /**
   * La posizione dell'icona rispetto al testo dell'elemento del dropdown.
   * Può assumere valori right o left.
   */
  @Input()
  get iconPosition(): HorizontalAlign { return this._iconPosition; }
  set iconPosition(value: any) {
    if (HORIZONTAL_ALIGN.is(value)) {
      this._iconPosition = value as HorizontalAlign;
    } else {
      this._iconPosition = HorizontalAlign.right;
    }
  }
  private _iconPosition = HorizontalAlign.right;


  @Input()
  get iconColor(): IconColorEnum { return this._iconColor; }
  set iconColor(value: IconColorEnum) { this._iconColor = value; }
  private _iconColor = IconColorEnum.primary;

  get dropdownItemClass() {
    return `list-item ${this.iconPosition}-icon`;
  }

  get iconClass() {
    return `${this.icon} ${this.iconPosition}`;
  }

}
