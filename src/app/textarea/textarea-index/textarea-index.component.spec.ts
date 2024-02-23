import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaIndexComponent } from './textarea-index.component';

describe('TextareaIndexComponent', () => {
  let component: TextareaIndexComponent;
  let fixture: ComponentFixture<TextareaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
