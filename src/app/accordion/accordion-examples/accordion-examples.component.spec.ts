import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExamplesComponent } from './accordion-examples.component';

describe('AccordionExamplesComponent', () => {
  let component: AccordionExamplesComponent;
  let fixture: ComponentFixture<AccordionExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
