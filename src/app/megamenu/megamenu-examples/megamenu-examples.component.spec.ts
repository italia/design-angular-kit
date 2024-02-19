import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuExamplesComponent } from './megamenu-examples.component';

describe('MegamenuExamplesComponent', () => {
  let component: MegamenuExamplesComponent;
  let fixture: ComponentFixture<MegamenuExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegamenuExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MegamenuExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
