import { Component } from '@angular/core';

@Component({
  selector: 'it-footer-simple',
  templateUrl: './footer-simple.component.html',
  standalone: false,
})
export class FooterButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}
