import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-avatar-example-dropdown',
  templateUrl: './avatar-example-dropdown.component.html',
  styleUrls: ['./avatar-example-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AvatarExampleDropdownComponent {
  constructor() {}
}
