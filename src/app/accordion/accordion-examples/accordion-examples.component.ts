import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-accordion-examples',
  templateUrl: './accordion-examples.component.html',
  styleUrls: ['./accordion-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AccordionExamplesComponent {
  constructor() {}
}
