import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExampleComponent } from './icon-example.component';

describe('IconExampleComponent', () => {
  let component: IconExampleComponent;
  let fixture: ComponentFixture<IconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
