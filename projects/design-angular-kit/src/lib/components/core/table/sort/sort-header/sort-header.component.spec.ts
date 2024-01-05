import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderComponent } from './sort-header.component';
import { SortDirective } from '../sort.directive';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;
  let sortDirective: SortDirective = new SortDirective();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SortHeaderComponent,
      ],
      providers: [{ provide: SortDirective, useValue: sortDirective }],
    });
    fixture = TestBed.createComponent(SortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
