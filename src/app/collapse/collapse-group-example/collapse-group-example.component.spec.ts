import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseGroupExampleComponent } from './collapse-group-example.component';

describe('CollapseGroupExampleComponent', () => {
  let component: CollapseGroupExampleComponent;
  let fixture: ComponentFixture<CollapseGroupExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapseGroupExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
