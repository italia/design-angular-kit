import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeColor } from '../../../interfaces/core';
import { ItBadgeDirective } from './badge.directive';

@Component({
  selector: 'it-unit-test',
  template: `
    <h5>
      Testo di esempio <span [itBadge]="selectedColor" [rounded]="isRounded">{{ badgeText }}</span>
    </h5>
  `,
  standalone: false,
})
class UnitTestComponent {
  // Aggiungi questa proprietà mancante
  badgeText = 'Badge Test';

  @Input() set selectedColor(value: BadgeColor | undefined) {
    this._selectedColor = value;
  }
  get selectedColor(): BadgeColor | undefined {
    return this._selectedColor;
  }
  private _selectedColor: BadgeColor | undefined;

  @Input() set isRounded(value: boolean) {
    this._isRounded = value;
  }
  get isRounded(): boolean {
    return this._isRounded;
  }
  private _isRounded: boolean = false;
}

describe('ItBadgeDirective', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [ItBadgeDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new ItBadgeDirective();
    expect(directive).toBeTruthy();
  });

  it('can have color primary and be rounded', () => {
    component.isRounded = true;
    component.selectedColor = 'primary';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('.badge.rounded-pill.bg-primary'));
    expect(spanElement).toBeTruthy();
  });
});
