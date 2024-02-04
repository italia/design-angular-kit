import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IconName } from '../../../interfaces/icon';
import { ChipColor } from '../../../interfaces/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';

@Component({
  standalone: true,
  selector: 'it-chip',
  templateUrl: './chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, TranslateModule],
})
export class ItChipComponent {
  /**
   * Indica la label
   */
  @Input() set label(value: string) {
    this._label = value;
  }

  get label(): string {
    return this._label;
  }

  private _label = '';

  /**
   * Indica se mostrate il pulante di chisura
   */
  @Input() set showCloseButton(value: boolean) {
    this._showCloseButton = value;
  }

  get showCloseButton(): boolean {
    return this._showCloseButton;
  }

  private _showCloseButton = false;

  /**
   * Indica il size
   */
  @Input() set size(value: '' | 'lg') {
    this._size = value;
  }

  get size(): '' | 'lg' {
    return this._size;
  }

  private _size: '' | 'lg' = '';

  /**
   * Indica il colore della chip
   */
  @Input() set color(value: ChipColor | undefined) {
    this._color = value;
  }

  get color(): ChipColor | undefined {
    return this._color;
  }

  private _color: ChipColor | undefined = undefined;

  /**
   * Indica se la chip è disabilitata
   */
  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  private _disabled: boolean = false;

  /**
   * Indica il nome dell'icona, se valorizzata viene mostrata
   */
  @Input() set icon(value: IconName | undefined) {
    this._icon = value;
  }

  get icon(): IconName | undefined {
    return this._icon;
  }

  private _icon: IconName | undefined = undefined;

  /**
   * Indica l'url dell'avatar, se valorizzata viene mostrata
   */
  @Input() set avatar(value: string | undefined) {
    this._avatar = value;
  }

  get avatar(): string | undefined {
    return this._avatar;
  }

  private _avatar: string | undefined = undefined;

  /**
   * Indica il valore da aggiungere al parametro alt, di default ''
   */
  @Input() set altAvatar(value: string) {
    this._altAvatar = value;
  }

  get altAvatar(): string {
    return this._altAvatar;
  }

  private _altAvatar: string = '';

  /**
   * Evento emesso al click sul bottone di chiusura
   */
  @Output() closeEvent = new EventEmitter();

  /**
   * Return the icon href
   */
  protected get iconHref(): string {
    return `${this.assetBasePath}/dist/svg/sprites.svg#it-${this._icon}`;
  }

  private iconClose: IconName = 'close';

  /**
   * Return the close icon href
   */
  protected get iconCloseHref(): string {
    return `${this.assetBasePath}/dist/svg/sprites.svg#it-${this.iconClose}`;
  }

  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  protected assetBasePath: string;

  constructor() {
    this.assetBasePath = inject(IT_ASSET_BASE_PATH);
  }

  clickToClose(): void {
    this.closeEvent.emit();
  }
}
