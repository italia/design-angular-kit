import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, booleanAttribute } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItButtonDirective } from '../../../core/button/button.directive';
import { NavBarCollapsible } from 'bootstrap-italia';

@Component({
  selector: 'it-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective],
})
export class ItNavBarComponent implements AfterViewInit {
  @Input({ transform: booleanAttribute }) megamenu?: boolean;
  @Input({ transform: booleanAttribute }) expand?: boolean = true;

  @ViewChild('collapseButton') private collapseButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('collapseView') private collapseView?: ElementRef<HTMLButtonElement>;

  private navbar?: NavBarCollapsible;

  ngAfterViewInit() {
    if (this.collapseButton && this.collapseView?.nativeElement != undefined) {
      setTimeout(() => {
        this.navbar = NavBarCollapsible.getOrCreateInstance(this.collapseView!.nativeElement);
      }, 300);
    }
  }

  get isOpen() {
    return this.navbar?._isShown;
  }

  open() {
    this.navbar?.show(this.collapseButton?.nativeElement);
  }

  close() {
    this.navbar?.hide();
  }

  toggleCollapse() {
    this.navbar?.toggle(this.collapseButton?.nativeElement);
  }
}
