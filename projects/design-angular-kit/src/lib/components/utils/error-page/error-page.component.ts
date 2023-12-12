import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItBackButtonComponent } from '../../navigation/back-button/back-button.component';
import { ItButtonDirective } from '../../core/button/button.directive';

@Component({
  standalone: true,
  selector: 'it-error-page',
  templateUrl: './error-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, RouterLink, ItBackButtonComponent, ItButtonDirective]
})
export class ItErrorPageComponent {

  /**
   * The error code to show
   */
  @Input() errorCode: number | 404 | 403 | 500 | undefined;

  /**
   * Show/Hide error code
   * @default true - show
   */
  @Input() showErrorCode?: BooleanInput = true;

  /**
   * Custom error title
   * - If set it will be displayed instead of the default title.
   * - It is possible to use i18n keys
   */
  @Input() errorTitle: string | undefined;

  /**
   * Custom error description
   * - If set it will be displayed instead of the default description.
   * - It is possible to use i18n keys
   */
  @Input() errorDescription: string | undefined;

  /**
   * Show/Hide back button
   * @default true - show
   */
  @Input() showBackButton?: BooleanInput = true;

  /**
   * Show/Hide home button
   * @default true - show
   */
  @Input() showHomeButton?: BooleanInput = true;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.route.data.subscribe(data => {
      if (!this.errorCode && data['errorCode']) {
        this.errorCode = data['errorCode']; // Get errorCode from route data
      }
      if (data['showErrorCode'] !== undefined) {
        this.showErrorCode = data['showErrorCode'];  // Get showErrorCode from route data
      }
      if (!this.errorTitle && data['errorTitle']) {
        this.errorTitle = data['errorTitle'];  // Get errorTitle from route data
      }
      if (!this.errorDescription && data['errorDescription']) {
        this.errorDescription = data['errorDescription'];  // Get errorDescription from route data
      }
      if (data['showBackButton'] !== undefined) {
        this.showBackButton = data['showBackButton'];  // Get showBackButton from route data
      }
      if (data['showHomeButton'] !== undefined) {
        this.showHomeButton = data['showHomeButton'];  // Get showHomeButton from route data
      }
    });
  }

  get isDefaultErrorCode(): boolean {
    return this.errorCode === 404 || this.errorCode === 403 || this.errorCode === 500;
  }

  get isShowErrorCode(): boolean {
    return isTrueBooleanInput(this.showErrorCode);
  }

  get isShowBackButton(): boolean {
    return isTrueBooleanInput(this.showBackButton);
  }

  get isShowHomeButton(): boolean {
    return isTrueBooleanInput(this.showHomeButton);
  }

}
