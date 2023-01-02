import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DimmerComponent } from './dimmer.component';

describe('DimmerComponent', () => {
  let component: DimmerComponent;
  let fixture: ComponentFixture<DimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmerComponent ]
    })
    .overrideComponent(DimmerComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be inactive by default', () => {
    const showElement = fixture.debugElement.query(By.css('.dimmer.show'));
    expect(showElement).toBeFalsy();
  });

  it('should be active', () => {
    component.active = true;
    fixture.detectChanges();
    const showElement = fixture.debugElement.query(By.css('.dimmer.show'));
    expect(showElement).toBeTruthy();
  });

  it('Can have primary color', () => {
    component.color = 'dimmer-primary';
    fixture.detectChanges();
    const dimmerPrimaryElement = fixture.debugElement.query(By.css('.dimmer.dimmer-primary'));
    expect(dimmerPrimaryElement).toBeTruthy();
  });

  it('Can have a title', () => {
    component.title = 'title';
    fixture.detectChanges();
    const h4Element = fixture.debugElement.query(By.css('.dimmer-inner h4'));
    expect(h4Element.nativeElement.textContent.trim()).toBe('title');
  });

  it('Can have a text', () => {
    component.text = 'text';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('.dimmer-inner p'));
    expect(pElement.nativeElement.textContent.trim()).toBe('text');
  });

  it('add class single-button to buttons div if hasOneButton is true', () => {
    component.hasOneButton = true;
    fixture.detectChanges();
    const divElement = fixture.debugElement.query(By.css('.single-button'));
    expect(divElement).toBeTruthy();
  });
});
