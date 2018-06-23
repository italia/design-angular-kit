import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

/** Componente per testare una singola checkbox. */
@Component({
  template: `
  <div>
    <it-checkbox [checked]="isChecked" [label]="label" [disabled]="isDisabled"></it-checkbox>
  </div>`
})
class SingleCheckboxComponent {
  isChecked = false;
  label = 'Simple checkbox';
  isDisabled = false;
}

/** Componente per testare un CheckboxComponent con ngModel. */
@Component({
  template: `
    <it-checkbox [(ngModel)]="isGood" label="Be good"></it-checkbox>
  `,
})
class CheckboxWithNgModleComponent {
  isGood = false;
}

describe('CheckboxComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CheckboxComponent,
        SingleCheckboxComponent,
        CheckboxWithNgModleComponent,
      ]
    });

    TestBed.compileComponents();
  }));


  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SingleCheckboxComponent>;
    let checkboxDebugElement: DebugElement;
    let checkboxNativeElement: HTMLElement;
    let checkboxInstance: CheckboxComponent;
    let testComponent: SingleCheckboxComponent;
    let inputElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleCheckboxComponent);
      fixture.detectChanges();

      checkboxDebugElement = fixture.debugElement.query(By.directive(CheckboxComponent));
      checkboxNativeElement = checkboxDebugElement.nativeElement;
      checkboxInstance = checkboxDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
      labelElement = <HTMLLabelElement>checkboxNativeElement.querySelector('label');
    });

    it('dovrebbe aggiungere e rimuovere lo stato di check', () => {
      expect(checkboxInstance.checked).toBe(false);
      expect(inputElement.checked).toBe(false);

      testComponent.isChecked = true;
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(true);
      expect(inputElement.checked).toBe(true);

      testComponent.isChecked = false;
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(false);
      expect(inputElement.checked).toBe(false);
    });

    it('dovrebbe cambiare il check dell\'elemento nativo quando cambia programmaticamente', () => {
      expect(inputElement.checked).toBe(false);

      checkboxInstance.checked = true;
      fixture.detectChanges();

      expect(inputElement.checked).toBe(true);
    });

    it('dovrebbe cambiare lo stato di check al click', () => {
      expect(checkboxInstance.checked).toBe(false);

      labelElement.click();
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(true);

      labelElement.click();
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(false);
    });

    it('dovrebbe aggiungere e rimuovere lo stato di disabilitazione', () => {
      expect(checkboxInstance.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);

      testComponent.isDisabled = true;
      fixture.detectChanges();

      expect(checkboxInstance.disabled).toBe(true);
      expect(inputElement.disabled).toBe(true);

      testComponent.isDisabled = false;
      fixture.detectChanges();

      expect(checkboxInstance.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);
    });

    it('dovrebbe mantenere immutato lo stato di check al click se disabilitato', () => {
      expect(checkboxInstance.checked).toBe(false);

      testComponent.isDisabled = true;
      fixture.detectChanges();

      checkboxNativeElement.click();
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(false);
    });

    it('dovrebbe generare un id univoco per la checkbox', () => {
      expect(checkboxInstance.inputId).toMatch(/checkbox-\d+/);
      expect(inputElement.id).toBe(checkboxInstance.inputId);
    });

    it('dovrebbe proiettare il contenuto dell\'input "label" nell\'elemento label', () => {
      expect(labelElement.textContent.trim()).toBe('Simple checkbox');
    });
  });

  describe('con ngModel', () => {
    let fixture: ComponentFixture<CheckboxWithNgModleComponent>;
    let checkboxDebugElement: DebugElement;
    let checkboxNativeElement: HTMLElement;
    let checkboxInstance: CheckboxComponent;
    let inputElement: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(CheckboxWithNgModleComponent);
      fixture.detectChanges();

      checkboxDebugElement = fixture.debugElement.query(By.directive(CheckboxComponent));
      checkboxNativeElement = checkboxDebugElement.nativeElement;
      checkboxInstance = checkboxDebugElement.componentInstance;
      inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
    });

    it('dovrebbe avere gli stati pristine, untouched, e valid all\'inizio', fakeAsync(() => {
      flush();

      const checkboxElement = fixture.debugElement.query(By.directive(CheckboxComponent));
      const ngModel = checkboxElement.injector.get<NgModel>(NgModel);

      expect(ngModel.valid).toBe(true);
      expect(ngModel.pristine).toBe(true);
      expect(ngModel.untouched).toBe(true);
    }));

    it('dovrebbe cambiare lo stato di check al click', () => {
      expect(checkboxInstance.checked).toBe(false);

      inputElement.click();
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(true);

      inputElement.click();
      fixture.detectChanges();

      expect(checkboxInstance.checked).toBe(false);
    });
  });
});
