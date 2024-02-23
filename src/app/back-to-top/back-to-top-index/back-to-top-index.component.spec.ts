import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackToTopIndexComponent } from './back-to-top-index.component';

describe('BackToTopIndexComponent', () => {
  let component: BackToTopIndexComponent;
  let fixture: ComponentFixture<BackToTopIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToTopIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackToTopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
