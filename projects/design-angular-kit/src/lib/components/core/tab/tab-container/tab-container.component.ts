import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { of, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Tab } from 'bootstrap-italia';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet],
})
export class ItTabContainerComponent extends ItAbstractComponent implements OnDestroy, AfterViewInit {
  /**
   * Tabs automatically occupy the entire available width
   * @default false
   */
  @Input({ transform: inputToBoolean }) auto?: boolean;

  /**
   * To obtain the correct margin between text and icon in the horizontally developed tab
   */
  @Input({ transform: inputToBoolean }) iconText?: boolean;

  /**
   * Dark style
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The tab items
   */
  @ContentChildren(ItTabItemComponent) tabs?: QueryList<ItTabItemComponent>;

  @ViewChildren('tabNavLinks') private tabNavLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  private tabSubscriptions?: Array<Subscription>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.tabs?.changes
      .pipe(
        // When tabs changes (dynamic add/remove)
        startWith(undefined),
        tap(() => {
          this.tabSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
          this.tabSubscriptions = this.tabs?.map(tab =>
            tab.valueChanges.subscribe(() => {
              this._changeDetectorRef.detectChanges(); // DetectChanges when tab-item attributes changes
            })
          );
          this._changeDetectorRef.detectChanges(); // Force update html render
        }),
        switchMap(() => this.tabNavLinks?.changes.pipe(startWith(undefined)) || of(undefined))
      )
      .subscribe(() => {
        // Init tabs from bootstrap-italia
        this.tabNavLinks?.forEach(tabNavLink => {
          const triggerEl = tabNavLink.nativeElement,
            tabTrigger = Tab.getOrCreateInstance(triggerEl);

          if (triggerEl.getAttribute('tab-listener') !== 'true') {
            triggerEl.addEventListener('click', event => {
              event.preventDefault();
              tabTrigger.show();
              this._changeDetectorRef.detectChanges();
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
