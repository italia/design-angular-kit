import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsImportantComponent } from './hightlights-important.component';

describe('HightlightsImportantComponent', () => {
  let component: HightlightsImportantComponent;
  let fixture: ComponentFixture<HightlightsImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightsImportantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlightsImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
