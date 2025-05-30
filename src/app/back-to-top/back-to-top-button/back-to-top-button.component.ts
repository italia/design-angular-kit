import { Component } from '@angular/core';

@Component({
  selector: 'it-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  standalone: false,
})
export class BackToTopButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}
