import { ItForwardDirective } from './forward.directive';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'it-unit-test',
  template: `
    <a id="firstA" href="#" [itForward]="'#idH3'">first</a>
    <a id="secondA" href="#" [itForward]="refH3">second</a>
    <h3 id="idH3" #refH3>Text H3</h3>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ItForwardDirective],
})
class UnitTestComponent {}

describe('ItForwardDirective', () => {
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    fixture.detectChanges();
    // refH3 is resolved after the first pass: propagate it to the second link
    fixture.detectChanges();
  });

  const scrollOptions = { behavior: 'smooth', block: 'start', inline: 'nearest' };

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(ItForwardDirective)).injector.get(ItForwardDirective);
    expect(directive).toBeTruthy();
  });

  it('should trigger this.document.querySelector(...)?.scrollIntoView() if i pass a string', () => {
    const h3: HTMLElement = fixture.nativeElement.querySelector('#idH3');
    const spy = spyOn(h3, 'scrollIntoView').and.stub();

    const click = new MouseEvent('click', { cancelable: true });
    fixture.debugElement.query(By.css('#firstA')).nativeElement.dispatchEvent(click);

    expect(spy).toHaveBeenCalledOnceWith(scrollOptions as ScrollIntoViewOptions);
    expect(click.defaultPrevented).toBeTrue();
  });

  it('should trigger this.itForward.scrollIntoView() if i pass an HTMLElement', () => {
    const h3: HTMLElement = fixture.nativeElement.querySelector('#idH3');
    const spy = spyOn(h3, 'scrollIntoView').and.stub();

    const click = new MouseEvent('click', { cancelable: true });
    fixture.debugElement.query(By.css('#secondA')).nativeElement.dispatchEvent(click);

    expect(spy).toHaveBeenCalledOnceWith(scrollOptions as ScrollIntoViewOptions);
    expect(click.defaultPrevented).toBeTrue();
  });
});
