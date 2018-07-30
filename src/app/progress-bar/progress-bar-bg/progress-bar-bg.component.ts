import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-bg',
  templateUrl: './progress-bar-bg.component.html',
  styleUrls: ['./progress-bar-bg.component.scss']
})
export class ProgressBarBgComponent implements OnInit {

  valueExInfo = 25;
  minExInfo = 0;
  maxExInfo = 100;
  bgColorInfo = 'info';

  valueExSuccess = 50;
  minExSuccess = 0;
  maxExSuccess = 100;
  bgColorSuccess = 'success';

  valueExWarning = 75;
  minExWarning = 0;
  maxExWarning = 100;
  bgColorWarning = 'warning';

  valueExDanger = 100;
  minExDanger = 0;
  maxExDanger = 100;
  bgColorDanger = 'danger';

  constructor() { }

  ngOnInit() {
  }

}
