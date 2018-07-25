import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-height',
  templateUrl: './progress-bar-height.component.html',
  styleUrls: ['./progress-bar-height.component.scss']
})
export class ProgressBarHeightComponent implements OnInit {

  protected valueEx = 50;
  protected minEx = 0;
  protected maxEx = 100;
  protected heightEx = 40;

  constructor() { }

  ngOnInit() {
  }

}
