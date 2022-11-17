import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
import { ThemeColor, THEME_COLORS } from '../models/ThemeColor';
import { Util } from '../util/util';

/**
 * Una badge con design bootstrap italia.
 */
@Directive({
  selector: '[itBadge]', // tslint:disable-line
  exportAs: 'itBadge'
})
export class BadgeDirective {

  /**
   * (Opzionale) indica il colore del badge. Può essere `primary`, `secondary`, `danger`, `warning`, `info`, `success`, `light` o `dark`.
   * Se non viene fornito o il valore è diverso da quelli previsti il suo valore di default è `light`.
   */
  @Input()
  get badgeColor(): any {
    return this._badgeColor;
  }
  set badgeColor(value: any) {
    if (ThemeColor.is(value)) {
      this._badgeColor = value;
    } else {
      this._badgeColor = THEME_COLORS.LIGHT;
    }
  }
  private _badgeColor = THEME_COLORS.LIGHT;

  /**
   * La direttiva che abilita l'elemento come badge. Mostra il testo come contenuto del badge.
   * Se valutato ad `undefined`, `null` o stringa vuota il badge non viene mostrato.
   */
  @Input('itBadge')
  @HostBinding('innerText')
  get badgeText(): string { return this._badgeText; }
  set badgeText(value: string) {
    if (value) {
      this._badgeText = value;
    } else {
      this._badgeText = '';
    }
  }
  private _badgeText = '';

  private _isPill = false;
  /**
   * Indica se il badge è arrotondato o meno.
   */
  @Input()
  get isPill(): boolean { return this._isPill; }
  set isPill(value: boolean) {
    this._isPill = Util.coerceBooleanProperty(value);
  }

  private getBadgeColorClassName(): string {
    return `bg-${this._badgeColor}`;
  }

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'badge',
      this.getBadgeColorClassName(),
      this.isPill ? 'rounded-pill' : '',
    ].join(' ');
  }

  constructor(private el: ElementRef) { }

}
