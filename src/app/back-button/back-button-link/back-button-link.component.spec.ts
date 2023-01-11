import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackButtonLinkComponent } from './back-button-link.component';

describe('BackButtonLinkComponent', () => {
  let component: BackButtonLinkComponent;
  let fixture: ComponentFixture<BackButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
