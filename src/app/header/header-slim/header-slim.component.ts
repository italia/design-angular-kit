import {Component} from '@angular/core';
import {ItMenuConfig} from "../../../../projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface";

@Component({
  selector: 'it-header-slim',
  templateUrl: './header-slim.component.html',
})
export class HeaderSlimComponent {

  light = true;

  navigation: ItMenuConfig = {
    type: 'link-list',
    label: 'Main navigation',
    items: [
      {
        type: 'link',
        label: 'Link 1',
        link: 'https://www.link2.it',
      },
      {
        type: 'link',
        label: 'Link 2 (Attivo)',
        link: 'http://localhost:4200/#/componenti/header', // TODO: change with real link
      },
      {
        type: 'link',
        label: 'Link 3 (Disabilitato)',
        link: 'https://www.link3.it',
        disabled: true,
      }
    ]
  }
}
