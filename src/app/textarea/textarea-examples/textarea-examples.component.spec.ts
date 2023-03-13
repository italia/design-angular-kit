import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExamplesComponent } from './textarea-examples.component';

describe('TextareaExamplesComponent', () => {
  let component: TextareaExamplesComponent;
  let fixture: ComponentFixture<TextareaExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
