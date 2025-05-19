import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';

@Component({
  standalone: true,
  selector: 'it-footer',
  templateUrl: './footer.component.html',
  exportAs: 'itFooter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItFooterComponent extends ItAbstractComponent implements AfterViewInit {}
