import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-avatar-example-colors',
  templateUrl: './avatar-example-colors.component.html',
  styleUrls: ['./avatar-example-colors.component.scss'],
  standalone: false,
})
export class AvatarExampleColorsComponent {}
