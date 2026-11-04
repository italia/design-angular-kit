import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackToTopButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}
