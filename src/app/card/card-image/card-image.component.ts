import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardImageComponent {}
