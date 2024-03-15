import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';
@Component({
  selector: 'it-notifications-index',
  templateUrl: './notifications-index.component.html',
})
export class NotificationsIndexComponent {
  component: any;
  service: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItNotificationsComponent');
    this.service = (<any>Documentation).injectables.find(injectable => injectable.name === 'ItNotificationService');
  }
}
