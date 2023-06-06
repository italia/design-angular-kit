import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-dimmer-buttons',
  templateUrl: './dimmer-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
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
