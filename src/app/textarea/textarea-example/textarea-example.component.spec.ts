import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExampleComponent } from './textarea-example.component';

describe('TextareaExampleComponent', () => {
  let component: TextareaExampleComponent;
  let fixture: ComponentFixture<TextareaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
