import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { Component, DebugElement } from '@angular/core';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import { By } from '@angular/platform-browser';

const URL = 'http://www.google.com';
const ICON = 'it-favorite';
const LABEL = 'Label';


/** Componente per testare un BreadcrumbComponent. */
@Component({
  template: `
  <it-breadcrumb [dark]="isDark" [separator]="separator">
    <it-breadcrumb-item *ngFor="let item of items"
      [link]="item.link" [icon]="item.icon">
      {{item.label}}
    </it-breadcrumb-item>
  </it-breadcrumb>
  `,
})
class SingleBreadcrumbComponent {
  dark = false;
  separator = '/';
  items = [
    { link: URL, icon: ICON, label: LABEL },
    { link: URL, icon: ICON, label: LABEL },
    { link: URL, icon: ICON, label: LABEL },
  ];
}

describe('BreadcrumbComponent', () => {
  let fixture: ComponentFixture<SingleBreadcrumbComponent>;
  let testComponent: SingleBreadcrumbComponent;
  let breadcrumbDebugElement: DebugElement;
  let breadcrumbItemDebugElements: DebugElement[];
  let breadcrumbInstance: BreadcrumbComponent;
  let breadcrumbItemInstances: BreadcrumbItemComponent[];
  let breadcrumbItemLabelElements: HTMLLabelElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        SingleBreadcrumbComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBreadcrumbComponent);
    fixture.detectChanges();

    testComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    breadcrumbDebugElement = fixture.debugElement.query(By.directive(BreadcrumbComponent));
    breadcrumbInstance = breadcrumbDebugElement.injector.get<BreadcrumbComponent>(BreadcrumbComponent);

    breadcrumbItemDebugElements = fixture.debugElement.queryAll(By.directive(BreadcrumbItemComponent));
    breadcrumbItemInstances = breadcrumbItemDebugElements.map(debugEl => debugEl.componentInstance);

    breadcrumbItemLabelElements = breadcrumbItemDebugElements.map(
      debugEl => debugEl.query(By.css('a')).nativeElement
    );
  });

  it('dovrebbe avere un ultimo elemento attivo', () => {
    expect(breadcrumbItemInstances.pop().isLast).toBeTruthy();
  });

  it('dovrebbe poter rilevare cambi di elementi a runtime', () => {
    const lastItem = breadcrumbItemInstances[breadcrumbItemInstances.length - 1];
    expect(lastItem.isLast).toBeTruthy();

    testComponent.items.push({
      icon: '', link: '', label: ''
    });
    fixture.detectChanges();

    breadcrumbItemDebugElements = fixture.debugElement.queryAll(By.directive(BreadcrumbItemComponent));
    breadcrumbItemInstances = breadcrumbItemDebugElements.map(debugEl => debugEl.componentInstance);
    breadcrumbItemLabelElements = breadcrumbItemDebugElements.map(
      debugEl => debugEl.query(By.css('a')).nativeElement
    );

    expect(lastItem.isLast).toBeFalsy();

    const newLastItem = breadcrumbItemInstances[breadcrumbItemInstances.length - 1];
    expect(newLastItem.isLast).toBeTruthy();

    testComponent.items.pop();
    fixture.detectChanges();

    expect(lastItem.isLast).toBeTruthy();
  });

  it('dovrebbe poter cambiare il separatore', () => {
    testComponent.separator = '~';
    fixture.detectChanges();

    expect(breadcrumbInstance.separator).toBe('~');
    let isSeparatorSetforItems = true;
    breadcrumbItemInstances.forEach(
      item => isSeparatorSetforItems = (isSeparatorSetforItems && item.separator === '~')
    );
    expect(isSeparatorSetforItems).toBeTruthy();
  });

});
