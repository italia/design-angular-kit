import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  Event as RouterEvent,
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
  Scroll,
} from '@angular/router';
import { AsyncSubject, filter, switchMap, tap } from 'rxjs';
import { ItNavscrollListItemsComponent } from './navscroll-list-items.component';
import { NavscrollItem } from './navscroll.model';
import { NavscrollStore } from './navscroll.store';

const ROUTER_LINK_ACTIVE_OPTIONS: IsActiveMatchOptions = {
  fragment: 'exact',
  paths: 'exact',
  queryParams: 'exact',
  matrixParams: 'exact',
};

@Component({
  selector: 'it-navscroll-list-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref, ItNavscrollListItemsComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="nav-link"
      [class.active]="active | async"
      [routerLink]="[]"
      routerLinkActive
      [fragment]="item?.href"
      [routerLinkActiveOptions]="routerLinkActiveOptions"
      ariaCurrentWhenActive="page"
      #rtl="routerLinkActive"
      (click)="clickHandler($event)"
      ><span>{{ item?.title }}</span></a
    >
  `,
})
export class ItNavscrollListItemComponent implements OnInit {
  @Input() item!: NavscrollItem;

  @Output() readonly checkActive = new EventEmitter<NavscrollItem>();

  @ViewChild('rtl')
  readonly rtl: any;

  readonly routerLinkActiveOptions = ROUTER_LINK_ACTIVE_OPTIONS;

  readonly #initIsActive = new AsyncSubject<NavscrollItem>();

  readonly active = this.#initIsActive.asObservable().pipe(switchMap(item => this.#store.isActive$(item)));

  readonly #router = inject(Router);

  readonly #store = inject(NavscrollStore);

  readonly #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.#initIsActiveSub();
    this.#router.events
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        filter((event: RouterEvent) => {
          const isNavigationEndEvent = event instanceof NavigationEnd;
          const isScrollEvent = event instanceof Scroll && (event as Scroll).routerEvent instanceof NavigationEnd;
          return isNavigationEndEvent || isScrollEvent;
        }),
        tap(() => {
          if (this.rtl?.isActive) {
            this.#store.setActive(this.item);
          }
        })
      )
      .subscribe();
  }

  clickHandler(event: Event) {
    event.preventDefault();
    this.#store.selectMenuItem();
    this.#router.navigate([], { fragment: this.item.href });
  }

  #initIsActiveSub() {
    this.#initIsActive.next(this.item);
    this.#initIsActive.complete();
  }
}
