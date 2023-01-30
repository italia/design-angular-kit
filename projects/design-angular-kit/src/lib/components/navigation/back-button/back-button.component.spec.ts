import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonDirective } from '../../core/button/button.directive';
import { IconComponent } from '../../utils/icon/icon.component';
import { BackButtonComponent } from './back-button.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonComponent, IconComponent, ButtonDirective ],
      imports: [ TranslateModule.forRoot() ]
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
    expect(component.buttonStyle).toBe('button');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
    const aElement = fixture.debugElement.query(By.css('a'));
    expect(aElement).toBeFalsy();
  });

  it('deve poter essere un link', () => {
    expect(component.buttonStyle).toBe('button');
    component.buttonStyle = 'link';
    fixture.detectChanges();
    expect(component.buttonStyle).toBe('link');
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
    spyOn(component._location, 'back').and.returnValue();
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    expect(component._location.back).toHaveBeenCalled();
  });

  it('il click deve triggerare il location.back() se link', () => {
    spyOn(component._location, 'back').and.returnValue();
    component.buttonStyle = 'link';
    fixture.detectChanges();
    const aElement = fixture.debugElement.query(By.css('a'));
    aElement.nativeElement.removeAttribute("href");
    fixture.detectChanges();
    aElement.nativeElement.click();
    expect(component._location.back).toHaveBeenCalled();
  });

  it('se passo una callback backFn, al click deve essere lanciata lei', () => {
    component.backFn = () => {};
    component.buttonStyle = 'link';
    fixture.detectChanges();
    spyOn(component, 'backFn');
    const aElement = fixture.debugElement.query(By.css('a'));
    aElement.nativeElement.removeAttribute("href");
    fixture.detectChanges();
    aElement.nativeElement.click();
    expect(component.backFn).toHaveBeenCalled();
  });
});
