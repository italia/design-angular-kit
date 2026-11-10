import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ItTabContainerComponent } from './tab-container.component';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { tb_base } from '../../../../../test';

@Component({
  selector: 'it-test-fullheight-host',
  standalone: true,
  imports: [ItTabContainerComponent, ItTabItemComponent],
  template: `
    <div style="height:500px">
      <it-tab-container [vertical]="true" [fullHeight]="true">
        <it-tab-item label="Tab 1" [active]="true"><p>Content 1</p></it-tab-item>
        <it-tab-item label="Tab 2"><p>Content 2</p></it-tab-item>
      </it-tab-container>
    </div>
  `,
})
class FullHeightHostComponent {}

@Component({
  selector: 'it-test-fullheight-horizontal-host',
  standalone: true,
  imports: [ItTabContainerComponent, ItTabItemComponent],
  template: `
    <div style="height:400px">
      <it-tab-container [fullHeight]="true">
        <it-tab-item label="Tab A" [active]="true"><p>Content A</p></it-tab-item>
        <it-tab-item label="Tab B"><p>Content B</p></it-tab-item>
      </it-tab-container>
    </div>
  `,
})
class FullHeightHorizontalHostComponent {}

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
});

describe('ItTabContainerComponent fullHeight (vertical)', () => {
  let fixture: ComponentFixture<FullHeightHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...tb_base.imports, FullHeightHostComponent],
    })
      .overrideComponent(ItTabContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FullHeightHostComponent);
    fixture.detectChanges();
  });

  it('should apply height:100% on the host element', () => {
    const host: HTMLElement = fixture.nativeElement.querySelector('it-tab-container');
    expect(host.style.height).toBe('100%');
  });

  it('should apply d-flex class on the host element', () => {
    const host: HTMLElement = fixture.nativeElement.querySelector('it-tab-container');
    expect(host.classList.contains('d-flex')).toBeTrue();
  });

  it('should NOT apply flex-column on vertical layout host', () => {
    const host: HTMLElement = fixture.nativeElement.querySelector('it-tab-container');
    expect(host.classList.contains('flex-column')).toBeFalse();
  });

  it('should apply h-100 on the .row wrapper', () => {
    const row: HTMLElement = fixture.nativeElement.querySelector('.row');
    expect(row).toBeTruthy();
    expect(row.classList.contains('h-100')).toBeTrue();
  });

  it('should apply h-100 on the nav-tabs-vertical ul', () => {
    const ul: HTMLElement = fixture.nativeElement.querySelector('ul.nav-tabs-vertical');
    expect(ul).toBeTruthy();
    expect(ul.classList.contains('h-100')).toBeTrue();
  });

  it('should apply flex-grow-1 on the tab-content wrapper', () => {
    const tabContent: HTMLElement = fixture.nativeElement.querySelector('.tab-content');
    expect(tabContent).toBeTruthy();
    expect(tabContent.classList.contains('flex-grow-1')).toBeTrue();
  });

  it('should apply flex-grow-1 on the active tab pane', () => {
    const activePane: HTMLElement = fixture.nativeElement.querySelector('.tab-pane.active');
    expect(activePane).toBeTruthy();
    expect(activePane.classList.contains('flex-grow-1')).toBeTrue();
  });
});

describe('ItTabContainerComponent fullHeight (horizontal)', () => {
  let fixture: ComponentFixture<FullHeightHorizontalHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...tb_base.imports, FullHeightHorizontalHostComponent],
    })
      .overrideComponent(ItTabContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FullHeightHorizontalHostComponent);
    fixture.detectChanges();
  });

  it('should apply height:100% on horizontal fullHeight host', () => {
    const host: HTMLElement = fixture.nativeElement.querySelector('it-tab-container');
    expect(host.style.height).toBe('100%');
  });

  it('should apply flex-column on horizontal fullHeight host', () => {
    const host: HTMLElement = fixture.nativeElement.querySelector('it-tab-container');
    expect(host.classList.contains('flex-column')).toBeTrue();
  });

  it('should apply flex-grow-1 on the outer wrapper div', () => {
    const wrapper: HTMLElement = fixture.nativeElement.querySelector('it-tab-container > div');
    expect(wrapper).toBeTruthy();
    expect(wrapper.classList.contains('flex-grow-1')).toBeTrue();
  });

  it('should apply flex-grow-1 + d-flex + flex-column on tab-content', () => {
    const tabContent: HTMLElement = fixture.nativeElement.querySelector('.tab-content');
    expect(tabContent).toBeTruthy();
    expect(tabContent.classList.contains('flex-grow-1')).toBeTrue();
    expect(tabContent.classList.contains('d-flex')).toBeTrue();
    expect(tabContent.classList.contains('flex-column')).toBeTrue();
  });
});
