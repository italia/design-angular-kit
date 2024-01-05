import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortDirection } from './sort-direction';
import { ItSortable, Sort, SortDirective } from './sort.directive';
import { tb_base } from 'projects/design-angular-kit/src/test';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SortHeaderComponent } from './sort-header/sort-header.component';

@Component({
  standalone: true,
  template: `  <it-table itSort (itSortChange)="sortData($event)" >
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
  imports: [SortDirective, SortHeaderComponent],
})
class TestComponent {
  sortData(event: Sort) {
  }
}

describe('SortDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDirective, SortHeaderComponent, TestComponent, TranslateModule.forRoot()],
      providers: tb_base.providers
    })
    .overrideComponent(TestComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // all elements with an attached SortDirective
    des = fixture.debugElement.queryAll(By.directive(SortHeaderComponent));

  });

  it('should create an instance', () => {
    const directive = new SortDirective();
    expect(directive).toBeTruthy();
  });

  it('should emit sort event', () => {
    const th = des[0].nativeElement as HTMLTableColElement;
    spyOn(component, "sortData");
    th.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.sortData).toHaveBeenCalledWith({active: "name", direction: "asc"});
  });
});
