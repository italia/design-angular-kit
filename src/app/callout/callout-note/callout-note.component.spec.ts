import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutNoteComponent } from './callout-note.component';

describe('CalloutNoteComponent', () => {
  let component: CalloutNoteComponent;
  let fixture: ComponentFixture<CalloutNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalloutNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalloutNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
