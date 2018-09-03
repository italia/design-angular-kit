import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-collapse-example',
  templateUrl: './collapse-example.component.html',
  styleUrls: ['./collapse-example.component.scss']
})
export class CollapseExampleComponent {

  isShown = false;

  logShow() {
    console.log(`Show: ${(new Date()).toISOString()}`);
  }

  logShown() {
    console.log(`Shown: ${(new Date()).toISOString()}`);
  }

  logHide() {
    console.log(`Hide: ${(new Date()).toISOString()}`);
  }

  logHidden() {
    console.log(`Hidden: ${(new Date()).toISOString()}`);
  }

}
