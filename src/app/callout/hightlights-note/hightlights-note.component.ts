import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-note',
  templateUrl: './hightlights-note.component.html',
  standalone: false,
})
export class HightlightsNoteComponent {
  appearance: CalloutAppearance = 'highlight';
  label = 'Note';
  color: CalloutColor = 'note';
}
