import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalloutExampleComponent } from './callout-example.component';

describe('CalloutExampleComponent', () => {
  let component: CalloutExampleComponent;
  let fixture: ComponentFixture<CalloutExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
