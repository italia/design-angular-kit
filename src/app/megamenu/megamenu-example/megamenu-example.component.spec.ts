import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuExampleComponent } from './megamenu-example.component';

describe('MegamenuExampleComponent', () => {
  let component: MegamenuExampleComponent;
  let fixture: ComponentFixture<MegamenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegamenuExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MegamenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
