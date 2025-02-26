import { Component, Input } from '@angular/core';

@Component({
  selector: 'it-api-parameters',
  templateUrl: './api-parameters.component.html',
  styleUrls: ['./api-parameters.component.scss'],
  standalone: false,
})
export class ApiParametersComponent {
  @Input() component?: any;
  @Input() service?: any;
}
