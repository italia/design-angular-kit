import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuCtaBottomComponent } from './megamenu-cta-bottom.component';

describe('MegamenuCtaBottomComponent', () => {
  let component: MegamenuCtaBottomComponent;
  let fixture: ComponentFixture<MegamenuCtaBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegamenuCtaBottomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MegamenuCtaBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
