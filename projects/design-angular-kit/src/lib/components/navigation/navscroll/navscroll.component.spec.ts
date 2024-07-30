import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItNavscrollComponent } from './navscroll.component';

describe('NavscrollComponent', () => {
  let component: ItNavscrollComponent;
  let fixture: ComponentFixture<ItNavscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItNavscrollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItNavscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
