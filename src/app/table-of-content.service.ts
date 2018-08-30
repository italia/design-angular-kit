import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableOfContentService {

  constructor() { }

  getTableOfContent() {
    // TODO prendere da un file json di configurazione
    return [
      {
        label: 'Informazioni',
        link: '/info',
        links: [
          {
            label: 'Benvenuti',
            link: '/info/welcome',
          }
        ]
      },
      {
        label: 'Componenti',
        link: '/componenti',
        links: [
          {
            label: 'Checkbox',
            link: '/componenti/checkbox',
          },
          {
            label: 'Progress Bar',
            link: '/componenti/progress-bar',
          },
          {
            label: 'Toggle',
            link: '/componenti/toggle',
          },
          {
            label: 'Radio button',
            link: '/componenti/radio',
          },
          {
            label: 'Tooltip',
            link: '/componenti/tooltip',
          },
          {
            label: 'Button',
            link: '/componenti/button',
          },
          {
            label: 'Badge',
            link: '/componenti/badge',
          },
          {
            label: 'Breadcrumb',
            link: '/componenti/breadcrumb',
          },
          {
            label: 'Tabs',
            link: '/componenti/tabs',
          }
        ]
      }
    ];
  }
}
