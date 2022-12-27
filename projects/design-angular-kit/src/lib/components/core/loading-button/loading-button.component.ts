import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'it-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent extends ButtonComponent {

  /**
   * If button is loading
   */
  @Input() isLoading?: boolean;

}
