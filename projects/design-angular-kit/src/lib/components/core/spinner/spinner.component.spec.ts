import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSpinnerComponent } from './spinner.component';
import { Component, Input } from '@angular/core';
import { BooleanInput } from '../../../utils/boolean-input';
import { By } from '@angular/platform-browser';
import { TranslateModule,} from '@ngx-translate/core';

@Component(
  {
    selector: 'it-unit-test',
    template: `
      <it-spinner  [active]="active" [small]="small"></it-spinner>
    `
  }
)
class UnitTestComponent {
  @Input() set active(value: BooleanInput | undefined) {this._active = value;}
  get active(): BooleanInput | undefined {return this._active;}
  private _active: BooleanInput | undefined = undefined;

  @Input() set small(value: BooleanInput | undefined) {this._small = value;}
  get small(): BooleanInput | undefined {return this._small;}
  private _small: BooleanInput | undefined = undefined;

}

let component: UnitTestComponent;
let fixture: ComponentFixture<UnitTestComponent>;

describe('ItSpinnerComponent', () => {  

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [ItSpinnerComponent, TranslateModule.forRoot(),],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('Dovrebbe avere spinner active', () => {
    component.active='true';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.progress-spinner-active'));    
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner non active', () => {
    component.active='false';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner'));    
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner small non active', () => {
    component.active='false';
    component.small='true';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.size-sm'));    
    expect(spanElement).toBeTruthy();
  });

  it('Dovrebbe avere spinner small active', () => {
    component.active='true';
    component.small='true';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('div.progress-spinner.progress-spinner-active.size-sm'));    
    expect(spanElement).toBeTruthy();
  });
});
