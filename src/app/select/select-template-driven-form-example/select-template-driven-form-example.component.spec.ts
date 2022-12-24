import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SelectTemplateDrivenFormExampleComponent } from './select-template-driven-form-example.component';


describe('SelectTemplateDrivenFormExampleComponent', () => {
  let component: SelectTemplateDrivenFormExampleComponent;
  let fixture: ComponentFixture<SelectTemplateDrivenFormExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTemplateDrivenFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTemplateDrivenFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
