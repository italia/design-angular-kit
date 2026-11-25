import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipConfigExampleComponent } from './tooltip-config-example.component';

describe('TooltipConfigExampleComponent', () => {
  let component: TooltipConfigExampleComponent;
  let fixture: ComponentFixture<TooltipConfigExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipConfigExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipConfigExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
