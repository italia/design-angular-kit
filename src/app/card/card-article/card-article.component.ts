import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardArticleComponent {}
