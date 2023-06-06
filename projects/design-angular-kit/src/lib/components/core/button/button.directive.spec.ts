import { ItButtonDirective } from './button.directive';
import { Component, DebugElement } from '@angular/core';
import { ButtonColor } from '../../../interfaces/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/** Componente per testare una singola button. */
@Component({
  template: `
  <div>
    <button [disabled]="disabled" [itButton]="color" (click)="onClick()">
      {{label}}
    </button>
  </div>`
})
class SingleButtonComponent {
  disabled = false;
  color: ButtonColor = 'primary';
  count = 0;
  label = 'Test Button';

  onClick = () => {
    this.count++;
  }
}

describe('ItButtonDirective', () => {
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

    it('dovrebbe generare un id univoco per bottone', () => {
      expect(buttonNativeElement.textContent.trim()).toBe('Test Button');
    });

  });

});
