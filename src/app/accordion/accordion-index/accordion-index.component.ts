import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-accordion-index',
  templateUrl: './accordion-index.component.html',
  styleUrls: ['./accordion-index.component.scss'],
  standalone: false,
})
export class AccordionIndexComponent {
  accordionComponent: any;

  constructor() {
    this.accordionComponent = (<any>Documentation).components.find((component: any) => component.name === 'ItAccordionComponent');
  }
}
