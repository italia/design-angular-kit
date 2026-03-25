import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTabContainerComponent } from './tab-container.component';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { tb_base } from '../../../../../test';

@Component({
  selector: 'it-test-single-pane',
  template: `
    <it-tab-container [singlePane]="true">
      <it-tab-item label="Tab 1" [active]="true"></it-tab-item>
      <it-tab-item label="Tab 2"></it-tab-item>
      <p class="shared-content">Shared content for all tabs</p>
    </it-tab-container>
  `,
  imports: [ItTabContainerComponent, ItTabItemComponent],
})
class SinglePaneHostComponent {}

describe('ItTabContainerComponent', () => {
  let component: ItTabContainerComponent;
  let fixture: ComponentFixture<ItTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept singlePane input', () => {
    component.singlePane = true;
    expect(component.singlePane).toBeTruthy();
  });
});

describe('ItTabContainerComponent (singlePane)', () => {
  let fixture: ComponentFixture<SinglePaneHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base as { imports: unknown[] }).imports, SinglePaneHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePaneHostComponent);
    fixture.detectChanges();
  });

  it('should render shared content via ng-content', () => {
    const el: HTMLElement = fixture.nativeElement;
    const shared = el.querySelector('.shared-content');
    expect(shared).toBeTruthy();
    expect(shared?.textContent?.trim()).toBe('Shared content for all tabs');
  });

  it('should render tab headers', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('.nav-link');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toContain('Tab 1');
    expect(links[1].textContent?.trim()).toContain('Tab 2');
  });

  it('should render only one tab-pane (the single shared pane)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const panes = el.querySelectorAll('.tab-pane');
    expect(panes.length).toBe(1);
  });

  it('should have the single pane always active and visible', () => {
    const el: HTMLElement = fixture.nativeElement;
    const pane = el.querySelector('.tab-pane');
    expect(pane?.classList.contains('active')).toBe(true);
    expect(pane?.classList.contains('show')).toBe(true);
  });
});
