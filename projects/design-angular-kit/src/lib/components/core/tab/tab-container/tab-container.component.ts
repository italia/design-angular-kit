import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { delay, startWith, Subscription, tap } from 'rxjs';
import { Tab } from 'bootstrap-italia';
import { AbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContainerComponent extends AbstractComponent implements OnDestroy {

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

  private tabSubscriptions?: Array<Subscription>;

  isTrueBooleanInput(booleanInput?: BooleanInput): boolean {
    return isTrueBooleanInput(booleanInput);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.tabs?.changes.pipe( // When tabs changes (dynamic add/remove)
      startWith(undefined),
      tap(() => {
        this.tabSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.tabSubscriptions = this.tabs?.map(tab => tab.valueChanges.subscribe(() => {
          this._changeDetectorRef.detectChanges(); // DetectChanges when tab-item attributes changes
        }));
        this._changeDetectorRef.detectChanges(); // Force update html render
      }),
      delay(100)
    ).subscribe(() => {
      // Init tabs from bootstrap-italia
      const triggerTabList: Array<HTMLAnchorElement> = this._elementRef.nativeElement.querySelectorAll('.nav-item a');
      triggerTabList?.forEach(triggerEl => {
        const tabTrigger = Tab.getOrCreateInstance(triggerEl);

        if (triggerEl.getAttribute('tab-listener') !== 'true') {
          triggerEl.addEventListener('click', event => {
            event.preventDefault();
            triggerEl.setAttribute('tab-listener', 'true'); // Prevents multiple insertion of the listener
            tabTrigger.show();
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.tabSubscriptions?.forEach(sub => sub.unsubscribe());
  }
}
