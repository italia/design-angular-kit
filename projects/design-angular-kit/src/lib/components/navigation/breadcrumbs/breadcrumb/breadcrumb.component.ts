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
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { startWith, Subscription } from 'rxjs';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../../../utils/icon/icon.component';
import { LinkComponent } from '../../../core/link/link.component';

@Component({
  standalone: true,
  selector: 'it-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgIf, TranslateModule, IconComponent, LinkComponent, NgTemplateOutlet]
})
export class BreadcrumbComponent implements AfterViewInit, OnDestroy {

  /**
   * The character to use as separator
   * @default /
   */
  @Input() separator: string = '/';

  /**
   * Dark style
   */
  @Input() dark: BooleanInput | undefined;

  /**
   * The tab items
   */
  @ContentChildren(BreadcrumbItemComponent) items?: QueryList<BreadcrumbItemComponent>;

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }

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
