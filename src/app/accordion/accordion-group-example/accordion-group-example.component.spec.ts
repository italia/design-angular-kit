import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroupExampleComponent } from './accordion-group-example.component';

describe('AccordionGroupExampleComponent', () => {
  let component: AccordionGroupExampleComponent;
  let fixture: ComponentFixture<AccordionGroupExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
