import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ItNavscrollListItemComponent } from './navscroll-list-item.component';
import { NavscrollItems } from './navscroll.model';

@Component({
  selector: 'it-navscroll-list-items',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref, JsonPipe, ItNavscrollListItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="link-list">
      @for (item of items; track item.href) {
        <li class="nav-item">
          <it-navscroll-list-item [item]="item"></it-navscroll-list-item>
          @if (item.childs?.length) {
            <it-navscroll-list-items [items]="item.childs"></it-navscroll-list-items>
          }
        </li>
      }
    </ul>
  `,
})
export class ItNavscrollListItemsComponent {
  @Input() items!: NavscrollItems;
}
