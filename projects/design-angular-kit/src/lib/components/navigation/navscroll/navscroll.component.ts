import { AsyncPipe, NgClass, NgTemplateOutlet, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { delay, filter, map, tap, withLatestFrom } from 'rxjs';
import { ItNavscrollListItemsComponent } from './navscroll-list-items.component';
import { NavscrollItem } from './navscroll.model';
import { NavscrollStore } from './navscroll.store';

/**
 * Navscroll
 * @description Show a list of links to anchor of the document.
 */
@Component({
  selector: 'it-navscroll',
  standalone: true,
  imports: [
    ItNavscrollListItemsComponent,
    AsyncPipe,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    RouterLinkWithHref,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './navscroll.component.html',
  styleUrl: './navscroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NavscrollStore],
})
export class ItNavscrollComponent implements OnInit {
  /**
   * Header of the Navscroll
   */
  @Input() header = '';
  /**
   * A list of links
   */
  @Input() items!: Array<NavscrollItem>;
  /**
   * Border position
   * @default left
   */
  @Input() borderPosition: 'left' | 'right' = 'left';
  /**
   * Alignment
   * @default top
   */
  @Input() alignment: 'top' | 'bottom' = 'top';

  /**
   * Theme
   * @default light
   */
  @Input() theme: 'light' | 'dark' = 'light';

  /**
   * Custom template for the content section
   */
  @Input()
  pageSectionsTemplate?: TemplateRef<any>;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const sectionContainer = this.#elementRef.nativeElement.querySelector('.it-page-sections-container');
    this.#store.updateProgressBar(sectionContainer);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.#setMobile();
  }

  @ViewChild('toggleButtonRef')
  readonly toggleButtonRef!: ElementRef<HTMLButtonElement>;

  readonly #store = inject(NavscrollStore);

  readonly #scroller = inject(ViewportScroller);

  readonly #destroyRef = inject(DestroyRef);

  readonly #elementRef = inject(ElementRef);

  readonly selectedTitle = this.#store.selected.pipe(map(selected => selected?.title ?? ''));

  readonly progressBarValue = this.#store.progressBar;

  readonly isMobile = this.#store.isMobile;

  constructor() {
    this.#store.menuItemSelected
      .pipe(
        takeUntilDestroyed(),
        withLatestFrom(this.isMobile),
        tap(v => {
          const isMobile = v[1];
          if (isMobile) {
            this.toggleButtonRef.nativeElement.click();
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.#initViewScrollerSubscription();
    this.#store.init(this.items);
    this.#setMobile();
  }

  #initViewScrollerSubscription() {
    this.#store.selected
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        filter(selected => Boolean(selected)),
        map(v => v as NavscrollItem),
        delay(0), //WA
        tap({
          next: ({ href }) => {
            this.#scroller.scrollToAnchor(href);
          },
        })
      )
      .subscribe();
  }

  #setMobile() {
    this.#store.setMobile(window);
  }
}
