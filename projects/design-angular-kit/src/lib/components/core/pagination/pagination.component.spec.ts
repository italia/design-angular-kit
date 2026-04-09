import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPaginationComponent } from './pagination.component';
import { tb_base } from '../../../../test';

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

  it('should render host as display:block to allow margin utilities (#570, #571)', () => {
    const host = fixture.nativeElement as HTMLElement;
    const computed = getComputedStyle(host);
    expect(computed.display).toBe('block');
  });
});
