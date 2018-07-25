import { Component } from '@angular/core';

@Component({
  selector: 'it-progress-bar-example',
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss']
})
export class ProgressBarExampleComponent {

  protected valueEx = 50;
  protected minEx = 0;
  protected maxEx = 100;

}
