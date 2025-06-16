import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItNotificationService } from '../../../services/notification/notification.service';
import { Notification, NotificationPosition, NotificationType } from '../../../interfaces/core';
import { Notification as BSNotification } from 'bootstrap-italia';
import { IconName } from '../../../interfaces/icon';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule],
})
export class ItNotificationsComponent implements OnDestroy {
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  private readonly _notificationService = inject(ItNotificationService);

  /**
   * Default notifications duration (milliseconds)
   * @default 8000
   */
  @Input() duration: number = 8000;

  /**
   * Default notifications position
   */
  @Input() position: NotificationPosition | undefined;

  /**
   * Default notifications is dismissible
   * @default true
   */
  @Input({ transform: inputToBoolean }) dismissible: boolean = true;

  private subscription: Subscription;
  private notificationCount: number = 0;
  protected notifications: Array<Notification & { id: string }> = [];

  constructor() {
    this.subscription = this._notificationService.onNotification().subscribe(notification => {
      if (!notification.duration) {
        notification.duration = this.duration; // Add duration if not is set
      }
      if (!notification.position && this.position) {
        notification.position = this.position; // Add position if not is set
      }
      if (notification.dismissible === undefined && this.dismissible) {
        notification.dismissible = true; // Add dismissible if not is set
      }
      if (!notification.icon) {
        notification.icon = this.getNotificationIcon(notification);
      }

      const newNotification = {
        ...notification,
        id: `${notification.type}-${this.notificationCount++}-notification`,
      };
      this.notifications.push(newNotification);
      this._changeDetectorRef.detectChanges();

      setTimeout(() => {
        // Show the notification
        new BSNotification(document.getElementById(newNotification.id)!, {
          timeout: notification.duration,
        }).show();

        // Clear notification after the duration
        setTimeout(() => {
          const index = this.notifications.findIndex(n => n.id === newNotification.id);
          if (index > -1) {
            this.notifications.splice(index, 1);
            if (!this.notifications.length) {
              this.notificationCount = 0;
            }
            this._changeDetectorRef.detectChanges();
          }
        }, notification.duration);
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  /**
   * Hide the notification
   * @param id
   */
  protected hideNotification(id: string): void {
    BSNotification.getInstance(document.getElementById(id)!)?.hide();
  }

  /**
   * Retrieve the icon name by notification type
   * @param notification the notification
   * @protected
   */
  private getNotificationIcon(notification: Notification): IconName | undefined {
    switch (notification.type) {
      case NotificationType.Success:
        return 'check-circle';
      case NotificationType.Error:
        return 'close-circle';
      case NotificationType.Warning:
        return 'error';
      case NotificationType.Info:
        return 'info-circle';
      case NotificationType.Standard:
      default:
        return undefined;
    }
  }
}
