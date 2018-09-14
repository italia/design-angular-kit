import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenValidationExampleComponent } from './model-driven-validation-example.component';

describe('ModelDrivenValidationExampleComponent', () => {
  let component: ModelDrivenValidationExampleComponent;
  let fixture: ComponentFixture<ModelDrivenValidationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenValidationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
