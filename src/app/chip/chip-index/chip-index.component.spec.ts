import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipIndexComponent } from './chip-index.component';

describe('ChipIndexComponent', () => {
  let component: ChipIndexComponent;
  let fixture: ComponentFixture<ChipIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
