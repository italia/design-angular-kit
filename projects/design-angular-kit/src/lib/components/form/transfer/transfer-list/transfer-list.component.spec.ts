import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTransferListComponent } from './transfer-list.component';

describe('ItTransferListComponent', <T>() => {
  let component: ItTransferListComponent<T>;
  let fixture: ComponentFixture<ItTransferListComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTransferListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferListComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
