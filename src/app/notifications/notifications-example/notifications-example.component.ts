import { Component, inject } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';
import { NotificationPosition, NotificationType } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-notifications-example',
  templateUrl: './notifications-example.component.html',
  standalone: false,
})
export class NotificationsExampleComponent {
  private readonly notificationService = inject(ItNotificationService);

  withText = true;
  type: NotificationType = NotificationType.Standard;
  duration?: number;
  dismissible?: 'true' | 'false';
  position?: NotificationPosition;

  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }
  get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  showNotification(): void {
    this.notificationService.addNotification({
      type: this.type,
      title: 'Titolo Notifica',
      message: this.withText && this.text,
      dismissible: this.dismissible && this.dismissible === 'true',
      position: this.position,
      duration: this.duration,
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
