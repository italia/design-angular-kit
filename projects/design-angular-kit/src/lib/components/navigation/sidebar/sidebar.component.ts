import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSidebarComponent {
  /**
   * Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere la classe
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.it-line-right-side')
  public withRightLine = false;

  /**
   * Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere la classe
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.it-line-left-side')
  public withLeftLine = false;

  /**
   * Per cambiare il tema della sidebar e renderla scura
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.theme-dark')
  public dark = false;

  /**
   * L'intestazione della sidebar
   */
  @Input() public header?: string;

  @HostBinding('class') componentClass = 'd-block sidebar-wrapper';
}
