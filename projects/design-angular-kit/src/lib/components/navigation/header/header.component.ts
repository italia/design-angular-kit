import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItNavBarModule } from '../navbar/navbar.module';
import { ItNavBarComponent } from '../navbar/navbar/navbar.component';

import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';
import { HeaderSticky } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective, ItNavBarModule],
})
export class ItHeaderComponent implements AfterViewInit, OnChanges {
  @Input({ transform: inputToBoolean }) light?: boolean;

  @Input({ transform: inputToBoolean }) sticky?: boolean;

  @Input({ transform: inputToBoolean }) showSlim?: boolean = true;

  @Input({ transform: inputToBoolean }) smallHeader?: boolean = true;

  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

  @Input() idCollapsable: string = 'menuCollapsable';

  @Input() slimTitle: string | undefined;
  @Input() slimTitleLink: string | undefined = '#';

  @Input() loginStyle: 'none' | 'default' | 'full' = 'none';

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  @ViewChild('headerWrapper') private headerWrapper?: ElementRef<HTMLButtonElement>;

  @ViewChild(ItNavBarComponent) private itNavBarComponent?: ItNavBarComponent;

  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  private stickyHeader?: HeaderSticky;

  constructor() {
    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  ngAfterViewInit() {
    this.updateListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sticky'] && changes['sticky'].currentValue == true && !changes['sticky'].firstChange) {
      this.updateListeners();
    }
    if (changes['sticky'] && changes['sticky'].currentValue == false) {
      this.stickyHeader?._elementObj?._unsetSticky();
      this.stickyHeader?._elementObj?.dispose();
      delete this.stickyHeader;
      this.stickyHeader = undefined;
    }
  }

  updateListeners() {
    if (!this.stickyHeader && this.headerWrapper?.nativeElement != undefined && this.sticky) {
      setTimeout(() => {
        this.stickyHeader = new HeaderSticky(this.headerWrapper!.nativeElement);
      }, 300);
    }
  }

  openNavBar() {
    this.itNavBarComponent?.open();
  }

  closeNavBar() {
    this.itNavBarComponent?.close();
  }

  protected emitLoginClick(event: Event): void {
    event.preventDefault();
    this.loginClick.emit(event);
  }

  protected emitSearchClick(event: Event): void {
    event.preventDefault();
    this.searchClick.emit(event);
  }

  toggleCollapse() {
    this.itNavBarComponent?.toggleCollapse();
  }
}
