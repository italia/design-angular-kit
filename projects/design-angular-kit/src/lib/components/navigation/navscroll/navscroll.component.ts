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
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs';
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
  @Input() readonly header: string;
  /**
   * A list of links
   */
  @Input() readonly items: Array<NavscrollItem>;
  /**
   * Border position
   * @default left
   */
  @Input() readonly borderPosition: 'left' | 'right' = 'left';
  /**
   * Alignment
   * @default top
   */
  @Input() readonly alignment: 'top' | 'bottom' = 'top';

  /**
   * Theme
   * @default light
   */
  @Input() readonly theme: 'light' | 'dark' = 'light';

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
    this.#toggleZIndex();
  }

  readonly #store = inject(NavscrollStore);

  readonly #scroller = inject(ViewportScroller);

  readonly #destroyRef = inject(DestroyRef);

  readonly #elementRef = inject(ElementRef);

  readonly selectedTitle = this.#store.selected.pipe(map(selected => selected?.title ?? ''));

  readonly progressBarValue = this.#store.progressBar;

  protected isMobile: boolean;

  ngOnInit(): void {
    this.#initViewScrollerSubscription();
    this.#store.init(this.items);
    this.#toggleZIndex();
  }

  #initViewScrollerSubscription() {
    this.#store.selected
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        filter(selected => Boolean(selected)),
        delay(0), //WA
        tap({
          next: ({ href }) => {
            console.log('scroll to', href);
            this.#scroller.scrollToAnchor(href);
          },
          complete: () => console.log('selected sub to scroll completed'),
        })
      )
      .subscribe();
  }

  #toggleZIndex() {
    const isLessThan992px = window.innerWidth < 992;
    this.isMobile = isLessThan992px;
    console.log(window.innerWidth, 'isMobile', this.isMobile);
  }
}
