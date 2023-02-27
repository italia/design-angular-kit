import { Component } from '@angular/core';
import {
  NotificationsService
} from '../../../../projects/design-angular-kit/src/lib/services/notifications/notifications.service';

@Component({
  selector: 'it-notifications-example-type',
  templateUrl: './notifications-example-type.component.html'
})
export class NotificationsExampleTypeComponent {

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  constructor(
    private readonly notificationService: NotificationsService
  ) {
  }

  standardNotification(): void {
    this.notificationService.standard('Notifica Standard', this.text);
  }

  successNotification(): void {
    this.notificationService.success('Notifica Successo', this.text);
  }

  errorNotification(): void {
    this.notificationService.error('Notifica Errore', this.text);
  }

  warningNotification(): void {
    this.notificationService.warning('Notifica Precauzione', this.text);
  }

  infoNotification(): void {
    this.notificationService.info('Notifica Info', this.text);
  }
}
