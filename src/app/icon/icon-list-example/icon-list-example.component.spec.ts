import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListExampleComponent } from './icon-list-example.component';

describe('IconListExampleComponent', () => {
  let component: IconListExampleComponent;
  let fixture: ComponentFixture<IconListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconListExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
