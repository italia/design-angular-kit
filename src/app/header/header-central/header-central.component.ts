import { Component } from '@angular/core';
import {ItMenuConfig} from "../../../../projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface";

@Component({
  selector: 'it-header-central',
  templateUrl: './header-central.component.html',
  styleUrls: []
})
export class HeaderCentralComponent {

  navigation: ItMenuConfig = {
    type: 'icon-list',
    label: 'Seguici su',
    items: [
      {
        type: 'icon',
        label: 'Facebook',
        link: '#',
        icon: 'facebook'
      },
      {
        type: 'icon',
        label: 'Github',
        link: '#',
        icon: 'github'
      },
      {
        type: 'icon',
        label: 'X',
        link: '#',
        icon: 'twitter'
      }
    ]
  }

}
