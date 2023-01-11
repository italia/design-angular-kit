import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DimmerButtonsComponent } from './dimmer-buttons.component';

describe('DimmerButtonsComponent', () => {
  let component: DimmerButtonsComponent;
  let fixture: ComponentFixture<DimmerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerButtonsComponent ]
    })
    .overrideComponent(DimmerButtonsComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerButtonsComponent);
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
