import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsExampleComponent } from './chips-example.component';

describe('ChipsExampleComponent', () => {
  let component: ChipsExampleComponent;
  let fixture: ComponentFixture<ChipsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
