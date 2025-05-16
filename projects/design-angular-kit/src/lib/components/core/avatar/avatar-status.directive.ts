import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itAvatarStatus]',
  exportAs: 'itAvatarStatus',
})
export class ItAvatarStatusDirective {
  /**
   * Indica lo stato della presenza. Può assumere i valori:
   * <ul>
   * <li> approved
   * <li> declined
   * <li> notify
   * </ul>
   */
  @Input()
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  private _status?: string;

  @HostBinding('class')
  get hostClasses(): string {
    const cssClass = `avatar-status ${this._status}`;
    return cssClass;
  }
}
