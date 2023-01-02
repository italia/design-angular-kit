import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { IconColor, IconSize } from '../../../interfaces/icon';
import { ButtonColor } from '../../../interfaces/core';

@Component({
  selector: 'it-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

  /**
   * Indica se va mostrato un link invece che un bottone.
  */
  @Input()
  get isLink(): boolean { return this._isLink; }
  set isLink(value: boolean) {
    this._isLink = value;
    if (value) {
      this.iconColor = 'primary';
    } else {
      this.iconColor = 'white';
    }
  }
  private _isLink = false;
  iconColor: IconColor = 'white';

  /**
   * Indica se l'icona va mostrata o meno.
  */
  @Input()
  get showIcon(): boolean { return this._showIcon; }
  set showIcon(value: boolean) { this._showIcon = value; }
  private _showIcon = true;

  /**
   * Indica se il testo va mostrato o meno.
  */
  @Input()
  get showText(): boolean { return this._showText; }
  set showText(value: boolean) { this._showText = value; }
  private _showText = true;

  /**
   * Indica se il tipo di BackButton è livello superiore o torna indietro.
  */
  @Input()
  get type(): 'tornaIndietro' | 'livelloSuperiore' { return this._type; }
  set type(value: 'tornaIndietro' | 'livelloSuperiore') {
    this._type = value;
    if (value === 'tornaIndietro') {
      this.icon = 'arrow-left';
      this.text = ' Torna indietro';
    } else if (value === 'livelloSuperiore') {
      this.icon = 'arrow-up';
      this.text = ' Livello superiore';
    }
  }
  private _type: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  icon = 'it-arrow-left';
  text = 'Torna indietro';

  iconSize: IconSize = 'sm';
  buttonColor: ButtonColor = 'primary';

  get iconClass(): string {
    return this.showText ? 'me-2' : '';
  }


  constructor(
    public location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }
}
