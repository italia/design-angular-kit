import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-select-template-driven-form-example',
  templateUrl: './select-template-driven-form-example.component.html',
  styleUrls: ['./select-template-driven-form-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTemplateDrivenFormExampleComponent {
  selectValue = '2';
}
