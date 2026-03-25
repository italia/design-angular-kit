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
  selector: 'it-unit-test-with-heading',
  template: `
    <it-alert [color]="'info'">
      <span heading>Titolo di test</span>
      Contenuto dell'alert.
    </it-alert>
  `,
  standalone: false,
})
class UnitTestWithHeadingComponent {}

@Component({
  selector: 'it-unit-test-without-heading',
  template: ` <it-alert [color]="'warning'"> Alert senza heading. </it-alert> `,
  standalone: false,
})
class UnitTestWithoutHeadingComponent {}

let component: UnitTestComponent;
let fixture: ComponentFixture<UnitTestComponent>;
describe('ItAlertComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent, UnitTestWithHeadingComponent, UnitTestWithoutHeadingComponent],
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

  describe('Bug #547 — empty h4 heading', () => {
    it('should hide the h4 element when no heading content is projected', () => {
      const noHeadingFixture = TestBed.createComponent(UnitTestWithoutHeadingComponent);
      noHeadingFixture.detectChanges();

      const h4 = noHeadingFixture.debugElement.query(By.css('h4.alert-heading'));
      expect(h4).toBeTruthy('h4 element should exist in DOM');
      expect(h4.nativeElement.classList.contains('d-none')).toBeTrue();
    });

    it('should mark empty heading as aria-hidden for screen readers', () => {
      const noHeadingFixture = TestBed.createComponent(UnitTestWithoutHeadingComponent);
      noHeadingFixture.detectChanges();

      const h4 = noHeadingFixture.debugElement.query(By.css('h4.alert-heading'));
      expect(h4.nativeElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('should show the h4 element when heading content is projected', () => {
      const withHeadingFixture = TestBed.createComponent(UnitTestWithHeadingComponent);
      withHeadingFixture.detectChanges();

      const h4 = withHeadingFixture.debugElement.query(By.css('h4.alert-heading'));
      expect(h4).toBeTruthy('h4 element should exist in DOM');
      expect(h4.nativeElement.classList.contains('d-none')).toBeFalse();
    });

    it('should not mark visible heading as aria-hidden', () => {
      const withHeadingFixture = TestBed.createComponent(UnitTestWithHeadingComponent);
      withHeadingFixture.detectChanges();

      const h4 = withHeadingFixture.debugElement.query(By.css('h4.alert-heading'));
      expect(h4.nativeElement.getAttribute('aria-hidden')).toBe('false');
    });

    it('should have visible heading text when heading is projected', () => {
      const withHeadingFixture = TestBed.createComponent(UnitTestWithHeadingComponent);
      withHeadingFixture.detectChanges();

      const h4 = withHeadingFixture.debugElement.query(By.css('h4.alert-heading'));
      expect(h4.nativeElement.textContent.trim()).toBe('Titolo di test');
    });
  });
});
