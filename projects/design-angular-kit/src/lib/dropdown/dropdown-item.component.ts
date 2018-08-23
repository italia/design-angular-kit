import { Component, Input} from '@angular/core';
import { Util } from '../util/util';
import { IconPosition, ICON_POSITIONS } from '../models/IconPosition';

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
  get iconPosition(): any { return this._iconPosition; }
  set iconPosition(value: any) {
    if (IconPosition.is(value)) {
      this._iconPosition = value;
    } else {
      this._iconPosition = ICON_POSITIONS.RIGHT;
    }
  }
  private _iconPosition = ICON_POSITIONS.RIGHT;

  get dropdownItemClass() {
    return `list-item ${this.iconPosition}-icon`;
  }

  get iconClass() {
    return `${this.icon} ${this.iconPosition}`;
  }

}
