import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-alert-color-example',
  templateUrl: './alert-color-example.component.html',
  standalone: false,
})
export class AlertColorExampleComponent {}
