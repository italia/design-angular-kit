import {ChangeDetectorRef, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {BreadcrumbItemComponent} from "../breadcrumb-item/breadcrumb-item.component";
import {BooleanInput, isTrueBooleanInput} from "../../../../utils/boolean-input";

@Component({
  selector: 'it-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

  /**
   * The character to use as separator
   * @default /
   */
  @Input() separator: string = '/';

  /**
   * Dark style
   */
  @Input() dark?: BooleanInput;

  /**
   * The tab items
   */
  @ContentChildren(BreadcrumbItemComponent) items?: QueryList<BreadcrumbItemComponent>;

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Check if index is last item
   * @param index
   */
  isLastItem(index: number): boolean {
    return !!this.items && index >= (this.items.length - 1);
  }

}
