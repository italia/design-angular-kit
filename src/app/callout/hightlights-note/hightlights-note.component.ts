import { Component } from '@angular/core';
import { CalloutAppearance, CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-hightlights-note',
  templateUrl: './hightlights-note.component.html'
})
export class HightlightsNoteComponent {

  appearance: CalloutAppearance = 'highlight';
  label = 'Note';
  icon: IconName = 'info-circle';
  color: CalloutColor = 'note';

}
