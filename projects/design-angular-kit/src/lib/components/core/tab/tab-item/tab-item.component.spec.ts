import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTabItemComponent } from './tab-item.component';

describe('ItTabItemComponent', () => {
  let component: ItTabItemComponent;
  let fixture: ComponentFixture<ItTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTabItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
