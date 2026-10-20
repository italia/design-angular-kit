import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AlertColor } from '../../../interfaces/core';
import { ItAlertComponent } from './alert.component';

@Component({
  selector: 'it-unit-test',
  template: ` <it-alert [color]="selectedColor" [dismissible]="isDismissible"> Questo è un alert di tipo "<b>primary</b>". </it-alert> `,
  standalone: false,
})
class UnitTestComponent {
  @Input() set selectedColor(value: AlertColor | undefined) {
    this._selectedColor = value;
  }
  get selectedColor(): AlertColor | undefined {
    return this._selectedColor;
  }
  private _selectedColor: AlertColor | undefined = undefined;

  @Input() set isDismissible(value: boolean) {
    this._dismissible = value;
  }
  get isDismissible(): boolean {
    return this._dismissible;
  }

  private _dismissible: boolean = false;
}

@Component({
  selector: 'it-heading-test',
  template: `
    <it-alert color="info">
      <span heading>Attenzione</span>
      Contenuto dell'alert.
    </it-alert>
  `,
  imports: [ItAlertComponent],
})
class HeadingTestComponent {}

let component: UnitTestComponent;
let fixture: ComponentFixture<UnitTestComponent>;
describe('ItAlertComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [ItAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dovrebbe avere colore primary', () => {
    component.selectedColor = 'primary';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.alert.alert-primary'));
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere colore success', () => {
    component.selectedColor = 'success';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.alert.alert-success'));
    expect(spanElement).toBeTruthy();
  });

  it('should hide empty h4.alert-heading when no heading content is projected', () => {
    fixture.detectChanges();
    const h4: HTMLHeadingElement = fixture.nativeElement.querySelector('h4.alert-heading');
    expect(h4).toBeTruthy();
    expect(h4.hidden).toBeTrue();
  });

  it('hidden h4 should not be visible in the DOM flow', () => {
    fixture.detectChanges();
    const h4: HTMLHeadingElement = fixture.nativeElement.querySelector('h4.alert-heading');
    expect(h4.offsetHeight).toBe(0);
  });
});

describe('ItAlertComponent with heading', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingTestComponent, ItAlertComponent],
    }).compileComponents();
  });

  it('should show h4.alert-heading when heading content is projected', () => {
    const f = TestBed.createComponent(HeadingTestComponent);
    f.detectChanges();
    const h4: HTMLHeadingElement = f.nativeElement.querySelector('h4.alert-heading');
    expect(h4).toBeTruthy();
    expect(h4.hidden).toBeFalse();
    expect(h4.textContent?.trim()).toBe('Attenzione');
  });

  it('should preserve alert-heading class when heading is present', () => {
    const f = TestBed.createComponent(HeadingTestComponent);
    f.detectChanges();
    const h4: HTMLHeadingElement = f.nativeElement.querySelector('h4.alert-heading');
    expect(h4.classList.contains('alert-heading')).toBeTrue();
  });
});
