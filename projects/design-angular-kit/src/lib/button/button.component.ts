import { Component, OnInit, Input, HostBinding, Output, HostListener } from '@angular/core';
import { ThemeColor, THEME_COLORS } from '../models/ThemeColor';
import { ButtonSize, BUTTON_SIZES } from '../models/ButtonSize';

/**
 * Un bottone con design bootstrap italia. Supporta tutte le funzionalità di un bottone HTML5.
 */
@Component({
  selector: 'it-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  /**
   * Se presente, il pulsante avrà un effetto di trasparenza e non reagirà al click
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) { this._disabled = value != null && `${value}` !== 'false'; }
  private _disabled = false;

  /**
   * Stabilisce se lo stile del pulsante avrà un contorno.
   * Accetta una espressione booleana o può essere usato come attributo senza valore.
   * Deve funzionare solo in congiunzione con un colore definito, altrimenti l'attributo viene ignorato.
   */
  @Input()
  get outline(): boolean { return this._outline; }
  set outline(value: boolean) { this._outline = value != null && `${value}` !== 'false'; }
  private _outline = false;

  /**
   * Indica se il pulsante occupa tutta l'ampiezza a sua disposizione.
   */
  @Input()
  get block(): boolean { return this._block; }
  set block(value: boolean) { this._block = value != null && `${value}` !== 'false'; }
  private _block = false;

  /**
   * Stabilisce il colore del pulsante a seconda delle classi di bootstrap.
   * Può avere valori:
   * <ul style="list-style: none;">
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
  @Input()
  get color(): any {
    return this._color;
  }
  set color(value: any) {
    if (ThemeColor.is(value)) {
      this._color = value;
    }
  }
  private _color;

  /**
   * Indica la grandezza del pulsante. Può assumere i valori:
   * <ul style="list-style: none;">
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
    }
  }
  private _size;

  protected get buttonClass() {
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

    return cssClass;
  }

  constructor() { }

  ngOnInit() {
  }

}
