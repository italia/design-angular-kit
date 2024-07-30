import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'it-navscroll',
  standalone: true,
  imports: [],
  templateUrl: './navscroll.component.html',
  styleUrl: './navscroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItNavscrollComponent {}
