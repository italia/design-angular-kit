import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAutocompleteComponent } from './autocomplete.component';
import { tb_base } from '../../../../test';

describe('ItTextareaComponent', () => {
  let component: ItAutocompleteComponent;
  let fixture: ComponentFixture<ItAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
