import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItNavBarModule } from '../../navigation/navbar/navbar.module';

import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';
import { HeaderSticky, Sticky } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItButtonDirective, ItNavBarModule]
})
export class ItHeaderComponent extends ItAbstractComponent {

  @Input({ transform: inputToBoolean }) light?: boolean;

  @Input({ transform: inputToBoolean }) sticky?: boolean;

  @Input({ transform: inputToBoolean }) showSlim?: boolean = true;

  @Input({ transform: inputToBoolean }) smallHeader?: boolean = true;

  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

  @Input() slimTitle: string | undefined;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'none';

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  @ViewChild('headerWrapper') private headerWrapper?: ElementRef<HTMLButtonElement>;

  private stickyHeader?: HeaderSticky;


  constructor() {
    super();

    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.updateListeners()
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['sticky'] && changes['sticky'].currentValue == true && !changes['sticky'].firstChange) {
      this.updateListeners();
    }
    if (changes['sticky'] && changes['sticky'].currentValue == false){
      this.stickyHeader?._elementObj?._unsetSticky();
      this.stickyHeader?._elementObj?.dispose()
      delete this.stickyHeader;
      this.stickyHeader = undefined;
    }
    super.ngOnChanges(changes);
  }

  updateListeners() {
    if (!this.stickyHeader && this.headerWrapper && this.sticky) {
      this.stickyHeader = new HeaderSticky(this.headerWrapper.nativeElement);
    }
  }

}
