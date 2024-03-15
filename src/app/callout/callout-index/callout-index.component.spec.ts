import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalloutIndexComponent } from './callout-index.component';

describe('CalloutIndexComponent', () => {
  let component: CalloutIndexComponent;
  let fixture: ComponentFixture<CalloutIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalloutIndexComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
