import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itAvatarPresence]',
  exportAs: 'itAvatarPresence',
})
export class ItAvatarPresenceDirective {
  /**
   * Indica lo stato della presenza. Può assumere i valori:
   * <ul>
   * <li> active
   * <li> busy
   * <li> hidden
   * </ul>
   */
  @Input()
  get presence(): string | undefined {
    return this._presence;
  }
  set presence(value: string | undefined) {
    this._presence = value;
  }
  private _presence?: string;

  @HostBinding('class')
  get hostClasses(): string {
    const cssClass = `avatar-presence ${this._presence}`;
    return cssClass;
  }
}
