import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { BadgeColor } from '../../../interfaces/core';

@Component({
  selector: 'it-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements AfterViewInit {

  /**
   * Custom class
   */
  @Input() class: string = '';

  /**
   * The badge color
   */
  @Input() color?: BadgeColor;

  /**
   * Show rounded badge
   */
  @Input() rounded?: BooleanInput;

  get isRounded(): boolean {
    return isTrueBooleanInput(this.rounded);
  }

  get badgeClass(): string {
    let badgeClass = 'badge';
    if (this.isRounded) {
      badgeClass += ` rounded-pill`;
    }
    if (this.color) {
      badgeClass += ` bg-${this.color}`;
    }
    if (this.class) {
      badgeClass += ` ${this.class}`;
    }

    return badgeClass;
  }

  constructor(
    protected readonly _renderer: Renderer2,
    protected readonly _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
