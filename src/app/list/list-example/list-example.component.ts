import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ListExampleComponent {}
