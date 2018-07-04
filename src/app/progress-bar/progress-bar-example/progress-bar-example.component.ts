import { Component, OnInit } from '@angular/core';
import { PROGRESS_BAR_BACKGROUND_CLASSES } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-progress-bar-example',
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss']
})
export class ProgressBarExampleComponent implements OnInit {

  protected valueEx1 = 50;
  protected minEx1 = 0;
  protected maxEx1 = 100;

  protected valueEx2 = 25;
  protected minEx2 = 0;
  protected maxEx2 = 100;
  protected labelEx2 = '25%';

  protected valueEx3 = 50;
  protected minEx3 = 0;
  protected maxEx3 = 100;
  protected heightEx3 = 40;

  protected valueExInfo = 25;
  protected minExInfo = 0;
  protected maxExInfo = 100;
  protected bgColorInfo = PROGRESS_BAR_BACKGROUND_CLASSES.BG_INFO;

  protected valueExSuccess = 50;
  protected minExSuccess = 0;
  protected maxExSuccess = 100;
  protected bgColorSuccess = PROGRESS_BAR_BACKGROUND_CLASSES.BG_SUCCESS;

  protected valueExWarning = 75;
  protected minExWarning = 0;
  protected maxExWarning = 100;
  protected bgColorWarning = PROGRESS_BAR_BACKGROUND_CLASSES.BG_WARNING;

  protected valueExDanger = 100;
  protected minExDanger = 0;
  protected maxExDanger = 100;
  protected bgColorDanger = PROGRESS_BAR_BACKGROUND_CLASSES.BG_DANGER;

  constructor() { }

  ngOnInit() {
  }

}
