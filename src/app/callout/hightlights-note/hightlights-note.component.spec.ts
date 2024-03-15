import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsNoteComponent } from './hightlights-note.component';

describe('HightlightsNoteComponent', () => {
  let component: HightlightsNoteComponent;
  let fixture: ComponentFixture<HightlightsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HightlightsNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HightlightsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
