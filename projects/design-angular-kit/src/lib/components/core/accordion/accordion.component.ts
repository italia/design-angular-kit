import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CollapseComponent } from '../collapse/collapse.component';

/**
 * Accordion
 * @description Build vertically collapsible accordions based on Collapse.
 */
@Component({
  selector: 'it-accordion[title]',
  templateUrl: './accordion.component.html',
  exportAs: 'itAccordion',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent extends CollapseComponent implements AfterViewInit {

  /**
   * Accordion Title
   */
  @Input() title!: string;

  protected isCollapsed: boolean = true;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    this.isCollapsed = !this.isOpenedOnStart;
    this.hideEvent.subscribe(() => {
      this.isCollapsed = true;
      this._changeDetectorRef.detectChanges();
    });
    this.showEvent.subscribe(() => {
      this.isCollapsed = false;
      this._changeDetectorRef.detectChanges();
    });
  }

}
