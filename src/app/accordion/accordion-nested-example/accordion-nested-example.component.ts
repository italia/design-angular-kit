import { Component } from '@angular/core';

@Component({
  selector: 'it-accordion-nested-example',
  templateUrl: './accordion-nested-example.component.html',
  styleUrls: ['./accordion-nested-example.component.scss'],
  standalone: false,
})
export class AccordionNestedExampleComponent {
  shownComponent = '';
  hiddenComponent = '';

  logShown($event) {
    this.shownComponent = $event._header;
  }

  logHidden($event) {
    this.hiddenComponent = $event._header;
  }
}
