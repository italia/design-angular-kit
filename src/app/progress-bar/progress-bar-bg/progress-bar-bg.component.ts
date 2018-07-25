import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-progress-bar-bg',
  templateUrl: './progress-bar-bg.component.html',
  styleUrls: ['./progress-bar-bg.component.scss']
})
export class ProgressBarBgComponent implements OnInit {

  protected valueExInfo = 25;
  protected minExInfo = 0;
  protected maxExInfo = 100;
  protected bgColorInfo = 'info';

  protected valueExSuccess = 50;
  protected minExSuccess = 0;
  protected maxExSuccess = 100;
  protected bgColorSuccess = 'success';

  protected valueExWarning = 75;
  protected minExWarning = 0;
  protected maxExWarning = 100;
  protected bgColorWarning = 'warning';

  protected valueExDanger = 100;
  protected minExDanger = 0;
  protected maxExDanger = 100;
  protected bgColorDanger = 'danger';

  constructor() { }

  ngOnInit() {
  }

}
