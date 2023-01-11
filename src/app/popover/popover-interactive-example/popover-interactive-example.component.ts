import { Component } from '@angular/core';
import { ElementPlacement } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-popover-interactive-example',
  templateUrl: './popover-interactive-example.component.html',
  styleUrls: ['./popover-interactive-example.component.scss']
})
export class PopoverInteractiveExampleComponent {
  placement: ElementPlacement = 'right';
  container?: 'body';
  disabled = false;
  removeTitle = false;

  shownTime = '';
  hiddenTime = '';

  logShown() {
    this.shownTime = (new Date()).toISOString();
  }

  logHidden() {
    this.hiddenTime = (new Date()).toISOString();
  }

  get myDescription() {
    return !this.removeTitle ? 'Testo del Popover' : 'Popover senza nessun titolo';
  }

  get myTitle() {
    return !this.removeTitle ? 'Titolo del Popover' : '';
  }

}
