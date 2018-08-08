import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-height',
  templateUrl: './progress-bar-height.component.html',
  styleUrls: ['./progress-bar-height.component.scss']
})
export class ProgressBarHeightComponent implements OnInit {

  valueEx = 50;
  minEx = 0;
  maxEx = 100;
  heightEx = 40;

  constructor() { }

  ngOnInit() {
  }

}
