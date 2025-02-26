import { Component } from '@angular/core';

@Component({
  selector: 'it-dimmer-with-buttons',
  templateUrl: './dimmer-with-buttons.component.html',
  standalone: false,
})
export class DimmerWithButtonsComponent {
  title = 'Titolo Dimmer';
  active = false;
}
