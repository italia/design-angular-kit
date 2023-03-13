import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-textarea-index',
  templateUrl: './textarea-index.component.html'
})
export class TextareaIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'TextareaComponent');
  }
}
