import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-custom-template-example',
  templateUrl: './navscroll-custom-template-example.component.html',
})
export class NavscrollCustomTemplateExampleComponent {
  readonly header = 'Custom template example';
  readonly items = [
    {
      title: 'Prima Sezione',
      text: 'Testo prima sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          href: '#',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1',
              href: '#',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1',
                  href: '#',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2',
              href: '#',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          href: '#',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          href: '#',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}
