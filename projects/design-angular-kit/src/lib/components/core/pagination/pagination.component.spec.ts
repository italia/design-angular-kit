import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItPaginationComponent } from './pagination.component';
import { tb_base } from '../../../../test';

@Component({
  selector: 'it-pagination-ngmodel-host',
  standalone: true,
  imports: [FormsModule, ItPaginationComponent],
  template: `<it-pagination [(ngModel)]="page" [pageNumbers]="10"></it-pagination>`,
})
class ItPaginationNgModelHostComponent {
  page = 0;
}

@Component({
  selector: 'it-pagination-formcontrol-host',
  standalone: true,
  imports: [ReactiveFormsModule, ItPaginationComponent],
  template: `<it-pagination [formControl]="pageCtrl" [pageNumbers]="10"></it-pagination>`,
})
class ItPaginationFormControlHostComponent {
  pageCtrl = new FormControl(0, { nonNullable: true });
}

describe('ItPaginationComponent', () => {
  let component: ItPaginationComponent;
  let fixture: ComponentFixture<ItPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItPaginationComponent — ngModel support (#567)', () => {
  let fixture: ComponentFixture<ItPaginationNgModelHostComponent>;
  let host: ItPaginationNgModelHostComponent;

  beforeEach(async () => {
    const config = { ...tb_base, imports: [...(tb_base.imports || []), ItPaginationNgModelHostComponent] };
    await TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(ItPaginationNgModelHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should render pagination with ngModel-bound page', () => {
    const el: HTMLElement = fixture.nativeElement;
    const activePage = el.querySelector('[aria-current="page"]');
    expect(activePage).toBeTruthy();
    expect(activePage?.textContent?.trim()).toContain('1');
  });

  it('should update ngModel when a page link is clicked', async () => {
    const el: HTMLElement = fixture.nativeElement;
    const pageLinks = el.querySelectorAll('.page-link');
    // Find page "3" link (index varies depending on nav structure)
    let page3Link: HTMLElement | null = null;
    pageLinks.forEach(link => {
      if (link.textContent?.trim() === '3') {
        page3Link = link as HTMLElement;
      }
    });
    expect(page3Link).toBeTruthy();

    page3Link!.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(host.page).toBe(2); // 0-indexed
  });

  it('should update pagination when writeValue is called programmatically', () => {
    // Get the pagination component instance to test CVA directly
    const paginationDebug = fixture.debugElement.query(de => de.componentInstance instanceof ItPaginationComponent);
    const pag = paginationDebug.componentInstance as ItPaginationComponent;

    pag.writeValue(4);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const activePage = el.querySelector('[aria-current="page"]');
    expect(activePage?.textContent?.trim()).toContain('5');
  });
});

describe('ItPaginationComponent — formControl support (#567)', () => {
  let fixture: ComponentFixture<ItPaginationFormControlHostComponent>;
  let host: ItPaginationFormControlHostComponent;

  beforeEach(async () => {
    const config = { ...tb_base, imports: [...(tb_base.imports || []), ItPaginationFormControlHostComponent] };
    await TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(ItPaginationFormControlHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should render pagination bound to formControl', () => {
    const el: HTMLElement = fixture.nativeElement;
    const activePage = el.querySelector('[aria-current="page"]');
    expect(activePage).toBeTruthy();
    expect(activePage?.textContent?.trim()).toContain('1');
  });

  it('should update formControl when a page is clicked', () => {
    const el: HTMLElement = fixture.nativeElement;
    const pageLinks = el.querySelectorAll('.page-link');
    let page2Link: HTMLElement | null = null;
    pageLinks.forEach(link => {
      if (link.textContent?.trim() === '2') {
        page2Link = link as HTMLElement;
      }
    });
    expect(page2Link).toBeTruthy();

    page2Link!.click();
    fixture.detectChanges();

    expect(host.pageCtrl.value).toBe(1); // 0-indexed
  });

  it('should update pagination when formControl value is patched', () => {
    host.pageCtrl.setValue(3);
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const activePage = el.querySelector('[aria-current="page"]');
    expect(activePage?.textContent?.trim()).toContain('4');
  });
});
