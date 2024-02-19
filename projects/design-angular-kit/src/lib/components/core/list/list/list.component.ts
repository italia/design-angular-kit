import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';
import { ItListItemComponent } from '../list-item/list-item.component';
import { startWith, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItListComponent implements AfterViewInit, OnDestroy {
  /**
   * Add 'link-list' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean })
  public linkList?: boolean;

  /**
   * Add 'link-sublist' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) linkSubList?: boolean;

  /**
   * Add 'multiline' class for wrapper
   * @default false
   */
  @HostBinding('class.multiline')
  @Input({ transform: inputToBoolean })
  public multiline?: boolean;

  /**
   * The list items
   */
  @ContentChildren(ItListItemComponent) items?: QueryList<ItListItemComponent>;

  @HostBinding('class')
  private get componentClass(): string {
    if (this.linkSubList) {
      return '';
    }
    return this.linkList ? 'link-list-wrapper' : 'it-list-wrapper';
  }

  protected get listClass(): string {
    if (this.linkSubList) {
      return 'link-sublist';
    }
    return this.linkList ? 'link-list' : 'it-list';
  }

  private itemSubscriptions?: Array<Subscription>;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.items?.changes
      .pipe(
        // When list items changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.itemSubscriptions = this.items?.map(item =>
          item.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when list item attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }
}
