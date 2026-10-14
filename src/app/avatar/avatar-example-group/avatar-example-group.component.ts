import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-avatar-example-group',
  templateUrl: './avatar-example-group.component.html',
  styleUrls: ['./avatar-example-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AvatarExampleGroupComponent {
  constructor() {}
}
