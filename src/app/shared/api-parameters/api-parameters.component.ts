import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-api-parameters',
  templateUrl: './api-parameters.component.html',
  styleUrls: ['./api-parameters.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ApiParametersComponent {
  @Input() component?: any;
  @Input() service?: any;
}
