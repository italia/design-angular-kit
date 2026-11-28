import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-card-cta',
  templateUrl: './card-cta.component.html',
  styleUrls: ['./card-cta.component.scss'],
  standalone: false,
})
export class CardCtaComponent {}
