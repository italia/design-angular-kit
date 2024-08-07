import { AsyncPipe, JsonPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import {
  Event,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
  Scroll,
} from '@angular/router';
import { filter, tap } from 'rxjs';
import { ItNavscrollListItemsComponent } from './navscroll-list-items.component';
import { NavscrollItem } from './navscroll.model';
import { NavscrollStore } from './navscroll.store';

@Component({
  selector: 'it-navscroll-list-item',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref, JsonPipe, ItNavscrollListItemsComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="nav-link"
      routerLink="./"
      [fragment]="item.href"
      routerLinkActive
      [routerLinkActiveOptions]="routerLinkActiveOptions"
      routerLinkWithHref
      #rtl="routerLinkActive"
      [class.active]="isActive$() | async"
      ariaCurrentWhenActive="page"
      ><span>{{ item.title }} {{ rtl.isActive }}</span></a
    >
  `,
})
export class ItNavscrollListItemComponent implements OnInit {
  @Input() readonly item: NavscrollItem;

  @Output() readonly checkActive = new EventEmitter<NavscrollItem>();

  @ViewChild('rtl')
  readonly rtl: any;

  readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'exact',
  };

  private router = inject(Router);
  private store = inject(NavscrollStore);

  ngOnInit() {
    this.router.events
      .pipe(
        // takeUntilDestroyed(),
        filter((event: Event) => {
          const isNavigationEndEvent = event instanceof NavigationEnd;
          const isScrollEvent = event instanceof Scroll && (event as Scroll).routerEvent instanceof NavigationEnd;
          return isNavigationEndEvent || isScrollEvent;
        }),
        tap(() => {
          if (this.rtl) {
            setTimeout(() => {
              if (this.rtl.isActive) {
                this.store.setActive(this.item);
              }
            });
          }
        })
      )
      .subscribe();
  }

  isActive$() {
    return this.store.isActive$(this.item);
  }
}
