import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-button-example-color',
  templateUrl: './button-example-color.component.html',
  styleUrls: ['./button-example-color.component.scss']
})
export class ButtonExampleColorComponent implements OnInit {

  primaryColor = 'primary';
  secondaryColor = 'secondary';
  isDisabled = true;
  isOutlined = true;

  constructor() { }

  ngOnInit() {
  }

}
