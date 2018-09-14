import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseIndexComponent } from './collapse-index.component';

describe('CollapseIndexComponent', () => {
  let component: CollapseIndexComponent;
  let fixture: ComponentFixture<CollapseIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
