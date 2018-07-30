import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss']
})
export class ButtonExampleInteractiveComponent implements OnInit {

  block = false;
  outline = false;
  disabled = false;
  selectedColor = '';
  selectedSize = '';
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCount() {
    this.count++;
  }

}
