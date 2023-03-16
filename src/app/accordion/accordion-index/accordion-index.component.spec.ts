import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionIndexComponent } from './accordion-index.component';

describe('AccordionIndexComponent', () => {
  let component: AccordionIndexComponent;
  let fixture: ComponentFixture<AccordionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
