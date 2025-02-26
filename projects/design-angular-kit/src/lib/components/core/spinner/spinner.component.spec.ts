import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSpinnerComponent } from './spinner.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { inputToBoolean } from '../../../utils/coercion';
import { tb_base } from '../../../../test';

@Component({
  selector: 'it-unit-test',
  template: ` <it-spinner [active]="active" [small]="small"></it-spinner> `,
  standalone: false,
})
class UnitTestComponent {
  @Input({ transform: inputToBoolean }) set active(value: boolean | undefined) {
    this._active = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  private _active: boolean | undefined = undefined;

  @Input() set small(value: boolean | undefined) {
    this._small = value;
  }
  get small(): boolean | undefined {
    return this._small;
  }
  private _small: boolean | undefined = undefined;
}

let component: UnitTestComponent;
let fixture: ComponentFixture<UnitTestComponent>;

describe('ItSpinnerComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [ItSpinnerComponent],
      providers: tb_base.providers,
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dovrebbe avere spinner active', () => {
    component.active = true;
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.progress-spinner-active'));
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner non active', () => {
    component.active = false;
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner'));
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner small non active', () => {
    component.active = false;
    component.small = true;
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.size-sm'));
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner small active', () => {
    component.active = true;
    component.small = true;
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.progress-spinner-active.size-sm'));
    expect(spanElement).toBeTruthy();
  });
});
