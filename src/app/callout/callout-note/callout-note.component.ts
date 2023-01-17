import { Component } from '@angular/core';
import { CalloutColor, IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-callout-note',
  templateUrl: './callout-note.component.html'
})
export class CalloutNoteComponent {

  text = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.';
  label = 'Note a riguardo';
  color: CalloutColor = 'note';

}
