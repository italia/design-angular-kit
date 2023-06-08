import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormgroupExampleComponent } from './select-formgroup-example.component';

describe('SelectFormgroupExampleComponent', () => {
  let component: SelectFormgroupExampleComponent;
  let fixture: ComponentFixture<SelectFormgroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFormgroupExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFormgroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
