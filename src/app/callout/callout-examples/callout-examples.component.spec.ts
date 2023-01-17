import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalloutExamplesComponent } from './callout-examples.component';

describe('CalloutExamplesComponent', () => {
  let component: CalloutExamplesComponent;
  let fixture: ComponentFixture<CalloutExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
