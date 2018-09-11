import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/**
 * Componente per testare una input di tipo text.
 * */
@Component({
  template: `
  <div>
    <it-input type="text" [(ngModel)]="value"></it-input>
  </div>`
})
class TextInputComponent {
  value = '';
}


/**
 * Componente per testare una input di tipo number.
 */
@Component({
  template: `
  <div>
    <it-input type="number" [(ngModel)]="value"></it-input>
  </div>`
})
class NumberInputComponent {
  value = '';
}

/**
 * Componente per testare una input di tipo password.
 */
@Component({
  template: `
  <div>
    <it-input type="password" [(ngModel)]="value"></it-input>
  </div>`
})
class PasswordInputComponent {
  value = '';
}

/**
 * Componente per testare una input di tipo search.
 */
@Component({
  template: `
  <div>
    <it-input type="search" [(ngModel)]="value" [autoCompleteData]="autoCompleteData"></it-input>
  </div>`
})
class SearchInputComponent {
  value = '';
  autoCompleteData = ['prova'];
}

function sendInput(fixture: ComponentFixture<any>, element: HTMLInputElement, text: string) {
  element.value = text;
  element.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  return fixture.whenStable();
}

describe('FormInputComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        FormInputComponent,
        TextInputComponent,
        NumberInputComponent,
        PasswordInputComponent,
        SearchInputComponent
      ]
    })
    .compileComponents();
  }));

  describe('comportamenti base con type text', () => {
    let fixture: ComponentFixture<TextInputComponent>;
    let inputDebugElement: DebugElement;
    let inputNativeElement: HTMLElement;
    let inputInstance: FormInputComponent;
    let testComponent: TextInputComponent;
    let inputElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TextInputComponent);
      fixture.detectChanges();

      inputDebugElement = fixture.debugElement.query(By.directive(FormInputComponent));
      inputNativeElement = inputDebugElement.nativeElement;
      inputInstance = inputDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>inputNativeElement.querySelector('input');
      labelElement = <HTMLLabelElement>inputNativeElement.querySelector('label');
    });

    it('dovrebbe modificare il testo della input', () => {
      const defaultText = '';
      expect(inputInstance.value).toBe(defaultText);
      expect(testComponent.value).toBe(defaultText);
      expect(inputElement.value).toBe(defaultText);

      const newText = 'unit test';
      sendInput(fixture, inputElement, newText);

      expect(inputInstance.value).toBe(newText);
      expect(testComponent.value).toBe(newText);
      expect(inputElement.value).toBe(newText);
    });

    it('dovrebbe avere il suo NgModel con gli stati pristine, untouched, e valid all\'inizio', fakeAsync(() => {
      flush();

      const ngModel = inputDebugElement.injector.get<NgModel>(NgModel);

      expect(ngModel.valid).toBe(true);
      expect(ngModel.pristine).toBe(true);
      expect(ngModel.untouched).toBe(true);
    }));
  });

  describe('comportamenti base con type number', () => {
    let fixture: ComponentFixture<NumberInputComponent>;
    let inputDebugElement: DebugElement;
    let inputNativeElement: HTMLElement;
    let inputInstance: FormInputComponent;
    let testComponent: NumberInputComponent;
    let inputElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(NumberInputComponent);
      fixture.detectChanges();

      inputDebugElement = fixture.debugElement.query(By.directive(FormInputComponent));
      inputNativeElement = inputDebugElement.nativeElement;
      inputInstance = inputDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>inputNativeElement.querySelector('input');
      labelElement = <HTMLLabelElement>inputNativeElement.querySelector('label');
    });

    it('dovrebbe accettare un valore numerico per la input', () => {
      const defaultText = '';
      expect(inputInstance.value).toBe(defaultText);
      expect(testComponent.value).toBe(defaultText);
      expect(inputElement.value).toBe(defaultText);

      const newNumber = '-12e10';
      sendInput(fixture, inputElement, newNumber);

      expect(inputInstance.value).toBe(newNumber);
      expect(testComponent.value).toBe(newNumber);
      expect(inputElement.value).toBe(newNumber);
    });

    it('dovrebbe rifiutare un valore non numerico per la input', () => {
      const defaultText = '';
      expect(inputInstance.value).toBe(defaultText);
      expect(testComponent.value).toBe(defaultText);
      expect(inputElement.value).toBe(defaultText);

      const newNumber = '-12e10e';
      sendInput(fixture, inputElement, newNumber);

      expect(inputInstance.value).toBe(defaultText);
      expect(testComponent.value).toBe(defaultText);
      expect(inputElement.value).toBe(defaultText);
    });
  });

  describe('comportamenti base con type password', () => {
    let fixture: ComponentFixture<PasswordInputComponent>;
    let inputDebugElement: DebugElement;
    let inputNativeElement: HTMLElement;
    let inputInstance: FormInputComponent;
    let testComponent: PasswordInputComponent;
    let inputElement: HTMLInputElement;
    let spanElement: HTMLSpanElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(PasswordInputComponent);
      fixture.detectChanges();

      inputDebugElement = fixture.debugElement.query(By.directive(FormInputComponent));
      inputNativeElement = inputDebugElement.nativeElement;
      inputInstance = inputDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>inputNativeElement.querySelector('input');
      spanElement = <HTMLLabelElement>inputNativeElement.querySelector('span');
    });

    it('dovrebbe poter nascondere/mostrare la password', () => {
      expect(inputElement.type).toBe('password');

      spanElement.click();
      fixture.detectChanges();

      expect(inputElement.type).toBe('text');

      spanElement.click();
      fixture.detectChanges();

      expect(inputElement.type).toBe('password');
    });
  });

  describe('comportamenti base con type search', () => {
    let fixture: ComponentFixture<SearchInputComponent>;
    let inputDebugElement: DebugElement;
    let inputNativeElement: HTMLElement;
    let inputInstance: FormInputComponent;
    let testComponent: SearchInputComponent;
    let inputElement: HTMLInputElement;
    let spanElement: HTMLSpanElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SearchInputComponent);
      fixture.detectChanges();

      inputDebugElement = fixture.debugElement.query(By.directive(FormInputComponent));
      inputNativeElement = inputDebugElement.nativeElement;
      inputInstance = inputDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>inputNativeElement.querySelector('input');
      spanElement = <HTMLLabelElement>inputNativeElement.querySelector('span');
    });

    it('dovrebbe poter sfruttare la funzionalità di autocomplete', () => {
      const newText = 'pr';
      sendInput(fixture, inputElement, newText);
      inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

      fixture.detectChanges();

      const autocompleteList = <HTMLUListElement>inputNativeElement.querySelector('ul');
      const autocompleteEntries = Array.from(autocompleteList.querySelectorAll('li'));
      autocompleteEntries[0].click();

      fixture.detectChanges();

      expect(inputElement.value).toBe('prova');
    });
  });
});
