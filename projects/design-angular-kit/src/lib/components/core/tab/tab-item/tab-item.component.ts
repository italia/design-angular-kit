import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../abstracts/abstract.component";
import {BooleanInput} from "../../../../utils/boolean-input";
import {IconName} from "../../../../interfaces/icon";

@Component({
  selector: 'it-tab-item[id]',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent extends AbstractComponent {

  /**
   * The tab label
   */
  @Input() label?: string;

  /**
   * The icon name
   */
  @Input() icon?: IconName;

  /**
   * Default active tab
   */
  @Input() active?: BooleanInput;

  /**
   * Default disabled tab
   */
  @Input() disabled?: BooleanInput;

  /**
   * Custom class
   */
  @Input() class: string = ''

  /**
   * The content of tab
   */
  @ViewChild(TemplateRef)
  public htmlContent!: TemplateRef<any>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
