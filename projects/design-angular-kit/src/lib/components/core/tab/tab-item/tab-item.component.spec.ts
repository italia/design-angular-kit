import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemComponent } from './tab-item.component';

describe('TabItemComponent', () => {
  let component: TabItemComponent;
  let fixture: ComponentFixture<TabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
