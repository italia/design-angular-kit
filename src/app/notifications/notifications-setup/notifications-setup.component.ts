import { Component } from '@angular/core';
import { NotificationPosition } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-notifications-setup',
  templateUrl: './notifications-setup.component.html'
})
export class NotificationsSetupComponent {

  duration = 8000;
  dismissible = true;
  position?: NotificationPosition;

  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }

}
