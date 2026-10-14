import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-alert-examples',
  templateUrl: './alert-examples.component.html',
  standalone: false,
})
export class AlertExamplesComponent {}
