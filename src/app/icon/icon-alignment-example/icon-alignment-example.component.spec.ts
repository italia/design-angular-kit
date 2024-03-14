import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAlignmentExampleComponent } from './icon-alignment-example.component';

describe('IconAlignmentExampleComponent', () => {
  let component: IconAlignmentExampleComponent;
  let fixture: ComponentFixture<IconAlignmentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconAlignmentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconAlignmentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
