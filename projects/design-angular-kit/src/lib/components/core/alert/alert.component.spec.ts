import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAlertComponent } from './alert.component';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { AlertColor } from '../../../interfaces/core';

@Component({
  selector: 'it-unit-test',
  template: ` <it-alert [color]="selectedColor" [dismissible]="isDismissible"> Questo è un alert di tipo "<b>primary</b>". </it-alert> `,
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
    fixture.detectChanges();
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
});
