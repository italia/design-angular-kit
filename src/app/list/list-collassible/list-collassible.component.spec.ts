import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollassibleComponent } from './list-collassible.component';

describe('ListCollassibleComponent', () => {
  let component: ListCollassibleComponent;
  let fixture: ComponentFixture<ListCollassibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCollassibleComponent]
    });
    fixture = TestBed.createComponent(ListCollassibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
