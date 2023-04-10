import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { of, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Tab } from 'bootstrap-italia';
import { AbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContainerComponent extends AbstractComponent implements OnDestroy, AfterViewInit {

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

  @ViewChildren('tabNavLinks') private tabNavLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

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
      switchMap(() => this.tabNavLinks?.changes.pipe(startWith(undefined)) || of(undefined))
    ).subscribe(() => {
      // Init tabs from bootstrap-italia
      this.tabNavLinks?.forEach(tabNavLink => {
        const triggerEl = tabNavLink.nativeElement,
          tabTrigger = Tab.getOrCreateInstance(triggerEl);

        if (triggerEl.getAttribute('tab-listener') !== 'true') {
          triggerEl.addEventListener('click', event => {
            event.preventDefault();
            tabTrigger.show();
          });
          triggerEl.setAttribute('tab-listener', 'true'); // Prevents multiple insertion of the listener
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.tabSubscriptions?.forEach(sub => sub.unsubscribe());
  }
}
