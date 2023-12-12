import { Component } from '@angular/core';
import {
  ItNotificationService
} from '../../../../projects/design-angular-kit/src/lib/services/notification/notification.service';
import {
  NotificationPosition,
  NotificationType
} from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-notifications-example',
  templateUrl: './notifications-example.component.html'
})
export class NotificationsExampleComponent {

  withText = true;
  type: NotificationType = NotificationType.Standard;
  duration?: number;
  dismissible?: 'true'|'false';
  position?: NotificationPosition;


  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }
  get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  constructor(
    private readonly notificationService: ItNotificationService
  ) {
  }

  showNotification(): void {
    this.notificationService.addNotification({
      type: this.type,
      title: 'Titolo Notifica',
      message: this.withText && this.text,
      dismissible: this.dismissible && this.dismissible === 'true',
      position: this.position,
      duration: this.duration
    });

    // You can also use helper methods `standard`, `success`, `error`, `warning`, `info`
    // this.notificationService.success(
    //   'Titolo Notifica',
    //   this.withText && this.text,
    //   this.dismissible,
    //   this.duration,
    //   this.position
    // );
  }

}
