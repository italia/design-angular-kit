import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-notifications-index',
  templateUrl: './notifications-index.component.html',
  standalone: false,
})
export class NotificationsIndexComponent {
  component: any;
  service: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItNotificationsComponent');
    this.service = (<any>Documentation).injectables.find((injectable: any) => injectable.name === 'ItNotificationService');
  }
}
