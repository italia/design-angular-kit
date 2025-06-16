import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSortHeaderComponent } from './sort-header.component';
import { ItSortDirective } from '../sort.directive';
import { tb_base } from '../../../../../../test';

describe('ItSortHeaderComponent', () => {
  let component: ItSortHeaderComponent;
  let fixture: ComponentFixture<ItSortHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItSortHeaderComponent],
      providers: [{ provide: ItSortDirective }, ...tb_base.providers],
    });
    fixture = TestBed.createComponent(ItSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
