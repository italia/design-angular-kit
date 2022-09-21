import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/** Componente per testare una singola barra di avanzamento. */
@Component({
  template: `
  <div>
    <it-progress-bar [min]="min" [max]="max" [value]="value"
      [label]="label" [height]="height" [color]="bgColor">
    </it-progress-bar>
  </div>`
})
class SingleProgressBarComponent {
  min = 0;
  max = 200;
  value = 150;
  label = 'Simple progress bar';
  height = 40;
  bgColor = '';
}

describe('ProgressBarComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgressBarComponent,
        SingleProgressBarComponent
      ]
    })
    .compileComponents();
  }));

  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SingleProgressBarComponent>;
    let progressBarDebugElement: DebugElement;
    let progressBarNativeElement: HTMLElement;
    let progressBarInstance: ProgressBarComponent;
    let testComponent: SingleProgressBarComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleProgressBarComponent);
      fixture.detectChanges();

      progressBarDebugElement = fixture.debugElement.query(By.directive(ProgressBarComponent));
      progressBarNativeElement = progressBarDebugElement.nativeElement;
      progressBarInstance = progressBarDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('dovrebbe mostrare una semplice barra di avanzamento con valori personalizzati', () => {
      expect(progressBarInstance.valuePercentage()).toBe(75);

      testComponent.min = 10;
      testComponent.max = 110;
      testComponent.value = 60;
      fixture.detectChanges();

      expect(progressBarInstance.valuePercentage()).toBe(50);

      testComponent.min = -50;
      testComponent.max = 50;
      testComponent.value = -25;
      fixture.detectChanges();

      expect(progressBarInstance.valuePercentage()).toBe(25);
    });

    it('dovrebbe mostrare una barra di avanzamento con etichetta', () => {
      expect(progressBarInstance.label).toBe('Simple progress bar');

      testComponent.label = 'Another simple progress bar';
      fixture.detectChanges();

      expect(progressBarInstance.label).toBe('Another simple progress bar');

      testComponent.label = 'Yet another simple progress bar';
      fixture.detectChanges();

      expect(progressBarInstance.label).toBe('Yet another simple progress bar');
    });

    it('dovrebbe mostrare una barra di avanzamento con diversi sfondi', () => {
      expect(progressBarInstance.color).toBe('primary');

      testComponent.bgColor = 'info';
      fixture.detectChanges();

      expect(progressBarInstance.color).toBe('info');

      testComponent.bgColor = 'success';
      fixture.detectChanges();

      expect(progressBarInstance.color).toBe('success');

      testComponent.bgColor = 'warning';
      fixture.detectChanges();

      expect(progressBarInstance.color).toBe('warning');

      testComponent.bgColor = 'danger';
      fixture.detectChanges();

      expect(progressBarInstance.color).toBe('danger');
    });
  });
});
