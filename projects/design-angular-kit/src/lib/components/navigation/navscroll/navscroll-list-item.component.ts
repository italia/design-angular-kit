import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavscrollItems } from './navscroll.model';

@Component({
  selector: 'it-navscroll-list-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <ul class="link-list">
      @for (item of items; track item.href) {
        <li class="nav-item">
          <a class="nav-link active" href="{{ item.href }}"
            ><span>{{ item.title }}</span></a
          >
          <!-- <a
            class="nav-link"
            routerLink="./"
            fragment="{{ item.href }}"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            ><span>{{ item.title }}</span></a
          > -->
          <it-navscroll-list-item [items]="item.childs"></it-navscroll-list-item>
        </li>
      }
    </ul>
  `,
})
export class ItNavscrollItemComponent {
  @Input() readonly items: NavscrollItems;
}
