import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDispatcherComponent } from './router-dispatcher.component';

describe('RouterDispatcherComponent', () => {
  let component: RouterDispatcherComponent;
  let fixture: ComponentFixture<RouterDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterDispatcherComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
