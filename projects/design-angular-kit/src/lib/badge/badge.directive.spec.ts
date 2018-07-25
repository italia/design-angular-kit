import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeDirective } from './badge.directive';

@Component({
  template: `
  <span [it-badge]="badgeText" [badgeColor]="color" [isPill]="isPill"></span>
  `
})
class BadgeComponent {
  badgeText = 'Prima';
  color = 'primary';
  isPill = false;
}

@Component({
  template: `
  <span it-badge="testo"></span>
  `
})
class BadgeWithoutColorComponent { }

describe('BadgeDirective', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BadgeComponent,
        BadgeWithoutColorComponent,
        BadgeDirective
      ]
    });

    TestBed.compileComponents();
  }));

  describe('Test di base', () => {
    let fixture: ComponentFixture<BadgeComponent>;
    let debugElement: DebugElement;
    let nativeElement: HTMLSpanElement;
    let testComponent: BadgeComponent;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(BadgeComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      debugElement = fixture.debugElement.query(By.directive(BadgeDirective));
      nativeElement = debugElement.nativeElement;
    }));

    it(`dovrebbe settare la classe badge all'elemento host`, () => {
      expect(nativeElement.classList).toContain('badge');
    });

    it(`dovrebbe cambiare il testo all'interno dell'elemento host se cambia il testo della direttiva`, () => {
      expect(nativeElement.innerText).toBe('Prima');
      testComponent.badgeText = 'Dopo';
      fixture.detectChanges();
      expect(nativeElement.innerText).toBe('Dopo');
    });

    it(`dovrebbe cambiare la classe del colore dell'elemento host se cambia la proprietà badgeColor`, () => {
      expect(nativeElement.classList).toContain('badge-primary');
      testComponent.color = 'danger';
      fixture.detectChanges();
      expect(nativeElement.classList).not.toContain('badge-primary');
      expect(nativeElement.classList).toContain('badge-danger');
    });

    it(`dovrebbe impostare la classe di default all'elemento se la proprietà badgeColor assume un valore non valido`, () => {
      expect(nativeElement.classList).toContain('badge-primary');
      testComponent.color = 'nonvalido';
      fixture.detectChanges();
      expect(nativeElement.classList).not.toContain('badge-primary');
      expect(nativeElement.classList).toContain('badge-light');
    });

    it(`dovrebbe impostare la classe badge-pill all'elemento se la proprietà isPill è true`, () => {
      expect(nativeElement.classList).not.toContain('badge-pill');
      testComponent.isPill = true;
      fixture.detectChanges();
      expect(nativeElement.classList).toContain('badge-pill');
    });
  });

  describe('Test valori di default', () => {
    let fixture: ComponentFixture<BadgeWithoutColorComponent>;
    let debugElement: DebugElement;
    let nativeElement: HTMLSpanElement;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(BadgeWithoutColorComponent);
      fixture.detectChanges();

      debugElement = fixture.debugElement.query(By.directive(BadgeDirective));
      nativeElement = debugElement.nativeElement;
    }));

    it(`dovrebbe settare la classe di badge-light come default sull'elemento host se la proprietà badgeColor non è presente`, () => {
      expect(nativeElement.classList).toContain('badge-light');
    });
  });
});
