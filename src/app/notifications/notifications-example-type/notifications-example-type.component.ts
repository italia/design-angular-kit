import { Component, inject } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';

@Component({
  selector: 'it-notifications-example-type',
  templateUrl: './notifications-example-type.component.html',
  standalone: false,
})
export class NotificationsExampleTypeComponent {
  private readonly notificationService = inject(ItNotificationService);

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

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
