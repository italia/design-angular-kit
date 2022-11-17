import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItButtonDirective } from './button.directive';

/** Componente per testare una singola button. */
@Component({
  template: `
  <div>
    <button [disabled]="disabled" [itButton]="color" [outline]="outline" (click)="onClick()">
      {{label}}
    </button>
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

describe('ButtonDirective', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ItButtonDirective,
        SingleButtonComponent,
      ]
    });

    TestBed.compileComponents();
  }));


  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SingleButtonComponent>;
    let buttonDebugElement: DebugElement;
    let buttonNativeElement: HTMLElement;
    let buttonInstance: ItButtonDirective;
    let testComponent: SingleButtonComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleButtonComponent);
      fixture.detectChanges();

      buttonDebugElement = fixture.debugElement.query(By.directive(ItButtonDirective));
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
      expect(buttonNativeElement.textContent.trim()).toBe('Test Button');
    });

  });

});
