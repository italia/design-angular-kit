import { Component } from '@angular/core';
import { TimelineElement } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-timeline-default-example',
  templateUrl: './timeline-default-example.component.html',
  standalone: false,
})
export class TimelineDefaultExampleComponent {
  timelineElements: TimelineElement[] = [
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'MAGGIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 4, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'GIUGNO 2024',
        type: 'evidence',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'LUGLIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 6, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'AGOSTO 2024',
        type: 'now',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'SETTEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 8, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'OTTOBRE 2024',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'NOVEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 10, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'DICEMBRE 2024',
      },
    },
  ];
  defaultDateFormat: string = 'dd/MM/yyyy';
}
