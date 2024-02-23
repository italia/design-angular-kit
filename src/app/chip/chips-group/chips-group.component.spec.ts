import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsGroupComponent } from './chips-group.component';

describe('ChipsGroupComponent', () => {
  let component: ChipsGroupComponent;
  let fixture: ComponentFixture<ChipsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
