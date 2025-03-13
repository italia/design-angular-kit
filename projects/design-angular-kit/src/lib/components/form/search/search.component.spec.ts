import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSearchComponent } from './search.component';
import { tb_base } from '../../../../test';

describe('SearchComponent', () => {
  let component: ItSearchComponent;
  let fixture: ComponentFixture<ItSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
