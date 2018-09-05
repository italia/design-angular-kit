import { Component } from '@angular/core';

@Component({
  selector: 'it-collapse-nested-example',
  templateUrl: './collapse-nested-example.component.html',
  styleUrls: ['./collapse-nested-example.component.scss']
})
export class CollapseNestedExampleComponent {

  printShow($event) {
    console.log('Show: ', $event);
  }

  printHide($event) {
    console.log('Hide: ', $event);
  }

  printShown($event) {
    console.log('Shown: ', $event);
  }

  printHidden($event) {
    console.log('Hidden: ', $event);
  }
}
