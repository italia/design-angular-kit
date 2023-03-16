import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponentExampleComponent } from './accordion-component-example.component';

describe('AccordionComponentExampleComponent', () => {
  let component: AccordionComponentExampleComponent;
  let fixture: ComponentFixture<AccordionComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
