import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAutocompleteComponent } from './autocomplete.component';
import { tb_base } from '../../../../test';

describe('ItAutocompleteComponent', () => {
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

  it('should render label with id matching id-label pattern when label is provided', () => {
    fixture.componentRef.setInput('label', 'Categoria');
    fixture.detectChanges();
    const labelEl = (fixture.nativeElement as HTMLElement).querySelector('label');
    expect(labelEl).toBeTruthy();
    expect(labelEl?.id).toBe(`${component.id}-label`);
    expect(labelEl?.textContent?.trim()).toBe('Categoria');
  });

  it('should NOT render label element when label is not provided', () => {
    fixture.componentRef.setInput('label', undefined);
    fixture.detectChanges();
    const labelEl = (fixture.nativeElement as HTMLElement).querySelector('label');
    expect(labelEl).toBeNull();
  });
  
  it('should clear visual input value when writeValue receives null', () => {
    // Simulate the internal _inputEl being set (as _findInput does after DOM init)
    const fakeInput = document.createElement('input');
    fakeInput.value = 'Roma';
    (component as any)._inputEl = fakeInput;

    component.writeValue(null);
    expect(fakeInput.value).toBe('');
  });

  it('should clear visual input value when writeValue receives empty string', () => {
    const fakeInput = document.createElement('input');
    fakeInput.value = 'Milano';
    (component as any)._inputEl = fakeInput;

    component.writeValue('');
    expect(fakeInput.value).toBe('');
  });

  it('should NOT clear visual input value when writeValue receives a non-empty string', () => {
    const fakeInput = document.createElement('input');
    fakeInput.value = 'Torino';
    (component as any)._inputEl = fakeInput;

    component.writeValue('Napoli');
    expect(fakeInput.value).toBe('Torino');
  });
});
