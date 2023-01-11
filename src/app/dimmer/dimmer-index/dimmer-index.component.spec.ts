import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DimmerIndexComponent } from './dimmer-index.component';

describe('DimmerIndexComponent', () => {
  let component: DimmerIndexComponent;
  let fixture: ComponentFixture<DimmerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimmerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
