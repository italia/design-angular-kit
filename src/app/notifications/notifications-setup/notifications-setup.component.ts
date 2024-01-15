import { Component } from '@angular/core';
import { NotificationPosition } from 'design-angular-kit/interfaces/core';
import {
  ItNotificationService
} from 'design-angular-kit/services/notification/notification.service';

@Component({
  selector: 'it-notifications-setup',
  templateUrl: './notifications-setup.component.html'
})
export class NotificationsSetupComponent {

  duration = 8000;
  isDismissible = true;
  position?: NotificationPosition;

  readonly notificationServiceExample = "constructor(\n" +
    "  private readonly notificationService: ItNotificationService\n" +
    ") {}\n\n" +
    "standardNotification(): void {\n" +
    "  this.notificationService.standard(\n" +
    "    'Notifica Standard', // Titolo\n" +
    "    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...' // Messaggio\n" +
    "  );\n" +
    "}";

  readonly exampleOptionsHtml = "<it-notifications [duration]=\"duration >= 1000 ? duration : undefined\"\n" +
    "                  [position]=\"position\"\n" +
    "                  [dismissible]=\"isDismissible\"></it-notifications>";

  readonly exampleOptionsTs = "duration = 8000;\n" +
    "isDismissible = true;\n" +
    "position?: NotificationPosition;\n"

  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }

  constructor(
    private readonly notificationService: ItNotificationService
  ) {
  }

  standardNotification(): void {
    this.notificationService.standard(
      'Notifica Standard',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'
    );
  }

}
