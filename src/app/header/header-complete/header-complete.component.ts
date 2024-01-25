import {Component} from '@angular/core';
import {ItMenuConfig} from "../../../../projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface";

@Component({
  selector: 'it-header-complete',
  templateUrl: './header-complete.component.html',
  styles: [``]
})
export class HeaderCompleteComponent {

  secondaryNavigation: ItMenuConfig = {
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
        disabled: true
      }
    ]
  }

  socialNavigation: ItMenuConfig = {
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
        icon: 'twitter' // TODO: change with real icon
      }
    ]
  }

  mainNavigation: ItMenuConfig = {
    type: 'navbar',
    label: 'Navbar',
    items: [
      {
        type: "link",
        label: "Link 1 (attivo)",
        link: 'http://localhost:4200/#/componenti/header',  //TODO: change with real link
      },
      {
        type: "link",
        label: "Link 2 (Disablitiato)",
        link: '#',
        disabled: true
      },
      {
        type: "link",
        label: "Link 3",
        link: "#"
      },
      {
        type: "dropdown",
        title: "Dropdown",
        label: "Menu Dropdown",
        items: [
          {
            type: "link",
            label: "Link 1",
            link: "#"
          },
          {
            type: "link",
            label: "Link 2",
            link: "#"
          },
          {
            type: "link",
            label: "Link 3",
            link: "#"
          },
          {
            type: "divider"
          },
          {
            type: "link",
            label: "Link 4",
            link: "#"
          }
        ]
      },
      {
        type: "megamenu",
        label: "Menu Megamenu",
        items: [
          {
            type: "megamenu-child",
            title: "Title 1",
            items: [
              {
                type: "link",
                label: "Link 1",
                link: "#"
              },
              {
                type: "link",
                label: "Link 2",
                link: "#"
              },
              {
                type: "link",
                label: "Link 3",
                link: "#"
              }
            ]
          },
          {
            type: "megamenu-child",
            title: "Title 2",
            items: [
              {
                type: "link",
                label: "Link 1",
                link: "#"
              },
              {
                type: "link",
                label: "Link 2",
                link: "#"
              },
              {
                type: "link",
                label: "Link 3",
                link: "#"
              }
            ]
          }
        ]
      }
    ]
  };

}
