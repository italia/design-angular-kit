import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-important',
  templateUrl: './hightlights-important.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HightlightsImportantComponent {
  appearance: CalloutAppearance = 'highlight';
  label = 'Importante';
  color: CalloutColor = 'important';
}
