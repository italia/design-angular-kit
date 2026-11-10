import { ChangeDetectionStrategy, Component, HostBinding, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'it-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSidebarComponent {
  /**
   * Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere la classe
   */
  @Input({ transform: booleanAttribute })
  @HostBinding('class.it-line-right-side')
  public withRightLine = false;

  /**
   * Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere la classe
   */
  @Input({ transform: booleanAttribute })
  @HostBinding('class.it-line-left-side')
  public withLeftLine = false;

  /**
   * Per cambiare il tema della sidebar e renderla scura
   */
  @Input({ transform: booleanAttribute })
  @HostBinding('class.theme-dark')
  public dark = false;

  /**
   * L'intestazione della sidebar
   */
  @Input() public header?: string;

  @HostBinding('class') componentClass = 'd-block sidebar-wrapper';
}
