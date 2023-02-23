import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { AbstractComponent } from '../../../abstracts/abstract.component';

@Component({
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AbstractComponent {

  @Input() light?: BooleanInput;

  @Input() showSlim?: BooleanInput = true;

  @Input() slimTitle?: string;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'full';

  @Input() smallHeader?: BooleanInput = true;

  @Input() showSearch?: BooleanInput = true;

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  /**
   * TODO: complete header
   * @param _renderer
   * @param _elementRef
   * @param _changeDetectorRef
   */
  constructor(
    protected override readonly _renderer: Renderer2,
    protected override readonly _elementRef: ElementRef,
    protected override readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_renderer, _elementRef, _changeDetectorRef);
    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  get isLight(): boolean {
    return isTrueBooleanInput(this.light);
  }

  get isShowSlim(): boolean {
    return isTrueBooleanInput(this.showSlim);
  }

  get isSmallHeader(): boolean {
    return isTrueBooleanInput(this.smallHeader);
  }

  get isShowSearch(): boolean {
    return isTrueBooleanInput(this.showSearch);
  }

}
