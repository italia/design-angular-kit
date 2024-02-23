import { AfterViewInit, ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { IconName } from '../../../../interfaces/icon';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-tab-item',
  templateUrl: './tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItTabItemComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * The tab label
   */
  @Input() label: string | undefined;

  /**
   * The icon name
   */
  @Input() icon: IconName | undefined;

  /**
   * Default active tab
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Default disabled tab
   * @default false
   */
  @Input({ transform: inputToBoolean }) disabled?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

  /**
   * The content of tab
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
