import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { ButtonComponent } from './button.component';

/** Componente per testare una singola button. */
@Component({
  template: `
  <div>
    <it-button [disabled]="disabled" [color]="color" [outline]="outline"
      (click)="onClick()">
      {{label}}
    </it-button>
  </div>`
})
class SingleButtonComponent {
  disabled = false;
  color = 'primary';
  outline = false;
  count = 0;
  label = 'Test Button';

  onClick = () => {
    this.count++;
  }
}

describe('ButtonComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ButtonComponent,
        SingleButtonComponent,
      ]
    });

    TestBed.compileComponents();
  }));


  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SingleButtonComponent>;
    let buttonDebugElement: DebugElement;
    let buttonNativeElement: HTMLElement;
    let buttonInstance: ButtonComponent;
    let testComponent: SingleButtonComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleButtonComponent);
      fixture.detectChanges();

      buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));
      buttonNativeElement = buttonDebugElement.nativeElement;
      buttonInstance = buttonDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('dovrebbe poter essere abilitato e disabilitato', () => {
      expect(buttonInstance.disabled).toBe(false);

      testComponent.disabled = true;
      fixture.detectChanges();

      expect(buttonInstance.disabled).toBe(true);

      testComponent.disabled = false;
      fixture.detectChanges();

      expect(buttonInstance.disabled).toBe(false);
    });

    it('dovrebbe ricevere l\'evento di click', () => {
      expect(testComponent.count).toBe(0);
      fixture.detectChanges();

      buttonNativeElement.click();
      fixture.detectChanges();

      expect(testComponent.count).toBe(1);

      buttonNativeElement.click();
      fixture.detectChanges();

      expect(testComponent.count).toBe(2);
    });

    it('dovrebbe poter cambiare colore', () => {
      expect(testComponent.color).toBe('primary');
      expect(buttonInstance.color).toBe('primary');

      testComponent.color = 'secondary';
      fixture.detectChanges();
      expect(buttonInstance.color).toBe('secondary');
    });

    it('dovrebbe poter cambiare da colorato senza contorno a colorato con contorno', () => {
      expect(testComponent.outline).toBe(false);
      expect(buttonInstance.outline).toBe(false);

      testComponent.outline = true;
      fixture.detectChanges();
      expect(buttonInstance.outline).toBe(true);
    });

    it('dovrebbe generare un id univoco per bottone', () => {
      expect(buttonInstance.id).toMatch(/button-\d+/);
    });

    it('dovrebbe generare un id univoco per bottone', () => {
      expect(buttonNativeElement.textContent.trim()).toBe('Test Button');
    });

  });

});
