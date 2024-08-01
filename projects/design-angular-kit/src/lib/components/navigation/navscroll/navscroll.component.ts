import { ChangeDetectionStrategy, Component } from '@angular/core';

interface NavscrollItem {
  title: string;
  text: string;
  childs: NavscrollItems;
}

type NavscrollItems = Array<NavscrollItem>;

@Component({
  selector: 'it-navscroll',
  standalone: true,
  imports: [],
  templateUrl: './navscroll.component.html',
  styleUrl: './navscroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItNavscrollComponent {
  readonly header = 'Header';
  readonly items = [
    {
      title: 'Prima Sezione',
      text: 'Testo prima sezione',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          childs: [],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}
