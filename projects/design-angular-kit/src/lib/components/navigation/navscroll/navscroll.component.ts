import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { map } from 'rxjs';
import { ItNavscrollListItemsComponent } from './navscroll-list-items.component';
import { NavscrollItem } from './navscroll.model';
import { NavscrollStore } from './navscroll.store';

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
  @Input() readonly header: string;
  @Input() readonly items: Array<NavscrollItem>;
  @Input() readonly borderPosition: 'left' | 'right' = 'left';
  @Input() readonly alignment: 'top' | 'bottom' = 'top';

  #store = inject(NavscrollStore);

  readonly selectedTitle = this.#store.selected.pipe(map(selected => selected?.title ?? ''));

  ngOnInit(): void {
    this.#store.init(this.items);
  }
}
