import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HeaderExampleComponent {
  light = false;
  sticky = false;
  search = false;
  login = 'none';
}
