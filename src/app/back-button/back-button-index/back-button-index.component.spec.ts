import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackButtonIndexComponent } from './back-button-index.component';

describe('BackButtonIndexComponent', () => {
  let component: BackButtonIndexComponent;
  let fixture: ComponentFixture<BackButtonIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
