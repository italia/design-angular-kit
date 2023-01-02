import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../../core/button/button.component';
import { IconComponent } from '../../utils/icon/icon.component';
import { BackButtonComponent } from './back-button.component';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonComponent, IconComponent, ButtonComponent]
    })
    .overrideComponent(BackButtonComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deve crearsi', () => {
    expect(component).toBeTruthy();
  });

  it('deve essere di default un bottone', () => {
    expect(component.isLink).toBe(false);
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
    const aElement = fixture.debugElement.query(By.css('a'));
    expect(aElement).toBeFalsy();
  });

  it('deve poter essere un link', () => {
    expect(component.isLink).toBe(false);
    component.isLink = true;
    fixture.detectChanges();
    expect(component.isLink).toBe(true);
    const aElement = fixture.debugElement.query(By.css('a'));
    expect(aElement).toBeTruthy();
  });

  it('il testo deve poter essere rimosso', () => {
    expect(component.showText).toBe(true);
    component.showText = false;
    fixture.detectChanges();
    expect(component.showText).toBe(false);
    const visuallyElement = fixture.debugElement.query(By.css('.visually-hidden'));
    expect(visuallyElement).toBeTruthy();
  });

  it('l\'icona deve poter essere rimossa', () => {
    component.showIcon = false;
    fixture.detectChanges();
    expect(component.showIcon).toBe(false);
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeFalsy();
  });

  it('il click deve triggerare il location.back() se bottone', () => {
    spyOn(component.location, 'back').and.returnValue();
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    expect(component.location.back).toHaveBeenCalled();
  });

  it('il click deve triggerare il location.back() se link', () => {
    spyOn(component.location, 'back').and.returnValue();
    component.isLink = true;
    fixture.detectChanges();
    const aElement = fixture.debugElement.query(By.css('a'));
    aElement.nativeElement.removeAttribute("href");
    fixture.detectChanges();
    aElement.nativeElement.click();
    expect(component.location.back).toHaveBeenCalled();
  });
});