import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-special',
  templateUrl: './card-special.component.html',
  styleUrls: ['./card-special.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardSpecialComponent {}
