import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconColorExampleComponent } from './icon-color-example.component';

describe('IconColorExampleComponent', () => {
  let component: IconColorExampleComponent;
  let fixture: ComponentFixture<IconColorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconColorExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconColorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
