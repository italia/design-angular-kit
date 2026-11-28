import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-teaser',
  templateUrl: './card-teaser.component.html',
  styleUrls: ['./card-teaser.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardTeaserComponent {}
