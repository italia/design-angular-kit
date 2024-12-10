import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tb_base } from 'projects/design-angular-kit/src/test';
import { TransferStore } from './store/transfer.store';
import { ItTransferComponent } from './transfer.component';

describe('ItTransferComponent', () => {
  let component: ItTransferComponent;
  let fixture: ComponentFixture<ItTransferComponent>;

  beforeEach(async () => {
    const { imports, providers } = tb_base;

    await TestBed.configureTestingModule({
      imports,
      providers: [...providers, TransferStore],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
