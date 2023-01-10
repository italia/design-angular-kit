import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-header',
  templateUrl: './callout-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalloutHeaderComponent {

  /**
   * Callout label
   */
  @Input() set label (value: string | undefined) { this._label = value; }
  get label (): string | undefined { return this._label; }
  private _label: string | undefined = undefined;

  /**
   * Callout hiddenLabel
   */
  @Input() set hiddenLabel (value: string | undefined) { this._hiddenLabel = value; }
  get hiddenLabel (): string | undefined { return this._hiddenLabel; }
  private _hiddenLabel: string | undefined = undefined;

  /**
   * Custom icon
   */
  @Input() set iconName (value: IconName | undefined) { this._iconName = value; }
  get iconName (): IconName | undefined {
    return this._iconName;
  }
  private _iconName: IconName | undefined = undefined;

}
