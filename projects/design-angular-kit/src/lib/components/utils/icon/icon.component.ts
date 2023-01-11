import {AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {IconColor, IconName, IconSize} from "../../../interfaces/icon";
import {BooleanInput} from "../../../utils/boolean-input";

@Component({
  selector: 'it-icon[name]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {

  /**
   * The icon size
   */
  @Input() name!: IconName;

  /**
   * The icon size
   */
  @Input() size?: IconSize;

  /**
   * The icon color
   */
  @Input() color?: IconColor;

  /**
   * Create a padding proportional to the size of the surrounding icon.
   */
  @Input() padded?: BooleanInput;

  /**
   * Custom class
   */
  @Input() class: string = ''

  /**
   * Return the icon href
   */
  get iconHref(): string {
    return `/bootstrap-italia/dist/svg/sprites.svg#it-${this.name}`;
  }

  /**
   * Return the icon class
   */
  get iconClass(): string {
    let iconClass = 'icon';
    if (this.size) {
      iconClass += ` icon-${this.size}`
    }
    if (this.color) {
      iconClass += ` icon-${this.color}`
    }
    if (this.class) {
      iconClass += ` ${this.class}`
    }
    return iconClass;
  }

  constructor(
    protected readonly _renderer: Renderer2,
    protected readonly _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit() {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
