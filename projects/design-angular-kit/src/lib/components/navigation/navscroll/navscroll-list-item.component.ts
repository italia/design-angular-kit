import { Component, Input } from '@angular/core';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NavscrollItems } from './navscroll.model';

@Component({
  selector: 'it-navscroll-list-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref],
  template: `
    <ul class="link-list">
      @for (item of items; track item.href) {
        <li class="nav-item">
          <!-- <a class="nav-link active" href="{{ item.href }}"
            ><span>{{ item.title }}</span></a
          > -->
          <a
            class="nav-link"
            routerLink="./"
            [routerLinkActiveOptions]="routerLinkActiveOptions"
            routerLinkActive="active"
            [fragment]="item.href"
            ><span>{{ item.title }}</span></a
          >
          <it-navscroll-list-item [items]="item.childs"></it-navscroll-list-item>
        </li>
      }
    </ul>
  `,
})
export class ItNavscrollItemComponent {
  @Input() readonly items: NavscrollItems;

  readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'exact',
  };
}
