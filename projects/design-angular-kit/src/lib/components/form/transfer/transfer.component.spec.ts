import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTransferComponent } from './transfer.component';

describe('ItTransferComponent', () => {
  let component: ItTransferComponent;
  let fixture: ComponentFixture<ItTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTransferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
