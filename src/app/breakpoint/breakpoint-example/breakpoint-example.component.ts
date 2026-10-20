import { Component, inject } from '@angular/core';
import { ItBreakpointService } from 'design-angular-kit/services/breakpoint.service';

@Component({
  selector: 'it-breakpoint-example',
  templateUrl: './breakpoint-example.component.html',
  standalone: false,
})
export class BreakpointExampleComponent {
  private readonly breakpointService = inject(ItBreakpointService);

  currentBreakpoint = this.breakpointService.currentBreakpoint;
  currentMinWidth = this.breakpointService.currentMinWidth;
  isDesktop = this.breakpointService.isAbove('lg');
  isMobile = this.breakpointService.isBelow('md');
}
