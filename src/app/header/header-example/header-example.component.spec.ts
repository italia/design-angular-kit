import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExampleComponent } from './header-example.component';

describe('HeaderExampleComponent', () => {
  let component: HeaderExampleComponent;
  let fixture: ComponentFixture<HeaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderExampleComponent],
    });
    fixture = TestBed.createComponent(HeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
