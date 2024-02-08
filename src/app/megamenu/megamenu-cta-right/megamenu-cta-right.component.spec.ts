import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuCtaRightComponent } from './megamenu-cta-right.component';

describe('MegamenuCtaRightComponent', () => {
  let component: MegamenuCtaRightComponent;
  let fixture: ComponentFixture<MegamenuCtaRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegamenuCtaRightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MegamenuCtaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
