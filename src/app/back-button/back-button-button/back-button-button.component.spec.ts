import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonButtonComponent } from './back-button-button.component';

describe('BackButtonButtonComponent', () => {
  let component: BackButtonButtonComponent;
  let fixture: ComponentFixture<BackButtonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
