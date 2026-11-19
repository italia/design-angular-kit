import { Component, ViewChildren, QueryList } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItForwardDirective } from './forward.directive';

@Component({
  selector: 'it-unit-test',
  template: `
    <a id="firstA" href="#" [itForward]="'#idH3'">first</a>
    <a id="secondA" href="#" [itForward]="h3">second</a>
    <h3 id="idH3" #h3>Text H3</h3>
  `,
  imports: [ItForwardDirective],
})
class UnitTestComponent {
  @ViewChildren(ItForwardDirective) directives!: QueryList<ItForwardDirective>;
}

describe('ItForwardDirective', () => {
  let fixture: ComponentFixture<UnitTestComponent>;
  let h3: HTMLElement;

  beforeEach(async () => {
    // jsdom does not implement scrollIntoView
    Element.prototype.scrollIntoView = () => undefined;

    await TestBed.configureTestingModule({ imports: [UnitTestComponent] }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    fixture.detectChanges();
    h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance.directives).toHaveLength(2);
  });

  it('should call document.querySelector(...).scrollIntoView() if a selector string is passed', () => {
    const scrollSpy = vi.spyOn(h3, 'scrollIntoView');
    fixture.debugElement.query(By.css('#firstA')).nativeElement.click();
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  });

  it('should call itForward.scrollIntoView() if an HTMLElement is passed', () => {
    const scrollSpy = vi.spyOn(h3, 'scrollIntoView');
    fixture.debugElement.query(By.css('#secondA')).nativeElement.click();
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  });

  it('should prevent the default anchor navigation', () => {
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    fixture.debugElement.query(By.css('#firstA')).nativeElement.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });
});
