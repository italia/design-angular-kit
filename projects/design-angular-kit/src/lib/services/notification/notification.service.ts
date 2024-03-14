import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Notification, NotificationPosition, NotificationType } from '../../interfaces/core';

@Injectable({ providedIn: 'root' })
export class ItNotificationService {
  private subject = new Subject<Notification>();

  /**
   * Listen on notification arrived
   * @param filterType filter type of notification
   */
  public onNotification(filterType?: NotificationType): Observable<Notification> {
    return this.subject.asObservable().pipe(filter(n => n && (!filterType || n.type === filterType)));
  }

  /**
   * Show new notification
   * @param notification notification
   */
  public addNotification(notification: Notification): void {
    this.subject.next(notification);
  }

  /**
   * Create new Standard notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public standard(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Standard,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Success notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public success(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Success,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Error notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public error(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Error,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Warning notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public warning(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Warning,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Info notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public info(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Info,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }
}
