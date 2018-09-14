import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseExampleComponent } from './collapse-example.component';

describe('CollapseExampleComponent', () => {
  let component: CollapseExampleComponent;
  let fixture: ComponentFixture<CollapseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
