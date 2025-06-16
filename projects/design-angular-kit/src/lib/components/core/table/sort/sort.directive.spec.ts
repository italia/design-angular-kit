import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItSortDirective } from './sort.directive';
import { tb_base } from 'projects/design-angular-kit/src/test';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ItSortHeaderComponent } from './sort-header/sort-header.component';
import { ItSortEvent } from '../../../../interfaces/sortable-table';

@Component({
  template: ` <it-table itSort (sortChange)="sortData($event)">
    <ng-container thead>
      <tr>
        <th it-sort-header="name" scope="col">Nome</th>
      </tr>
    </ng-container>

    <ng-container tbody>
      <tr>
        <td>Mario</td>
      </tr>
      <tr>
        <td>Alessandro</td>
      </tr>
      <tr>
        <td>Francesco</td>
      </tr>
    </ng-container>
  </it-table>`,
  imports: [ItSortDirective, ItSortHeaderComponent],
})
class TestComponent {
  sortData(event: ItSortEvent) {
    console.log(event);
  }
}

describe('ItSortDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItSortDirective, ItSortHeaderComponent, TestComponent],
      providers: [{ provide: ItSortDirective }, ...tb_base.providers],
    })
      .overrideComponent(TestComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // all elements with an attached SortDirective
    des = fixture.debugElement.queryAll(By.directive(ItSortHeaderComponent));
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(ItSortDirective);
    expect(directive).toBeTruthy();
  });

  it('should emit sort event', () => {
    const th = des[0].nativeElement as HTMLTableColElement;
    spyOn(component, 'sortData');
    th.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.sortData).toHaveBeenCalledWith({ active: 'name', direction: 'asc' });
  });
});
