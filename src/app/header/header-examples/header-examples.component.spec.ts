import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExamplesComponent } from './header-examples.component';

describe('HeaderExamplesComponent', () => {
  let component: HeaderExamplesComponent;
  let fixture: ComponentFixture<HeaderExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderExamplesComponent],
    });
    fixture = TestBed.createComponent(HeaderExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
