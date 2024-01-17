import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList
} from '@angular/core';
import { ItBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { startWith, Subscription } from 'rxjs';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItLinkComponent } from '../../../core/link/link.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgIf, TranslateModule, ItIconComponent, ItLinkComponent, NgTemplateOutlet]
})
export class ItBreadcrumbComponent implements AfterViewInit, OnDestroy {

  /**
   * The character to use as separator
   * @default /
   */
  @Input() separator: string = '/';

  /**
   * Dark style
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The tab items
   */
  @ContentChildren(ItBreadcrumbItemComponent) items?: QueryList<ItBreadcrumbItemComponent>;

  private itemSubscriptions?: Array<Subscription>;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.items?.changes.pipe( // When breadcrumb items changes (dynamic add/remove)
      startWith(undefined)
    ).subscribe(() => {
      this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
      this.itemSubscriptions = this.items?.map(item => item.valueChanges.subscribe(() => {
        this._changeDetectorRef.detectChanges(); // DetectChanges when breadcrumb item attributes changes
      }));
      this._changeDetectorRef.detectChanges(); // Force update html render
    });
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }

  /**
   * Check if index is last item
   * @param index
   */
  protected isLastItem(index: number): boolean {
    return !!this.items && index >= (this.items.length - 1);
  }

}
