import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAttributeToken } from '@angular/core';
import { tb_base } from 'projects/design-angular-kit/src/test';
import { TransferStore } from '../store/transfer.store';
import { ItTransferListComponent } from './transfer-list.component';

describe('ItTransferListComponent', <T>() => {
  let component: ItTransferListComponent<T>;
  let fixture: ComponentFixture<ItTransferListComponent<T>>;

  beforeEach(async () => {
    const { imports, providers } = tb_base;

    await TestBed.configureTestingModule({
      imports,
      providers: [
        ...providers,
        TransferStore,
        { provide: new HostAttributeToken('title'), useValue: 'title' },
        { provide: new HostAttributeToken('sourceType'), useValue: 'source' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferListComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
