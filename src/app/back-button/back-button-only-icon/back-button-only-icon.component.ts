import { Component } from '@angular/core';

@Component({
  selector: 'it-back-button-only-icon',
  templateUrl: './back-button-only-icon.component.html',
})
export class BackButtonOnlyIconComponent {
  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';
}
