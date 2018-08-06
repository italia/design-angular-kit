import { Component } from '@angular/core';

@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss']
})
export class ButtonExampleInteractiveComponent {

  block = false;
  outline = false;
  disabled = false;
  selectedColor = '';
  selectedSize = '';
  count = 0;

  increaseCount() {
    this.count++;
  }

}
