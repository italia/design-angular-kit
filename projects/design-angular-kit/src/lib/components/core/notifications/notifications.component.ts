import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsService } from '../../../services/notifications/notifications.service';
import { Notification, NotificationPosition, NotificationType } from '../../../interfaces/core';

import { Notification as BSNotification } from 'bootstrap-italia';

@Component({
  selector: 'it-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnDestroy {

  /**
   * Default notifications duration
   * @default 8000
   */
  @Input() duration: number = 8000;

  /**
   * Default notifications position
   */
  @Input() position?: NotificationPosition;

  private subscription: Subscription;
  notifications: Array<Notification & { id: string }> = [];

  constructor(
    private readonly _notificationService: NotificationsService
  ) {
    this.subscription = this._notificationService.onNotification().subscribe(notification => {
      if (!notification.duration) {
        notification.duration = this.duration; // Add duration if not is set
      }
      if (!notification.position && this.position) {
        notification.position = this.position; // Add position if not is set
      }

      const newNotification = {
        ...notification,
        id: `${notification.type}-${this.notifications.length}-notification`
      };
      const index = this.notifications.push(newNotification);

      setTimeout(() => {
        // Show the notification
        new BSNotification(document.getElementById(newNotification.id), {
          timeout: notification.duration
        }).show();

        // Clear notification after the duration
        setTimeout(() => {
          this.notifications = this.notifications.splice(index, 1);
        }, notification.duration);
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  /**
   * Hide the notification
   * @param id
   */
  hideNotification(id: string): void {
    BSNotification.getInstance(document.getElementById(id))?.hide();
  }
}
