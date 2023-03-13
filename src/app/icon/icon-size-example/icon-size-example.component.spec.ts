import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSizeExampleComponent } from './icon-size-example.component';

describe('IconSizeExampleComponent', () => {
  let component: IconSizeExampleComponent;
  let fixture: ComponentFixture<IconSizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSizeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
