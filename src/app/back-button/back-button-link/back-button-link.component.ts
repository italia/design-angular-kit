import { Component } from '@angular/core';

@Component({
  selector: 'it-back-button-link',
  templateUrl: './back-button-link.component.html'
})
export class BackButtonLinkComponent {

  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';

}
