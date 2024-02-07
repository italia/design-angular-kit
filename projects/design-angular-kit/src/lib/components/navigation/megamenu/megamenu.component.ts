import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-megamenu',
  templateUrl: './megamenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItMegamenuComponent {}
