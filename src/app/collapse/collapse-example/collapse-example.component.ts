import { Component } from '@angular/core';

@Component({
  selector: 'it-collapse-example',
  templateUrl: './collapse-example.component.html',
  styleUrls: ['./collapse-example.component.scss'],
  standalone: false,
})
export class CollapseExampleComponent {
  collapse = true;

  showTime = '';
  shownTime = '';
  hideTime = '';
  hiddenTime = '';

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}
