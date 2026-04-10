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

  it('should render changer dropdown items as direct <li> children of <ul>', () => {
    fixture.componentRef.setInput('currentPage', 0);
    fixture.componentRef.setInput('pageNumbers', 10);
    fixture.componentRef.setInput('currentChanger', 10);
    fixture.componentRef.setInput('changerValues', [10, 25, 50]);
    fixture.detectChanges();

    const dropdownUl = fixture.nativeElement.querySelector('ul.link-list');
    if (dropdownUl) {
      const directChildren = Array.from(dropdownUl.children) as HTMLElement[];
      const nonLiChildren = directChildren.filter((el: HTMLElement) => el.tagName.toLowerCase() !== 'li');
      expect(nonLiChildren.length).toBe(0, 'All direct children of <ul> must be <li> elements');
    }
  });
});
