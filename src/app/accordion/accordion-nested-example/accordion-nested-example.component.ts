import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-accordion-nested-example',
  templateUrl: './accordion-nested-example.component.html',
  styleUrls: ['./accordion-nested-example.component.scss'],
  standalone: false,
})
export class AccordionNestedExampleComponent {
  shownComponent = '';
  hiddenComponent = '';

  logShown($event: any) {
    this.shownComponent = $event._header;
  }

  logHidden($event: any) {
    this.hiddenComponent = $event._header;
  }
}
