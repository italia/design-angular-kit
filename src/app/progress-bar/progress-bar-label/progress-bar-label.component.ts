import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-label',
  templateUrl: './progress-bar-label.component.html',
  styleUrls: ['./progress-bar-label.component.scss']
})
export class ProgressBarLabelComponent implements OnInit {

  valueEx = 25;
  minEx = 0;
  maxEx = 100;
  labelEx = '25%';

  constructor() { }

  ngOnInit() {
  }

}
