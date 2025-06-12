import { ItForwardDirective } from './forward.directive';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'it-unit-test',
  template: `
    <a href="#" [itForward]="'idH3'">first</a>
    <a href="#" [itForward]="refH3">second</a>
    <h3>Text H3</h3>
  `,
  standalone: false,
})
class UnitTestComponent {
  @ViewChildren(ItForwardDirective) directives: QueryList<ItForwardDirective>;
}

describe('ItForwardDirective', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [ItForwardDirective],
      providers: [{ provide: ItForwardDirective }],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = TestBed.inject(ItForwardDirective);
    expect(directive).toBeTruthy();
  });

  it('should trigger this.document.querySelector(...)?.scrollIntoView() if i pass a string', () => {
    component.directives.changes.subscribe(() => {
      spyOn(
        component.directives.first['document'].querySelector(<string>component.directives.first.itForward),
        'scrollIntoView'
      ).and.returnValue();
      const aElement = fixture.debugElement.query(By.css('#firstA'));
      aElement.nativeElement.click();
      expect(
        component.directives.first['document'].querySelector(<string>component.directives.first.itForward).scrollIntoView
      ).toHaveBeenCalled();
    });
  });

  it('should trigger this.itForward.scrollIntoView() if i pass an HTMLElement', async () => {
    component.directives.changes.subscribe(() => {
      const itForward = <HTMLElement>component.directives.last.itForward;
      spyOn(itForward, 'scrollIntoView').and.returnValue();
      const aElement = fixture.debugElement.query(By.css('#secondA'));
      aElement.nativeElement.click();
      expect(itForward.scrollIntoView).toHaveBeenCalled();
    });
  });
});
