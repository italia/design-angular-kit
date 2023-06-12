import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItDimmerButtonsComponent } from './dimmer-buttons.component';

describe('ItDimmerButtonsComponent', () => {
  let component: ItDimmerButtonsComponent;
  let fixture: ComponentFixture<ItDimmerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ItDimmerButtonsComponent ]
    })
    .overrideComponent(ItDimmerButtonsComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDimmerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add class single-button to buttons div if hasOneButton is true', () => {
    component.hasOneButton = true;
    fixture.detectChanges();
    const divElement = fixture.debugElement.query(By.css('.single-button'));
    expect(divElement).toBeTruthy();
  });
});
