import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss'],
  standalone: false,
})
export class CardBigComponent {}
