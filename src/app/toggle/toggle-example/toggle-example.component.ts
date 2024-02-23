import { Component } from '@angular/core';

@Component({
  selector: 'it-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss'],
})
export class ToggleExampleComponent {
  checked = true;
  label = 'Sono una toggle';
  disabled = false;

  constructor() {}
}
