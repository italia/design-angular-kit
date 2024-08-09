import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { map } from 'rxjs';
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
  imports: [ItNavscrollListItemsComponent, AsyncPipe, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref, AsyncPipe],
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

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log('onScroll', event);
  }

  #store = inject(NavscrollStore);

  #elementRef = inject(ElementRef);

  readonly selectedTitle = this.#store.selected.pipe(map(selected => selected?.title ?? ''));

  ngOnInit(): void {
    console.log(this.#elementRef);
    this.#store.init(this.items);
  }
}
