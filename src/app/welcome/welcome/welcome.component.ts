import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class WelcomeComponent {
  constructor() {}
}
