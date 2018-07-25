import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-label',
  templateUrl: './progress-bar-label.component.html',
  styleUrls: ['./progress-bar-label.component.scss']
})
export class ProgressBarLabelComponent implements OnInit {

  protected valueEx = 25;
  protected minEx = 0;
  protected maxEx = 100;
  protected labelEx = '25%';

  constructor() { }

  ngOnInit() {
  }

}
