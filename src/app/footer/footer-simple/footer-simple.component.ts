import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-footer-simple',
  templateUrl: './footer-simple.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FooterButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}
