import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'it-error-page',
  templateUrl: './error-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {

  /**
   * The error code to show
   */
  @Input() errorCode?: number | 404 | 403 | 500;

  /**
   * Custom error title
   */
  @Input() errorTitle?: string;

  /**
   * Custom error description
   */
  @Input() errorDescription?: string;


  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.route.data.subscribe(data => {
      if (!this.errorCode && data['errorCode']) {
        this.errorCode = data['errorCode']; // Get errorCode from route data
      }
      if (!this.errorTitle && data['errorTitle']) {
        this.errorTitle = data['errorTitle'];  // Get errorTitle from route data
      }
      if (!this.errorDescription && data['errorDescription']) {
        this.errorDescription = data['errorDescription'];  // Get errorDescription from route data
      }
    });
  }

  get isDefaultErrorCode(): boolean {
    return this.errorCode === 404 || this.errorCode === 403 || this.errorCode === 500;
  }

}
