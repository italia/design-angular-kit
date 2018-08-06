import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsExamplesComponent } from './tabs-examples.component';

describe('TabsExamplesComponent', () => {
  let component: TabsExamplesComponent;
  let fixture: ComponentFixture<TabsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
