import {Component, Input} from '@angular/core';
import {AbstractComponent} from "../../../abstracts/abstract.component";
import {BooleanInput} from "../../../utils/boolean-input";

@Component({
  selector: 'it-accordion[id][title]',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent extends AbstractComponent {

  /**
   * Accordion Title
   */
  @Input() title!: string;

  /**
   * True to set accordion opened by default
   */
  @Input() opened?: BooleanInput;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');
  }

}
