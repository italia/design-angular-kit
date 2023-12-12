import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconIndexComponent } from './icon-index.component';

describe('IconIndexComponent', () => {
  let component: IconIndexComponent;
  let fixture: ComponentFixture<IconIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
