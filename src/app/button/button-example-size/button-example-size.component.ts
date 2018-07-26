import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-button-example-size',
  templateUrl: './button-example-size.component.html',
  styleUrls: ['./button-example-size.component.scss']
})
export class ButtonExampleSizeComponent implements OnInit {

  primaryColor = 'primary';
  secondaryColor = 'secondary';

  lgSize = 'lg';
  smSize = 'sm';
  xsSize = 'xs';

  constructor() { }

  ngOnInit() {
  }

}
