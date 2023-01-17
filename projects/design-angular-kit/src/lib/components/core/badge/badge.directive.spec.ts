import { Component, Input } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeColor } from '../../../interfaces/core';
import { BadgeDirective } from './badge.directive';

@Component(
  {
    selector: 'it-unit-test',
    template: `
      <h5>Testo di esempio <span [itBadge]="selectedColor" [rounded]="isRounded">{{badgeText}}</span></h5>
    `
  }
)
class UnitTestComponent {
  @Input() set selectedColor(value: BadgeColor | undefined) {this._selectedColor = value;}
  get selectedColor(): BadgeColor | undefined {return this._selectedColor;}
  private _selectedColor: BadgeColor | undefined = undefined;

  @Input() set isRounded(value: boolean) {this._isRounded = value;}
  get isRounded(): boolean {return this._isRounded;}
  private _isRounded: boolean = undefined;
}

describe('BadgeDirective', () => {

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent, BadgeDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = new BadgeDirective();
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
