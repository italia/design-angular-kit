import {Injectable} from '@angular/core';
import {filter, Observable, Subject} from "rxjs";
import {Notification, NotificationPosition, NotificationType} from "../../interfaces/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private subject = new Subject<Notification>();

  /**
   * Listen on notification arrived
   * @param filterType filter type of notification
   */
  onNotification(filterType?: NotificationType): Observable<Notification> {
    return this.subject.asObservable().pipe(
      filter(n => n && (!filterType || (n.type === filterType)))
    );
  }

  /**
   * Show new notification
   * @param notification notification
   */
  addNotification(notification: Notification): void {
    this.subject.next(notification);
  }

  /**
   * Create new Standard notification
   * @param title notification title
   * @param message notification message
   * @param dismissable notification dismissable
   * @param duration notification duration (millis)
   * @param position notification position
   */
  standard(title: string, message?: string, dismissable = true, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Standard,
      message,
      title,
      duration,
      dismissable,
      position
    });
  }

  /**
   * Create new Success notification
   * @param title notification title
   * @param message notification message
   * @param dismissable notification dismissable
   * @param duration notification duration (millis)
   * @param position notification position
   */
  success(title: string, message?: string, dismissable = true, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Success,
      message,
      title,
      duration,
      dismissable,
      position
    });
  }

  /**
   * Create new Error notification
   * @param title notification title
   * @param message notification message
   * @param dismissable notification dismissable
   * @param duration notification duration (millis)
   * @param position notification position
   */
  error(title: string, message?: string, dismissable = true, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Error,
      message,
      title,
      duration,
      dismissable,
      position
    });
  }

  /**
   * Create new Warning notification
   * @param title notification title
   * @param message notification message
   * @param dismissable notification dismissable
   * @param duration notification duration (millis)
   * @param position notification position
   */
  warning(title: string, message?: string, dismissable = true, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Warning,
      message,
      title,
      duration,
      dismissable,
      position
    });
  }

  /**
   * Create new Info notification
   * @param title notification title
   * @param message notification message
   * @param dismissable notification dismissable
   * @param duration notification duration (millis)
   * @param position notification position
   */
  info(title: string, message?: string, dismissable = true, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Info,
      message,
      title,
      duration,
      dismissable,
      position
    });
  }
}
