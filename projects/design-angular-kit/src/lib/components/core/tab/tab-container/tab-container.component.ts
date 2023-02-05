import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html'
})
export class TabContainerComponent implements AfterViewInit {

  /**
   * Tabs automatically occupy the entire available width
   */
  @Input() auto?: BooleanInput;

  /**
   * To obtain the correct margin between text and icon in the horizontally developed tab
   */
  @Input() iconText?: BooleanInput;

  /**
   * Dark style
   */
  @Input() dark?: BooleanInput;

  /**
   * The tab items
   */
  @ContentChildren(TabItemComponent) tabs?: QueryList<TabItemComponent>;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  isTrueBooleanInput(booleanInput?: BooleanInput): boolean {
    return isTrueBooleanInput(booleanInput);
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.detectChanges();
  }
}
