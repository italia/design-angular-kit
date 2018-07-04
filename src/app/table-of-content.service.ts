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
          },
          {
            label: 'Getting started',
            link: '/info/getting-started'
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
          }
        ]
      }
    ];
  }
}
