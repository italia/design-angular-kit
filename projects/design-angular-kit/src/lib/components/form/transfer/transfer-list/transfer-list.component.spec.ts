import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferListComponent } from './transfer-list.component';

describe('TransferListComponent', () => {
  let component: TransferListComponent;
  let fixture: ComponentFixture<TransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
