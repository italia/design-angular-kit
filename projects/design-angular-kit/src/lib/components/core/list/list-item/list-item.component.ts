import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { inputToBoolean } from '../../../../utils/coercion';
import { ItLinkComponent } from '../../link/link.component';

@Component({
  standalone: true,
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItLinkComponent],
})
export class ItListItemComponent extends ItLinkComponent {
  constructor(private elRef: ElementRef) {
    super();
  }

  /**
   * Add active class
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Add large class
   */
  @Input() size?: 'large' | 'medium';

  /**
   * Add icon-left class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconLeft?: boolean;

  /**
   * Add icon-right class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconRight?: boolean;

  private _avatar: URL | undefined;
  /**
   * The avatar url
   * @deprecated L'input 'avatar' è deprecato. Usa la documentazione del component Avatar per questo caso d'uso, facendo riferimento all'esempio Avatar con lista. Sarà rimosso nelle prossime versioni.
   */
  @Input()
  get avatar(): URL | undefined {
    console.warn(
      `L'input 'avatar' è deprecato. Usa la documentazione del component Avatar per questo caso d'uso, facendo riferimento all'esempio Avatar con lista. Sarà rimosso nelle prossime versioni.`
    );
    return this._avatar;
  }
  set avatar(value: URL | undefined) {
    this._avatar = value;
  }

  /**
   * The thumb image url
   */
  @Input() image: URL | undefined;

  get itemClass(): string {
    const inSidebar: boolean = this.elRef.nativeElement.closest('.sidebar-linklist-wrapper') ? true : false;
    let itemClass = 'list-item';
    if (this.disabled) {
      itemClass += ` disabled`;
    }
    if (this.active) {
      itemClass += ` active`;
    }
    if (this.size) {
      itemClass += ` ${this.size}`;
    }
    if (this.iconLeft) {
      itemClass += inSidebar ? ` left-icon` : ` icon-left`;
    }
    if (this.iconRight) {
      itemClass += inSidebar ? ` right-icon` : ` icon-right`;
    }
    if (this.class) {
      itemClass += ` ${this.class}`;
    }
    return itemClass;
  }
}
