import { Component } from '@angular/core';
import { CalloutAppearance } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-hightlights',
  templateUrl: './callout-hightlights.component.html',
})
export class CalloutHightlightsComponent {
  appearance: CalloutAppearance = 'highlight';
  label = 'Titolo callout';
}
