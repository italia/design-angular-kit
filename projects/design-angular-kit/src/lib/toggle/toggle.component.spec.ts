import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { ToggleComponent } from './toggle.component';

/** Componente per testare una singola toggle. */
@Component({
  template: `
  <div>
    <it-toggle [checked]="isChecked" [label]="label" [disabled]="isDisabled"></it-toggle>
  </div>`
})
class SingleToggleComponent {
  isChecked = false;
  label = 'Simple toggle';
  isDisabled = false;
}

/** Componente per testare un ToggleComponent con ngModel. */
@Component({
  template: `
    <it-toggle [(ngModel)]="isGood" label="Be good"></it-toggle>
  `,
})
class ToggleWithNgModleComponent {
  isGood = false;
}

describe('ToggleComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ToggleComponent,
        SingleToggleComponent,
        ToggleWithNgModleComponent,
      ]
    });

    TestBed.compileComponents();
  }));


  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SingleToggleComponent>;
    let toggleDebugElement: DebugElement;
    let toggleNativeElement: HTMLElement;
    let toggleInstance: ToggleComponent;
    let testComponent: SingleToggleComponent;
    let inputElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleToggleComponent);
      fixture.detectChanges();

      toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      toggleNativeElement = toggleDebugElement.nativeElement;
      toggleInstance = toggleDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
      inputElement = <HTMLInputElement>toggleNativeElement.querySelector('input');
      labelElement = <HTMLLabelElement>toggleNativeElement.querySelector('label');
    });

    it('dovrebbe aggiungere e rimuovere lo stato di check', () => {
      expect(toggleInstance.checked).toBe(false);
      expect(inputElement.checked).toBe(false);

      testComponent.isChecked = true;
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(true);
      expect(inputElement.checked).toBe(true);

      testComponent.isChecked = false;
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(false);
      expect(inputElement.checked).toBe(false);
    });

    it('dovrebbe cambiare il check dell\'elemento nativo quando cambia programmaticamente', () => {
      expect(inputElement.checked).toBe(false);

      toggleInstance.checked = true;
      fixture.detectChanges();

      expect(inputElement.checked).toBe(true);
    });

    it('dovrebbe cambiare lo stato di check al click', () => {
      expect(toggleInstance.checked).toBe(false);

      labelElement.click();
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(true);

      labelElement.click();
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(false);
    });

    it('dovrebbe aggiungere e rimuovere lo stato di disabilitazione', () => {
      expect(toggleInstance.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);

      testComponent.isDisabled = true;
      fixture.detectChanges();

      expect(toggleInstance.disabled).toBe(true);
      expect(inputElement.disabled).toBe(true);

      testComponent.isDisabled = false;
      fixture.detectChanges();

      expect(toggleInstance.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);
    });

    it('dovrebbe mantenere immutato lo stato di check al click se disabilitato', () => {
      expect(toggleInstance.checked).toBe(false);

      testComponent.isDisabled = true;
      fixture.detectChanges();

      toggleNativeElement.click();
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(false);
    });

    it('dovrebbe generare un id univoco per la toggle', () => {
      expect(toggleInstance.inputId).toMatch(/toggle-\d+/);
      expect(inputElement.id).toBe(toggleInstance.inputId);
    });

    it('dovrebbe proiettare il contenuto dell\'input "label" nell\'elemento label', () => {
      expect(labelElement.textContent.trim()).toBe('Simple toggle');
    });
  });

  describe('con ngModel', () => {
    let fixture: ComponentFixture<ToggleWithNgModleComponent>;
    let toggleDebugElement: DebugElement;
    let toggleNativeElement: HTMLElement;
    let toggleInstance: ToggleComponent;
    let inputElement: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(ToggleWithNgModleComponent);
      fixture.detectChanges();

      toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      toggleNativeElement = toggleDebugElement.nativeElement;
      toggleInstance = toggleDebugElement.componentInstance;
      inputElement = <HTMLInputElement>toggleNativeElement.querySelector('input');
    });

    it('dovrebbe avere gli stati pristine, untouched, e valid all\'inizio', fakeAsync(() => {
      flush();

      const toggleElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const ngModel = toggleElement.injector.get<NgModel>(NgModel);

      expect(ngModel.valid).toBe(true);
      expect(ngModel.pristine).toBe(true);
      expect(ngModel.untouched).toBe(true);
    }));

    it('dovrebbe cambiare lo stato di check al click', () => {
      expect(toggleInstance.checked).toBe(false);

      inputElement.click();
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(true);

      inputElement.click();
      fixture.detectChanges();

      expect(toggleInstance.checked).toBe(false);
    });
  });
});
