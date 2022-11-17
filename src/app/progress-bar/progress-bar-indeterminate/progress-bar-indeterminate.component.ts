import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-indeterminate',
  templateUrl: './progress-bar-indeterminate.component.html',
  styleUrls: ['./progress-bar-indeterminate.component.scss']
})
export class ProgressBarIndeterminateComponent implements OnInit {

  valueEx = 50;
  minEx = 0;
  maxEx = 100;
  heightEx = 40;

  constructor() { }

  ngOnInit() {
  }

}
