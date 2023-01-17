import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsDangerComponent } from './hightlights-danger.component';

describe('HightlightsDangerComponent', () => {
  let component: HightlightsDangerComponent;
  let fixture: ComponentFixture<HightlightsDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightsDangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlightsDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
