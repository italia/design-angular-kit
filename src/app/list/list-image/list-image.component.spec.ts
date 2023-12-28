import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImageComponent } from './list-image.component';

describe('ListImageComponent', () => {
  let component: ListImageComponent;
  let fixture: ComponentFixture<ListImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListImageComponent]
    });
    fixture = TestBed.createComponent(ListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
