import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'it-dimmer-buttons',
  templateUrl: './dimmer-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimmerButtonsComponent {

  /**
   * Indica se abbiamo 1 solo bottone
   * @default false
  */
  @Input() set hasOneButton (value: boolean) {this._hasOneButton = value};
  get hasOneButton() {return this._hasOneButton; }
  private _hasOneButton = false;

}
