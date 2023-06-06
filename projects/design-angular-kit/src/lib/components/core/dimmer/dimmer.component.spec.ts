import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItDimmerComponent } from './dimmer.component';

describe('ItDimmerComponent', () => {
  let component: ItDimmerComponent;
  let fixture: ComponentFixture<ItDimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDimmerComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .overrideComponent(ItDimmerComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be inactive by default', () => {
    const showElement = fixture.debugElement.query(By.css('.dimmer'));
    expect(showElement).toBeFalsy();
  });

  it('should be active', () => {
    component.active = true;
    fixture.detectChanges();
    const showElement = fixture.debugElement.query(By.css('.dimmer'));
    expect(showElement).toBeTruthy();
  });

  it('Can have primary color', () => {
    component.color = 'dimmer-primary';
    component.active = true;
    fixture.detectChanges();
    const dimmerPrimaryElement = fixture.debugElement.query(By.css('.dimmer.dimmer-primary'));
    expect(dimmerPrimaryElement).toBeTruthy();
  });
});
