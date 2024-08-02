import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItNavscrollItemComponent } from './navscroll-list-item.component';
import { NavscrollItems } from './navscroll.model';

@Component({
  selector: 'it-navscroll',
  standalone: true,
  imports: [ItNavscrollItemComponent],
  templateUrl: './navscroll.component.html',
  styleUrl: './navscroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItNavscrollComponent {
  @Input() readonly header: string;
  @Input() readonly items: Array<NavscrollItems>;
}
