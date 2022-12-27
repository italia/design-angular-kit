import {AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {IconName} from "../../../interfaces/icon";
import {CalloutAppearance, CalloutColor} from "../../../interfaces/core";

@Component({
  selector: 'it-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements AfterViewInit {

  /**
   * Callout title
   */
  @Input() title?: string;

  /**
   * Custom icon
   */
  @Input() icon?: IconName;

  /**
   * Callout color
   */
  @Input() color?: CalloutColor;

  /**
   * Callout appearance
   * - <b>default</b>
   * - <b>highlight</b>: Callout version with border only on the left side
   * - <b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts
   * @default default
   */
  @Input() appearance: CalloutAppearance = 'default';


  /**
   * Retrieve the current icon to show
   */
  get iconName(): IconName {
    if (this.icon) {
      return this.icon;
    }

    if (this.appearance === 'more') {
      return 'zoom-in';
    }

    switch (this.color) {
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'help-circle';
      case 'danger':
        return 'close-circle';
      case 'important':
      case 'note':
      default:
        return 'info-circle';
    }
  }

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');
  }

}
