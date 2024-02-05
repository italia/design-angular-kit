import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ItCollapseComponent } from '../collapse/collapse.component';

/**
 * Accordion
 * @description Build vertically collapsible accordions based on Collapse.
 */
@Component({
  standalone: true,
  selector: 'it-accordion',
  templateUrl: './accordion.component.html',
  exportAs: 'itAccordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItAccordionComponent extends ItCollapseComponent implements AfterViewInit {
  /**
   * Accordion Title
   */
  @Input({ required: true }) title!: string;

  @ViewChild('collapse') protected override collapseDiv?: ElementRef<HTMLDivElement>;

  protected isCollapsed: boolean = true;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    this.isCollapsed = !this.opened;
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
