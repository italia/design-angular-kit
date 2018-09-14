import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenValidationExampleComponent } from './template-driven-validation-example.component';

describe('TemplateDrivenValidationExampleComponent', () => {
  let component: TemplateDrivenValidationExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenValidationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenValidationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
