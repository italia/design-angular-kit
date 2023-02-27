import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsIndexComponent } from './notifications-index/notifications-index.component';
import { NotificationsExamplesComponent } from './notifications-examples/notifications-examples.component';
import { NotificationsExampleComponent } from './notifications-example/notifications-example.component';
import { FormsModule } from '@angular/forms';
import { NotificationsSetupComponent } from './notifications-setup/notifications-setup.component';
import { NotificationsExampleTypeComponent } from './notifications-example-type/notifications-example-type.component';


@NgModule({
  declarations: [
    NotificationsIndexComponent,
    NotificationsExamplesComponent,
    NotificationsExampleComponent,
    NotificationsSetupComponent,
    NotificationsExampleTypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotificationsRoutingModule,
    FormsModule
  ]
})
export class NotificationsModule { }
