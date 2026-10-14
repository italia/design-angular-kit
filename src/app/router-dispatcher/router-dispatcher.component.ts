import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-router-dispatcher',
  templateUrl: './router-dispatcher.component.html',
  styleUrls: ['./router-dispatcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RouterDispatcherComponent {
  constructor() {}
}
