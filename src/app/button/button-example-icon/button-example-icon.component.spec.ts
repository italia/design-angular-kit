import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonExampleIconComponent } from './button-example-icon.component';

describe('ButtonExampleComponent', () => {
  let component: ButtonExampleIconComponent;
  let fixture: ComponentFixture<ButtonExampleIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
