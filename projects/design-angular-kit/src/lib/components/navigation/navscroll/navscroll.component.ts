import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ItNavscrollListItemsComponent } from './navscroll-list-items.component';
import { NavscrollItem } from './navscroll.model';
import { NavscrollStore } from './navscroll.store';

@Component({
  selector: 'it-navscroll',
  standalone: true,
  imports: [ItNavscrollListItemsComponent, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref, AsyncPipe],
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

  private store = inject(NavscrollStore);

  ngOnInit(): void {
    this.store.init(this.items);
  }
}
