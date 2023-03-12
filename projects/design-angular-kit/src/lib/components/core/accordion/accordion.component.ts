import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CollapseComponent } from '../collapse/collapse.component';

@Component({
  selector: 'it-accordion[title]',
  templateUrl: './accordion.component.html',
  exportAs: 'itAccordion',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent extends CollapseComponent {

  /**
   * Accordion Title
   */
  @Input() title!: string;

  isCollapsed: boolean = true;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    this.isCollapsed = !this.isOpenedOnStart;
    this.onHide.subscribe(() => {
      this.isCollapsed = true;
      this._changeDetectorRef.detectChanges();
    });
    this.onShow.subscribe(() => {
      this.isCollapsed = false;
      this._changeDetectorRef.detectChanges();
    });
  }

}
