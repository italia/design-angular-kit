import { Component, ContentChildren, forwardRef, QueryList,
  Input, HostListener, SimpleChanges, OnChanges } from '@angular/core';
import { CollapseItemComponent } from './collapse-item.component';
import { Util } from '../util/util';

let identifier = 0;

@Component({
  selector: 'it-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.css']
})
export class CollapseGroupComponent implements OnChanges {
  id = `collapse-group-${identifier++}`;

  /**
   * Indica se gli item del gruppo sono mutuamente richiudibili (o accordion)
   */
  @Input()
  get accordion(): boolean { return this._accordion; }
  set accordion(value: boolean) { this._accordion = Util.coerceBooleanProperty(value); }
  private _accordion = false;

  @ContentChildren(forwardRef(() => CollapseItemComponent), { descendants: true })
  private _items: QueryList<CollapseItemComponent>; // tslint:disable-line

  @HostListener('click', ['$event.target'])
  onClick(target) {
    if (this.accordion) {
      const items = this._items.toArray();
      items.forEach(currentItem => {
        const isTargetPartOfItem = (currentItem.elementRef.nativeElement as HTMLElement).contains(target);
        if (!isTargetPartOfItem) {
          if (currentItem.directive.isShown()) {
            currentItem.directive.hide();
          }
        }
      });
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['accordion']) {
      const isAccordion = simpleChanges['accordion'].currentValue;
      if (isAccordion) {
        const items = this._items.toArray();
        items.forEach(currentItem => {
          if (currentItem.directive.isShown()) {
            currentItem.directive.hide();
          }
        });
      }
    }
  }
}
