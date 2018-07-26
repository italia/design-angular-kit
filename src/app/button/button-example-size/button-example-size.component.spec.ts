import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleSizeComponent } from './button-example-size.component';

describe('ButtonExampleSizeComponent', () => {
  let component: ButtonExampleSizeComponent;
  let fixture: ComponentFixture<ButtonExampleSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
